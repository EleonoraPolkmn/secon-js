let typeNum = +prompt('type the number of examples')



for (let i = 1; i <= typeNum; i++) {
   let num1 = Math.floor(Math.random() * 100)
   let num2 = Math.floor(Math.random() * 100)
   let sign = Math.floor(Math.random() * 3)
   console.log(sign);

   if (sign == 0) {
      let example = +prompt(num1 + ' + ' + num2 + ' =')
      if (example == (num1+num2)){
         let answer = alert('answer is correct ' + example)
      } else{
         let answer = alert(example + ' is not correct, ' + 'correct is ' + (num1+num2))
      }
   } else if (sign == 1) {
      let example = +prompt(num1 + ' - ' + num2 + ' =')
      if (example == (num1-num2)){
         let answer = alert('answer is correct ' + example)
      } else{
         let answer = alert(example + ' is not correct, ' + 'correct is ' + (num1-num2))
      }
   } else if (sign == 2) {
      let example = +prompt(num1 + ' * ' + num2 + ' =')
      if (example == (num1*num2)){
         let answer = alert('answer is correct ' + example)
      } else{
         let answer = alert(example + ' is not correct, ' + 'correct is ' + (num1*num2))
      }
   } else if (sign == 3) {
      let example = +prompt(num1 + ' / ' + num2 + ' =')
      if (example == (num1/num2)){
         let answer = alert('answer is correct ' + example)
      } else{
         let answer = alert(example + ' is not correct, ' + 'correct is ' + (num1/num2))
      }
   }
}