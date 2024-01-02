const testing = require('./calculator.js');
let expression;
let pf;
// console.log('\nTesting ... \n\nResult\n')
// expression = '(5+4)*6-(6/2)+1';
// pf = testing(expression);
// console.log(expression,' = ',pf,(pf === '52')?'passed':'failed','52');

// expression = '(5+4)*(6-8*(9+5)-3)';
// pf = testing(expression);
// console.log(expression,' = ', pf,(pf==='-981')? 'passed':'failed','-981');

// expression = '(3.55+4*8)*(6-8*(9.6+5)-3)';
// pf = testing(expression);
// console.log(expression,' = ', pf, (pf==='-4045.59')? 'passed':'failed', '-4045.59');

// expression = '(3+2)(5+2)';
// pf = testing(expression);
// console.log(expression,' = ', pf, (pf==='35')? 'passed':'failed', '35');

// expression = '3+2(5+2)';
// pf = testing(expression);
// console.log(expression,' = ', pf, (pf==='17')? 'passed':'failed', '17');

expression = '(3)2(5+2)';
pf = testing(expression);
console.log(expression,' = ', pf, (pf==='42')? 'passed':'failed', '42');

expression = '((3+4)3)2(5+2)';
pf = testing(expression);
console.log(expression,' = ', pf, (pf==='294')? 'passed':'failed', '294');