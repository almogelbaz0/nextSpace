import Epg from '../Classes/Epg';
import DomainEditable from '../Classes/Properites/DomainEditable';
import EpgEditable from '../Classes/Properites/EpgEditable';
import IdEditable from '../Classes/Properites/IdEditable';
import Orderable from '../Interfaces/Order/Orderable';
import OrderParams from '../Interfaces/Order/OrderParams';

class OrderFactory{

    private isAnOrderDomainEditable = (obj: any): obj is DomainEditable => {
        return 'setDomain' in obj;
    }


    private isAnOrderIdEditable = (obj: any): obj is IdEditable => {
        return 'setId' in obj;
    }

    private isAnOrderEPGEditable = (obj: any): obj is EpgEditable => {
        return 'setEpg' in obj;
    }
    

    getParams(resource : Orderable): OrderParams {

        let returedParams :OrderParams = {
            nonEditProps : [],
            editProps :[]
        }

        returedParams = this.getDomainParam(resource,returedParams);
        returedParams = this.getEpgParam(resource,returedParams);
        
        if(this.isAnOrderIdEditable(resource)){
            returedParams.editProps.push(
                {
                    name : "Id",
                    value: resource.getId(),
                    helperText:"sa" ,
                    onEditValue : (newValue : string) => {
                        resource.setId(newValue) ;
                        resource.onChangeListner(resource);
                        return true ;
                    } ,
                    getOptions  : () => { return ["aa","aaa"] }
                }
            )
        } else {
            returedParams.nonEditProps.push({
                name : "Id",
                value: resource.orderId,
                helperText:"sa" 
            })
        }

        return returedParams;
    }

    getDomainParam(resource: Orderable, returedParams : OrderParams) : OrderParams {
        if (this.isAnOrderDomainEditable(resource)){
            returedParams.editProps.push({
                name : "Domain",
                value: resource.getDomain(),
                helperText:"sa" ,
                onEditValue : (newValue : string) => {
                    resource.setDomain(newValue) ;
                    resource.onChangeListner(resource);
                    return true ;
                } ,
                getOptions  : () => { return ["aa","aaa"] }
            }) 
        } else { 
            returedParams.nonEditProps.push({
                name : "Domain",
                value: "resource.s",
                helperText:"sa" 
            })
        }
        return returedParams;
    }

    getEpgParam(resource: Orderable, returedParams : OrderParams) : OrderParams {
        if (this.isAnOrderEPGEditable(resource)){
            returedParams.editProps.push({
                name : "Epg",
                value: resource.getEpg()?._id,
                helperText:"sa" ,
                onEditValue : (newValue : string) => {
                    resource.setEpg(new Epg(newValue)) ;
                    resource.onChangeListner(resource);
                    return true ;
                } ,
                getOptions  : () => { return ["aa","aaa"] }
            }) 
        } else { 
            returedParams.nonEditProps.push({
                name : "Epg",
                value: "12121",
                helperText:"sa" 
            })
        }
        return returedParams;
    }
    
}


export default OrderFactory;