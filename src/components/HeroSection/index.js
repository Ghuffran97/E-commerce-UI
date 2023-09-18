import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import item from "../../assets/item.png";
import smallItem from "../../assets/small-item.png";
import star from "../../assets/star.png";
import checkIcon from "../../assets/check-icon.png";
import badge from "../../assets/badge.png";
import avatar from "../../assets/avatar.png";
import blueTick from "../../assets/blueTick.png";
import lock from '../../assets/lock.png'
import p1 from '../../assets/1.png'
import p2 from '../../assets/2.png'
import p3 from '../../assets/3.png'
import p4 from '../../assets/4.png'
import p5 from '../../assets/5.png'
import p6 from '../../assets/6.png'
import tick from '../../assets/tick.png'
import pic3 from '../../assets/3pic.png'
import pic4 from '../../assets/4pic.png'



import { ClaimDiscountBtn, PaymentSystem, SavePer, Wrapper } from "./styled";
import { useMediaQuery } from "react-responsive";

const HeroSection = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' }); // Ad

    return (
        <Wrapper >
            <Container>
                <h1 className="text-center" style={{
                    fontSize: isMobile
                        ? '30px' : "48px", fontWeight: "400"
                }}>Wait ! Your Order In Progress.</h1>
                <h5 className="text-center mt-1" style={{ color: "#4D5254", fontSize: "24px", fontWeight: "400" }}>
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing{" "}
                </h5>

                <Row className="mt-5" >
                    <Col className={`d-flex justify-content-center align-items-center gap-2 ${isMobile ? 'flex-column' : ''}`}>
                        <Image src={tick} />
                        <span style={{ fontSize: isMobile ? "12px" : '20px' }}>

                            {!isMobile && 'Step 1 :'}
                            Cart Review</span>
                    </Col>
                    <Col className={`d-flex justify-content-center align-items-center gap-2 ${isMobile ? 'flex-column' : ''}`}>
                        <Image src={tick} />
                        <span style={{ fontSize: isMobile ? "12px" : '20px' }}>

                            {!isMobile && 'Step 2 :'}
                            Checkout</span>
                    </Col>
                    <Col className={`d-flex justify-content-center align-items-center gap-2 ${isMobile ? 'flex-column' : ''}`}>
                        <Image src={pic3} />
                        <span style={{ fontWeight: 700, fontSize: isMobile ? "12px" : '20px' }}>

                            {!isMobile && 'Step 3 :'}
                            Special Offer</span>
                    </Col>
                    <Col className={`d-flex justify-content-center align-items-center gap-2 ${isMobile ? 'flex-column' : ''}`}>
                        <Image src={pic4} />
                        <span style={{ fontSize: isMobile ? "12px" : '20px' }}>

                            {!isMobile && 'Step 4 :'}
                            Confirmation</span>
                    </Col>
                </Row>

                <section
                    className="mt-3 p-4"
                    style={{ background: "#FAFAFA", borderRadius: "10px" }}
                >
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <Image src={item} alt="item" fluid />

                            <div className="mt-5">
                                <div className="d-flex gap-2">
                                    <Image src={avatar} />
                                    <div className="d-flex flex-column gap-1">
                                        <div className="d-flex align-center">
                                            <Image src={star} fluid style={{ width: '12px' }} />
                                            <Image src={star} fluid style={{ width: '12px' }} />
                                            <Image src={star} fluid style={{ width: '12px' }} />
                                            <Image src={star} fluid style={{ width: '12px' }} />
                                            <Image src={star} fluid style={{ width: '12px' }} />
                                        </div>
                                        <p className="d-flex gap-2 align-center">
                                            Ken T. <Image src={blueTick} fluid />
                                            <span style={{ color: "#5BB59A" }}>
                                                Verified Customer
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                <p className="mt-2" style={{ fontSize: "16px" }}>
                                    “As soon as the Clarifions arrived I put one in my bedroom.
                                    This was late in the afternoon. When I went to the bedroom in
                                    the evening it smelled clean. When I went to bed I felt I
                                    could breathe better. Wonderful.”
                                </p>
                            </div>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="d-flex flex-column gap-3">
                            <h3 style={{ fontSize: "32px", fontWeight: "400" }}>
                                <span style={{ color: "#2C7EF8" }}> ONE TIME ONLY</span> special
                                price For 6 Extra Clarifion For Only{" "}
                                <span style={{ color: "#2C7EF8" }}>$14 each </span> $14 each
                                ($84.00 total!)
                            </h3>

                            <div className="d-flex gap-3 mt-3">
                                <Image src={smallItem} fluid />
                                <div className="d-flex flex-column gap-3 ">
                                    <div className="d-flex justify-content-between">
                                        <p style={{ fontSize: "20px" }}>Clarifion Air Ionizer</p>
                                        <p>
                                            $180 <span style={{ color: "#2C7EF8" }}>$84</span>
                                        </p>
                                    </div>

                                    <div className="d-flex gap-1">
                                        <Image src={star} fluid />
                                        <Image src={star} fluid />
                                        <Image src={star} fluid />
                                        <Image src={star} fluid />
                                        <Image src={star} fluid />
                                    </div>

                                    <div className="d-flex gap-2  align-items-center">
                                        <div
                                            style={{
                                                width: "5px",
                                                height: "5px",
                                                background: "#2C7EF8",
                                                borderRadius: "50%",
                                            }}
                                        ></div>
                                        <p style={{ fontSize: "16px" }}> 12 left in Stock</p>
                                    </div>

                                    <p style={{ fontSize: "16px" }} className="d-none d-sm-block">
                                        Simply plug a Clarifion into any standard outlet and replace
                                        bulky, expensive air purifiers with a simple.
                                    </p>
                                </div>



                            </div>
                            <p style={{ fontSize: "16px" }} className="d-block d-sm-none">
                                Simply plug a Clarifion into any standard outlet and replace
                                bulky, expensive air purifiers with a simple.
                            </p>
                            <section className="d-flex flex-column gap-2 mt-4">
                                <div className="d-flex align-center gap-2">
                                    <Image style={{ height: "22px", width: "22px" }} src={checkIcon} fluid />
                                    <p style={{ fontSize: "16px" }}>Negative Ion Technology may help with allergens</p>
                                </div>

                                <div className="d-flex gap-2">
                                    <Image style={{ height: "22px", width: "22px" }} src={checkIcon} fluid />
                                    <p style={{ fontSize: "16px" }}>Designed for air rejuvenation</p>
                                </div>

                                <div className="d-flex gap-2 ">
                                    <Image style={{ height: "22px", width: "22px" }} src={checkIcon} fluid />
                                    <p style={{ fontSize: "16px" }}>Perfect for every room in all types of places.</p>
                                </div>

                                <SavePer>
                                    <div className="per">%</div>
                                    <p style={{ fontSize: "16px" }}>
                                        Save <span> 53% </span>and get{" "}
                                        <span> 6 extra Clarifision</span> for only{" "}
                                        <span>$14 Each</span>.
                                    </p>
                                </SavePer>

                                <ClaimDiscountBtn>Yes - Claim my discount</ClaimDiscountBtn>

                                <PaymentSystem>
                                    <Row className="d-flex justify-contnet-center align-items-center">
                                        <Col lg={7} md={12} sm={12} className="d-flex justify-content-between align-items-center">
                                            <span style={{ fontSize: '12px' }}>Free Shipping</span>
                                            <span>| </span>
                                            <span className="d-flex  gap-2">
                                                <Image src={lock} />
                                                <span style={{ fontSize: '12px', whiteSpace: 'nowrap' }}>Secure 256-Bit SSL Encryption.</span>
                                            </span>
                                            <span></span>|
                                        </Col>

                                        <Col lg={5} md={12} sm={12}>

                                            <div className="d-flex justify-contnet-center align-items-center gap-2">
                                                <Image src={p1} />
                                                <Image src={p2} />
                                                <Image src={p3} />
                                                <Image src={p4} />
                                                <Image src={p5} />
                                                <Image src={p6} />
                                            </div>
                                        </Col>
                                    </Row>
                                </PaymentSystem>

                                <h5
                                    className="text-center mt-3"
                                    style={{ color: "#F82C2C", textTransform: "uppercase", fontSize: "18px" }}
                                >
                                    No thanks, I don’t want this.
                                </h5>

                                <section className="d-flex align-items-center gap-3 mt-4">
                                    <Image src={badge} />
                                    <p style={{ fontSize: "16px" }}>
                                        If you are not completely thrilled with your Clarifion - We
                                        have a 30 day satisfaction guarantee. Please refer to our
                                        return policy at the bottom of the page for more details.
                                        Happy Shopping!
                                    </p>
                                </section>
                            </section>
                        </Col>
                    </Row>
                </section>
            </Container>
        </Wrapper>
    );
};

export default HeroSection;
