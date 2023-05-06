import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data text-xl">Welcome to </p>
            <h1 className="text-5xl"> Infinity Shop </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              atque temporibus veniam doloribus libero ad error omnis voluptates
              animi! Suscipit sapiente.
            </p>
            <NavLink to="/products">
              <Button>shop now</Button>
            </NavLink>
          </div>
          {/* our homepage image  */}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 2rem;
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .hero-section-data {
    p {
      margin: 2rem 0;
      background: -webkit-linear-gradient(#39b5e0, #301e67);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
      background: -webkit-linear-gradient(#39b5e0, #301e67);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .intro-data {
      margin-bottom: 0;
    }
  }
  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;
    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }
  @media (max-width: 768px) {
    .grid {
      gap: 1 0rem;
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;
