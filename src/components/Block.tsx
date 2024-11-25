import {useFilter} from "@/hooks/useFilter";
import {Entries} from "@/types/interfaces";
import {calculateRowAndColNumber} from "@/utils/canvas";
import {useMemo} from "react";
import dynamic from 'next/dynamic'
import Header from "./cards/Header";

const CardCanvas = dynamic(() => import('./cards/Canvas'), {ssr: false})

const MAX_COL_SPAN = 5;
const MIN_COL_SPAN = 2;

interface Props {
    title: string;
    description?: string;
    entries: Entries;
    minifiedHeader?: boolean;
    maxColumns?: number;
}

const Block = ({title, description, entries, minifiedHeader, maxColumns}: Props) => {

    const {rows, columns} = useMemo(
        () => calculateRowAndColNumber(entries, maxColumns || MAX_COL_SPAN),
        [entries]
    );

    const colSpan = useMemo(() => {
        return MAX_COL_SPAN
        // if (columns < MIN_COL_SPAN) return MIN_COL_SPAN;
        // return columns
    }, [entries, columns]);

    const rowSpan = useMemo(() => Math.max(rows + 1, 3), [rows])

    const filteredEntries = useFilter(entries);

    return (
        <div
            className={`col-span-${colSpan} row-span-${rowSpan} p-8 bg-gray-100 border-2 border-dashed border-gray-400 `}
        >
            <Header
                title={title}
                description={description}
                minified={minifiedHeader}
            />
            <div className="m-auto">
                <CardCanvas
                    data={filteredEntries}
                    blockHeight={rowSpan}
                    columns={columns}
                />
            </div>
        </div>
    );
};

export default Block;
