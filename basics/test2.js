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

// const obj1={
//     1:'a',
//     2:'b'
// }
// const obj2={
//     2:'c',
//     4:'d'
// }

// const obj3=Object.assign(obj1,obj2)--copies to obj1
// const obj3=Object.assign({},obj1,obj2)--cpoies to {}
// console.log(obj3);
// console.log(obj1);
// const obj3={...obj1,...obj2}
// console.log(obj3);

// //keys of an object

// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1));

// //search key
// console.log(obj1.hasOwnProperty('2'));
//de-structuring objects
// const obj={
//     namegiventome:'jai'
// }
// const {namegiventome:name}=obj
// console.log(name);
///-Json formater -understanding of api responses
///////-Functions-///////
// const k=function add(num1,num2){
//     return (num1+num2);
// }
// //undefined s
// //"",undefined ,null are taken as false
// function solve(s)
// {
//     if(!null)
//     console.log("null");

//     return `hi ${s} `
// }
// console.log(solve());
//default value
// function solve(s="jai")
// {
//     return `hi ${s} `
// }
// console.log(solve());


///----DOM------

//getting elements
/*
document.getElementById("title")
attributes
document.getElementById("tittle").id || document.getElementById("tittle").getAttribute("id")
class
document.getElementById("tittle").className

setattribute
document.getElementById("tittle").setAttribute("class","test")

css through console
title.style.backgroundColor="greeen"

extracting text
1-tittle.textContent
2-tittle.innerHTML(given the html under the tag)
3-tittle.innerText

QUERYSELECTORS
document.queryselector("h1")-for tag
document.queryselector("#title")-for id
document.queryselector(".heading")-for class 

Queryselector return a NodeList
const temp=documennt.querySelectorAll("h1")

temp[0].style.color="green"

foreach syntax

temp.forEach((k)=>{
    k.syle.color="green"
})

type conversion from html collection to array
Array.from(temp)

*/ 