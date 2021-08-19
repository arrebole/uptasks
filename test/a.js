const { Uptask } = require('../dist/cjs');

const res = new Uptask({
    url: 'http://127.0.0.1:7002'
}).verified({ aa: ';aa'})

res.then(r => console.log(r))