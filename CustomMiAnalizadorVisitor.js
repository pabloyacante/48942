import MiAnalizadorVisitor from './generated/MiAnalizadorVisitor.js';

export default class CustomMiAnalizadorVisitor extends MiAnalizadorVisitor {
    
    visitPrograma(ctx) {
        return this.visit(ctx.instrucciones());
    }

    visitInstrucciones(ctx) {
      
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
       
        return `while (${condicion}) {\n  ${sentencias}\n}`;
    }

    visitSentencia(ctx) {
        
        if (ctx.sentencia()) {
            return this.visit(ctx.salida()) + '\n  ' + this.visit(ctx.sentencia());
        } 
       
        else if (ctx.salida()) {
            return this.visit(ctx.salida());
        } 
       
        else if (ctx.terminar()) {
            return this.visit(ctx.terminar());
        }
    }

    visitSalida(ctx) {
        const cadena = ctx.cadena().getText(); 
        return `console.log(${cadena});`;
    }

    visitTerminar(ctx) {
       
        return `break;`;
    }
}
