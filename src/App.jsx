import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './routes';
import Wrap from './components/layout/Wrap';
import Section from './components/layout/Section';

function NotFound() {
  return (
    <Section>
      <Wrap>
        <h1>Page not found</h1>
        <p>That page does not exist yet.</p>
      </Wrap>
    </Section>
  );
}

export function AppRoutes() {
  return (
    <Routes>
      {ROUTES.map((r) => (
        <Route key={r.path} path={r.path} element={r.element} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
