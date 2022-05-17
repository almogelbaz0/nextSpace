import { useEffect, useState } from 'react';

import OrderFactory from '../../Modal/Factory/OrderFactory';
import Orderable from '../../Modal/Interfaces/Order/Orderable';
import OrderParams from '../../Modal/Interfaces/Order/OrderParams';
import OrderProperty from './OrderProperty';

interface OrderCardProps {
    orderableObj : Orderable
}
const OrderCard = ({orderableObj } : OrderCardProps) =>{
    const [order,setOrder] = useState<Orderable>(orderableObj);
    const [params,setParams] = useState<OrderParams>();

    const ordersFacroty = new OrderFactory();

    useEffect(()=>{
        const toDoonChangeListner = (ser : Orderable) => {
            setOrder(ser);
            setParams(ordersFacroty.getParams(ser));
        }
        const newOrder = orderableObj;
        newOrder.setOnChangeListner(toDoonChangeListner);
        setOrder(newOrder);
        
    },[])

    

    useEffect(()=>{
        setParams(ordersFacroty.getParams(order));
        console.log(order);
    },[order])


    return (
        <div>{params?.editProps.map((prop)=>{
            return <OrderProperty requestProps={prop}></OrderProperty>
        })}
        {params?.nonEditProps.map((prop)=>{
            return <OrderProperty requestProps={prop}></OrderProperty>
        })}
                
        </div>
    );
}

export default OrderCard;