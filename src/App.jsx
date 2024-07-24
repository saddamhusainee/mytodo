
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'
import TodoSave from './components/TodoSave'
import { AppContextProvider } from './contexts/AppContext'

function App() {

  return (
    <AppContextProvider>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
              {/* Todo form goes here */} 
              <TodoInput></TodoInput>
            </div> 
            <div>
              <TodoSave></TodoSave>
              
            </div>        
        </div>
      </div>
    </AppContextProvider>
  )
}

export default App
