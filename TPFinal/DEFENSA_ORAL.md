# DEFENSA ORAL — Finanzas Personales

Esta guía está basada en el código real del proyecto `TPFinal`. No describe funciones inventadas ni partes que no existan.

---

## 1. Resumen general del proyecto

### ¿Qué es Finanzas Personales?
Es una aplicación web hecha con React para registrar ingresos y gastos personales.

### ¿Qué problema resuelve?
Permite llevar un control simple de movimientos financieros sin hacerlo en papel o de memoria.

### ¿Qué puede hacer el usuario?
- Ver movimientos guardados.
- Crear un movimiento.
- Editar un movimiento.
- Eliminar un movimiento.
- Filtrar por ingresos o gastos.
- Ver el resumen de ingresos, gastos y balance.

### ¿Qué tecnologías utiliza?
- React
- Vite
- JavaScript
- Bootstrap
- JSON Server
- `fetch`

### ¿Por qué el alcance es apropiado para un trabajo inicial?
Porque cumple los requisitos principales de React sin agregar complejidad innecesaria. Tiene componentes, props, hooks, formulario controlado, CRUD real y una interfaz simple.

### Explicación corta de 30 segundos
> Finanzas Personales es una app hecha con React que permite registrar ingresos y gastos. El usuario puede crear, ver, editar y eliminar movimientos. La interfaz está hecha con Bootstrap y los datos se guardan usando JSON Server mediante peticiones `fetch`, así que el CRUD es real y no solo local.

### Explicación de aproximadamente 1 minuto
> Nuestro proyecto se llama Finanzas Personales y sirve para administrar movimientos financieros básicos, como ingresos y gastos. La aplicación fue desarrollada con React y Vite, usando JavaScript, componentes funcionales, props y hooks como `useState` y `useEffect`. También usamos Bootstrap para el diseño y JSON Server para simular una API REST. Desde la interfaz el usuario puede ver la lista de movimientos, agregar uno nuevo, editarlo, eliminarlo y filtrarlo por tipo. Además, arriba se muestran tarjetas con el total de ingresos, total de gastos y balance. Elegimos este alcance porque es claro, cumple los requisitos académicos y es fácil de explicar en una defensa oral.

---

## 2. Guion de presentación oral

## Versión para un solo integrante

### Parte 1 — Presentación del tema
**Qué decir:**
> Buenos días. Nuestro proyecto final se llama Finanzas Personales. Es una aplicación hecha con React para registrar ingresos y gastos de manera simple.

**Qué mostrar:**
- Pantalla principal completa.

### Parte 2 — Problema que resuelve
**Qué decir:**
> El problema que resuelve es el control básico del dinero. En vez de anotar movimientos de forma desordenada, el usuario los puede registrar en una interfaz clara y ver un resumen automático.

**Qué mostrar:**
- Tarjetas de resumen.
- Tabla de movimientos.

### Parte 3 — Tecnologías utilizadas
**Qué decir:**
> Usamos React con Vite, JavaScript, Bootstrap, JSON Server y `fetch`. Todos los componentes son funcionales. También usamos `useState` y `useEffect`.

**Qué mostrar:**
- Código de `package.json` y `src/main.jsx`.

### Parte 4 — Explicación visual de la aplicación
**Qué decir:**
> Arriba tenemos el encabezado. Después aparecen tres tarjetas: total de ingresos, total de gastos y balance. A la izquierda está el formulario para crear o editar movimientos. A la derecha está el filtro y la tabla con la lista.

**Qué mostrar:**
- Recorrer visualmente la interfaz de arriba hacia abajo.

### Parte 5 — Explicación del CRUD
**Qué decir:**
> La aplicación hace las cuatro operaciones de CRUD. Primero carga los movimientos con GET. Después permite crear con POST, editar con PATCH y eliminar con DELETE. Todo esto se hace con `fetch` contra JSON Server.

**Qué mostrar:**
- `loadTransactions` en `App.jsx`.
- `handleCreateTransaction`.
- `handleUpdateTransaction`.
- `handleDeleteTransaction`.

### Parte 6 — Componentes, props y hooks
**Qué decir:**
> `App.jsx` es el componente principal. Ahí está el estado central y las funciones del CRUD. Luego ese componente pasa datos y callbacks a los hijos por props. Por ejemplo, `TransactionList` recibe la lista y `TransactionForm` recibe funciones para crear o editar.

**Qué mostrar:**
- Props pasadas desde `App.jsx`.
- `useState` y `useEffect`.

### Parte 7 — Demostración práctica
**Qué decir:**
> Ahora voy a mostrar cómo se usa. Primero vemos los datos iniciales, después creo un ingreso, luego un gasto, uso el filtro, edito un movimiento y finalmente elimino uno.

**Qué mostrar:**
- Demostración en vivo siguiendo la secuencia recomendada.

### Parte 8 — Conclusión
**Qué decir:**
> En conclusión, el proyecto cumple con los requisitos de React porque usa componentes funcionales, hooks, props, Bootstrap y un CRUD real con Ajax. Además, mantiene una estructura simple y apropiada para un nivel inicial.

**Qué mostrar:**
- Pantalla final con la app funcionando.

---

## Versión para tres integrantes

### Integrante 1 — Introducción, problema e interfaz
**Qué decir:**
> Nuestro proyecto se llama Finanzas Personales. Es una aplicación que permite registrar ingresos y gastos y ver un resumen automático. La interfaz está pensada para que el uso sea simple y claro.

**Qué mostrar:**
- Pantalla principal.
- Header.
- Tarjetas de resumen.
- Formulario y tabla.

### Integrante 2 — React, componentes, props y hooks
**Qué decir:**
> La aplicación está dividida en componentes funcionales. `App.jsx` centraliza el estado y reparte datos y funciones al resto por props. También usamos `useState` para manejar estados y `useEffect` para hacer el GET inicial.

**Qué mostrar:**
- `App.jsx`
- `TransactionForm.jsx`
- `TransactionList.jsx`

### Integrante 3 — CRUD, Ajax y JSON Server
**Qué decir:**
> El CRUD se conecta a una API simulada con JSON Server. Usamos `fetch` para hacer GET, POST, PATCH y DELETE al endpoint `http://localhost:3001/transactions`. Después de cada respuesta exitosa actualizamos el estado local para reflejar los cambios en pantalla.

**Qué mostrar:**
- `db.json`
- Funciones CRUD de `App.jsx`
- Terminales con `npm run dev` y `npm run server`

