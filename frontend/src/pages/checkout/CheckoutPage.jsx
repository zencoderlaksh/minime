import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../store/useCartStore.js";
import { formatCurrency } from "../../lib/utils/formatCurrency.js";

// NOTE: This project currently uses an in-memory Zustand cart.
// Checkout UI is implemented end-to-end, but the final "place order"
// integration will depend on your backend payload.
function CheckoutPage() {
  const navigate = useNavigate();
  const cartItems = useCartStore((s) => s.items);
  const subtotal = useCartStore((s) => s.subtotal);

  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const itemCount = useMemo(
    () => cartItems.reduce((sum, i) => sum + (i.quantity ?? 1), 0),
    [cartItems],
  );

  const shipping = 0;
  const tax = 0;
  const total = subtotal + shipping + tax;

  const canPlaceOrder = cartItems.length > 0 && !isPlacingOrder;

  const handlePlaceOrder = async () => {
    if (!canPlaceOrder) return;

    setIsPlacingOrder(true);
    setStatus({ type: "loading", message: "Placing your order…" });

    try {
      // If you have backend integration, hook it up here.
      // For now, we provide a complete UX path.
      await new Promise((r) => setTimeout(r, 700));

      setStatus({
        type: "success",
        message: "Order placed (demo). Check your account orders for details.",
      });

      setTimeout(() => {
        navigate("/account/orders");
      }, 900);
    } catch (e) {
      setStatus({
        type: "error",
        message: "Could not place order. Please try again.",
      });
    } finally {
      setIsPlacingOrder(false);
    }
  };

  return (
    <section className="section-space">
      <div className="container simple-page">
        <p className="eyebrow">Checkout</p>
        <h1>Checkout</h1>

        {cartItems.length === 0 ?
          <div className="checkout-empty">
            <p>Your bag is empty.</p>
            <button
              type="button"
              className="button button--primary"
              onClick={() => navigate("/collections")}
            >
              Browse collection
            </button>
          </div>
        : <div
            className="checkout-layout"
            style={{
              display: "grid",
              gap: 24,
              gridTemplateColumns: "1.3fr 0.7fr",
            }}
          >
            <div>
              <h2 style={{ marginBottom: 12 }}>Your items</h2>
              <div className="cart-lines">
                {cartItems.map((item) => {
                  const qty = item.quantity ?? 1;
                  return (
                    <article
                      key={item.id}
                      className="cart-line"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 16,
                        padding: "12px 0",
                        borderBottom: "1px solid #eee",
                      }}
                    >
                      <div>
                        <p style={{ margin: 0, fontWeight: 600 }}>
                          {item.name}
                        </p>
                        <span style={{ color: "#666" }}>{item.size}</span>
                        <div style={{ color: "#666" }}>Qty: {qty}</div>
                      </div>
                      <strong>{formatCurrency(item.price * qty)}</strong>
                    </article>
                  );
                })}
              </div>

              <div style={{ marginTop: 20 }}>
                <h2 style={{ marginBottom: 12 }}>Delivery</h2>
                <p style={{ margin: 0, color: "#666" }}>
                  Standard delivery (demo). Taxes/shipping are not calculated in
                  this UI yet.
                </p>
              </div>
            </div>

            <aside
              style={{
                border: "1px solid #eee",
                padding: 16,
                borderRadius: 12,
                height: "fit-content",
              }}
            >
              <h2 style={{ marginBottom: 12 }}>Summary</h2>

              <div style={{ display: "grid", gap: 8 }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Subtotal ({itemCount} items)</span>
                  <strong>{formatCurrency(subtotal)}</strong>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Shipping</span>
                  <strong>{formatCurrency(shipping)}</strong>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Tax</span>
                  <strong>{formatCurrency(tax)}</strong>
                </div>
                <div
                  style={{ height: 1, background: "#eee", margin: "8px 0" }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 16,
                  }}
                >
                  <span>Total</span>
                  <strong>{formatCurrency(total)}</strong>
                </div>
              </div>

              {status.type !== "idle" && (
                <p
                  style={{
                    marginTop: 12,
                    color:
                      status.type === "error" ? "#b00020"
                      : status.type === "success" ? "green"
                      : "#333",
                  }}
                  aria-live="polite"
                >
                  {status.message}
                </p>
              )}

              <button
                type="button"
                className={`button button--primary ${!canPlaceOrder ? "is-disabled" : ""}`}
                onClick={handlePlaceOrder}
                disabled={!canPlaceOrder}
                style={{ width: "100%", marginTop: 12 }}
              >
                {isPlacingOrder ? "Placing order…" : "Place order"}
              </button>

              <button
                type="button"
                className="button button--secondary"
                onClick={() => navigate("/cart")}
                style={{ width: "100%", marginTop: 10 }}
              >
                Back to cart
              </button>
            </aside>
          </div>
        }
      </div>
    </section>
  );
}

export default CheckoutPage;
