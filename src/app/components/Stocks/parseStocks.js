export const recieveStocksArray = (data: Array) => {
  return shuffle(cleanseData(parseData(data)));
}

// TODO: accept "0.00" inputs
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
    const percentage = parsePercentage(price, change);
    return [...acc, {
      title,
      price,
      change,
      percentage
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

const parsePercentage = (total, difference) => {
  return ((Number(difference) / Number(total)) * 100).toPrecision(4) + '%';
}

// https://stackoverflow.com/a/6274381/2368141
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}