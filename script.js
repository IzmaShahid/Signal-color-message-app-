var value = prompt(" which signal color message you want? Write color and then click on the button given below ");

let para = document.getElementById('para');
function colorclick(){
    if ( value == "red"){
        para.innerHTML = `Must Stop.`;
        para.style.color = 'red';
    }
    else if(value == "yellow"){
        para.innerHTML = `Ready To Move.`;
        para.style.color = 'gold';
    }
    else if (value == "green"){
        para.innerHTML = `Go.`;
        para.style.color = 'green';
    
    }
    else{
        alert("write correct signal color");
    }

}