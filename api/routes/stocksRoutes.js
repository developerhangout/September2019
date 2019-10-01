module.exports = (app) => {
  var stocks = require('../controllers/stocksController');
  
  // stocks Routes
  app.route('/stocks')
    .get(stocks.list_all_stocks)

  app.route('/stocks/:stockTicker')
    .get(stocks.read_a_stock)

  app.route('/stocks/:stockTicker/buyprice')
    .get(stocks.get_buy_price)

  app.route('/stocks/:stockTicker/sellprice')
    .get(stocks.get_sell_price)

  app.route('/stocks/:stockTicker/stockname')
    .get(stocks.get_stock_name)

  app.route('/categories')
    .get(stocks.get_categories)

  app.route('/categories/:categoryName')
    .get(stocks.get_stocks_by_category)

  app.route('/randomstocks/:amount')
    .get(stocks.get_random_stocks)

};
