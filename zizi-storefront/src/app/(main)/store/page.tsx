import { Metadata } from "next"
import StoreTemplate from "@modules/store/templates"

export const metadata: Metadata = {
  title: "Loja",
  description: "Explore nossos produtos.",
}

export default function StorePage() {
  return <StoreTemplate />
}
