import "./App.css";
import img1 from "./assets/GettyImages-11967148821.webp";
import img2 from "./assets/Screenshot 2022-12-28 011945.png";

import icon1 from "./assets/e0678ef25486466ba65ef6ad47b559e1.webp";
import icon2 from "./assets/c4392d634a0148fda8b7b2b0ad98293b.webp";
import icon3 from "./assets/icon.png";

import imgRight from "./assets/section right.png";
import imgLeft from "./assets/left image.png";
import imgTop from "./assets/GettyImages-11967148791.webp";

function App() {
  return (
    <div className="app">
      <div className="icons">
        <a href="https://www.twitter.com/">
          <img src={icon2} />
        </a>
        <a href="https://www.facebook.com/">
          <img src={icon1} />
        </a>
      </div>
      <header>
        <div className="container">
          <div className="nav">
            <a href="">
              <span>K. Griffith</span>
            </a>
            <ul>
              <li>
                <a href="#">APPEARANCES</a>
              </li>
              <li>
                <a href="#Appearances">BOOKS</a>
              </li>
              <li>
                <a href="#Praise">NEWS</a>
              </li>
              <li>
                <a href="#About">ABOUT</a>
              </li>
              <li>
                <a href="#">CONTACT</a>
              </li>
            </ul>
          </div>
          <div className="nav-bottom">
            <img src={img1} />
            <div className="nav-author">
              <span>Kayla Griffith</span>
              <p>Award Winning Author</p>
            </div>
          </div>
        </div>
      </header>
      <section id="NewReals">
        <div className="container">
          <div className="left">
            <img src={imgLeft} />
            <h2>The Swan Isle</h2>
            <h2>(2035)</h2>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <span>Order Now</span>
            <ul>
              <li>
                <a href="http://amazon.com" target="_blank">
                  Amazon
                </a>
              </li>
              <li>
                <a href="http://google.com" target="_blank">
                  Google
                </a>
              </li>
              <li>
                <a href="http://ibooks.com" target="_blank">
                  ibooks
                </a>
              </li>
            </ul>
          </div>
          <div className="right">
            <img src={imgRight} />
          </div>
        </div>
      </section>
      <section id="Praise">
        <img src={img2} />
        <div className="container">
          <h2>Praise & Reviews</h2>
          <div className="rows">
            {" "}<div className="box">
              <img src={icon3} />
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <span>
                ‘Swan Isle’ is Griffith's best writing yet” The Times Book
                Review
              </span>
            </div>
            <div className="box">
              <img src={icon3} />
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <span>
                ‘Swan Isle’ is Griffith's best writing yet” The Times Book
                Review
              </span>
            </div>
            <div className="box">
              <img src={icon3} />
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <span>
                ‘Swan Isle’ is Griffith's best writing yet” The Times Book
                Review
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="Appearances">
        <div className="container">
          <div className="title">
            <h2>See Upcoming Appearances</h2>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It's
              easy.
            </p>
          </div>
          <div className="content">
            <h3>
              January 18th 2035, The Breakfast Club, Virtual Book Reading of
              Swan Isle, 7PM - 8PM EST
            </h3>
            <a className="join" href="http://ibooks.com" target="_blank">
              Join
            </a>
          </div>
          <div className="content">
            <h3>
              January 31st 2035, The Good Read Club, Online Conversation with
              Kayla Griffith, 8PM - 9PM EST
            </h3>
            <a className="join" href="http://ibooks.com" target="_blank">
              Join
            </a>
          </div>
          <div className="content">
            <h3>
              March 2nd 2035, Otto Cafe, Online Book Reading With Kayla
              Griffith, 3PM - 4PM EST
            </h3>
            <a className="join" href="http://ibooks.com" target="_blank">
              Join
            </a>
          </div>
        </div>
      </section>
      <section id="About">
        <div className="container">
          <img src={img2} />
          <div className="top">
            <img src={imgTop} />
          </div>
          <div className="content">
            <h2>About Kayla Griffith</h2>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <a className="read" href="#About" target="_blank">
              Read More
            </a>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <p>
            © 2035 by K.Griffith. Powered and secured by{" "}
            <a href="http://www.wix.com" target="_blank">Wix</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
