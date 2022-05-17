import Orderable from '../Interfaces/Order/Orderable';
import GraphProps from './GraphProps';

class GraphService{

    mainURL  = "URL";
    constructor(){
        this.mainURL;
    }

    getDomains() : string[]{
        return [
            "domain1",
            "domain2"
        ]
    }

    static createOrder(id : string , newOrder : GraphProps ) {
        const a = {}; 
        Object.keys(newOrder).map((key)=>{
            a[key] = newOrder[key];
        })
        console.log(JSON.stringify(newOrder));
    }

    setOrder(id : string , changedOrder:Orderable ) {
        console.log();
    }
}

export default GraphService;