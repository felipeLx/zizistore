import CartTemplate from "@modules/cart/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Carrinho",
  description: "Ver o seu carrinho",
}

export default function Cart() {
  return <CartTemplate />
}
