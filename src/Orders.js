import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import Order from './Order';
import './Orders.css';
import { useStateValue } from './StateProvider';

const Orders = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc') //Get the order by when it was created in descending order
        //A real time snapshot of the database
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            })) //Set the order with the id and data information in the state
          )
        );
    } else {
        setOrders([])
    }
  }, [user]);

  return (
    <div className='orders'>
      <h1>You Orders</h1>

      <div className='orders_order'>
          {orders?.map(order => (
              <Order order={order} />
          ))}
      </div>
    </div>
  );
};

export default Orders;
