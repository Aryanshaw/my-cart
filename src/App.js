import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
// import React from 'react';
import Navbar from './components/navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import AddItem from './components/AddItem';


function App() {
  let product = [
    {
      price: 9999,
      name:"Lays",
      quantity: 0,
    }, 
    {
      price: 999,
      name:"daru",
      quantity: 0,
    }

  ]

  let [productList,setProductList] = useState(product)
  let [totalAmount,setTotalAmount] = useState(0)
   
  const incrementQuantity = (index) =>{
   let newProductList = [...productList]
   let newTotalAmount = totalAmount
   newProductList[index].quantity++ 
   newTotalAmount += newProductList[index].price
   setTotalAmount(newTotalAmount);
   setProductList(newProductList);
  }

  const decrementQuantity = (index) =>{
   let newProductList = [...productList]
   let newTotalAmount = totalAmount
   if(newProductList[index].quantity > 0) {
   newProductList[index].quantity-- 
   newTotalAmount -= newProductList[index].price

    }
   setTotalAmount(newTotalAmount)
   setProductList(newProductList);
  }
  
  const resetQuantity = () => {
   let newProductList = [...productList]
    newProductList.map((products) =>{
      products.quantity =0;
    })
     setProductList(newProductList);
     setTotalAmount(0);
  }

  const removeItem = (index) => {
   let newProductList = [...productList]
   let newTotalAmount = totalAmount
   newTotalAmount -= newProductList[index].quantity * newProductList[index].price
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  }

  const addItem = (name,price) => {
   let newProductList = [...productList]
    newProductList.push({
      price: price,
      name: name,
      quantity:0
    });
    setProductList(newProductList);
    
  }


  return (
   <>
   <Navbar/>
   <main className="container mt-5">
   <AddItem addItem={addItem}/>
   <ProductList productlist={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeItem={removeItem}/>
   </main>
   <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} /> 
   </>
  );
}

export default App;
