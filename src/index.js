module.exports = function check(str, bracketsConfig) {
  // your solution

  const bracketsStack = [];
  let res = true;
  let stop = false;
    for (let i = 0; i < str.length; i++) {
      if (!stop){
          bracketsConfig.forEach(element => {
              if (str[i] === element[0]){
                if (str[i] === element[1] && str[i] === bracketsStack[bracketsStack.length - 1] ){
                  bracketsStack.pop();
                } else {
                  bracketsStack.push(str[i]);
                }
              } else if (str[i] === element[1]){
                  if (bracketsStack.length === 0){
                    stop = true;
                    res = false;
                    return false;
                  } else  if (bracketsStack[bracketsStack.length - 1] === element[0]){
                    bracketsStack.pop();
                    res = true;
                  }
              } 
          });
      }
    } 
    (bracketsStack.length !== 0 || stop) ? res = false : res = true;
    return res;
}


