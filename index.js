const clear = document.querySelector("#clear");
const p = document.querySelector("p");
const input = document.querySelector("input");
clear.addEventListener("click", ()=>{p.innerHTML = ""; input.value = null;})
input.addEventListener("keypress", (event)=>{if (event.key === "Enter"){fizzbuzz(); input.value = null;}})

function fizzbuzz (){
   const input = document.querySelector("input");
   const inputVal = input.value;
   const p = document.querySelector("p");
   
   if(inputVal < 1){
      return p.textContent = "("+inputVal+")"+" Error";
   }

   else if (inputVal % 3 === 0 && inputVal % 5 === 0){
    return p.textContent = "("+inputVal+")"+" FizzBuzz";
   }

   else if (inputVal % 3 === 0 && inputVal % 5 !== 0){
    return p.textContent = "("+inputVal+")"+" Fizz";
   }
   
   else if (inputVal % 3 !== 0 && inputVal % 5 === 0){
    return p.textContent = "("+inputVal+")"+" Buzz";
   }

   else {
    return p.textContent = "("+inputVal+")";
   }
}