### Reparto equilibrado sugerido para 5 a 7 minutos
- **Integrante 1:** 2 minutos
- **Integrante 2:** 2 minutos
- **Integrante 3:** 2 a 3 minutos con demostración práctica

---

## 3. Demostración recomendada

### Secuencia exacta y segura
1. Abrir la app con datos iniciales ya cargados.
2. Mostrar la tabla de movimientos iniciales.
3. Explicar las tarjetas de ingresos, gastos y balance.
4. Crear un ingreso.
5. Crear un gasto.
6. Mostrar cómo cambian los totales.
7. Probar el filtro **Ingresos**.
8. Probar el filtro **Gastos**.
9. Volver a **Todos**.
10. Editar un movimiento.
11. Cancelar una edición.
12. Editar nuevamente y guardar.
13. Eliminar un movimiento.
14. Actualizar la página para demostrar que los datos permanecen.

### Datos concretos para usar en la demostración
#### Ejemplo de ingreso
- Descripción: `Clase particular`
- Monto: `20000`
- Tipo: `Ingreso`
- Categoría: `Educación`
- Fecha: `2026-06-23`

#### Ejemplo de gasto
- Descripción: `Carga SUBE`
- Monto: `5000`
- Tipo: `Gasto`
- Categoría: `Transporte`
- Fecha: `2026-06-23`

#### Ejemplo para editar
- Cambiar `Carga SUBE` por `Carga SUBE semanal`
- Cambiar monto a `6500`

### Qué remarcar durante la demo
- Los datos iniciales vienen de la API.
- El resumen cambia automáticamente.
- El filtro no borra la lista original.
- Al refrescar la página, los cambios siguen porque JSON Server guarda en `db.json`.

---

## 4. Explicación de la arquitectura

| Archivo | Responsabilidad | Qué recibe | Qué envía o hace | Por qué está separado |
|---|---|---|---|---|
| `App.jsx` | Componente principal. Maneja estado, CRUD, filtro y edición. | No recibe props. | Pasa datos y callbacks a los hijos. Hace GET, POST, PATCH y DELETE. | Porque concentra la lógica principal del proyecto. |
| `Header.jsx` | Muestra el título y subtítulo. | No recibe props. | Solo renderiza interfaz. | Porque el encabezado es una parte visual independiente. |
| `Summary.jsx` | Calcula ingresos, gastos y balance. | `transactions` | Muestra totales en tarjetas. | Porque separa el resumen de la lógica del resto. |
| `TransactionForm.jsx` | Formulario para crear y editar movimientos. | `editingTransaction`, `onCreateTransaction`, `onUpdateTransaction`, `onCancelEdit`, `message` | Envía datos del formulario al padre. | Porque el formulario tiene lógica propia de estado y validación. |
| `TransactionFilter.jsx` | Permite elegir el filtro actual. | `filter`, `onFilterChange` | Informa el cambio de filtro. | Porque el filtro es una responsabilidad puntual. |
| `TransactionList.jsx` | Muestra loading, vacío o tabla de movimientos. | `transactions`, `loading`, `onEditTransaction`, `onDeleteTransaction` | Renderiza lista y pasa callbacks a cada item. | Porque la lista es una parte distinta del formulario. |
| `TransactionItem.jsx` | Representa una fila de la tabla. | `transaction`, `onEditTransaction`, `onDeleteTransaction` | Dispara editar o eliminar. | Porque cada fila tiene acciones y datos propios. |
| `main.jsx` | Punto de entrada de React. | No recibe props. | Importa Bootstrap, CSS y renderiza `App`. | Porque separa el arranque de la aplicación. |
| `index.css` | Ajustes visuales mínimos. | No aplica. | Define fondo, ancho máximo y detalles menores. | Porque Bootstrap se complementa con pequeños estilos propios. |
| `db.json` | Datos de demostración para JSON Server. | No recibe. | Guarda la colección `transactions`. | Porque funciona como fuente de datos persistente local. |
| `package.json` | Configuración del proyecto y scripts. | No aplica. | Define dependencias y comandos. | Porque centraliza la configuración del proyecto. |

---

## 5. Flujo completo de los datos

## Cuando el usuario crea un movimiento
1. El usuario completa el formulario en `TransactionForm.jsx`.
2. Los datos se guardan en el estado local `formData`.
3. Al enviar el formulario se ejecuta `handleSubmit`.
4. `handleSubmit` valida los datos con `validateForm`.
5. Si está todo bien, arma `transactionData`.
6. Como no hay edición activa, llama a `onCreateTransaction(transactionData)`.
7. Esa función llega a `App.jsx` y ejecuta `handleCreateTransaction`.
8. `handleCreateTransaction` hace un `POST` con `fetch(API_URL, ...)`.
9. Si la respuesta es exitosa, recibe `newTransaction`.
10. Luego actualiza el estado con `setTransactions((prevTransactions) => [...prevTransactions, newTransaction])`.
11. React vuelve a renderizar y el movimiento aparece en la lista.
12. El formulario se limpia con `resetForm()`.

## Cuando el usuario edita un movimiento
1. El usuario presiona **Editar** en `TransactionItem.jsx`.
2. Se ejecuta `onEditTransaction(transaction)`.
3. Eso llega a `App.jsx` y llama a `handleStartEdit(transaction)`.
4. `handleStartEdit` guarda ese movimiento en `editingTransaction`.
5. `TransactionForm.jsx` recibe `editingTransaction` por props.
6. Su `useEffect` detecta el cambio y carga esos valores en `formData`.
7. El usuario modifica el formulario y envía.
8. `handleSubmit` llama a `onUpdateTransaction(transactionData)`.
9. En `App.jsx` se ejecuta `handleUpdateTransaction`.
10. Esa función hace `PATCH` a `http://localhost:3001/transactions/:id`.
11. Si sale bien, actualiza la lista con `setTransactions(...map(...))`.
12. Después pone `setEditingTransaction(null)`.
13. El formulario vuelve al modo crear.

## Cuando el usuario elimina un movimiento
1. El usuario presiona **Eliminar** en `TransactionItem.jsx`.
2. Se ejecuta `onDeleteTransaction(transaction.id)`.
3. En `App.jsx` llega a `handleDeleteTransaction(id)`.
4. Primero aparece `window.confirm(...)`.
5. Si el usuario confirma, se hace `DELETE` a `http://localhost:3001/transactions/:id`.
6. Si la respuesta es correcta, se actualiza el estado con `filter` para sacar ese elemento.
7. React vuelve a renderizar y el movimiento desaparece.

