// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import EmployeeComponent from "./components/EmployeeComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout title="Employee List">
              <ListEmployeeComponent />
            </Layout>
          }
        />
        <Route
          path="/add-employee"
          element={
            <Layout title="Add Employee">
              <EmployeeComponent />
            </Layout>
          }
        />
        <Route
          path="/edit-employee/:id"
          element={
            <Layout title="Edit Employee">
              <EmployeeComponent />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
