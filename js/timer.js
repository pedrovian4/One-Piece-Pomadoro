

const start = document.querySelector('.start');
const circleBtn = document.querySelector('.circle-btn');
const time = document.querySelector('.time');
let timer = null;

function startClock (stop=0){
    let seconds =60;
    let minutes = 24;
    time.innerHTML= '25:00';    
    timer = setInterval(()=>{            
        seconds --;
        if(seconds===0){
            minutes--;
            seconds=59;
        }else if(minutes===0 && seconds==0 ){
            start.innerHTML= 'Start';
            time.innerHTML= '25:00';    
            clearInterval(timer);
        }
        time.innerHTML= `${minutes}:${seconds}`;    
        
    },1000)
}

circleBtn.addEventListener('click', ()=>{
    setTimeout(() => {
        if(start.textContent=='Start'){
            start.innerHTML= 'Stop';
            startClock();
        }else if(start.textContent =='Stop'){
            start.innerHTML= 'Start';
            time.innerHTML= '25:00';
            clearInterval(timer);
        }        
    }, 500);

});

