import { faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useState } from "react"
import {AnimatePresence, Variants, motion} from "framer-motion"
import ToggleButton from "./ToggleButton"
import Channels from "../../fixtures/channels.json"
import SideMenuItem from "./SideMenuItem"
import { ChannelContext } from "@/context"
import { Channel } from "@/type"

export enum SideMenuMode {
    Dismissed = "dismissed",
    Full = "full"
}

type SideMenuProps = {

}
const SideMenu = ({}: SideMenuProps) => {

    const {setCurrentChannel} = useContext(ChannelContext)

    const [mode, setMode] = useState<SideMenuMode>(SideMenuMode.Full)

    const onModeToggle = () => {
        setMode(mode => mode === SideMenuMode.Full ? SideMenuMode.Dismissed : SideMenuMode.Full)
    }

    const onChannelClick = (channel: Channel) => () =>{
        if(setCurrentChannel){
            setCurrentChannel(channel)
        }
    }

    const variants: Variants = {
        dismissed: {width: '100px'},
        full: {width: '100%'}
    }

    return (
        <motion.section
            animate={mode}
            exit={{
               width: 0,
               opacity: 0
            }}
            variants={variants}
            className="w-full bg-zinc-800 max-w-[250px] p-2 box-content shadow-lg flex flex-col"
        >
            {/* Toggle */}
            <div className="flex justify-between items-center gap-2 p-2">
                <AnimatePresence>
                {mode === SideMenuMode.Full ?
                (
                    <motion.h2 initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}}>Home</motion.h2>
                )
            :
            (
                <motion.div 
                    initial={{
                        opacity: 0,
                        rotate: 360
                    }}
                    animate={{
                        opacity: 1,
                        rotate: 0
                    }}
                    exit={{
                        opacity: 0,
                        rotate: 360
                    }}
                    className="p-2 flex justify-center items-center bg-zinc-100 rounded-full text-zinc-600"
                >
                    <FontAwesomeIcon icon={faHome}/>
                </motion.div>
            )}
                </AnimatePresence>
                
                <ToggleButton mode={mode} onToggle={onModeToggle}/>
            </div>
            <hr/>
            <br/>
            {/* Content */}
            <AnimatePresence>
            <ul className="flex flex-col gap-2 overflow-auto flex-1">
                {Channels && Channels.map((channel) => {
                    return <SideMenuItem key={channel.name} item={channel} mode={mode} onClick={onChannelClick}/>
                })}
            </ul>
            </AnimatePresence>
        </motion.section>
    )
}

export default SideMenu