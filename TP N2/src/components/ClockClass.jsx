import React from 'react';

// Componente de clase con setInterval y ciclo de vida
class ClockClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      running: false,
    };
    // Guardamos el ID del intervalo como propiedad de instancia
    this.intervalId = null;
  }

  tick = () => {
    this.setState({ time: new Date() });
  };

  startClock = () => {
    // Evita multiples intervalos
    if (this.intervalId !== null) return;

    this.intervalId = setInterval(this.tick, 1000);
    this.setState({ running: true });
  };

  stopClock = () => {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.setState({ running: false });
  };

  // Limpiar al desmontar
  componentWillUnmount() {
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
          Estado: {running ? 'Corriendo' : 'Detenido'}
        </div>
      </div>
    );
  }
}

export default ClockClass;
