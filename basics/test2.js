//nested object
// const name={
//     fullname:{
//         myname:{
//             first:"jaiwanth",
//             last:"vavaldas"
//         }
//     }
// }
// console.log(name.fullname.myname.last);
//merge objects can use spread operator just like arrays

const obj1={
    1:'a',
    2:'b'
}
const obj2={
    2:'c',
    4:'d'
}

// const obj3=Object.assign(obj1,obj2)--copies to obj1
// const obj3=Object.assign({},obj1,obj2)--cpoies to {}
// console.log(obj3);
// console.log(obj1);
const obj3={...obj1,...obj2}
console.log(obj3);

//keys of an object

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));

//search key
console.log(obj1.hasOwnProperty('2'));