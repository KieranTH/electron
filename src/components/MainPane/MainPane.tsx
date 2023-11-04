import { ChannelContext } from "@/context";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useMemo, useState } from "react";
import Messages from '../../fixtures/messages.json'
import { MessageItem } from "../Message";
import { Message as MessageType } from "@/type";

const MainPane = () => {
    const {currentChannel} = useContext(ChannelContext)
    const [message, setMessage] = useState<string>("")
    const [messages, setMessages] = useState<MessageType[]>([])

    useEffect(() => {
        if(Messages){
            const filter = Messages.filter((m) => {
                return m.channelId === currentChannel?.id
            })
            setMessages(filter)
        }

    }, [Messages, currentChannel])

    const onMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.currentTarget.value)
    }

    const onSend = () => {
        if(message){
            const newMessage: MessageType = {
                id: `new-${messages.length+1}`,
                author: 'Kieran',
                channelId: currentChannel?.id ?? '1',
                message: message
            }
            setMessages((messages) => [...messages, newMessage])
        }
    }

    return (
        <section className="flex-1 bg-zinc-700 flex flex-col">
            <h2 className="p-5 bg-zinc-600 flex-0">{currentChannel?.name ?? 'No Selected Channel'}</h2>
            <section data-cy={'message-content'} className="flex-1 h-fit p-5 flex flex-col gap-2 overflow-auto">
                {(messages.length === 0) && (
                    <p>This chat has no messages</p>
                )}
                {messages && messages.length > 0 && messages.map((message) => {
                    return <MessageItem message={message}/>
                })}
            </section>
            <section data-cy={'content-footer'} className="h-10 bg-zinc-600 flex items-center p-3 gap-5 flex-0">
                <input type={'text'} value={message} onChange={onMessageChange} className="h-8 border rounded-md px-2 border-zinc-500 flex-1" placeholder="Write your message..."/>
                <button onClick={onSend} className="p-3 bg-zinc-500 rounded-lg flex justify-center items-center">
                    <FontAwesomeIcon icon={faPaperPlane} className=""/>
                </button>
            </section>
        </section>
    )
}

export default MainPane;