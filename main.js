var swiper = new Swiper(".gallery__swiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop:true,
  });

  let popup = document.querySelector('.popup')

  let popupToggle = () => {
    popup.classList.toggle('active')
  }

  let a = document.querySelector('header a')
  let burger = document.querySelector('.burger')

  let showBurger = () =>{
    a.classList.toggle('.active')
    burger.classList.toggle('active')
  }


