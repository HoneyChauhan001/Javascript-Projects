const buttonList = document.querySelectorAll('.button')
// console.log(buttonList)
const body = document.querySelector("body")

buttonList.forEach((button) => {
    console.log(button)
    button.addEventListener('click',function(e){
        // console.log(e)
        // console.log(e.target)
        body.style.backgroundColor = e.target.id
    })
})


