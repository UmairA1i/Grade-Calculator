//Marks grade checker



let marks = +prompt("Enter your marks between 1 to 100")

if(marks > 100){
    alert("Enter appropriate number")
}
else if(marks >= 90 && marks <= 100){
    alert(`Your marks are ${marks}, your grade is A`)
}
else if(marks >= 80 && marks <= 89){
    alert(`Your marks are ${marks}, your grade is B`)
}
else if(marks >= 70 && marks <= 79){
    alert(`Your marks are ${marks}, your grade is C`)
}
else if(marks >= 60 && marks <= 69){
    alert(`Your marks are ${marks}, your grade is D`)
}
else if(marks >= 50 && marks <= 59){
    alert(`Your marks are ${marks}, your grade is F`)
}
else{
    alert("You have Faild");
}