## Cuando el usuario filtra movimientos
1. En `TransactionFilter.jsx` cambia el `select`.
2. Se ejecuta `onFilterChange(event.target.value)`.
3. En `App.jsx` eso actualiza `filter` con `setFilter`.
4. `filteredTransactions` se calcula con `transactions.filter(...)`.
5. La lista visible cambia, pero `transactions` sigue intacta.

---

## 6. CRUD

### ¿Qué significa CRUD?
- **Create:** crear datos.
- **Read:** leer datos.
- **Update:** actualizar datos.
- **Delete:** eliminar datos.

### CRUD aplicado al proyecto

| Operación | Acción del usuario | Método HTTP | Lugar del código |
| --- | --- | --- | --- |
| Create | Completa el formulario y crea un movimiento | `POST` | `handleCreateTransaction` en `App.jsx` |
| Read | Abre la app y ve los movimientos cargados | `GET` | `loadTransactions` en `App.jsx` |
| Update | Edita un movimiento y guarda cambios | `PATCH` | `handleUpdateTransaction` en `App.jsx` |
| Delete | Elimina un movimiento | `DELETE` | `handleDeleteTransaction` en `App.jsx` |

### ¿Por qué el estado local se actualiza después de una respuesta exitosa?
Porque primero queremos confirmar que la API aceptó el cambio. Recién después actualizamos `transactions` para que la interfaz muestre datos consistentes con el servidor.

---

## 7. Ajax, HTTP y API REST

### ¿Qué es Ajax?
Es una forma de comunicarse con un servidor sin recargar toda la página.

**En este proyecto:** cuando usamos `fetch` para crear, editar o eliminar movimientos.

### ¿Qué es HTTP?
Es el protocolo que se usa para enviar y recibir datos entre cliente y servidor.

### ¿Qué es una API?
Es una interfaz que permite que una aplicación se comunique con otra.

### ¿Qué es una API REST?
Es una API que organiza los recursos con endpoints y usa métodos HTTP como GET, POST, PATCH y DELETE.

### ¿Qué es una petición?
Es lo que el frontend envía al servidor.

### ¿Qué es una respuesta?
Es lo que devuelve el servidor luego de recibir la petición.

### ¿Qué hace `fetch`?
Hace peticiones HTTP desde JavaScript.

### ¿Qué significa `response.ok`?
Significa que la respuesta fue exitosa dentro del rango 200 a 299.

### ¿Qué es JSON?
Es un formato de texto para representar datos.

### ¿Qué función cumple JSON Server?
Simula una API REST para que el proyecto pueda hacer un CRUD real sin crear un backend propio.

### ¿JSON Server es una base de datos real?
No. Es un servidor simple que trabaja sobre un archivo JSON.

### ¿Dónde se guardan los datos?
En `db.json`, dentro de la colección `transactions`.

### ¿Qué pasa si JSON Server está apagado?
La app no puede conectarse a la API y muestra el mensaje de error de carga o de operación.

---

## 8. React

### ¿Qué es React?
Es una librería de JavaScript para construir interfaces de usuario.

### ¿React es una librería o un framework?
Es una librería.

### ¿Qué es una aplicación de una sola página?
Es una aplicación que actualiza contenido en la misma página sin recargarla completamente.

### ¿Qué es JSX?
Es una forma de escribir estructura parecida a HTML dentro de JavaScript.

### ¿Qué es un componente?
Es una parte reutilizable de la interfaz.

### ¿Qué es un componente funcional?
Es un componente escrito como función.

### ¿Por qué dividieron la aplicación en componentes?
Para separar responsabilidades y hacer el código más claro.

### ¿Qué ventajas tiene reutilizar componentes?
Hace que el proyecto sea más ordenado, legible y fácil de mantener.

### ¿Qué significa renderizar?
Significa mostrar en pantalla la interfaz a partir del estado y las props.

### ¿Qué causa un nuevo renderizado?
Un cambio de estado o de props.

### ¿Qué es el Virtual DOM?
Es una representación interna que React usa para comparar cambios y actualizar la interfaz de manera eficiente.

---

## 9. Estado y hooks

### ¿Qué es el estado?
Es la información que un componente guarda y que puede cambiar.

### ¿Qué es un hook?
Es una función especial de React que permite usar características como estado y ciclo de vida en componentes funcionales.

### ¿Qué hace `useState`?
Permite crear estados y actualizarlos.

### ¿Qué estados existen realmente en el proyecto?
En `App.jsx`:
- `transactions`
- `loading`
- `error`
- `message`
- `filter`
- `editingTransaction`

En `TransactionForm.jsx`:
- `formData`
- `formError`

### ¿Qué hace `useEffect`?
Permite ejecutar código cuando el componente se monta o cuando cambian dependencias.

### ¿Por qué el GET inicial está dentro de `useEffect`?
Porque queremos cargar los movimientos una vez al iniciar la app.

### ¿Qué significa el arreglo vacío `[]`?
Significa que el efecto se ejecuta cuando el componente se monta.

### ¿Por qué no se produce un loop infinito?
Porque `useEffect` no depende de `transactions` ni de otro estado que cambie dentro del mismo efecto.

### ¿Por qué en desarrollo podrían verse dos GET con StrictMode?
Porque React `StrictMode` puede ejecutar ciertos procesos dos veces en desarrollo para detectar problemas. No significa que haya un loop infinito en el código.

### ¿Se puede modificar el estado directamente?
No. Se debe usar la función actualizadora, por ejemplo `setTransactions`.

### ¿Por qué se usan funciones como `setTransactions`?
Porque así React sabe que cambió el estado y vuelve a renderizar la interfaz.

---

## 10. Props y comunicación padre-hijo

### ¿Qué son las props?
Son datos o funciones que un componente padre le pasa a un componente hijo.

### ¿Qué componente funciona como padre principal?
`App.jsx`.

### ¿Qué información pasa `App.jsx` a cada hijo?
- A `Summary`: `transactions`
- A `TransactionForm`: `editingTransaction`, `onCreateTransaction`, `onUpdateTransaction`, `onCancelEdit`, `message`
- A `TransactionFilter`: `filter`, `onFilterChange`
- A `TransactionList`: `transactions`, `loading`, `onEditTransaction`, `onDeleteTransaction`

### ¿Cómo un hijo solicita una acción al padre?
Ejecutando una callback que recibió por props.

### ¿Qué es una callback?
Es una función que se pasa a otro componente para que la ejecute en un momento determinado.

