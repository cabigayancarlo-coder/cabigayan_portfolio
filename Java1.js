console.log(document)

const Indicator = document.getElementById("indicator")
const Jheyzee = document.getElementById("name")

const Image1 =document.getElementById("img1")
Image1.addEventListener (
    "mouseover", function(){
        Indicator.innerHTML = "Your mouse reach the image!!!"
        Image1.style.transform = "scale(1.2,1.2)"
    }
)

Image1.addEventListener(
    "mouseout", function(){
        Indicator.innerHTML = "Your mouse leave the image!!!"
         Image1.style.transform = "scale(1)"
    }
)


const Input = document.getElementById("inp")
Input.addEventListener(
    "change", function(){
       Jheyzee.innerHTML  = Input.value;
       Indicator.innerHTML = "typing......"
    }
)

Input.addEventListener(
    "input", function(){
       Jheyzee.innerHTML  = Input.value || "Jheyzee";
       Indicator.innerHTML = "typing......"       
    }
)

Input.addEventListener(
    "mouseover", function(){
        Indicator.innerHTML = "The mouse is in the form"
    }
)

Input.addEventListener(
    "mouseout", function(){
        Indicator.innerHTML = "The mouse is out the form"
    }
)

const Button1 = document.getElementById("btn1")
Button1.addEventListener(
    "click", function(){
        Indicator.innerHTML = "You click the button!"
    }
)
const Button2 = document.getElementById("btn2")
Button2.addEventListener(
    "dblclick", function(){
        Jheyzee.style.color = "blue"
        Indicator.innerHTML = "You double click the button!"
    }
)

const Button3 = document.getElementById("btn3")
Button3.addEventListener(
    "mouseup", function(){
        Indicator.innerHTML = "Mouse button is released!"
    }
)

Button3.addEventListener(
    "mousedown", function(){
        Indicator.innerHTML = "Mouse button is press!"
    }
)

