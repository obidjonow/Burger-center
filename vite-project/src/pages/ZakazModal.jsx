function ZakazModal({ setIsZakazOpen }) {
  return (
    <div className="zakaz-modal">
      <div className="zakaz-modal-content">

        <button
          className="zakaz-modal-close"
          onClick={() => setIsZakazOpen(false)}
        >
          ×
        </button>

        <div className="zakaz-icon">
          ✓
        </div>

        <h1>Заказ отправлен!</h1>

        <p>
          Спасибо за заказ! Мы скоро свяжемся с вами.
        </p>

        <button
          className="zakaz-button"
          onClick={() => setIsZakazOpen(false)}
        >
          Хорошо
        </button>

      </div>
    </div>
  );
}

export default ZakazModal;