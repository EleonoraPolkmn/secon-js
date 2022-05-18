let num = +prompt('type the number of steps')
let sym = prompt('type the symbol of stair')
let tail = prompt('type the last symbol of stair')
let answer = ''

for (let i = 0; i < num; i++) {
   answer = answer + sym 
   if(i != 0){
      console.log(answer + tail);
   } else{
      console.log(answer = sym);
   }
}
