//Bài 1
const arr1 = [1, 'a', 5, '2', true];
const arr2 =[];
arr1.forEach((item) =>{
if (typeof item === 'number') (
    arr2.push(item)
)
});

console.log(arr2);
//Bài 2
const products = [
	{ name: 'Iphone 13', price: 1000, quantity: 10 },
	{ name: 'Macbook pro M2', price: 2000, quantity: 5 },
	{ name: 'Màn hình Samsung 23 inch', price: 1500, quantity: 2 },
	{ name: 'Airpod 2', price: 100, quantity: 20 },
];
let totalBill = 0;
products.forEach((product) =>{
    console.log(`${product.quantity} chiếc ${product.name} giá ${product.price}$`);
totalBill += product.price*product.quantity;
});
console.log(`Tổng hóa đơn:${totalBill}$`)
//Bài 3
let students = [
	{ name: 'Alex', score: 6 },
	{ name: 'John', score: 8 },
	{ name: 'Peter', score: 4 },
];
let highestScore = 0;
let highestName = '';
students.forEach((student) =>{
	if(student.score > highestScore) {
		highestScore = student.score;
		highestName = student.name;
	}
});
console.log(highestName);