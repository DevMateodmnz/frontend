function TransactionFilter({ filter, onFilterChange }) {
  return (
    <section className="mb-3">
      <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-2">
        <div>
          <h2 className="h4 mb-1">Lista de movimientos</h2>
          <p className="text-muted mb-0">Filtrá la información por tipo de movimiento.</p>
        </div>

        <select
          className="form-select w-auto"
          value={filter}
          onChange={(event) => onFilterChange(event.target.value)}
        >
          <option value="all">Todos</option>
          <option value="income">Ingresos</option>
          <option value="expense">Gastos</option>
        </select>
      </div>
    </section>
  );
}

export default TransactionFilter;
