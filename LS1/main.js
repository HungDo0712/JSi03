const sum1 = (a,b) => a*b;
console.log(sum1(2,3));

// const logname = () => ({
//     name:'Hung'
// })
// console.log(logName());
//Spread OP
const numberList =[1,2,3,4,5,6];
const cloneNumberList = [...numberList];
cloneNumberList.push(7);
console.log(numberList);
console.log(cloneNumberList);

const student1 = {
    name:'Hung',
    Age:'17'
}
const student2 = {...student1};
student2.gender = 'Male';
console.log(student1,student2);
//map
const arrMap1 = [1,2,3,4,5];
const arrMap2 = []
arrMap1.forEach((item) => {
arrMap2.push(item*2);
});
console.log(arrMap2);

const arrMap4 = [
    { firstName:"Tran", lastName:"Quang" },
    { firstName:"Vu",lastName:"Anh"}
];
const arrMap5 = arrMap4.map((item)=>{
    return item.firstName + ' ' + item.lastName
})
console.log(arrMap5);