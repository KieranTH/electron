export type Channel = {
    id: string
    name: string;
    img: string
}

export type Message = {
   id: string
    channelId: string
   author: string
   message: string;
}