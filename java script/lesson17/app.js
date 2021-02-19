//     Обьёокт
var h1 = {
    name : " Bold " ,
    age : 23 ,
    job : " Bagsh " ,
    hobby : " sport " ,
    location : " hud 23 horoo" ,
    information :   function() {
        console.log( this.name + " ni " +  this.age + "tai ba 3r surguulid " + this.job+'ildag ym.')
    } };
h1.information( )