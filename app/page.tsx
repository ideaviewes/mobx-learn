'use client'
import {useStores} from "@/app/hook";
import {observer} from 'mobx-react-lite';
import React from "react";
import {useSearchParams} from "next/navigation";

const Home:React.FC=  ()=>{
    var params = useSearchParams();
    const {count,increment,user,changeName}=useStores()
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>{count}</div>
            <div>{user.username}</div>
            <button onClick={increment}>increment</button>
            <button onClick={()=>{
                changeName("张军mobx")
            }}>该名</button>
        </main>
    )
}
export default observer(Home);