### ¿Por qué las props son de solo lectura?
Porque el hijo no debe modificar directamente los datos del padre.

### ¿Por qué `TransactionItem` no elimina directamente los datos?
Porque la lista y el estado principal están en `App.jsx`. `TransactionItem` solo avisa que el usuario hizo clic.

### ¿Cómo llega una acción desde `TransactionItem` hasta `App.jsx`?
`TransactionItem` ejecuta una callback → `TransactionList` la recibió del padre → la acción termina en `App.jsx`.

### Diagrama textual
```text
App
 ├── Header
 ├── Summary
 │    └── recibe: transactions
 ├── TransactionForm
 │    └── recibe: editingTransaction, onCreateTransaction, onUpdateTransaction, onCancelEdit, message
 ├── TransactionFilter
 │    └── recibe: filter, onFilterChange
 └── TransactionList
      └── recibe: transactions, loading, onEditTransaction, onDeleteTransaction
           └── TransactionItem
                └── recibe: transaction, onEditTransaction, onDeleteTransaction
```

---

## 11. Formularios controlados

### ¿Qué es un formulario controlado?
Es un formulario donde los valores de los inputs dependen del estado de React.

### ¿Dónde se guarda lo que escribe el usuario?
En `formData`, dentro de `TransactionForm.jsx`.

### ¿Qué hace `onChange`?
Actualiza el estado cuando el usuario cambia un input.

### ¿Qué hace `value`?
Hace que el input muestre el valor actual guardado en el estado.

### ¿Cómo se valida el monto?
En `validateForm()`. Si falta o si `Number(formData.amount) <= 0`, se rechaza.

### ¿Por qué el monto se convierte con `Number()`?
Porque los inputs suelen entregar texto, y para calcular o validar correctamente necesitamos un número.

### ¿Qué pasaría si se tratara como texto?
Los cálculos podrían salir mal, por ejemplo al sumar cadenas en vez de números.

### ¿Cómo sabe el formulario si está creando o editando?
Porque revisa si existe `editingTransaction`.

### ¿Cómo se cargan los datos al editar?
Con el `useEffect` de `TransactionForm.jsx`, que copia los datos de `editingTransaction` a `formData`.

### ¿Qué ocurre al cancelar la edición?
`App.jsx` pone `editingTransaction` en `null` y el formulario vuelve a su estado inicial.

---

## 12. JavaScript utilizado

### Variables
Se usan para guardar valores y referencias. Ejemplo: `const API_URL = 'http://localhost:3001/transactions';`

### Objetos
Se usan para representar movimientos y estados. Ejemplo: `message` y `formData`.

### Arreglos
Se usan para la lista de movimientos y categorías.

### Funciones
Se usan para manejar lógica, por ejemplo `loadTransactions`.

### Funciones flecha
Aparecen en casi todo el proyecto, por ejemplo:
```js
const clearMessage = () => {
  setMessage({ type: '', text: '' });
};
```

### Condicionales
Se usan para controlar flujo. Ejemplo: si el filtro es `income` o `expense`.

### Operador ternario
Sí se usa. Ejemplo en `TransactionItem.jsx`:
```js
transaction.type === 'income' ? 'Ingreso' : 'Gasto'
```

### `.map()`
Se usa para renderizar la lista:
```js
transactions.map((transaction) => (
  <TransactionItem key={transaction.id} ... />
))
```

### `.filter()`
Se usa para filtrar por tipo y para eliminar un movimiento del estado.

### `.reduce()`
Se usa en `Summary.jsx` para sumar ingresos y gastos.

### `async/await`
Se usa en las funciones de CRUD para trabajar con peticiones HTTP.

### `try/catch`
Se usa para manejar errores de API sin romper la aplicación.

### Template literals
Se usan para URLs dinámicas:
```js
`${API_URL}/${editingTransaction.id}`
```

### Desestructuración
Se usa en eventos y props. Ejemplo:
```js
const { name, value } = event.target;
```

### Spread operator
Se usa para copiar el estado anterior del formulario:
```js
setFormData((prevFormData) => ({
  ...prevFormData,
  [name]: value,
}));
```

### Conceptos no usados
No se usan reducers, context, custom hooks ni TypeScript.

---

## 13. Bootstrap y CSS

### ¿Qué es Bootstrap?
Es un framework de CSS con clases ya preparadas para diseñar interfaces.

### ¿Por qué se eligió Bootstrap?
Porque permite hacer una interfaz limpia y responsive sin escribir mucho CSS manual.

### ¿Qué es un framework de CSS?
Es una herramienta que ofrece estilos predefinidos para trabajar más rápido.

### ¿Qué clases de Bootstrap usa realmente el proyecto?
Algunos ejemplos reales:
- `container`
- `row`
- `col-12`
- `col-lg-5`
- `col-lg-7`
- `card`
- `card-body`
- `shadow-sm`
- `border-0`
- `btn`
- `btn-success`
- `btn-outline-secondary`
- `btn-outline-primary`
- `btn-outline-danger`
- `form-control`
- `form-select`
- `table`
- `table-striped`
- `table-hover`
- `badge`
- `alert`
- `text-success`
- `text-danger`
- `text-primary`

### ¿Qué significa que el diseño sea responsive?
Que se adapta a distintos tamaños de pantalla.

### ¿Para qué se usa `index.css`?
Para pequeños ajustes propios del proyecto, como color de fondo, ancho máximo y detalle visual de las tarjetas.

### ¿Por qué no se escribió todo el estilo manualmente?
Porque Bootstrap resuelve la mayor parte del diseño y hace el proyecto más rápido de construir.

### ¿Qué diferencia hay entre Bootstrap y React?
React construye la interfaz con componentes y lógica. Bootstrap aporta estilos visuales.

---

## 14. JSON Server y `db.json`

### ¿Qué es JSON Server?
Es una herramienta que simula una API REST a partir de un archivo JSON.

### ¿Qué representa `db.json`?
Representa los datos guardados del proyecto.

### ¿Qué significa la colección `transactions`?
Es la lista de movimientos financieros del proyecto.

### ¿Qué es un endpoint?
Es una URL concreta de la API a la que hacemos peticiones.

### ¿Cuál es el endpoint utilizado?
```text
http://localhost:3001/transactions
```

### ¿Cómo se genera el ID?
JSON Server genera un ID automáticamente cuando se hace un POST.

### ¿Qué pasa cuando se modifica un movimiento?
La API actualiza ese registro y luego el frontend actualiza `transactions` para reflejar el cambio.

