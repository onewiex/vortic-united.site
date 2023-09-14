import './style.scss';
import holdingCover from '../../assets/holding.png'
import linesHolding from '../../assets/linesHolding.png'
import AboutUsCover from '../../assets/aboutUsCover.png'
import team1 from '../../assets/team1.png';
import mobileBody from '../../assets/mobileBody.png'

export const AboutUs = () => {

    return (
        <section className='AboutUs'>
            <div className='AboutUs__first'>
                <div className='wrapper'>
                    <h1>About Vortic United</h1>
                    <p>
                    In 2020, an idea was sparked by Jensen Robles, the visionary CEO and founder of Vortic United. He envisioned a platform that would break down barriers and make institutional trading systems accessible to everyone.
                    </p>
                    <p>
                    After months of meticulous planning, Vortic United entered the pre-launch stage in September 2022. With a relentless pursuit of perfection, the team refined the platform to meet the highest standards. The dedication and hard work paid off as Vortic United achieved a significant milestone on December 27, 2022, with its global launch and international expansion. The rapid recognition worldwide quickly propelled the company into the global spotlight.
                    </p>
                    <div className='AboutUs__first--body'>
                        <button className='full-button'>
                            Vortic Holding LTD (UK)
                        </button>
                        <img src={linesHolding} />
                        <img src={holdingCover} />
                    </div>
                    <div className='AboutUs__first--mobileBody'>
                        <img src={mobileBody} />
                    </div>
                </div>
            </div>
            <div className='AboutUs__second'>
                <div className='wrapper'>
                    <h2>Chief Executive Officer</h2>
                    <div className='AboutUs__second--subheader'>
                    Introducing Jensen Robles, CEO and Founder of Vortic United:
                    </div>
                    <img src={AboutUsCover} />
                    <p className='first'>
                    Jensen Robles, the visionary behind Vortic United, brings years of experience in the finance industry and a passion for numbers and data. After studying finance in Berlin and interning at UBS, he honed his skills in trading commodities for Deutsche Bank.
                    </p>
                    <p>
                    Since 2011, Jensen has advised clients on money management and investment strategies, and from 2013, he has focused on applying his expertise to cryptocurrency trading, recognizing its immense potential.
                    </p>
                    <p className='last'>
                    With Vortic United, Jensen aims to create an ecosystem that caters to both institutional and retail users. His vision includes establishing a track record to develop an Exchange Traded Fund (ETF) for institutional customers and providing a platform that connects retail users and traders.
                    </p>
                </div>
            </div>
            {/* <div className='AboutUs__third'>
                <h2>About Advisors</h2>
                <div className='AboutUs__third--content'>
                    <div className='AboutUs__third--content__item'>
                        <img src={team1} />
                        <h3>Firstname Lastnname</h3>
                        <p>Job Title</p>
                        <button className='light-button'>
                            Learn more
                        </button>
                    </div>
                    <div className='AboutUs__third--content__item centerItem'>
                        <img src={team1} />
                        <h3>Firstname Lastnname</h3>
                        <p>Job Title</p>
                        <button className='light-button'>
                            Learn more
                        </button>
                    </div>
                    <div className='AboutUs__third--content__item'>
                        <img src={team1} />
                        <h3>Firstname Lastnname</h3>
                        <p>Job Title</p>
                        <button className='light-button'>
                            Learn more
                        </button>
                    </div>
                </div>
            </div> */}
        </section>
    )
}