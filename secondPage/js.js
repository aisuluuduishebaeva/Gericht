let popup = document.querySelector('.popup')

  let popupTogle= () => {
    popup.classList.toggle('active')
  }

  let ul = document.querySelector('header ul' )
  let burger = document.querySelector('.burger')

  let menuBurger = () =>{
    ul.classList.toggle('active')
    burger.classList.toggle('active')
  }
 
