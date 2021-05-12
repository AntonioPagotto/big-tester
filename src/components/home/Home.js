import './Home.css';
import Header from '../header/Header';
import Form from '../form/Form';
import Footer from '../footer/Footer';

function Home() {
  return (
    <>
      <div className="box bg-1">
        <Header />
        <div className="container">
          <section>
            <div className="carro"></div>
            <Form />
          </section>
        </div>
      </div>
      <div className="box bg-2">
        <div className="container">
          <section>
            <div className="mulher-radio"></div>
            <iframe
              src="https://www.youtube.com/embed/KgD445oJ7sU">
            </iframe>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
