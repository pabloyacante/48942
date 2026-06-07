import fs from 'fs';
import readline from 'readline';
import antlr4 from 'antlr4';
const { CharStreams, CommonTokenStream } = antlr4;

import MiAnalizadorLexer from './generated/MiAnalizadorLexer.js';
import MiAnalizadorParser from './generated/MiAnalizadorParser.js';
import CustomMiAnalizadorVisitor from './CustomMiAnalizadorVisitor.js';

async function main() {
    let input;

    // Intento leer la entrada desde el archivo input - en forma sincrónica.
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        // Si no es posible leer el archivo, solicitar la entrada del usuario por teclado
        input = await leerCadena(); 
        console.log(input);
    }

    // Proceso la entrada con el analizador para obtener el lexer
    let inputStream = CharStreams.fromString(input);
    let lexer = new MiAnalizadorLexer(inputStream);

    // --- REQUISITO 2: Verificar y mostrar la Tabla de Tokens ---
    console.log("Verificando tokens generados por el lexer...");
    const tokens = lexer.getAllTokens();
    if (tokens.length === 0) {
        console.error("No se generaron tokens. Verifica la entrada y la gramática.");
        return;
    }

    console.log("\nTabla de Tokens y Lexemas:");
    console.log("--------------------------------------------------");
    console.log("| Lexema         | Token                         |");
    console.log("--------------------------------------------------");

    for (let token of tokens) {
        const tokenType = MiAnalizadorLexer.symbolicNames[token.type] || MiAnalizadorLexer.literalNames[token.type] || `UNKNOWN (${token.type})`;
        const lexema = token.text.replace(/\n/g, '\\n').replace(/\r/g, '\\r'); // Limpiar saltos de línea para la tabla
        console.log(`| ${lexema.padEnd(14)} | ${tokenType.padEnd(30)}|`);
    }
    console.log("--------------------------------------------------");

    // Vuelve a procesar la entrada porque getAllTokens() consume todos los tokens
    inputStream = CharStreams.fromString(input);
    lexer = new MiAnalizadorLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new MiAnalizadorParser(tokenStream);
    
    // --- REQUISITO 1: Ejecutar el análisis ---
    let tree = parser.programa(); // "programa" es el axioma principal de tu archivo .g4

    if (parser._syntaxErrors > 0) {
        console.error("\n Se encontraron errores de sintaxis en la entrada.");
    } else {
        console.log("\n Entrada válida.");
        
        // --- REQUISITO 3: Mostrar el Árbol Sintáctico ---
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`\n Árbol de derivación:\n${cadena_tree}`);

        // --- REQUISITO 4: Interpretación (Traducción y Ejecución) ---
        const visitor = new CustomMiAnalizadorVisitor();
        const codigo_traducido = visitor.visit(tree);

        console.log("\n======================================");
        console.log("TRADUCCIÓN A JAVASCRIPT:");
        console.log(codigo_traducido);
        console.log("======================================");

        try {
            console.log("\n RESULTADO DE LA EJECUCIÓN (INTÉRPRETE):");
            // Se ejecuta el string que generó el visitor como si fuera código JS real
            eval(codigo_traducido);
        } catch (err) {
            console.error("\nError al ejecutar el código traducido: ", err);
        }
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

// Ejecuta la función principal
main();