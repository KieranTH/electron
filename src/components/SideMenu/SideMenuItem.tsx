import { Variants, motion } from "framer-motion"
import { SideMenuMode } from "./SideMenu"
import { Channel } from "@/type"

type SideMenuItemProps = {
    item: Channel
    mode: SideMenuMode
    onClick: (channel: Channel) => () => void
}
const SideMenuItem = ({item, mode, onClick}: SideMenuItemProps) => {
    const variants: Variants = {
        full: {
            display: 'flex'
        },
        dismissed: {
            display: 'flex',
            className: 'justify-center',
        }
    }
    return (
        <motion.li onClick={onClick(item)} animate={mode} variants={variants} layout className={`flex bg-zinc-500 ${mode === SideMenuMode.Dismissed && `justify-center !bg-zinc-800`} items-center  rounded-lg p-2 gap-5 cursor-pointer transition-all hover:bg-zinc-400 group`}>
            <img src={item.img} className={`w-10 h-10 rounded-full object-cover group-hover:scale-110 transition-transform ${mode === SideMenuMode.Dismissed && `p-2 bg-zinc-500`}`}/>
            {mode === SideMenuMode.Full && (
                <motion.p 
                    initial={{
                        opacity: 0,
                        x: -100,
                        position: 'absolute'
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        position: 'relative'
                    }}
                    exit={{
                        opacity: 0,
                        x: -100,
                        position: 'absolute'
                    }}
                    transition={{ease: "easeOut", delay: 0.2, duration: 0.2}}
                    className=""
                >{item.name}</motion.p>
            )}
        </motion.li>
    )
}

export default SideMenuItem