var rect = document.querySelector("#rectangle")

rect.addEventListener("mousemove", function(dets){

    var rectLocation = rect.getBoundingClientRect();
    var insideRectVal = dets.clientX;

    if(insideRectVal < rectLocation.width/2){
        var redColor = gsap.utils.mapRange(0, rectLocation.width/2, 255, 0, insideRectVal);

        gsap.to(rect, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4,
        });
    }    else {
        var blueColor = gsap.utils.mapRange(rectLocation.width/2, rectLocation.width, 0, 255, insideRectVal);

        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: Power4,
        });
    }
});

rect.addEventListener("mouseleave", function(){
    gsap.to(rect, {
        backgroundColor: "white",
    })
})


// Learning:
// mapRange(inMin, inMax, outMin, outMax, valueToMap);

// difficulties:
// not praacticing often for getboundingclientrect, dets.x otherwise easy
// gsap learn properly

