import { NavbarDemo } from '../components/NavbarDemo';
import Footer from '@/components/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarDemo />
      <main>{children}</main>
      <Footer />
    </>
  );
}