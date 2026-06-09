import React from 'react';

/**
 * AgeFetcher — Llamada AJAX con fetch a la API Agify
 *
 * Conceptos clave:
 *  - fetch: API nativa del navegador para hacer requests HTTP
 *  - Estados de UI: loading (cargando), error (fallo), datos (éxito)
 *  - Manejo de promesas con .then() y .catch()
 *  - Actualización de state con resultados de la API
 */
class AgeFetcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',          // valor actual del input
      searchedName: '',  // nombre que efectivamente se consultó
      age: null,         // edad devuelta por la API
      loading: false,    // true mientras esperamos la respuesta
      error: null,       // mensaje de error si algo falla
    };
  }

  // Sincroniza el input con el state
  handleInputChange = (e) => {
    this.setState({ name: e.target.value });
  };

  fetchAge = () => {
    const { name } = this.state;

    // Validación: no hacer el request si el input está vacío
    if (!name.trim()) return;

    // Antes de llamar: limpiamos resultados anteriores y activamos loading
    this.setState({ loading: true, error: null, age: null, searchedName: '' });

    fetch(`https://api.agify.io/?name=${encodeURIComponent(name.trim())}`)
      .then((response) => {
        // Si el servidor responde con error HTTP, lo convertimos en excepción
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Éxito: guardamos el nombre consultado y la edad propuesta
        this.setState({
          age: data.age,
          searchedName: data.name,
          loading: false,
        });
      })
      .catch((err) => {
        // Fallo: guardamos el mensaje de error
        this.setState({
          error: err.message,
          loading: false,
        });
      });
  };

  render() {
    const { name, searchedName, age, loading, error } = this.state;

    return (
      <div className="card">
        <h2 className="card-title">{this.props.title || 'Consultar edad'}</h2>

        <div className="form-row">
          <input
            className="input"
            type="text"
            placeholder="Escribí tu nombre..."
            value={name}
            onChange={this.handleInputChange}
          />
          <button
            className="btn btn-accent"
            onClick={this.fetchAge}
            disabled={loading}
          >
            {loading ? 'Consultando...' : 'Consultar edad'}
          </button>
        </div>

        {/* Estado de carga */}
        {loading && <div className="loading-text">Cargando...</div>}

        {/* Estado de error */}
        {error && (
          <div className="error-text">
            Error: {error}
          </div>
        )}

        {/* Resultado exitoso */}
        {age !== null && !loading && !error && (
          <div className="result-box">
            <div className="result-name">
              Nombre consultado: <strong>{searchedName}</strong>
            </div>
            <div className="result-age">Edad estimada: {age} años</div>
          </div>
        )}
      </div>
    );
  }
}

export default AgeFetcher;
