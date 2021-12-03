import { ReactNode } from "react"
import { Header } from "./Header"

type LayoutProps = {
    children: ReactNode
}

export function Layout(props: LayoutProps){
    return(
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
            <Header />
            {props.children}
        </div>
    )
}