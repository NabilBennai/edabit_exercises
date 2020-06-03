function convertToDecimal(perc) {
  return perc.map((x) => parseFloat(x.replace("%", "")) / 100);
}
