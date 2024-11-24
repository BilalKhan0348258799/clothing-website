import Header from './components/Header';
import Footer from './components/Footer';
import Image from 'next/image';
import heroImage from './images/hero.jpg';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Image src={heroImage} alt="Hero Image" priority />
        <h1>Welcome to Our Clothing Store!</h1>
        <p>Discover the latest trends and timeless styles.</p>
        <button>Shop Now</button>
      </main>
      <Footer />
    </div>
  );
}

