let screen=document.querySelector('.screen');
let buttons=document.querySelectorAll('.btn');
let clear=document.querySelector('.btn-clear');
let equal=document.querySelector('.btn-equal');
  

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        let value=e.target.dataset.num;
        screen.value+=value;
    });
});

equal.addEventListener('click',function(e){
    if(screen.value===''){
        screen.value='';
    }
    else if(eval(screen.value).toString().includes('.') && (eval(screen.value).toString().split('.')[1].length)>6){
        let ans=(eval(screen.value)).toFixed(6);
        screen.value=ans;
        console.log("aaa");
    }
    else{
        let ans=eval(screen.value);
        screen.value=ans;
    }
});

clear.addEventListener('click',function(e){
    screen.value='';
});