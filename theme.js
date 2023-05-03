let btn = document.querySelector('.theme')
let vic = document.querySelector('.vic img')
let text = document.querySelectorAll('.vic span')
let j = document.querySelector('#animatable')
let click = false

let slide_two_h2 = document.querySelector('.two_text h2')
let slide_two_p = document.querySelector('.two_text p')
let slide_two_a = document.querySelector('.two_text a')



let logo = document.querySelector('nav h2')

let body = document.querySelector('body')

let one_text_h2 = document.querySelector('.one_text h2')
let one_text_p = document.querySelector('.one_text p')
let one_text_a = document.querySelector('.one_text a')
let one_text_hero = document.querySelector('.h')

let slide_three_h2 = document.querySelector('.slide_fhree h2')
let slide_three_p = document.querySelector('.slide_fhree p')
let slide_three_a = document.querySelector('.btn_three')

let slide_three_st_left = document.querySelector('.btn_left')
let slide_three_st_right = document.querySelector('.btn_right')


btn.onclick = () => {
    click = !click
    if (click == true) {
        slide_three_a.style.color = "white"
        slide_three_a.style.backgroundColor = "black"

        slide_three_st_left.src = 'img/st_b.png'
        slide_three_st_right.src = 'img/st_b.png'

        slide_three_h2.style.color = '#000'
        slide_three_p.style.color = '#000'

        slide_two_h2.style.color = "#000"
        slide_two_a.style.color = "#fff"
        slide_two_a.style.backgroundColor = "#000"
        slide_two_p.style.color = "#000"
        one_text_h2.style.color = "#000"
        one_text_p.style.color = "#000"
        one_text_a.style.color = "#fff"
        one_text_hero.style.color = "#000"
        
        one_text_a.style.backgroundColor = "#000"
        body.style.backgroundColor = 'white'

        text.forEach(element => {
            element.style.color = "#ff0000"
        })


        btn.src = "img/moon.png"
        
        vic.src = "img/v_b.png"

        logo.style.color = "black"

    
    }
    else{
        slide_three_a.style.color = "black"
        slide_three_a.style.backgroundColor = "white"

        slide_three_st_left.src = 'img/st.png'
        slide_three_st_right.src = 'img/st.png'

        slide_three_h2.style.color = '#fff'
        slide_three_p.style.color = '#fff'

        slide_two_a.style.color = "#000"
        slide_two_a.style.backgroundColor = "#fff"
        slide_two_h2.style.color = "#fff"
        slide_two_p.style.color = "#fff"
        one_text_hero.style.color = "#fff"
        one_text_h2.style.color = "#fff"
        one_text_p.style.color = "#fff"
        one_text_a.style.color = "#000"
        one_text_a.style.backgroundColor = "#fff"

        body.style.backgroundColor = 'black'

        text.forEach(element => {
            element.style.color = "#52FF26"
        })


        btn.src = "img/sun.png"
        
        vic.src = "img/v_w.png"

        logo.style.color = "white"

        
    }
    
}

