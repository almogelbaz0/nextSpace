import Epg from "../Epg";

interface EpgEditable{
    getEpg() : Epg | undefined ;
    setEpg(newValue:Epg) : void ;
}
export default EpgEditable;