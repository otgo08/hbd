medeelel( " bold ", " zuraach ", 98);
medeelel( " sarnai ", " bagsh " , 38);
medeelel( " bat ", " emch " , 83);
medeelel( " zaya ", " jolooch ",  64) ;

function medeelel( ner , job,  dun ) {
    
switch (job) {
   case " bagsh " :  console.log( ner + " bol hicheel zaadag" ); break ; 
   case" zuraach " :  console.log( ner + " bol zurag zurdag") ;  break; 
   case" emch " :  console.log( ner + "  bol hun emchildeg" ) ;  break; 
   case" jolooch " :  console.log( ner + " bol mashin baridag ") ;  break; 
}
switch (true) {
    case  dun >= 90 && dun <=100  : console.log( ner + " bol onts surdag " ) ; break;
    case  dun >= 80 && dun <=90  : console.log( ner + " bol sain surdag" ) ;  break;
    case  dun >= 70 && dun <=80  : console.log( ner + " bol sain surdag" ) ;  break;
    default : console.log( ner + " bol muu surdag " ) ; }
}