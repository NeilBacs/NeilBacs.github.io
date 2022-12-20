let C1=document.getElementById("C1")
let C2=document.getElementById("C2")
let V1=document.getElementById("V1")
let V2=document.getElementById("V2")

let ComputeDilutionBtn=document.getElementById("ComputeDilutionBtn")


// ComputeDilutionBtn.addEventListener("click", ()=>{
//     if(C1.value && C2.value && V1.value){
//         V2.value=(C1.value*V1.value)/C2.value
//     }else if(C1.value && C2.value && V2.value){
//         V1.value=(V2.value*C2.value)/C1.value
//     }else if(C1.value && V1.value && V2.value){
//         C2.value=(C1.value*V1.value)/V2.value
//     }else if(C2.value && V1.value && V2.value){
//         C1.value=(C2.value*V2.value)/V1.value
//     }else{
//         alert("Leave one input box empty on Dilution process")
//     }
// })


let MM=document.getElementById("MM")
let grams=document.getElementById("grams")
let numMoles=document.getElementById("#moles")


let ComputeNumMolesBtn=document.getElementById("ComputeNumMolesBtn")


ComputeNumMolesBtn.addEventListener("click", ()=>{
    if(grams.value && numMoles.value ){
        MM.value=grams.value/numMoles.value 
    }else if(MM.value && numMoles.value){
        grams.value=MM.value*numMoles.value
    }else if(MM.value && grams.value){
        numMoles.value=grams.value/MM.value
    }else{
        alert("Leave one input box empty on Number of moles")
    }
})


let MolesSolute=document.getElementById("MolesSolute")
let LOrKg=document.getElementById("L/Kg")
let Molarity=document.getElementById("Molarity")


let ComputeMolarityBtn=document.getElementById("ComputeMolarityBtn")


ComputeMolarityBtn.addEventListener("click", ()=>{
    if(MolesSolute.value && LOrKg.value ){
        Molarity.value=MolesSolute.value/LOrKg.value 
    }else if(LOrKg.value && Molarity.value){
        MolesSolute.value=Molarity.value*LOrKg.value
    }else if(MolesSolute.value && Molarity.value){
        LOrKg.value=MolesSolute.value/Molarity.value
    }else{
        alert("Leave one input box empty on Molarity/Molality")
    }
})

