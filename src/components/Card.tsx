import { motion } from "framer-motion";
import Link from 'next/link'

type CardProps = {
    href: string;
    imgSrc: string;
    layoutId: string;
}

export function Card(props: CardProps){
    return(
       <Link href={props.href}>
            <div className="relative h-20 md:h-40 bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition">
                <motion.img src={props.imgSrc} className="w-full h-full" layoutId={props.layoutId} />
            </div>
       </Link>
    )
}