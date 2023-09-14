import './style.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const Technology = () => {
    const goTo = (path) => {
        window.open(path)
    };

    return (
        <section className='Technology'>
            <div className='Technology__first'>
                <div className='wrapper'>
                    <h1>
                        The Art of Orderflow Trading
                    </h1>
                    <p>
                    Diving deep into real-world data and analyzing supply & demand dynamics, we unveil the hidden insights of the market. Our dynamic and real-time approach allows us to see the market evolving, identify who's in control, and make informed trading decisions based on facts and figures.
                    </p>
                    <button className='full-button' onClick={() => goTo('https://app.vortic-united.com/')}>
                        Join now
                    </button>
                </div>
            </div>
            <div className='Technology__second'>
                <div className='wrapper'>
                    <h2>Fusion of Technical Analysis & On-Chain Indicators</h2>
                    <div className='Technology__second--slider'>
                        <Carousel>
                       <div>
                       <div className='Technology__second--slider__item bg1'>
                            <div className='Technology__second--slider__item--header'>Blockchain and Market Sentiment Indicators</div>
                            <div className='Technology__second--slider__item--list'>
                                <div className='Technology__second--slider__item--list__item'>
                                    <div className='Technology__second--slider__item--list__item--header'>On-Chain Indicators</div>
                                    <div className='Technology__second--slider__item--list__item--body'>
                                        Leverage blockchain data to gain valuable insights into market trends, investor behavior, and the overall health of the cryptocurrency ecosystem.
                                    </div>
                                </div>
                                <div className='Technology__second--slider__item--list__item'>
                                    <div className='Technology__second--slider__item--list__item--header'>NUPL (net unrealized profit/loss)</div>
                                    <div className='Technology__second--slider__item--list__item--body'>
                                    Monitor the unrealized gains or losses of holders of a particular asset, providing valuable information on market sentiment and potential price reversals.
                                    </div>
                                </div>
                                <div className='Technology__second--slider__item--list__item'>
                                    <div className='Technology__second--slider__item--list__item--header'>HODL Wave</div>
                                    <div className='Technology__second--slider__item--list__item--body'>
                                    Track the movement of long-term holders and identify periods of accumulation or distribution, aiding in predicting market cycles and potential breakouts.
                                    </div>
                                </div>
                                <div className='Technology__second--slider__item--list__item'>
                                    <div className='Technology__second--slider__item--list__item--header'>MVRV-Z Score</div>
                                    <div className='Technology__second--slider__item--list__item--body'>
                                    Evaluate the market value to realized value ratio and assess the potential for overbought or oversold conditions, helping you make informed investment decisions.
                                    </div>
                                </div>
                            </div>
                        </div>
                       </div>
                       <div>
                       <div className='Technology__second--slider__item bg2'>
                            <div className='Technology__second--slider__item--header'>Orderflow Indicators</div>
                            <div className='Technology__second--slider__item--list'>
                                <div className='Technology__second--slider__item--list__item'>
                                    <div className='Technology__second--slider__item--list__item--header'>Orderflow Basics</div>
                                    <div className='Technology__second--slider__item--list__item--body'>
                                    Gain insights into the flow of orders in the market and understand the dynamics between buyers and sellers.</div>
                                </div>
                                <div className='Technology__second--slider__item--list__item'>
                                    <div className='Technology__second--slider__item--list__item--header'>Orderflow Trading Heatmap</div>
                                    <div className='Technology__second--slider__item--list__item--body'>
                                    Visualize market activity in real-time, identify areas of high interest, and make informed trading decisions based on order flow data.</div>
                                </div>
                            </div>
                        </div>
                       </div>
                       <div>
                       <div className='Technology__second--slider__item bg3'>
                            <div className='Technology__second--slider__item--header'>Volume Analysis Indicators</div>
                            <div className='Technology__second--slider__item--list'>
                                <div className='Technology__second--slider__item--list__item'>
                                    <div className='Technology__second--slider__item--list__item--header'>Volume Profiling</div>
                                    <div className='Technology__second--slider__item--list__item--body'>
                                    Uncover significant price levels based on trading volume, enabling you to identify key support and resistance zones.</div>
                                </div>
                                <div className='Technology__second--slider__item--list__item'>
                                    <div className='Technology__second--slider__item--list__item--header'>Volume Footprint Chart</div>
                                    <div className='Technology__second--slider__item--list__item--body'>
                                    Dive deeper into volume analysis with this charting tool, which displays volume at different price levels to reveal hidden patterns and trends.</div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className='Technology__second--slider__item bg4'>
                            <div className='Technology__second--slider__item--header'>Price and Market Analysis Indicators</div>
                            <div className='Technology__second--slider__item--list'>
                                <div className='Technology__second--slider__item--list__item'>
                                    <div className='Technology__second--slider__item--list__item--header'>VWAP Indicator</div>
                                    <div className='Technology__second--slider__item--list__item--body'>
                                    Utilize the Volume Weighted Average Price to gauge the average price at which an asset has traded throughout the day, helping you assess the market sentiment.</div>
                                </div>
                                <div className='Technology__second--slider__item--list__item'>
                                    <div className='Technology__second--slider__item--list__item--header'>Orderbook Indicators</div>
                                    <div className='Technology__second--slider__item--list__item--body'>
                                    Analyze the depth and liquidity of the order book to anticipate market movements and spot potential buying or selling opportunities.</div>
                                </div>
                            </div>
                        </div>
                       </div>
                        </Carousel>
                    </div>
                    <button className='full-button'  onClick={() => goTo('https://vortic-united.com/media/vortic_rescent_q7tXh2m.pdf')}>
                    Download PDF
                    </button>
                </div>
            </div>
            <div className='Technology__third' />
            <div className='Technology__fourth wrapper'>
                <h2>Advanced Execution, Simplified</h2>
                <p>
                We understand the challenges of trading across multiple accounts and exchanges, especially when faced with margin limits. That's why we have developed our own cutting-edge analysis and execution tool specially designed to address this issue, enabling us to trade on different accounts and exchanges effortlessly.
                </p>
            </div>
        </section>
    )
}