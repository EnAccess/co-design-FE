const csvFilePath = './public/data.csv'
const csv = require('csvtojson')
const groupBy = require("lodash.groupby");
const fs = require('fs')
const relations = require('./public/output.json')

function removeEmptyFields(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v));
}

function parseTags(tags) {
    const list = tags.split(';').map(el => el.trim()).filter((item) => item).map(line => {
        const [key, value] = line.split(':')
        return {
            key: key.trim(),
            value: value?.trim() || value
        }
    })
    const groupedList = groupBy(list, 'key');

    const output = {}

    Object.keys(groupedList).forEach(key => {
        output[key] = groupedList[key].map(item => item.value)
    });
    return output;
}


async function generateOutputJson() {
    // load relationships from json
    const relatedData = new Map();
    relations.forEach((item) => {
        relatedData.set(item['Key'], item);
    });

    const jsonArray = await csv().fromFile(csvFilePath)
    const output = jsonArray.map((item) => {
        const manualTags = parseTags(item['Manual Tags'] || "")
        const autoTags = parseTags(item['Automatic Tags'] || "")
        const relations = relatedData.get(item['Key'])?.PARSED_RELATES_TO || [];
        // const tags = relatedData.get(item['Key'])?.PARSED_MANUAL_TAGS || [];
        const level = manualTags['CO-DESIGN LEVEL'] || [];
        delete manualTags['CO-DESIGN LEVEL'];

        manualTags['CO_DESIGN_LEVEL'] = level;
        const coreToolKits = manualTags['CORE TOOLKIT'];
        if(coreToolKits) {
        manualTags['CORE_TOOLKIT'] = coreToolKits;
        delete manualTags['CORE TOOLKIT'];
        }
        return {
            ...removeEmptyFields(item),
            'PARSED_MANUAL_TAGS': manualTags,
            'PARSED_AUTOMATIC_TAGS': autoTags,
            'PARSED_RELATES_TO': relations
        }
    });
    fs.writeFileSync('./public/data.json', JSON.stringify(output, null, 2))
}

generateOutputJson()
