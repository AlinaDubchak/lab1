'use strict';

const inc = (i) => ++i;

const a = 5;
const b = inc(a);
console.dir({a,b});

module.exports = { inc };
