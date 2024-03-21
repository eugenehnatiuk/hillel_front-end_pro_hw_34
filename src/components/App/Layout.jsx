import React, { Suspense } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Leyout = () => {
  return (
    <>
      <Header />
      <main>
        <section className="main-section container">
          <Suspense fallback={<p>Loading...</p>}>
            <Outlet />
          </Suspense>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Leyout;
