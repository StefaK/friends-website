import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { FaThumbsUp } from "react-icons/fa";

const Page = styled.section`
    display: grid;
    grid-template-columns: auto auto;
    padding: 20px;
    font-size: 1.5rem;
    overflow: hidden;

    @media(min-width: 769px) {
        height: 93vh;
    }

    @media(max-width: 768px) {
        padding: 5px;
        min-height: 1100px;
        font-size: 1rem;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`;

const CoolStuffSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;    

    @media(max-width: 768px) {
        width: 100%;
        margin-top: 15px;
    }
`;

const CoolThing = styled.div`
    margin-bottom: 15px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    text-align: center;

    @media(min-width: 768px) {
        border: 2px solid white;
        border-radius: 10px;
        margin-right: 40px;
        width: 300px;
    }

    @media(max-width: 768px) {
        border-top: 2px solid white;
        border-bottom: 2px solid white;
        width: 100%;
    }
`;

const AboutUsSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media(max-width: 768px) {
        font-size: 1.5rem;
        padding-left: 15px;
        padding-right: 15px;
    }
`;

const AboutUsHeader = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
`;

const AboutUsText = styled.p`
    max-width: 700px;
    margin-top: 10px;
`;

const FullScreenIMG = styled.img`
    position: absolute;
    left: 0;
    top: inherit;
    background-image: url("/images/truck.jpg");
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    filter: brightness(50%);
`;

export default function OmOss() {
    return (
        <Page id="om-oss">
            <CoolStuffSection data-aos="slide-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <CoolThing>
                    <AiFillStar style={{fontSize: 34}}/>
                    <h3>20 års erfarenhet</h3>
                </CoolThing>

                <CoolThing >
                    <FaThumbsUp style={{fontSize: 34}}/>
                    <h3>Kvalitet</h3>
                </CoolThing>

                <CoolThing >
                    <BiWorld style={{fontSize: 34}}/>
                    <h3>Flexibilitet</h3>
                </CoolThing>

            </CoolStuffSection>

            <AboutUsSection data-aos="slide-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <AboutUsHeader>Om oss</AboutUsHeader>
                <AboutUsText>
                    Vi är ett nytt företag med inriktning på nyckelfärdiga 
                    attefallshus. I vår bakgrund har vi 20 års erfarenhet inom
                    byggbranschen. Nyligen började vi fokusera på tillverkning 
                    och konstruering av attefallshus och efter ett antal konkreta
                    projekt insåg vi att det är vår grej. Attefallhus för oss 
                    innebär en summering av våra skickligheter inom byggbranschen.
                    Vi tänkte bygga upp vårt namn och insåg 
                    att attefallshus skulle vara ett perfekt tillfälle. 
                </AboutUsText>

                <AboutUsText>
                    Vi vill att våra produkter blir långvarande och bekväma och därför är kvalitet
                    faktor nummer ett för oss.
                </AboutUsText>

                <AboutUsText>
                    Vår flexibilitet ligger i att vi är bereda på att både tillverka huset i vår fabrik 
                    och direkt på plats. Huset behöver inte ha en statisk model utan dess utformning kan variera 
                    beroende på kundens önskemål.
                </AboutUsText>

            </AboutUsSection>
        </Page>
    );
}