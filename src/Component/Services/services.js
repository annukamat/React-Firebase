import React, {useState} from "react";
import serviceapi from "../../API/serviceApi";
import './services.css'

const Services = () => {

    const [ serviceData, setServiceData ] = useState(serviceapi);

    return(
        <>
            <section className="service-main-container">
                <div className="container service-container">
                    <h1 className="main-heading text-center fw-bold">How to send money</h1>
                    <div className="row">
                        { serviceData.map( (currEle) => {
                            const {id, logo, title, info} = currEle;
                            return (
                                <>
                                    <div className="col-11 col-lg-4 work-container-subdiv" key={id}>
                                        <i className={`fontAwesome-style ${logo}`}></i>
                                        <h2 className="sub-heading text-center">{title}</h2>
                                        <p className="main-hero-para">{info}</p>
                                    </div>
                                </>
                            )
                        } ) }
                    </div>
                </div>
            </section>
        </>
    )

}

export default Services;