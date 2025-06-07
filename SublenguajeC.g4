grammar SublenguajeC;

// --- REGLAS DEL PARSER ---

programa:      instrucciones;
instrucciones: instruccion+;
instruccion:   seleccion;
seleccion:     SWITCH LPAREN IDENTIFICADOR RPAREN LBRACE cases RBRACE;
cases:         case+;
case:          CASE NUMERO COLON sentencias
             | DEFAULT COLON sentencias
             ;
sentencias:    sentencia+;
sentencia:     salida | terminar;
salida:        PRINTF LPAREN CADENA RPAREN SEMICOLON;
terminar:      BREAK SEMICOLON;

// --- REGLAS DEL LEXER (TOKENS) ---

// Palabras Clave y Símbolos
SWITCH:    'switch';
LPAREN:    '(';
RPAREN:    ')';
LBRACE:    '{';
RBRACE:    '}';
CASE:      'case';
COLON:     ':';
DEFAULT:   'default';
PRINTF:    'printf';
SEMICOLON: ';';
BREAK:     'break';

// Tokens con patrones
CADENA:        '"' ~["]* '"';
IDENTIFICADOR: LETRA (LETRA | DIGITO | '_')*;
NUMERO:        DIGITO+;

// Fragmentos y Espacios
fragment LETRA:   [a-zA-Z];
fragment DIGITO:  [0-9];
WS:            [ \t\r\n]+ -> skip;