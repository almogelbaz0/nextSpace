import OrderEditableProps from './OrderEditableProps';
import RequestProps from './OrderProps';

interface OrderParams{
    nonEditProps : RequestProps[] ;
    editProps: OrderEditableProps[] ;
}

export default OrderParams;