"use strict";
/**
 * @param {Object} result
 * @return {Array}
 */
module.exports = class DataTransform {
  constructor(result) {
    this.result = keyToValue(result);
  }

  dataSort(dataOrder) {
    this.result.sort((x, y) => {
      const xkey = dataOrder.indexOf(Object.values(x)[0]);
      const ykey = dataOrder.indexOf(Object.values(y)[0]);
      return xkey - ykey;
    });
    return this;
  }
};
function keyToValue(data) {
  return Object.keys(data).map(i => ({
    key: i,
    value: data[i]
  }));
}
