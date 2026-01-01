// 11
let mark = 85

if (mark >= 90) {
    console.log('A')
} else if(mark >= 80 && mark < 90) {
    console.log('B')
}
else if(mark >= 70 && mark < 80) {
    console.log('C')
}
else if(mark >= 60 && mark < 70) {
    console.log('D')
}
else  {
    console.log('F')
}


// 12
let length = 5
let width = 10
let area = length * width
let perimeter = (length + width) * 2
console.log('The perimeter is', perimeter)
console.log('The area is', area)

// 13
let year = 2024
if ((year/4) || (year/100 && year/400)) {
    console.log(year, 'is a leap year')
} else {
    console.log(year, 'is not a leap year')
}

// 14
let number = 47
if(number % 3 === 0 && number % 5 === 0) {
    console.log(number,'is divisible by both 3 and 5')
} else if(number % 3 === 0) {
    console.log(number,'is divisble by just 3')
} else if(number % 5 === 0) {
    console.log(number,'is divisble by just 5')
} else  {
    console.log(number, 'is not divisble by either 3 or 5')
}

// 15
let subject1 = 78
let subject2 = 85
let subject3 = 92
let average = (subject1 + subject2 + subject3) / 3
if (average >= 90) {
    console.log('Excellent')
} else if(average >= 75) {
    console.log('Good')
} else if(average >= 60) {
    console.log('Average')
} else {
    console.log('Needs Improvement')
}