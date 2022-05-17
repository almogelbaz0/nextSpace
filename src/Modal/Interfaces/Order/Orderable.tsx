import Listenable from '../Listenable';
import OrderParams from './OrderParams';

interface Orderable extends Listenable<Orderable> {
    orderId : string;
    create() : boolean;
    order(): boolean;
    getParams() : OrderParams;
}


export default Orderable;
