
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