let testScores = [93, 64, 50, 45, 90, 60, 55, 72, 85, 71];
let Score = testScores.filter((Score) =>{
    return Score >= 70
})

console.log(Score);


let examGrade = [85, 92, 78, 88, 95];
let newGrade = examGrade.map((newGrade) =>{
    return newGrade + 5;
})

console.log(newGrade)


let listOfIntegers = [2, 4, 6, 8, 10];
let squareInteger = listOfIntegers.map((squareInteger) =>{
    return squareInteger * squareInteger
})

console.log(squareInteger);


let listOfMembers = ["Emily", "Jack", "Sophia", "Daniel"];
for (let index of listOfMembers){
    console.log(index)
}


// let listOfClassTiming = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];
// let afternoonClass = listOfClassTiming.slice(2) 
//     return afternoonClass
// console.log(afternoonClass);



//  let sophiaMembers = ["Emily", "Jack", "Sophia", "Daniel"];
// let books = ["Book A", "Book B", "Book C", "Book D"];

// for(let member of sophiaMembers) {
//      let book = books.shift();
//      console.log(`Assigning "${book}" to ${member}`);
//  }

//  let classTiming = ["9:00AM", "11:00AM", "1:00PM", "3:00PM", "5:00PM"];
//  let afternoonClasses = classTiming.filter(time => time.includes("PM") && time !== "12:00PM");
//  console.log(afternoonClasses);


