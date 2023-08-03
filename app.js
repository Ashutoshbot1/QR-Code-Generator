const url=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`;

let imgBox=document.getElementById("img-box");
let qrImage=document.getElementById("qrImage");
let qrText=document.getElementById("qr-text");

function generateQR(){
    qrImage.src=url+qrText.value;
}

document.querySelector("button").addEventListener("click",()=>{
    imgBox.classList.add("show-img");
    generateQR();

});