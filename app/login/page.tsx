'use client'
import React from "react";
import {redirect} from "next/navigation";

const Login: React.FC=()=>{
    redirect(`/`)
    return <>
        登录
    </>
}
export default Login;
