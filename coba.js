var array = [1,23,123,67,93,100];

var i;
var text="";


for(i=1;i<=15;i++){
    text += i + "<br>";
}

document.getElementById("loop").innerHTML=text;





document.getElementById("test").innerHTML=array.reverse();