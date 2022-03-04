import "./App.css"
import Popover from "./components/popover";

function App() {
  
  return (
    <div className="App">
      <div  >
      <Popover 
        placement="left" 
        title="Tooltip" 
        content="Show the tooltip on the left" 
        trigger="hover"
        >
        <button>
          Show the tooltip
        </button>
      </Popover>
      </div>
    </div>
  )
}

export default App
