import { useEffect, useState } from 'react';

import EpgOrder from '../../Modal/Classes/Order/EpgOrder';
import ServerOrder from '../../Modal/Classes/Order/ServerOrder';
import Orderable from '../../Modal/Interfaces/Order/Orderable';
import OrderCard from './OrderCard';


const OrderPage = () =>{
    const [order,setOrder] = useState<Orderable[]>();

    useEffect(()=>{
        const epg2 = new EpgOrder("2","321");
        const epg = new EpgOrder("2","321");
        const serv1 = new ServerOrder("1","212",epg);
        const serv = new ServerOrder("1","212",epg2);
        setOrder([serv,epg,serv1,epg2]);
    },[])

    

    return (
        <div>
              {order?.map((value)=>{
                  return <OrderCard orderableObj={value}></OrderCard>
              })}
        </div>
    );
}

export default OrderPage;