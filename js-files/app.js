const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
  
    burger.addEventListener('click' , ()=>{
          nav.classList.toggle('nav-active');
          burger.classList.toggle('toggle');

  
    });
  }
  
  navSlide();

  $('.slick-carousel').slick({
      nextArrow: $('.next-c'),
      prevArrow: $('.prev-c'),
      infinite: true,
      slidesToShow: 3, // Shows a three slides at a time
      slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
      arrows: true, // Adds arrows to sides of slider
    });


    window.addEventListener('scroll',(e)=>{
      const nav = document.querySelector('.nav');
      if(window.pageYOffset>0){
        nav.classList.add("add-nav-shadow");
      }else{
        nav.classList.remove("add-nav-shadow");
      }
    });

