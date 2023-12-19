import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import Error from 'Components/Error/Error';

import HomePage from 'Pages/HomePage/HomePage';
import NotFoundPage from 'Pages/NotFoundPage/NotFoundPage';

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}
