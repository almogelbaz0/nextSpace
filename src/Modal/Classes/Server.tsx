import Resource from "../AbsClasses/Resource";
import Epg from "./Epg";
class Server extends Resource  {
    
    protected _domain: string;

    protected _epg? : Epg;

    constructor(id: string, epg?:Epg) {
        super(id);
        this._domain = "9000"
        this._epg = epg;
    }    

    
    

}

export default Server;