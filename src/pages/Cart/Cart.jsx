import { useCart } from "../../context/CartContext";
import { Link } from "react-router";
import cartImage from "../../assets/cart.jpg";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart, totalPrice } =
    useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md text-center bg-white p-10 rounded-2xl shadow-xl">
          <div className="mb-8">
            <img
              src={cartImage}
              alt="Empty Cart"
              className="w-72 mx-auto opacity-90"
            />
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Your cart is empty
          </h2>
          <p className="text-gray-600 mb-8">
            Looks like you haven’t added anything yet.
          </p>

          <Link
            to="/shop"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition shadow-md"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-700 mt-4 md:mt-10 mb-10 rubik-font">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-40 h-60 md:h-40">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-l-2xl"
                    />
                  </div>

                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 rubik-font">
                        {item.name}
                      </h3>
                      <p className="text-green-600 font-medium mt-1">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 mt-6">
                      <button
                        onClick={() => decreaseQty(item._id)}
                        disabled={item.qty === 1}
                        className="w-10 h-10 rounded-full border border-gray-300 hover:border-green-600 disabled:opacity-40 cursor-pointer"
                      >
                        −
                      </button>

                      <span className="text-lg font-medium w-10 text-center">
                        {item.qty}
                      </span>

                      <button
                        onClick={() => increaseQty(item._id)}
                        className="w-10 h-10 rounded-full border border-gray-300 hover:border-green-600 cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col justify-between items-end">
                    <p className="text-2xl font-bold text-gray-900">
                      ${(item.price * item.qty).toFixed(2)}
                    </p>

                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="text-red-500 hover:text-red-700 font-medium mt-6 cursor-pointer rubik-font"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="bg-white rounded-2xl border border-gray-200 p-8 sticky top-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>

                <div className="flex justify-between text-gray-700">
                  <span>Tax</span>
                  <span>${(totalPrice * 0.1).toFixed(2)}</span>
                </div>

                <div className="border-t border-gray-300 pt-4 flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>${(totalPrice * 1.1).toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full mt-8 bg-green-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-green-700 transition shadow-md">
                Proceed to Checkout
              </button>

              <Link
                to="/shop"
                className="block text-center mt-5 text-green-600 hover:text-green-800 font-medium"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
