const currencyFormatter = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
});

function Summary({ transactions }) {
  const totalIncome = transactions
    .filter((transaction) => transaction.type === 'income')
    .reduce((accumulator, transaction) => accumulator + Number(transaction.amount), 0);

  const totalExpense = transactions
    .filter((transaction) => transaction.type === 'expense')
    .reduce((accumulator, transaction) => accumulator + Number(transaction.amount), 0);

  const balance = totalIncome - totalExpense;

  return (
    <section className="mb-4">
      <div className="row g-3">
        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm summary-card h-100">
            <div className="card-body">
              <p className="text-muted mb-2">Total de ingresos</p>
              <h2 className="h4 text-success mb-0">{currencyFormatter.format(totalIncome)}</h2>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm summary-card h-100">
            <div className="card-body">
              <p className="text-muted mb-2">Total de gastos</p>
              <h2 className="h4 text-danger mb-0">{currencyFormatter.format(totalExpense)}</h2>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm summary-card h-100">
            <div className="card-body">
              <p className="text-muted mb-2">Balance</p>
              <h2 className={`h4 mb-0 ${balance >= 0 ? 'text-primary' : 'text-danger'}`}>
                {currencyFormatter.format(balance)}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Summary;
