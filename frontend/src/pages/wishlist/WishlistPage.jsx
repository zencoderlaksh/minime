import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useWishlistStore } from "../../store/useWishlistStore.js";
import { formatCurrency } from "../../lib/utils/formatCurrency.js";

function WishlistPage() {
  const navigate = useNavigate();
  const wishlistItems = useWishlistStore((s) => s.items);
  const toggleItem = useWishlistStore((s) => s.toggleItem);

  const itemCount = useMemo(() => wishlistItems.length, [wishlistItems]);

  return (
    <section className="section-space">
      <div className="container simple-page">
        <p className="eyebrow">Wishlist</p>
        <h1>Saved for later</h1>

        {wishlistItems.length === 0 ?
          <div className="wishlist-empty">
            <p>You haven’t saved anything yet.</p>
            <button
              type="button"
              className="button button--primary"
              onClick={() => navigate("/collections")}
            >
              Browse collection
            </button>
          </div>
        : <>
            <p style={{ color: "#666" }}>{itemCount} saved item(s)</p>

            <div
              style={{
                display: "grid",
                gap: 16,
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              }}
            >
              {wishlistItems.map((item) => (
                <article
                  key={item.id}
                  className="wishlist-card"
                  style={{
                    border: "1px solid #eee",
                    borderRadius: 12,
                    padding: 14,
                  }}
                >
                  <div
                    style={{
                      height: 160,
                      borderRadius: 10,
                      overflow: "hidden",
                      marginBottom: 10,
                      background: "#fafafa",
                    }}
                  >
                    {item.image ?
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    : null}
                  </div>

                  <p style={{ margin: "0 0 6px", fontWeight: 700 }}>
                    {item.name}
                  </p>
                  {item.size ?
                    <p style={{ margin: 0, color: "#666" }}>
                      Size: {item.size}
                    </p>
                  : null}
                  {typeof item.price === "number" ?
                    <p style={{ margin: "8px 0 14px", fontWeight: 700 }}>
                      {formatCurrency(item.price)}
                    </p>
                  : null}

                  <button
                    type="button"
                    className="button button--secondary"
                    onClick={() => toggleItem(item)}
                    style={{ width: "100%" }}
                  >
                    Remove
                  </button>
                </article>
              ))}
            </div>
          </>
        }
      </div>
    </section>
  );
}

export default WishlistPage;
