// Generated from c:/Users/guill/Downloads/Alfonso/Analizador/SublenguajeC.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link SublenguajeCParser}.
 */
public interface SublenguajeCListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link SublenguajeCParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(SublenguajeCParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link SublenguajeCParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(SublenguajeCParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link SublenguajeCParser#instrucciones}.
	 * @param ctx the parse tree
	 */
	void enterInstrucciones(SublenguajeCParser.InstruccionesContext ctx);
	/**
	 * Exit a parse tree produced by {@link SublenguajeCParser#instrucciones}.
	 * @param ctx the parse tree
	 */
	void exitInstrucciones(SublenguajeCParser.InstruccionesContext ctx);
	/**
	 * Enter a parse tree produced by {@link SublenguajeCParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void enterInstruccion(SublenguajeCParser.InstruccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SublenguajeCParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void exitInstruccion(SublenguajeCParser.InstruccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SublenguajeCParser#seleccion}.
	 * @param ctx the parse tree
	 */
	void enterSeleccion(SublenguajeCParser.SeleccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SublenguajeCParser#seleccion}.
	 * @param ctx the parse tree
	 */
	void exitSeleccion(SublenguajeCParser.SeleccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SublenguajeCParser#cases}.
	 * @param ctx the parse tree
	 */
	void enterCases(SublenguajeCParser.CasesContext ctx);
	/**
	 * Exit a parse tree produced by {@link SublenguajeCParser#cases}.
	 * @param ctx the parse tree
	 */
	void exitCases(SublenguajeCParser.CasesContext ctx);
	/**
	 * Enter a parse tree produced by {@link SublenguajeCParser#case}.
	 * @param ctx the parse tree
	 */
	void enterCase(SublenguajeCParser.CaseContext ctx);
	/**
	 * Exit a parse tree produced by {@link SublenguajeCParser#case}.
	 * @param ctx the parse tree
	 */
	void exitCase(SublenguajeCParser.CaseContext ctx);
	/**
	 * Enter a parse tree produced by {@link SublenguajeCParser#sentencias}.
	 * @param ctx the parse tree
	 */
	void enterSentencias(SublenguajeCParser.SentenciasContext ctx);
	/**
	 * Exit a parse tree produced by {@link SublenguajeCParser#sentencias}.
	 * @param ctx the parse tree
	 */
	void exitSentencias(SublenguajeCParser.SentenciasContext ctx);
	/**
	 * Enter a parse tree produced by {@link SublenguajeCParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void enterSentencia(SublenguajeCParser.SentenciaContext ctx);
	/**
	 * Exit a parse tree produced by {@link SublenguajeCParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void exitSentencia(SublenguajeCParser.SentenciaContext ctx);
	/**
	 * Enter a parse tree produced by {@link SublenguajeCParser#salida}.
	 * @param ctx the parse tree
	 */
	void enterSalida(SublenguajeCParser.SalidaContext ctx);
	/**
	 * Exit a parse tree produced by {@link SublenguajeCParser#salida}.
	 * @param ctx the parse tree
	 */
	void exitSalida(SublenguajeCParser.SalidaContext ctx);
	/**
	 * Enter a parse tree produced by {@link SublenguajeCParser#terminar}.
	 * @param ctx the parse tree
	 */
	void enterTerminar(SublenguajeCParser.TerminarContext ctx);
	/**
	 * Exit a parse tree produced by {@link SublenguajeCParser#terminar}.
	 * @param ctx the parse tree
	 */
	void exitTerminar(SublenguajeCParser.TerminarContext ctx);
}