
        let slideIndex = 1;
        showSlides(slideIndex);
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }
        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            //   dots[slideIndex-1].className += " active";
            const list = dots[slideIndex - 1].classList;
            list.add("active");
        }
        function nightmode() {
            document.body.style.backgroundColor = "black"
            document.body.style.color = "white"
            var links = document.getElementsByTagName("a");
            for (var i = 0; i < links.length; i++) {
                // if (links[i].href) {
                    links[i].style.color = "white";
                // }
            }

        }