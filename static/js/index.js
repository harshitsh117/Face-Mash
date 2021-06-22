var instructions_container = document.getElementById("instructions-container")

var close_button_instructions = document.getElementById("instructions-close-button")

var rotate_phone_container = document.getElementById("rotate-phone-container")

var rotate_close_button = document.getElementById("rotate-close-button") 

close_button_instructions.addEventListener("click", ()=>{
    console.log("close")
    instructions_container.classList.add("hide")
    // rotate_phone_container.classList.add("show")
})

// rotate_close_button.addEventListener("click",()=>{
//     rotate_phone_container.classList.remove("show")
// })

let arr = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"]
var popup = document.getElementById("popup-container")
var popup_img=document.getElementById("winning-img")
var winning_car_src

let i1 = document.getElementById("btn1")
let i2 = document.getElementById("btn2")
var win

i1.addEventListener("click",func1)
i2.addEventListener("click",func2)


let i=1
function func1()
{   
    if(i==arr.length-1)
    {
        winning_car_src = i1.src        
        winner()
        return
    }
    i++
    i2.src=`/static/images/${arr[i]}`
}

function func2()
{
    if(i==arr.length-1)
    {
        winning_car_src = i2.src        
        winner()
        return
    }
    i++
    i1.src=`/static/images/${arr[i]}`
}


function winner()
{
    console.log("game ended")
    popup_img.src = winning_car_src
    popup.classList.add('show')
}

var popup_close_button = document.getElementById('popup-close-button')
popup_close_button.addEventListener("click",()=>{
    popup.classList.remove('show')
})