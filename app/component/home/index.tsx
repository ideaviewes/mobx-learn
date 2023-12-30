'use client'
import {useStores} from "@/app/hook";
import {observer} from 'mobx-react-lite';
import React from "react";
interface IndexProps {
    params?: {
        id?: number
        name?: string
    }
}
const Index: React.FC<IndexProps>=({params})=>{
    const {count,increment,user,changeName}=useStores();
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>{count}</div>
            <div>{user.username}</div>
            <div>{params?.id}</div>
            <div>{params?.name}</div>
            <button onClick={increment}>increment</button>
            <button onClick={()=>{
                changeName("张军mobx")
            }}>该名</button>
        </main>
    )
}
export default observer(Index);
