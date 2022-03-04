import React from "react"
import Popover from "./components/Popover"
import GlobalStyle from "./components/GlobalStyle"

function App() {
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  )

  const title = <span>Title</span>

  return (
    <div className="App">
      <GlobalStyle />
      <main>
        <Popover title={title} content={content} placement="topLeft" trigger="click" />
        <Popover title={title} content={content} placement="top" trigger="click" />
        <Popover title={title} content={content} placement="topRight" trigger="click" />
        <Popover title={title} content={content} placement="bottomLeft" trigger="hover" />
        <Popover title={title} content={content} placement="bottom" trigger="hover" />
        <Popover title={title} content={content} placement="bottomRight" trigger="hover" />
      </main>
    </div>
  )
}

export default App
