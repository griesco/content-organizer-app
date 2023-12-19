import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/cursos" /> } />
        <Route path="/cursos" element={ <h1>Cursos</h1> } />
        <Route path="/curso/:id" element={ <h1>Curso</h1> } />
        <Route path="/*" element={ <Navigate to="/cursos" /> } />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;