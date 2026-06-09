import React from 'react';

/**
 * CounterClass — Contador con state y eventos
 *
 * Conceptos clave:
 *  - this.state: objeto que contiene el valor del contador
 *  - this.setState(): actualiza el state y dispara un re-render
 *  - Eventos onClick: las funciones increment/decrement se pasan como handlers
 */
class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    // Inicializamos el state con el contador en 0
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="card">
        <h2 className="card-title">{this.props.title || 'Contador'}</h2>

        <div className="counter-display">{this.state.count}</div>

        <div className="btn-group">
          <button className="btn btn-primary" onClick={this.increment}>
            Incrementar
          </button>
          <button className="btn btn-danger" onClick={this.decrement}>
            Decrementar
          </button>
        </div>
      </div>
    );
  }
}

export default CounterClass;
