import React from "react";
import styled from "styled-components";
import { BsFillTelephoneOutboundFill, BsFillClockFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { ImMobile } from "react-icons/im";

const Page = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 1.5rem;
    padding: 20px;
    height: 93vh;
    background-color: #2D3142;
    overflow-x: hidden;

    @media(max-width: 768px) {
        font-size: 1.2rem;
    }
    `;

const ContactForm = styled.div`
    width: 500px;
    background-color: white;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px;
    border-radius: 10px;

    @media(max-width: 768px) {
        width: 100%;
    }
`;

const IconTextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;

    p {
        margin-left: 10px;
    }
`;

export default function Kontakt() {
    return (
        <Page data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" id="kontakt">
            <ContactForm>
                <h1>Kontakt</h1>
                <IconTextContainer>
                    <BsFillClockFill />
                    <p>24/7</p>
                </IconTextContainer>

                <IconTextContainer>
                    <ImMobile />
                    <p>Mobilnummer: 0728710596</p>
                </IconTextContainer>

                <IconTextContainer>
                    <GrMail />
                    <p>Email: [COMING SOON]</p>
                </IconTextContainer>
            </ContactForm>
        </Page>
    );
}