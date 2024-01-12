const promisone= new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log("promise triggered");
        resolve();
    },1000)
})

promisone.then(function(){
    console.log("resolve called");
})

new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log("promise 2 triggered");

        resolve();
    },1000);
}).then(function (data) {
    console.log("resolve2 called");
    
})

const promisthree= new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log("promise3 triggered");
        resolve({name:"jaiwanth",age:20});
    },1000)
})

promisthree.then(function(data){
    console.log(data);
})

const promisfour= new Promise((resolve,reject)=>{
   setTimeout(function () {
    try{
        let k=22;
        if(k<10)
        throw "small number";
        resolve({status:"done"})
    }
    catch(err)
    {
        reject(err);
    }
   },1000);
})
//a chain of then ,the "data" of the nxt then is the data returned by the previous then 
promisfour
.then(function(data){
    console.log(data);

    return data.status;
})
.then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log(err);
})
.finally(()=>{
    console.log("finally executed");
})

console.log(promisfour);

//promises using async and await

async function consumePromise(){
    const res=await promisfour;
    console.log(res);

}
consumePromise()

//this is the async and await method

async function getusers(){
    const res= await fetch('https://api.github.com/users/hiteshchoudhary');
    const data =await res.json();
    console.log(data);
}
getusers()

//using .then

fetch('https://api.github.com/users/hiteshchoudhary')
.then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log(data);
})