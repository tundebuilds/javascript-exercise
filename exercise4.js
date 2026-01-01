// 16
 var character = 'A'
    if (character === character.toUpperCase()) {
        console.log('The character is uppercase')
    } else if(character === character.toLowerCase()) {
        console.log('The character is lowercase')
    } else {
        console.log('The character is not a letter')
    }

// 17
let age = 25
var haslicense = true
if (age >= 18 && haslicense) {
    console.log('The person is eligible to drive')
} else {
    console.log('The person is not eligible to drive')
}

// 18
let totalAmount = 1000
var isMember = true
if (isMember) {
    let discount = totalAmount * 0.2
    let finalAmount = totalAmount - discount
    console.log('The final amount after discount is', finalAmount)
    
} else {
    let discount = totalAmount * 0.05
    let finalAmount = totalAmount - discount
    console.log('The final amount after discount is', finalAmount)
}

// 19
let maxNumber = 15
for (let i = 1; i <= maxNumber; i++) {
if (i % 3 === 0) {
    console.log(i)}
}
     
    
// 20
let hour = 14
if (hour >= 5 && hour < 12) {
    console.log('Good morning')
} else if (hour >= 12 && hour < 18) {
    console.log('Good afternoon')
} else if (hour >= 18 && hour < 22){
    console.log('Good evening')
} else {
    console.log('Good night')
}