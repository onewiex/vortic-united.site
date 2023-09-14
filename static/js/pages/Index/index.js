import './style.scss';
import howworksImg from '../../assets/howworks.png'
import technology1 from '../../assets/technology1.png';
import technology2 from '../../assets/frame.png';
import teamImg from '../../assets/teamImg.jpg'
import card1 from '../../assets/card1.jpg';
import card2 from '../../assets/card2.jpg';
import card3 from '../../assets/card3.jpg';
import chartingImg from '../../assets/charting.jpg'
import { useNavigate } from 'react-router-dom';

export const Index = () => {
    const navigate = useNavigate();

    const goTo = (path) => {
        if (path.includes('http')) {
          window.location = path
        } else {
            window.scrollTo(0, 0)
            navigate(path);
        }
      };

  return (
    <section className="Index">
        <div className='Index__first'>
            <div className='wrapper flex-wrapper h100'>
                <div className='Index__first--left'>
                    <div className='Index__first--left__title'>Unlock the Power of Institutional Trading Systems</div>
                    <p>We make institutional grade trading systems accessible to everyone</p>
                    <button className='full-button' onClick={() => goTo('https://app.vortic-united.com/')}>Start Now</button>
                </div>
                <div className='Index__first--right'>
                <iframe src="https://player.vimeo.com/video/570845600?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" style={{width: '100%', height: '350px'}} title="Vortic_Ver1.mp4"></iframe>
                    {/* <img src={howworksImg} /> */}

                    <div className='howItWorks'>
                        Learn how it works
                    </div>
                </div>
            </div>
        </div>
        <div className='Index__second wrapper'>
            <h1>Explore the Tools Driving our Success</h1>
            <div className='Index__second--orderflow'>
                <div className='Index__second--orderflow__left'>
                    <img />
                    <h2>
                        Thriving with Orderflow Intelligence
                    </h2>
                    <p>
                    Ignite the power of Vortic United's revolutionary trading technology, harnessing orderflow insights, merging technical analysis, and executing trades with precision. Experience a new level of trading expertise as we handle your trades, providing you with a distinct advantage.
                    </p>
                    <button className='light-button' onClick={() => goTo('/technology')}>
                        Learn More
                    </button>
                </div>
                <div className='Index__second--orderflow__right'>
                    <img src={technology1} className='imgPlaceholder' />
                </div>
            </div>
            <div className='Index__second--automating'>
                <div className='Index__second--automating__left'>
                    <img src={technology2} className='imgPlaceholder' />
                </div>
                <div className='Index__second--automating__right'>
                    <img />
                    <h2>
                        Automating Success
                    </h2>
                    <p>
                        Our specially customized managed packages are created with the needs of both retail and professional customers in mind, providing secure and lucrative possibilities. Explore our opportunities to find the perfect fit for your wealth-building goals. Experience the power of automated portfolio management and achieve financial success with Vortic United.
                    </p>
                </div>
            </div>
            <button className='full-button' onClick={() => goTo('/services')}>Learn More</button>
        </div>
        <div className='Index__third'>
            <div className='wrapper'>
                <h1>Bringing Wall Street Technologies to Main Street</h1>
                <div className='note'>Join us now and transform your approach to trading with our state-of-the-art technology.</div>
                <div className='Index__third--content'>
                    <div className='Index__third--content__left'>
                        <h2>Partnership</h2>
                        <p>
                        Collaborate with Vortic United to earn attractive commissions by referring clients to our platform. Our partnership program provides you with the opportunity to monetize your network and maximize your earning potential.
                        </p>
                        <button className='light-button' onClick={() => goTo('/services#partnership')}>
                        Learn More
                        </button>
                    </div>
                    <div className='Index__third--content__right'>
                        <img src={teamImg} />
                    </div>
                </div>
            </div>
        </div>
        <div className='Index__fourth'>
            <div className='wrapper'>
                <h1>
                    Discover Vortic United
                </h1>
                <div className='Index__fourth--cards'>
                    <div className='Index__fourth--cards__item'>
                        <img src={card1} />
                        <h2>
                            Company
                        </h2>
                        <p>
                        Vortic United rapidly reshapes fintech, empowering individuals in the crypto markets to seize opportunities and achieve financial growth through inclusive institutional trading.
                        </p>
                    </div>
                    <div className='Index__fourth--cards__item'>
                        <img src={card2} />
                        <h2>
                            CEO & Founder 
                        </h2>
                        <p style={{fontStyle: 'italic'}}>
                            The secret of success is to do the common thing uncommonly well. 
                        </p>
                        <div style={{marginLeft: 'auto', color: '#fff', fontStyle: 'italic'}}>
                            - Jensen Robles
                        </div>
                    </div>
                    <div className='Index__fourth--cards__item'>
                        <img src={card3} />
                        <h2>
                        Advisors
                        </h2>
                        <p>
                        Meet our team of exceptional advisors who bring a wealth of knowledge and experience to our platform.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='Index__fifth wrapper'>
            <div className='Index__fifth--content'>
                <div className='Index__fifth--content__left'>
                    <img src={chartingImg} />
                </div>
                <div className='Index__fifth--content__right'>
                    <h2>
                        Charting a New Course
                    </h2>
                    <p>
                        Through our innovative approach, we are paving the way for a new standard of trading access. By providing reliable and user-friendly platforms, tools, and resources, we empower individuals to navigate the complexities of the crypto market with confidence. Our community members have the opportunity to seize unique prospects and make a significant impact on the crypto market.
                    </p>
                    <button className='light-button' onClick={() => goTo('/vision')}>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Index;
