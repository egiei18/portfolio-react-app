import React, { useState } from "react";
import "./services.css"

const Services = () => {
    const [ toggleState, setToggleState ] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid 
                        services__icon"></i>
                        <h3 className="services__title">Web App <br /> Development</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}> View More<i className="uil uil-arrow-right services__button-icon"></i></span>
                
                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick = {() => toggleTab(0) } className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Web App Development</h3>
                        <p className="services__modal-description">Service with more than 1 years of experience. 
                        Providing quality work to clients and companies.
                        </p>
                    
                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                            Custom web applications addresses the limitations of conventional tools by giving businesses more efficiency, accessibility, customization, and security that aids in solving individual business challenge
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                            We strive for efficiency in our custom web applications by subjecting them to accepted design standards and testing
                            </p>
                        </li>

                        {/* <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                I create ux element interaction.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                I position your company brand.
                            </p>
                        </li> */}

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Design and mockups of products for companies.
                            </p>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Website <br /> Development </h3>
                    </div>

                    <span onClick={() => toggleTab(2) } className="services__button">View More<i className="uil uil-arrow-right services__button-icon"></i></span>
                
                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick = {() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Website Development</h3>
                        <p className="services__modal-description">Service with more than 1 years of experience. 
                        Providing quality work to clients and companies.
                        </p>
                    
                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                            Website is the first impression of your brand or company and devising it correctly should be your first action if you want to give a kick start to your business today. There are many website development agencies available online, but you need to know which one to consider so that you can employ best team to work for you.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                            We use a range of technologies and platforms to develop website and eCommerce, crafted by our team of developers, ensuring our work represents your brand and aligns with your target audience.
                            </p>
                        </li>

                        {/* <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                I create ux element interaction.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                I position your company brand.
                            </p>
                        </li> */}

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Design and mockups of products for companies.
                            </p>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">Mobile Apps<br /> Development </h3>
                    </div>

                    <span onClick={() => toggleTab(3) } className="services__button">View More<i className="uil uil-arrow-right services__button-icon"></i></span>
                
                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick = {() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Mobile App Development</h3>
                        <p className="services__modal-description">Service with more than 1 years of experience. 
                        Providing quality work to clients and companies.
                        </p>
                    
                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                            Development Android App,
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                            UI / UX Design for the complete user flow and experience,
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                            Development of independent backend system, or creating an Web API to connect a mobile app with existing system.
                            </p>
                        </li>

                        {/* <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                I position your company brand.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Design and mockups of products for companies.
                            </p>
                        </li> */}
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </section>
        
    )
}

export default Services
