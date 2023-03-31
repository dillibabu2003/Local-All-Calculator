/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-css-tags */
/* eslint-disable react/jsx-key */

import Head from "next/head";
import { useState } from "react";
//import { PageSEO } from '@/components/SEO';

import Heading from "../Components/Cagr/Heading.js";
import Subheading from "../Components/Cagr/Subheading.js";
import CalculatorAndSidePannel from "../Components/Cagr/CalculatorAndSidePannel.js";
import CalculatorWrapper from "../Components/Cagr/CalculatorWrapper.js";
import Calculator from "../Components/Cagr/Calculator.js";
import InputBoxWrapper from "../Components/Cagr/InputBoxWrapper.js";
import ChartToggle from "../Components/Cagr/ChartToggle.js";
import InfoBox from "../Components/Cagr/InfoBox.js";
import ChartFooterElement from "../Components/Cagr/ChartFooterElement.js";

import InputSlider from "../Components/Cagr/InputSlider.js";
import UnorderedList from "../Components/Cagr/UnorderedList.js";
import PPFLineChart from "../Components/PPFLineChart.js";
import PPFDoughnutChart from "../Components/PPFDoughnutChart.js";
import RelatedCalculators from "../Components/Cagr/RelatedCalculators.js";
import Advertisement from "../Components/Cagr/Advertisement.js";
import style from '../styles/cagrInput.module.scss';
import Dropdown from "../Components/Cagr/Dropdown.js";
import { time } from "highcharts";


