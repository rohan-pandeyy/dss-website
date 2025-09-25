import { NavbarDemo } from '../components/NavbarDemo';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarDemo />
      <main>{children}</main>
    </>
  );
}