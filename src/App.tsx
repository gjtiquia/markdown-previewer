import { marked } from "marked";
import { useState } from "react";
import parse from "html-react-parser";

const convertToMarkdownPreview = (text: string) => parse(marked.parse(text));

function App() {
  const defaultText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

  const [userInput, setUserInput] = useState(defaultText);
  const [markDownContents, setMarkdownContents] = useState(convertToMarkdownPreview(defaultText));

  const onUserInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserInput(event.target.value);
    setMarkdownContents(convertToMarkdownPreview(event.target.value));
  };

  return (
    <div className="bg-slate-800 text-white min-h-screen grid grid-rows-[auto_1fr_auto] grid-cols-1">
      <header>
        <h1 className='font-bold text-5xl m-10 text-center'>
          Markdown Previewer
        </h1>
      </header>

      <main className="flex flex-col items-center gap-12">

        <div className="w-11/12 sm:w-9/12 bg-slate-700 px-8 py-8 rounded-2xl flex flex-col">
          <h2 className="font-bold text-2xl mb-5">Editor</h2>
          <textarea id="editor" className="bg-slate-50 p-5 text-black rounded-md h-60" value={userInput} onChange={onUserInput}></textarea>
        </div>

        <div className="w-11/12 sm:w-9/12 bg-slate-700 px-8 py-8 rounded-2xl">
          <h2 className="font-bold text-2xl mb-5">Preview</h2>
          <div id="preview" className="bg-slate-600 p-5 rounded-xl prose prose-invert max-w-none">
            {markDownContents}
          </div>
        </div>


      </main>

      <footer className="flex justify-end">
        <a target="_blank" href="https://github.com/gjtiquia/markdown-previewer" className="p-3" rel="noreferrer">
          <img alt="GitHub link" src='./github.svg' className="w-8"></img>
        </a>
      </footer>
    </div>
  );
}

export default App;
