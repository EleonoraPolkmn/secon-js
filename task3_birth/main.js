let Name = prompt('type your name')
let yearBirth = +prompt('type your year of birth')
let currentYear = +prompt('type current year')


   function calcSum(year, birth) {

      let sum = year - birth
      return sum
   }

  let result = calcSum(currentYear, yearBirth)
  alert(Name + ', Your age is ' + result);