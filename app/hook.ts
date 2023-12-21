import { useContext } from "react";
import { StoreContext } from "./provider";

export const useStores = () => {
    return useContext(StoreContext);
};

