import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
// import FooterCol from './FooterCol';
import './Footer.css';
import { footerInfo } from '../../FooterData';
import FooterInfo from './FooterInfo';
import { Link } from 'react-router-dom';
import { scrollUP } from '../../Shared/ScrollTop/ScrollTop';


const Footer = () => {
    return (
        <section className='row footer'>
            <Row className="col-md-11 mx-auto">
                <Row className="align-items-center footerInfo">
                    {
                        footerInfo.map(data => <FooterInfo data={data} key={data.id}/>)
                    }
                </Row>
  
            </Row>
            {/* <p className="copyRight">Copyright &copy; 2021 <span className="fHighlight">Ujjal zaman</span>. All rights reserved.</p> */}
            <div className="fAboutUs">
                    <ul className="socialIcons">
                        <li>
                            <Link onClick={scrollUP} to="/" >
                                <FontAwesomeIcon icon={faFacebook}/>
                                </Link>
                        </li>
                        <li>
                            <Link onClick={scrollUP} to="/">
                                <FontAwesomeIcon icon={faTwitter}/>
                                </Link>
                        </li>
                        <li>
                            <Link onClick={scrollUP} to="/">
                                <FontAwesomeIcon icon={faInstagram}/>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={scrollUP} to="/">
                                <FontAwesomeIcon icon={faLinkedinIn}/>
                            </Link>
                        </li>
                    </ul>
                </div>
        </section>
    );
};

export default Footer;