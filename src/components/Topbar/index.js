import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Wrapper } from "./styled";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css"; // Import slick-carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme CSS
import v1 from "../../assets/Vector.png";
import v2 from "../../assets/Vector (1).png";
import v3 from "../../assets/Vector (2).png";
import v4 from "../../assets/Vector (3).png";

const Topbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Set the initial value based on screen width

    // Configure settings for the slider
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Wrapper>
            <Container>
                {isMobile && (
                    <div className="px-4">
                        <Slider {...sliderSettings}>
                            {/* Each slide in the slider */}
                            <div className="d-flex justify-content-center align-items-center gap-2">
                                <Image src={v1} />
                                <span>30-DAY SATISFACTION GUARANTEE</span>
                            </div>
                            <div className="d-flex justify-content-center align-items-center gap-2">
                                <Image src={v2} />
                                <span>Free delivery on orders over $40.00</span>
                            </div>
                            <div className="d-flex justify-content-center align-items-center gap-2">
                                <Image src={v3} />
                                <span>50.000+ HAPPY CUSTOMERS</span>
                            </div>
                            <div className="d-flex justify-content-center align-items-center gap-2">
                                <Image src={v4} />
                                <span>100% Money Back Guarantee</span>
                            </div>
                        </Slider>
                    </div>
                )}
                {!isMobile && (
                    <Row>
                        <Col className="d-flex justify-content-center align-items-center gap-2">
                            <Image src={v1} />
                            <span>30-DAY SATISFACTION GUARANTEE</span>
                        </Col>
                        <Col className="d-flex justify-content-center align-items-center gap-2">
                            <Image src={v2} />

                            <span>Free delivery on orders over $40.00</span>
                        </Col>
                        <Col className="d-flex justify-content-center align-items-center gap-2">
                            <Image src={v3} />

                            <span>50.000+ HAPPY CUSTOMERS</span>
                        </Col>
                        <Col className="d-flex justify-content-center align-items-center gap-2">
                            <Image src={v4} />

                            <span>100% Money Back Guarantee</span>
                        </Col>
                    </Row>
                )}
            </Container>
        </Wrapper>
    );
};

export default Topbar;
