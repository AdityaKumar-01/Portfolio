
// =================================================================
// navbar 
// =================================================================

current = ".skill";
previous= ".about";
const changeIcon = (previousIcon, currentIcon) =>{
    
    $(previousIcon).css({"padding-left":"23px","color":'white',"font-size":"22px","transition":"padding,font-size 0.5s"});
    $(currentIcon).css({"padding-left":"15px","color":'#00B87B',"font-size":"40px","transition":"padding 0.3s ,font-size 0.1s"});
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