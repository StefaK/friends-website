import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const Page = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 1.5rem;
    padding: 20px;
    min-height: 93vh;
    background-color: #2D3142;
    overflow: hidden;
`;

const ImagesContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 30px;

    @media(max-width: 768px) {
    }
`;

const Image = styled.img`
    width: 250px;
    height: auto;
    margin-left: 20px;
    border: 1px solid white;
    border-radius: 10px;
    transition: 0.25s;

    @media(min-width: 769px) {
        :hover {
            transform: scale(1.5);
            cursor: pointer;
        }
    }

    @media(max-width: 768px) {
        width: 100px;
        height: auto;
        margin-top: 15px;

    }
`;

const PlayerContainer = styled.div`
    width: 25%;
    height: auto;
    margin-top: 15px;

    @media(max-width: 768px) {
        width: 100%;
    }
`;
export default function Attefallhus() {
    function toggleImageExpandedMobile(_e) {
        document.getElementById(_e.target.id).classList.toggle("expandedAtteimage");
    }

    return (
        <Page data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" id="attefallshus">
            <h2>Attefallshus</h2>
            <p>
                Ett attefallshus är ett bygglovsfritt konstruktion som har ett area på högst 30kvm.
                Det valda huset tillverkas i vår fabrik vilket därefter transporteras och installeras
                på vald plats. Här nedan kan du se några av våra tidigare projekt.
            </p>
            <ImagesContainer>
                <Image onClick={toggleImageExpandedMobile} id="at1" alt="Modulhus" src="/images/attehus1.jpg"></Image>
                <Image onClick={toggleImageExpandedMobile} id="at2" alt="Attefallshus kök" src="/images/STAN.jpg"></Image>
                <Image onClick={toggleImageExpandedMobile} id="at3" alt="Attefallshus vägg kakel klinker sten" src="/images/kakel.jpg"></Image>
            </ImagesContainer>

            <PlayerContainer>
                <ReactPlayer alt="Attefallshus interior video badrum" url="/videos/attefallhus.mp4" width="100%" height="100%" controls={true}/>
            </PlayerContainer>
        </Page>
    );
}