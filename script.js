var tl = gsap.timeline()

function time(){
    var a = 0
    setInterval(function(){
        a += Math.floor(Math.random()*20)
        if(a<100){
            document.querySelector("#loader h1").innerHTML = a+"%"
        }else{
            a = 100
            document.querySelector("#loader h1").innerHTML = a+"%"
        }
    },150)
}



function scrollUp() {

  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");

}
window.addEventListener("scroll", scrollUp);




(function ($) {
  $(function () {

    $('#navbar-toggle').click(function () {

      $('nav ul').slideToggle();

    });


    $('#navbar-toggle').on('click', function () {
      this.classList.toggle('active');
    });


    $('nav ul li a:not(:only-child)').click(function (e) {
      $(this).siblings('.navbar-dropdown').slideToggle("slow");

      $('.navbar-dropdown').not($(this).siblings()).hide("slow");
      e.stopPropagation();

    });


    $('html').click(function () {

      $('.navbar-dropdown').hide();
    });
  });
})(jQuery);






tl.to("#loader h1",{
    delay:0.5,
    duration:1,
    onStart:time()
})
tl.to("#loader",{
    top:"-100vh",
    delay:0.4,
    duration:1.5
})

gsap.to("#page1 h1",{
    transform:"translateX(-100%)",
    fontWeight:"100",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        // markers:true,
        start:"top 0",
        end:"top -200%",
        scrub:3,
        pin:true
    }
})
gsap.to("nav", {
  y:-300,
  duration: 3,
  backgroundColor: "#111",
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    start: "top -1%",
    // markers:true,
    end: "top -30%",
    scrub: 1
  }
})



gsap.to(".nav2 h5", {
  x:-3000,
  duration: 3,
  backgroundColor: "#111",
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    start: "top -1%",
    // markers:true,
    end: "top -30%",
    scrub: 1
  }
})



gsap.to(".main .page2", {
  // x:-3000,
  opacity:0,
  duration: 3,
  backgroundColor: "#111",
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    start: "top -8%",
    // markers:true,
    end: "top -10%",
    scrub: 3
  }
})


gsap.to(".main .page3", {
  // x:-3000,
  opacity:0,
  duration: 3,
  backgroundColor: "#111",
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    start: "top -8%",
    // markers:true,
    end: "top -10%",
    scrub: 3
  }
})



gsap.to(".main .page1", {
  y:400,
  // opacity:0,
  duration: 3,
  // backgroundColor: "#111",
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    start: "top -50%",
    // markers:true,

    end: "top -55%",
    scrub: 5
  }
})





gsap.to(".main h2", {
  y:-150,
  // opacity:0,
  duration: 3,
  // backgroundColor: "#111",
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    start: "top -120%",
    // markers:true,

    end: "top -145%",
    scrub: 2
  }
})



gsap.to(".main video", {
  y:-158,
  opacity:1,
  duration: 3,
  // backgroundColor: "#111",
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    start: "top -160%",
    // markers:true,

    end: "top -175%",
    scrub: 3
  }
})

gsap.to("#home", {
  y:-50,
  opacity:1,
  duration: 3,
  // backgroundColor: "#111",
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    start: "top -250%",
    // markers:true,

    end: "top -270%",
    scrub: 2
  }
})




gsap.to("#huii", {
  y:-60,
  opacity:1,
  duration: 3,
  // backgroundColor: "#111",
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    start: "top -320%",
    // markers:true,

    end: "top -330%",
    scrub: 3
  }
})





gsap.to("#gsap1", {
  y:-60,
  opacity:1,
  duration: 3,
  // backgroundColor: "#111",
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    start: "top -350%",
    // markers:true,

    end: "top -380%",
    scrub: 3
  }
})




gsap.to("#case", {
  y:-60,
  opacity:1,
  duration: 3,
  // backgroundColor: "#111",
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    start: "top -390%",
    // markers:true,

    end: "top -430%",
    scrub: 3
  }
})



gsap.from("#b1", {
  x:-300,
  opacity:0,
  duration: 3,
  // backgroundColor: "#111",
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    start: "top -500%",
    // markers:true,

    end: "top -480%",
    scrub: 4
  }
})




gsap.from("#b2", {
  // x:-300,
  opacity:0,
  duration: 3,
  // backgroundColor: "#111",
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    start: "top -500%",
    // markers:true,

    end: "top -480%",
    scrub: 4
  }
})


gsap.from("#b3", {
  x:300,
  opacity:0,
  duration: 3,
  // backgroundColor: "#111",
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    start: "top -500%",
    // markers:true,

    end: "top -480%",
    scrub: 4
  }
})


gsap.from("#b4", {
  x:-300,
  opacity:0,
  duration: 3,
  // backgroundColor: "#111",
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    start: "top -500%",
    // markers:true,

    end: "top -480%",
    scrub: 4
  }
})


gsap.from("#b5", {
  x:700,
  opacity:0,
  duration: 3,
  // backgroundColor: "#111",
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    start: "top -500%",
    // markers:true,

    end: "top -480%",
    scrub: 4
  }
})
