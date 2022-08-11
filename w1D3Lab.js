function gradingSystem(){
        let student = [10, 30, 50, 70, 90, 20, 40, 60, 80, 100]

    function grading(num){
        if(num >= 80){
            return ('You did a good job')
        }else if (num >= 70){
            return ('Keep trying')
        }else if (num >= 60){
            return ('ehhhh')
        }else if (num >= 55){
            return ('Not too good')
        }else{
            return ("You'll get em next time") 
        }
    }

    for (var i = 0; i < student.length; i++){
        console.log(grading(student[i]))
    }
}
console.log(gradingSystem())

function fizzBuzz(){
    for (let i = 1; i <= 100; i++){
        
        if ((i % 3 === 0) && (i % 5 === 0)){
            console.log('Fizz Buzz')
        }
        else if (i % 3 === 0){
            console.log('Fizz')
        }
        else if (i % 5 === 0){
            console.log('Buzz')
        }else{
            console.log(i)
        }
    }
}
console.log(fizzBuzz())