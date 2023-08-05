//Bài 1
const arr1 = [1, 'a', 5, '2', true];
const arr2 = arr1.filter(function(number){
return number;
});
console.log(arr2);
//Bài 3
let students = [
	{ name: 'Alex', score: 6 },
	{ name: 'John', score: 8 },
	{ name: 'Peter', score: 4 },
];
let students2 =[]
students.forEach((age) =>{
    students2.push(age >= 8);
});
console.log(students2);