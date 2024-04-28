import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import { AuthProvider } from './context/AuthContext'
//import { ProtectedRoute } from "./ProtectedRoute";
import HomePage from "./pages/HomePage";
import TaskFormPage from "./pages/TaskFormPage";
import LoginPage from "./pages/LoginPage";
import TaskPage from "./pages/TasksPage";
//import ProtectedRoute from './ProtectedRoute'
import ProtectedRoute from './ProtectedRoute';
import { TaskProvider } from './context/TasksContext';
import Navbar from './components/Navbar';
import ProductsPage from './pages/ProductsPage';
import { ProductsProvider } from './context/ProductsContext';
function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        < ProductsProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/tasks" element={<TaskPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/add-task" element={<TaskFormPage />} />
                <Route path="/tasks/:id" element={<TaskFormPage />} />
                <Route path="/profile" element={<h1>Profile</h1>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ProductsProvider>
      </TaskProvider>
    </AuthProvider>
  )
}

export default App