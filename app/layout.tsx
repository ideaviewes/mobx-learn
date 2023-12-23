import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import React from "react";
import {StoreProvider} from "@/app/provider";


const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default async function RootLayout(
    {
        children,
    }: {
        children: React.ReactNode
    }) {
    const url = "http://127.0.0.1:3000/api/user/profile";
    const response = await fetch(url);
    const userData:IResponse<UserProfile> = await response.json();
    //如果code==0 并且当前url不是登录注册页面的话，就重定向到login 页面
    if(userData.code===0){

    }
    const userProfile = userData.data;
    return (
        <html lang="zh-CN">
        <body className={inter.className}>
        <StoreProvider userProfile={userProfile}>
            {children}
        </StoreProvider>
        </body>
        </html>
    )
}
