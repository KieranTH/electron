import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SideMenuMode } from "./SideMenu"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { Variants, motion } from "framer-motion"

type ToggleButtonProps = {
    mode: SideMenuMode
    onToggle: () => void
}
const ToggleButton = ({mode, onToggle}: ToggleButtonProps) => {
    const variants: Variants = {
        full: {rotate: 0},
        dismissed: {rotate: 180}
    }
    return (
        <motion.button
            animate={mode}
            variants={variants}
            transition={{ease: 'easeInOut'}}
            onClick={onToggle}
        >
            <FontAwesomeIcon icon={faArrowLeft} size={'xl'} className="hover:scale-110 transition-all"/>
        </motion.button>
    )
}

export default ToggleButton