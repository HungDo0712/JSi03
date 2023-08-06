const arrNum = [5, 3, 0, -1, 2, -5]
// const positiveNum =[];

// arrNum.forEach((item) =>{
//    if(item > 0) {
//        positiveNum.push(item);
//    }
// })
// console.log(positiveNum);

// const positiveNum = arrNum.filter((item) => {
// if(item > 0) {
//    return true;
// }
// return false;
// })
// console.log(positiveNum);

const positiveNum = arrNum.filter((item) =>  item > 0
)
console.log(positiveNum);

//Bài 2
const products = [
	{ id: 1, name: 'Iphone 13', price: 1000, quantity: 10 },
	{ id: 2, name: 'Macbook pro M2', price: 2000, quantity: 5 },
	{ id: 3, name: 'Màn hình Samsung 23 inch', price: 1500, quantity: 2 },
	{ id: 4, name: 'Airpod 2', price: 100, quantity: 20 },
];

const products1 = products.filter((product) => product.quantity >= 10);
console.log(products1);

const products2 = products.filter((product) => product.id !== 3).map((product) => product.name);
console.log(products2);
//Cách 1
const checkProduct = (productName) => {
    const filterProduct = products.filter(product => product.name === productName);
	if(filterProduct.length === 0 ) {
		console.log('Không tồn tại')
	} else {
		console.log('Tồn tại')
	}
};
checkProduct('Iphone 13')
//Cách2
const checkProduct2 = (productName) => {
	const findProduct = products.find((product) => product.name === productName);
	if(findProduct) {
console.log('Tồn tại')
	} else {
		console.log('Không tồn tại')
	}
};
checkProduct2('Iphone 13');

//Cách 3
const checkProduct3 = (productName) => {
	const productIndex = products.findIndex((product) => product.name === productName);
	if(productIndex === -1) {
		console.log('Không tồn tại');
	} else{
		console.log(' Tồn tại');
	}
};
checkProduct3('Iphone 13');