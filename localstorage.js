let cash;
let casinoRed = "#B30000";
let casinoGold = "#EFBF04";
let casinoBlack = "black";

function setup() {
  clearStorage('casino_cash');
  cash = 100;
  storeItem('casino_cash', cash);
}