import React from "react";
import Popover from "./components/Popover";

function App() {

  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  )

  const title = (<span>Title</span>)

return (
  <div className="App">
    <main>
<Popover 
        title={title}
        content={content}
        placement="top"
        trigger="click"
        />
    </main>
  </div>
)
}

export default App