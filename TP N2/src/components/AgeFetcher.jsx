import React from 'react';

// Componente con fetch a la API de Agify
class AgeFetcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      searchedName: '',
      age: null,
      loading: false,
      error: null,
    };
  }

  handleInputChange = (e) => {
    this.setState({ name: e.target.value });
  };

  fetchAge = () => {
    const { name } = this.state;

    if (!name.trim()) return;

    // Limpiar resultado anterior
    this.setState({ loading: true, error: null, age: null, searchedName: '' });

    fetch(`https://api.agify.io/?name=${encodeURIComponent(name.trim())}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        this.setState({
          age: data.age,
          searchedName: data.name,
          loading: false,
        });
      })
      .catch((err) => {
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
            placeholder="Ingrese un nombre"
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

        {loading && <div className="loading-text">Cargando...</div>}

        {error && (
          <div className="error-text">
            Error: {error}
          </div>
        )}

        {age !== null && !loading && !error && (
          <div className="result-box">
            <div className="result-name">
              Nombre consultado: <strong>{searchedName}</strong>
            </div>
            <div className="result-age">Edad: {age}</div>
          </div>
        )}
      </div>
    );
  }
}

export default AgeFetcher;
