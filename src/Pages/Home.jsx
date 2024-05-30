import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import illustration from '../assets/Illustration.png';
import find2 from '../assets/find2.png';
import passport2 from '../assets/passport2.png';
import diploma2 from '../assets/diploma2.png';
import './Home.css';

function Home() {
  return (
    <>
      <section className="hero">
        <Carousel>
          <Carousel.Item>
            <img src={illustration} alt="img" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={illustration} alt="" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={illustration} alt="" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="working container">
        <div className="cardContainer my-5 py-5 gap-5 d-flex justify-content-evenly">
          <div className="d-flex align-items-center gap-2 px-3 shadow rounded ">
            <img src={find2} height="60" alt="card 1" />
            <div>
              <h5 className="cardheading">Courses for you</h5>
              <p className="cardtext">
                We will take you to the courses that are perfect for you. All
                you have to do is send your applications and look up to your
                dream course.
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center gap-2 p-3 shadow rounded">
            <img src={passport2} height="60" alt="card 1" />
            <div>
              <h5 className="cardheading">Get your visa</h5>
              <p className="cardtext">
                The procedures of visas might be tiring. We will be there to
                assist you from arranging a mockup interview to getting an
                actual one and more.
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center gap-2 px-3 shadow rounded ">
            <img src={diploma2} height="60" alt="card 1" />
            <div>
              <h5 className="cardheading">Scholarships</h5>
              <p className="cardtext">
                Get the right scholarship you deserve. We will take you to the
                immense opportunities of scholarship for a brighter future.
              </p>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-6">
            <iframe
              className="rounded"
              width="100%"
              src="https://www.youtube.com/embed/QfBasFOvhyI?si=K2p-xNIyHlceG6e3"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-6 gap-2 py-4 px-5 shadow rounded card1">
            <div className="d-flex">
              <div className="shape"></div>
              <h5 className="fs-4">How it works</h5>
            </div>
            <p>
              Raw Scholar is available to all students who wish to study abroad.
              Raw scholar is India’s 1st all inclusive platform in India
              designed to guide students in their college application process to
              universities and colleges abroad. Raw scholar is not our name. Its
              the name given to all the students is alumni of Raw scholar. You
              became a Raw scholar from the moment you entered this platform
            </p>
            <a href="/" style={{ color: '#067bc2', textDecoration: 'none' }}>
              Know more →
            </a>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="countriesContainer container">
          <div className="titleBar d-flex">
            <div className="shape"></div>
            <h2 className="fs-4 ms-4">Major Countries</h2>
            <a href="/" className="ms-auto py-2 px-3 shadow titleTag">
              View all 50+ countries
            </a>
          </div>
          <div className="countriesList d-flex text-center justify-content-evenly">
            <div>
              <img
                src="https://cdn.britannica.com/82/2982-050-4A783E03/flag-prototype-Netherlands-countries-European-flags.jpg"
                alt=""
                width="200"
                className="rounded"
              />
              <p>Name</p>
            </div>
            <div>
              <img
                src="https://cdn.britannica.com/82/2982-050-4A783E03/flag-prototype-Netherlands-countries-European-flags.jpg"
                alt=""
                width="200"
                className="rounded"
              />
              <p>Name</p>
            </div>
            <div>
              <img
                src="https://cdn.britannica.com/82/2982-050-4A783E03/flag-prototype-Netherlands-countries-European-flags.jpg"
                alt=""
                width="200"
                className="rounded"
              />
              <p>Name</p>
            </div>
            <div>
              <img
                src="https://cdn.britannica.com/82/2982-050-4A783E03/flag-prototype-Netherlands-countries-European-flags.jpg"
                alt=""
                width="200"
                className="rounded"
              />
              <p>Name</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
