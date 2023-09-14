import './style.scss';
import framePart from '../../assets/framePart.png'
import technology2 from '../../assets/technology3.png';
import robustIcon from '../../assets/robust.svg';
import communityIcon from '../../assets/community.svg';
import arrowRedIcon from '../../assets/arrowRed.svg';
import resultsIcon from '../../assets/results.svg';
import secureIcon from '../../assets/secure.svg';
import simpleIcon from '../../assets/simple.svg';
import insightIcon from '../../assets/insight.svg';
import supportIcon from '../../assets/support.svg';
import portfolioIcon from '../../assets/portfolio.svg';
import earnCover from '../../assets/earnCover.jpg';
import earnIcon from '../../assets/earnIcon.svg';
import buildIcon from '../../assets/build.svg';
import buildCover from '../../assets/buildCover.jpg';
import enjoyIcon from '../../assets/enjoyIcon.svg';
import enjoyCover from '../../assets/enjoyCover.jpg';

export const Services = () => {

    const goTo = (path) => {
        window.open(path)
    };

    return (
        <section className='Services'>
            <div className='Services__first'>
                <h1>
                Most advanced Orderflow Trading
                </h1>
                <p>
                Our Team can proudly look back on over 8 years of daytrading experience in the crypto markets. We utilize strategies built on real-time market data, ensuring that every trade is based on actual market dynamics rather than assumptions.
                </p>
                <p>
                To maintain long-term profitability, we leverage on-chain metrics in combination with time-proven chart indicators, allowing us to precisely time market tops and bottoms.
                </p>
                <button className='full-button'>
                    Join Now
                </button>
                <img src={technology2} />
            </div>
            <div className='Services__second wrapper'>
                <div className='Services__second--left'>
                    <div className='Services__second--left__img'>
                        <img src={robustIcon} />
                    </div>
                    <h2>Robust Risk Management</h2>
                    <p>Take advantage of sophisticated risk management tools and strategies used by institutional traders. Benefit from Vortic United's disciplined management techniques to minimize drawdowns and protect your crypto.</p>
                </div>
                <div className='Services__second--right'>
                    <div className='Services__second--right__img'>
                        <img src={communityIcon} />
                    </div>
                    <h2>Community and Networking</h2>
                    <p>Join a vibrant community of traders at Vortic United. Engage with like-minded individuals, share ideas, and collaborate to enhance your trading skills. Connect with industry experts through webinars, educational programs, and networking opportunities.</p>
                </div>
            </div>
            <div className='Services__third'>
                <div className='wrapper'>
                    <h2>Our Approach For Customers</h2>
                    <div className='Services__third--content'>
                        <div className='Services__third--content__left'>
                            <h3>
                                Retail Users
                            </h3>
                            <p>
                                We believe that everyone should have the opportunity to participate safely with decent returns. That's why we created this smart managed solution. Our 5 managed packages were specially customized for retail users. Have a look at them and find out which one fits best to you.
                            </p>
                        </div>
                        <div className='Services__third--content__center'>
                            <div className='Services__third--content__center--top'>
                                <img src={arrowRedIcon} className='arrowLeft' />
                                <div className='redDot'>
                                    <span />
                                </div>
                                <img src={arrowRedIcon}className='arrowRight' />
                            </div>
                            <div className='Services__third--content__center--bottom'>
                                <div className='whiteLine' />
                            </div>
                        </div>
                        <div className='Services__third--content__right'>
                            <h3>
                            Professional Customers
                            </h3>
                            <p>
                            Looking for a safe and effective way to get a larger amount managed? Then we may have an unique opportunity for you. For professional and institutional customers with a higher budget we offer special condition accounts. Contact us now to see if you're eligible.
                            </p>
                        </div>
                    </div>
                    <button className='full-button'>
                        Join Us
                    </button>
                </div>
            </div>
            <div className='Services__fourth'>
                <div className='wrapper'>
                    <h2>Earn crypto the smart way</h2>
                    <div className='Services__fourth--subheader'>Profit from an industry leading and highly sophisticated orderflow trading system</div>
                    <div className='Services__fourth--body'>
                        <div className='Services__fourth--body__row first'>
                            <div className='Services__fourth--body__row--item'>
                                <div className='Services__fourth--body__row--item__left'>
                                    <img src={resultsIcon} />
                                </div>
                                <div className='Services__fourth--body__row--item__right'>
                                    <div className='Services__fourth--body__row--item__right--header'>
                                        Best Results
                                    </div>
                                    <p>
                                    Next generation cryptocurrency Trading to steadily grow your wealth
                                    </p>
                                </div>
                            </div>
                            <div className='Services__fourth--body__row--item'>
                                <div className='Services__fourth--body__row--item__left'>
                                    <img src={secureIcon} />
                                </div>
                                <div className='Services__fourth--body__row--item__right'>
                                    <div className='Services__fourth--body__row--item__right--header'>
                                        Secure
                                    </div>
                                    <p>
                                    Secure multisignature cold storage vault to save deposits
                                    </p>
                                </div>
                            </div>
                            <div className='Services__fourth--body__row--item'>
                                <div className='Services__fourth--body__row--item__left'>
                                    <img src={simpleIcon} />
                                </div>
                                <div className='Services__fourth--body__row--item__right'>
                                    <div className='Services__fourth--body__row--item__right--header'>
                                    Simple
                                    </div>
                                    <p>
                                    Easy to use and beginner friendly user interface
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='Services__fourth--body__row'>
                            <div className='Services__fourth--body__row--item'>
                                <div className='Services__fourth--body__row--item__left'>
                                    <img src={insightIcon} />
                                </div>
                                <div className='Services__fourth--body__row--item__right'>
                                    <div className='Services__fourth--body__row--item__right--header'>
                                    Full Insight
                                    </div>
                                    <p>
                                    Regular trading reports to give you full insights
                                    </p>
                                </div>
                            </div>
                            <div className='Services__fourth--body__row--item'>
                                <div className='Services__fourth--body__row--item__left'>
                                    <img src={supportIcon} />
                                </div>
                                <div className='Services__fourth--body__row--item__right'>
                                    <div className='Services__fourth--body__row--item__right--header'>
                                    First Class Customer Support
                                    </div>
                                    <p>
                                    Our fast and reliable Support team is always here to help you
                                    </p>
                                </div>
                            </div>
                            <div className='Services__fourth--body__row--item'>
                                <div className='Services__fourth--body__row--item__left'>
                                    <img src={portfolioIcon} />
                                </div>
                                <div className='Services__fourth--body__row--item__right'>
                                    <div className='Services__fourth--body__row--item__right--header'>
                                    Portfolio Management
                                    </div>
                                    <p>
                                    Stop worrying about portfolio management. We do the Trading work for you
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Services__fifth wrapper' id="partnership">
                <h2>
                    Partnership Program
                </h2>
                <div className='Services__fifth--cards'>
                    <div className='Services__fifth--cards__item first'>
                        <img src={earnCover} className='Services__fifth--cards__item--cover' />
                        <div className='Services__fifth--cards__item--icon'>
                            <img src={earnIcon}  />
                        </div>
                        <h3>Earn Direct Commissions</h3>
                        <p>
                            With our affiliate program, you have the opportunity to earn direct commissions for every referral you bring to Vortic United. Receive a generous commission for each successful sale generated through your unique affiliate link. The more referrals you bring in, the more you can earn!
                        </p>
                    </div>
                    <div className='Services__fifth--cards__item middle'>
                        <img src={buildCover} className='Services__fifth--cards__item--cover' />
                        <div className='Services__fifth--cards__item--icon'>
                            <img src={buildIcon}  />
                        </div>
                        <h3>Build a passive income</h3>
                        <p>
                          By referring others to our platform, you can build a passive income stream with daily residual incomes. Enjoy the benefits of recurring commissions as your referred members continue to engage with our services and generate revenue.
                        </p>
                    </div>
                    <div className='Services__fifth--cards__item last'>
                        <img src={enjoyCover} className='Services__fifth--cards__item--cover' />
                        <div className='Services__fifth--cards__item--icon'>
                            <img src={enjoyIcon}  />
                        </div>
                        <h3>Enjoy Rank Rewards</h3>
                        <p>
                        As you progress and excel in our affiliate program, we recognize and reward your achievements. Reach higher ranks based on the number of referrals or sales you generate, and unlock exciting rewards, bonuses, and incentives along the way.
                        </p>
                    </div>
                </div>
                <button className='full-button'>
                    < a href="/Presentation.pptx" download>Download PDF</a>
                </button>
            </div>
        </section>
    )
}