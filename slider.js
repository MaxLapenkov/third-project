var link = document.querySelector(".item1");
        var link2 = document.querySelector(".item2");
        var link3 = document.querySelector(".item3");
        var slide1 = document.querySelector(".slide1");
        var slide2 = document.querySelector(".slide2");
        var slide3 = document.querySelector(".slide3");
        link.addEventListener("click", function (evt) {
            evt.preventDefault();
            link.classList.add("current");
            link2.classList.remove("current");
            link3.classList.remove("current");
            slide1.classList.remove("none");
            slide2.classList.add("none");
            slide3.classList.add("none");
            
        });
        link2.addEventListener("click", function (evt) {
            evt.preventDefault();
            link2.classList.add("current");
            link.classList.remove("current");
            link3.classList.remove("current");
            slide2.classList.remove("none");
            slide1.classList.add("none");
            slide3.classList.add("none");
            
        });
        link3.addEventListener("click", function (evt) {
            evt.preventDefault();
            link3.classList.add("current");
            link2.classList.remove("current");
            link.classList.remove("current");
            slide3.classList.remove("none");
            slide2.classList.add("none");
            slide1.classList.add("none");
            
        });
