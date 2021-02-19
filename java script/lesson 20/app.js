

var command = " " ;

while ( command !== "quet")  
{
  command = prompt("За та комантаа оруулна уу" );
  console.log( "Таны команд : " + command);
}

console.log(" За баяртай!");

for  ( var i = 10; i > 0; i -- ) {
    console.log(i);

    var s = " ";
    for ( var j = 1; j <= i; j++) {
        s = s + j + " " ;
    }
    console.log(s);
}