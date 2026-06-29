import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SettingsProvider } from './context/SettingsContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Research from './pages/Research';
import ModulePage from './pages/ModulePage';
import Fun from './pages/Fun';
import Flashcards from './pages/Flashcards';
import Settings from './pages/Settings';
import About from './pages/About';

export default function App() {
  return (
    <SettingsProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="research" element={<Research />} />
            <Route path="research/:moduleId" element={<ModulePage />} />
            <Route path="fun" element={<Fun />} />
            <Route path="fun/flashcards" element={<Flashcards />} />
            <Route path="settings" element={<Settings />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SettingsProvider>
  );
}
