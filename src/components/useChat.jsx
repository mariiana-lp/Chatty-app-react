import  { useEffect, useState } from "react"
import {db} from "../services/firebase"

const useChat = () => {
  const [error, setError] = useState(null);
  const [load, setLoad] = useState(true);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("messages".onSnapshot)(
      (snapshot) => {
        setLoad(false);
        setMessages(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
      },
      (err) => {
        setError(err);
      }
    );
    return () => unsubscribe();
  }, [setMessages]);

  return [error, load, messages]
};

export default useChat;
