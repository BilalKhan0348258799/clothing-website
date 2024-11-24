import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import bookImage from '../images/book.jpg';

export default function BookNow() {
  return (
    <div>
      <Header />
      <main>
        <Image src={bookImage} alt="Book Now" />
        <h1>Book Your Appointment</h1>
        <div className="form-container">
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="date">Preferred Date:</label>
            <input type="date" id="date" name="date" required />

            <button type="submit">Book Now</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
