const slidShowElemnts = document.querySelectorAll(".slidShow__element")

let countElemnt = 1;
setInterval(() => {
    countElemnt ++;
    let currentElent = document.querySelector(".current");
    currentElent.classList.remove("current");
    if(countElemnt > slidShowElemnts.length){
        slidShowElemnts[0].classList.add("current");
        countElemnt = 1;
    }else{
        currentElent.nextElementSibling.classList.add("current");

    }



},2000)