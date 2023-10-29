// we will do the following things:-
                        
//1)------------------------------- use Locomotive JS for Smooth Scrolling -------------------------------



//-----Syntax copied from :- https://github.com/locomotivemtl/locomotive-scroll
const scroll = new LocomotiveScroll({
    // Syntax:- el: document.querySelector('[data-scroll-container]'), here "el" means main parent div which we have named as "main" in HTML 
    // that means our whole website is in main div in HTML

    el: document.querySelector('#main'),
    smooth: true
});



//2)----------------------------------------- gsap to Animate ---------------------------------------

gsap.from(".nlink",{
    stagger: .3, //it means that keep a gap of .3 sec to animate all -> if u reload the site u will see the animation
    //multiple elements ko ek ek karke lane ka kam STAGGER KARTA HAI reload and see
    y: 20, //to make it popup from Y axis downwards 20 points
    opacity:0, //it will not work because "a-tags" dot allow animation to make it working in CSS make a-tag as INLINE-BLOCK
    ease:Power2,
    // What is ease in animation?
    // --->"Ease in"----> is starting the animation slowly and then speeding up the movement as it comes to a halt. 
    // "Ease out" ------> is starting off quickly and slowing down at the end. Ease-in-out is a combination of these.
    duration:1,
})
  




        //********** Animating Sustain Empheral and Visit our Gallery of hero section **********


//to apply the effect we will give Sustain Empheral and Visit our Gallery common class "anim2" 
gsap.from(".anim2",{
    y:50,
    stagger: .3,
    opacity:0,
    ease: Expo ,
    duration: 1,

})



//giving effects to images using sheryjs (shery js is nothing but js styles created by team SHERIYANS)


        //i) Ephemeral Image
Shery.imageEffect("#imgntext img",{
    style:4,
    config: {"uColor":{"value":false},"uSpeed":{"value":0.6,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.5,"range":[0,5]},"uFrequency":{"value":3.5,"range":[0,10]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.75},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.26,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    //the above code is copied by using debug which will appear if u keep below line true and do the changes in the pannel according to us and then copy it to cipboard and copy it in "config"
    debug: false, //make it true when u have to apply effects like above:-
    // In debug we have enaled "IMAGE ZOOMER" and "Effect mode ACTIVE ON HOVER"
})

        //ii) Sustain Image

Shery.imageEffect("#susimagewrapper img",{
            style:5,
            config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.87,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.23,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}, 
            debug: false, 
})

    // if u applyeffect of ephemeral than u will see the image will also get under the text that we have enterd in Sustain so we will comment some part in CSS so we remove above line
                // position: absolute;
                // top: 40%;
                // left: 50%;
                // transform: translate(-50%,-50%);

        


        //iii) Picture div Images Animations:-


Shery.imageEffect(".imgeffect img",{ //we will give class as imgeffect so that it will become easy to apply the effects to both image using single animation
    style:5,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.87,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.23,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}, 
    debug: false, 
})







        //iv) Grow efefct to Images using z index which is only possible due to shery js

        gsap.from("#imgntext img",{ //when u use from means vo image apne zo bhi axis di he vaha se aaega and agar aap to ka use karte ho to us axis value tak jaega
            y: 70, //yahe pe vo y-axis ke -3 se original position tak aaegi kyuki humne gsap.from ka use kiya hai reload to see animation
            opacity: 0,
            duration: 2,
            ease: Expo.easenInOut, 
        })
        


        //v) Effect to Banner Bottle Images (Changing the image by clicking and holding on the image):-

Shery.imageEffect("#bimg",{ //gooey effects only work on div thats why we havent specified it as "#bimg img"
    style:5,
    debug: false,
    gooey: true, //the effect will be applied only if u keep the value of gooey true. 
    //it is to give the effect on hovering and when u click and hold the image changes u can see it on website and to edit the gooey effect U NEED TO KEEP DEBUG ON
    //the gooey pannel will be visible only if u the debug pannel is off in above effects

    config: {"a":{"value":0.74,"range":[0,30]},"b":{"value":-0.95,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.393598802687427},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.2,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":33}},"discard_threshold":{"value":0.78,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.45,"range":[0,2]},"noise_scale":{"value":7.44,"range":[0,100]}},
}) 




        //vi) On/OFF effect to the video:-

document.querySelector('#ftext button')
.addEventListener("mouseover",function(){
    // alert(); //for checking wether the effect works
    gsap.to("#future video",{
        opacity:1, //that is ON means video will be visible when mouse ointer is on it
        duration:1.5,
        ease: Power4,
    })
})

//and the video will be keep on playing unless and until u reload the website to OFF it we write the Following Code:-
document.querySelector('#ftext button')
.addEventListener("mouseleave",function(){
    gsap.to("#future video",{
        opacity:0, //that is OFF means video will not be visible when mouse pointer is not on it
        duration:1,
        ease: Power4,
    })

})














//3)shery js to animate images accordingly  (Shery js is the js on github of Sheriyans "https://github.com/asynchronousJavascriptor/sheryjs")

            // ------------- Animating Ephemeral and Equlibrium with Sheryjs -------------

                    // copied from :-"https://github.com/asynchronousJavascriptor/sheryjs" Text Animate 

Shery.textAnimate("#headings h1" /* Element to target.*/, {
//Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});