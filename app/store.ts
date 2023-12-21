import {makeObservable} from 'mobx';
import {enableStaticRendering} from 'mobx-react-lite'

enableStaticRendering(typeof window === "undefined")

class Store {
    count = 0
    constructor() {
        makeObservable(this)
    }

    increment = () => {
        this.count++;
    };
}
const store=new Store()
export default store
