/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import { useState } from "react";
import InputSlider from '../Components/Cagr/InputSlider.js';
import LineChart from "../Components/EPFLineChart.js";
import InputDisabled from "../Components/Cagr/InputDisabled.js";
import InfoBox from "../Components/Cagr/InfoBox.js";
import RelatedCalculators from "../Components/Cagr/RelatedCalculators.js";
//import { PageSEO } from '@/components/SEO';

import Heading from "../Components/Cagr/Heading.js";
import Subheading from "../Components/Cagr/Subheading.js";
import CalculatorAndSidePannel from "../Components/Cagr/CalculatorAndSidePannel.js";
import CalculatorWrapper from "../Components/Cagr/CalculatorWrapper.js";
import Calculator from "../Components/Cagr/Calculator.js";
import InputBoxWrapper from "../Components/Cagr/InputBoxWrapper.js";

import style from '../styles/cagrInput.module.scss';

export default function Home() {

    let minYearlyInvestment = 250;
    let maxYearlyInvestment = 150000;
    let stepYearlyInvestment = 250;
    let minAge = 1;
    let maxAge = 10;

    const [monthlySalary, setMonthlySalary] = useState(70000);
    const [age, setAge] = useState(30);
    const [epfRate, setEpfRate] = useState(12);
    const [annualSalary, setAnnualSalary] = useState(5);

    const [output, setOutput] = useState(33621464);
    const [graphPoints, setGraphPoints] = useState([142290, 303220, 484655, 688630, 917364, 1173272, 1458989, 1777383, 2131578, 2524975, 2961273, 3444500, 3979036, 4569647, 5221513, 5940266, 6732028, 7603454, 8561771, 9614834, 10771173, 12040052, 13431531, 14956532, 16626910, 18455533, 20456368, 22644567, 25036571, 27650218, 30504854, 33621464]);

    function calculate() {

        let total = 0;
        let totalInterest = 0;
        let points = [];

        for (let i = 30; i <= 61; i++) {
            let col1 = monthlySalary * 12 * Math.pow((1 + (annualSalary / 100)), (i - age));
            let col2 = col1 * (epfRate / 100);
            let col3 = col1 * (3.67 / 100);
            let col4 = col2 + col3;
            total += col4;
            let col5 = (total + totalInterest) * (8.1 / 100);
            totalInterest += col5;
            points.push(Math.round(total + totalInterest));
        }
        setGraphPoints(points);
        setOutput(points[points.length - 1]);
        console.log(points);
    }

    return (
        <div className="app-bg-container overflow-hidden">

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
                    <Heading blue={"EPF"} />
                    <Subheading>
                        Employee&#39; Provident Fund (EPF) a type of savings scheme in India for employees. The contributions made by the employees and the employers are kept in this fund and are later used as retirement benefits. This calculator can be used to estimate the amount of savings that an individual can accumulate in a EPF account over a specified period of time. The calculator takes into account the amount of contribution made, monthly salary, increase in salary and the age of employee, and provides an estimate of the total amount that will be accumulated at maturity.
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
                                <InputDisabled heading={"Rate of Interest"} value={"8.1%"} />

                                <div>
                                    {/*Yearly investment block*/}
                                    <div className="[@media(min-width:1920px)]:text-[18px] [@media(min-width:1920px)]:font-medium ">Monthly salary (Basic+DA)</div>
                                    <InputSlider
                                        type="rupees"
                                        min={1000}
                                        max={5000000}
                                        step={1000}
                                        value={monthlySalary}
                                        setValue={setMonthlySalary}
                                    />
                                </div>


                                <div>
                                    {/*age block*/}
                                    <div className="[@media(min-width:1920px)]:text-[18px] [@media(min-width:1920px)]:font-medium ">Age</div>
                                    <InputSlider
                                        type="years"
                                        min={15}
                                        max={58}
                                        step={1}
                                        value={age}
                                        setValue={setAge}
                                    />
                                </div>

                                <div>
                                    {/*Contribution to EPF block*/}
                                    <div className="[@media(min-width:1920px)]:text-[18px] [@media(min-width:1920px)]:font-medium ">Contribution to EPF</div>
                                    <InputSlider
                                        type="percentage"
                                        min={12}
                                        max={20}
                                        step={1}
                                        value={epfRate}
                                        setValue={setEpfRate}
                                    />
                                </div>

                                <div>
                                    {/*Annual salary block*/}
                                    <div className="[@media(min-width:1920px)]:text-[18px] [@media(min-width:1920px)]:font-medium ">Annual increase in salary</div>
                                    <InputSlider
                                        type="percentage"
                                        min={0}
                                        max={15}
                                        step={1}
                                        value={annualSalary}
                                        setValue={setAnnualSalary}
                                    />
                                </div>

                            </InputBoxWrapper>
                        </Calculator>

                        {/* Charts/Graph wrapper */}
                        <div className={"lg:w-[50%]"}>
                            {/* Charts/Graph */}
                            <div className={" relative object-right-top "}>
                                {
                                    <>
                                        <LineChart key='' points={graphPoints} />

                                        <div className={"mt-3 text-[14px] text-[#464143] font-normal justify-between flex [@media(min-width:1920px)]:text-[18px]"}>
                                            You will have accumulated{" "}
                                            <span className={"font-semibold text-[14px] [@media(min-width:1920px)]:text-[18px]"}><span className="font-['Rubik']">{'\u20B9 '}</span>{output.toLocaleString('en-In')}</span>
                                        </div>

                                    </>
                                }
                            </div>

                        </div>
                    </CalculatorWrapper>

                    {/* Side Pannel */}
                    <div className="xl:max-h-[509.2px]  xl:w-[23%] [@media(min-width:1920px)]:max-h-[527.2px] ">
                        <InfoBox
                            type="sidePannel"
                            contents={[
                                ["Employees' Provident Fund", "Employees' Provident Fund is a type of savings scheme in India for employees. The contributions made by the employees and the employers are kept in this fund and are later used as retirement benefits."],
                                ["Historical interest rates",
                                    <div className="w-full" key=''>
                                        <table className=" border-2 border-solid w-full ">
                                            <thead>
                                                <tr className=" border-2 border-solid ">
                                                    <th className=" border border-solid p-2 ">Financial Year</th>
                                                    <th className=" border border-solid p-2 ">Rate of Interest(p.a)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className=" border border-solid ">
                                                    <td className=" border border-solid px-4 py-2 text-center">2022-2023</td>
                                                    <td className=" border border-solid px-4 py-2 text-center">8.10%</td>
                                                </tr>
                                                <tr className=" border border-solid ">
                                                    <td className=" border border-solid px-4 py-2 text-center">2021-2022</td>
                                                    <td className=" border border-solid px-4 py-2 text-center">8.10%</td>
                                                </tr>
                                                <tr className=" border border-solid ">
                                                    <td className=" border border-solid px-4 py-2 text-center">2020-2021</td>
                                                    <td className=" border border-solid px-4 py-2 text-center">8.50%</td>
                                                </tr>
                                                <tr className=" border border-solid ">
                                                    <td className=" border border-solid px-4 py-2 text-center">2019-2020</td>
                                                    <td className=" border border-solid px-4 py-2 text-center">8.50%</td>
                                                </tr>
                                                <tr className=" border border-solid ">
                                                    <td className=" border border-solid px-4 py-2 text-center">2018-2019</td>
                                                    <td className=" border border-solid px-4 py-2 text-center">8.65%</td>
                                                </tr>
                                                <tr className=" border border-solid ">
                                                    <td className=" border border-solid px-4 py-2 text-center">2017-18</td>
                                                    <td className=" border border-solid px-4 py-2 text-center">8.55%</td>
                                                </tr>
                                                <tr className=" border border-solid ">
                                                    <td className=" border border-solid px-4 py-2 text-center">2016-2017</td>
                                                    <td className=" border border-solid px-4 py-2 text-center">8.65%</td>
                                                </tr>
                                                <tr className=" border border-solid ">
                                                    <td className=" border border-solid px-4 py-2 text-center">2015-2016</td>
                                                    <td className=" border border-solid px-4 py-2 text-center">8.80%</td>
                                                </tr>
                                                <tr className=" border border-solid ">
                                                    <td className=" border border-solid px-4 py-2 text-center">2013-2015</td>
                                                    <td className=" border border-solid px-4 py-2 text-center">8.75%</td>
                                                </tr>
                                                <tr className=" border border-solid ">
                                                    <td className=" border border-solid px-4 py-2 text-center">2012-2013</td>
                                                    <td className=" border border-solid px-4 py-2 text-center">8.50%</td>
                                                </tr>
                                                <tr className=" border border-solid ">
                                                    <td className=" border border-solid px-4 py-2 text-center">2011-2012</td>
                                                    <td className=" border border-solid px-4 py-2 text-center">8.25%</td>
                                                </tr>
                                                <tr className=" border border-solid ">
                                                    <td className=" border border-solid px-4 py-2 text-center">2010-2011</td>
                                                    <td className=" border border-solid px-4 py-2 text-center">9.50%</td>
                                                </tr>
                                                <tr className=" border border-solid ">
                                                    <td className=" border border-solid px-4 py-2 text-center">2005-2006 to 2009-2010</td>
                                                    <td className=" border border-solid px-4 py-2 text-center">8.50%</td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>],
                                ["Maturity value of the investment", " You can use the FundsIndia EPF calculator to calculate the maturity value of your EPF investment."],
                                ["Lock-in Period", "The current lock in period of EPF is until the age of 58."],
                            ]}
                        />
                    </div>
                </CalculatorAndSidePannel>

                {/* FAQ box */}
                <InfoBox
                    type="faq"
                    contents={[
                        ["What is Employees' Provident Fund?",
                            "Employees' Provident Fund is a type of savings scheme in India for employees. The contributions made by the employees and the employers are kept in this fund and are later used as retirement benefits."
                        ],
                        ["What is the lock-in period of EPF investment?",
                            "The current lock-in period for EPF is typically until the age of 58, at which point the employee can withdraw the entire amount in the EPF account. There are also certain conditions under which an employee can withdraw the funds from the EPF account before the age of 58, such as in case of unemployment, serious illness, or for purchasing a house. The EPF lock-in period is designed to ensure that employees have enough savings for their retirement years."],

                        ["What is the minimum investment?",
                            <>
                                <div>The minimum investment for the Employees&#39; Provident Fund (EPF) in India is 12% of an employee&#39;s basic salary and dearness allowance (DA). Out of this 12%, 8.33% is contributed by the employee and the remaining 3.67% is contributed by the employer. This 12% contribution is mandatory for all employees earning a basic salary of up to INR 15,000 per month.</div>
                            </>
                        ],
                        ["What are the tax implications of a EPF investment?",
                            "The contributions made to the Employees' Provident Fund (EPF) in India are eligible for tax benefits under Section 80C of the Income Tax Act. This means that the contributions made by the employee up to a limit of INR 1.5 lakhs per financial year are eligible for tax deductions. The interest earned on the EPF account is also exempt from tax up to a certain limit. However, the withdrawal of the EPF corpus at the time of retirement is taxable if the employee has completed 5 years of service. If the employee has completed less than 5 years of service, the entire corpus is taxable. The amount of tax that needs to be paid on the withdrawal depends on the individual's tax slab and the amount of the EPF corpus."
                        ],
                        ["How can you use the EPF calculator? ",
                            "The calculator takes into account the amount of contribution made, monthly salary, increase in salary and the age of employee, and provides an estimate of the total amount that will be accumulated at maturity. You can calculate your estimated earnings by just filling out the fields and the calculator does the rest for you."
                        ],
                        ["How does the EPF calculator work?",
                            "The EPF calculator takes 4  inputs, Monthly salary, age, contribution to EPF  and Annual increase in salary. It calculates the EPF corpus at the retirement age by calculating the annual increase in corpus every year and adding it to next year till retirement."
                        ],
                        ["When does my EPF investment mature?", "The maturity time for the Employees' Provident Fund (EPF) in India is typically at the age of 58, after which an employee can withdraw the entire amount in their EPF account. The EPF maturity time is the point at which an employee has fulfilled the minimum service requirements and is eligible to receive their retirement benefits."],
                        ["Can I keep a part of my EPF accumulation to continue earning interest on it?",
                            "At the time of maturity, the employee can choose to withdraw the entire amount or to keep a portion of the amount in the EPF account and continue to earn interest on it. The EPF maturity time provides a safety net for employees during their retirement years, helping to ensure that they have enough savings to support themselves."]
                    ]}
                />



                {/* Related Calculators */}
                <RelatedCalculators
                    contents={[
                        ["PPF Calculator", "/epf-calculator"],
                        ["NPS Calculator", "/epf-calculator"],
                        ["Gratuity Calculator", "/gratuity-calculator"],
                        ["Retirement Calculator", "/retirement-calculator"],
                    ]}
                />
            </main >
        </div >
    );
}