import { useState } from "react";
import Collapsible from 'react-collapsible';
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

export default function InfoBox({ contents }) {

    let style = " h-full [@media(max-width:470px)]:px-[15px] py-[22px] max-xl:mt-[30px] overflow-y-scroll text-[14px] [@media(min-width:1920px)]:text-[18px]";

    const styleCollapsible = {
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 600,
        color: '#0161FF',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0',
    }


    let lineStyle = {
        width: 100 + '%',
        height: '0px',
        border: '0.5px solid #D0D0D0',
        opacity: 1,
        marginTop: '0',
        margin: '10px 0',
    }

    let contentStyle = ' mt-[10px] text-[#464143] text-[14px] [@media(min-width:1920px)]:text-[18px] font-normal [@media(max-width:1280px)]:pr-[10px] pr-[5px] ';
    let [isOpen1, setIsOpen1] = useState(false);
    let [isOpen2, setIsOpen2] = useState(false);
    let [isOpen3, setIsOpen3] = useState(false);
    let [isOpen4, setIsOpen4] = useState(false);

    function handleOpen(accordionPosition) {
        let isOpenPos;
        switch (accordionPosition) {
            case 1:
                isOpenPos = isOpen1;
                break;
            case 2:
                isOpenPos = isOpen2;
                break;
            case 3:
                isOpenPos = isOpen3;
                break;
            case 4:
                isOpenPos = isOpen4;
                break;
        }
        setIsOpen1(false);
        setIsOpen2(false);
        setIsOpen3(false);
        setIsOpen4(false);
        switch (accordionPosition) {
            case 1:
                setIsOpen1(!isOpenPos);
                break;
            case 2:
                setIsOpen2(!isOpenPos);
                break;
            case 3:
                setIsOpen3(!isOpenPos);
                break;
            case 4:
                setIsOpen4(!isOpenPos);
                break;
        }
    }

    return (
        <div className={style} >
            <>
                <Collapsible
                    trigger={[contents[0][0], <HiOutlineChevronDown key={'downIcon'} style={{ flexShrink: 0, color: '#005CFF', width: '18px', height: '18px' }} />]}
                    triggerWhenOpen={[contents[0][0], <HiOutlineChevronUp key={'upIcon'} style={{ flexShrink: 0, color: '#005CFF', width: '18px', height: '18px' }} />]}
                    triggerStyle={styleCollapsible}
                    open={isOpen1}
                    accordionPosition={1}
                    handleTriggerClick={handleOpen}
                >
                    <div className={contentStyle}>{contents[0][1]}</div>
                </Collapsible >

                {/* line */}

                <div style={lineStyle} />

            </>
            <>
                <Collapsible
                    trigger={[contents[1][0], <HiOutlineChevronDown key={'downIcon'} style={{ flexShrink: 0, color: '#005CFF', width: '18px', height: '18px' }} />]}
                    triggerWhenOpen={[contents[1][0], <HiOutlineChevronUp key={'upIcon'} style={{ flexShrink: 0, color: '#005CFF', width: '18px', height: '18px' }} />]}
                    triggerStyle={styleCollapsible}
                    open={isOpen2}
                    accordionPosition={2}
                    handleTriggerClick={handleOpen}
                >
                    <div className={contentStyle}>{contents[1][1]}</div>
                </Collapsible >

                {/* line */}

                <div style={lineStyle} />

            </>
            <>
                <Collapsible
                    trigger={[contents[2][0], <HiOutlineChevronDown key={'downIcon'} style={{ flexShrink: 0, color: '#005CFF', width: '18px', height: '18px' }} />]}
                    triggerWhenOpen={[contents[2][0], <HiOutlineChevronUp key={'upIcon'} style={{ flexShrink: 0, color: '#005CFF', width: '18px', height: '18px' }} />]}
                    triggerStyle={styleCollapsible}
                    open={isOpen3}
                    accordionPosition={3}
                    handleTriggerClick={handleOpen}
                >
                    <div className={contentStyle}>{contents[2][1]}</div>
                </Collapsible >

                {/* line */}

                <div style={lineStyle} />

            </>
            <>
                <Collapsible
                    trigger={[contents[3][0], <HiOutlineChevronDown key={'downIcon'} style={{ flexShrink: 0, color: '#005CFF', width: '18px', height: '18px' }} />]}
                    triggerWhenOpen={[contents[3][0], <HiOutlineChevronUp key={'upIcon'} style={{ flexShrink: 0, color: '#005CFF', width: '18px', height: '18px' }} />]}
                    triggerStyle={styleCollapsible}
                    open={isOpen4}
                    accordionPosition={4}
                    handleTriggerClick={handleOpen}
                >
                    <div className={contentStyle}>{contents[3][1]}</div>
                </Collapsible >

            </>
        </div>
    );
}