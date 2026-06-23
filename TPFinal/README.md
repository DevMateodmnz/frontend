# Finanzas Personales

Aplicación web desarrollada con **React** para registrar y administrar movimientos financieros personales.

El proyecto permite cargar ingresos y gastos, editarlos, eliminarlos, filtrarlos y consultar un resumen general del dinero disponible.

Este trabajo fue realizado como proyecto final de Front-End utilizando:

* HTML
* CSS
* JavaScript
* React
* Bootstrap
* JSON Server
* Peticiones HTTP con `fetch`

---

## Funcionalidades

La aplicación permite:

* Ver todos los movimientos registrados.
* Crear nuevos ingresos y gastos.
* Editar movimientos existentes.
* Eliminar movimientos.
* Filtrar por:

  * Todos
  * Ingresos
  * Gastos
* Consultar:

  * Total de ingresos
  * Total de gastos
  * Balance disponible
* Guardar los datos en una API local utilizando JSON Server.
* Mostrar mensajes de carga, éxito y error.

---

## Tecnologías utilizadas

* **React:** creación de la interfaz mediante componentes.
* **Vite:** herramienta utilizada para ejecutar y compilar el proyecto.
* **JavaScript:** lógica de la aplicación.
* **Bootstrap:** estilos y diseño responsive.
* **JSON Server:** API REST local para guardar los movimientos.
* **Fetch API:** comunicación entre React y JSON Server.

---

## Requisitos previos

Antes de ejecutar el proyecto, es necesario tener instalado:

### Node.js

Se recomienda utilizar una versión LTS reciente de Node.js.

Para comprobar si Node.js está instalado, abrir una terminal y ejecutar:

```bash
node -v
```

También comprobar que npm esté instalado:

```bash
npm -v
```

Si ambos comandos muestran un número de versión, ya pueden continuar.

Si aparece un mensaje como `command not found` o “no se reconoce como un comando”, deberán instalar Node.js antes de ejecutar el proyecto.

---

## Descargar o recibir el proyecto

El proyecto puede recibirse de dos maneras.

### Opción 1: archivo comprimido

1. Descargar el archivo `.zip`.
2. Descomprimirlo.
3. Abrir la carpeta `TPFinal`.
4. Abrir una terminal dentro de esa carpeta.

### Opción 2: repositorio Git

Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Entrar en la carpeta:

```bash
cd TPFinal
```

Reemplazar `URL_DEL_REPOSITORIO` por la dirección real del repositorio.

---

## Instalación

La instalación se realiza una sola vez en cada computadora.

Dentro de la carpeta `TPFinal`, ejecutar:

```bash
npm install
```

Este comando instalará todas las dependencias necesarias.

No es necesario instalar React, Bootstrap o JSON Server manualmente porque npm utilizará la configuración incluida en `package.json`.

---

# Cómo ejecutar el proyecto

La aplicación necesita **dos terminales abiertas al mismo tiempo**:

1. Una terminal para JSON Server.
2. Otra terminal para React.

No deben cerrar ninguna de las dos mientras estén utilizando la aplicación.

---

## Terminal 1: iniciar JSON Server

Abrir una terminal dentro de `TPFinal` y ejecutar:

```bash
npm run server
```

Si funciona correctamente, la API estará disponible en:

```text
http://localhost:3001/transactions
```

Esta terminal debe permanecer abierta.

---

## Terminal 2: iniciar React

Abrir una segunda terminal dentro de `TPFinal` y ejecutar:

```bash
npm run dev
```

Vite mostrará una dirección similar a:

```text
http://localhost:5173/
```

Abrir esa dirección en el navegador.

En algunas computadoras Vite puede utilizar otro puerto, por ejemplo `5174`. Siempre se debe abrir la dirección que aparece en la terminal.

---

## Resumen rápido

### Primera terminal

```bash
cd TPFinal
npm run server
```

### Segunda terminal

```bash
cd TPFinal
npm run dev
```

### En el navegador

```text
http://localhost:5173/
```

---

# Prueba rápida de la aplicación

Para comprobar que todo funciona, realizar las siguientes pruebas.

## 1. Ver los datos iniciales

Al abrir la aplicación deberían aparecer algunos movimientos de ejemplo.

También deberían mostrarse tres tarjetas:

* Total de ingresos
* Total de gastos
* Balance

---

## 2. Crear un ingreso

Completar el formulario con datos similares a estos:

```text
Descripción: Trabajo freelance
Monto: 100000
Tipo: Ingreso
Categoría: Sueldo
Fecha: fecha actual
```

Presionar el botón para guardar.

Comprobar que:

* El movimiento aparece en la lista.
* Aumenta el total de ingresos.
* Cambia el balance.

