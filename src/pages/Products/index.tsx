import React from 'react'
import ProductCard from '../ProductCard.tsx/ProductCard'
import { productServices } from '../../Services/services'
//import GotoCartButton from '../Components/GotoCartButton'
import styles from '../../styles/Home.module.css'
//import Footer from '../'

// async function getAllProducts(){
   
// }
const mystyle={
  background:'black',
  color:'white',
  margin :0}

export default  function ProductSearch(props:any) {
    console.log('fetch the products ' , props)
     var products = props.products || []
 // var products = await productServices.getproduct()
  return (
    <div style={{backgroundColor:'black'}}>
      {/* <GotoCartButton/> */}
       <h1 style={mystyle} id='product'>products details</h1>
        <div className={styles.cardstyle}>
            {
                products.map((p:any)=>{
               
                  return <ProductCard product={p}/> 
                })
            }
        </div>
        {/* <Footer/> */}
    </div>
  )
}
