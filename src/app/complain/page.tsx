import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Complain() {
  return (
    <div>
      <Header />
      <main>
        <h1>Submit Your Complaint</h1>
        <div className="form-container">
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="complaint">Complaint:</label>
            <textarea id="complaint" name="complaint" rows={4} required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
