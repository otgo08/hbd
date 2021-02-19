var birthDate = prompt(" Таны төрсөн он хэд вэ?" );

if   (birthDate !== null)
{
    var currentYear = new Date().getFullYear(); 
    var age = currentYear - birthDate; 
    var message =  " Сайн байна уу\nТаны нас : " + age ; 
    if( age > 18 )
    {
        console.log( " Та насанд хүрсэн байна! ")
    }
    else if( age > 15 )  {
        console.log(" Та ахлах ангийн сурагч байна");
    }  else if(age > 12 ) {
        console.log( "Та бага  ангийн сурагч байна");
    }
  else console.log(" Та сургуульд элсээгүй байнав");
    alert(message) ; 
} else  {
alert(
    "Уучлаарай та төрсөн огноогоо шалгаад зөв  оруулна уу "
);
}