export default function Home() {

        const [totalInvestment, setTotalInvestment] = useState(100000);
        const [totalInvestmentString, setTotalInvestmentString] = useState("1,00,000");
      
        const [timePeriod, setTimePeriod] = useState(15);
        const [timePeriodString, setTimePeriodString] = useState("15");
      
        const [compoundingFrequency,setcompoundingFrequency]=useState("Half-yearly");

        const minTotalInvestment=500;
        const maxTotalInvestment=150000;
        const stepTotalInvestment=500;

        const minTimePeriod=15;
        const maxTimePeriod=50;
        const stepTimePeriod=1;
        
        let compoundInterest = 0;
      
        const [output, setOutput] = useState(2532344);
        const [totalAmount, settotalAmount] = useState(125000);
      
        const [isLineChart, setCheck] = useState(true);
        const [graphPoints, setGraphPoints] = useState([100000,207100, 321804, 444652, 576222, 717134,868051,1029682,1202790,1388188,1586749,1799409,2027167,2271095,2532343]);
        
        function calculate() {
          if(totalInvestment>=minTimePeriod&&totalInvestment<=maxTotalInvestment&&timePeriod>=minTimePeriod&&timePeriod<=maxTimePeriod){
          let compoundingFrequencyValue=1;
            if (compoundingFrequency === "Monthly") {
                compoundingFrequencyValue= 12;
              }
              else if (compoundingFrequency === "Quaterly") {
                compoundingFrequencyValue= 4;
              }
              else if (compoundingFrequency === "Half-yearly") {
                compoundingFrequencyValue= 2;
              }
              else if (compoundingFrequency === "Annually") {
                compoundingFrequencyValue= 1;
              }
          setTotalInvestmentString(totalInvestment.toLocaleString("en-In"));
          setTimePeriodString(timePeriod);
          //setInterestRateString(interestRate);
         compoundInterest= Math.ceil(totalInvestment*((Math.pow(1.0710,timePeriod)-1)/0.0710));
          if (compoundInterest === Infinity || isNaN(compoundInterest)) {
            setOutput(0);
          }
          else {
            setOutput(compoundInterest);
          }
          settotalAmount(compoundInterest+totalInvestment);
          
          calculateGraphPoints();
        }
        }
      
      
        function calculateGraphPoints() {
          let points = [];
         // points.push(totalInvestment);
          for (let i = 1; i <= timePeriod; i++) {
              compoundInterest =Math.round(totalInvestment*((((Math.pow(1.0710,i)))-1)/(0.0710)));
              console.log(compoundInterest);
              points.push(compoundInterest);
          }
          setGraphPoints(points);
        }
      

    return (
        <div className={"app—bg—container overflow—hidden "}>
            {/* <PageSEO title={'CAGR Calculator - calculate the componded annual growth rate - FundsIndia'}
            description={"Calculate your investment's compound annual growth rate online with our new CAGR calculator over a specified period of time easily."} /> */}
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
                className={
                    "relative [@media(max-width:400px)]:px-[16px] [@media(max-width:1280px)]:px-[40px] xl:px-[80px] pt-[108px] [@media(max-width:500px)]:pt-[80px] py-[50px] w-full overflow-x-hidden flex-col justify-between text-[#464143]   leading-[20px] [@media(min-width:1920px)]:leading-[22px] "
                }
            >

                <div>
                    {/* Heading */}
                    <Heading blue={"PPF "} />

                    {/* Subheading */}
                    <Subheading>
                    Public Provident Fund (PPF) is a long-term savings scheme offered by the government of India.
                     It is a tax-free investment option that provides an individual with a secure and low-risk investment option. 
                     This calculator can be used to estimate the amount of savings that an individual can accumulate in a PPF account over a specified period of time.
                      The calculator takes into account the amount of contribution made and the duration of investment, and provides an estimate of the total amount that will be accumulated at maturity.
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
                                    
                                    <div>Yearly investment</div>
                                    <InputSlider
                                        id="initialInvestment"
                                        type="rupees"
                                        min={minTotalInvestment}
                                        max={maxTotalInvestment}
                                        step={stepTotalInvestment}
                                        value={totalInvestment}
                                        setValue={setTotalInvestment}
                                    />
                                </div>

                                <div>
                            
                                    <div>Time Period (Yrs)</div>
                                    <InputSlider
                                        id="finalInvestment"
                                    
                                        min={minTimePeriod}
                                        max={maxTimePeriod}
                                        step={stepTimePeriod}
                                        value={timePeriod}
                                        setValue={setTimePeriod}
                                    />
                                </div>

                                <Dropdown
                              heading={"Investment frequency"}
                              options={["Monthly", "Quaterly", "Half-yearly", "Annually"]}
                            value={compoundingFrequency}
                            setValue={setcompoundingFrequency}
                            />

                                
                                   
                                

                          <div className=" flex  justify-between flex-warp ">
                  
                       <div>Rate of interest</div>
                
                       {/* <div className={'h-[40px] w-[175.74px] text-[#1B1C20] bg-[#DCE3EE] border-2 border-solid border-[#C7CFDD] rounded-[100px] text-center text-[14px] font-semibold [@media(min-width:1920px)]:text-[18px] flex items-center justify-center'}>7.1%</div>
                        </div> */}
                        <div className=" flex items-center justify-center bg-[#DCE3EE] border-2 border-solid border-[#C7CFDD] w-[39%] lg:ml-[25px] ml-[10px] min-w-[150px]  [@media(max-width:500px)]:min-w-[120px]  text-[#1B1C20] h-[40px]  rounded-[100px] font-semibold  ">7.1%</div>
                        </div>
                            </InputBoxWrapper>
                        </Calculator>

                        {/* Charts/Graph wrapper */}
                        <div className={"lg:w-[50%]"}>
                            {/* Toggle Button */}
                            <ChartToggle isLineChart={isLineChart} setCheck={setCheck} />

                            {/* Charts/Graph */}
                            <div className={" relative object-right-top"}>
                                {isLineChart ? (
                                    <>
                                        <PPFLineChart points={graphPoints} />
                                        
                                    </>
                                ) : (
                                    <>
                                        <PPFDoughnutChart
                                            totalInterestAmount={timePeriod*totalInvestment}
                                            totalInvestmentAmount={output}
                                            dependency={output}
                                        />
            
                                    </>
                                )}
                            </div>

                            {/* Output box */}
                            <div className={"flex-col "}>
                                             <ChartFooterElement
                                                id={"invested"}
                                                label={"Total Investment"}
                                                value={'\u20B9 ' + (totalInvestment*timePeriod ).toLocaleString('en-In')}
                                            />
                                            <ChartFooterElement
                                                id={"totalInterest"}
                                                label={"Total Interest"}
                                                value={'\u20B9 ' + output.toLocaleString('en-In')}
                                            />
                                            <ChartFooterElement
                                                id={"maturityValue"}
                                                label={"Maturity Value"}
                                                value={'\u20B9 '+ ((totalInvestment*timePeriod)+output).toLocaleString('en-In')}
                                            />
                            </div>
                        </div>
                    </CalculatorWrapper>

                    {/* Side Pannel */}
                    <div className="xl:max-h-[409.2px] [@media(min-width:1920px)]:max-h-[385.2px]  xl:w-[23%] ">
                        <InfoBox
                            type={"sidePannel"}
                            contents={[
                                [
                                    "Public Providend Fund",
                                    "Public Provident Fund (PPF) is a long-term savings scheme offered by the government of India.",
                                ],
                                [
                                    "Historical interest rates",
                                    <div className="w-full">
                        <table className=" border-2 border-solid w-full ">
                          <thead>
                            <tr className=" border-2 border-solid ">
                            <th className=" border border-solid p-2 ">Financial Year</th>
                            <th className=" border border-solid p-2 ">Interest Rate</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">October to December 2022</td>
                              <td className=" border border-solid px-4 py-2 text-center">7.1%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">July to September 2022</td>
                              <td className=" border border-solid px-4 py-2 text-center">7.1%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">April to June 2022</td>
                              <td className=" border border-solid px-4 py-2 text-center">7.1%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">January to March 2022</td>
                              <td className=" border border-solid px-4 py-2 text-center">7.1%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">October to December 2021</td>
                              <td className=" border border-solid px-4 py-2 text-center">7.1%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">July to September 2021</td>
                              <td className=" border border-solid px-4 py-2 text-center">7.1%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">April to June 2021</td>
                              <td className=" border border-solid px-4 py-2 text-center">7.1%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">January to March 2021</td>
                              <td className=" border border-solid px-4 py-2 text-center">7.1%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">October to December 2020</td>
                              <td className=" border border-solid px-4 py-2 text-center">7.1%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">July to September 2020</td>
                              <td className=" border border-solid px-4 py-2 text-center">7.1%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">April to June 2020</td>
                              <td className=" border border-solid px-4 py-2 text-center">7.1%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">January to March 2020</td>
                              <td className=" border border-solid px-4 py-2 text-center">7.90%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">October to December 2019</td>
                              <td className=" border border-solid px-4 py-2 text-center">7.90%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">July to September 2019</td>
                              <td className=" border border-solid px-4 py-2 text-center">7.90%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">April to June 2019</td>
                              <td className=" border border-solid px-4 py-2 text-center">8.0%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">January to March 2019</td>
                              <td className=" border border-solid px-4 py-2 text-center">8.0%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">October to December 2018</td>
                              <td className=" border border-solid px-4 py-2 text-center">7.8%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">July to September 2018</td>
                              <td className=" border border-solid px-4 py-2 text-center">7.8%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">April to June 2018</td>
                              <td className=" border border-solid px-4 py-2 text-center">7.9%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                   ,
                                ],
                                [
                                    "Maturity value of the investment",
                                    "You can easily calculate the maturity value of your investment by using the FundsIndia PPF calculator.",
                                ],
                                [
                                    "Lock-in Period",
                                    "The funds invested in a PPF account have a lock-in period of 15 years and the maturity period is 15 years from the date of opening the account."
                                ],
                            ]}
                        />
                    </div>
                </CalculatorAndSidePannel>

                {/* FAQ box */}
                <InfoBox
                    type={"faq"}
                    contents={[
                        [
                            "What is Public Provident Fund?",
                            "Public Provident Fund (PPF) is a long-term savings scheme offered by the government of India. It is a tax-free investment option that provides an individual with a secure and low-risk investment option.",
                        ],
                        [
                            "What is the lock-in period of PPF investment?",
                            "The funds invested in a PPF account have a lock-in period of 15 years and the maturity period is 15 years from the date of opening the account.",
                        ],
                        [
                            "What is the minimum investment?",
                            "The minimum investment in a PPF account is Rs. 500 and the maximum investment is Rs. 1.5 Lakhs per financial year."

                        ],
                        [
                            "What are the tax implications of a PPF investment?",
                            "The interest earned and the maturity amount are exempt from tax under Indian Income Tax laws."

                        ],
                        [
                            "How can you use the PPF calculator?",
                            "The calculator takes into account the amount of contribution made and the duration of investment, and provides an estimate of the total amount that will be accumulated at maturity. Just plug-in the required values "
                        ],
                        [
                            "How does the PPF calculator work?",
                            <div>
                            <div className="mb-[10px]">The PPF calculator takes 2 inputs namely, Yearly investment and tenure of investment.
                             It uses the following logic
                             </div>
                             <div className={"font-semibold flex items-center "}> The formula for this is: F = P[({'{'}(1+i)^n{'}'}-1)/i]</div>

                            <div className={"font-semibold"}>
                            <div>Here,F=  Maturity proceeds of the PPF</div>
                            <div>P = Annual instalments</div>
                            <div>n = Number of years </div>
                            <div>i = Rate of interest/100</div>
                            </div>
                         </div>,
                               
                        ],
                        [
                            "When does my PPF investment mature?",
                            "A Public Provident Fund (PPF) account matures after 15 years from the date of opening the account. The account can be extended for a block of 5 years at a time, after the maturity period, by submitting a request to the bank or post office where the account is held.",
                        ],
                    ]}
                />

                {/* Related Calculators */}
                <RelatedCalculators
                    contents={[
                        ["Compound Interest Calculator", "/compound-interest-calculator"],
                        ["Simple Interest Calculator", "/simple-interest-calculator"],
                        ["FD Calculator", "/fd-calculator"],
                        ["Mutual Funds Calculator", "/cagr-calculator"],//same page
                    ]}
                />

            </main>
        </div>
    );
}