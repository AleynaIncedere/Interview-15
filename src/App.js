import React, { useState, useEffect } from "react";
import "./styles.css";
function App() {
  return <WordByWord />;
}

const WordByWord = () => {
  const [inputText, setInputText] = useState(""); 
  const [displayText, setDisplayText] = useState("");  
  const [words, setWords] = useState([]); 
  const [index, setIndex] = useState(0);  
  const [isTyping, setIsTyping] = useState(false);

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  useEffect(() => {
    if (inputText.trim()) {
      setWords(inputText.trim().split(" ")); 
      setIndex(0);
      setDisplayText(""); 
      setIsTyping(true); 
    }
  }, [inputText]);


  useEffect(() => {
    let timer;
    if (isTyping && index < words.length) {
      timer = setInterval(() => {
        setDisplayText((prev) => prev + " " + words[index]);
        setIndex((prev) => prev + 1);
      }, 500); 

    } else {
      
      setIsTyping(false);
    }

    return () => clearInterval(timer); 
  }, [index, words, isTyping]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>
         Kelime Yazma</h1>
      <input
        type="text"
        value={inputText}
        onChange={handleTextChange}
        placeholder="Bir metin girin"
        style={{ width: "300px", padding: "10px", fontSize: "16px", color:"blue"}}
      />
      <div style={{ marginTop: "20px", fontSize: "20px", fontWeight: "bold" , color:"blue"}}>
        {displayText}
      </div>
    </div>
  );
};

export default App;
