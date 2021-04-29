(function () {
    'use strict';

    let startBtn = document.getElementById("start");
    let radio1 = document.getElementById("choice1-1");
    let radio2 = document.getElementById("choice1-2");
    let radio3 = document.getElementById("choice1-3");
    startBtn.addEventListener("click", start);
    function start(e) {
        if (radio1.checked) {
            //console.log("1");
            localStorage.setItem("size", "12");
        }
        else if (radio2.checked) {
            //console.log("2");
            localStorage.setItem("size", "24");
        }
        else if (radio3.checked) {
            //console.log("3");
            localStorage.setItem("size", "36");
        }
        window.location.href = "index.html";
    }

}());
