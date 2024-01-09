const randomColor= function()
{
    const hex="0123456789ABCDEF";
    let col="#"
    for(let i=0;i<6;i++)
    {
        col+=hex[Math.floor(Math.random()*16)];
    }

    return col;
}
let intid;
const start=function(){
    const work=()=>{
        document.body.style.backgroundColor=randomColor();
        }

    intid=setInterval(work,1000);

    

}
const stop=function(){
    clearInterval(intid);
    intid=null;
}

document.getElementById('start').addEventListener('click',start);
document.getElementById('stop').addEventListener('click',stop);