import { useState } from "react";

function App() {
  const [markDownContents, setMarkdownContents] = useState(<h1>Hello World!</h1>);

  return (
    <div className="bg-slate-800 text-white min-h-screen grid grid-rows-[auto_1fr_auto] grid-cols-1">
      <header>
        <h1 className='font-bold text-5xl m-10 text-center'>
          Markdown Previewer
        </h1>
      </header>

      <main className="flex flex-col items-center gap-12">

        <div className="w-9/12 bg-slate-700 px-8 py-8 rounded-2xl flex flex-col">
          <h2 className="font-bold text-2xl mb-5">Editor</h2>
          <textarea id="editor" className="bg-slate-100 p-5 text-black rounded-md" value="Some default text"></textarea>
        </div>

        <div className="w-9/12 bg-slate-700 px-8 py-8 rounded-2xl">
          <h2 className="font-bold text-2xl mb-5">Preview</h2>
          <div id="preview" className="bg-slate-600 p-5 rounded-xl">
            {markDownContents}
          </div>
        </div>


      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
