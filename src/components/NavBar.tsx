import { ComponentProps, ReactNode } from "react";

export default function Navbar({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <div className="relative inset-x-0 top-0 z-50">
            <nav className='flex items-center justify-end lg:px-8'>
                <div className="hidden lg:flex lg:gap-x-12">
                   {children}
                </div>
            </nav>
        </div>
    )
}

export function NavLinks(props:any) {

    return (
        <a {...props} className={`py-5 hover:text-fire-text focus-visible:text-fire-text focus:text-fire-text`}></a>
    )
}