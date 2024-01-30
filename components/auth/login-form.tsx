import CardWrapper from "@/components/auth/cardwrapper"


export default function LoginFrom() {
  return (
    <CardWrapper headerLabel="Welcome Back" backButtonLabel="Don't hvae an account", backButtonHref="/auth/register">login-form</CardWrapper>
  )
}
