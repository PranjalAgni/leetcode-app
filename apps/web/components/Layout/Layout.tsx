import { ReactElement } from 'react';
import Navbar from '../Navbar/Navbar';

interface LayoutProps {
  children: ReactElement | ReactElement[];
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
