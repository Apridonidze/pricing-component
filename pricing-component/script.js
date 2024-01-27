function convertMoneyMonthly(){
    let myRangeValue1 = document.getElementById("myRange").value;
    let myH12 = document.querySelector("#finalPrice");
    let myX1 = 16;
    let calculateRange1 = myRangeValue1 * myX1;
    myH12.textContent = "$" + calculateRange1;
};
setInterval(convertMoneyMonthly,0.1);





let toggle = document.querySelector(".toggle");

toggle.addEventListener("click",()=> {
    toggle.classList.toggle("active");

    if (toggle.classList.contains("active")){
        document.querySelector("#text").innerHTML = "/ Year";

        function convertMoneyMonthly(){
            let myRangeValue2 = document.getElementById("myRange").value;
            let myH13 = document.querySelector("#finalPrice");
            let myX2 = 144;
            let calculateRange2 = myRangeValue2 * myX2;
            myH13.textContent = "$" + calculateRange2;
        };
        setInterval(convertMoneyMonthly, 0.1)        

    } else {
        document.querySelector("#text").innerHTML = "/ Month";
}});