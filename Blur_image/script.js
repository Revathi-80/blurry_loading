const loadText= document.querySelector('.loading-text')
const bg=document.querySelector('.bg')

let load=0
let int=setInterval(bluring, 30)
function bluring(){
    load++

    if(load>99){
        clearInterval(int)
    }
    
    loadText.innerText=`${load}%`
    loadText.style.opacity= scale(load, 0, 100, 1,0)
    bg.style.filter= `blur(${scale(load,0,100,30,0)}px)`
}

const scale=(nums, in_min, in_max,out_min,out_max) => {
    return ((nums - in_min)*(out_max-out_min))/ (in_max - in_min)+out_min;
}