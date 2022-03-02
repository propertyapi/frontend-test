import React from "react"
import { createGlobalStyle } from "styled-components"
import Popover from "./components/Popover"

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

 main, .container, #root, #root>div {
  height: 100%;
}

main {
  display: flex;
  justify-content: space-around;
}

.popover {
  display: flex;
  align-items: center;
}
`

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
        <Popover title={title} content={content} placement="top" trigger="click" />
      </main>
    </div>
  )
}

export default App
