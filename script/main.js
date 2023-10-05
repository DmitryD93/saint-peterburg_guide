window.document.addEventListener('DOMContentLoaded', function() {
  // new WOW().init();


  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 2,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    a11y: {
      enabled: true,
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
    },


  });


  // Карта


  ymaps.ready(init);
  function init() {
    let myMap;
    myMap = new ymaps.Map('map', {
      center: [59.949720, 30.314478],
      zoom: 12.5,
      controls: [],
    }, {
      searchControlProvider: 'yandex#search',
    }, {
      restrictMapArea: [
        [59.838, 29.511],
        [60.056, 30.829],
      ],
    });

    const placemark = new ymaps.Placemark([59.945765, 30.320615], {}, {
      iconLayout: 'default#image',
      iconImageHref: '../icons/map_icon.png',
      iconImageSize: [20, 60],
      iconImageOffset: [0, -45],
    });
    myMap.geoObjects.add(placemark);
    myMap.behaviors.disable(['scrollZoom']);
  }

  let burger = document.querySelector('.hero__burger');
  let burgerMenu = document.querySelector('.header__list')


  burger.addEventListener('click', () => {
    burgerMenu.classList.toggle('burger--active')
    burger.classList.toggle('burger--active')
    document.querySelector('body').classList.toggle('disable-scroll')
  })
  document.querySelectorAll('a').forEach(function(e) {
    e.addEventListener('click', () => {
      document.querySelector('body').classList.remove('disable-scroll'),
      burgerMenu.classList.remove('burger--active'),
      burger.classList.remove('burger--active')
    })
  })

});


// // скролл мой вариант
// window.addEventListener('scroll', function () {
//   let scrollPosition = window.scrollY;
//   console.log(scrollPosition) // посмотреть позицию скролла


//   if (scrollPosition >= 800) {
//     document.querySelector('.about-city').classList.add('fadeInUp')
//   }


// })
