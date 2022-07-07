import React from 'react';
import { BiWifi } from 'react-icons/bi';
import { RiParkingFill } from 'react-icons/ri';
import { FaTemperatureHigh, FaHotjar } from 'react-icons/fa';
import { GiGymBag } from 'react-icons/gi';
import { CgInfo } from 'react-icons/cg';

function FeaturesDetail(props) {
    return (
        <>
            <h3 className='detailFeatureTitle'>¿Qué ofrece este lugar?<hr className='hrFeatureDetail' /></h3>
            <div className='detailFeaturesContainer'>
                {props.features.map((feature, index) => (
                    <ul className='detailFeatureUl' key={index}>
                        {feature.icon == "BiWifi" ?
                            <>
                                <li>
                                    <BiWifi />{feature.description}
                                </li>
                            </>
                            : feature.icon == "RiParkingFill" ?
                                <>
                                    <li>
                                        <RiParkingFill />{feature.description}
                                    </li>
                                </>
                                : feature.icon == "FaTemperatureHigh" ?
                                    <>
                                        <li>
                                            <FaTemperatureHigh />{feature.description}
                                        </li>
                                    </>
                                    : feature.icon == "FaHotjar" ?
                                        <>
                                            <li>
                                                <FaHotjar />{feature.description}
                                            </li>
                                        </>
                                        : feature.icon == "GiGymBag" ?
                                            <>
                                                <li>
                                                    <GiGymBag />{feature.description}
                                                </li>
                                            </> :
                                            feature.icon == "Buscar icono" ?
                                                <>
                                                    <li>
                                                        <CgInfo />{feature.description}
                                                    </li>
                                                </> :
                                                feature.icon == "buscar icono" ?
                                                    <>
                                                        <li>
                                                            <CgInfo />{feature.description}
                                                        </li>
                                                    </> :
                                                    <>
                                                        <li>
                                                            <CgInfo />{feature.description}
                                                        </li>
                                                    </>
                        }
                    </ul>
                ))}
            </div>
        </>
    )
}

export default FeaturesDetail;