import React from "react";
//import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Col, Container, Row, Footer } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css'
import {FaTwitter, FaFacebook, FaLinkedin} from 'react-icons/fa';

const footer = () => {
  return (
    <Footer color="stylish-color-dark" className="page-footer font-small pt-4 mt-4">
        <Container className="text-left">
            <Row>
                <Col md="4">
                    <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Huelec Paints</h5>
                    <p>Heritage of colors. We provide premium quality paints to our customers.</p>
                </Col>
                <hr className="clearfix w-100 d-md-none" />
                <Col md="2">
                    <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Interior Paints</h5>
                    <ul className="list-unstyled">
                        <li><a href="#!">Matt Emulsion</a></li>
                        <li><a href="#!">Superior Emulsion</a></li>
                        <li><a href="#!">Superior Emulsion Special Shades</a></li>
                        <li><a href="#!">Classic Emulsion</a></li>
                        <li><a href="#!">Texture Finish</a></li>
                        <li><a href="#!">Plastic Emulsion</a></li>
                        <li><a href="#!">Matt Enamel</a></li>
                        <li><a href="#!">Wall Sealer</a></li>
                        <li><a href="#!">Under Coat</a></li>
                        <li><a href="#!">Wall Putty</a></li>
                    </ul>
                </Col>
                <hr className="clearfix w-100 d-md-none" />
                <Col md="2">
                    <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Exterior Paints</h5>
                    <ul className="list-unstyled">
                        <li><a href="#!">Weather Shield</a></li>
                        <li><a href="#!">Roof Master</a></li>
                        <li><a href="#!">Synthetic Enamel</a></li>
                        <li><a href="#!">Matt Enamel</a></li>
                        <li><a href="#!">Metallic Finish</a></li>
                        <li><a href="#!">Aluminium Silver</a></li>
                        <li><a href="#!">Exterior Primer</a></li>
                        <li><a href="#!">Exterior Wall Putty</a></li>
                    </ul>
                </Col>
                <hr className="clearfix w-100 d-md-none" />
                <Col md="2">
                    <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Base Preparations</h5>
                    <ul className="list-unstyled">
                        <li><a href="#!">Exterior Wall Putty</a></li>
                        <li><a href="#!">Interior Wall Putty</a></li>
                        <li><a href="#!">Exterior Primer</a></li>
                        <li><a href="#!">Super Primer</a></li>
                        <li><a href="#!">Primer Red Oxide</a></li>
                        <li><a href="#!">Synthetic Undercoat</a></li>
                    </ul>
                </Col>

                <hr className="clearfix w-100 d-md-none" />
                <Col md="2">
                    <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Industrial Coating</h5>
                    <ul className="list-unstyled">
                        <li><a href="#!">Primer Red Oxide</a></li>
                        <li><a href="#!">Under Coat</a></li>
                        <li><a href="#!">Metallic Finish</a></li>
                        <li><a href="#!">Aluminium Silver</a></li>
                        <li><a href="#!">Matt Enamel</a></li>
                        <li><a href="#!">Synthetic Enamel</a></li>
                        <li><a href="#!">Road Marking</a></li>
                        <li><a href="#!">Synthetic Hammer Finish</a></li>
                    </ul>
                </Col>
            </Row>
        </Container>
        <hr />
        <div className="text-center">
            <ul className="list-unstyled list-inline">
                <li className="list-inline-item"><a className="btn-floating btn-sm btn-fb mx-1" href="#facebook"><FaFacebook /></a></li>
                <li className="list-inline-item"><a className="btn-floating btn-sm btn-tw mx-1" href="#twitter"><FaTwitter /></a></li>
                <li className="list-inline-item"><a className="btn-floating btn-sm btn-li mx-1" href="#linkedin"><FaLinkedin /></a></li>
            </ul>
        </div>
        <div className="footer-copyright text-center">
            <Container fluid>
                &copy; {(new Date().getFullYear())} Copyright: <a href="https://keen-swirles-8096de.netlify.app/"> AppFactory.live </a>
            </Container>
        </div>
    </Footer>
  );
}

export default footer;