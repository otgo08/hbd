function generator(){
    var x = Math.floor((Math.random()*5)+1);
    document.getElementById("divImage").innerHTML=`
    <img src="img/love${x}.jpg" style="width:300px;" >`;
}