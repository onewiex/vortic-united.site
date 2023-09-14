import './App.scss';
import logoImg from './assets/logo.svg'
import { RoutesList } from './routes';
import { useNavigate, useLocation } from 'react-router-dom';
import facebookIcon from './assets/facebook.svg';
import telegramIcon from './assets/telegram.png';
import youtubeIcon from './assets/youtube.svg';
import burgerIcon from './assets/burger.svg';
import { useState } from 'react'
import Modal from 'react-modal'
import React, { useEffect } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '380px',
  },
};

Modal.setAppElement('#root');

function App() {
  const navigate = useNavigate();
  const [showMenu, toggleMenu] = useState(false);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleToggleMenu = () => {
    toggleMenu(!showMenu)
  }

  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  const goTo = (path) => {
    if (path.includes('http')) {
      window.location = path
    } else {
      toggleMenu(false)
      navigate(path, {});
      window.scrollTo(0, 0)
    }
  };

  useEffect(() => {
    console.log('window cafaafaff')
  }, [window.location])

  const isActiveRoute = (path) => {
    return window.location.pathname.includes(path);
  };

  const isHome = () => {
    return window.location.pathname === '/'
  }

  return (
    <div className={`App ${showMenu ? 'menuOpened' : ''}`}>
      <Modal
        isOpen={modalIsOpen}
c        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div style={{display: 'flex'}}>
            <span style={{fontWeight: 'bold'}}>Disclaimer</span>
            <div onClick={closeModal} style={{width: 'fit-content', marginLeft: 'auto', fontSize: '20px', cursor: 'pointer'}}>✕</div>
        </div>
        <div style={{fontFamily: 'Raleway', lineHeight: '120%', paddingTop: '16px'}}><p>Past performance is not indicative of future results. Results are not guaranteed. Individual results will vary. Using the Vortic United platform is risky, and you should only use crypto you can afford to lose. It is possible to suffer a loss of some or all the crypto. This is not a solicitation to invest. This information is for education purposes only and is not intended to be used as financial advice. It is important to assess your own risk tolerance before attempting to use the platform.</p> 
          <br></br>
          <p>The information shared on this website, social media and videos is for information purposes only. Nothing shared should be considered financial, legal, tax or any other type of advice at all. We are not financial advisors.</p>
        </div>
      </Modal>
      <header className="App-header wrapper desktop">
          <div className='flex-wrapper'>
            <img src={logoImg} onClick={() => goTo('/')} className="pointer" />
            <ul>
              <li onClick={() => goTo('/')} className={isHome() ? 'active' : ''}>Home</li>
              <li onClick={() => goTo('/technology')} className={isActiveRoute('technology') ? 'active' : ''}>Technology</li>
              <li onClick={() => goTo('/services')} className={isActiveRoute('services') ? 'active' : ''}>Services</li>
              <li onClick={() => goTo('/about_us')} className={isActiveRoute('about_us') ? 'active' : ''}>About Us</li>
              <li onClick={() => goTo('/vision')} className={isActiveRoute('vision') ? 'active' : ''}>Vision</li>
              <li onClick={() => goTo('/faq')} className={isActiveRoute('faq') ? 'active' : ''}>FAQ</li>
              <li onClick={() => goTo('/contact_us')} className={isActiveRoute('contact_us') ? 'active' : ''}>Contact Us</li>
            </ul>
          </div>

          <div className='flex-wrapper'>
          <button className='light-button' onClick={() => goTo('https://app.vortic-united.com/')}>
            Log In
          </button>
          <button  className='full-button' onClick={() => goTo('https://app.vortic-united.com/signup')}>
            Sign Up
          </button>
          </div>
      </header>
      <header className="App-header wrapper mobile">
          <div className='flex-wrapper'>
            <img src={logoImg} onClick={() => goTo('/')} className="pointer" />
          </div>

          <div className='flex-wrapper'>
            <button  className='full-button' onClick={() => goTo('https://app.vortic-united.com/signup')}>
              Sign Up
            </button>
            <img src={burgerIcon} className="burgerIcon" onClick={()=>handleToggleMenu()} />
          </div>
          {
            showMenu && (
              <div className='burgerMenu'>
                <ul>
                  <li onClick={() => goTo('/')} className={isHome() ? 'active' : ''}>Home</li>
                  <li onClick={() => goTo('/technology')} className={isActiveRoute('technology') ? 'active' : ''}>Technology</li>
                  <li onClick={() => goTo('/services')} className={isActiveRoute('services') ? 'active' : ''}>Services</li>
                  <li onClick={() => goTo('/about_us')} className={isActiveRoute('about_us') ? 'active' : ''}>About Us</li>
                  <li onClick={() => goTo('/vision')} className={isActiveRoute('vision') ? 'active' : ''}>Vision</li>
                  <li onClick={() => goTo('/faq')} className={isActiveRoute('faq') ? 'active' : ''}>FAQ</li>
                  <li onClick={() => goTo('/contact_us')} className={isActiveRoute('contact_us') ? 'active' : ''}>Contact Us</li>
                </ul>
                <button className='light-button' onClick={() => goTo('https://app.vortic-united.com/')}>
                  Log In
                </button>
              </div>
            )
          }
      </header>
      <RoutesList />
      <footer>
        <div className='partner'>
            <h1>
                Become a partner
            </h1>
            <p>
              Join forces with Vortic United and unleash your potential. Create an account and join our thriving community!
            </p>
            <button className='full-button' onClick={() => goTo('https://app.vortic-united.com/signup')}>
                Sign Up
            </button>
        </div>
        <div className='contacts'>
          <div className='contacts__row'>
            <img src={logoImg} className="logo" />
            <div className='refs'>
              <a onClick={() => goTo('/terms')}>Terms & Conditions</a>
              <a onClick={() => goTo('/privacy')}>Privacy Policy</a>
              <a style={{cursor: 'pointer'}} onClick={openModal}>Disclaimer</a>
            </div>
            <div className='socials'>
              <a className="youtube" href='https://youtube.com/@vorticunitedltd8249' target="_blank">
                <img src={youtubeIcon} />
              </a>
              <a className="telegram" href='https://t.me/VorticUnited' target="_blank">
                <img src={telegramIcon} />
              </a>
              <a className="facebook" href='https://www.facebook.com/vorticunited' target="_blank">
                <img src={facebookIcon} />
              </a>
            </div>
          </div>
          <div className='reserved'>
            2023 © Vortic United. All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
