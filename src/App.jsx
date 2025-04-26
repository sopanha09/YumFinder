import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Ingredients from './views/Ingredients';
import MealsByIngredient from './views/MealsByIngredient';
import MealDetails from './views/MealDetails';
import Login from './auth/views/Login';
import ProtectedRoute from './auth/components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/ingredients"
        element={
          <ProtectedRoute>
            <Ingredients />
          </ProtectedRoute>
        }
      />
      <Route
        path="/ingredient/:ingredient"
        element={
          <ProtectedRoute>
            <MealsByIngredient />
          </ProtectedRoute>
        }
      />
      <Route
        path="/meal/:id"
        element={
          <ProtectedRoute>
            <MealDetails />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