### ¿Por qué los datos permanecen después de recargar?
Porque JSON Server guarda los cambios en `db.json`.

### ¿Por qué hacen falta dos terminales?
Porque una levanta Vite y la otra levanta JSON Server.

### Diferencia entre el servidor de Vite y JSON Server
- **Vite:** sirve la app React en desarrollo.
- **JSON Server:** responde las peticiones CRUD de los datos.

---

## 15. Preguntas sobre decisiones del proyecto

### ¿Por qué eligieron Finanzas Personales?
Porque es un problema simple, útil y permite mostrar claramente un CRUD.

### ¿Por qué no agregaron login?
Porque no era un requisito y habría agregado complejidad innecesaria.

### ¿Por qué no usaron una base de datos real?
Porque para este nivel alcanzaba con JSON Server y `db.json`.

### ¿Por qué no usaron Redux?
Porque el estado del proyecto es pequeño y se puede manejar bien desde `App.jsx`.

### ¿Por qué no usaron TypeScript?
Porque el trabajo pedía una solución inicial y JavaScript era suficiente.

### ¿Por qué no usaron Axios?
Porque `fetch` ya cubre el requerimiento de Ajax de forma simple.

### ¿Por qué no usaron rutas?
Porque la aplicación tiene una sola vista principal y no las necesita.

### ¿Por qué centralizaron el estado en `App.jsx`?
Porque ahí vive la lista principal y es el componente padre de los componentes que usan esos datos.

### ¿Por qué usaron un solo formulario para crear y editar?
Porque simplifica la interfaz y demuestra mejor cómo cambia el comportamiento según `editingTransaction`.

### ¿Por qué eligieron `fetch`?
Porque es nativo, simple y suficiente para este proyecto.

### ¿Por qué utilizaron componentes separados?
Porque así cada parte tiene una responsabilidad clara.

### ¿Qué mejorarían en una versión futura?
Podríamos agregar categorías administrables, mejores filtros o autenticación, pero eso ya sería una versión más avanzada.

---

## 16. Preguntas difíciles o de seguimiento

### ¿Qué pasaría si dos usuarios editan al mismo tiempo?
Como usamos JSON Server y un proyecto local simple, no hay manejo avanzado de concurrencia. Ganaría el último cambio guardado.

### ¿Qué pasa si la API devuelve un error?
El código entra al `catch` y muestra un mensaje de error sin romper la app.

### ¿Qué ocurre si el usuario escribe un monto negativo?
La validación del formulario lo rechaza porque el monto debe ser mayor a cero.

### ¿Qué ocurre si el servidor está apagado?
La app no puede obtener o guardar datos y muestra errores de conexión.

### ¿Por qué el filtro no usa otra petición GET?
Porque el proyecto ya tiene los movimientos cargados y filtrar localmente es más simple y suficiente.

### ¿Qué diferencia hay entre estado y props?
El estado cambia dentro del componente. Las props llegan desde el padre.

### ¿Qué diferencia hay entre `map`, `filter` y `reduce`?
- `map` transforma o renderiza cada elemento.
- `filter` deja solo los que cumplen una condición.
- `reduce` acumula valores, por ejemplo una suma.

### ¿Qué diferencia hay entre POST y PATCH?
POST crea un recurso nuevo. PATCH modifica parcialmente uno existente.

### ¿Por qué PATCH y no PUT?
Porque solo actualizamos los campos necesarios del movimiento ya existente.

### ¿Qué diferencia hay entre frontend y backend?
El frontend es la interfaz que usa el usuario. El backend responde peticiones y gestiona datos.

### ¿JSON Server representa el backend?
Sí, en este proyecto lo usamos como una simulación simple del backend.

### ¿Qué partes del proyecto son frontend?
Los archivos React, la interfaz, los estilos y la lógica del navegador.

### ¿Qué limitaciones tiene el proyecto?
No tiene autenticación, base de datos real, múltiples usuarios ni validaciones avanzadas del lado servidor.

---

## 17. Preguntas con fragmentos de código

### `useState` en `App.jsx`
```js
const [transactions, setTransactions] = useState([]);
```
- `transactions` guarda la lista de movimientos.
- `setTransactions` actualiza esa lista.
- Se ejecuta al renderizar el componente.

### `useEffect` para el GET inicial
```js
useEffect(() => {
  loadTransactions();
}, []);
```
- Llama a `loadTransactions` al montar el componente.
- El arreglo vacío evita un loop infinito.

### GET real
```js
const response = await fetch(API_URL);
const data = await response.json();
setTransactions(data);
```
- Hace la petición.
- Convierte la respuesta a JSON.
- Guarda los datos en el estado.

### POST real
```js
const response = await fetch(API_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});
```
- Envía un nuevo movimiento a la API.
- Usa `POST`.
- El cuerpo viaja como JSON.

### PATCH real
```js
const response = await fetch(`${API_URL}/${editingTransaction.id}`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});
```
- Modifica el movimiento seleccionado.
- Usa el ID en la URL.

### DELETE real
```js
const response = await fetch(`${API_URL}/${id}`, {
  method: 'DELETE',
});
```
- Elimina un movimiento por ID.

### `.filter()` para el filtro visual
```js
const filteredTransactions = transactions.filter((transaction) => {
  if (filter === 'income') {
    return transaction.type === 'income';
  }

  if (filter === 'expense') {
    return transaction.type === 'expense';
  }

  return true;
});
```
- Parte de la lista original.
- Devuelve solo lo que corresponde mostrar.

### `.reduce()` para totales
```js
.reduce((accumulator, transaction) => accumulator + Number(transaction.amount), 0);
```
- Va acumulando montos.
- Convierte a número antes de sumar.

### Props en `Summary`
```js
<Summary transactions={transactions} />
```
- `App` le pasa la lista.
- `Summary` no la modifica, solo la usa para calcular.

### Input controlado
```js
<input
  name="description"
  value={formData.description}
  onChange={handleChange}
/>
```
- `value` viene del estado.
- `onChange` actualiza el estado.

### Renderizado con `.map()`
```js
{transactions.map((transaction) => (
  <TransactionItem
    key={transaction.id}
    transaction={transaction}
    onEditTransaction={onEditTransaction}
    onDeleteTransaction={onDeleteTransaction}
  />
))}
```
- Recorre la lista.
- Renderiza una fila por cada movimiento.
- Usa `transaction.id` como key estable.

---

## 18. Respuestas que no deben memorizar palabra por palabra

