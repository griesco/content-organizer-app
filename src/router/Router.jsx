import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RootLayout } from "../components/layouts";
import { Cursos, Curso } from "../pages";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/cursos" />} />

        <Route
          path="/cursos"
          element={
            <RootLayout>
              <Cursos />
            </RootLayout>
          }
        />

        <Route
          path="/curso/:id"
          element={
            <RootLayout>
              <Curso />
            </RootLayout>
          } />

        <Route path="/*" element={<Navigate to="/cursos" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;