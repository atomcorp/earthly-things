export type DataType = {
  "id": {
    "$t": string
  },
  "updated": {
    "$t": string
  },
  "category": [
    {
      "scheme": string,
      "term": string
    }
  ],
    "title": {
      "type": string,
      "$t": string
  },
  "content": {
    "type": string,
    "$t": string
  },
  "link": [
    {
      "rel": string,
      "type": string,
      "href": string
    }
  ]
}

export type StocksType = Array<StockType>

export type StockType = {
  change: string,
  percentage: string,
  price: string,
  title: string,
  id: number
}

export type StateType = {
  data: StocksType,
  activeStock: ActiveStocksType,
  cache: StockCache
}

export type StockCache = {
  [id: string]: HTMLElement
}

export type ActiveStocksType = Array<number>;

export type StockElementType = HTMLDivElement;

