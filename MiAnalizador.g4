grammar MiAnalizador;

programa: instrucciones;
instrucciones:
  instruccion
  | instrucciones instruccion
  ;

instruccion: bucle;
bucle:
  'while' '(' condicion ')' '{' sentencia '}'
  ;

sentencia:
  salida
  | salida sentencia
  | terminar
  ;

salida:
  'printf' '(' cadena ')' ';'
  ;

terminar:
  'break' ';'
  ;
condicion:
  '0'
  | '1'
  ;

cadena:
  '"' caracteres '"'
  ;

caracteres:
  caracter
  | caracteres caracter
  ;

caracter:
  LETRA
  | DIGITO
  | SIMBOLO
  ;

LETRA:
  [a-zA-Z]
  ;

DIGITO:
  [0-9]
  ;

SIMBOLO:
  [.,!?:; ] 
  ;

WS: [ \t\r\n]+ -> skip;