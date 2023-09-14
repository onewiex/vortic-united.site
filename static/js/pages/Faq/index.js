import './style.scss';
import { useState } from 'react';
import arrowBlack from '../../assets/arrowBlack.svg';

export const Faq = () => {
    const [indexToShow, setIndexToShow] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState('about'); // Add state for selected category

    const toggle = (index) => {
        if (indexToShow.includes(index)) {
            setIndexToShow(indexToShow.filter(itemIndex => itemIndex !== index));
          } else {
            setIndexToShow([...indexToShow, index]);
          }
    }

    const categories = [
        {
            label: 'About Vortic United',
            id: 'about'
        },
        {
            label: 'Deposit / Withdrawals / Transfers',
            id: 'deposit'
        },
        {
            label: 'Packages',
            id: 'packages'
        },
        {
            label: 'Partner Program',
            id: 'partner'
        }
    ]

    const questions = [
        {
            index: 1,
            question: `What's Vortic United all about?`,
            category: 'about',
            answer: (
                <>
                    <p>
                    We want to enable everyone to benefit from our trading ecosystem. It's our vision to see our customers succeed in a growing market with the help of our experts.
                    </p>
                </>
            )
        },
        {
            index: 2,
            question: 'Who is Jensen Robles?',
            category: 'about',
            answer: (
                <>
                    <p>
                    Jensen Robles is our founder who has years of experience in finance and banking, which he converted into the crypto world. His goal is to create an ecosystem that will have an impact on people’s lives and the market as a whole. 
                    </p>
                </>
            )
        },
        {
            index: 3,
            question: 'How long is Vortic United already active?',
            category: 'about',
            answer: (
                <>
                    <p>
                        We launched at the beginning of the new year internationally and we've been active before that as well.
                    </p>
                </>
            )
        },
        {
            index: 4,
            question: 'Does Vortic United have an office?',
            category: 'about',
            answer: (
                <>
                    <p>
                        Yes, our office / headquarters is in turkey, you are welcome to visit us by appointment. For appointments contact the support in the backoffice.
                    </p>
                </>
            )
        },
        {
            index: 5,
            question: 'Where is the company registered?',
            category: 'about',
            answer: (
                <>
                    <p>
                    Our company is registered in the UK.
                    </p>
                </>
            )
        },
        {
            index: 6,
            question: 'What does Vortic United offer?',
            category: 'about',
            answer: (
                <>
                    <p>
                        We offer you to benefit from our trading ecosystem. We use different trading models, analysis methods and institutional grade strategies. 
                    </p>
                </>
            )
        },
        {
            index: 7,
            question: 'Are there any trading results?',
            category: 'about',
            answer: (
                <>
                    <p>
                        Yes, once you create an account you can see for each week the trades made. 
                    </p>
                </>
            )
        },
        {
            index: 8,
            question: 'What are some key benefits of Vortic United?',
            category: 'about',
            answer: (
                <>
                    <p>
                        <ul>
                            <li>Best Results</li>
                            <li>Secure</li> 
                            <li>Simple</li>
                            <li>Full Insight</li>
                            <li>First Class Support</li> 
                            <li>Portfolio Management</li>
                            <li>Lucrative Partner Program</li>
                        </ul>  
                    </p>
                </>
            )
        },
        {
            index: 9,
            question: 'Does Vortic United have an App?',
            category: 'about',
            answer: (
                <>
                    <p>
                    No we don’t have any official app yet, if you downloaded an app from an imposter, please contact the support. 
                    </p>
                </>
            )
        },
        {
            index: 10,
            question: 'Which cryptocurrencies are supported?',
            category: 'deposit',
            answer: (
                <>
                    <p>
                        Currently we accept BTC, ETH and USDT on TRC20 + ERC20 for deposits and withdrawals. 
                    </p>
                </>
            )
        },
        {
            index: 11,
            question: 'Can I also use FIAT?',
            category: 'deposit',
            answer: (
                <>
                    <p>
                    At the moment deposits and withdrawals are only in crypto, once FIAT payments will be implemented, we will announce it. 
                    </p>
                </>
            )
        },
        {
            index: 12,
            question: 'How I can deposit?',
            category: 'deposit',
            answer: (
                <>
                    <p>
                    Just go to the transaction tab and ensure the selected token and network is the same from where you send the funds. Otherwise, your assets could be lost. And make sure to send it within 60 minutes.
                    </p>
                </>
            )
        },
        {
            index: 13,
            question: 'My deposit didn’t arrive, what should I do?',
            category: 'deposit',
            answer: (
                <>
                    <p>
                        Please click the deposit didn’t arrived button and wait for one hour, if the transfer is still not there contact the support.
                    </p>
                </>
            )
        },
        {
            index: 14,
            question: `How often it's possible to make a withdrawal?`,
            category: 'deposit',
            answer: (
                <>
                    <p>
                    You can make a withdrawal anytime; however, a request needs to be made before Sunday 23.59 UTC. Then at the following Monday the withdrawal gets executed and credited within 48hrs to your wallet.
                    </p>
                </>
            )
        },
        {
            index: 15,
            question: 'Where I can setup my withdrawal wallet?',
            category: 'deposit',
            answer: (
                <>
                    <p>
                    You can do that in the profile settings.
                    </p>
                </>
            )
        },
        {
            index: 16,
            question: 'Are there withdrawal fees?',
            category: 'deposit',
            answer: (
                <>
                    <p>
                        Yes, to cover network fees and management costs a 5% withdrawal fee is applied.
                    </p>
                </>
            )
        },
        {
            index: 17,
            question: 'How I can send funds to another user?',
            category: 'deposit',
            answer: (
                <>
                    <p>
                    You can make an internal transfer; this enables you to directly send an amount from your balance to another Vortic United User.
                    </p>
                </>
            )
        },
        {
            index: 18,
            question: 'How do I setup the two authenticator?',
            category: 'deposit',
            answer: (
                <>
                    <p>
                        You can set it up with the Google or Microsoft Authenticator App, just either scan the QR code or paste the secret key into your app.
                    </p>
                </>
            )
        },
        {
            index: 19,
            question: 'Which packages does Vortic United offer?',
            category: 'packages',
            answer: (
                <>
                    <p>
                    We have three packages and one compounding packages. The packages start with rewards from 0.6% up to 1.8% per workday and for the ones which aren't a compounding package you can withdraw each week.
                    </p>
                </>
            )
        },
        {
            index: 20,
            question: 'What is the compounding package?',
            category: 'packages',
            answer: (
                <>
                    <p>
                        As the name already says it's a compounding interest package, it offers the highest rewards.
                    </p>
                </>
            )
        },
        {
            index: 21,
            question: 'Can I have an example calculation for package A?',
            category: 'packages',
            answer: (
                <>
                    <p>
                    A deposit of 50$ in 46 weeks with 0.8% per workday would be 184%, which would generate 92$ and after the package duration is over 80% of the initial deposit gets returned which is 40$. The total amount is 92+40=132$
                    </p>
                </>
            )
        },
        {
            index: 22,
            question: 'Can I have an example calculation for package B?',
            category: 'packages',
            answer: (
                <>
                    <p>
                    A deposit of 2500$ in 40 weeks with 1% per workday would be 200%, which would generate 5000$ and after the package duration is over 80% of the initial deposit gets returned which is 2000$. The total amount is 5000+2000=7000$
                    </p>
                </>
            )
        },
        {
            index: 23,
            question: 'Can I have an example calculation for package C?',
            category: 'packages',
            answer: (
                <>
                    <p>
                    A deposit of 10000$ in 36 weeks with 1.2% per workday would be 216%, which would generate 21600$ and after the package duration is over 80% of the initial deposit gets returned which is 8000$. The total amount is 21600+8000=29600$
                    </p>
                </>
            )
        },
        {
            index: 24,
            question: 'Are the returns guaranteed?',
            category: 'packages',
            answer: (
                <>
                    <p>
                    They aren’t guaranteed, but they’re expectations based on our past experience.
                    </p>
                </>
            )
        },
        {
            index: 25,
            question: 'What happens after the package duration is over?',
            category: 'packages',
            answer: (
                <>
                    <p>
                    Each package has a different duration, once it's expired you will receive back 80% of the initial deposit back.
                    </p>
                </>
            )
        },
        {
            index: 26,
            question: 'On which days is trading?',
            category: 'packages',
            answer: (
                <>
                    <p>
                    Trading is from Monday to Friday so each workday.
                    </p>
                </>
            )
        },
        {
            index: 27,
            question: 'At what time I see my rewards and at what day I can withdraw them?',
            category: 'packages',
            answer: (
                <>
                    <p>
                    Each workday 23.45 UTC you see the rewards on your reward balance and every Saturday 01.00 UTC the rewards will go to your main balance where you can withdraw them.
                    </p>
                </>
            )
        },
        {
            index: 28,
            question: 'Can I reuse my rewards?',
            category: 'packages',
            answer: (
                <>
                    <p>
                    Yes, you can do that with everything which is on your balance, just click on repurchase. Your rewards you can repurchase every week to maximize your gains by compounding the interest you have earned.
                    </p>
                </>
            )
        },
        {
            index: 29,
            question: 'On which days is trading?',
            category: 'packages',
            answer: (
                <>
                    <p>
                    Trading is from Monday to Friday so each workday.
                    </p>
                </>
            )
        },
        {
            index: 30,
            question: 'How can I add funds to an existing package?',
            category: 'packages',
            answer: (
                <>
                    <p>
                    You can just click repurchase after making a deposit, then choose your package and the amount. You can add everything which is on your balance to a package, this also means commissions, bonuses etc.
 
                    </p>
                </>
            )
        },
        {
            index: 31,
            question: 'Is it possible to upgrade a package?',
            category: 'packages',
            answer: (
                <>
                    <p>
                    Yes, you can upgrade a package by repurchasing. So, if you have for example 2000$ in a Plan A package and repurchase 500$ into it, we can upgrade it to a plan B package. Once your package reached the next higher minimum threshold contact the support for an upgrade.
                    </p>
                </>
            )
        },
        {
            index: 32,
            question: 'Can I combine packages to upgrade them?',
            category: 'packages',
            answer: (
                <>
                    <p>
                    No, we can't combine packages in general, it's not possible from a technical standpoint, the only way to upgrade is if a single package reached the next higher minimum threshold.
                    </p>
                </>
            )
        },
        {
            index: 33,
            question: 'How does the partner program of Vortic United work?',
            category: 'partner',
            answer: (
                <>
                    <p>
                    Our partner program enables you to generate a lucrative income by referring partners. We offer direct commissions, daily residual commissions and have ranks with different bonuses.
                    </p>
                </>
            )
        },
        {
            index: 34,
            question: 'How I use my referral link?',
            category: 'partner',
            answer: (
                <>
                    <p>
                    Make sure to copy your referral link with the copy icon, you can find it in the dashboard. After your referral signed up you can see him in your team tab, once you see him the referral can continue to purchase a portfolio. 
                    </p>
                </>
            )
        },
        {
            index: 35,
            question: 'Can I have several accounts?',
            category: 'partner',
            answer: (
                <>
                    <p>
                    It's not allowed that one person has several accounts, only one account per household is allowed. If someone has multiple accounts, they can get blocked, so each account owner needs be able to prove that they comply with the rules, in case when there would be an investigation.
                    </p>
                </>
            )
        },
        {
            index: 36,
            question: `I don't see my referral in my team tab, what should I do?`,
            category: 'partner',
            answer: (
                <>
                    <p>
                    Please contact the support about this matter.
                    </p>
                </>
            )
        },
        {
            index: 37,
            question: 'What are direct commissions?',
            category: 'partner',
            answer: (
                <>
                    <p>
                    If you refer someone which purchases a package you get a commission for the recommendation.
                    </p>
                </>
            )
        },
        {
            index: 38,
            question: 'What are the daily residual commissions?',
            category: 'partner',
            answer: (
                <>
                    <p>
                    Once you reach rank partner you will be able to earn commissions on the profits your referral made on their portfolios.
                    </p>
                </>
            )
        },
        {
            index: 39,
            question: 'How does the bonus system work?',
            category: 'partner',
            answer: (
                <>
                    <p>
                    For every rank there is a bonus, to reach the bonus there are always two requirements: first a specific amount which the user needs to have allocated and second a certain amount of qualified team turnover.
                    </p>
                </>
            )
        },
        {
            index: 40,
            question: 'How the qualified turnover gets counted and where I see my progress?',
            category: 'partner',
            answer: (
                <>
                    <p>
                    The turnover gets counted according to your rank and the different levels; you can see exactly how it gets counted in the presentation. The progress to your next rank is always visible in the ranking tab.
                    </p>
                </>
            )
        },
        {
            index: 41,
            question: 'Where I can find more information about the partner program?',
            category: 'partner',
            answer: (
                <>
                    <p>
                    We have a presentation which you can find in the media center after signing up.
                    </p>
                </>
            )
        },
        {
            index: 42,
            question: 'How can I stay up to date, where will I find the latest news?',
            category: 'partner',
            answer: (
                <>
                    <p>
                    We have a telegram news channel with all the latest information which you can find here: <a href="https://t.me/VorticUnited" target="_blank">https://t.me/VorticUnited</a>
                    </p>
                </>
            )
        },
        {
            index: 43,
            question: 'Where I can contact the support?',
            category: 'partner',
            answer: (
                <>
                    <p>
                    In the back office there is a small pop-up, there you can directly write to the support. Currently the support is available from 9am till 9pm Istanbul time.
                    </p>
                </>
            )
        },

        
    ]

    const filteredQuestions = selectedCategory === 'all' ? questions : questions.filter(question => question.category === selectedCategory);

    return (
        <section className='faq'>
            <div className='faq__first'>
                <div className='wrapper'>
                    <h1>Frequently Asked Questions</h1>
                </div>
            </div>
            <div className="tabs">
                {categories.map(category => (
                    <button
                        key={category.id}
                        className={`${selectedCategory === category.id ? 'full-button' : 'light-button'}`}
                        onClick={() => setSelectedCategory(category.id)}
                    >
                        {category.label}
                    </button>
                ))}
            </div>
            <div className='faq__second'>
                {filteredQuestions.map(item => {
                    return (
                        <div className='faq__second--item'>
                            <div className='faq__second--item--title' onClick={() => toggle(item.index)}>
                                <span>{item.question}</span>
                                <img src={arrowBlack}  className={indexToShow.includes(item.index) ? 'rotate' : ''}/>
                            </div>
                            {(indexToShow.length > 0 && indexToShow.includes(item.index)) && (
                                <div className='faq__second--item--answer'>
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}