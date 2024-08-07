"use client"

import { Logo } from "./Logo"
import { Button } from "@/components/ui/button"

export const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 bg-background z-50">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end flex item-center gap-x-2 text-muted-foregroung">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms & Condition
        </Button>
      </div>
    </div>
  )
}
