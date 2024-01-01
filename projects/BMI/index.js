const form=document.querySelector('form')
console.log(form);
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const h=parseInt(document.querySelector('#height').value);;
    const w=parseInt(document.querySelector('#weight').value);
    const res=document.querySelector('#results');
    const gud=document.querySelector('#guide');

    let ans="";

    if(h ==='' || h<0 || isNaN(h))
    {
        res.innerHTML=`please givea valid height ${h}`;
    }
    else if(w ==='' || w<0 || isNaN(w))
    {
        res.innerHTML=`please givea valid weight ${w}`;
    }
    else
    {
        const bmi=(w/((h*h)/10000)).toFixed(2);

        console.log(bmi);
        console.log(h);
        console.log(w);
        res.innerHTML=`<span>${bmi} </span>`;
        if(bmi<18.6)
        {
            ans="UnderWeight";
        }
        else if(bmi >24.9)
        {
            ans="Overweight";
        }
        else
        {
            ans="Normal";
        }
        gud.innerHTML=`${ans}`
    }
    
})