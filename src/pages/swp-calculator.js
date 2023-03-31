import Head from "next/head";
import { useState, useEffect } from "react";
import LineChart from "../Components/RDLineChart.js";
import RelatedCalculators from "../Components/Cagr/RelatedCalculators.js";
//import { PageSEO } from '@/components/SEO';
import MuiRadioButton from "../Components/SWPCustomRadioButton.js";
import InputSlider from "../Components/Cagr/InputSlider.js";
import Heading from "../Components/Cagr/Heading.js";
import Subheading from "../Components/Cagr/Subheading.js";
import CalculatorAndSidePannel from "../Components/Cagr/CalculatorAndSidePannel.js";
import CalculatorWrapper from "../Components/Cagr/CalculatorWrapper.js";
import Calculator from "../Components/Cagr/Calculator.js";
import UnorderedList from "../Components/Cagr/UnorderedList.js";
import InputBoxWrapper from "../Components/Cagr/InputBoxWrapper.js";

import InfoBox from "../Components/Cagr/InfoBox.js";
import style from '../styles/cagrInput.module.scss';

export default function Home() {

    let minInvestment = 1000;
    let maxInvestment = 10000000;
    let stepInvestment = 100;
    let minWithdrawl = 1000;
    let maxWithdrawl = 10000000;
    let stepWithdrawl = 100;
    let minReturnRate = 1;
    let maxReturnRate = 15;
    let stepReturnRate = 0.1;
    let minTimePeriod = 1;
    let maxTimePeriod = 25;

    const [radioValue, setRadioValue] = useState('1');
    const [totalInvestment, setTotalInvestment] = useState(100000);
    const [withdrawal, setWithdrawal] = useState(15000);
    const [returnRate, setReturnRate] = useState(7);
    const [timePeriod, setTimePeriod] = useState(10);
    const [graphPoints, setGraphPoints] = useState([107000, 114490, 122504, 131080, 140255, 150073, 160578, 171819, 183846,
        196715]);
    const [totalAmt, setTotalAmt] = useState(196716);
    const [finalYear, setFinalYear] = useState(3);
    const [dummyTotalInvestment, setDummyTotalInvestment] = useState(100000);
    const [dummyWithdrawl, setDummyWithdrawl] = useState(15000);

    // useEffect(() => {
    //     calculateGraphPoints();
    // }, [estReturns]);

    function calculate() {
        let cumulativeAmt = totalInvestment;
        for (let i = 1; i <= timePeriod * 12; i++) {
            cumulativeAmt -= withdrawal;
            cumulativeAmt += (cumulativeAmt * 1 / 12 * returnRate) / 100;
        }
        setTotalAmt(Math.round(cumulativeAmt));

        cumulativeAmt = totalInvestment;
        let count = 0;
        while (cumulativeAmt >= withdrawal) {
            cumulativeAmt -= withdrawal;
            cumulativeAmt += (cumulativeAmt * 1 / 12 * returnRate) / 100;
            count += 1;
        }
        setFinalYear(count / 12);
        calculateGraphPoints();
        setDummyTotalInvestment(totalInvestment);
        setDummyWithdrawl(withdrawal);
    }



    function calculateGraphPoints() {
        let points = [];
        let cumulativeAmt = totalInvestment;
        points.push(cumulativeAmt);
        for (let i = 1; i <= timePeriod * 12; i++) {
            cumulativeAmt -= withdrawal;
            cumulativeAmt += (cumulativeAmt * 1 / 12 * returnRate) / 100;
            if (i % 12 == 0) {
                points.push(cumulativeAmt);
            }
        }
        setGraphPoints(points);
    }


    return (
        <div className={"app—bg—container overflow—hidden"}>

            {/* <PageSEO title={'RD Calculator - Recurring Deposit Calculator Online - FundsIndia'}
            description={"Estimate the interest rate and maturity value of your recurring deposit by using our RD calculator online."} /> */}
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    rel="stylesheet"
                    as="font"
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&amp&text=abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789./*+-%(){}:[]?%27%22%2C|;display=swap"
                />
                <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            </Head>
            <div
                className={
                    "bg-bg_image w-full h-full bg-center bg-cover object-cover fixed"
                }
            />

            <main
                className={style.main +
                    " relative overflow-hidden [@media(max-width:400px)]:px-[16px] [@media(max-width:1280px)]:px-[40px] xl:px-[12%] sm:px-[7%] pt-[108px] [@media(max-width:500px)]:pt-[80px] py-[50px] w-full flex-col justify-between text-[#464143]   leading-[20px] [@media(min-width:1920px)]:leading-[22px] "
                }
            >
                <div className={style.leftBgLine1} data-aos="fade-right" data-aos-delay="300"></div>
                <div className={style.rightBgLine2} data-aos="fade-right" data-aos-delay="300"></div>
                <div>
                    {/* Heading */}
                    <Heading blue={"SWP"} />

                    <Subheading>
                        {/* leading 18 ensures line spacing of 18px because leading includes the height of characters too  */}
                        SWP is Systematic Withdrawal Plan. This SWP Calculator is an online calculator that gives you an idea on how long your corpus money will last or what would be the corpus remaining after a number of years of periodic withdrawals from your Mutual Fund investments. The remaining corpus amount is based on your current Investment, the expected annual rate of return, and withdrawal tenure.
                    </Subheading>
                </div>

                {/* Calculator and side pannel */}
                <CalculatorAndSidePannel>
                    {/* Calculator and graph (WRAPPER) */}
                    <CalculatorWrapper>
                        {/* Calculator */}
                        <Calculator calculate={calculate}>
                            {/* Input box wrapper */}
                            <InputBoxWrapper>
                                {/* Input box */}
                                <div>
                                    <MuiRadioButton
                                        value={radioValue}
                                        setValue={setRadioValue}
                                    />
                                </div>

                                <div>
                                    <div>Total investment</div>
                                    <InputSlider
                                        id='totalInvestment'
                                        type='rupees'
                                        value={totalInvestment}
                                        setValue={setTotalInvestment}
                                        min={minInvestment}
                                        max={maxInvestment}
                                        step={stepInvestment}
                                    />
                                </div>
                                <div>
                                    <div>Withdrawal per month</div>
                                    <InputSlider
                                        id='withdrawal'
                                        type='rupees'
                                        value={withdrawal}
                                        setValue={setWithdrawal}
                                        min={minWithdrawl}
                                        max={maxWithdrawl}
                                        step={stepWithdrawl}
                                    />
                                </div>
                                <div>
                                    <div>Expected return rate (p.a)</div>
                                    <InputSlider
                                        id='returnRate'
                                        type="percentage"
                                        value={returnRate}
                                        setValue={setReturnRate}
                                        min={minReturnRate}
                                        max={maxReturnRate}
                                        step={stepReturnRate}
                                    />
                                </div>

                                <div>
                                    <div>SWP Tenure (years)</div>
                                    <InputSlider
                                        id='timePeriod'
                                        value={timePeriod}
                                        setValue={setTimePeriod}
                                        min={minTimePeriod}
                                        max={maxTimePeriod}
                                    />
                                </div>
                            </InputBoxWrapper>
                        </Calculator>


                        {/* Total Chart Container*/}
                        <div className={"lg:w-[50%]"}>

                            {/* Charts/Graph */}
                            <div className={" relative object-right-top [@media(min-width:200px)]:h-auto md:w-[100%]"}>
                                <LineChart key='' points={graphPoints} />
                            </div>


                            <div className={"flex-col text-[14px] [@media(min-width:1920px)]:text-[18px]"}>
                                {/*SWP output*/}
                                {radioValue === "1"
                                    ?
                                    <div>
                                        Your investments of <span className="font-semibold whitespace-nowrap">{`${'\u20B9'} ${dummyTotalInvestment.toLocaleString("en-In")}`}</span> will last for approximately <span className="font-semibold">{`${'\u20B9'} ${finalYear.toLocaleString("en-In")}`}</span> years if you plan to withdraw <span className="font-semibold whitespace-nowrap">{`${'\u20B9'} ${dummyTotalInvestment.toLocaleString("en-In")}`}</span> each month.</div>
                                    :
                                    <div>
                                        You&#39;ll have approximately <span className="font-semibold whitespace-nowrap">{`${'\u20B9'} ${totalAmt.toLocaleString("en-In")}`}</span> left at the end of <span className="font-semibold">{`${'\u20B9'} ${timePeriod.toLocaleString("en-In")}`}</span> years if you plan to withdraw <span className="font-semibold whitespace-nowrap">{`${'\u20B9'} ${dummyWithdrawl.toLocaleString("en-In")}`}</span> each month from your investments of <span className="font-semibold">{`${'\u20B9'} ${dummyTotalInvestment.toLocaleString("en-In")}`}</span></div>}
                            </div>

                        </div>

                    </CalculatorWrapper>


                    {/* Side Panel */}
                    <div className="xl:max-h-[553.2px] [@media(min-width:1920px)]:max-h-[559.2px]  xl:w-[23%]">
                        <InfoBox
                            type={"sidePannel"}
                            contents={[
                                [
                                    "Systematic Withdrawal Plan",
                                    'SWP stands for systematic withdrawal plan. Under SWP, if you invest lump sum in a mutual fund, you can set an amount you’ll withdraw regularly and the frequency at which you’ll withdraw.'
                                ],
                                [
                                    "Find out how long my investments will last",
                                    'You can use the FundsIndia SWP calculator to calculate how long your investment would last if you withdraw at a specific rate.'
                                ],
                                [
                                    "Find out remaining balance after the SWP tenure",
                                    'You can use the FundsIndia SWP calculator to calculate your remaining balance after the SWP tenure'
                                ],
                                [
                                    "Deciding the Withdrawal Amount",
                                    'Since the FundsIndia SWP calculator helps you calculate both your balance after SWP tenure and how long your investment will last if you withdraw a specific amount, It can help you decide how much you should withdraw based on your preferences.'
                                ],
                                [
                                    "Deciding the SWP Tenure",
                                    'FundsIndia SWP calculator can help you decide the SWP tenure as it can calculate both your balance after SWP tenure and how long your investment will last if you withdraw a specific amount.'
                                ],
                            ]}
                        />
                    </div>

                </CalculatorAndSidePannel>


                {/* FAQ Panel */}
                <InfoBox
                    type={"faq"}
                    contents={[
                        [
                            'What is Systematic Withdrawal Plan?',
                            <>
                                SWP stands for systematic withdrawal plan. Under SWP, if you invest lump sum in a mutual fund, you can set an amount you&#39;ll withdraw regularly and the frequency at which you&#39;ll withdraw.
                                <br /><br />
                                For example, let&#39;s say you invested in an MF scheme an amount of ₹1 lakh for a year. Let&#39;s assume that you decided to withdraw an amount of ₹10000 per month. So every month, the fund you have invested will reduce by ₹10000. The amount left every month after withdrawal will continue to remain invested. According to the Systematic Withdrawal Plan, a person must invest a specific sum and withdraw a specific portion of the invested corpus each month. The amount of the withdrawal will be subtracted from the investment while interest is still being earned on it.
                                <br /><br />
                                Calculating the monthly withdrawals and the total amount that has matured is challenging. With its SWP calculator, FundsIndia can assist you with these challenging computations. This Systematic Withdrawal Plan calculator makes it simple to calculate your matured amount based on your precise monthly withdrawals. Calculators are making mutual fund investing simpler for consumers.
                            </>
                        ],
                        [
                            'What is a SWP calculator?',
                            'An SWP calculator is a tool that helps you determine the amount of regular payments you can receive from your investments, based on the current value of your portfolio, the expected rate of return, and the frequency of withdrawals. The calculator can give you an estimate of how much you can expect to receive on a regular basis, based on your investment goals and needs.'
                        ],
                        [
                            'What are the withdrawal options available with SWPs?',
                            <>
                                These options are available with SWPs.
                                <br /><br />
                                <UnorderedList
                                    key=''
                                    content={[
                                        "Fixed interval SWP - Allows you to withdraw a fixed amount at regular intervals (daily, weekly, monthly, quarterly, etc.)",
                                        "Fixed amount SWP - Allows you to withdraw a fixed amount each time you make a withdrawal."
                                    ]}
                                />
                            </>
                        ],
                        [
                            'How can you use the SWP calculator?',
                            'This calculator can be used to calculate how long an investment would last if you withdraw at a specific rate or how much of your corpus will be left to withdraw after a specific period of time. Just plug in the fields required and you can get a visual representation of your investment.'
                        ],
                        [
                            'How does the SWP calculator work?',
                            <>
                                <div>The SWP calculator takes 4 inputs namely, Total Investment, Withdrawal per month, Expected return rate and Time period of withdrawal.
                                    <br />
                                    It uses the following logic</div>
                                <div className='font-semibold my-[10px]'>A = WA ((1+r/n)^nt – 1) / (r/n) <br /> Where, <br />A = Final value of investment <br />  WA = Amount withdrawn every period <br /> n = number of compounds in a period <br /> r = expected annual rate of return <br /> t = total number of period for which the money is invested </div>
                            </>
                        ],
                        [
                            'When can I use a SWP calculator?',
                            "The SWP calculator can be used when you want to know how long your investment would last and how much of your corpus would be left if you withdraw at a specific rate."
                        ],
                        [
                            'What are the long-term and short-term tax implications of SWP withdrawals?',
                            <>
                                Tax implications in case of Debt funds are as follows
                                <br /><br />
                                <UnorderedList
                                    key=''
                                    content={[
                                        "Short-term: If you withdraw from an SWP within a year of investing in a mutual fund, the amount withdrawn is considered as short-term capital gain and taxed as per your income tax slab.",
                                        "Long-term: If you hold the mutual fund units for more than a year before withdrawing through an SWP, the amount withdrawn is considered as long-term capital gain and taxed at a rate of 20% (plus surcharge and cess, if applicable) after indexation benefit. Indexation benefit adjusts the cost of investment to account for inflation and reduces the tax liability."
                                    ]}
                                />
                                <br />
                                In case of Equity funds
                                <br /><br />
                                <UnorderedList
                                    key=''
                                    content={[
                                        "Short-term: If you withdraw from an SWP from an equity mutual fund before holding it for more than a year, the amount withdrawn is considered as short-term capital gain and taxed at your marginal tax rate. For individuals, the short-term capital gain tax is 15% of the withdrawal amount.",
                                        "Long-term: If you hold the equity mutual fund units for more than a year before withdrawing through an SWP, the amount withdrawn is considered as long-term capital gain and taxed at a lower rate of 10% (without any indexation benefit) as compared to the short-term capital gain tax rate."
                                    ]}
                                />
                            </>
                        ],
                        [
                            'For a regular income stream, is SWP withdrawal better than Dividend plans?',
                            <>
                                SWP withdrawals and Dividend plans both have their pros and cons.
                                <br /><br />
                                <UnorderedList
                                    key=''
                                    content={[
                                        "Tax implications: Dividend income is taxed at a higher rate compared to long-term capital gains in India, so if tax efficiency is a concern, SWP withdrawals may be a better option.",
                                        "Liquidity: SWP withdrawals provide more flexibility in terms of the amount and frequency of withdrawals, whereas dividend plans offer a fixed amount of income.",
                                        "Investment objective: If the objective of your investment is capital appreciation, then SWP withdrawals may be more suitable as it allows you to keep your invested capital intact. On the other hand, if the primary objective is to generate a regular income, then dividend plans may be a better option.",
                                        "Market volatility: In a volatile market, SWP withdrawals from equity mutual funds can be affected, as the unit price can fluctuate and impact the amount of income received. Dividend plans are relatively stable in this regard, as the income is generated through dividends, which are paid out regardless of market conditions."
                                    ]}
                                />
                                <br />
                                Also, The type of mutual fund and the underlying portfolio also play a role in determining which option is more appropriate for you. For example, if you have invested in a growth-oriented equity fund, then SWP withdrawals may be more appropriate, as the value of your investment is likely to grow over time.
                            </>
                        ],

                    ]}
                />


                {/* Related Calculators */}
                <RelatedCalculators
                    contents={[
                        ["NSC Calculator", "/nsc-calculator"],
                        //["Mutual Funds Calculator", "/SWP-calculator"],//same page
                        ["FD Calculator", "/fd-calculator"],
                        //["NPS Calculator", "/SWP-calculator"],//same page
                    ]}
                />


            </main >
        </div >
    );
}
