import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { Suspense } from 'react';
import { ThreeDots } from 'react-loader-spinner';

export const Layout = () => {
  return (
    <>
      <Navigation />
      <Suspense
        fallback={
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="black"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
