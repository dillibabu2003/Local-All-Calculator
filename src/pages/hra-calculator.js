/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import { useState } from "react";
import InputSlider from '../Components/Cagr/InputSlider.js';
import InfoBox from "../Components/Cagr/InfoBox.js";
import RelatedCalculators from "../Components/Cagr/RelatedCalculators.js";
//import { PageSEO } from '@/components/SEO';


import Heading from "../Components/Cagr/Heading.js";
import Subheading from "../Components/Cagr/Subheading.js";
import CalculatorAndSidePannel from "../Components/Cagr/CalculatorAndSidePannel.js";
import CalculatorWrapper from "../Components/Cagr/CalculatorWrapper.js";
import Calculator from "../Components/Cagr/Calculator.js";
import InputBoxWrapper from "../Components/Cagr/InputBoxWrapper.js";

import { VscCircleFilled } from "react-icons/vsc";

import style from '../styles/cagrInput.module.scss';

export default function Home() {


    const [basicSalary, setBasicSalary] = useState(10000);
    const [dearnessAllowance, setDearnessAllowance] = useState(70000);
    const [hraReceived, setHraReceived] = useState(10000);
    const [totalRent, setTotalRent] = useState(10000);

    const [exempted, setExempted] = useState(2000);
    const [taxable, setTaxable] = useState(8000);
    const [isMetro, setIsMetro] = useState(true);

    function calculate() {

        let a = (totalRent - (basicSalary + dearnessAllowance) * 0.1);
        let rate = isMetro ? 0.4 : 0.5;
        let b = (basicSalary + dearnessAllowance) * rate;
        let c = hraReceived;
        if (a < b && a < c) {
            setExempted(a);
            setTaxable(c - a);
        }
        else if (b < c && b < a) {
            setExempted(b);
            setTaxable(c - b);
        }
        else if (c < a && c < b) {
            setExempted(c);
            setTaxable(c - c);
        }
    }

    function handleClick(event) {
        setIsMetro(event.target.checked);
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
                    <Heading blue={"Housing Rent Allowance"} />
                    <Subheading>
                        Housing Rent Allowance (HRA) is a common component of the salary package provided to employees in India. It is an allowance paid by the employer to the employee to cover their rental expenses for a house or apartment.
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
                                <div className=" mb-3">
                                    {/*Basic Salary block*/}
                                    <div >Basic salary(p.a)</div>
                                    <InputSlider
                                        type="rupees"
                                        min={1000}
                                        max={1000000}
                                        step={1000}
                                        value={basicSalary}
                                        setValue={setBasicSalary}
                                    />
                                </div>

                                <div className=" mb-3">
                                    {/*Dearness Allowance block*/}
                                    <div >Dearness Allowance(p.a)</div>
                                    <InputSlider
                                        type="rupees"
                                        min={0}
                                        max={1000000}
                                        step={1000}
                                        value={dearnessAllowance}
                                        setValue={setDearnessAllowance}
                                    />
                                </div>

                                <div className=" mb-3">
                                    {/*Hra Received block*/}
                                    <div >HRA Received(p.a)</div>
                                    <InputSlider
                                        type="rupees"
                                        min={1000}
                                        max={1000000}
                                        step={1000}
                                        value={hraReceived}
                                        setValue={setHraReceived}
                                    />
                                </div>

                                <div className=" mb-3">
                                    {/*Total Rent paid  block*/}
                                    <div >Total Rent Paid(p.a)</div>
                                    <InputSlider
                                        type="rupees"
                                        min={1000}
                                        max={1000000}
                                        step={1000}
                                        value={totalRent}
                                        setValue={setTotalRent}
                                    />
                                </div>

                                <div className=" flex flex-row  ">
                                    {/*Metro city Yes or No block*/}
                                    <div className=" text-[14px] w-[80%] [@media(min-width:1920px)]:text-[18px] mt-1">Are you working in a metro city?</div>

                                    <div className=" flex-row flex w-[40%] ml-4  ">
                                        <span className="text-[14px] [@media(min-width:1920px)]:text-[18px] mt-1">Yes</span>
                                        <div className=" mx-2">
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input type="checkbox" className="sr-only peer" onChange={handleClick} />
                                                <div className="w-[3rem] h-7 bg-[#0f0f0f27] rounded-full dark:top-[2px] border-[2px] shadow-xl border-solid dark:bg-[#4f4c4c27] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-blue-600  after:border-[2px] after:border-solid after:border-white after:rounded-full after:h-[20px] after:w-[20px] after:transition-all dark:border-white "></div>
                                            </label>
                                        </div>
                                        <span className="text-[14px] [@media(min-width:1920px)]:text-[18px] mt-1">No</span>
                                    </div>
                                </div>

                            </InputBoxWrapper>
                        </Calculator>

                        {/* Charts/Graph wrapper */}
                        <div className={"lg:w-[50%] self-center"}>

                            <div className={"flex flex-col items-center text-[#1B1C20]"}>

                                <div className={" font-semibold text-[36px] mt-4"}>
                                    {exempted.toLocaleString('en-In')}
                                </div>
                                <div className={"font-medium text-[14px] leading-[55px] [@media(min-width:1536px)]:text-[18px]"}>
                                    Exempted HRA
                                </div>

                            </div>

                            <div className={"flex flex-col font-bold mt-4 items-center text-[#1B1C20]"}>
                                <div className=" font-semibold text-[36px]">
                                    {taxable.toLocaleString('en-In')}
                                </div>
                                <div className={"font-medium  text-[14px] leading-[55px] [@media(min-width:1536px)]:text-[18px]"}>
                                    Taxable HRA
                                </div>
                            </div>
                        </div>
                    </CalculatorWrapper>

                    {/* Side Pannel */}
                    <div className="[@media(min-width:1536px)]:max-h-[502.4px] [@media(min-width:1920px)]:max-h-[519.8px] [@media(min-width:1366px)]:max-h-[509.2px] [@media(min-width:1280px)]:max-h-[502.4px]  xl:w-[23%] ">
                        <InfoBox
                            type="sidePannel"
                            contents={[
                                ["Housing Rent Allowance", "Housing Rent Allowance (HRA) is a common component of the salary package provided to employees in India."],
                                ["Find out how much tax I owe based on my HRA",
                                    "You can use the FundsIndia HRA calculator to calculate the taxable value."],
                                ["Find out how much I can save with HRA", "You can make use of the FundsIndia calculator to find out how much you can save from taxes with this deduction.                  "],
                                ["How to calculate HRA",
                                    <div key=''>
                                        <div>The exempt HRA amount is the minimum of the following three:
                                        </div>
                                        <div>a. Actual HRA received from the employer</div>
                                        <div>b. Rent paid minus 10% of the basic salary</div>
                                        <div>c. 50% of the basic salary if the employee resides in a Tier-1 city, or 40% of the basic salary if the employee resides in a Tier-2/Tier-3 city.</div>
                                    </div>],
                            ]}
                        />
                    </div>
                </CalculatorAndSidePannel>
                {/* FAQ box */}
                <InfoBox
                    type="faq"
                    contents={[
                        ["What is HRA?",
                            <>
                                <div>Housing Rent Allowance (HRA) is a common component of the salary package provided to employees in India. It is an allowance paid by the employer to the employee to cover their rental expenses for a house or apartment.</div>

                            </>
                        ],
                        ["Why should I calculate my HRA exemption?",
                            <>
                                <div>By calculating the HRA exemption, you can reduce your taxable income and consequently, the amount of income tax you are required to pay. This can help you save money and manage your finances better.</div>
                                <br />
                                <div>It&#39;s also important to calculate HRA to ensure that you are claiming the correct amount of exemption, and not over or under claiming. Over claiming can result in a penalty and under claiming can lead to unnecessary tax liability.</div>

                            </>],
                        ["How does the HRA calculator work?",
                            <>
                                <div>It uses the following logic</div>
                                <br />
                                <div className="flex flex-row">
                                    <VscCircleFilled className="  text-[#00DD6F] mt-[2px] mr-[2px] relative flex-shrink-0 " />
                                    Calculate the exempt HRA amount: The exempt HRA amount is the minimum of the following three:
                                </div>
                                <br />
                                <div className=" ml-4">
                                    <div >a. Actual HRA received from the employer</div>
                                    <br />
                                    <div >b. Rent paid minus 10% of the basic salary</div>
                                    <br />
                                    <div >c. 50% of the basic salary if the employee resides in a Tier-1 city, or 40% of the basic salary if the employee resides in a Tier-2/Tier-3 city.</div>
                                </div>
                                <br />
                                <div className="flex flex-row ">
                                    <VscCircleFilled className="  text-[#00DD6F] mt-[2px] mr-[2px] relative flex-shrink-0 " />
                                    The remaining amount is taxable: The remaining HRA amount, which is not exempt, is added to the employee’s income and is subject to tax.</div>

                            </>
                        ],
                        ["How to use HRA calculator?",
                            <>
                                <div>FundsIndia HRA calculator is an intuitive tool that calculates the HRA easily. Just plug in the basic salary, dearness allowance, HRA received and rent paid. The calculator will give you the exempted amount and taxable amount.</div>

                            </>
                        ]
                    ]}
                />



                {/* Related Calculators */}
                <RelatedCalculators
                    contents={[
                        // ["Income Tax Calculator", "/hra-calculator"],//same link
                        ["EPF Calculator", "/epf-calculator"],
                        // ["PPF Calculator", "/hra-calculator"],//same link
                        // ["SWP Calculator", "/hra-calculator"],//same link
                    ]}
                />
            </main >
        </div >
    );
}