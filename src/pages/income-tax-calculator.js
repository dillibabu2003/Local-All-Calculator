import Head from "next/head";
import { useState } from "react";
import Heading from "../Components/Cagr/Heading.js";
//import { PageSEO } from '@/components/SEO';

import InputSlider from "../Components/Cagr/InputSlider.js";
import Subheading from "../Components/Cagr/Subheading.js";
import CalculatorAndSidePannel from "../Components/Cagr/CalculatorAndSidePannel.js";
import CalculatorWrapper from "../Components/Cagr/CalculatorWrapper.js";
import IncomeTaxCalculator from "../Components/IncomeTaxCalculator.js";
import InputBoxWrapper from "../Components/Cagr/InputBoxWrapper.js";
import InfoBox from "../Components/Cagr/InfoBox.js";
import IncomeTaxInfoBox from "../Components/IncomeTaxInfoBox.js";
import ControlBox from "../Components/Cagr/ControlBox.js";

import UnorderedList from "../Components/Cagr/UnorderedList.js";
import Dropdown from "../Components/Cagr/Dropdown.js";
import RelatedCalculators from "../Components/Cagr/RelatedCalculators.js";
import style from '../styles/cagrInput.module.scss';

export default function Home() {

    let minGrossSalary = 0;
    let maxGrossSalary = 100000000;
    let minAnnualIncomeFromOtherSources = 0;
    let maxAnnualIncomeFromOtherSources = 100000000;

    let minAnnualInterestPaidOnHomeLoanSelf = 0;
    let maxAnnualInterestPaidOnHomeLoanSelf = 100000000;
    let minAnnualInterestPaidOnHomeLoanLetOut = 0;
    let maxAnnualInterestPaidOnHomeLoanLetOut = 100000000;

    let minBasicDeductions = 0;
    let maxBasicDeductions = 100000000;
    let minContributionToNPS = 0;
    let maxContributionToNPS = 100000000;
    let minMedicalInsurancePremium = 0;
    let maxMedicalInsurancePremium = 100000000;
    let minDonationsToCharity = 0;
    let maxDonationsToCharity = 100000000;
    let minInterestOnEducationalLoan = 0;
    let maxInterestOnEducationalLoan = 100000000;
    let minInterestOnDepositInSavingAccount = 0;
    let maxInterestOnDepositInSavingAccount = 100000000;

    let minBasicSalary = 0;
    let maxBasicSalary = 100000000;
    let minDearnessAllowance = 0;
    let maxDearnessAllowance = 100000000;
    let minHRAReceived = 0;
    let maxHRAReceived = 100000000;
    let minTotalRentPaid = 0;
    let maxTotalRentPaid = 100000000;

    const [assessmentYear, setAssessmentYear] = useState("2022-2023");
    const [ageCategory, setAgeCategory] = useState("Below 60");

    const [grossSalary, setGrossSalary] = useState(100000);
    const [annualIncomeFromOtherSources, setAnnualIncomeFromOtherSources] = useState(100000);

    const [annualInterestPaidOnHomeLoanSelf, setAnnualInterestPaidOnHomeLoanSelf] = useState(100000);
    const [annualInterestPaidOnHomeLoanLetOut, setAnnualInterestPaidOnHomeLoanLetOut] = useState(100000);

    const [basicDeductions, setBasicDeductions] = useState(100000);
    const [contributionToNPS, setContributionToNPS] = useState(100000);
    const [medicalInsurancePremium, setMedicalInsurancePremium] = useState(100000);
    const [donationsToCharity, setDonationsToCharity] = useState(100000);
    const [interestOnEducationalLoan, setInterestOnEducationalLoan] = useState(100000);
    const [interestOnDepositInSavingAccount, setInterestOnDepositInSavingAccount] = useState(100000);

    const [basicSalary, setBasicSalary] = useState(100000);
    const [dearnessAllowance, setDearnessAllowance] = useState(100000);
    const [HRAReceived, setHRAReceived] = useState(100000);
    const [totalRentPaid, setTotalRentPaid] = useState(100000);
    const [areYouWorkingInAMetroCity, setAreYouWorkingInAMetroCity] = useState(true);

    const [oldTotalTax, setOldTotalTax] = useState("4,03,846");
    const [newTotalTax, setNewTotalTax] = useState("5,19,276");

    function handleClick(event) {
        setAreYouWorkingInAMetroCity(event.target.checked);
    }

    function calculate() {
        if (minMonthlySalary <= monthlySalary && minYears <= years) {
            console.log(monthlySalary);
            setOutput(
                Math.round((15 * monthlySalary * years) / 26).toLocaleString("en-In")
            );
        }
    }

    return (
        <div className={"app—bg—container overflow—hidden"}>
            {/* <PageSEO title={''}
            description={""} /> */}

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
                    <Heading blue={"Income tax"} />

                    {/* Subheading */}
                    <Subheading>
                        The Income Tax in India is a direct tax levied by the Central Government of India on the income earned by individuals, Hindu Undivided Families (HUFs), companies, firms, and other entities. The Income Tax Department is responsible for administering the tax system in India. The Income Tax in India is based on a progressive tax system, where individuals and other entities are taxed at different rates based on their income. The income tax rates in India are revised every year in the Union Budget, which is presented by the Finance Minister of India.
                    </Subheading>
                </div>

                {/* Calculator and side pannel */}
                <CalculatorAndSidePannel>
                    {/* Calculator and output (WRAPPER) */}
                    <CalculatorWrapper>
                        {/* Calculator */}
                        <IncomeTaxCalculator calculate={calculate}>
                            {/* Input box wrapper */}
                            <InputBoxWrapper>
                                <div className="max-h-[295px] overflow-y-scroll">
                                    <Dropdown
                                        heading={"Assessment year"}
                                        options={["2022-2023", "2023-2024",]}
                                        value={assessmentYear}
                                        setValue={setAssessmentYear}
                                    />

                                    <Dropdown
                                        heading={"Age category"}
                                        options={["Below 60", "60 and above 60", "80 and above 80"]}
                                        value={ageCategory}
                                        setValue={setAgeCategory}
                                    />

                                    {/* Input box & InfoBox*/}
                                    <IncomeTaxInfoBox

                                        contents={[
                                            [
                                                "Income",
                                                <div className="flex flex-col gap-[10px]" key=''>
                                                    <div>

                                                        <div>Gross salary(Basic+DA)</div>
                                                        <InputSlider
                                                            type="rupees"
                                                            min={minGrossSalary}
                                                            max={maxGrossSalary}
                                                            step={10000}
                                                            value={grossSalary}
                                                            setValue={setGrossSalary}
                                                        />
                                                    </div>
                                                    <div>

                                                        <div>Annual income from other sources</div>
                                                        <InputSlider
                                                            type="rupees"
                                                            min={minAnnualIncomeFromOtherSources}
                                                            max={maxAnnualIncomeFromOtherSources}
                                                            step={1000}
                                                            value={annualIncomeFromOtherSources}
                                                            setValue={setAnnualIncomeFromOtherSources}
                                                        />
                                                    </div>
                                                </div>

                                            ],

                                            [
                                                "Exemptions",
                                                <div className="flex flex-col gap-[10px]" key=''>
                                                    <div>
                                                        <div>Annual interest paid on home loan(self)</div>
                                                        <InputSlider
                                                            type="rupees"
                                                            min={minAnnualInterestPaidOnHomeLoanSelf}
                                                            max={maxAnnualInterestPaidOnHomeLoanSelf}
                                                            step={1000}
                                                            value={annualInterestPaidOnHomeLoanSelf}
                                                            setValue={setAnnualInterestPaidOnHomeLoanSelf}
                                                        />
                                                    </div>
                                                    <div>
                                                        <div>Annual interest paid on home loan(let-out)</div>
                                                        <InputSlider
                                                            type="rupees"
                                                            min={minAnnualInterestPaidOnHomeLoanLetOut}
                                                            max={maxAnnualInterestPaidOnHomeLoanLetOut}
                                                            step={1000}
                                                            value={annualInterestPaidOnHomeLoanLetOut}
                                                            setValue={setAnnualInterestPaidOnHomeLoanLetOut}
                                                        />
                                                    </div>
                                                </div>

                                            ],
                                            [
                                                "Deductions",
                                                <div className="flex flex-col gap-[10px]" key=''>
                                                    <div>
                                                        <div>Basic Deductions (80C)</div>
                                                        <InputSlider
                                                            type="rupees"
                                                            min={minBasicDeductions}
                                                            max={maxBasicDeductions}
                                                            step={1000}
                                                            value={basicDeductions}
                                                            setValue={setBasicDeductions}
                                                        />
                                                    </div>
                                                    <div>
                                                        <div>Contribution to NPS</div>
                                                        <InputSlider
                                                            type="rupees"
                                                            min={minContributionToNPS}
                                                            max={maxContributionToNPS}
                                                            step={1000}
                                                            value={contributionToNPS}
                                                            setValue={setContributionToNPS}
                                                        />
                                                    </div>
                                                    <div>
                                                        <div>Medical Insurance Premium (80D)</div>
                                                        <InputSlider
                                                            type="rupees"
                                                            min={minMedicalInsurancePremium}
                                                            max={maxMedicalInsurancePremium}
                                                            step={1000}
                                                            value={medicalInsurancePremium}
                                                            setValue={setMedicalInsurancePremium}
                                                        />
                                                    </div>
                                                    <div>
                                                        <div>Donations to charity (80G)</div>
                                                        <InputSlider
                                                            type="rupees"
                                                            min={minDonationsToCharity}
                                                            max={maxDonationsToCharity}
                                                            step={1000}
                                                            value={donationsToCharity}
                                                            setValue={setDonationsToCharity}
                                                        />
                                                    </div>
                                                    <div>
                                                        <div>Interest on educational loan (80E)</div>
                                                        <InputSlider
                                                            type="rupees"
                                                            min={minInterestOnEducationalLoan}
                                                            max={maxInterestOnEducationalLoan}
                                                            step={1000}
                                                            value={interestOnEducationalLoan}
                                                            setValue={setInterestOnEducationalLoan}
                                                        />
                                                    </div>
                                                    <div>
                                                        <div>Interest on deposits in saving account (80TTA/TTB)</div>
                                                        <InputSlider
                                                            type="rupees"
                                                            min={minInterestOnDepositInSavingAccount}
                                                            max={maxInterestOnDepositInSavingAccount}
                                                            step={1000}
                                                            value={interestOnDepositInSavingAccount}
                                                            setValue={setInterestOnDepositInSavingAccount}
                                                        />
                                                    </div>
                                                </div>

                                            ],

                                            [
                                                "HRA Exemption",
                                                <div className="flex flex-col gap-[10px]" key=''>
                                                    <div>
                                                        <div>Basic salary(p.a)</div>
                                                        <InputSlider
                                                            type="rupees"
                                                            min={minBasicSalary}
                                                            max={maxBasicSalary}
                                                            step={1000}
                                                            value={basicSalary}
                                                            setValue={setBasicSalary}
                                                        />
                                                    </div>
                                                    <div>
                                                        <div>Dearness Allowance(p.a)</div>
                                                        <InputSlider
                                                            type="rupees"
                                                            min={minDearnessAllowance}
                                                            max={maxDearnessAllowance}
                                                            step={1000}
                                                            value={dearnessAllowance}
                                                            setValue={setDearnessAllowance}
                                                        />
                                                    </div>
                                                    <div>
                                                        <div>HRA received(p.a)</div>
                                                        <InputSlider
                                                            type="rupees"
                                                            min={minHRAReceived}
                                                            max={maxHRAReceived}
                                                            step={1000}
                                                            value={HRAReceived}
                                                            setValue={setHRAReceived}
                                                        />
                                                    </div>
                                                    <div>
                                                        <div>Total rent paid(p.a)</div>
                                                        <InputSlider
                                                            type="rupees"
                                                            min={minTotalRentPaid}
                                                            max={maxTotalRentPaid}
                                                            step={1000}
                                                            value={totalRentPaid}
                                                            setValue={setTotalRentPaid}
                                                        />
                                                    </div>

                                                    <div className=" flex flex-row mt-[20px] ">
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
                                                </div>

                                            ]
                                        ]}

                                    />
                                </div>
                            </InputBoxWrapper>
                        </IncomeTaxCalculator>

                        {/* Output wrapper */}
                        <div className={"lg:w-[50%] text-center self-center leading-9"}>
                            <div className={"font-bold text-4xl "}><span className="font-['Rubik']">{'\u20B9 '}</span>{oldTotalTax}</div>
                            <div className="font-semibold">Total tax (Old Regime)</div>
                            <div className={"font-bold text-4xl "}><span className="font-['Rubik']">{'\u20B9 '}</span>{newTotalTax}</div>
                            <div className="font-semibold">Total tax (New Regime)</div>
                        </div>
                    </CalculatorWrapper>

                    {/* Side Pannel */}
                    <div className="xl:max-h-[380px] [@media(min-width:1920px)]:max-h-[400px] xl:w-[23%] ">
                        <InfoBox
                            type="sidePannel"
                            contents={[
                                [
                                    "Income tax",
                                    "The Income Tax in India is a direct tax levied by the Central Government of India on the income earned by individuals, Hindu Undivided Families (HUFs), companies, firms, and other entities.",
                                ],
                                [
                                    "Allowed deductions",
                                    <>
                                        <UnorderedList
                                            key=''
                                            content={[
                                                "Section 80C, 80CCC and 80CCD(1)",
                                                "Section 80D",
                                                "Section 80C and Section 24",
                                                "Section 80E",
                                                "Section 80G",
                                                "Section 80TTA",
                                                "Section 80EE",
                                            ]}
                                        />
                                        <br />
                                        These are the commonly used detections along with HRA exemptions.
                                    </>
                                ],
                                [
                                    "How can I save taxes?",
                                    <>
                                        <UnorderedList
                                            key=''
                                            content={[
                                                "Invest in tax-saving instruments like PPF, NSC, ELSS, etc.",
                                                "Claim a deduction on the interest paid on a home loan and education loan.",
                                                "Donate to charitable institutions and claim a deduction.",
                                                "Claim a deduction for the rent paid as a part of HRA.",
                                                "Invest in NPS and claim a deduction on your salary.",
                                            ]}
                                        />
                                    </>
                                ],
                                [
                                    "Income tax slabs",
                                    "Please refer to the FAQ section.",
                                ],
                            ]}
                        />
                    </div>
                </CalculatorAndSidePannel>


                {/* FAQ box */}
                <InfoBox
                    type="faq"
                    contents={[
                        [
                            "What is Income tax?",
                            <>
                                The Income Tax in India is a direct tax levied by the Central Government of India on the income earned by individuals, Hindu Undivided Families (HUFs), companies, firms, and other entities. The Income Tax Department is responsible for administering the tax system in India.
                                <br />
                                The Income Tax in India is based on a progressive tax system, where individuals and other entities are taxed at different rates based on their income. The income tax rates in India are revised every year in the Union Budget, which is presented by the Finance Minister of India.
                            </>,
                        ],
                        [
                            "Why should I calculate my income tax?",
                            "In India, income tax is calculated based on a system of tax slabs, where different income levels are taxed at different rates. By calculating your income tax, you can determine which tax slab you fall under and how much tax you owe. Additionally, calculating your income tax can also help you plan your finances better. By knowing how much tax you owe, you can budget for your expenses and plan your savings accordingly. You may also be eligible for certain deductions and exemptions, which can lower your tax liability.",

                        ],
                        [
                            "How does the Income tax calculator work?",
                            "FundsIndia Income tax calculator takes into account your gross income and deductions to calculate your taxable income then applies the income tax slabs to give you the amount of tax you owe according to old and new regimes.",

                        ],
                        [
                            "How to use Income Tax calculator?",
                            "FundsIndia IT calculator is an intuitive tool that can calculate your taxes just by taking in the income along with all the deductions in various sections and give you the precise amount you owe, regardless of what tax regimes you opted. Just fill the fields that apply to you and you can have your tax amount in minutes.",
                        ],
                        [
                            "What are  income tax slabs?",
                            <>
                                Individual taxpayers are subject to taxation under the Indian Income Tax based on a slab structure. Several tax rates are established for various income groups under a slab system. It indicates that when a taxpayer&#39;s income rises, so do their tax rates. This kind of taxation helps the nation to have progressive and equitable tax systems. These income tax slabs frequently vary with each budget. These slab rates vary depending on the type of taxpayer. Three categories of &#34;individual&#34; taxpayers under the income tax system include:
                                <br /><br />
                                <UnorderedList
                                    key=''
                                    content={[
                                        "Individuals (aged less than of 60 years) including residents and non-residents",
                                        "Resident Senior citizens (60 to 80 years of age)",
                                        "Resident Super senior citizens (aged more than 80 years)",
                                    ]}
                                />
                            </>
                        ],
                    ]}
                />

                {/* Related Calculators */}
                <RelatedCalculators
                    contents={[
                        ["EPF Calculator", "/epf-calculator"],
                        // ["PPF Calculator", "/gratuity-calculator"],//same page
                        ["NSC Calculator", "/nsc-calculator"],
                        ["Retirement Calculator", "/retirement-calculator"],
                    ]}
                />
            </main>
        </div>
    );
}
