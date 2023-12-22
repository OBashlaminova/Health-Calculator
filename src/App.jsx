import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import Error from 'Components/Error/Error';

import BMIPage from 'Pages/BMIPage/BMIPage';
import BMRPage from 'Pages/BMRPage/BMRPage';

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Router>
        <Routes>
          <Route path="/bmi" element={<BMIPage />} />
          <Route path="/bmr" element={<BMRPage />} />
          <Route path="*" element={<Navigate to="/bmi" replace={true} />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}
