import React from "react";
import styled from "styled-components";

const Page = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 1.5rem;
    padding: 20px;
    height: 93vh;
    background-color: #2D3142;
`;

const ImagesContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`;

const Image = styled.img`
    width: 250px;
    height: auto;
    margin-left: 20px;
    border: 1px solid white;
    border-radius: 10px;
    transition: 0.25s;
    :hover {
        transform: scale(1.5);
        cursor: pointer;
    }
`;

export default function Attefallhus() {
    return (
        <Page data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" id="attefallshus">
            <h2>Attefallshus</h2>
            <p>
                Ett attefallshus är ett bygglovsfritt konstruktion som har ett area på högst 30kvm.
                Det valda huset tillverkas i vår fabrik vilket därefter transporteras och installeras
                på vald plats. Här nedan kan du se några av våra tidigare projekt.
            </p>
            <ImagesContainer>
                <Image src="/images/attehus1.jpg"></Image>
                <Image src="/images/STAN.jpg"></Image>
                <Image src="/images/kakel.jpg"></Image>
            </ImagesContainer>
        </Page>
    );
}