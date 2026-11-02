import React from 'react';
import { Minus, Plus, X, Trash2 } from "lucide-react";

export default function CartDrawer({ open, onClose, cart, onChangeQty, onRemove }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      {open && (
        <button
          className="drawer-scrim"
          onClick={onClose}
          aria-label="Close cart"
        />
      )}

      <aside
        className={`cart-drawer ${open ? "cart-drawer-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="cart-head">
          <div>
            <span className="eyebrow">YOUR FESTIVE PICKS</span>
            <h2>
              Your bag <span>({cart.reduce((s, i) => s + i.qty, 0)})</span>
            </h2>
          </div>
          <button
            className="icon-button"
            onClick={onClose}
            aria-label="Close cart"
          >
            <X />
          </button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <span>✺</span>
              <h3>Your bag is waiting</h3>
              <p>Add a little sweetness to your celebration.</p>
              <button className="button button-dark" onClick={onClose}>
                Explore sweets
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>
                    ₹{item.price} · {item.unit}
                  </p>

                  <div className="qty-control">
                    <button
                      onClick={() => onChangeQty(item.id, -1)}
                      aria-label="Decrease quantity"
                    >
                      <Minus size={13} />
                    </button>
                    <span>{item.qty}</span>
                    <button
                      onClick={() => onChangeQty(item.id, 1)}
                      aria-label="Increase quantity"
                    >
                      <Plus size={13} />
                    </button>
                  </div>
                </div>

                <div className="cart-item-side">
                  <strong>₹{item.price * item.qty}</strong>
                  <button
                    onClick={() => onRemove(item.id)}
                    aria-label="Remove item"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-summary">
            <div>
              <span>Subtotal</span>
              <strong>₹{total}</strong>
            </div>
            <p>Delivery charges are confirmed when ordering.</p>
            <a
              className="button button-gold full-button"
              href="#visit"
              onClick={onClose}
            >
              Enquire to order <span>↗</span>
            </a>
          </div>
        )}
      </aside>
    </>
  );
}