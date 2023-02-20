import { useState } from "react";
import { Routes, Route, redirect } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TasksPage from "./pages/TasksPage";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const onLogin = () => setIsAuth(true);

  return (
    <Routes>
      <Route element={<PrivateRoutes isAuth={isAuth} />}>
        <Route element={<TasksPage />} path="tasks" />
      </Route>
      <Route element={<LoginPage onLogin={onLogin} />} path="login" />
    </Routes>
  );
}

export default App;
