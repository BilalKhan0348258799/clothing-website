import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/complain">Complain</Link>
        <Link href="/booknow">Book Now</Link>
      </nav>
    </header>
  );
};

export default Header;

