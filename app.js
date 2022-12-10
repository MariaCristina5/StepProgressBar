const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");
const stepsEl = document.querySelectorAll(".step");
const progressEl = document.querySelector(".progress-bar-front")


let currentChecked = 1;

nextEl.addEventListener("click", ()=>{
    currentChecked++
    if(currentChecked > stepsEl.length){
        currentChecked = stepsEl.length;
    }
    updateStepProgress();
})
prevEl.addEventListener("click", ()=>{
    currentChecked--
    if(currentChecked < 1){
        currentChecked = 1;
    }
    updateStepProgress();
})

function updateStepProgress(){
    stepsEl.forEach((stepsEl,index)=>{
        if(index< currentChecked){
            stepsEl.classList.add("checked");
            stepsEl.innerHTML = `<i class="fa-solid fa-check"></i>
            <small>${index === 0 ? "Start" : index === stepsEl.length -1 ? "Final" : "Step " + index}</small>`;
        } else {
            stepsEl.classList.remove("checked");
            stepsEl.innerHTML = `<i class="fa-sharp fa-solid fa-xmark">`
        };
    });

    const checkedNumber = document.querySelectorAll(".checked");
    progressEl.style.width = ((checkedNumber.length) / (stepsEl.length -1)) * 100 + "%"

    if(currentChecked === 1){
        prevEl.disabled = true;
    }else if(currentChecked===stepsEl.length){
        nextEl.disabled = true;
    }else{
        prevEl.disabled = false;
        nextEl.disabled = false;
    }
};