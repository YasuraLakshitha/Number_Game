let number = Math.round(Math.random()*10);
let j = 3;
function checkNumber(){
    let inputNum = parseInt(document.getElementById("number").value);
    if(inputNum<0 || inputNum>10){
        Validate();
    }else if(number>inputNum){
        document.getElementById("state").innerHTML = "cold";
        document.getElementById("round").innerHTML = "You have " + (--j)+ " More chanses";
    }else if(number<inputNum){
        document.getElementById("state").innerHTML = "hot";
        document.getElementById("round").innerHTML = "You have " + (--j)+ " More chances";
    }else{
        document.getElementById("state").innerHTML = "You are correct";correct();
    }
    if(j==0){ clear();}
}

function Validate(){
    document.getElementById("number").value = " ";
    document.getElementById("round").innerHTML = "Invalid number try again";
    document.getElementById("state").innerHTML = " ";
}

function clear(){
    document.getElementById("number").value = " ";
    document.getElementById("round").innerHTML = "Play again";
    document.getElementById("state").innerHTML = " ";
    number = Math.round(Math.random()*10);
    j = 3;
}

function correct(){
    document.getElementById("number").value = " ";
    document.getElementById("round").innerHTML = " ";
    number = Math.round(Math.random()*10);
    j = 3;
}