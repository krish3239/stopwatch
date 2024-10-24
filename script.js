let hr = document.querySelector(".hours");
let min = document.querySelector(".minutes");
let sec = document.querySelector(".seconds");
let h = 0;
let m = 0;
let s = 0;
let started = document.querySelector(".start");
let stopped = document.querySelector(".stop");
let reseted = document.querySelector(".reset");
let invert = true;

let curr = 0;
let curr_hour = 0;
let curr_min = 0;

let int = null;
function hi() {
    if(int!=null)
    {
        clearInterval(int);
    }
  int = setInterval(() => {
    curr = curr + 1;
    if (curr < 10) {
      sec.innerHTML = "0" + curr;
    } else if (curr >= 10 && curr < 60) {
      sec.innerHTML = curr;
    } else if (curr >= 60) {
      curr = 0;
      if (curr_min < 9) {
        curr_min = curr_min + 1;
        min.innerHTML = "0" + curr_min + ":";
      } else {
        curr_min = curr_min + 1;
        min.innerHTML = curr_min + ":";
        if (curr_min >= 60) {
          curr_min = 0;
          curr = 0;
          curr_hour = curr_hour + 1;
          if (curr_hour <= 9) {
            hr.innerHTML = "0" + curr_hour + ":";
          } else {
            hr.innerHTML = curr_hour + ":";
          }
        }
      }
    } else if (curr > 60 && curr_min >= 10 && curr_min < 60) {
      curr = 0;
      curr_min = curr_min + 1;
      min.innerHTML = curr_min + ":";
    }
  }, 1);
}

started.addEventListener("click", hi);

stopped.addEventListener("click", () => {
 clearInterval(int);
});


reseted.addEventListener('click',()=>{
    clearInterval(int);
    curr=0;
    curr_hour=0;
    curr_min=0;
    hr.innerHTML="00"+":";
    min.innerHTML="00"+":";
    sec.innerHTML="00";
})
