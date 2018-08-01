# Maslak

![alt text](https://github.com/gen-tech/maslak/blob/master/logo.png "Maslak-Logo")

[![Travis](https://travis-ci.org/gen-tech/maslak.svg?branch=master)](https://travis-ci.org/gen-tech/maslak)
[![Coverage Status](https://coveralls.io/repos/github/gen-tech/maslak/badge.svg?branch=master)](https://coveralls.io/github/gen-tech/maslak?branch=master)
[![npm](https://img.shields.io/npm/dw/maslak.svg)](https://www.npmjs.com/package/maslak)

The Maslak library converts your flat object to key and value objects, and then sort it by the given array.
It's **simple** & **basic**.

## Documentation

### Installation

> npm i maslak

### Usage

Basic Usage

```javascript
const DataTransform = require("maslak");
const testCase1 = {
  data2: "value2",
  data1: "value1",
  data3: 3
};

const transform = new DataTransform(testCase1).result;
console.log(transform); // [ { key: 'data2', value: 'value2' },{ key: 'data1', value:'value1'},{ key: 'data3', value: 3 } ] //
```

Sorted Usage

```javascript
const DataTransform = require("maslak");
const testCase1 = {
  data2: "value2",
  data1: "value1",
  data3: 3
};

const sortRule = ["data1", "data2", "data3"];

const transform = new DataTransform(testCase1).dataSort(sortRule).result;
console.log(transform); // [ { key: 'data1', value:'value1'},{ key: 'data2', value: 'value2' },{ key: 'data3', value: 3 } ] //
```
