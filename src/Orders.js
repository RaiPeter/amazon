import React, { useEffect, useState } from 'react'
import { db } from './firebase';
import Order from './Order';
import './Orders.css';
import { useStateValue } from './StateProvider';

function Orders() {
    const [{basket, user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        if(user){
        db
          .collection('users')
          .doc(user?.uid)
          .collection('orders')
          .orderBy('created', 'desc')
          .onSnapshot(snapshot =>{
              snapOrders(snapshot.docs.map(doc=>({
                  id: doc.id,
                  data: doc.data()
              })))
          })
        }else{
            setOrders([])
        }
    }, [])
    return (
        <div className="orders">
            {orders?.map(order =>(
                <Order order={order}/> 
            ))}
        </div>
    )
}

export default Orders
