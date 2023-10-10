import LoginTemplate from "@modules/account/templates/login-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Entrar",
  description: "Entrar na sua conta Zizi",
}

export default function Login() {
  return <LoginTemplate />
}
