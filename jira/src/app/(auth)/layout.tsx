"use client"

import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { PropsWithChildren } from "react"

const Authlayout = ({ children }: PropsWithChildren) => {

    const pathname = usePathname();
    const isSignIn = pathname === '/sign-in';

    return(
        <main className="min-h-screen bg-neutral-100">
            <div className="mx-auto max-w-screen-2xl p-4">
                <nav className="flex items-center justify-between">
                    <Logo />

                    <div className="flex items-center gap-x-2.5">
                        <Button variant="secondary" asChild>
                            <Link href={isSignIn ? '' : ''}>{isSignIn ? 'Register' : 'Login'} </Link>
                        </Button>
                    </div>
                </nav>
            </div>
        </main>
    )
}