La idea no es repetir definiciones como un robot. Lo importante es entender el concepto y poder decirlo con palabras propias.

| Concepto | Idea principal | Ejemplo del proyecto | Respuesta natural |
|---|---|---|---|
| React | Sirve para construir interfaces con componentes | Toda la app está hecha con React | “Usamos React para dividir la interfaz en partes y manejar el estado.” |
| Props | Son datos o funciones que un padre pasa a un hijo | `App.jsx` pasa `transactions` a `Summary` | “Las props nos permiten comunicar componentes sin duplicar lógica.” |
| Estado | Es información que puede cambiar | `transactions`, `filter`, `editingTransaction` | “El estado guarda los datos que cambian durante el uso.” |
| `useEffect` | Ejecuta lógica en ciertos momentos | GET inicial | “Lo usamos para cargar los movimientos al abrir la app.” |
| CRUD | Crear, leer, editar y eliminar | Movimientos financieros | “Nuestro proyecto cumple CRUD completo con la API.” |
| JSON Server | Simula una API REST | `db.json` | “Nos permitió tener backend simple sin crear un servidor propio.” |

---

## 19. Errores comunes durante la defensa

- No decir que React es un lenguaje.
- No decir que Bootstrap es parte de React.
- No confundir props con estado.
- No decir que JSON Server es una base de datos de producción.
- No decir que Ajax es una librería.
- No decir que el CRUD funciona únicamente en estado local.
- No confundir Vite con React.
- No confundir frontend con API.
- No afirmar que el proyecto tiene login, rutas o gráficos si no existen.
- No inventar respuestas.

### Forma correcta de responder si no saben algo
> “No estoy completamente seguro, pero en nuestro proyecto lo utilizamos de esta manera…”

---

## 20. Tarjetas de estudio

### Tarjeta 1
**Pregunta:** ¿Qué es React?
**Respuesta corta:** Una librería de JavaScript para construir interfaces.
**Ejemplo en nuestro proyecto:** La app completa está hecha con React.

### Tarjeta 2
**Pregunta:** ¿Qué es un componente?
**Respuesta corta:** Una parte reutilizable de la interfaz.
**Ejemplo en nuestro proyecto:** `Header`, `Summary` y `TransactionForm`.

### Tarjeta 3
**Pregunta:** ¿Qué es un componente funcional?
**Respuesta corta:** Un componente escrito como función.
**Ejemplo en nuestro proyecto:** Todos los componentes del proyecto.

### Tarjeta 4
**Pregunta:** ¿Qué es JSX?
**Respuesta corta:** Sintaxis similar a HTML dentro de JavaScript.
**Ejemplo en nuestro proyecto:** El retorno de `App.jsx`.

### Tarjeta 5
**Pregunta:** ¿Qué es el estado?
**Respuesta corta:** Información que cambia durante la ejecución.
**Ejemplo en nuestro proyecto:** `transactions` y `filter`.

### Tarjeta 6
**Pregunta:** ¿Qué hace `useState`?
**Respuesta corta:** Crea y actualiza estado.
**Ejemplo en nuestro proyecto:** `const [loading, setLoading] = useState(true);`

### Tarjeta 7
**Pregunta:** ¿Qué hace `useEffect`?
**Respuesta corta:** Ejecuta código cuando el componente se monta o cambian dependencias.
**Ejemplo en nuestro proyecto:** Llamar a `loadTransactions()` al inicio.

### Tarjeta 8
**Pregunta:** ¿Qué son las props?
**Respuesta corta:** Datos o funciones que un padre pasa a un hijo.
**Ejemplo en nuestro proyecto:** `Summary` recibe `transactions`.

### Tarjeta 9
**Pregunta:** ¿Cuál es el componente padre principal?
**Respuesta corta:** `App.jsx`.
**Ejemplo en nuestro proyecto:** Desde ahí se pasa información al resto.

### Tarjeta 10
**Pregunta:** ¿Qué es una callback?
**Respuesta corta:** Una función que un componente recibe para ejecutarla después.
**Ejemplo en nuestro proyecto:** `onDeleteTransaction`.

### Tarjeta 11
**Pregunta:** ¿Qué significa CRUD?
**Respuesta corta:** Create, Read, Update y Delete.
**Ejemplo en nuestro proyecto:** Crear, leer, editar y eliminar movimientos.

### Tarjeta 12
**Pregunta:** ¿Qué método HTTP usa la lectura inicial?
**Respuesta corta:** GET.
**Ejemplo en nuestro proyecto:** `loadTransactions`.

### Tarjeta 13
**Pregunta:** ¿Qué método HTTP usa crear?
**Respuesta corta:** POST.
**Ejemplo en nuestro proyecto:** `handleCreateTransaction`.

### Tarjeta 14
**Pregunta:** ¿Qué método HTTP usa editar?
**Respuesta corta:** PATCH.
**Ejemplo en nuestro proyecto:** `handleUpdateTransaction`.

### Tarjeta 15
**Pregunta:** ¿Qué método HTTP usa eliminar?
**Respuesta corta:** DELETE.
**Ejemplo en nuestro proyecto:** `handleDeleteTransaction`.

### Tarjeta 16
**Pregunta:** ¿Qué es Ajax?
**Respuesta corta:** Comunicación con el servidor sin recargar la página.
**Ejemplo en nuestro proyecto:** Las peticiones hechas con `fetch`.

### Tarjeta 17
**Pregunta:** ¿Qué hace `fetch`?
**Respuesta corta:** Realiza peticiones HTTP.
**Ejemplo en nuestro proyecto:** GET, POST, PATCH y DELETE.

### Tarjeta 18
**Pregunta:** ¿Qué es `response.ok`?
**Respuesta corta:** Indica si la respuesta fue exitosa.
**Ejemplo en nuestro proyecto:** Se valida antes de seguir en cada operación.

### Tarjeta 19
**Pregunta:** ¿Qué es JSON?
**Respuesta corta:** Un formato de texto para datos.
**Ejemplo en nuestro proyecto:** Los movimientos viajan y se guardan en JSON.

### Tarjeta 20
**Pregunta:** ¿Qué es JSON Server?
**Respuesta corta:** Un servidor simple que simula una API REST.
**Ejemplo en nuestro proyecto:** Usa `db.json` para guardar movimientos.

### Tarjeta 21
**Pregunta:** ¿Dónde se guardan los datos?
**Respuesta corta:** En `db.json`.
**Ejemplo en nuestro proyecto:** En la colección `transactions`.

