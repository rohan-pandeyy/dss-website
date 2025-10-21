import { NavbarDemo } from '../components/NavbarDemo';
import Footer from '@/components/Footer';
import Head from 'next/head';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Data Science Society - BU</title>
        <meta name="description" content="Data Science Society - Bennett University" />
      </Head>
      <NavbarDemo />
      <main>{children}</main>
      <Footer />
    </>
  );
}