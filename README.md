Analizador Sintáctico y Traductor

Este proyecto es un analizador léxico, sintáctico y traductor construido con ANTLR4 y JavaScript. Su objetivo es procesar un lenguaje basado en C que soporta estructuras de control (bucles `while`), salidas por consola (`printf`) y terminación de procesos (`break`).

- Instalación y Ejecución

Para usar correctamente el analizador princial primero lo tendra que clonar en su maquina local utilizando el URL de GIT:

git clone https://github.com/pabloyacante/48942.git


Luego tendra que navegar hasta la carpeta raiz del proyecto con cd "MiAnalizador" y debera instalar la dependencia oficial de ANTLR4 para JavaScript ejecutando:

    . npm install

Para iniciar el proceso de análisis e interpretacion hay que ejecutar:

    . node index.js

Se han adjuntado 4 escenarios de prueba independientes para demostrar la funcion del analizador (correcto1.txt, correcto2.txt, incorrecto1.txt, incorrecto2.txt).

- Resumen de la Gramática

El analizador utiliza la directiva programa como axioma principal. Las estructuras válidas implementadas son:

    Bucle while: Soporta condiciones booleanas (0 o 1).
    
    Sentencia printf: Permite imprimir cadenas de texto en consola.

    Sentencia break: Permite la salida prematura del bucle.
