import RequestProps from './OrderProps';

interface OrderEditableProps extends RequestProps{
    onEditValue : (newValue : string) => boolean;
    getOptions : () => string[];
}


export default OrderEditableProps;