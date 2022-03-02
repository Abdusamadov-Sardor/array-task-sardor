var elForm = document.querySelector(".form");
var elInput = document.querySelector(".input");
var elResult = document.querySelector(".span")





elForm.addEventListener("submit" , function(eve){
  eve.preventDefault();
  
  var elInputVal = elInput.value;
  
  if(elInputVal % 2 == 0){
    elResult.textContent = "Bu juft son"
    even.push(elInputVal);
    console.log(even);
    elInput.value = ""
    return;
    
  }else 
  elResult.textContent = "Bu toq son"
  odd.push(elInputVal)
  console.log(odd);
 
  
  elInput.value = ""
  return;
})

var even = [2,4,6,8,10,12,14,16,18,20];
var odd = [1,3,5,7,9,11,13,15,17,19];










