import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Product from './product/Product';
import NotFound from './notFound/NotFound';
import Success from './success/Success';
import Pending from './pending/Pending';
import Failure from './failure/Failure';

function PageRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Product />} />
        <Route exact path="/success" element={<Success />} />
        <Route exact path="/failure" element={<Failure />} />
        <Route exact path="/pending" element={<Pending />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRoutes;
