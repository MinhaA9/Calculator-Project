const testing = require('./calculator.js');

console.log('\nTesting ... \n\nResult\n')
let expression = '(5+4)*6-(6/2)+1';
let pf = testing(expression);
console.log(expression,' = ',pf,(pf === '52')?'passed':'failed','52');

expression = '(5+4)*(6-8*(9+5)-3)';
pf = testing(expression);
console.log(expression,' = ', pf,(pf==='-981')? 'passed':'failed','-981');

expression = '(3.55+4*8)*(6-8*(9.6+5)-3)';
pf = testing(expression);
console.log(pf);
console.log(expression,' = ', pf, (pf==='-4045.59')? 'passed':'failed', '-4045.59');