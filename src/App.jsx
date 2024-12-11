import './App.css'
import Chat from './components/Chats/Chat'
import Message from './components/messages/Message'

function App() {

  return (
    <div className="zypper">
      <div className="Container">
        <Chat/>
        <Message/>
      </div>
    </div>
  )
}

export default App
