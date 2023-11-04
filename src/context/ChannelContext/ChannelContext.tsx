import { Channel } from "../../type"
import React, { useState } from "react"

type State = {
    currentChannel?: Channel
    setCurrentChannel?: React.Dispatch<React.SetStateAction<Channel | undefined>>
}

export const ChannelContext = React.createContext<State>({})

type ChannelContextProviderProps = {
    children: React.ReactNode
}
const ChannelContextProvider = ({children}: ChannelContextProviderProps) => {
    const [currentChannel, setCurrentChannel] = useState<Channel>()
    return (
        <ChannelContext.Provider value={
            {
                currentChannel,
                setCurrentChannel
            }
        }>
            {children}
        </ChannelContext.Provider>
    )
}

export default ChannelContextProvider