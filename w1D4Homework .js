/*1. Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and 
returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

2. Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and 
returns the largest of them. Again, the Math.max method is not allowed.

3. Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and 
returns true if it is a vowel, false otherwise.

4. Define a function, as a function expression, sumArraythat takes an array of numbers and returns the 
sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.

5. Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns 
the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.

6. Define a function, as a function expression, numArgsthat returns the number of arguments passed to the 
function when called.

7. Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, 
and returns it. For example, reverseString('rockstar');would return the string "ratskcor".

8. Define a function, as a function expression, longestStringInArraythat takes an array of strings as an argument 
and returns the length of the longest string.

9. Define a function, as a function declaration, stringsLongerThanthat takes an array of strings and a number as 
arguments; and returns an array of the strings that are longer than the number passed in. For example, 
stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"]. */

//1.
const maxOfTwoNumbers = (num1, num2) => {
    if (num1 > num2){
        return num1
    }else if (num2 > num1){
        return num2
    }else{
        return "They are the same"
    }
}
console.log("1. " + maxOfTwoNumbers(2,3))
console.log("1. " + maxOfTwoNumbers(3,3))

//2.
const maxOfThree = (a, b, c) => {
    let biggestNum = 0
    let numsArr = [a, b, c]
    for (let i = 0; i < numsArr.length; i ++){
        if (numsArr[i] > biggestNum){
            biggestNum = numsArr[i]
        }
    }
    return biggestNum
}
console.log("2. " +maxOfThree(100, 1000, 10000))

//3.
const isCharAVowel = (letter) => {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    
    for (let i = 0; i < vowels.length; i++){
        if (vowels[i] === letter){
            return true
        }else{
            return false
        }
    }

}
console.log("3. " +isCharAVowel('b'))
console.log("3. " +isCharAVowel('a'))

//4.
const sumArray = (arrNum) =>{
    let sumOfNum = 0
    for (let i = 0; i < arrNum.length; i++){
        sumOfNum += arrNum[i]
    }
    return sumOfNum
}
console.log("4. " + sumArray([1, 2, 3, 4]))

//5.
const multiplyArray = (arr) => {
    let product = 1
    for (let i = 0; i < arr.length; i++){
        product *= arr[i]
    }

    return product
}
console.log("5. " + multiplyArray([1, 2, 3, 4]))

//6.
const numArgs = (...args) => {
    return(args.length) 
}
console.log("6. " + numArgs("1", 2, 3, true, "this was tricky", "just kidding", "just kidding about that just kidding, i had to ref MDN"))

//7. 
const reverseString = (word) => {
    return word.split("").reverse().join("")
}
console.log("7. " + reverseString('Brother'))

//8. 
const longestStringInArray = (arr) => {
    let longestString = ""
    arr.forEach(element => {
        if (element.length > longestString.length){
            longestString = element
        }
    });
    return longestString.length
}
console.log("8. " + longestStringInArray(['what', 'dis', 'dragon', 'butternut', 'brother']))

//9.
const stringsLongerThan = (arr, num) => {
    let longEnough = []
    
    arr.forEach(element => {
        if (element.length > num){
            console.log(longEnough.push(element))
        }
    })
    return longEnough
}
console.log ("9. " + stringsLongerThan(['this', 'should', 'not', 'work'], 3))