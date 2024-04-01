import { useState } from 'react'
import { HorizontalTicker } from "react-infinite-ticker";
import './App.css'
import Tilt from "react-parallax-tilt";

function App() {
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  return (
    <main className='body'>
      <div className='header'>
        <div className='header2'>
          <div className='logo'>DeDe</div>
          <div className='inner-header'>
            <a href='#about'>
              <div className='item'>About</div>
            </a>
            <a href='#token'>
              <div className='item'>Tokenomics</div>
            </a>
            <a href='#faq'>
              <div className='item'>FAQ</div>
            </a>
          </div>
        </div>

        <div className='social'>
          <a
            href="https://t.me/+2qrutK9zbbY4ODBk"
            target="_blank"
            style={{ color: "white", cursor: "pointer" }}
            rel="noreferrer"
          >
            <img src="./telegram.svg" className='social-item' alt="ref" />
          </a>

          <a
            href="https://x.com/DedeOnBase_?t=g6eOWwBaSkGdVi3grtH3bQ&s=09"
            target="_blank"
            style={{ color: "white", cursor: "pointer" }}
            rel="noreferrer"
          >
            <img
              src="./twitter.svg"
              className="social-item"
              alt="ref"
            />
          </a>
        </div>
      </div>

      <section id="about" className='section1'>
        <div>
          <img className='pdede' src='./dede2.jpg' alt='dede' />
        </div>
        <div className='box'>
          <div className='box-text1'>D<span>e</span>D<span>e</span></div>
          <div className='box-text11'>The PePe Killer</div>
          <div className='box-text2'>
            DeDe is the PePe Killer on the Base network.
          </div>

          <div className='buy'>
            <button>
              Buy $DeDe
            </button>
            <div className='soc'>
              <a
                href="https://t.me/+2qrutK9zbbY4ODBk"
                target="_blank"
                style={{ color: "white", cursor: "pointer" }}
                rel="noreferrer"
              >
                <img src="./telegram.svg" className='social-item' alt="ref" />
              </a>

              <a
                href="https://x.com/DedeOnBase_?t=g6eOWwBaSkGdVi3grtH3bQ&s=09"
                target="_blank"
                style={{ color: "white", cursor: "pointer" }}
                rel="noreferrer"
              >
                <img
                  src="./twitter.svg"
                  className="social-item"
                  alt="ref"
                />
              </a>
            </div>

          </div>

        </div>

      </section>

      <div style={{ backgroundColor: "white", paddingTop: "20px", paddingBottom: "20px" }}>
        <HorizontalTicker easing="linear" duration={25000}>
          <div className='dede'>
            $DeDe The PePe Killer
          </div>

          <div className='dede'>
            $DeDe The PePe Killer
          </div>

        </HorizontalTicker>
      </div>


      <section className='section2'>
        <div>
          <img className='pepe' src='./pepe.jpg' alt='dede' />
        </div>

        <div className='section2-box'>
          <div className='text1'>About Us</div>

          <div className='text2'>$DeDe on Base</div>

          <div className='text3'>
            The bears waited so long for $16k... DeDe is here to bail you out. Still waiting for a dip to $10k
            on btc Capo? Forget about it.
          </div>
        </div>

      </section>

      <section id="token" className='section3'>
        <div className='text4'>DeDeNomics</div>

        <div className='cardlist'>
          <Tilt>
            <div className='card'>
              <img className='img' src='./tax.jpg' alt='dede' />
              <div className='text6'>TAXES</div>
              <div className='text6'>0/0</div>
            </div>
          </Tilt>
          <Tilt>
            <div className='card'>
              <img className='img' src='./supply.jpg' alt='dede' />
              <div className='text6'>SUPPLY</div>
              <div className='text6'>10 MILLION</div>
            </div>
          </Tilt>

          <Tilt>
            <div className='card'>
              <img className='img' src='./pepe.jpg' alt='dede' />
              <div className='text6'>LIQUIDITY</div>
              <div className='text6'>BURNED</div>
            </div>
          </Tilt>

          <Tilt>
            <div className='card'>
              <img className='img' src='./revoked.jpg' alt='dede' />
              <div className='text6'>MINT & FREEZE</div>
              <div className='text6'>REVOKED</div>
            </div>
          </Tilt>

        </div>
      </section>

      <section id="faq" className='section4'>
        <div className='text4'>FAQ</div>

        <div>
          <div className="faqbox">
            <div className="faq-inner">
              <div className="text9">Who is DeDe?</div>
              {faq1 === true ? (
                <img
                  onClick={() => setFaq1(!faq1)}
                  src="./minus.svg"
                  alt="remove"
                />
              ) : (
                <img
                  onClick={() => setFaq1(!faq1)}
                  src="./add.svg"
                  alt="add"
                />
              )}
            </div>
            {faq1 === true ? (
              <div className="text7">
                DeDe is the One who killed Pepe and has a potential to make you more money than Pepe
              </div>
            ) : null}
          </div>

          <div className="faqbox">
            <div className="faq-inner">
              <div className="text9">What chain is $DeDe on?</div>
              {faq2 === true ? (
                <img
                  onClick={() => setFaq2(!faq2)}
                  src="./minus.svg"
                  alt="remove"
                />
              ) : (
                <img
                  onClick={() => setFaq2(!faq2)}
                  src="./add.svg"
                  alt="add"
                />
              )}
            </div>
            {faq2 === true ? (
              <div className="text7">
                DeDe is born on the Base Blockchain
              </div>
            ) : null}
          </div>



          <div className="faqbox">
            <div className="faq-inner">
              <div className="text9">When Moon?</div>
              {faq3 === true ? (
                <img
                  onClick={() => setFaq3(!faq3)}
                  src="./minus.svg"
                  alt="remove"
                />
              ) : (
                <img
                  onClick={() => setFaq3(!faq3)}
                  src="./add.svg"
                  alt="add"
                />
              )}
            </div>
            {faq3 === true ? (
              <div className="text7">
                $DeDe is an experiment. We make no promises. You could either lose your money or make a lot. We're here to test the community and have a good time!
              </div>
            ) : null}
          </div>


        </div>
      </section>

      <div className='text8'>Disclaimer: Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.</div>

      <div className='text8'>© 2024 DeDeOnBase • E-mail: dede@gmail.com</div>
    </main>
  )
}

export default App
