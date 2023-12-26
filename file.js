
let value=document.getElementById("paragraph")

function btn1Increase() {
    let value2=value.textContent
    let update=parseInt(value2) +1 
    if (update >0 ){
        value.style.color="green"
    }
    else if (update <0){
        value.style.color="red"
    }
    else{
        value.style.color="black"
    }
    value.textContent=update
}

function btn3Decrease() {
    let val3=value.textContent
    let update1=parseInt(val3) -1
    if(update1>0){
        value.style.color="green"
    }else if(update1<0){
        value.style.color="red"
    }else{
        value.style.color="black"
    }
    value.textContent=update1
}

function btn2Reset() {
    let value4=0
    value.textContent=value4
    value.style.color="black"
}