const clock=document.getElementById("clock");


setInterval(()=>{
    let obj=new Date();
    clock.innerHTML=obj.toLocaleTimeString();
},1000)