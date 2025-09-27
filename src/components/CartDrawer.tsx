import { useEffect, useRef } from "react";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import ShineButton from "./ShineButton";

export type CartItem = {
  id: string;
  name: string;
  price: number; // price per unit
  qty: number;
  image?: string;
};

export interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemoveItem: (id: string) => void;
}

const formatINR = (amount: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(amount);

const CartDrawer = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}: CartDrawerProps) => {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Focus the close button when opening; add Esc to close
  useEffect(() => {
    if (isOpen) {
      closeBtnRef.current?.focus();
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  const total = items.reduce((sum: number, item: CartItem) => sum + item.price * item.qty, 0);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[1000] transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        ref={panelRef}
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[1001] transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-6 h-6 text-green-600" aria-hidden="true" />
              <h2 id="cart-title" className="text-xl font-bold text-gray-900">
                Your Cart
              </h2>
            </div>
            <button
              ref={closeBtnRef}
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" aria-hidden="true" />
                <p className="text-gray-600 text-lg">Your cart is empty</p>
                <p className="text-gray-400 text-sm">Add some delicious salads to get started!</p>
              </div>
            ) : (
              <ul className="space-y-4">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-center gap-4">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-lg bg-gray-200 grid place-items-center text-gray-500">
                          <ShoppingBag className="w-6 h-6" aria-hidden="true" />
                        </div>
                      )}

                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 truncate">{item.name}</h3>
                        <p className="text-green-700 font-bold">{formatINR(item.price)}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.qty - 1))}
                          className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-40 flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                          aria-label={`Decrease ${item.name} quantity`}
                          disabled={item.qty <= 1}
                        >
                          <Minus className="w-4 h-4" aria-hidden="true" />
                        </button>

                        <span className="font-semibold text-lg w-8 text-center tabular-nums">
                          {item.qty}
                        </span>

                        <button
                          onClick={() => onUpdateQuantity(item.id, item.qty + 1)}
                          className="w-8 h-8 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                          aria-label={`Increase ${item.name} quantity`}
                        >
                          <Plus className="w-4 h-4" aria-hidden="true" />
                        </button>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="font-semibold text-gray-900">
                          {formatINR(item.price * item.qty)}
                        </span>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-red-600 hover:text-red-700 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 p-6 space-y-4">
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total</span>
                <span className="text-green-700">{formatINR(total)}</span>
              </div>

              <ShineButton variant="primary" className="w-full py-3 text-lg">
                Proceed to Checkout
              </ShineButton>

              <ShineButton variant="secondary" className="w-full py-2" onClick={onClose}>
                Continue Shopping
              </ShineButton>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
