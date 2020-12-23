import React, { useState, useEffect } from "react";
import UserNav from "../../components/nav/UserNav";
import { getUserOrders } from "../../functions/user";
import { useSelector, useDispatch } from "react-redux";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";

const History = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useSelector((state) => ({ ...state }));

    useEffect(() => {
        loadUserOrders();
    }, []);

    const loadUserOrders = () =>
        getUserOrders(user.token).then((res) => {
            console.log(JSON.stringify(res.data, null, 4));
            setOrders(res.data);
        });

    const showOrderInTable = (order) => <p>each order and it's products</p>;

    const showEachOrders = () =>
        orders.map((order, i) => (
            <div key={i} className="m-5 p-3 card">
                <p>show payment info</p>
                {showOrderInTable(order)}
                <div className="row">
                    <div className="col">
                        <p>PDF download</p>
                    </div>
                </div>
            </div>
        ));

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <UserNav />
                </div>
                <div className="col text-center">
                    <h4>
                        {orders.length > 0 ? "User purchase orders" : "No purchase orders"}
                    </h4>
                    {showEachOrders()}
                </div>
            </div>
        </div>
    );
};

export default History;
