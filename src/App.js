import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Work from './pages/Work';
import Projects from './pages/Projects';
import Latin from './pages/Latin';
import EducationAndSkills from './pages/EducationAndSkills';
import LoadingPage from './pages/LoadingPage';

/**
 * App constructor for this site.
 * @returns website app
 */
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path={'/'} element={<LoadingPage />} />
          <Route exact path={'/home'} element={<Home />} />
          <Route exact path={'/work-experience'} element={<Work />} />
          <Route
            exact
            path={'/education-and-skills'}
            element={<EducationAndSkills />}
          />
          <Route exact path={'/projects'} element={<Projects />} />
          <Route exact path={'/latin-translations'} element={<Latin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
