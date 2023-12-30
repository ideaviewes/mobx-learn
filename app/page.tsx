import React from "react";
import Index from "@/app/component/home";

interface HomePageProps {
    searchParams:{
        id?: number
        username?: string
    }
}
const Home:React.FC<HomePageProps>=  ({searchParams})=>{

    return (
        <Index params={searchParams}/>
    )
}
export default Home;
