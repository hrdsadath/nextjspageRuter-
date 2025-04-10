import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "./nav/NavBar";
import Sidebar from "./SideBar/Sidebar";
import ProductSearch from "./Products";
import { productServices } from "../Services/services";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export async function getStaticProps() {
  const products = await productServices.getproduct();
  return {
    props: { products },
  };
}



export default  function Home({ products }: { products: any[] }) {
  //var product = await productServices.getHomeProduct();
  return (
    <>
    
      <div className={styles.home}>
     <div className={styles.home_page}>
          {   (
            <div>
              <div>
                <img className={styles.product_image } src='https://png.pngtree.com/background/20230522/original/pngtree-couple-of-black-t-shirts-on-a-dark-background-picture-image_2685346.jpg'  />
              </div>
              {/* <div className={styles.product_title }>{product.title}</div> */}
              
            </div>
          )}
       
        {/* <ProductSearch/> */}
   
      
      {/* <div className={styles.div25}>
       hfvfjvhnefuignveji
       </div> */}</div>
       <div>
       <ProductSearch  products={products}/>

       </div>
    </div>
    </>
  );
}
