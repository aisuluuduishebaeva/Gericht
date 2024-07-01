var swiper = new Swiper(".gallery__swiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop:true,
  });

  let popup = document.querySelector('.popup')

  let popupToggle = () => {
    popup.classList.toggle('active')
  }

  let ul = document.querySelector('header ul')
  let burger = document.querySelector('.burger')

  let showBurger = () =>{
    ul.classList.toggle('active')
    burger.classList.toggle('active')
  }


 