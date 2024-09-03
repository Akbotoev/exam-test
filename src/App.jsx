import { Routes, Route} from "react-router-dom";
import { Header } from "./Components/Header";
import TaskList from "./pages/TaskList/TaskList";
import AddTask from "./pages/AddTask/AddTask";
import { useState } from "react";


export const App = () => {
  const [test, setTask] = useState('')
  

  return (
 <>
<Header/>
<Routes>
  <Route path='/taskList' element={<TaskList/>}/>
  <Route path='/addTask' element={<AddTask/>}/>
</Routes>
 </>
  );
}

export default App;
