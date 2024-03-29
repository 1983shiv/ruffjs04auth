"use client"

import { Card, CardContent, CardHeader, CardFooter } from "../ui/card"

interface CardWrapperProps {
    children: React.ReactNode,
    headerLabel: string,
    backButtonLabel: string,
    backButtonHref: string,
    showSocial?: boolean
}

export default function CardWrapper({children, headerLabel, backButtonLabel, backButtonHref, showSocial} : {CardWrapperProps}) {
  return (
    <Card className="w-[400px] shadow-md">
        <CardHeader {headerLabel}></CardHeader>
        {children}
    </Card>
  )
}