### Tarjeta 22
**Pregunta:** ¿Cuál es el endpoint principal?
**Respuesta corta:** `http://localhost:3001/transactions`
**Ejemplo en nuestro proyecto:** Todas las operaciones van a ese endpoint.

### Tarjeta 23
**Pregunta:** ¿Qué hace `Summary.jsx`?
**Respuesta corta:** Calcula ingresos, gastos y balance.
**Ejemplo en nuestro proyecto:** Usa `.filter()` y `.reduce()`.

### Tarjeta 24
**Pregunta:** ¿Por qué se usa `Number()`?
**Respuesta corta:** Para convertir el monto a número real.
**Ejemplo en nuestro proyecto:** Antes de guardar y al calcular totales.

### Tarjeta 25
**Pregunta:** ¿Qué es un formulario controlado?
**Respuesta corta:** Un formulario conectado al estado de React.
**Ejemplo en nuestro proyecto:** `TransactionForm.jsx`.

### Tarjeta 26
**Pregunta:** ¿Dónde se guarda lo escrito en el formulario?
**Respuesta corta:** En `formData`.
**Ejemplo en nuestro proyecto:** `useState(initialFormData)`.

### Tarjeta 27
**Pregunta:** ¿Qué hace `handleChange`?
**Respuesta corta:** Actualiza el campo correspondiente del formulario.
**Ejemplo en nuestro proyecto:** Usa `name` y `value` del input.

### Tarjeta 28
**Pregunta:** ¿Cómo sabe el formulario si está editando?
**Respuesta corta:** Revisa si existe `editingTransaction`.
**Ejemplo en nuestro proyecto:** Cambia título y botón.

### Tarjeta 29
**Pregunta:** ¿Qué pasa al cancelar edición?
**Respuesta corta:** Se sale del modo edición y se limpia el formulario.
**Ejemplo en nuestro proyecto:** `onCancelEdit`.

### Tarjeta 30
**Pregunta:** ¿Cómo se cargan los datos al editar?
**Respuesta corta:** Con `useEffect` dentro de `TransactionForm`.
**Ejemplo en nuestro proyecto:** Copia el movimiento a `formData`.

### Tarjeta 31
**Pregunta:** ¿Qué hace el filtro?
**Respuesta corta:** Muestra solo ingresos, gastos o todos.
**Ejemplo en nuestro proyecto:** `filteredTransactions`.

### Tarjeta 32
**Pregunta:** ¿El filtro modifica la lista original?
**Respuesta corta:** No.
**Ejemplo en nuestro proyecto:** Usa `transactions.filter(...)` sin borrar el estado original.

### Tarjeta 33
**Pregunta:** ¿Qué hace `.map()` en este proyecto?
**Respuesta corta:** Recorre la lista para renderizar elementos.
**Ejemplo en nuestro proyecto:** Genera `TransactionItem`.

### Tarjeta 34
**Pregunta:** ¿Qué hace `.filter()` en este proyecto?
**Respuesta corta:** Filtra elementos según una condición.
**Ejemplo en nuestro proyecto:** Filtrar ingresos o gastos.

### Tarjeta 35
**Pregunta:** ¿Qué hace `.reduce()` en este proyecto?
**Respuesta corta:** Acumula valores para obtener un total.
**Ejemplo en nuestro proyecto:** Sumar montos en `Summary.jsx`.

### Tarjeta 36
**Pregunta:** ¿Qué es Bootstrap?
**Respuesta corta:** Un framework de CSS.
**Ejemplo en nuestro proyecto:** Tarjetas, botones, grilla y tabla.

### Tarjeta 37
**Pregunta:** ¿Qué es responsive?
**Respuesta corta:** Que se adapta a diferentes tamaños de pantalla.
**Ejemplo en nuestro proyecto:** Uso de `row`, `col-12`, `col-lg-5`, `col-lg-7`.

### Tarjeta 38
**Pregunta:** ¿Qué hace `main.jsx`?
**Respuesta corta:** Arranca la app React.
**Ejemplo en nuestro proyecto:** Renderiza `App` e importa Bootstrap.

### Tarjeta 39
**Pregunta:** ¿Qué hace `App.jsx`?
**Respuesta corta:** Maneja el estado principal y el CRUD.
**Ejemplo en nuestro proyecto:** Tiene `transactions`, `filter`, `editingTransaction`.

### Tarjeta 40
**Pregunta:** ¿Qué hace `TransactionList.jsx`?
**Respuesta corta:** Muestra loading, vacío o la tabla.
**Ejemplo en nuestro proyecto:** Renderiza `TransactionItem`.

### Tarjeta 41
**Pregunta:** ¿Qué hace `TransactionItem.jsx`?
**Respuesta corta:** Muestra una fila con botones de editar y eliminar.
**Ejemplo en nuestro proyecto:** Usa `transaction.id` para acciones.

### Tarjeta 42
**Pregunta:** ¿Qué hace `TransactionFilter.jsx`?
**Respuesta corta:** Permite cambiar el filtro actual.
**Ejemplo en nuestro proyecto:** `Todos`, `Ingresos`, `Gastos`.

### Tarjeta 43
**Pregunta:** ¿Qué hace `Header.jsx`?
**Respuesta corta:** Muestra el título y un subtítulo.
**Ejemplo en nuestro proyecto:** “Finanzas Personales”.

### Tarjeta 44
**Pregunta:** ¿Qué pasa si la API falla?
**Respuesta corta:** Se muestra un error y la app no se cae.
**Ejemplo en nuestro proyecto:** `catch` y mensajes visibles.

### Tarjeta 45
**Pregunta:** ¿Por qué hacen falta dos terminales?
**Respuesta corta:** Una para Vite y otra para JSON Server.
**Ejemplo en nuestro proyecto:** `npm run dev` y `npm run server`.

---

## 21. Simulacro de examen oral

## Simulacro básico — preguntas
1. ¿Qué hace el proyecto?
2. ¿Qué tecnologías principales usa?
3. ¿Qué es React?
4. ¿Qué es un componente?
5. ¿Qué significa CRUD?
6. ¿Qué hace `useState`?
7. ¿Qué hace `useEffect`?
8. ¿Qué es una prop?
9. ¿Qué es JSON Server?
10. ¿Qué método HTTP usa crear un movimiento?

### Respuestas esperadas — simulacro básico
1. Registrar ingresos y gastos y mostrar un resumen.
2. React, Vite, JavaScript, Bootstrap, JSON Server y `fetch`.
3. Una librería para construir interfaces.
4. Una parte reutilizable de la interfaz.
5. Crear, leer, editar y eliminar.
6. Crear y actualizar estado.
7. Ejecutar lógica como el GET inicial.
8. Un dato o función que pasa el padre al hijo.
9. Una herramienta que simula una API REST.
10. POST.

