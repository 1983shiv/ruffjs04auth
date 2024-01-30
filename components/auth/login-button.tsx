"use client"

import { useRouter } from "next/navigation";
import { userAgent } from "next/server";

interface LoginButtonProps {
    children: React.ReactNode,
    mode?: "model" | "redirect",
    asChild?: boolean;
}



export default function LoginButton({ children, mode = "redirect", asChild} : LoginButtonProps) {
    
    const router = useRouter();

    const onClick = () => {
        router.push("/auth/login")
        console.log("login button clicked")
    }

    if(mode === "model"){
        return (
            <span>
                TODO: Implement modal
            </span>
        )
    }

    return (
    <span onClick={onClick} className="cursor-pointer">{children}</span>
  )
}
