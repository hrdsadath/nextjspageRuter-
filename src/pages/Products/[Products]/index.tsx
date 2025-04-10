import GotoCartButton from "../../GotoCartButton"
import { productServices } from "../../../Services/services";
import styles from "../../../styles/Home.module.css";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";

type ProductDetailsProps = {
  params: { Products: string };
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const products = await productServices.getproduct();
  const paths = products.map((product:any) => ({
    params: { Products: product.id.toString() },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = params?.Products as string;
  if (!productId) {
    return { notFound: true };
  }
  const product = await productServices.getProductsByid(Number(productId));
  if (!product) {
    return { notFound: true };
  }
  return {
    props: { product },
    revalidate: 10,
  };
};

//export default function ProductDetails({ product }: ProductDetailsProps) {




export default  function ProductDetails({ product }: ProductDetailsProps) {
  var ProductDetails = product
  // console.log(props, "from product details");

  // const { Products } =await props.params;
  // let ProductDetails = null;

  // if (Products) {
  //   ProductDetails = await productServices.getProductsByid(Number(Products));
  // }

  return (
    <div className={styles.productDetail}>
      <h1 className={styles.main}>Product Details</h1>
      {ProductDetails ? (
        <div className={styles.productCard}>
          {/* Product Image */}
        <img  src={ProductDetails.image}
            alt={ProductDetails.title}
            width={350}
            height={350}
            className={styles.productImage}></img>

          {/* Product Info */}
          <div className={styles.productInfo}>
            <h2 className={styles.productTitle}>{ProductDetails.title}</h2>
            <p className={styles.productDescription}>{ProductDetails.description}</p>
            <p className={styles.productPrice}>${ProductDetails.price}</p>

            {/* Add to Cart Button */}
            <GotoCartButton product={ProductDetails} /> 
          </div>
        </div>
      ) : (
        <p>No product found.</p>
      )}
    </div>
  );
}
