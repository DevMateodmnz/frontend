import { useEffect, useState } from 'react';

const initialFormData = {
  description: '',
  amount: '',
  type: 'expense',
  category: '',
  date: '',
};

const categoryOptions = [
  'Sueldo',
  'Comida',
  'Transporte',
  'Servicios',
  'Entretenimiento',
  'Salud',
  'Educación',
  'Otros',
];

function TransactionForm({
  editingTransaction,
  onCreateTransaction,
  onUpdateTransaction,
  onCancelEdit,
  message,
}) {
  const [formData, setFormData] = useState(initialFormData);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    if (editingTransaction) {
      setFormData({
        description: editingTransaction.description,
        amount: String(editingTransaction.amount),
        type: editingTransaction.type,
        category: editingTransaction.category,
        date: editingTransaction.date,
      });
      setFormError('');
    } else {
      setFormData(initialFormData);
      setFormError('');
    }
  }, [editingTransaction]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (
      !formData.description.trim() ||
      !formData.amount ||
      !formData.type ||
      !formData.category.trim() ||
      !formData.date
    ) {
      return 'Todos los campos son obligatorios.';
    }

    if (Number(formData.amount) <= 0) {
      return 'El monto debe ser mayor a cero.';
    }

    return '';
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setFormError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationMessage = validateForm();

    if (validationMessage) {
      setFormError(validationMessage);
      return;
    }

    setFormError('');

    const transactionData = {
      description: formData.description.trim(),
      amount: Number(formData.amount),
      type: formData.type,
      category: formData.category.trim(),
      date: formData.date,
    };

    try {
      if (editingTransaction) {
        await onUpdateTransaction(transactionData);
      } else {
        await onCreateTransaction(transactionData);
      }

      resetForm();
    } catch (err) {
      // El mensaje de error visible ya se maneja en App.
    }
  };

  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body">
        <h2 className="h4 mb-3">
          {editingTransaction ? 'Editar movimiento' : 'Agregar movimiento'}
        </h2>

        <p className="text-muted small">
          {editingTransaction
            ? 'Estás modificando un movimiento existente.'
            : 'Completá el formulario para registrar un ingreso o gasto.'}
        </p>

        {message.text ? (
          <div className={`alert alert-${message.type}`} role="alert">
            {message.text}
          </div>
        ) : null}

        {formError ? (
          <div className="alert alert-warning" role="alert">
            {formError}
          </div>
        ) : null}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Descripción
            </label>
            <input
              id="description"
              name="description"
              type="text"
              className="form-control"
              value={formData.description}
              onChange={handleChange}
              placeholder="Ej: Compra del supermercado"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              Monto
            </label>
            <input
              id="amount"
              name="amount"
              type="number"
              className="form-control"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Ej: 45000"
              min="1"
              step="0.01"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="type" className="form-label">
              Tipo
            </label>
            <select
              id="type"
              name="type"
              className="form-select"
              value={formData.type}
              onChange={handleChange}
            >
              <option value="income">Ingreso</option>
              <option value="expense">Gasto</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Categoría
            </label>
            <input
              id="category"
              name="category"
              type="text"
              className="form-control"
              list="category-options"
              value={formData.category}
              onChange={handleChange}
              placeholder="Ej: Comida"
            />
            <datalist id="category-options">
              {categoryOptions.map((category) => (
                <option key={category} value={category} />
              ))}
            </datalist>
          </div>

          <div className="mb-4">
            <label htmlFor="date" className="form-label">
              Fecha
            </label>
            <input
              id="date"
              name="date"
              type="date"
              className="form-control"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex flex-wrap gap-2">
            <button type="submit" className="btn btn-success">
              {editingTransaction ? 'Guardar cambios' : 'Crear movimiento'}
            </button>

            {editingTransaction ? (
              <button type="button" className="btn btn-outline-secondary" onClick={onCancelEdit}>
                Cancelar edición
              </button>
            ) : (
              <button type="button" className="btn btn-outline-secondary" onClick={resetForm}>
                Limpiar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default TransactionForm;
