import {makeAutoObservable} from 'mobx';
import {enableStaticRendering} from 'mobx-react-lite'

enableStaticRendering(typeof window === "undefined")

class Store {
    count = 0
    user: UserProfile={
        id:0,
        username:"",
        money:0
    }
    constructor() {
        makeAutoObservable(this)
    }
    increment = () => {
        this.count++;
    };
    hydrate=(user: UserProfile)=>{
        this.user=user
    }
    changeName=(name: string)=>{
        this.user.username=name;
    }
}
const store=new Store()
export default store
