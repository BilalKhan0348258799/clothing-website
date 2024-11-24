import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import aboutImage from '../images/about.jpg';

export default function About() {
  return (
    <div>
      <Header />
      <main>
        <Image src={aboutImage} alt="About Us" />
        <h1>About Us</h1>
        <p>At Our Clothing Store, we believe in quality, style, and affordability.</p>
      </main>
      <Footer />
    </div>
  );
}
