var a;
function show_hide()
{
if(a==1)
{
document.getElementById("image").style.display="inline";
return a=0;
}
else 
{
document.getElementById("image").style.display="none";
return a=1;
}
}

function generator(){
    var x = Math.floor((Math.random()*10)+1);
    document.getElementById("divImage").innerHTML=`
    <img src="image/love${x}.jpg" style="width:300px;" >`;
}