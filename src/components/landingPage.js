import React from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";

const Page = styled.main`
    width: 100%;
    height: 93vh;
    overflow: hidden;

    @media(max-width: 768px) {
        height: 900px;
    }

    @media(max-width: 344px) {
        height: 1100px;
    }
`;

const WelcomeHeader = styled.h2`
    margin-left: 15px;
    margin-top: 150px;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 2.5rem;

    @media(max-width: 768px) {
        font-size: 1.5rem;
        margin-top: 50px;
    }
`;

const WelcomeText = styled.p`
    width: 800px;
    margin-left: 15px;
    margin-top: 10px;
    line-height: 25px;
    font-size: 1.5rem;

    @media(max-width: 768px) {
        width: 100%;
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
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

    @media(max-width: 319px) {
        flex-direction: column;
    }
`;

const FoundationExample = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 1.5rem;
    margin-right: 15px;

    @media(max-width: 768px) {
        font-size: 1.2rem;
    }

    @media(max-width: 319px) {
        font-size: 1.2rem;
        margin-top: 15px;
    }
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

    @media(max-width: 768px) {
        filter: blur(10px) brightness(50%);
    }
    `;

const Content = styled.div`
    width: 90%;
    height: 100%;
    padding: 30px;
`

const Lajsne = styled.div`
    width: 5%;
    height: 100%;
    background-color: black;
    @media(max-width: 768px) {
        display: none;
    }
`;

const GeneralContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function LandingPage() {
    return (
        <Page id="home">
            <FullScreenIMG />
            <GeneralContainer data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" >
                <Lajsne />
                <Content>
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
                            samt andra faktorer (plattgrund, krypgrund, plintgrund).
                        </WelcomeListItem>
                    </WelcomeList>

                    <FoundationExamplesContainer>
                        <FoundationExample>
                            <FaCheckCircle />
                            TIllverkning
                        </FoundationExample>

                        <FoundationExample>
                            <FaCheckCircle />
                            Transport
                        </FoundationExample>

                        <FoundationExample>
                            <FaCheckCircle />
                            Grund
                        </FoundationExample>
                    </FoundationExamplesContainer>
                </Content>
                <Lajsne />

            </GeneralContainer>
            
        </Page>
    );
}