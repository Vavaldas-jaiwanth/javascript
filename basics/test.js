// let k=8298317
// let ans=Boolean(k)
// let s=String(ans)
// console.log(typeof(s))
// console.log(s)

//console.log(undefined>=0);
//console.log("a"<"bc");
// ---- Array concatinaton--//
// const a=[1,2,3]
// const b=[4,5,6]
// a.push(b)
// console.log(a);//out put --[1 ,2 ,3,[4 5 6]]
// const c=a.concat(b)
// console.log(c);//out put - [1,2,3,4,5,6]
// alternate//
// const d=[...a,...b]
// console.log(d);output -[1,2,3,4,5,6] (...)is the spread operator can be used to concat multiple arrays

// const a=[1,2,3,4,[5,6,7,8],[[9]]]
// // flat takes the argumenst as number of dimensions of array zero indexed used to reduct multy dim arry t single
// const ans=a.flat()
// console.log(ans);
//console.log(Array.from("jaiwanth"));//creates an array from iterable object
//console.log(Array.of(1,2,3,4));//creates an array from element

//--------------Object---------//
//singleton -a unique object created using condtructer method
//Object.create
//literals
//to use Symbols in an object declare them and use them using []
const k=Symbol("k1")
const abc={
    [k]:k,
    name:"jai",
    age:15,
    born:2004,
    "month":"dec"
}
//-accesing objects -/
//one method
//console.log(abc.month);
//second method 
//console.log(abc["month"])
//Symbol
//console.log(abc[k]);
//console.log(typeof abc[k]);
//locking object values
//Object.freeze(abc)
abc.age=19
console.log(abc);

//creating a fuction in an object

abc.call = function(){
    console.log(`call,${this.name}`);
}
abc.talk = function(){
    console.log("talk,nigga");
}

abc.call()
abc.talk()
//continued in test2