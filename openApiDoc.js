exports.openApiDoc = {
  "openapi": "3.0.1",
  "info": {
    "version": "1.3.0",
    "title": "Stocks",
    "description": "Stock operations API"
  },
  "servers": [
    {
      "url": "http://localhost:3000/",
      "description": "Local server"
    },
    {
      "url": "https://imaginary-stocks.herokuapp.com",
      "description": "Production server"
    }
  ],
  "tags": [
    {
      "name": "Stock operations"
    },
    {
      "name": "Category operations"
    }
  ],
  "paths": {
    "/stocks": {
      "get": {
        "tags": [
          "Stock operations"
        ],
        "description": "Returns all stocks",
        "operationId": "list_all_stocks",
        "responses": {
          "200": {
            "description": "Stocks were obtained"
          }
        }
      }
    },
    "/stocks/{stockTicker}": {
      "get": {
        "tags": [
          "Stock operations"
        ],
        "description": "Returns a stock based on ticker code",
        "operationId": "read_a_stock",
        "responses": {
          "200": {
            "description": "stock response"
          }
        }
      },
      "parameters": [
        {
          "name": "stockTicker",
          "in": "path",
          "description": "Ticker code of the wanted stock",
          "required": true
        }
      ]
    },
    "/stocks/{stockTicker}/buyprice": {
      "get": {
        "tags": [
          "Stock operations"
        ],
        "description": "Returns buy price of stock based on ticker code",
        "operationId": "get_buy_price",
        "responses": {
          "200": {
            "description": "stock buy price response"
          }
        }
      },
      "parameters": [
        {
          "name": "stockTicker",
          "in": "path",
          "description": "Ticker code of the wanted stock",
          "required": true
        }
      ]
    },
    "/stocks/{stockTicker}/sellprice": {
      "get": {
        "tags": [
          "Stock operations"
        ],
        "description": "Returns sell price of stock based on ticker code",
        "operationId": "get_sell_price",
        "responses": {
          "200": {
            "description": "stock sell price response"
          }
        }
      },
      "parameters": [
        {
          "name": "stockTicker",
          "in": "path",
          "description": "Ticker code of the wanted stock",
          "required": true
        }
      ]
    },
    "/stocks/{stockTicker}/stockname": {
      "get": {
        "tags": [
          "Stock operations"
        ],
        "description": "Returns stock name of stock based on ticker code",
        "operationId": "get_stock_name",
        "responses": {
          "200": {
            "description": "stock name response"
          }
        }
      },
      "parameters": [
        {
          "name": "stockTicker",
          "in": "path",
          "description": "Ticker code of the wanted stock",
          "required": true
        }
      ]
    },
    "/categories": {
      "get": {
        "tags": [
          "Category operations"
        ],
        "description": "Returns all categories of all the stocks have",
        "operationId": "get_categories",
        "responses": {
          "200": {
            "description": "Categories were obtained"
          }
        }
      }
    },
    "/categories/{categoryName}": {
      "get": {
        "tags": [
          "Category operations"
        ],
        "description": "Returns all stocks in the given category",
        "operationId": "get_stocks_by_category",
        "responses": {
          "200": {
            "description": "Stocks in given category were obtained"
          }
        }
      },
      "parameters": [
        {
          "name": "categoryName",
          "in": "path",
          "description": "Category namee of the wanted stocks",
          "required": true
        }
      ]
    },
    "/randomstocks/{amount}": {
      "get": {
        "tags": [
          "Stock operations"
        ],
        "description": "Returns random stocks by the amount of given number",
        "operationId": "get_random_stocks",
        "responses": {
          "200": {
            "description": "Random stocks were obtained"
          }
        }
      },
      "parameters": [
        {
          "name": "amount",
          "in": "path",
          "description": "Amount of the random stocks wanted",
          "required": true
        }
      ]
    }
  }
}