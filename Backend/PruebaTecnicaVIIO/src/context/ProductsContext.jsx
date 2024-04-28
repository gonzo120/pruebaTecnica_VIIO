import { createContext, useContext, useState } from "react";
import { createTaskRequest, getTasksRequest } from "../api/tasks";
import { getProductsRequest } from "../api/products";
const ProductsContext = createContext();

export const useProducts = () => {
    const context = useContext(ProductsContext);
    if (!context) {
        throw new Error("useTasks must be used within a TaskProvider");
    }
    return context;
}

export function ProductsProvider({ children }) {

    const [products, setProducts] = useState([]);


    const getProducts = async () => {
    
            const res = await getProductsRequest();
            
            setProducts(res.data);
    }
    return (
        <ProductsContext.Provider value={{
            products,
            getProducts,
            
        }}>
            {children}
        </ProductsContext.Provider>
    )
}