// code your solution here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
   }

   function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
  }

  function wrapAdjective(param2 = "*"){
    return function (param = "special") {
      return `You are ${param2}${param}${param2}!`
    }
  }