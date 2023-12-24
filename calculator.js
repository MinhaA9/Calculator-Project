let operator='';
let expression='';
let lst = [];
function result(i, temp){
  lst[i-1]=String(temp);
  let temp2=lst.slice(i+2);
  lst= lst.slice(0,i);
  lst=lst.concat(temp2);
  return i-2;
}
function calculate(){
  let str='';
  for(i=0;i<expression.length;i++){
    if(expression[i]!== '+' && expression[i]!=='-' && expression[i]!=='*' && expression[i]!=='/'){
      str+=expression[i];
      if(expression[i]==='e'){
        str+=expression[i+1];
        i++;
      }
      if(i===expression.length-1){
        lst.push(str);
        str='';
      }
    }
    else{
      lst.push(str);
      lst.push(expression[i]);
      str='';
    }
  }
  
  // console.log(lst);
  for(i=0;i<lst.length;i++){
    if(lst[i]==='/'){
      let temp=Number(lst[i-1])/Number(lst[i+1]);
      // console.log(lst);

      i=result(i,temp);
    }
  }

  for(i=0;i<lst.length;i++){
    if(lst[i]==='*'){
      let temp=Number(lst[i-1])*Number(lst[i+1]);
      // console.log(lst);

      i=result(i,temp);
    }
  }
  for(i=0;i<lst.length+1;i++){
    if(lst[i]==='+'){
      let temp=Number(lst[i-1])+Number(lst[i+1]);

      // console.log('1',lst, i);

      i=result(i,temp);
      // console.log('2',lst, i, lst.length);
    }
  }
  for(i=0;i<lst.length;i++){
    if(lst[i]==='-'){
      let temp=Number(lst[i-1])-Number(lst[i+1]);

      i=result(i,temp);


    }
  }
  
  return lst[0];
}
function equal(){
  document.querySelector('.expression').innerHTML= calculate(); 
  expression=lst[0]; 
  // console.log(lst);

  lst=[];
  // console.log('At equal: ',lst);

}
function operate(operation){
  whichOperator=expression.charAt(expression.length-1);
  if(whichOperator!=='+' && whichOperator!=='-' && whichOperator!=='*' && whichOperator!=='/'){
    expression+=operation;
    console.log(operation);
    document.querySelector('.expression').innerHTML=expression;
  }

}
function digits(digit){
  expression+=digit;
  document.querySelector('.expression').innerHTML=expression;
  const bttnpressed = document.querySelector('.js-bttn1');
  bttnpressed.classList.add('is-pressed');
}
function reset(){
  expression='';
  lst=[];
  document.querySelector('.expression').innerHTML=expression;
}