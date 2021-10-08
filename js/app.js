
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}



function splitScroll(){
const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
  duration: '200%',
  triggerElement: '.about-title',
  triggerHook: 0
})

.setPin('.about-title')
.addTo(controller);
}

splitScroll();

function splitScrolla(){
  const controller = new ScrollMagic.Controller();
  
  new ScrollMagic.Scene({
    duration: '200%',
    triggerElement: '.arya',
    triggerHook: 0
  })
  
  .setPin('.arya ')
  .addTo(controller);
  }
  splitScrolla();

  function splitScrollb(){
    const controller = new ScrollMagic.Controller();
    
    new ScrollMagic.Scene({
      duration: '200%',
      triggerElement: '.phoenix',
      triggerHook: 0
    })
    
    .setPin('.phoenix ')
    .addTo(controller);
    }
    splitScrollb();

    
