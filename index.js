import antlr4 from 'antlr4';
import fs from 'fs';
import readline from 'readline';
import SublenguajeCLexer from './generated/SublenguajeCLexer.js';
import SublenguajeCParser from './generated/SublenguajeCParser.js';
import CustomVisitor from './CustomVisitor.js';

const leerCadena = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise(resolve => {
        rl.question('Ingrese el código a analizar: ', answer => {
            rl.close();
            resolve(answer);
        });
    });
};

const main = async () => {
    let input;
    try {
        input = fs.readFileSync('input.txt', 'utf8');
        console.log("Procesando ejemplos desde input.txt...\n");
    } catch (err) {
        input = await leerCadena();
    }

    const codeBlocks = input.split('%%!%%');

    codeBlocks.forEach((block, index) => {
        if (block.trim().length === 0) return;

        console.log(`\n================== Analizando Bloque #${index + 1} ==================`);
        console.log(block.trim());
        console.log("-----------------------------------------------------------");

        const chars = new antlr4.InputStream(block);
        const lexer = new SublenguajeCLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        
        // 1. Se crea el Parser
        const parser = new SublenguajeCParser(tokens);

        // 2. Se imprime la tabla de tokens (usando el parser)
        console.log("Tabla de Lexemas-Tokens:");
        tokens.fill();
        const tokenList = tokens.getTokens(0, tokens.size);
        tokenList.forEach(token => {
            if (token.type !== antlr4.Token.EOF) {
                const tokenName = parser.symbolicNames[token.type];
                console.log(`  - Lexema: '${token.text}', Token: ${tokenName}`);
            }
        });
        console.log("-----------------------------------------------------------");

        // 3. Se analiza la sintaxis y se construye el árbol
        parser.buildParseTrees = true;
        const tree = parser.programa();

        // 4. Se comprueba el resultado
        if (parser.syntaxErrorsCount > 0) {
            console.error("Resultado: ¡Se encontraron errores de sintaxis! El bloque es INCORRECTO.\n");
        } else {
            console.log("Resultado: El bloque es sintácticamente CORRECTO.");

            // Requisito 3: Mostrar árbol en texto
            const arbolTexto = tree.toStringTree(parser.ruleNames);
            console.log("\nÁrbol de Análisis Sintáctico (Texto):");
            console.log(arbolTexto);

            // Requisito 4: Traducir y ejecutar
            console.log("\nTraduciendo a JavaScript...");
            const visitor = new CustomVisitor();
            const jsCode = visitor.visit(tree);

            console.log("\n--- Código JavaScript Generado ---");
            console.log(jsCode);
            console.log("---------------------------------");
            
            console.log("\n--- Ejecutando Código... ---");
            try {
                // Para que el 'switch' funcione, definimos las variables que usa.
                // Le damos un valor para probar la ejecución.
                const mi_variable = 1;
                const otra_variable = 10;
                eval(jsCode); 
            } catch (e) {
                console.error("Error al ejecutar el código traducido:", e);
            }
            console.log("----------------------------\n");
        }
    });
};

main();