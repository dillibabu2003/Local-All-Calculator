/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-css-tags */
/* eslint-disable react/jsx-key */

import Head from "next/head";
import { useState } from "react";
//import { PageSEO } from '@/components/SEO';


import RelatedCalculators from "../Components/Cagr/RelatedCalculators.js";


import Heading from "../Components/Cagr/Heading.js";
import Subheading from "../Components/Cagr/Subheading.js";
import CalculatorAndSidePannel from "../Components/Cagr/CalculatorAndSidePannel.js";
import CalculatorWrapper from "../Components/Cagr/CalculatorWrapper.js";
import Calculator from "../Components/Cagr/Calculator.js";
import InputBoxWrapper from "../Components/Cagr/InputBoxWrapper.js";
import InfoBox from "../Components/Cagr/InfoBox.js";
import ChartFooterElement from "../Components/Cagr/ChartFooterElement.js";
import InputSlider from "../Components/Cagr/InputSlider.js";
import Advertisement from "../Components/Cagr/Advertisement.js";
import style from '../styles/cagrInput.module.scss';
import UnorderedList from "../Components/Cagr/UnorderedList.js";
import NPSDoughnutChart from "../Components/NPSDoughnutChart.js";
import Dropdown from "../Components/Cagr/Dropdown.js";

