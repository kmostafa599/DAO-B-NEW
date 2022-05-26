import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MyRoutes from "./routes";
import { loadUser } from "./store/actions";

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(loadUser())
  },[])
  return (
    <div className="App font-light">
      <MyRoutes />
    </div>
  );
}

export default App;
