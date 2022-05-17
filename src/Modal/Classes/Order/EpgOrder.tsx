import Orderable from "../../Interfaces/Order/Orderable";
import OrderParams from "../../Interfaces/Order/OrderParams";
import IdEditable from "../Properites/IdEditable";
import Server from "../Server";

class EpgOrder extends Server implements Orderable , IdEditable {

    orderId: string;
    
    public onChangeListner!: (serv : Orderable) => void;


    constructor(id: string, orderId : string, change? : (serv : Orderable) => void ) {
        super(id);
        this.orderId = orderId;
        if (change){
            this.setOnChangeListner(change);
        }
    }
    getId(): string {
        return this._id;
    }
    setId(newValue: string): void {
        this._id = newValue;
    }

    setOnChangeListner(change: (t: Orderable) => void) :void {
        this.onChangeListner = change;
        return;
    }
    

    getParams(): OrderParams {
        return { nonEditProps: [{ name : "name",value: "value" ,helperText:"sa"}],
        editProps: [
            {
                name : "id",
                value: this._id,
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
        return true;
    }
    order(): boolean {
        return true;
    }
    editOrder(): boolean {
        return true;

    }
}

export default EpgOrder;