import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css";
import { useState } from "react";


type Props = {
    name: string,
    text: string
}
function HtmlNotes({name, text}:Props) {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleOpen = () => setIsOpen(!isOpen);

    const noText = `# No Notes Yet! 
    Add notes by typing and commiting above!
    `;

  return (
    <article className="w-11/12 py-4 ">
      <h2 className="text-2xl text-center cursor-pointer w-full" onClick={toggleOpen}> {name} </h2>

        <div 
        className={`markdown-body dropdown-wrapper dropdown-animation ${isOpen ? "py-4 border-b-2 border-black overflow-y-auto overflow-x-hidden" : "overflow-hidden hidden"} `}
        style={{ maxHeight: isOpen ? '700px' : '0' }}>
          <Markdown remarkPlugins={[remarkGfm]}>{text == "" ? noText : text}</Markdown>
        </div>
    </article>
  );
}

export default HtmlNotes;
