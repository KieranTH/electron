import { Message } from "@/type"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type MessageProps = {
    message: Message
}
const MessageItem = ({message}: MessageProps) => {
    return (
        <div className="flex items-center gap-2 bg-slate-500 p-3 rounded-lg">
            <div className="rounded-full bg-slate-200 w-fit p-2 px-2 text-zinc-600">
                <FontAwesomeIcon icon={faUser} size={'xl'}/>
            </div>
            <div>
                <p className="text-zinc-200 font-bold text-sm">{message.author ?? 'User'}</p>
                <p>{message.message}</p>
            </div>
        </div>
    )
}

export default MessageItem