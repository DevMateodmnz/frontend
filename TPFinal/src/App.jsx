import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Summary from './components/Summary.jsx';
import TransactionForm from './components/TransactionForm.jsx';
import TransactionFilter from './components/TransactionFilter.jsx';
import TransactionList from './components/TransactionList.jsx';

const API_URL = 'http://localhost:3001/transactions';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [message, setMessage] = useState({ type: '', text: '' });
  const [filter, setFilter] = useState('all');
  const [editingTransaction, setEditingTransaction] = useState(null);

  const filteredTransactions = transactions.filter((transaction) => {
    if (filter === 'income') {
      return transaction.type === 'income';
    }

    if (filter === 'expense') {
      return transaction.type === 'expense';
    }

    return true;
  });

  const loadTransactions = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error('No se pudieron obtener los movimientos.');
      }

      const data = await response.json();
      setTransactions(data);
    } catch (err) {
      setError('No se pudo conectar con la API. Verificá que JSON Server esté ejecutándose.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTransactions();
  }, []);

  const clearMessage = () => {
    setMessage({ type: '', text: '' });
  };

  const handleCreateTransaction = async (formData) => {
    clearMessage();

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('No se pudo crear el movimiento.');
      }

      const newTransaction = await response.json();
      setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
      setMessage({ type: 'success', text: 'Movimiento creado correctamente.' });
    } catch (err) {
      setMessage({ type: 'danger', text: 'Ocurrió un error al crear el movimiento.' });
      throw err;
    }
  };

  const handleStartEdit = (transaction) => {
    clearMessage();
    setEditingTransaction(transaction);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingTransaction(null);
    clearMessage();
  };

  const handleUpdateTransaction = async (formData) => {
    if (!editingTransaction) {
      return;
    }

    clearMessage();

    try {
      const response = await fetch(`${API_URL}/${editingTransaction.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('No se pudo editar el movimiento.');
      }

      const updatedTransaction = await response.json();

      setTransactions((prevTransactions) =>
        prevTransactions.map((transaction) =>
          transaction.id === updatedTransaction.id ? updatedTransaction : transaction
        )
      );
      setEditingTransaction(null);
      setMessage({ type: 'success', text: 'Movimiento actualizado correctamente.' });
    } catch (err) {
      setMessage({ type: 'danger', text: 'Ocurrió un error al editar el movimiento.' });
      throw err;
    }
  };

  const handleDeleteTransaction = async (id) => {
    const confirmed = window.confirm('¿Seguro que querés eliminar este movimiento?');

    if (!confirmed) {
      return;
    }

    clearMessage();

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('No se pudo eliminar el movimiento.');
      }

      setTransactions((prevTransactions) =>
        prevTransactions.filter((transaction) => transaction.id !== id)
      );

      if (editingTransaction && editingTransaction.id === id) {
        setEditingTransaction(null);
      }

      setMessage({ type: 'success', text: 'Movimiento eliminado correctamente.' });
    } catch (err) {
      setMessage({ type: 'danger', text: 'Ocurrió un error al eliminar el movimiento.' });
    }
  };

  return (
    <div>
      <Header />

      <main className="container py-4 app-container">
        <Summary transactions={transactions} />

        <div className="row g-4">
          <div className="col-12 col-lg-5">
            <TransactionForm
              editingTransaction={editingTransaction}
              onCreateTransaction={handleCreateTransaction}
              onUpdateTransaction={handleUpdateTransaction}
              onCancelEdit={handleCancelEdit}
              message={message}
            />
          </div>

          <div className="col-12 col-lg-7">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <TransactionFilter filter={filter} onFilterChange={setFilter} />

                {error ? (
                  <div className="alert alert-danger mb-0">{error}</div>
                ) : (
                  <TransactionList
                    transactions={filteredTransactions}
                    loading={loading}
                    onEditTransaction={handleStartEdit}
                    onDeleteTransaction={handleDeleteTransaction}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
