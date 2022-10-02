const _state = document.querySelectorAll(".state__item span");
const _statesSection = document.querySelector(".states");
let started = false;  //! function Started ? No
console.log(_statesSection)
window.onscroll = function (){
    if(window.scrollY >= _statesSection.offsetTop){
        if(!started ){
            _state.forEach((item)=>{
                startCount(item);
            })
        }
        started = true;
    }
}

function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(()=>{
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count)
        }
    },2000 /goal);
}

