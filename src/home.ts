let startBtn: HTMLButtonElement = document.getElementById("start") as HTMLButtonElement;

let radio1: HTMLInputElement = document.getElementById("choice1-1") as HTMLInputElement;
let radio2: HTMLInputElement = document.getElementById("choice1-2") as HTMLInputElement;
let radio3: HTMLInputElement = document.getElementById("choice1-3") as HTMLInputElement;

startBtn.addEventListener("click", start);

function start(e: UIEvent) {
    
    if (radio1.checked) {
        //console.log("1");
        localStorage.setItem("size", "12");
    } else if (radio2.checked) {
        //console.log("2");
        localStorage.setItem("size", "24");
    }else if (radio3.checked) {
        //console.log("3");
        localStorage.setItem("size", "36");
    }

    window.location.href = "index.html";
}