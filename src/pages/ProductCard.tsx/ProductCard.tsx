import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import styles from '../../styles/Home.module.css'
import GotoCartButton from '../GotoCartButton'
import { useCart } from "../../context/CartContext"

export default function ProductCard(props: any) {
  const { addToCart } = useCart()
  const router = useRouter()

  const prod = props?.product

  // Handle missing product
  if (!prod) {
    return <div className={styles.card}>Product data not available</div>
  }

  return (
    <div className={styles.card}>
      <div key={prod.id}>
        <img 
          src={prod.image ?? '/fallback.jpg'} 
          width={50}  
          alt={prod.title ?? 'Product'} 
          className={styles.card_img}
        />
        <div className={styles.card_content}>
          <div className={styles.card_title}>{prod.title}</div>
          <div className={styles.card_price}>{prod.price}</div>
        </div>
        <div>{prod.description}</div>
        <div>{prod.category}</div>
        <div>{prod.rating?.rate ?? 'N/A'}</div>
        <div>{prod.rating?.count ?? 'N/A'}</div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            className={styles.addToCart}
            onClick={() => router.push(`/Products/${prod.id}`)}
          >
            details
          </button>
          <GotoCartButton product={prod} />
        </div>
      </div>
    </div>
  )
}
