// js
 wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
    }
)
wow.init();
$('body').bubble({
  img:[
    './img/pink.png',
    './img/yellow.png',
    './img/green.png'
  ],
  namespace:'bubble_',
  animate:true,//enable animation

  imgSize: {
    min:30,
    max:80
  },
  shadowBlur: 1,
  granularity: 0.01,
  globalCompositeOperationBackground:'source-over',
  globalCompositeOperationObject:'source-over',
  bubbleFunc:false,
  radiusFunc:false,
  angleFunc:false,
  velocityFunc:false,
});




// jq
$(document).ready(function(){
	// counterup
	$('.counter').counterUp({
    delay: 10,
    time: 1000
    });
    // counter2
        var countdown = $("#countdown").countdown360({

    radius: 15.5,

    strokeStyle:"#477050",

    strokeWidth: 150,

    fillStyle:"#8ac575",

    fontColor:"#000000",

    fontFamily:"sans-serif",

    fontSize: 15,

    fontWeight: 700,

    autostart:true,
    seconds: 60,

    label: ["second","seconds"],

    startOverAfterAdding:true,

    smooth:false,

    onComplete:function () {}
    });
    // counter3 


    
});