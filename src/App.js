import React,{useState} from "react";
import useChat from "./components/useChat";
import { db } from "./services/firebase";



function App() {
  const [message, setMessage] = useState("");
  const { load, messages, error } = useChat();
  const sendMessages = (e) => {
    e.preventDefault()
    
    db.collection('messages').add({
      timestamp: Date.now(),
      message
    })
  }

  return (
    <div className="App">
      <div className="App-header">
        <p>Escribir mensaje...</p>
        <form>
          <input value={message} onChange={(e) => setMessage(e.target.value)} />
          <button type="submit" onclick = {sendMessages}>Enviar mensaje</button>
        </form>
        <ul>
          {messages.map(m => 
            <li key={m.id}>{m.message}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
