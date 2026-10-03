function SideBarModal({
  isOrderOpen,
  setIsOrderOpen,
  onOrderSuccess,
  setIsZakazOpen,
}) {
  if (!isOrderOpen) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Buyurtma muvaffaqiyatli berildi
    onOrderSuccess();

    // Buyurtma formasini yopamiz
    setIsOrderOpen(false);
  };

  return (
    <div className="order-modal">

      <div className="order-modal-content">

        {/* Yopish */}
        <button
          type="button"
          className="order-close"
          onClick={() => setIsOrderOpen(false)}
        >
          ×
        </button>

        <h2>
          Оформление заказа
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Ваше имя"
            required
          />

          <input
            type="tel"
            placeholder="Номер телефона"
            required
          />

          <input
            type="text"
            placeholder="Адрес доставки"
            required
          />

          <button
            type="submit"
            className="order-submit"
          >
            Оформить заказ
          </button>

        </form>

      </div>

    </div>
  );
}

export default SideBarModal;