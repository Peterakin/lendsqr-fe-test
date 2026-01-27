import './App.scss'
import Header from './components/Header/Header'
import Sidebar from "./components/Sidebar/Sidebar"
import Users from './pages/Users/Users'

const App = () => {

  return (
    <>
    <Header/>
    <div style={{display: "flex", background: "#f9fafb"}}>
      <Sidebar />
      <main style={{flex: "1",padding: "2rem"}}>
        <Users />
      </main>
      </div>
      </>
  )
}

export default App
