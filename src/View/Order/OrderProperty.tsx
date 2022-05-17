import { useEffect, useState } from 'react';

import OrderEditableProps from '../../Modal/Interfaces/Order/OrderEditableProps';
import RequestProps from '../../Modal/Interfaces/Order/OrderProps';

interface OrderCardProps {
    requestProps : OrderEditableProps | RequestProps
}


interface getProertyJSX {
    (property : RequestProps) : JSX.Element;
    (property : OrderEditableProps) : JSX.Element;
}

const OrderProperty = ({requestProps } : OrderCardProps) =>{
    const [order,setOrder] = useState<OrderEditableProps | RequestProps>(requestProps);


    useEffect(()=>{
        const toDoonChangeListner = (ser : OrderEditableProps | RequestProps) => {
            setOrder(ser);
        }
        const newOrder = order;
        setOrder(newOrder);
    },[])

    const isAnOrderEditableProps = (obj: any): obj is OrderEditableProps => {
        return 'getOptions' in obj && 'onEditValue' in obj;
      }

    
    return (
        <div>
                <div>
                    <h1>{requestProps.name}</h1>
                    <h2>{requestProps.value}</h2>
                    {
                        isAnOrderEditableProps(requestProps) ? 
                        <div>
                            <h4>{requestProps.getOptions()} </h4>
                            <h4>{requestProps.helperText} </h4>
                            <input onChange={(event)=> requestProps.onEditValue(event.target.value) }></input>
                            <button onClick={() => {
                                requestProps.onEditValue("almog111");
                                }  }></button>
                        </div> 
                        :
                         <></>
                    }
                    
                </div>
        </div>
    );
}

export default OrderProperty;