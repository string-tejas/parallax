import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useTypewriter, Cursor } from "react-simple-typewriter";

// I can't figure out why the alert pops up twice

const Code = () => {
  const [typing, setTyping] = useState(false);
  return (
    <div className="w-full h-full bg-[rgb(250,250,250)] rounded-[20px]">
      <div
        className="w-full h-[40px] bg-blue-500 rounded-tl-[20px] z-10 
      rounded-tr-[20px] text-white text-lg px-8 flex items-center shadow-[0_0_8px_black]"
        style={{ fontStyle: typing && "italic" }}
      >
        wish.js{typing && "*"}
      </div>
      <div className="bg-transparent pl-1 pt-2 w-full h-[calc(100%-80px)] z-0">
        <CodeAnimation typing={typing} setTyping={setTyping} />
      </div>
    </div>
  );
};

const CodeAnimation = ({ typing, setTyping }) => {
  const code1 = `while(!(succeed = try()))`;
  const code2 = `var u = 0, age = get();
    
while (true) {
  if (u === age)
    alert('Happy Birthday');
  else
    u++;
}
// running the code`;
  const { text } = useTypewriter({
    words: [code1, code2],
    onLoopDone: () => {
      setTyping(false);
      setTimeout(() => {
        window.alert("Happy Birthday");
      }, 600);
    },
    onType: () => {
      if (!typing) setTyping(true);
    },
  });

  return (
    <SyntaxHighlighter
      language="javascript"
      style={atomOneLight}
      customStyle={{ fontSize: "1rem" }}
      showLineNumbers
    >
      {text}
      <Cursor />
    </SyntaxHighlighter>
  );
};

export default Code;
