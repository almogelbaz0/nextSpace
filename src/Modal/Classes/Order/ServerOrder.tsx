import Orderable from '../../Interfaces/Order/Orderable';
import OrderParams from '../../Interfaces/Order/OrderParams';
import GraphProps from '../../Service/GraphProps';
import GraphService from '../../Service/GraphService';
import Epg from '../Epg';
import DomainEditable from '../Properites/DomainEditable';
import EpgEditable from '../Properites/EpgEditable';
import Server from '../Server';

class ServerOrder extends Server implements Orderable , DomainEditable  , EpgEditable {

    orderId: string;

    public onChangeListner!: (serv : Orderable) => void;
    


    constructor(id: string, orderId : string, epg?:Epg , change? : (serv : Orderable) => void ) {
        super(id,epg);
        this.orderId = orderId;
        if (change) {
            this.setOnChangeListner(change);
        }
    }

    public getEpg(){
        return this._epg;
    }

    public setEpg(epg : Epg){
        this._epg = epg;
    }

    public getDomain() {
        return this._domain;
    }

    public setDomain(newValue : string){
        this._domain = newValue;
    }

    setOnChangeListner(change: (t: Orderable) => void) :void {
        this.onChangeListner = change;
        return;
    }

    getParams(): OrderParams {

        return { nonEditProps: [{ name : "almog",value: "value" ,helperText:"sa"}],
        editProps: [
            {
                name : "id",
                value: this._id ,
                helperText:"sa" ,
                onEditValue : (newValue : string) => {
                    this._id = newValue ;
                    this.onChangeListner(this);
                    return true ;
                } ,
                getOptions  : () => { return ["aa","aaa"] }}] 
            }
    }

    
    
    create(): boolean {
        const a : GraphProps = {
            id : this.orderId,
            domain : this._domain,
            epg:JSON.stringify(this._epg)
        }
        GraphService.createOrder(this.orderId,a)
        return true;
    }
    
    order(): boolean {
        return true;
    }

    editOrder(): boolean {
        return true;
    }
}

export default ServerOrder;