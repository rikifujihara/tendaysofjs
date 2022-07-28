function bonusTime(salary, bonus) {
    answer = "\u00A3"
    if (bonus) {
      console.log(answer + String(Number(salary) * 10))
    } else {
      console.log(answer + String(salary))
    }
}

bonusTime(1000, true)
console.log("---------")
bonusTime(1000, false)