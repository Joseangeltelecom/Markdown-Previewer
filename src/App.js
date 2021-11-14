import './App.css';
import ReactMarkdown from 'react-markdown'
import { initialState } from './data';
import React, { useState } from 'react'



function App() {
  const [markdownText, setMarkdownText] = useState(initialState)
  return (
    <div className='content'>
            
            <div className='title'>Convert your Markdown</div>

            <div className="app" style={{ display: 'flex' }}>
                
                <div className='content-box'>
                    <h3>Enter your Markdown:</h3>
                    <textarea id='editor' value={markdownText} onChange={(event) => setMarkdownText(event.target.value)}/>
                </div>

                <div className='content-box'>

                    <h3>See the result:</h3>
                    <div className='preview-styles' id='preview'>

                        <span>  <ReactMarkdown>{markdownText}</ReactMarkdown> </span>
                
                    </div>

                </div>
                   
            </div>

            

        </div>
  );
}

export default App;