---

## 3. Crear un gasto

Ejemplo:

```text
Descripción: Compra del supermercado
Monto: 25000
Tipo: Gasto
Categoría: Comida
Fecha: fecha actual
```

Comprobar que:

* El gasto aparece en la lista.
* Aumenta el total de gastos.
* Disminuye el balance.

---

## 4. Probar los filtros

Seleccionar:

* Todos
* Ingresos
* Gastos

Cada opción debe mostrar solamente los movimientos correspondientes.

---

## 5. Editar un movimiento

1. Presionar **Editar** en algún movimiento.
2. Comprobar que sus datos aparecen en el formulario.
3. Modificar la descripción o el monto.
4. Guardar los cambios.

Comprobar que:

* El movimiento se actualiza.
* Los totales cambian cuando corresponde.
* El formulario sale del modo de edición.

---

## 6. Cancelar una edición

1. Presionar **Editar**.
2. Presionar **Cancelar edición**.

Comprobar que:

* El formulario se limpia.
* No se modifica el movimiento.
* La aplicación vuelve al modo normal de creación.

---

## 7. Eliminar un movimiento

1. Presionar **Eliminar**.
2. Confirmar la eliminación en la ventana del navegador.

Comprobar que:

* El movimiento desaparece.
* Los totales se actualizan.
* Si se cancela la confirmación, el movimiento no se elimina.

---

## 8. Comprobar que los datos se guardan

Después de crear o editar un movimiento:

1. Actualizar la página con `F5`.
2. Comprobar que el movimiento continúa apareciendo.

Los datos se guardan en el archivo:

```text
db.json
```

---

# Cómo detener el proyecto

Para detener los servidores:

1. Ir a la terminal de React.
2. Presionar:

```text
Ctrl + C
```

3. Ir a la terminal de JSON Server.
4. Presionar nuevamente:

```text
Ctrl + C
```

Después de esto, los servidores quedarán detenidos.

---

# Problemas frecuentes

## La página muestra “No se pudo conectar con la API”

La causa más probable es que JSON Server no esté ejecutándose.

Abrir una terminal dentro de `TPFinal` y ejecutar:

```bash
npm run server
```

Después, actualizar la página.

---

## El comando `npm` no funciona

Node.js probablemente no está instalado.

Comprobarlo con:

```bash
node -v
npm -v
```

Si los comandos no funcionan, instalar Node.js y volver a abrir la terminal.

---

## El puerto 3001 está ocupado

Puede haber otro JSON Server ejecutándose.

Cerrar otras terminales relacionadas con el proyecto o detener el proceso anterior con:

```text
Ctrl + C
```

Después volver a ejecutar:

```bash
npm run server
```

---

## El puerto 5173 está ocupado

Vite normalmente elegirá otro puerto automáticamente.

Revisar la terminal y abrir la dirección que aparezca, por ejemplo:

```text
http://localhost:5174/
```

---

## La aplicación abre, pero no aparecen movimientos

Comprobar:

1. Que `npm run server` esté activo.
2. Que la dirección siguiente funcione en el navegador:

```text
http://localhost:3001/transactions
```

3. Que el archivo `db.json` exista.
4. Que `db.json` contenga una colección llamada `transactions`.

---

## Se modificaron o eliminaron los datos de ejemplo

Eso es normal porque la aplicación trabaja directamente con `db.json`.

Para recuperar los datos originales, reemplazar el contenido de `db.json` por una copia anterior del archivo.

No borrar `db.json`, porque JSON Server lo utiliza como base de datos local.

---

## Cambié el código pero no veo los cambios

Probar lo siguiente:

1. Guardar el archivo.
2. Actualizar el navegador.
3. Revisar si hay errores en la terminal.
4. Revisar la consola del navegador.
5. Detener y volver a iniciar:

```bash
npm run dev
```

---

# Estructura del proyecto

```text
TPFinal/
├── README.md
├── db.json
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    └── components/
        ├── Header.jsx
        ├── Summary.jsx
        ├── TransactionForm.jsx
        ├── TransactionFilter.jsx
        ├── TransactionList.jsx
        └── TransactionItem.jsx
```

---

# Explicación de los archivos principales

## `src/App.jsx`

Es el componente principal de la aplicación.

Se encarga de:

* Guardar el estado principal.
* Obtener los movimientos de la API.
* Crear movimientos.
* Editar movimientos.
* Eliminar movimientos.
* Aplicar filtros.
* Enviar datos y funciones a los componentes hijos.

---

## `src/components/Header.jsx`

Muestra el título y la descripción principal del proyecto.

---

## `src/components/Summary.jsx`

Muestra:

* Total de ingresos.
* Total de gastos.
* Balance.

