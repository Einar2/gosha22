function t() {
  const letters = split(animatable)
  setTimeout(() => letters.forEach(span => span.style.opacity = 1), 0)

  function split(element) {
    element.style.wordBreak = 'break-word'

    const letters = element.innerText.split('').map((letter, i) => {
      const span = document.createElement('span')
      span.innerHTML = letter !== ' ' ? letter : '&nbsp;'
      span.style.opacity = 0
      span.style.transitionDelay = 0.1 * i + 's'
      return span
    })

    element.innerHTML = ''
    element.append(...letters)
    return letters
  }
}

t()

let vic_text = document.querySelector('.vic h3')



// важно!!!!!
let b = document.querySelector('body').offsetWidth
// важно!!!!!




let vicYes = document.querySelector('.vic_yes')
let vicNo = document.querySelector('.vic_no')

setTimeout(() => {
  t()
  vic_text.innerHTML = "Я расскажу тебе о истории Японской империи"


  setTimeout(() => {
    t()
    vic_text.innerHTML = "Приступим?"
    vicYes.style.display = "inline"
    vicNo.style.display = "inline"

    vicYes.onclick = slide_one

    vicNo.onclick = () => {
      vic_text.innerHTML = 'Хи-хи, ответ не правильный'
      setTimeout(() => {
        slide_one()
      }, 2000)
    }



  }, 5000)

}, 5000)

let one = document.querySelector('.slide_one')
let two = document.querySelector('.slide_two')
let three = document.querySelector('.slide_fhree')
let btn_one = document.querySelector('.btn_one')
let btn_two = document.querySelector('.btn_two')
let btn_three = document.querySelector('.btn_three')



let victoria = document.querySelector('.vic')

const slide_one = () => {
  if (b < 932) {
    victoria.style.left = '50%'
    victoria.style.top = '75%'
  }

  else{
    victoria.style.left = '80%'
  }

  if(b < 451){
    victoria.style.top = '105%'
  }

  

  one.style.display = "block"

  vicYes.style.display = "none"
  vicNo.style.display = "none"

  vic_text.innerHTML = "Хирохито, в свободное время <br> изучал биологию и географию"

  

  btn_one.onclick = slide_two
}

const slide_two = () => {
  if (b < 932) {
    victoria.style.left = '50%'
  }
  else{
    victoria.style.left = '15%'
  }
  one.style.display = 'none'
  two.style.display = 'block'
  
  vic_text.innerHTML = "В период с 1920 по 1936 экономика <br> Японии лиш развивалась"

  btn_two.onclick = slide_three
}

const slide_three = () => {
  two.style.display = 'none'
  three.style.display = 'block'
  vic_text.innerHTML = "Сейчас вы можете просмотреть <br> битвы Японии с 1920г по 1943г"
  btn_three.onclick = slide_last
}

const slide_last = () => {
  if (b < 932) {
    victoria.style.top = '50%'
  }
  three.style.display = "none"
  victoria.style.left = '50%'
  vic_text.innerHTML = 'Спасибо что слушали меня'

  setTimeout(() => {
    vic_text.innerHTML = 'Мне было приятно рассказывать <br> вам историю Японской империи'
    setTimeout(() => {
      vic_text.innerHTML = 'До скорых встреч 😊'
    }, 3000)
  }, 3000)

}




console.log(b)




