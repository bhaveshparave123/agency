

     var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 50,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });


    // dropdown

     function toggleDropdown() {
      document.getElementById("dropdownMenu").classList.toggle("show");
      document.getElementById("arrow").classList.toggle("down");
    }

    // Close dropdown if clicked outside
    window.onclick = function(event) {
      if (!event.target.closest('.dropdown')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let arrows = document.getElementsByClassName("arrow");
        for (let i = 0; i < dropdowns.length; i++) {
          dropdowns[i].classList.remove('show');
        }
        for (let i = 0; i < arrows.length; i++) {
          arrows[i].classList.remove('down');
        }
      }
    }