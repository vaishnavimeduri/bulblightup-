function bulbon(){
    document.getElementById('firstimg').src="https://www.w3schools.com/js/pic_bulbon.gif"
}
function bulboff(){
    document.getElementById('firstimg').src="https://www.w3schools.com/js/pic_bulboff.gif"
}
var b=false
function bulbonoff(){
    if(b==false){
        document.getElementById('secondimg').src="https://www.w3schools.com/js/pic_bulbon.gif"
        b=true 
    }
    else{
        document.getElementById('secondimg').src="https://www.w3schools.com/js/pic_bulboff.gif"
        b=false  
    }
}
var c=false
function bulbonoff1(){
    
    if(c==false){
        document.getElementById('thirdimg').src="https://www.w3schools.com/js/pic_bulbon.gif"
        c=true 
    }
    else{
        document.getElementById('thirdimg').src="https://www.w3schools.com/js/pic_bulboff.gif"
        c=false  
    }
}