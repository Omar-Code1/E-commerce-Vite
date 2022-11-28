import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

type Props = {
  changeSearchProduct: (value: string) => void;
};

const RouterLayout: React.FC<Props> = ({ changeSearchProduct }) => {
  return (
    <>
      <Navbar changeSearchProduct={changeSearchProduct} />
      <Outlet />
    </>
  );
};

export default RouterLayout;
