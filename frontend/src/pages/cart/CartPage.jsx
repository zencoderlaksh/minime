import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../store/useCartStore.js";
import { formatCurrency } from "../../lib/utils/formatCurrency.js";

function CartPage() {
  const navigate = useNavigate();
  const items = useCartStore((s) => s.items);
  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.price * (i.quantity ?? 1), 0),
    [items],
  );

  const itemCount = useMemo(
    () => items.reduce((sum, i) => sum + (i.quantity ?? 1), 0),
    [items],
  );

  // In-memory store currently has only addItem + computed subtotal.
  // This page focuses on basic display + checkout navigation.
  const [status] = useState(null);

  return (
    <section className="section-space">
      <div className="container simple-page">
        <p className="eyebrow">Cart</p>
        <h1>Your bag</h1>

        {items.length === 0 ?
          <div style={{ marginTop: 16 }}>
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
            style={{
              marginTop: 18,
              display: "grid",
              gap: 20,
              gridTemplateColumns: "1fr 360px",
            }}
          >
            <div>
              <div style={{ display: "grid", gap: 12 }}>
                {items.map((item) => {
                  const qty = item.quantity ?? 1;
                  return (
                    <article
                      key={item.id}
                      className="cart-line"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: 16,
                        padding: "12px 0",
                        borderBottom: "1px solid #eee",
                      }}
                    >
                      <div>
                        <p style={{ margin: 0, fontWeight: 700 }}>
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
            </div>

            <aside
              style={{
                border: "1px solid #eee",
                padding: 16,
                borderRadius: 12,
                height: "fit-content",
              }}
            >
              <h2 style={{ marginBottom: 10 }}>Summary</h2>
              <div style={{ display: "grid", gap: 8 }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Subtotal ({itemCount} items)</span>
                  <strong>{formatCurrency(subtotal)}</strong>
                </div>
              </div>

              <button
                type="button"
                className="button button--primary"
                onClick={() => navigate("/checkout")}
                style={{ width: "100%", marginTop: 12 }}
              >
                Checkout
              </button>
            </aside>
          </div>
        }

        {status ?
          <p style={{ color: "red" }}>{status}</p>
        : null}
      </div>
    </section>
  );
}

export default CartPage;
