let counter = document.querySelector('.counter')
let buttons = document.querySelectorAll('.btn')
let count = 0


counter.textContent = count
buttons.forEach(button=>{
    button.addEventListener('click',(e)=>{
        let currentBtn = e.target.classList
        if (currentBtn.contains('increase')){
            count++
        }
        else if (currentBtn.contains('decrease')){
            count--
        }
        else{
            count = 0
        }
        
        counter.textContent = count 
       count<0?counter.style.color = 'red':count>0?counter.style.color = 'green':
       counter.style.color = 'black'

    //     let currentbtn = currentBtn
    //     counter.textContent = count
    // currentbtn.contains('increase')?count++?
    // currentbtn.contains('decrease')?count--:count = 0
    })
})