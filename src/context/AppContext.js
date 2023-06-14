import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios'


export const context = createContext()

const AppContext = ({children}) => {
    const [user, setUser] = useState([]);
    const [productdata, setProductData] = useState(
        JSON.parse(localStorage.getItem("productdata")) || []
      );

    //   const deleteHandle = (id) => {
    //     const deleteAlert = window.confirm("You Want to Delete");
    //     if (deleteAlert) {
    //       const updatedProductData = productdata.filter(
    //         (product) => product.id !== id
    //       );
    //       setProductData(updatedProductData);
    //     }
    //   };

    const [cartItems,setCartItems] = useState([])
    const addToCart = (product) => {
      setCartItems((prev) => [...prev, product]);
  
    };
  const cartItemsLength = cartItems.length;
  
      console.log(cartItems);

    const deleteHandle = (id) =>{
        const updatedProductData = productdata.filter((product) => product.id !== id );
        setProductData(updatedProductData) 
    }

 useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then(
        response => setUser(response.data)
    )
 },[])


  return (
    <context.Provider value={{ user, setUser,productdata,setProductData,deleteHandle, cartItems, setCartItems, addToCart, cartItemsLength }}>
        {children}
    </context.Provider>
  )
}

export default AppContext