import { medusaClient } from "@lib/config"
import { LOGIN_VIEW, useAccount } from "@lib/context/account-context"
import Button from "@modules/common/components/button"
import Input from "@modules/common/components/input"
import Spinner from "@modules/common/icons/spinner"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"

interface RegisterCredentials extends FieldValues {
  first_name: string
  last_name: string
  email: string
  password: string
  phone?: string
}

const Register = () => {
  const { loginView, refetchCustomer } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const router = useRouter()

  const handleError = (e: Error) => {
    setAuthError("An error occured. Please try again.")
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterCredentials>()

  const onSubmit = handleSubmit(async (credentials) => {
    await medusaClient.customers
      .create(credentials)
      .then(() => {
        refetchCustomer()
        router.push("/account")
      })
      .catch(handleError)
  })

  return (
    <div className="max-w-sm flex flex-col items-center mt-12">
      {isSubmitting && (
        <div className="z-10 fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
          <Spinner size={24} />
        </div>
      )}
      <h1 className="text-large-semi uppercase mb-6">Torna-se um Membro da Zizi</h1>
      <p className="text-center text-base-regular text-gray-700 mb-4">
        Criar seu perfil como membro da Zizi e ganhe acesso a uma experiência personalizada.
      </p>
      <form className="w-full flex flex-col" onSubmit={onSubmit}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="First name"
            {...register("first_name", { required: "Primeiro nome é obrigatório" })}
            autoComplete="given-name"
            errors={errors}
          />
          <Input
            label="Last name"
            {...register("last_name", { required: "Sobrenome é obrigatório" })}
            autoComplete="family-name"
            errors={errors}
          />
          <Input
            label="Email"
            {...register("email", { required: "Email é obrigatório" })}
            autoComplete="email"
            errors={errors}
          />
          <Input
            label="Phone"
            {...register("phone")}
            autoComplete="tel"
            errors={errors}
          />
          <Input
            label="Password"
            {...register("password", {
              required: "Senha é obrigatório",
            })}
            type="password"
            autoComplete="new-password"
            errors={errors}
          />
        </div>
        {authError && (
          <div>
            <span className="text-rose-500 w-full text-small-regular">
              As credenciais não são as mesmas em nossos registros
            </span>
          </div>
        )}
        <span className="text-center text-gray-700 text-small-regular mt-6">
          Ao criar uma conta, você concorda com Zizi&apos;s{" "}
          <Link href="/content/privacy-policy" className="underline">
            Política de Privacidade
          </Link>{" "}
          e{" "}
          <Link href="/content/terms-of-use" className="underline">
            Termos de Uso
          </Link>
          .
        </span>
        <Button className="mt-6">Join</Button>
      </form>
      <span className="text-center text-gray-700 text-small-regular mt-6">
        Já é um membro?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          Entrar
        </button>
        .
      </span>
    </div>
  )
}

export default Register
