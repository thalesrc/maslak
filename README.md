# Maslak
[![Travis](https://travis-ci.org/goktuggoktas/maslak.svg?branch=master)](https://travis-ci.org/goktuggoktas/maslak)


The Maslak library converts your flat object to key and value objects, and then sort it by the given array.
It's **simple** & **basic**.

## Documentation

### Installation

> npm i maslak

### Usage

Basic Usage

    const DataTransform =  require("maslak");
    const testCase1 = {
        data2: "value2",
        data1: "value1",
        data3: 3
    };

    const transform =  new DataTransform(testCase1).result;
    console.log(transform); // [ { key: 'data2', value: 'value2' },{ key: 'data1', value:'value1'},{ key: 'data3', value: 3 } ] //

Sorted Usage

    const DataTransform =  require("maslak");
    const testCase1 = {
        data2: "value2",
        data1: "value1",
        data3: 3
    };

    const sortRule = ['data1', 'data2', 'data3']

    const transform =  new DataTransform(testCase1).dataSort(sortRule).result;
    console.log(transform); // [ { key: 'data1', value:'value1'},{ key: 'data2', value: 'value2' },{ key: 'data3', value: 3 } ] //
