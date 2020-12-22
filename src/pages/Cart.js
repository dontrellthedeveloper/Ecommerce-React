import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductCardInCheckout from "../components/cards/ProductCardInCheckout";

const Cart = () => {
    const { cart, user } = useSelector((state) => ({ ...state }));
    const dispatch = useDispatch();

    const getTotal = () => {
        return cart.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price;
        }, 0);
    };

    const saveOrderToDb = () => {
        //
    };

    const showCartItems = () => (
        <table className="table table-bordered">
            <thead className="thead-light">
            <tr>
                <th scope="col">Image</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Brand</th>
                <th scope="col">Color</th>
                <th scope="col">Count</th>
                <th scope="col">Shipping</th>
                <th scope="col">Remove</th>
            </tr>
            </thead>

            {cart.map((p) => (
                <ProductCardInCheckout key={p._id} p={p} />
            ))}
        </table>
    );

    return (
        <div className="container-fluid pt-2">
            <div className="row">
                <div className="col-md-8">
                    <h4>Cart / {cart.length} Product</h4>

                    {!cart.length ? (
                        <p>
                            No products in cart. <Link to="/shop">Continue Shopping.</Link>
                        </p>
                    ) : (
                        showCartItems()
                    )}
                </div>
                <div className="col-md-4">
                    <h4>Order Summary</h4>
                    <hr />
                    <p>Products</p>
                    {cart.map((c, i) => (
                        <div key={i}>
                            <p>
                                {c.title} x {c.count} = ${c.price * c.count}
                            </p>
                        </div>
                    ))}
                    <hr />
                    Total: <b>${getTotal()}</b>
                    <hr />
                    {user ? (
                        <button
                            onClick={saveOrderToDb}
                            className="btn btn-sm btn-primary mt-2"
                            disabled={!cart.length}
                        >
                            Proceed to Checkout
                        </button>
                    ) : (
                        <button className="btn btn-sm btn-primary mt-2">
                            <Link
                                to={{
                                    pathname: "/login",
                                    state: { from: "cart" },
                                }}
                            >
                                Login to Checkout
                            </Link>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
