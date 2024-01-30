import { Button } from "@/components/ui/button"
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import LoginButton from "@/components/auth/login-button"

const font = Poppins({
  subsets: ['latin'],
  weight: ['600']
})

export default function Home() {
  return (
    <main className="flex h-screen flex-col py-16 items-center justify-center bg-gray-700 from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md", font.className)}>
          Auth
        </h1>
        <p className="text-white text-lg">
          A Simple Authentication service
        </p>
        <LoginButton>
        <Button size="lg" variant="secondary">Sign in</Button>
        </LoginButton>
      </div>
      
    </main>
  );
}
