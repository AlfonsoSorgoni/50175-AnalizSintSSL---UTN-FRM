# Analizador Sintáctico - Trabajo Práctico
### Sintaxis y Semántica de los Lenguajes - UTN FRM

**Autor:** Alfonso Sorgoni
**Legajo:** 50175

---

## Descripción del Proyecto

Este proyecto implementa un analizador léxico, sintáctico y un intérprete para un sublenguaje de C, según la gramática definida por la cátedra.

El programa cumple con los siguientes requisitos:
1.  **Análisis Léxico y Sintáctico:** Valida si el código de entrada es correcto según la gramática e informa los errores encontrados.
2.  **Tabla de Lexemas-Tokens:** Genera una tabla con los componentes léxicos identificados.
3.  **Árbol de Análisis Sintáctico:** Construye y muestra una representación en texto del árbol de análisis.
4.  **Interpretación:** Traduce el código fuente válido a JavaScript y lo ejecuta.

## Requisitos Previos

* Node.js (v22.0.0 o superior)
* npm (incluido con Node.js)

## Instalación

1.  Clonar este repositorio en una máquina local.
2.  Abrir una terminal en la carpeta raíz del proyecto.
3.  Instalar las dependencias necesarias ejecutando el siguiente comando:
    ```bash
    npm install
    ```

## Aclaración

* El archivo `input.txt` contiene los cuatro ejemplos de código solicitados para la prueba (dos sintácticamente correctos y dos incorrectos), separados por el delimitador `%%!%%`.
* La gramática del lenguaje está implementada en el archivo `SublenguajeC.g4`. Adicionalmente, se adjunta el archivo `gramatica_asignada.txt` con la especificación original de la misma.


## Ejecución

[cite_start]Para ejecutar el analizador, utilice el siguiente comando en la terminal: 
```bash
node index.js