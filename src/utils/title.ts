export function extractTitles(data: any) {
    return data.map((item: { title: any; titleCard: { title: any; }; }) => {
      if (item.title) {
        return item.title;
      }
      else if (item.titleCard && item.titleCard.title) {
        return item.titleCard.title;
      }
      else {
        return null;
      }
    });
  }
  
  const titles = items.flatMap(item => {
    if (item.coreconcept) {
      return extractTitles(item.coreconcept);
    }
    else if (item.elements) {
      return extractTitles(item.elements);
    }
    else if (item.criteria) {
      return extractTitles(item.criteria);
    }
    else {
      return [];
    }
  });
  
  console.log(titles);
  