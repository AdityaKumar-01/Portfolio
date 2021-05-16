// =================================================================
// navbar 
// =================================================================

current = ".skill";
previous= ".about";
const changeIcon = (previousIcon, currentIcon) =>{
    
    if (window.matchMedia('(max-width: 500px)').matches) {
        
        $(previousIcon).css({"color":'white',"font-size":"25px","transition":"padding,font-size 0.5s"});
        $(currentIcon).css({"color":'#00B87B',"font-size":"40px","transition":"padding 0.5s ,font-size 0.3s"});
    }
    else if (window.matchMedia('(max-width: 750px)').matches) {
        
        $(previousIcon).css({"color":'white',"font-size":"40px","transition":"padding,font-size 0.5s"});
        $(currentIcon).css({"color":'#00B87B',"font-size":"60px","transition":"padding 0.5s ,font-size 0.3s"});
    }
    
    else{
        $(previousIcon).css({"color":'white',"font-size":"22px","transition":"padding,font-size 0.5s"});
        $(currentIcon).css({"color":'#00B87B',"font-size":"40px","transition":"padding 0.5s ,font-size 0.3s"});

    }
    
}

const panelHandler = (previousPanel, currentPanel) => {

    $(previousPanel).toggleClass('hidePanel');
    $(currentPanel).toggleClass('hidePanel');
}


const changeSection = (className) => {

    previous=current;
    current="."+className.split(" ")[0].split('-')[0];
    currentIcon = current+"-icon";
    currentPanel = current+"-panel";
    previousIcon=previous+"-icon";
    previousPanel = previous+"-panel";
    if(current!=previous){
        changeIcon(previousIcon,currentIcon);
        panelHandler(previousPanel, currentPanel);
    }
}

tippy('.mail',{
    content:"aditya7238195@gmail.com"
})

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#00B87B"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#00B87B"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.9,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 80,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": false
});





