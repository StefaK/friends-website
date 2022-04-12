import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Attefallhus from "./components/attefallhus";
import Kontakt from "./components/kontakt";
import LandingPage from "./components/landingPage";
import OmOss from "./components/om_oss";
import styled from "styled-components";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";

const App = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 7vh;
`;

const MainHeader = styled.h1`
    margin-top: 15px;
    margin-bottom: 15px;
`;

const Navbar = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    height: 7vh;
    background-color: black;
    color: white;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;

    @media (min-width: 769px) {
        width: 100%;
        border-top: 3px solid black;
        border-bottom: 3px solid black;
    }

    @media (max-width: 768px) {
        width: 100%;
        border-top: 3px solid black;
        border-bottom: 3px solid black;
    }

    z-index: 1000;
`;

const NavButton = styled.span`
    padding: 15px;
    font-size: 18px;
    transition: 0.25s;
    color: white;

    @media(min-width: 769px) {
        border-left: 1px solid black;
        border-right: 1px solid black;
        height: 100%;
        margin-right: 10px;
        margin-left: 10px;

        :hover {
            color: #7D84B2;
            cursor: pointer;
        }
    }

    @media (max-width: 768px) {
    }

    @media (max-width: 400px) {
        font-size: 15px;
    }
`;

const NavButtons = styled.div`
    overflow: hidden;
`;

const ToggleMenuButton = styled.div`
    @media(max-width: 768px) {
        font-size: 15px;
    }

    @media(min-width: 769px) {
        display: none;
    }
`;

function Main() {
    function toggleMenu() {
        document.getElementById("navbuttons").classList.toggle("menuHidden");
        document.getElementById("navbuttons").classList.toggle("menuOpen");
    }

    return (
            <App>
                <Navbar>
                    <MainHeader>Bygg Ditt Hus</MainHeader>
                    <ToggleMenuButton onClick={toggleMenu}><FiMenu /></ToggleMenuButton>
                    <NavButtons className="menuHidden" id="navbuttons">
                        <Link onClick={toggleMenu} spy={true} smooth={true} offset={-50} duration={500} to="home"><NavButton>Hem</NavButton></Link>
                        <Link onClick={toggleMenu} spy={true} smooth={true} offset={-50} duration={500} to="om-oss"><NavButton>Om oss</NavButton></Link>
                        <Link onClick={toggleMenu} spy={true} smooth={true} offset={-50} duration={500} to="attefallshus"><NavButton>Attefallshus</NavButton></Link>
                        <Link onClick={toggleMenu} spy={true} smooth={true} offset={-50} duration={500} to="kontakt"><NavButton>Kontakt</NavButton></Link>
                    </NavButtons>
                </Navbar>
                {/* <Routes>
                    <Route path="/" element={<LandingPage />}/> 
                    <Route path="/kontakt" element={<Kontakt />}/> 
                    <Route path="/om-oss" element={<OmOss />}/> 
                    <Route path="/attefallhus" element={<Attefallhus />}/>
                </Routes> */}
                <LandingPage />
                <OmOss />
                <Attefallhus />
                <Kontakt />
            </App>                
    );
}

ReactDOM.render( 
    <BrowserRouter>
        <Main /> 
    </BrowserRouter>,

    document.getElementById("root")
);