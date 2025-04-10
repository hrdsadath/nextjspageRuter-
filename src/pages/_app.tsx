import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CartProvider } from "../context/CartContext";
import NavBar from "./nav/NavBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <NavBar/>
      <Component {...pageProps} />
    </CartProvider>
  );
}
