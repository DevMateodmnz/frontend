import React from 'react';
import CounterClass from './components/CounterClass.jsx';
import ClockClass from './components/ClockClass.jsx';
import AgeFetcher from './components/AgeFetcher.jsx';

/**
 * App — Componente padre
 *
 * Demuestra comunicación padre → hijo pasando props (title) a cada componente.
 * Cada componente hijo está en su propio archivo, siguiendo buena separación.
 */
function App() {
  return (
    <div className="app">
      <div className="title-wrapper">
        <h1 className="app-title">Trabajo Práctico React</h1>
      </div>

      <CounterClass title="Ejercicio 1 — Contador" />
      <ClockClass title="Ejercicio 2 — Reloj" />
      <AgeFetcher title="Ejercicio 3 — Consultar Edad (AJAX)" />
    </div>
  );
}

export default App;
