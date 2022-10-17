window.addEventListener("load", function(){
    const btn_next = document.getElementById("btn_next");
    const btn_back = document.getElementById("btn_back");

    const mas = document.getElementsByClassName("advantages");

    btn_next.addEventListener("click", function(){
        $(mas[mas.length - 1]).after(mas[0]);        
    })

    btn_back.addEventListener("click", function(){
        $(mas[0]).before(mas[mas.length - 1]);
    })

    
});
