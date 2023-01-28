import { Fragment, useContext, useState } from "react";
// import {inputToggle} from './NavBar'
import { Container } from "./NavBar";
import {FcCheckmark} from 'react-icons/fc';
import "../Styles/Pricing.css"

function Pricing() {
    const {toggle} = useContext(Container)
    const [toggleBasic, setToggleBasic] = useState(true)
    const [toggleStandart, setToggleStandart] = useState(true)
    const [togglePremium, setTogglePremium] = useState(true)

    const [basicCost, setBasicCost] = useState('9.99')
    const [StandartCost, setStandartCost] = useState('12.99')
    const [PremiumCost, setPremiumCost] = useState('19.99')

    return ( 
        <Fragment>
            <div className={toggle ? 'backgroun-Color-Main': 'backgroun-Color-secondary'}>
                <dsi className ="Pricing-container">
                    <div className={toggle ? "Pricing-option1" : "light-Theme1"}>
                        <h2>Basic</h2>
                        <div className="Price">
                            <h3>{basicCost}$</h3><h4 id ="MonthlyYearly">{toggleBasic ? '/Monthly' : '/Yearly'}</h4>
                        </div>
                        <span><FcCheckmark fontSize={25} id = "checkmark"/>Ultimate films and tv programmes</span>
                        <span><FcCheckmark fontSize={25} id = "checkmark"/>Watch on mobile phones and tables</span>
                        <span><FcCheckmark fontSize={25} id = "checkmark"/>Cancel at anytime</span>
                        <span><FcCheckmark fontSize={25} id = "checkmark"/>First month completely free</span>
                        <button id = 'button1'>By Now</button>
                        <div id= "darktheme">
                            <div className="Pricing-yearly-darktheme" onClick={() => {
                                setToggleBasic(!toggleBasic)
                                if (toggleBasic){
                                    setBasicCost('60')
                                } else{ 
                                    setBasicCost('9.99')
                                }
                            }}> 
                            <div className={toggleBasic ? 'Pricing-monthly-darktheme' : 'Pricing-monthly-light'}></div>

                            </div>
                        </div>
                    </div>
                    <div className={toggle ? "Pricing-option2" : "light-Theme2"}>
                        <h2>Standart</h2>
                        <div className="Price">
                            <h3>{StandartCost}$</h3><h4 id ="MonthlyYearly">{toggleStandart ? '/Monthly' : '/Yearly'}</h4>
                        </div>
                        <span><FcCheckmark fontSize={25} id = "checkmark"/>Ultimate films and tv programmes</span>
                        <span><FcCheckmark fontSize={25} id = "checkmark"/>Watch on mobile phones and tables</span>
                        <span><FcCheckmark fontSize={25} id = "checkmark"/>Cancel at anytime</span>
                        <span><FcCheckmark fontSize={25} id = "checkmark"/>First month completely free</span>
                        <span><FcCheckmark fontSize={25} id = "checkmark"/>HD avaiable</span>
                        <button id = 'button2'>By Now</button>
                        <div id= "darktheme">
                            <div className="Pricing-yearly-darktheme" onClick={() => {
                                setToggleStandart(!toggleStandart)
                                if (toggleStandart){
                                    setStandartCost('120')
                                } else{ 
                                    setStandartCost('12.99')
                                }
                            }}> 
                            <div className={toggleStandart ? 'Pricing-monthly-darktheme' : 'Pricing-monthly-light'}></div>

                            </div>
                        </div>
                    </div>
                    <div className={toggle ? "Pricing-option3" : "light-Theme3"}>
                        <h2>Premium</h2>
                        <div className="Price">
                            <h3>{PremiumCost}$</h3><h4 id ="MonthlyYearly">{togglePremium ? '/Monthly' : '/Yearly'}</h4>
                        </div>
                        <span><FcCheckmark fontSize={25} id = "checkmark"/>Ultimate films and tv programmes</span>
                        <span><FcCheckmark fontSize={25} id = "checkmark"/>Watch on mobile phones and tables</span>
                        <span><FcCheckmark fontSize={25} id = "checkmark"/>Cancel at anytime</span>
                        <span><FcCheckmark fontSize={25} id = "checkmark"/>First month completely free</span>
                        <span><FcCheckmark fontSize={25} id = "checkmark"/>HD avaiable</span>
                        <span><FcCheckmark fontSize={25} id = "checkmark"/>Ultra HD</span>
                        <button id = 'button3'>By Now</button>
                        <div id= "darktheme">
                            <div className="Pricing-yearly-darktheme" onClick={() => {
                                setTogglePremium(!togglePremium)
                                if (togglePremium){
                                    setPremiumCost('180')
                                } else{ 
                                    setPremiumCost('19.99')
                                }
                            }}> 
                            <div className={togglePremium ? 'Pricing-monthly-darktheme' : 'Pricing-monthly-light'}></div>

                            </div>
                        </div>
                    </div>


                </dsi>
            </div>
        </Fragment>
     );
}

export default Pricing;