Recibe la lista de movimientos mediante props.

---

## `src/components/TransactionForm.jsx`

Contiene el formulario utilizado para:

* Crear movimientos.
* Editar movimientos.
* Validar los campos.
* Cancelar una edición.

Utiliza inputs controlados con `useState`.

---

## `src/components/TransactionFilter.jsx`

Permite seleccionar:

* Todos
* Ingresos
* Gastos

Recibe el filtro actual y una función para cambiarlo mediante props.

---

## `src/components/TransactionList.jsx`

Muestra la lista de movimientos.

También controla los mensajes de:

* Cargando.
* Lista vacía.
* Error.

---

## `src/components/TransactionItem.jsx`

Representa un movimiento individual.

Muestra sus datos y los botones:

* Editar
* Eliminar

---

## `db.json`

Actúa como una base de datos local.

JSON Server lee y modifica este archivo cada vez que se crea, edita o elimina un movimiento.

---

# Funcionamiento del CRUD

CRUD significa:

* **Create:** crear.
* **Read:** leer.
* **Update:** actualizar.
* **Delete:** eliminar.

En este proyecto se utiliza:

| Operación  | Método HTTP | Uso                           |
| ---------- | ----------- | ----------------------------- |
| Leer       | `GET`       | Obtener todos los movimientos |
| Crear      | `POST`      | Registrar un movimiento nuevo |
| Actualizar | `PATCH`     | Editar un movimiento          |
| Eliminar   | `DELETE`    | Borrar un movimiento          |

Las peticiones se realizan con la función `fetch`.

---

# Comunicación entre componentes

`App.jsx` es el componente padre principal.

El componente padre envía información a sus componentes hijos mediante **props**.

Ejemplos:

* Envía los movimientos a `TransactionList`.
* Envía el movimiento seleccionado a `TransactionForm`.
* Envía los totales a `Summary`.
* Envía funciones para editar o eliminar movimientos.

Los componentes hijos no modifican directamente el estado principal.

En su lugar, ejecutan funciones recibidas desde `App.jsx`.

---

# Hooks utilizados

## `useState`

Se utiliza para guardar información que puede cambiar, por ejemplo:

* Movimientos.
* Filtro seleccionado.
* Movimiento que se está editando.
* Datos del formulario.
* Mensajes.
* Estado de carga.

---

## `useEffect`

Se utiliza para:

* Obtener los movimientos cuando inicia la aplicación.
* Cargar en el formulario los datos del movimiento seleccionado para editar.

---

# Cumplimiento de los requisitos académicos

El proyecto incluye:

* Aplicación React.
* Componentes funcionales.
* Hooks `useState` y `useEffect`.
* CRUD completo.
* Peticiones Ajax con `fetch`.
* API REST local con JSON Server.
* Bootstrap.
* Comunicación padre-hijo mediante props.
* Formularios controlados.
* Renderizado de listas con `.map()`.
* Filtrado con `.filter()`.
* Renderizado condicional.
* Interfaz en español.

---

# Compilar el proyecto

Para verificar que el proyecto puede compilarse correctamente:

```bash
npm run build
```

Si todo funciona, se generará una carpeta llamada:

```text
dist
```

Para las pruebas normales no es necesario abrir esa carpeta.

---

# Recomendaciones para trabajar en grupo

* No borrar archivos sin avisar al resto del equipo.
* No editar manualmente `package-lock.json`.
* Ejecutar `npm install` después de recibir cambios en `package.json`.
* Probar el proyecto antes de compartir cambios.
* No subir la carpeta `node_modules`.
* No borrar `db.json`.
* Avisar al equipo si se modifica la estructura de los movimientos.
* Mantener el código simple y fácil de explicar.
* No agregar tecnologías nuevas sin consultarlo con el grupo.
* Hacer una copia de `db.json` antes de realizar pruebas importantes.

---

# Checklist antes de presentar

* [ ] La aplicación abre correctamente.
* [ ] JSON Server está ejecutándose.
* [ ] Se muestran los movimientos.
* [ ] Se puede crear un ingreso.
* [ ] Se puede crear un gasto.
* [ ] Se puede editar un movimiento.
* [ ] Se puede cancelar una edición.
* [ ] Se puede eliminar un movimiento.
* [ ] Funcionan los filtros.
* [ ] Los totales se actualizan.
* [ ] Los datos permanecen después de actualizar la página.
* [ ] No aparecen errores en la consola.
* [ ] Todos los integrantes saben explicar el funcionamiento básico.

---

# Integrantes

* Mateo el pijudo Dominguez
* Ulises el rayas Mercado
* Javier el dictador Romano

---

# Proyecto académico

Proyecto final de Front-End desarrollado con fines educativos.
