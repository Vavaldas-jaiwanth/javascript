const button=document.querySelectorAll('.button');
const body=document.querySelector('body');
button.forEach((button)=>
{
    button.addEventListener('click',(ev)=>{
        console.log(ev);
        console.log(ev.target);
        body.style.backgroundColor=ev.target.id;

    })
})