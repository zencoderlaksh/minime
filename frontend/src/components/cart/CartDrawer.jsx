import { Link } from 'react-router-dom'
import { routes } from '../../lib/constants/routes.js'
import { formatCurrency } from '../../lib/utils/formatCurrency.js'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll.js'
import { useCartStore } from '../../store/useCartStore.js'
import { useUiStore } from '../../store/useUiStore.js'

function CartDrawer() {
  const isCartOpen = useUiStore((state) => state.isCartOpen)
  const closeCart = useUiStore((state) => state.closeCart)
  const items = useCartStore((state) => state.items)
  const subtotal = useCartStore((state) => state.subtotal)

  useLockBodyScroll(isCartOpen)

  return (
    <aside className={isCartOpen ? 'cart-drawer is-open' : 'cart-drawer'}>
      <div className="cart-drawer__backdrop" onClick={closeCart} aria-hidden="true" />
      <div className="cart-drawer__panel" role="dialog" aria-modal="true" aria-label="Shopping bag">
        <div className="cart-drawer__header">
          <h2>Your Bag</h2>
          <button type="button" onClick={closeCart}>
            Close
          </button>
        </div>

        <div className="cart-drawer__body">
          {items.length === 0 ? (
            <p>Your bag is waiting for its first MiniMe piece.</p>
          ) : (
            items.map((item) => (
              <article key={item.id} className="cart-line">
                <div>
                  <p>{item.name}</p>
                  <span>{item.size}</span>
                </div>
                <strong>{formatCurrency(item.price)}</strong>
              </article>
            ))
          )}
        </div>

        <div className="cart-drawer__footer">
          <div className="cart-drawer__total">
            <span>Subtotal</span>
            <strong>{formatCurrency(subtotal)}</strong>
          </div>
          <Link className="button button--primary" to={routes.checkout} onClick={closeCart}>
            Checkout
          </Link>
        </div>
      </div>
    </aside>
  )
}

export default CartDrawer
