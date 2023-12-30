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
function removeParenthesis(index){
  let temp1=lst[index];
  let temp2=lst.slice(index+2);
  lst=lst.slice(0,index-1);
  lst=lst.concat(temp1);
  lst=lst.concat(temp2);  
}
function addMultiplicationSign(index){
  let temp1 = lst.slice(index+1);
  lst = lst.slice(0,index+1);
  lst =lst.concat('*');
  lst = lst.concat(temp1);
  console.log(lst);
}
function pemdas(){
  listIT();
  start_index=0;
  end_index=0;
  for(i=0; i<lst.length;i++){
    if(lst[i]==='(' || lst[i]===')'){
      if(lst[i]==='('){
        start_index = i;
      }
      else if(lst[i]===')'){
        if(lst[i+1]==='('){
          addMultiplicationSign(i);
        }
        end_index=i;
        let index=calculate(start_index,end_index);
        // console.log(lst[index],lst);
        // break;
        if(lst[index-1]==='(' && lst[index+1]===')'){
          removeParenthesis(index);
        }
        i=0;
        start_index=0;
        end_index=0;
      }
    }
  }
   return calculate();
}
function listIT(){
  let str='';
  for(i=0;i<expression.length;i++){
    if(expression[i]==='(' || expression[i]===')'){
      lst.push(expression[i]);
    }

    /*
      numbers are added to the str variable 
    */
    else if(expression[i]!== '+' && expression[i]!=='-' && expression[i]!=='*' && expression[i]!=='/'){
      str+=expression[i];
      if(expression[i]==='e'){
        str+=expression[i+1];
        i++;
      }
      if(i===expression.length-1 || expression[i+1]===')'){
        lst.push(str);
        str='';
      }
    } 
    /*
      then str is pushed in the lst and operators (non numbers) are added to the lst
    */
    else{
      if(str!==''){
        lst.push(str);
      }
      lst.push(expression[i]);
      str='';
    }
  }
  // console.log(lst);
}
function calculate(start_index=0, end_index=lst.length){  
  for(i=start_index;i<end_index;i++){
    if(lst[i]==='/'){
      let temp=Number(lst[i-1])/Number(lst[i+1]);
      i=result(i,temp);
      if(lst[i+2]===')'){
        return i+1;
      }
    }
  }
  
  for(i=start_index;i<end_index;i++){
    if(lst[i]==='*'){
      let temp=Number(lst[i-1])*Number(lst[i+1]);
      i=result(i,temp);
      if(lst[i+2]===')'){
        return i+1;
      }
    }
  }
  for(i=start_index;i<end_index;i++){
    if(lst[i]==='-'){
      let temp=Number(lst[i-1])-Number(lst[i+1]);
      i=result(i,temp);
      if(lst[i+2]===')'){
        return i+1;
      }
    }
  }
  for(i=start_index;i<end_index;i++){
    if(lst[i]==='+'){
      let temp=Number(lst[i-1])+Number(lst[i+1]);
      i=result(i,temp);
      if(lst[i+2]===')'){
        return i+1;
      }
    }
  }

  
  return lst[0];
}
function equal(){
  document.querySelector('.expression').innerHTML= pemdas(); 
  expression=lst[0]; 
  lst=[];

}
function backspace(){
  expression=expression.slice(0,expression.length-1);
  document.querySelector('.expression').innerHTML=expression;
}
function parentheses(bracket){
  expression+=bracket;
  document.querySelector('.expression').innerHTML=expression;
}
function operate(operation){
  whichOperator=expression.charAt(expression.length-1);
  if(whichOperator!=='+' && whichOperator!=='-' && whichOperator!=='*' && whichOperator!=='/'){
    expression+=operation;
    document.querySelector('.expression').innerHTML=expression;
  }
}
function extraDecimals(){
  let decimalExist = false;
  let start_index =-1;
  for(i=expression.length-1;i>-1;i--){
    let exp = expression[i];
    if(exp==='+' || exp==='-' || exp==='*' || exp==='/'){
      start_index=i+1;
    }
  }
  for(i=start_index;i<expression.length;i++){
    if(expression[i]==='.'){
      decimalExist = true;
      break;
    }
  }
  return decimalExist;
}

function digits(digit){
  let decimalExist = false;
  if(digit==='.'){
    decimalExist=extraDecimals();
  }
  if(decimalExist === false){
    expression+=digit;
    document.querySelector('.expression').innerHTML=expression;
  }
}
function reset(){
  expression='';
  lst=[];
  document.querySelector('.expression').innerHTML=expression;
}
function testing(expressionTest){
  expression=expressionTest;
  lst=[];
  pemdas();
  return lst[0];
}

module.exports = testing;