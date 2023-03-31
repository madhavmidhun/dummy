import React ,{useState,useEffect} from 'react'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from '../redux/actions/Actions';
import Photodata from "../components/Photodata";
function Data(){
  const products = useSelector((state) => state.allProducts.products);
console.log(products);

const dispatch = useDispatch();
  const fetchData = async () => {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/albums/1/photos")
      .catch((err) => {
        console.log("Err ", err);
      });

    dispatch(setProducts(response.data));
  };
 useEffect(() => {
  fetchData();
 
  
 }, [])
 
  if (products === undefined) {
    console.log("This is the data page");
    
  }
  return (
    <div>

   
    <div>
      <h1>This is photos components</h1>
    </div>
    <Photodata />
    
  </div>
  )

}


export default Data