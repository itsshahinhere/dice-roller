function generate(){
    document.getElementById("diceImg").style.display="inline";
    const num = (Math.floor(Math.random()*6))+1;
    if(num == 1){
        document.getElementById("diceImg").src="image/dice-1.png";
    }
    else if(num == 2){
        document.getElementById("diceImg").src="image/dice-2.png";
    }
    else if(num == 3){
        document.getElementById("diceImg").src="image/dice-3.png";
    }
    else if(num == 4){
        document.getElementById("diceImg").src="image/dice-4.png";
    }
    else if(num == 5){
        document.getElementById("diceImg").src="image/dice-5.png";
    }
    else
    {
        document.getElementById("diceImg").src="image/dice-6.png";
    }
}