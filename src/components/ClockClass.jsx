import React from 'react';

/**
 * ClockClass — Reloj digital con setInterval / clearInterval
 *
 * Conceptos clave:
 *  - setInterval: ejecuta una función cada 1000ms para actualizar la hora
 *  - clearInterval: detiene el intervalo para evitar memory leaks
 *  - Guarda contra múltiples intervalos: si ya hay uno corriendo, no crea otro
 *  - componentWillUnmount: limpia el intervalo cuando el componente se desmonta
 *  - El ID del intervalo se guarda como propiedad de instancia (this.intervalId),
 *    NO en el state, porque no necesitamos re-renderizar al cambiarlo
 */
class ClockClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      running: false,
    };
    // Guardamos el ID del intervalo fuera del state
    // (no dispara re-render, que es lo correcto para un ID de timer)
    this.intervalId = null;
  }

  // Actualiza this.state.time con la hora actual
  tick = () => {
    this.setState({ time: new Date() });
  };

  startClock = () => {
    // Evitamos crear múltiples intervalos si ya está corriendo
    if (this.intervalId !== null) return;

    this.intervalId = setInterval(this.tick, 1000);
    this.setState({ running: true });
  };

  stopClock = () => {
    // Detenemos el intervalo y lo limpiamos
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.setState({ running: false });
  };

  // Ciclo de vida: se ejecuta justo antes de que el componente se elimine del DOM
  componentWillUnmount() {
    // Limpieza: evitamos que el intervalo siga corriendo después de desmontar
    clearInterval(this.intervalId);
  }

  render() {
    const { time, running } = this.state;

    // Formateamos la hora como HH:MM:SS
    const formatted = time.toLocaleTimeString('es-AR');

    return (
      <div className="card">
        <h2 className="card-title">{this.props.title || 'Reloj'}</h2>

        <div className="clock-display">{formatted}</div>

        <div className="btn-group">
          <button className="btn btn-success" onClick={this.startClock}>
            Iniciar
          </button>
          <button className="btn btn-danger" onClick={this.stopClock}>
            Detener
          </button>
        </div>

        <div className="clock-status">
          {running ? '▶ Reloj corriendo' : '⏸ Reloj detenido'}
        </div>
      </div>
    );
  }
}

export default ClockClass;
