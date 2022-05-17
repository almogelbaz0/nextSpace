interface Listenable<T>{
    onChangeListner : (t : T) => void;
    setOnChangeListner : ( change : (t : T) => void ) => void ;
}

export default Listenable;