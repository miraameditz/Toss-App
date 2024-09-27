var output = document.getElementById("output")
var num = 0
var toss_coin = document.getElementById("toss-coin")

function headBtn() {
    num = Math.ceil(Math.random(num) * 2)
    // console.log(num);
    output.innerHTML = num
    if(num === 1 ) {
        output.innerHTML = "You Won The Toss"
    } else{
        output.innerHTML = "You Lost The Toss"
    }

    if (num === 1) {
        toss_coin.src = "./assets/Chaand.png"
    } else {
        toss_coin.src = "./assets/paanch.png"
    }


    toss_coin.classList.remove('toss');
    void toss_coin.offsetWidth;
    toss_coin.classList.add('toss');
}

function tailBtn() {
    num = Math.ceil(Math.random(num) * 2)
    // console.log(num);
    output.innerHTML = num
    if(num === 2 ) {
        output.innerHTML = "You Won The Toss"
    } else{
        output.innerHTML = "You Lost The Toss"
    }

    if (num === 2) {
        toss_coin.src = "./assets/paanch.png"
        toss_coin.classList.add('rotate');
    } else {
        toss_coin.src = "./assets/Chaand.png"
        toss_coin.classList.add('rotate');
    }

    toss_coin.classList.remove('toss');
    void toss_coin.offsetWidth;
    toss_coin.classList.add('toss');
}
