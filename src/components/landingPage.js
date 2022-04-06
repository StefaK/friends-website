import React from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";

const Page = styled.main`
    width: 100%;
    height: 93vh;
    padding: 30px;
    overflox: hidden;
`;

const WelcomeHeader = styled.h2`
    margin-left: 15px;
    margin-top: 150px;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 2.5rem;
`;

const WelcomeText = styled.p`
    width: 800px;
    margin-left: 15px;
    margin-top: 10px;
    line-height: 25px;
    font-size: 1.5rem;
`;

const WelcomeList = styled.ul`
    margin-left: 35px;
    margin-top: 20px;
`;

const WelcomeListItem = styled.li`
    margin-top: 15px;
    font-size: 1.2rem;
`;

const FoundationExamplesContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`;

const FoundationExample = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 1.5rem;
    margin-right: 15px;
`;

const ImageAlbumContainer = styled.div`

`;

const ImageAlbum = styled.div`
    width: 102px;
    height: 102px;
`;

const Image = styled.image`
    width: 50px;
    height: 50px;
    border: 1px solid white;
`;

const WelcomeStuffContainer = styled.div`

`;

const UpperContainer = styled.div`

`;

const FullScreenIMG = styled.image`
    position: fixed;
    left: 0;
    top: 0;
    background-image: url("/images/grundbygge.jpg");
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    filter: brightness(50%);
`;

export default function LandingPage() {
    return (
        <Page id="home">
            <FullScreenIMG />
            <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" >
                <WelcomeHeader>Välkommen!</WelcomeHeader>
                <WelcomeText>Letar du efter nyckelfärdig attefallshus? Då är du på rätt plats!</WelcomeText>
                <WelcomeList>
                    <WelcomeListItem>
                        Vi erbjuder dig ett brett val av attefallshus.
                    </WelcomeListItem>
                    <WelcomeListItem>
                        Vi hjälper dig att
                        välja rätt hus som ska uppfylla dina behov efter dina omständigheter
                        till ett rimligt pris.
                    </WelcomeListItem>
                    <WelcomeListItem>
                        Du som kund hos oss ska känna dig nöjd med
                        slutprodukten och vi vill göra vårt bästa att det ser ut som du
                        har tänkt dig.
                    </WelcomeListItem>
                    <WelcomeListItem>
                        Vi sköter transporten. 
                    </WelcomeListItem>

                    <WelcomeListItem>
                        Vi ordnar grunden beroende på miljöns tillstånd
                        samt andra faktorer.
                    </WelcomeListItem>
                </WelcomeList>

                <FoundationExamplesContainer>
                    <FoundationExample>
                        <FaCheckCircle />
                        Plattgrund
                    </FoundationExample>

                    <FoundationExample>
                        <FaCheckCircle />
                        Plintgrund
                    </FoundationExample>

                    <FoundationExample>
                        <FaCheckCircle />
                        Krypgrund
                    </FoundationExample>
                </FoundationExamplesContainer>
            </div>
            
        </Page>
    );
}