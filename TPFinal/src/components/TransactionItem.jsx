const currencyFormatter = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
});

function TransactionItem({ transaction, onEditTransaction, onDeleteTransaction }) {
  return (
    <tr>
      <td>{transaction.description}</td>
      <td>{currencyFormatter.format(Number(transaction.amount))}</td>
      <td>
        <span className={`badge ${transaction.type === 'income' ? 'text-bg-success' : 'text-bg-danger'}`}>
          {transaction.type === 'income' ? 'Ingreso' : 'Gasto'}
        </span>
      </td>
      <td>{transaction.category}</td>
      <td>{transaction.date}</td>
      <td>
        <div className="d-flex gap-2">
          <button
            type="button"
            className="btn btn-sm btn-outline-primary"
            onClick={() => onEditTransaction(transaction)}
          >
            Editar
          </button>
          <button
            type="button"
            className="btn btn-sm btn-outline-danger"
            onClick={() => onDeleteTransaction(transaction.id)}
          >
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  );
}

export default TransactionItem;