## Simulacro intermedio — preguntas
1. ¿Dónde se hace el GET inicial?
2. ¿Por qué `App.jsx` es el componente principal?
3. ¿Cómo se calcula el balance?
4. ¿Cómo sabe el formulario si está en modo edición?
5. ¿Qué pasa cuando el usuario presiona Editar?
6. ¿Por qué el filtro no borra la lista original?
7. ¿Por qué se usa `Number(formData.amount)`?
8. ¿Qué hace `handleDeleteTransaction` antes del DELETE?
9. ¿Qué props recibe `TransactionList`?
10. ¿Qué hace `TransactionItem` cuando el usuario toca Eliminar?

### Respuestas esperadas — simulacro intermedio
1. En `useEffect`, llamando a `loadTransactions`.
2. Porque concentra el estado y las funciones del CRUD.
3. Restando gastos a ingresos.
4. Revisando si existe `editingTransaction`.
5. `handleStartEdit` guarda el movimiento seleccionado.
6. Porque crea `filteredTransactions` a partir de `transactions.filter(...)`.
7. Para trabajar con números reales y no con texto.
8. Muestra `window.confirm`.
9. `transactions`, `loading`, `onEditTransaction`, `onDeleteTransaction`.
10. Ejecuta la callback `onDeleteTransaction(transaction.id)`.

## Simulacro difícil — preguntas
1. ¿Por qué PATCH y no PUT?
2. ¿Qué pasaría si JSON Server está apagado?
3. ¿Qué pasaría si se tratara el monto como string?
4. ¿Qué diferencia hay entre estado y props?
5. ¿Por qué `TransactionItem` no elimina directamente desde la API?
6. ¿Qué diferencia hay entre frontend y backend en este proyecto?
7. ¿Qué limitación tiene usar JSON Server?
8. ¿Por qué el GET no está directamente en el cuerpo del componente?
9. ¿Por qué en desarrollo podrían verse dos GET?
10. ¿Qué mejorarían en una versión futura?

### Respuestas esperadas — simulacro difícil
1. Porque solo actualizamos parcialmente el recurso.
2. La app mostraría errores de conexión y no podría guardar cambios.
3. Las validaciones y sumas podrían funcionar mal.
4. El estado cambia dentro del componente; las props vienen del padre.
5. Porque la lógica y el estado principal están en `App.jsx`.
6. El frontend es React y la interfaz; el backend simulado es JSON Server.
7. No es una solución de producción ni maneja casos avanzados.
8. Porque generaría peticiones en cada render; por eso se usa `useEffect`.
9. Por `StrictMode` en desarrollo.
10. Más filtros, autenticación o una base de datos real.

---

## 22. Reparto entre integrantes

## Integrante 1
- Introducción.
- Interfaz.
- Bootstrap.
- Resumen financiero.

## Integrante 2
- React.
- Componentes.
- Props.
- Estado y hooks.

## Integrante 3
- CRUD.
- Ajax.
- HTTP.
- JSON Server.

### Todos deben saber responder
- Qué hace el proyecto.
- Qué tecnologías usa.
- Qué hace `App.jsx`.
- Qué significa CRUD.
- Qué método HTTP usa cada operación.
- Qué son props.
- Qué hace `useState`.
- Qué hace `useEffect`.
- Qué función cumple JSON Server.
- Cómo iniciar el proyecto.

> Si usan nombres reales en la exposición, reemplacen “Integrante 1”, “Integrante 2” e “Integrante 3” por sus nombres.

---

## 23. Checklist del día del examen

- Tener Node.js instalado.
- Ejecutar `npm install`.
- Abrir dos terminales.
- Ejecutar `npm run server`.
- Ejecutar `npm run dev`.
- Probar el endpoint `http://localhost:3001/transactions`.
- Probar crear un movimiento.
- Probar editar un movimiento.
- Probar eliminar un movimiento.
- Restaurar datos de demostración si hace falta.
- Tener una copia ZIP del proyecto.
- Tener el repositorio disponible.
- Llevar el proyecto en pendrive.
- Verificar que los puertos estén disponibles.
- Tener preparado un plan por si falla Internet.
- Recordar que el proyecto funciona localmente.
- Verificar que todos sepan iniciar la aplicación.

---

## 24. REPASO RÁPIDO ANTES DE ENTRAR

### Qué hace el proyecto
Registra ingresos y gastos, muestra una lista de movimientos y calcula ingresos, gastos y balance.

### Tecnologías
React, Vite, JavaScript, Bootstrap, JSON Server y `fetch`.

### Componentes principales
- `App.jsx`: estado principal y CRUD.
- `Summary.jsx`: totales.
- `TransactionForm.jsx`: crear y editar.
- `TransactionFilter.jsx`: filtro.
- `TransactionList.jsx`: tabla.
- `TransactionItem.jsx`: fila con acciones.

### Hooks
- `useState`: guarda estados.
- `useEffect`: hace el GET inicial.

### Props
`App.jsx` pasa datos y callbacks a los componentes hijos.

### CRUD y métodos HTTP
- Read → GET
- Create → POST
- Update → PATCH
- Delete → DELETE

### JSON Server
Simula la API y guarda los datos en `db.json`.

### Pasos de la demostración
1. Mostrar movimientos iniciales.
2. Explicar resumen.
3. Crear ingreso.
4. Crear gasto.
5. Probar filtros.
6. Editar.
7. Cancelar edición.
8. Guardar edición.
9. Eliminar.
10. Refrescar página.

### Diez respuestas esenciales
1. React es una librería para construir interfaces.
2. `App.jsx` es el componente principal.
3. El GET inicial está en `useEffect`.
4. `useState` maneja estados.
5. Las props comunican padre e hijo.
6. El CRUD usa `fetch`.
7. Los datos se guardan en `db.json`.
8. Bootstrap se usa para el diseño.
9. El filtro no modifica la lista original.
10. El formulario está controlado por React.

---

## Validación final

- `DEFENSA_ORAL.md` fue creado.
- El contenido está basado en el código real de `TPFinal`.
- Las cuatro operaciones CRUD están explicadas correctamente.
- Se explican props, hooks y componentes funcionales.
- Se cubren los requisitos académicos.
- No se modificó la funcionalidad de la aplicación.
