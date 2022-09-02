let links=["plain.css","aqua.css","blaze.css"]
let button=document.getElementById("theme")
button.onclick=change


let selector=1
function change(){  
    document.getElementById("link").href=links[selector]
    if(selector==2){
        selector=0
    }
    else{
        selector++
    }

}
