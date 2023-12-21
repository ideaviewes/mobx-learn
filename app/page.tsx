'use client'
import {useStores} from "@/app/hook";
import {observer} from 'mobx-react-lite';
import React from "react";
const Home:React.FC=()=>{
    const {count,increment}=useStores()
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>{count}</div>
            <button onClick={increment}>increment</button>
        </main>
    )
}
export default observer(Home);
