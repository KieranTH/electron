
import './App.css'
import { TitleBar, Content } from './components'
import { ChannelContextProvider } from './context'

function App() {
  return (
    <div className='h-screen w-screen flex flex-col'>
      <ChannelContextProvider>
        <TitleBar/>
        <Content/>
      </ChannelContextProvider>
    </div>
  )
}

export default App