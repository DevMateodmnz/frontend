import TransactionItem from './TransactionItem.jsx';

function TransactionList({ transactions, loading, onEditTransaction, onDeleteTransaction }) {
  if (loading) {
    return <div className="alert alert-info mb-0">Cargando movimientos…</div>;
  }

  if (transactions.length === 0) {
    return <div className="alert alert-secondary mb-0">No hay movimientos registrados.</div>;
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover align-middle mb-0">
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Monto</th>
            <th>Tipo</th>
            <th>Categoría</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              onEditTransaction={onEditTransaction}
              onDeleteTransaction={onDeleteTransaction}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
