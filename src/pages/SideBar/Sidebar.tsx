
import { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState<string>(""); // Track active section

  const handleClick = (section: string) => {
    setActiveSection(section); // Set active section on click
  };

  return (
    <div className={styles.div25}>
      <Link
        href="#product"
        onClick={() => handleClick("product")}
        className={`${styles.pord_ditils} ${activeSection === "product" ? styles.active : ""}`}
      >
        Products
      </Link>
      <Link
        href="#categories"
        onClick={() => handleClick("categories")}
        className={`${styles.pord_ditils} ${activeSection === "categories" ? styles.active : ""}`}
      >
        Categories
      </Link>
      <Link
        href="#about-us"
        onClick={() => handleClick("about-us")}
        className={`${styles.pord_ditils} ${activeSection === "about-us" ? styles.active : ""}`}
      >
        About Us
      </Link>
    </div>
  );
}