export default function Home() {
    const [age, setAge] = useState(35);
    const [retirementAge, setRetirementAge] = useState(60);
    const [monthlyContribution, setMonthlyContribution] = useState(2000);
    const [expectedRateOfInterest, setExpectedRateOfInterest] = useState(10);
    const [wealthInvestedInAnnuity, setWealthInvestedInAnnuity] = useState(40);
    const [annuityRateOfInterest, setAnnuityRateOfInterest] = useState(10);

    const minAge = 18;
    const maxAge = 59;
    const stepAge = 1;

    const minRetirementAge = 30;
    const maxRetirementAge = 60;
    const stepRetirementAge = 1;

    const minMonthlyContribution = 500;
    const maxMonthlyContribution = 100000000;
    const stepMonthlyContribution = 500;

    const minExpectedRateOfInterest = 5;
    const maxExpectedRateOfInterest = 20;
    const stepExpectedRateOfInterest = 1;

    const minWealthInvestedInAnnuity = 40;
    const maxWealthInvestedInAnnuity = 60;
    const stepWealthInvestedInAnnuity = 1;

    const minAnnuityRateOfInterest = 5;
    const maxAnnuityRateOfInterest = 20;
    const stepAnnuityRateOfInterest = 1;



    {
        /* Display variables */
    }
    const [pensionWealth, setPensionWealth] = useState(2675781);
    const [interestEarned, setInterestEarned] = useState(2075781);
    const [annuityAmount, setAnnuityAmount] = useState(1070312);
    const [lupsumWithdrawn, setLupsumWithdrawn] = useState(1605469);
    const [pensionPerMonth, setPensionPerMonth] = useState(8919);


    function calculate() {
        if (age < retirementAge) {
            let investYears = retirementAge - age;
            let totalMonth = investYears * 12;
            let principalAmount = Number(Math.round(monthlyContribution * totalMonth));
            let pensionWealthAmount = Number(Math.round(monthlyContribution * ((Math.pow((1 + ((expectedRateOfInterest / 100) / 12)), totalMonth) - 1) / ((expectedRateOfInterest / 100) / 12)) * (1 + ((expectedRateOfInterest / 100) / 12))));
            setPensionWealth(pensionWealthAmount);

            let interest = Number(pensionWealthAmount - principalAmount);
            setInterestEarned(interest);

            //let taxSaving= Number(Math.round(monthlyContribution*totalMonth*0.30));
            let annuity = Number(Math.round(pensionWealthAmount * (wealthInvestedInAnnuity / 100)));
            setAnnuityAmount(annuity);

            let lupsum = Number(Math.round(pensionWealthAmount - annuity));
            setLupsumWithdrawn(lupsum);

            let pension = Number(Math.round((annuity * (annuityRateOfInterest / 100)) / 12));
            setPensionPerMonth(pension);
        }
    }

    return (
        <div className={"app—bg—container overflow—hidden"}>
            {/* <PageSEO title={'NPS Calculator | National Pension Scheme Calculator Online | FundsIndia'}
            description={"With FundsIndia's NPS online calculator calculate your investments till retirement and your corpus at retirement."} /> */}
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

            {/* Background image */}
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
                    <Heading blue={"NPS"} />

                    {/* Subheading */}
                    <Subheading>
                        The National Pension System (NPS) is a retirement savings scheme that allows individuals to contribute
                        regularly and make informed decisions about their future through systematic savings during their working
                        years. The scheme aims to encourage citizens to save for retirement and provide a sustainable solution
                        to the challenge of ensuring adequate retirement income for all Indian citizens.

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
                                    {/*Initial investment block*/}
                                    <div>Your age</div>
                                    <InputSlider
                                        id="age"
                                        type="text"
                                        min={minAge}
                                        max={maxAge}
                                        step={stepAge}
                                        value={age}
                                        setValue={setAge}
                                    />
                                </div>

                                <div>
                                    {/*Initial investment block*/}
                                    <div>Retirement age</div>
                                    <InputSlider
                                        id="retirementAge"
                                        type="text"
                                        min={minRetirementAge}
                                        max={maxRetirementAge}
                                        step={stepRetirementAge}
                                        value={retirementAge}
                                        setValue={setRetirementAge}
                                    />
                                </div>

                                <div>
                                    {/*Initial investment block*/}
                                    <div>Monthly Contribution</div>
                                    <InputSlider
                                        id="monthlyContribution"
                                        type="rupees"
                                        min={minMonthlyContribution}
                                        max={maxMonthlyContribution}
                                        step={stepMonthlyContribution}
                                        value={monthlyContribution}
                                        setValue={setMonthlyContribution}
                                    />
                                </div>

                                <div>
                                    {/*Initial investment block*/}
                                    <div>Expected rate of interest</div>
                                    <InputSlider
                                        id="expectedRateOfInterest"
                                        type="percentage"
                                        min={minExpectedRateOfInterest}
                                        max={maxExpectedRateOfInterest}
                                        step={stepExpectedRateOfInterest}
                                        value={expectedRateOfInterest}
                                        setValue={setExpectedRateOfInterest}
                                    />
                                </div>

                                <div>
                                    {/*Initial investment block*/}
                                    <div>Wealth invested in annuity</div>
                                    <InputSlider
                                        id="wealthInvestedInAnnuity"
                                        type="percentage"
                                        min={minWealthInvestedInAnnuity}
                                        max={maxWealthInvestedInAnnuity}
                                        step={stepWealthInvestedInAnnuity}
                                        value={wealthInvestedInAnnuity}
                                        setValue={setWealthInvestedInAnnuity}
                                    />
                                </div>

                                <div>
                                    {/*Initial investment block*/}
                                    <div>Annuity Rate of Interest</div>
                                    <InputSlider
                                        id="annuityRateOfInterest"
                                        type="percentage"
                                        min={minAnnuityRateOfInterest}
                                        max={maxAnnuityRateOfInterest}
                                        step={stepAnnuityRateOfInterest}
                                        value={annuityRateOfInterest}
                                        setValue={setAnnuityRateOfInterest}
                                    />
                                </div>
                            </InputBoxWrapper>
                        </Calculator>

                        {/* Charts/Graph wrapper */}
                        <div className={"lg:w-[50%]"}>

                            <NPSDoughnutChart totalInterestAmount={lupsumWithdrawn} totalInvestmentAmount={annuityAmount} dependency={lupsumWithdrawn} />

                            {/* Output box */}
                            <div className={"flex-col "}>
                                {/*CARG output*/}
                                <ChartFooterElement
                                    id={"pensinoWealth"}
                                    label={"Pension Wealth"}
                                    value={"₹" + pensionWealth.toLocaleString("en-In")}
                                />

                                <ChartFooterElement
                                    id={"interestEarned"}
                                    label={"Interest Earned"}
                                    value={"₹" + interestEarned.toLocaleString("en-In")}
                                    last={true}
                                />

                                <ChartFooterElement
                                    id={"annuityAmount"}
                                    label={"Annuity Amount"}
                                    value={"₹" + annuityAmount.toLocaleString("en-In")}
                                />

                                <ChartFooterElement
                                    id={"lupsumWithdrawn"}
                                    label={"Lupsum Withdrawn"}
                                    value={"₹" + lupsumWithdrawn.toLocaleString("en-In")}
                                    last={true}
                                />

                                <ChartFooterElement
                                    id={"pensionPerMonth"}
                                    label={"Pension Per Month"}
                                    value={"₹" + pensionPerMonth.toLocaleString("en-In")}
                                />
                            </div>
                        </div>
                    </CalculatorWrapper>

                    {/* Side Pannel */}
                    <div className="xl:max-h-[609.2px] [@media(min-width:1920px)]:max-h-[385.2px]  xl:w-[23%] ">
                        <InfoBox
                            type={"sidePannel"}
                            contents={[
                                [
                                    "National Pension System",
                                    "The National Pension System (NPS) is a retirement savings scheme that allows individuals to contribute regularly during their working years",

                                ],
                                [
                                    "Tax Implication of NPS",
                                    "Any individual who is Subscriber of NPS can claim tax benefit under Sec 80 CCD (1) with in the overall ceiling of Rs. 1.5 lac under Sec 80 CCE",
                                ],
                                [
                                    "Maturity year ",
                                    "NPS matures at age 60 of the investor.",
                                ],
                                [
                                    "Annuity",
                                    "An annuity is a financial product that can be used to provide a regular income stream in exchange for a lump sum payment."
                                ]
                            ]}
                        />
                    </div>
                </CalculatorAndSidePannel>

                {/* FAQ box */}
                <InfoBox
                    type={"faq"}
                    contents={[
                        [
                            "What is National Pension System?",
                            "The National Pension System (NPS) is a retirement savings scheme that allows individuals to contribute regularly during their working years. The scheme aims to encourage citizens to save for retirement and provide a sustainable solution to the challenge of ensuring adequate retirement income for all Indian citizens.  ",
                        ],
                        [
                            "What is Annuity?",
                            <><div>An annuity is a financial product that can be used to provide a regular income stream in exchange for a lump sum payment. In the context of retirement planning, an annuity can help investors achieve a steady and reliable income during their post-retirement years.</div>
                                <br />
                                <div>In the National Pension System (NPS), investors are required to use a portion of their accumulated savings to purchase an annuity plan from a life insurance company upon retirement. The annuity purchased with the NPS corpus provides a regular pension income to investors during their retirement years. The amount of pension received depends on various factors such as the corpus accumulated, the annuity plan chosen, the prevailing interest rates, and the investor’s age.</div>
                            </>
                        ],
                        [
                            "What are the tax implications of NPS?",
                            "Any individual who is Subscriber of NPS can claim tax benefit under Sec 80 CCD (1) with in the overall ceiling of Rs. 1.5 lac under Sec 80 CCE.",
                        ],
                        [
                            "Who can join NPS?",
                            "Any individual citizen of India (both resident and Non-resident) in the age group of 18-70 years (as on the date of submission of NPS application) can join NPS.",
                        ],
                        [
                            "How can you use the NPS calculator?",
                            "FundsIndia NPS Calculator is one of the simplest NPS calculators available. Just fill in your age, how much you can invest monthly, the interest rate you expect, and how much you plan to invest in annuity and expected interest rate for it. The calculator gives you your total corpus, lumpsum you can take after investing in annuity, the interest you earned and the monthly pension you can get.",
                        ],
                        [
                            "In case of premature exit, when will Subscriber’s Annuity start i.e. immediately or after the age of 60 years?",
                            "Annuity starts immediately, if Subscriber fulfills the Age and Corpus criteria for purchasing Annuity (depending upon choice of ASP and Annuity scheme of the respective Annuity Service Provider).",
                        ],
                        [
                            "Can Subscriber opt for Withdrawal during his/her service period?",
                            "Yes, Partial Withdrawal facility is available for NPS Subscribers whereby Subscriber can opt for Withdrawal of certain amount out of his own contribution.",
                        ],
                        [
                            "Which Annuity schemes are available?",
                            <>
                                <div>Following schemes are available with ASPs:</div>
                                <br />
                                <UnorderedList
                                    content={[
                                        "Annuity for life - On death of the annuitant, payment of Annuity ceases.",
                                        "Annuity for life with return of purchase price on death - On deathof the annuitant, payment of Annuity ceases and the purchase price isreturned to the nominee",
                                        "Annuity payable for life with 100% Annuity payable to spouse ondeath of annuitant - On death of the annuitant, Annuity is paid to thespouse during his/her life time. If the spouse predeceases the annuitant,payment of Annuity will cease after the death of the annuitant.",
                                        "Annuity payable for life with 100% Annuity payable to spouse ondeath of annuitant with return on purchase of Annuity - On death ofthe annuitant, Annuity is paid to the spouse during his/her life time andpurchase price is returned to the nominee after the death of the spouse.",
                                        "Default Annuity Scheme (Applicable in case of Government SectorSubscribers only)",
                                    ]}
                                />
                            </>,
                        ],
                        [
                            "What are the tax implications of NPS investments?",
                            <>
                                <UnorderedList
                                    content={[
                                        "Any individual who is Subscriber of NPS can claim tax benefit under Sec 80 CCD (1) with in the overall ceiling of Rs. 1.5 lac under Sec 80 CCE.",
                                        "An additional deduction for investment up to Rs. 50,000 in NPS (Tier I account) is available exclusively to NPS subscribers under subsection 80CCD (1B). This is over and above the deduction of Rs. 1.5 lakh available under section 80C of Income Tax Act. 1961.",
                                    ]}
                                />
                                <br />
                                <div>Tax Benefits under the Corporate Sector:</div>
                                <br />
                                <UnorderedList
                                    content={[
                                        "Corporate Subscriber:",
                                    ]}
                                />
                                <div>Additional Tax Benefit is available to Subscribers under Corporate Sector, u/s 80CCD (2) of Income Tax Act. Employer’s NPS contribution (for the benefit of employee) up to 10% of salary (Basic + DA), is deductible from taxable income, up-to 7.5 Lakh. </div>
                                <br />
                                <UnorderedList
                                    content={[
                                        "Corporates",
                                    ]}
                                />
                                <div>Employer’s Contribution towards NPS up to 10% of salary (Basic + DA) can be deducted as ‘Business Expense’ from their Profit & Loss Account.</div>

                            </>,
                        ],
                        [
                            "Is partial withdrawal permitted?",
                            <>
                                <div>Yes. Following are the conditions for availing Partial Withdrawal:</div>
                                <br />
                                <UnorderedList
                                    content={[
                                        "The Subscriber shall have been in the NPS at least for the period of three years from the date of his or her Joining (in case of Govt. & Corporate Subscribers)/date of PRAN generation (incase of ’All Citizens’ sector).",
                                        "The Subscriber shall be allowed to withdraw only a maximum of three times during the entire tenure of subscription.",
                                        "The Subscriber can opt for withdrawal not exceeding 25% of contributions made by him/her.",
                                    ]}
                                />
                            </>
                        ],

                    ]}
                />
                {/* Related Calculators */}
                <RelatedCalculators
                    contents={[
                        ["Compound Interest Calculator", "/compoundInterest"],
                        ["Simple Interest Calculator", "/simpleInterest"],
                        ["FD Calculator", "/fd-calculator"],
                        ["Mutual Funds Calculator", "/cagr"],//same page
                    ]}
                />
            </main>
        </div>
    );
}