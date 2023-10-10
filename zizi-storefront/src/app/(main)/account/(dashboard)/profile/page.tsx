import ProfileTemplate from "@modules/account/templates/profile-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Perfil",
  description: "Ver e editar sem perfil na Zizi.",
}

export default function Profile() {
  return <ProfileTemplate />
}
