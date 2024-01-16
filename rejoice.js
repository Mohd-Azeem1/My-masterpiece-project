function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()

let tl = gsap.timeline()
tl.from("#loader h3",{
  x: 40,
  stagger: .1,
  opacity:0,
  duration: 1,
})
tl.to("#loader h3",{
  x: -40,
  opacity: 0,
  stagger: .1,
  duration:1,
})
tl.to("#loader",{
  opacity:0,
})
tl.from("#page1-content h1 span",{
  y:10,
  opacity:0,
  stagger: .05,
  duration: 1,
  delay: -0.3,
})
tl.from("nav",{
  y:20,
  opacity:0,
  delay: -0.4,
})
tl.to("#loader",{
  display: "none"
})





function play(){
    let cursor = document.getElementById("cursor")
    let page1Content = document.getElementById("page1-content")


    window.addEventListener("mousemove", (det)=>{
        gsap.to(cursor,{
            x:det.x,
            y: det.y
        })
    })
    page1Content.addEventListener("mouseenter", (det)=>{
        gsap.to(cursor,{
            scale: 1,
            opacity: 1
        })
    })
    page1Content.addEventListener("mouseleave", (det)=>{
        gsap.to(cursor,{
            scale: 0,
            opacity: 0
        })
    })
}
play()

function TakeIt(){
  let TakeIt = document.querySelector("#take-it")
  let platform = document.querySelector("#page5")
  platform.addEventListener("mousemove",(dets)=>{
    gsap.to(TakeIt,{
      x: dets.x,
      y: dets.y
    })
  }) 

  platform.addEventListener("mouseenter", (det)=>{
    gsap.to(TakeIt,{
        scale: 1,
        opacity: 1
    })
})
platform.addEventListener("mouseleave", (det)=>{
    gsap.to(TakeIt,{
        scale: 0,
        opacity: 0
    })
})
}
TakeIt()


function page2Content(){
  gsap.from(".p2-t-t",{
    scrollTrigger:{
      target: "#page2-top",
      scroller: "#main",
      // markers: true,
      start: "80% 60%",
      end: "80% 40%",
      scrub: 2,
      
    },
    y: 100,
    stagger: 0.1
  })

  var clutter = ""
  document.querySelector("#page2-text").textContent.split(" ").forEach(elem => {
    clutter += `<span>${elem} &nbsp;</span>`
    document.querySelector("#page2-text").innerHTML = clutter
    
});

gsap.from("#page2-text>span",{
  scrollTrigger:{
  target: "#page2-text",
  scroller:"#main",
  // markers:true,
  start:"40% top",
  end: "80% top",
  scrub: 4
},
y:100,
stagger: .05

})
}
page2Content()



function page3Text(){
  gsap.from("#page3-top h1",{
    scrollTrigger: {
      target: "#page3",
      scroller: "#main",
      // markers: true,
      start: "220% 80%",
      end: "220% 50%",
      scrub: 1

    },
    y: 60,
    stagger: 0.12
  })
}
page3Text()



function page4Text(){
  gsap.from("#page4-top h3 span",{
    scrollTrigger: {
      target: "#page4",
      scroller: "#main",
      // markers: true,
      start: "420% 80%",
      end: "420% 65%",
      scrub: 1

    },
    y: 75,
    stagger: 0.12
  })
  gsap.from("#page4-bottom h1",{
    scrollTrigger: {
      target: "#page4",
      scroller: "#main",
      // markers: true,
      start: "420% 80%",
      end: "420% 60%",
      scrub: 1

    },
    y: 75,
    stagger: 0.12,
    opacity: 0
  })

}
page4Text()


function seatAnimation(){
  gsap.to("#no-con",{
    scrollTrigger:{
      target: "#no-con",
      scroller: "#main",
      // markers: true,
      start: "505% 65%",
      end: "505% 30%",
      scrub: 3
    },
    translateY: -325
  })
}
seatAnimation()


function page6Text(){
  gsap.from("#page6-top h3 span",{
    scrollTrigger: {
      target: "#page6",
      scroller: "#main",
      // markers: true,
      start: "620% 70%",
      end: "620% 60%",
      scrub: 1

    },
    y: 75,
    stagger: 0.12
  })
  gsap.from("#page6-b h1",{
    scrollTrigger: {
      target: "#page6",
      scroller: "#main",
      // markers: true,
      start: "630% 60%",
      end: "630% 40%",
      scrub: 1

    },
    y: 75,
    stagger: 0.12
  })

}
page6Text()


function slide(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      duration: 0.8,
      disableOnInteraction: true,
    },
  });
}
slide()


function page7Text(){
  gsap.from("#page7-b h1",{
    scrollTrigger: {
      target: "#page7-b",
      scroller: "#main",
      // markers: true,
      start: "800% 80%",
      end: "800% 50%",
      scrub: 1

    },
    y: 60,
    // stagger: 0.12
  })
}
page7Text()

function footerRejouiceAnimatino(){
  // var letterSpan = ""
  // document.querySelector("#footer-bottom h1").textContent.split(" ").forEach(elem => {
  //   letterSpan += `<span>${elem} &nbsp;</span>`
  //   document.querySelector("#footer-bottom h1").innerHTML = letterSpan
  // })
  gsap.from("#footer-bottom h1 span",{
    scrollTrigger:{
      target: "#footer-bottom",
      scroller: "#main",
      // markers: true,
      start: "905% 50%",
      end: "915% 40%",
      scrub: 4,
    },
    y: -180,
    delay: 2,
    stagger: .04
  })
}
footerRejouiceAnimatino()

function footerTopAnimation(){
  gsap.from("#footer-top",{
    scrollTrigger:{
      target: "#footer-top",
      scroller: "#main",
      // markers: true,
      start: "905% 40%",
      end: "910% 50%",
      scrub: 2
    },
    opacity: 0.5,

  })
}
footerTopAnimation()

window.onload = function nav(){
  document.querySelector("nav").addEventListener("click",(dets)=>{
    console.log(dets.target.textContent)
    if(dets.target.textContent=="Menu"){
      console.log("ha menu hi to hai")
      let tl1 = gsap.timeline()
      tl1.to("#nav",{
        display: "block",
        opacity: 1,
        delay:-5,
      })
      tl1.to("#nav",{
        y: 550,
        duration: .8
      })

      tl1.from("#nav-v-con video",{
        scale: 0,
        duration: .8,
        delay: -.6
      })
      tl1.from("#nav-list ul li",{
        y : 50,
        opacity: 0,
        stagger: .1,
        delay: -.8,
        duration: .5,     
      })
      tl1.from("#nav-button button",{
        y : 50,
        opacity: 0,
        // stagger: .1,
        delay: -.4,
        duration: .5,     
      })
      tl1.from("#nav-bottom h3",{
        x:50,
        opacity: 0,
        duration: .5,
        delay: -.3,
      })

    }else{
      console.log("na bhai je to kuch or hi hai")
    }
  })


  window.addEventListener("click",(dets)=>{
    console.log(dets.target)
  })



  document.querySelector("#navClose").addEventListener("click",()=>{
    gsap.to("#nav",{
      y: -500,
      display: "none",
      opacity: 0,
      duration: .8
    })
    
  })
}