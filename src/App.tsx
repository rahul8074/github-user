import Search from "./component/Search"
import Profile from "./component/Profile"
import 'tailwindcss/tailwind.css';
import './App.css'
import Sidebar from "./component/Sidebar";


function App() {
  return (
    <div className="app w-full flex">
      <div className="left w-1/2">
        <Search />
        <Profile />
      </div>
      <div className="right w-1/2">
      <Sidebar />
      </div>
     
    </div>
  )
}

export default App