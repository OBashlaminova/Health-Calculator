import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <span>Page Not Found</span>
      <Link to="/">Back to main page</Link>
    </div>
  );
}

export default NotFoundPage;
