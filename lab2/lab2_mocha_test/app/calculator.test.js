// Carlos Arellano - 101339585

const { add, mul, div, sub } = require('./calculator');

// add test
it('add(5,2) expected result 7 PASS', () => {
    var res = add(5, 2);
    if (res !== 7)
        throw new Error(`Expected 7, but got ${res} FAIL`);
});

// sub test
it('sub(5,2) expected result 3 PASS', () => {
    var res = sub(5, 2);
    if (res !== 3)
        throw new Error(`Expected 3, but got ${res} FAIL`);
});

// mult test
it('mul(5,2) expected result 10 PASS', () => {
    var res = mul(5, 2);
    if (res !== 10)
        throw new Error(`Expected 10, but got ${res} FAIL`);
});

// div
it('div(10,2) expected result 5 PASS', () => {
    var res = div(10, 2);
    if (res !== 5)
        throw new Error(`Expected 5, but got ${res} FAIL`);
});