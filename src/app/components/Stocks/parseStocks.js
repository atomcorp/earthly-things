export const recieveStocksArray = (data: Array) => {
  return cleanseData(parseData(data));
}

const cleanseData = (data) => {
  return data.reduce((acc, val) => {
    if (
      !val.title ||
      val.price === "0" ||
      val.change === "#N/A"
    ) {
      return [...acc];
    }
    return [...acc, val];
  }, []);
}

const parseData = (data) => {
  return data.reduce((acc, val) => {
    const title = parseName(val.title['$t']);
    const price = parsePrice(val.content['$t']);
    const change = parseChange(val.content['$t']);
    return [...acc, {
      title,
      price,
      change
    }]
  }, []);
}

const parseName = (name: string) => {
  return name.split('.', 1)[0];
}

const parsePrice = (string: string) => {
  return string.slice(
    (string.lastIndexOf('price: ') + 7), 
    string.lastIndexOf(', change')
  );
}

const parseChange = (string: string) => {
  return string.slice( 
    string.lastIndexOf('change: ') + 8
  );
}
