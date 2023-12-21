import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import Error from 'Components/Error/Error';

import BMIPage from 'Pages/BMIPage/BMIPage';
import NotFoundPage from 'Pages/NotFoundPage/NotFoundPage';

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Router>
        <Routes>
          {/* <Route path="/" element={< />} /> */}
          <Route path="/bmi" element={<BMIPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}
