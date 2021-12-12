import React from "react";
import "./banner.css";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../asset/images/Frame.png";
const Banner = () => {
  return (
    <Container fluid className="nav_bg banner_section section_padding">
      <Row>
        <Col className="col-12 col-sm-12 col-md-6 col-lg-6">
          <div className="banner_contec">
            <h2 className="banner_title">
              Let’s Grow Your Brand To The Next Level
            </h2>
            <p className="banner_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat
            </p>
            <div className="banner_action">
              <button className="banner_button">Hire us</button>
            </div>
          </div>
        </Col>
        <Col className="col-12 col-sm-12 col-md-6 col-lg-6">
          <img src={img} className="w-100 banner_img" alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
