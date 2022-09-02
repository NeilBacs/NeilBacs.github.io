let x="Ginoong Tatalino pahingi ng iyong karunungan"
let orasyon=document.getElementById("orasyon")
let sumete=document.getElementById("isumite")
let count=1
let truval=""
let dot=0




orasyon.addEventListener("input",()=>{
    for (let i of orasyon.value){
        if (i=="."){
        dot++
        orasyon.value=orasyon.value.replace(".","")
        }
    }
        
    
    if (dot%2!=0){ 
        truval+=orasyon.value.slice(count-1)
        orasyon.value=x.slice(0,count)
        count++
   
    }
    
    
})
sumete.addEventListener("click",()=>{
    if (orasyon.value!=x){
        document.getElementById("display").innerHTML="Mali ang iyong orasyon"
    }
    else if (orasyon.value==x && dot==0){
        document.getElementById("display").innerHTML="Pasensya na si Master Yonel lang ang pwede magtanong"
    }
    else if(orasyon.value==x && dot!=0){
    document.getElementById("display").innerHTML="Ang kasagutan: " + truval
    }
    
})