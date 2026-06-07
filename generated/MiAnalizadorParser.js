// Generated from MiAnalizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MiAnalizadorListener from './MiAnalizadorListener.js';
import MiAnalizadorVisitor from './MiAnalizadorVisitor.js';

const serializedATN = [4,1,15,79,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,1,1,1,1,1,1,1,
1,1,1,5,1,30,8,1,10,1,12,1,33,9,1,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
3,1,4,1,4,1,4,1,4,1,4,3,4,50,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,7,
1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,5,9,72,8,9,10,9,12,9,75,9,9,1,10,
1,10,1,10,0,2,2,18,11,0,2,4,6,8,10,12,14,16,18,20,0,2,1,0,9,10,1,0,12,14,
71,0,22,1,0,0,0,2,24,1,0,0,0,4,34,1,0,0,0,6,36,1,0,0,0,8,49,1,0,0,0,10,51,
1,0,0,0,12,57,1,0,0,0,14,60,1,0,0,0,16,62,1,0,0,0,18,66,1,0,0,0,20,76,1,
0,0,0,22,23,3,2,1,0,23,1,1,0,0,0,24,25,6,1,-1,0,25,26,3,4,2,0,26,31,1,0,
0,0,27,28,10,1,0,0,28,30,3,4,2,0,29,27,1,0,0,0,30,33,1,0,0,0,31,29,1,0,0,
0,31,32,1,0,0,0,32,3,1,0,0,0,33,31,1,0,0,0,34,35,3,6,3,0,35,5,1,0,0,0,36,
37,5,1,0,0,37,38,5,2,0,0,38,39,3,14,7,0,39,40,5,3,0,0,40,41,5,4,0,0,41,42,
3,8,4,0,42,43,5,5,0,0,43,7,1,0,0,0,44,50,3,10,5,0,45,46,3,10,5,0,46,47,3,
8,4,0,47,50,1,0,0,0,48,50,3,12,6,0,49,44,1,0,0,0,49,45,1,0,0,0,49,48,1,0,
0,0,50,9,1,0,0,0,51,52,5,6,0,0,52,53,5,2,0,0,53,54,3,16,8,0,54,55,5,3,0,
0,55,56,5,7,0,0,56,11,1,0,0,0,57,58,5,8,0,0,58,59,5,7,0,0,59,13,1,0,0,0,
60,61,7,0,0,0,61,15,1,0,0,0,62,63,5,11,0,0,63,64,3,18,9,0,64,65,5,11,0,0,
65,17,1,0,0,0,66,67,6,9,-1,0,67,68,3,20,10,0,68,73,1,0,0,0,69,70,10,1,0,
0,70,72,3,20,10,0,71,69,1,0,0,0,72,75,1,0,0,0,73,71,1,0,0,0,73,74,1,0,0,
0,74,19,1,0,0,0,75,73,1,0,0,0,76,77,7,1,0,0,77,21,1,0,0,0,3,31,49,73];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiAnalizadorParser extends antlr4.Parser {

    static grammarFileName = "MiAnalizador.g4";
    static literalNames = [ null, "'while'", "'('", "')'", "'{'", "'}'", 
                            "'printf'", "';'", "'break'", "'0'", "'1'", 
                            "'\"'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, "LETRA", "DIGITO", 
                             "SIMBOLO", "WS" ];
    static ruleNames = [ "programa", "instrucciones", "instruccion", "bucle", 
                         "sentencia", "salida", "terminar", "condicion", 
                         "cadena", "caracteres", "caracter" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiAnalizadorParser.ruleNames;
        this.literalNames = MiAnalizadorParser.literalNames;
        this.symbolicNames = MiAnalizadorParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.instrucciones_sempred(localctx, predIndex);
    	case 9:
    	    		return this.caracteres_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    instrucciones_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    caracteres_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiAnalizadorParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.instrucciones(0);
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


	instrucciones(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new InstruccionesContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, MiAnalizadorParser.RULE_instrucciones, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.instruccion();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 31;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new InstruccionesContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, MiAnalizadorParser.RULE_instrucciones);
	                this.state = 27;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 28;
	                this.instruccion(); 
	            }
	            this.state = 33;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiAnalizadorParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.bucle();
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



	bucle() {
	    let localctx = new BucleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiAnalizadorParser.RULE_bucle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(MiAnalizadorParser.T__0);
	        this.state = 37;
	        this.match(MiAnalizadorParser.T__1);
	        this.state = 38;
	        this.condicion();
	        this.state = 39;
	        this.match(MiAnalizadorParser.T__2);
	        this.state = 40;
	        this.match(MiAnalizadorParser.T__3);
	        this.state = 41;
	        this.sentencia();
	        this.state = 42;
	        this.match(MiAnalizadorParser.T__4);
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
	    this.enterRule(localctx, 8, MiAnalizadorParser.RULE_sentencia);
	    try {
	        this.state = 49;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 44;
	            this.salida();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 45;
	            this.salida();
	            this.state = 46;
	            this.sentencia();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 48;
	            this.terminar();
	            break;

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
	    this.enterRule(localctx, 10, MiAnalizadorParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(MiAnalizadorParser.T__5);
	        this.state = 52;
	        this.match(MiAnalizadorParser.T__1);
	        this.state = 53;
	        this.cadena();
	        this.state = 54;
	        this.match(MiAnalizadorParser.T__2);
	        this.state = 55;
	        this.match(MiAnalizadorParser.T__6);
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
	    this.enterRule(localctx, 12, MiAnalizadorParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(MiAnalizadorParser.T__7);
	        this.state = 58;
	        this.match(MiAnalizadorParser.T__6);
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



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MiAnalizadorParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        _la = this._input.LA(1);
	        if(!(_la===9 || _la===10)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MiAnalizadorParser.RULE_cadena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(MiAnalizadorParser.T__10);
	        this.state = 63;
	        this.caracteres(0);
	        this.state = 64;
	        this.match(MiAnalizadorParser.T__10);
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


	caracteres(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new CaracteresContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 18;
	    this.enterRecursionRule(localctx, 18, MiAnalizadorParser.RULE_caracteres, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.caracter();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 73;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new CaracteresContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, MiAnalizadorParser.RULE_caracteres);
	                this.state = 69;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 70;
	                this.caracter(); 
	            }
	            this.state = 75;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	caracter() {
	    let localctx = new CaracterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, MiAnalizadorParser.RULE_caracter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 28672) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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


}

MiAnalizadorParser.EOF = antlr4.Token.EOF;
MiAnalizadorParser.T__0 = 1;
MiAnalizadorParser.T__1 = 2;
MiAnalizadorParser.T__2 = 3;
MiAnalizadorParser.T__3 = 4;
MiAnalizadorParser.T__4 = 5;
MiAnalizadorParser.T__5 = 6;
MiAnalizadorParser.T__6 = 7;
MiAnalizadorParser.T__7 = 8;
MiAnalizadorParser.T__8 = 9;
MiAnalizadorParser.T__9 = 10;
MiAnalizadorParser.T__10 = 11;
MiAnalizadorParser.LETRA = 12;
MiAnalizadorParser.DIGITO = 13;
MiAnalizadorParser.SIMBOLO = 14;
MiAnalizadorParser.WS = 15;

MiAnalizadorParser.RULE_programa = 0;
MiAnalizadorParser.RULE_instrucciones = 1;
MiAnalizadorParser.RULE_instruccion = 2;
MiAnalizadorParser.RULE_bucle = 3;
MiAnalizadorParser.RULE_sentencia = 4;
MiAnalizadorParser.RULE_salida = 5;
MiAnalizadorParser.RULE_terminar = 6;
MiAnalizadorParser.RULE_condicion = 7;
MiAnalizadorParser.RULE_cadena = 8;
MiAnalizadorParser.RULE_caracteres = 9;
MiAnalizadorParser.RULE_caracter = 10;

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
        this.ruleIndex = MiAnalizadorParser.RULE_programa;
    }

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiAnalizadorVisitor ) {
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
        this.ruleIndex = MiAnalizadorParser.RULE_instrucciones;
    }

	instruccion() {
	    return this.getTypedRuleContext(InstruccionContext,0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiAnalizadorVisitor ) {
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
        this.ruleIndex = MiAnalizadorParser.RULE_instruccion;
    }

	bucle() {
	    return this.getTypedRuleContext(BucleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiAnalizadorVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BucleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiAnalizadorParser.RULE_bucle;
    }

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.enterBucle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.exitBucle(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiAnalizadorVisitor ) {
	        return visitor.visitBucle(this);
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
        this.ruleIndex = MiAnalizadorParser.RULE_sentencia;
    }

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiAnalizadorVisitor ) {
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
        this.ruleIndex = MiAnalizadorParser.RULE_salida;
    }

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiAnalizadorVisitor ) {
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
        this.ruleIndex = MiAnalizadorParser.RULE_terminar;
    }


	enterRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiAnalizadorVisitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiAnalizadorParser.RULE_condicion;
    }


	enterRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiAnalizadorVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiAnalizadorParser.RULE_cadena;
    }

	caracteres() {
	    return this.getTypedRuleContext(CaracteresContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiAnalizadorVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaracteresContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiAnalizadorParser.RULE_caracteres;
    }

	caracter() {
	    return this.getTypedRuleContext(CaracterContext,0);
	};

	caracteres() {
	    return this.getTypedRuleContext(CaracteresContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.enterCaracteres(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.exitCaracteres(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiAnalizadorVisitor ) {
	        return visitor.visitCaracteres(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaracterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiAnalizadorParser.RULE_caracter;
    }

	LETRA() {
	    return this.getToken(MiAnalizadorParser.LETRA, 0);
	};

	DIGITO() {
	    return this.getToken(MiAnalizadorParser.DIGITO, 0);
	};

	SIMBOLO() {
	    return this.getToken(MiAnalizadorParser.SIMBOLO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.enterCaracter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.exitCaracter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiAnalizadorVisitor ) {
	        return visitor.visitCaracter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MiAnalizadorParser.ProgramaContext = ProgramaContext; 
MiAnalizadorParser.InstruccionesContext = InstruccionesContext; 
MiAnalizadorParser.InstruccionContext = InstruccionContext; 
MiAnalizadorParser.BucleContext = BucleContext; 
MiAnalizadorParser.SentenciaContext = SentenciaContext; 
MiAnalizadorParser.SalidaContext = SalidaContext; 
MiAnalizadorParser.TerminarContext = TerminarContext; 
MiAnalizadorParser.CondicionContext = CondicionContext; 
MiAnalizadorParser.CadenaContext = CadenaContext; 
MiAnalizadorParser.CaracteresContext = CaracteresContext; 
MiAnalizadorParser.CaracterContext = CaracterContext; 
