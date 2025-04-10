import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Aboutus(){
    return(
        <div className={styles.about_container}>
        <h1 className={styles.about_title}>About Us</h1>
        <p className={styles.about_text}>
          Welcome to our e-commerce platform! We are committed to providing the best
          shopping experience with high-quality products and excellent customer service.
        </p>
        <div className={styles.navbar_content}><Link className="nav-link active" aria-current="page" href="/">
        Home
      </Link></div>
      </div>

    )
}