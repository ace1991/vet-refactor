# Kata Refactor Vet - Testing Sostenible con TypeScript

Dado como ejemplo el código y los test de un artefacto que filtra una tabla de resultados de búsqueda en base a filtros que vienen determinados por unos checkboxes en pantalla. Es un ejemplo que tiene que ver con casos veterinarios y sus diagnósticos.

El artefacto en cuestión es DiseaseFilter. Se trata de una clase que recibe en su constructor una lista de casos y una lista de diagnosis que no se modifican en ningún momento, por eso indicamos en el tipo que se tratan de solo lectura. El constructor no lo utilizamos directamente sino que solamente lo llamamos desde un "named constructor".

El tipo Case representa un caso veterinario y contiene el id, el nombre del paciente, la id de la diagnosis, el nombre de la diagnosis y notas públicas y privadas. Mientras que el tipo Diagnosis representa un diagnóstico y tiene un id, un nombre, la localización, el sistema afectado, el origen y la especie.

Siguiendo con la clase, DeseaseFilter dispone de otro método llamado addFilter, que básicamente recibe un location por parámetro (location representa la parte del cuerpo donde se manifiesta la enfermedad) y mediante el método get casesFiltered la clase devuelve una lista de los casos filtrados.

## Instrucciones
* `npm install`
* `npm test`

## Actualización dependencias
Al compilar el proyecto original obtenia fallos de compilación en las dependencias por lo que decidí actualizarlas a la última versión:
* `npx npm-upgrade` -> Decir Sí a todo

* `npm i`
* `npm run tsc` -> Sigue dando el mismo error ya que se siguen utilizando las dependencias anteriores aún.

Para asegurar que usa las nuevas dependencias del package.json actualizado en el primer paso elimino el package-lock y los node_modules anteriores.
* `rm package-lock.json`
* `rm -Rf node_modules/`

Y se regeneran actualziados acorde al nuevo package.json con:
* `npm i`

Finalmente:
* `npm run tsc` -> no error!


Más información sobre el curso en [testingsostenible.com](https://testingsostenible.com).

![Testing Sostenible con TypeScript](cover.png)

### ESLint
[TypeScript ESLint Rules](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)

### Husky hooks
* Pre-commit: Execute npm analize (tsc + eslint --fix)
* Pre-push: Execute test
