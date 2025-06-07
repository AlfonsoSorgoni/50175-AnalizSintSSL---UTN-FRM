// Generated from c:/Users/guill/Downloads/Alfonso/Analizador/SublenguajeC.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import SublenguajeCListener from './SublenguajeCListener.js';
import SublenguajeCVisitor from './SublenguajeCVisitor.js';

const serializedATN = [4,1,15,70,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,1,1,4,1,24,8,1,11,1,12,1,
25,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,4,4,39,8,4,11,4,12,4,40,1,
5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,50,8,5,1,6,4,6,53,8,6,11,6,12,6,54,1,7,1,7,
3,7,59,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,0,0,10,0,2,4,6,8,10,12,
14,16,18,0,0,64,0,20,1,0,0,0,2,23,1,0,0,0,4,27,1,0,0,0,6,29,1,0,0,0,8,38,
1,0,0,0,10,49,1,0,0,0,12,52,1,0,0,0,14,58,1,0,0,0,16,60,1,0,0,0,18,66,1,
0,0,0,20,21,3,2,1,0,21,1,1,0,0,0,22,24,3,4,2,0,23,22,1,0,0,0,24,25,1,0,0,
0,25,23,1,0,0,0,25,26,1,0,0,0,26,3,1,0,0,0,27,28,3,6,3,0,28,5,1,0,0,0,29,
30,5,1,0,0,30,31,5,2,0,0,31,32,5,13,0,0,32,33,5,3,0,0,33,34,5,4,0,0,34,35,
3,8,4,0,35,36,5,5,0,0,36,7,1,0,0,0,37,39,3,10,5,0,38,37,1,0,0,0,39,40,1,
0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,41,9,1,0,0,0,42,43,5,6,0,0,43,44,5,14,
0,0,44,45,5,7,0,0,45,50,3,12,6,0,46,47,5,8,0,0,47,48,5,7,0,0,48,50,3,12,
6,0,49,42,1,0,0,0,49,46,1,0,0,0,50,11,1,0,0,0,51,53,3,14,7,0,52,51,1,0,0,
0,53,54,1,0,0,0,54,52,1,0,0,0,54,55,1,0,0,0,55,13,1,0,0,0,56,59,3,16,8,0,
57,59,3,18,9,0,58,56,1,0,0,0,58,57,1,0,0,0,59,15,1,0,0,0,60,61,5,9,0,0,61,
62,5,2,0,0,62,63,5,12,0,0,63,64,5,3,0,0,64,65,5,10,0,0,65,17,1,0,0,0,66,
67,5,11,0,0,67,68,5,10,0,0,68,19,1,0,0,0,5,25,40,49,54,58];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SublenguajeCParser extends antlr4.Parser {

    static grammarFileName = "SublenguajeC.g4";
    static literalNames = [ null, "'switch'", "'('", "')'", "'{'", "'}'", 
                            "'case'", "':'", "'default'", "'printf'", "';'", 
                            "'break'" ];
    static symbolicNames = [ null, "SWITCH", "LPAREN", "RPAREN", "LBRACE", 
                             "RBRACE", "CASE", "COLON", "DEFAULT", "PRINTF", 
                             "SEMICOLON", "BREAK", "CADENA", "IDENTIFICADOR", 
                             "NUMERO", "WS" ];
    static ruleNames = [ "programa", "instrucciones", "instruccion", "seleccion", 
                         "cases", "case", "sentencias", "sentencia", "salida", 
                         "terminar" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SublenguajeCParser.ruleNames;
        this.literalNames = SublenguajeCParser.literalNames;
        this.symbolicNames = SublenguajeCParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SublenguajeCParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.instrucciones();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SublenguajeCParser.RULE_instrucciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 22;
	            this.instruccion();
	            this.state = 25; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SublenguajeCParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.seleccion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	seleccion() {
	    let localctx = new SeleccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SublenguajeCParser.RULE_seleccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.match(SublenguajeCParser.SWITCH);
	        this.state = 30;
	        this.match(SublenguajeCParser.LPAREN);
	        this.state = 31;
	        this.match(SublenguajeCParser.IDENTIFICADOR);
	        this.state = 32;
	        this.match(SublenguajeCParser.RPAREN);
	        this.state = 33;
	        this.match(SublenguajeCParser.LBRACE);
	        this.state = 34;
	        this.cases();
	        this.state = 35;
	        this.match(SublenguajeCParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cases() {
	    let localctx = new CasesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SublenguajeCParser.RULE_cases);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 37;
	            this.case_();
	            this.state = 40; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===6 || _la===8);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	case_() {
	    let localctx = new CaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SublenguajeCParser.RULE_case);
	    try {
	        this.state = 49;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 42;
	            this.match(SublenguajeCParser.CASE);
	            this.state = 43;
	            this.match(SublenguajeCParser.NUMERO);
	            this.state = 44;
	            this.match(SublenguajeCParser.COLON);
	            this.state = 45;
	            this.sentencias();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 46;
	            this.match(SublenguajeCParser.DEFAULT);
	            this.state = 47;
	            this.match(SublenguajeCParser.COLON);
	            this.state = 48;
	            this.sentencias();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencias() {
	    let localctx = new SentenciasContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SublenguajeCParser.RULE_sentencias);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 51;
	            this.sentencia();
	            this.state = 54; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===9 || _la===11);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SublenguajeCParser.RULE_sentencia);
	    try {
	        this.state = 58;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 56;
	            this.salida();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 57;
	            this.terminar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, SublenguajeCParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(SublenguajeCParser.PRINTF);
	        this.state = 61;
	        this.match(SublenguajeCParser.LPAREN);
	        this.state = 62;
	        this.match(SublenguajeCParser.CADENA);
	        this.state = 63;
	        this.match(SublenguajeCParser.RPAREN);
	        this.state = 64;
	        this.match(SublenguajeCParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, SublenguajeCParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(SublenguajeCParser.BREAK);
	        this.state = 67;
	        this.match(SublenguajeCParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

SublenguajeCParser.EOF = antlr4.Token.EOF;
SublenguajeCParser.SWITCH = 1;
SublenguajeCParser.LPAREN = 2;
SublenguajeCParser.RPAREN = 3;
SublenguajeCParser.LBRACE = 4;
SublenguajeCParser.RBRACE = 5;
SublenguajeCParser.CASE = 6;
SublenguajeCParser.COLON = 7;
SublenguajeCParser.DEFAULT = 8;
SublenguajeCParser.PRINTF = 9;
SublenguajeCParser.SEMICOLON = 10;
SublenguajeCParser.BREAK = 11;
SublenguajeCParser.CADENA = 12;
SublenguajeCParser.IDENTIFICADOR = 13;
SublenguajeCParser.NUMERO = 14;
SublenguajeCParser.WS = 15;

SublenguajeCParser.RULE_programa = 0;
SublenguajeCParser.RULE_instrucciones = 1;
SublenguajeCParser.RULE_instruccion = 2;
SublenguajeCParser.RULE_seleccion = 3;
SublenguajeCParser.RULE_cases = 4;
SublenguajeCParser.RULE_case = 5;
SublenguajeCParser.RULE_sentencias = 6;
SublenguajeCParser.RULE_sentencia = 7;
SublenguajeCParser.RULE_salida = 8;
SublenguajeCParser.RULE_terminar = 9;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SublenguajeCParser.RULE_programa;
    }

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SublenguajeCListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SublenguajeCListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SublenguajeCVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SublenguajeCParser.RULE_instrucciones;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SublenguajeCListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SublenguajeCListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SublenguajeCVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SublenguajeCParser.RULE_instruccion;
    }

	seleccion() {
	    return this.getTypedRuleContext(SeleccionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SublenguajeCListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SublenguajeCListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SublenguajeCVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SeleccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SublenguajeCParser.RULE_seleccion;
    }

	SWITCH() {
	    return this.getToken(SublenguajeCParser.SWITCH, 0);
	};

	LPAREN() {
	    return this.getToken(SublenguajeCParser.LPAREN, 0);
	};

	IDENTIFICADOR() {
	    return this.getToken(SublenguajeCParser.IDENTIFICADOR, 0);
	};

	RPAREN() {
	    return this.getToken(SublenguajeCParser.RPAREN, 0);
	};

	LBRACE() {
	    return this.getToken(SublenguajeCParser.LBRACE, 0);
	};

	cases() {
	    return this.getTypedRuleContext(CasesContext,0);
	};

	RBRACE() {
	    return this.getToken(SublenguajeCParser.RBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SublenguajeCListener ) {
	        listener.enterSeleccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SublenguajeCListener ) {
	        listener.exitSeleccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SublenguajeCVisitor ) {
	        return visitor.visitSeleccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CasesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SublenguajeCParser.RULE_cases;
    }

	case_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaseContext);
	    } else {
	        return this.getTypedRuleContext(CaseContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SublenguajeCListener ) {
	        listener.enterCases(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SublenguajeCListener ) {
	        listener.exitCases(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SublenguajeCVisitor ) {
	        return visitor.visitCases(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SublenguajeCParser.RULE_case;
    }

	CASE() {
	    return this.getToken(SublenguajeCParser.CASE, 0);
	};

	NUMERO() {
	    return this.getToken(SublenguajeCParser.NUMERO, 0);
	};

	COLON() {
	    return this.getToken(SublenguajeCParser.COLON, 0);
	};

	sentencias() {
	    return this.getTypedRuleContext(SentenciasContext,0);
	};

	DEFAULT() {
	    return this.getToken(SublenguajeCParser.DEFAULT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SublenguajeCListener ) {
	        listener.enterCase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SublenguajeCListener ) {
	        listener.exitCase(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SublenguajeCVisitor ) {
	        return visitor.visitCase(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciasContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SublenguajeCParser.RULE_sentencias;
    }

	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SublenguajeCListener ) {
	        listener.enterSentencias(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SublenguajeCListener ) {
	        listener.exitSentencias(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SublenguajeCVisitor ) {
	        return visitor.visitSentencias(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SublenguajeCParser.RULE_sentencia;
    }

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SublenguajeCListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SublenguajeCListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SublenguajeCVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SublenguajeCParser.RULE_salida;
    }

	PRINTF() {
	    return this.getToken(SublenguajeCParser.PRINTF, 0);
	};

	LPAREN() {
	    return this.getToken(SublenguajeCParser.LPAREN, 0);
	};

	CADENA() {
	    return this.getToken(SublenguajeCParser.CADENA, 0);
	};

	RPAREN() {
	    return this.getToken(SublenguajeCParser.RPAREN, 0);
	};

	SEMICOLON() {
	    return this.getToken(SublenguajeCParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SublenguajeCListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SublenguajeCListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SublenguajeCVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SublenguajeCParser.RULE_terminar;
    }

	BREAK() {
	    return this.getToken(SublenguajeCParser.BREAK, 0);
	};

	SEMICOLON() {
	    return this.getToken(SublenguajeCParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SublenguajeCListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SublenguajeCListener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SublenguajeCVisitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




SublenguajeCParser.ProgramaContext = ProgramaContext; 
SublenguajeCParser.InstruccionesContext = InstruccionesContext; 
SublenguajeCParser.InstruccionContext = InstruccionContext; 
SublenguajeCParser.SeleccionContext = SeleccionContext; 
SublenguajeCParser.CasesContext = CasesContext; 
SublenguajeCParser.CaseContext = CaseContext; 
SublenguajeCParser.SentenciasContext = SentenciasContext; 
SublenguajeCParser.SentenciaContext = SentenciaContext; 
SublenguajeCParser.SalidaContext = SalidaContext; 
SublenguajeCParser.TerminarContext = TerminarContext; 
