let cash;

function setup() {
  clearStorage('casino_cash');
  cash = 100;
  storeItem('casino_cash', cash);
}