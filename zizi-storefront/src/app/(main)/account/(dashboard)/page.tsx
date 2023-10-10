import OverviewTemplate from "@modules/account/templates/overview-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Conta",
  description: "Ver suas atividades.",
}

export default function Account() {
  return <OverviewTemplate />
}
