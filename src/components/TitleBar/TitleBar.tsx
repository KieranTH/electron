import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TitleBarButton from "./TitleBarButton";
import {ipcRenderer} from 'electron'
import {faMinus, faClose, faMaximize, faAtom} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import { faWindowRestore } from "@fortawesome/free-regular-svg-icons";

enum WindowState {
    IsMaximised,
    IsRestored
}

const TitleBar = () => {

    const [maxState, setMaxState] = useState<WindowState>(WindowState.IsRestored)

    const onClose = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        ipcRenderer.send('close')
    }

    const onMaxToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if(maxState === WindowState.IsMaximised){
            ipcRenderer.send('restore')
        } else {
            ipcRenderer.send('max')
        }
        
    }

    const onMin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        ipcRenderer.send('min')
    }

    ipcRenderer.on('isMaximised', () => {
        setMaxState(WindowState.IsMaximised)
    })

    ipcRenderer.on('isRestored', () => {
        setMaxState(WindowState.IsRestored)
    })

    return (
        <div className="bg-zinc-900 flex" data-cy={'title-bar'} id="title-bar">
            <div className="p-2 flex-1" data-cy={'title-meta'} id={'title-bar-meta'}>
                <p>Electron <FontAwesomeIcon icon={faAtom}/></p>
            </div>

            <div className="" data-cy={'title-buttons'}>
                <TitleBarButton onClick={onMin}>
                    <FontAwesomeIcon icon={faMinus} size={'xl'} className="hover:scale-105 transition-all hover:bg-slate-200 rounded-md px-1 hover:text-gray-500 box-border"/>
                </TitleBarButton>
                <TitleBarButton onClick={onMaxToggle}>
                    <FontAwesomeIcon icon={maxState === WindowState.IsMaximised ? faWindowRestore : faMaximize} size={'xl'} className="hover:scale-105 transition-all hover:bg-slate-200 rounded-md px-1 hover:text-gray-500 box-border"/>
                </TitleBarButton>
                <TitleBarButton onClick={onClose}>
                    <FontAwesomeIcon icon={faClose} size={'xl'} className="hover:text-red-400 hover:scale-105 transition-all hover:bg-slate-200 rounded-md px-1 box-border"/>
                </TitleBarButton>
            </div>
        </div>
    )
}

export default TitleBar;