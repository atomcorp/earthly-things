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
  title: string
}

