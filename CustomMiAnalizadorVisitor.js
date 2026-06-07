import MiAnalizadorVisitor from './generated/MiAnalizadorVisitor.js';

export default class CustomMiAnalizadorVisitor extends MiAnalizadorVisitor {
    
    visitPrograma(ctx) {
        return this.visit(ctx.instrucciones());
    }

    visitInstrucciones(ctx) {
        // Como tu gramática es recursiva (instrucciones: instruccion | instrucciones instruccion)
        if (ctx.instrucciones()) {
            return this.visit(ctx.instrucciones()) + '\n' + this.visit(ctx.instruccion());
        } else {
            return this.visit(ctx.instruccion());
        }
    }

    visitInstruccion(ctx) {
        return this.visit(ctx.bucle());
    }

    visitBucle(ctx) {
        const condicion = ctx.condicion().getText();
        const sentencias = this.visit(ctx.sentencia());
        // Traducimos el bucle C a un bucle JavaScript (como texto)
        return `while (${condicion}) {\n  ${sentencias}\n}`;
    }

    visitSentencia(ctx) {
        // salida sentencia
        if (ctx.sentencia()) {
            return this.visit(ctx.salida()) + '\n  ' + this.visit(ctx.sentencia());
        } 
        // salida sola
        else if (ctx.salida()) {
            return this.visit(ctx.salida());
        } 
        // terminar solo
        else if (ctx.terminar()) {
            return this.visit(ctx.terminar());
        }
    }

    visitSalida(ctx) {
        const cadena = ctx.cadena().getText(); // Obtiene algo como "Hola Mundo"
        // Traducimos de printf (C) a console.log (JS)
        return `console.log(${cadena});`;
    }

    visitTerminar(ctx) {
        // Traducimos el break
        return `break;`;
    }
}