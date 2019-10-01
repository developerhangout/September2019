const JSON_STOCKS = require("../../assets/stocks");

/**
 * randomly increases or decreases current prices by 2%
 */
change_stock_prices = (req,res) => {
  JSON_STOCKS["JSON_STOKCS"]["stocks"].forEach(stock => {
    stock["buyPrice"] += Math.round(Math.random()*(stock["buyPrice"]*0.02) * (Math.random() < 0.5 ? -1 : 1));
    stock["sellPrice"] += Math.round(Math.random()*(stock["sellPrice"]*0.02) * (Math.random() < 0.5 ? -1 : 1));
  })
}

/**
 * calls change_stock_prices function to update prices
 * every minute
 */
setInterval(change_stock_prices, 60000)

/**
 * returns a json including all stocks
 */
exports.list_all_stocks = (req,res) => {
  res.json(JSON_STOCKS["JSON_STOKCS"]["stocks"])
}

/**
 * returns a json includes one stock according
 * to given ticker code
 */
exports.read_a_stock = (req, res) => {
  JSON_STOCKS["JSON_STOKCS"]["stocks"].forEach(stock => {
    if (stock["ticker"] === req.params.stockTicker) {
      res.json(stock)
    }
  })
}

/**
 * returns buy price of stock that has the given ticker code
 */
exports.get_buy_price = (req, res) => {
  JSON_STOCKS["JSON_STOKCS"]["stocks"].forEach(stock => {
    if (stock["ticker"] === req.params.stockTicker) {
      res.json(stock["buyPrice"])
    }
  })
}

/**
 * returns sell price of stock that has the given ticker code
 */
exports.get_sell_price = (req, res) => {
  JSON_STOCKS["JSON_STOKCS"]["stocks"].forEach(stock => {
    if (stock["ticker"] === req.params.stockTicker) {
      res.json(stock["sellPrice"])
    }
  })
}


/**
 * returns name of stock that has the given ticker code
 */
exports.get_stock_name = (req, res) => {
  JSON_STOCKS["JSON_STOKCS"]["stocks"].forEach(stock => {
    if (stock["ticker"] === req.params.stockTicker) {
      res.json(stock["name"])
    }
  })
}

/**
 * returns categories that all the categories have
 */
exports.get_categories = (req,res) => {
  categories_arr = []
  JSON_STOCKS["JSON_STOKCS"]["stocks"].forEach(stock => {
    if (categories_arr.indexOf(stock["category"]) === -1) {
      categories_arr.push(stock["category"])
    }
  })
  res.json(categories_arr)
}

/**
 * returns stocks that are in the given category
 */
exports.get_stocks_by_category = (req, res) => {
  stocks_arr = [];
  JSON_STOCKS["JSON_STOKCS"]["stocks"].forEach(stock => {
    if (stock["category"] === req.params.categoryName) {
      stocks_arr.push(stock);
    }
  })
  res.json(stocks_arr)
}

/**
 * returns random amount of stocks based on given number
 */
exports.get_random_stocks = (req, res) => {
  random_stocks_arr = []
  random_index_arr = []
  for (let i = 0; i < req.params.amount; i++) {
    random_index_arr.push(Math.floor(Math.random() * 25))
  }
  for (const idx of random_index_arr) {
    random_stocks_arr.push(JSON_STOCKS["JSON_STOKCS"]["stocks"][idx])
  }
  res.json(random_stocks_arr)
}