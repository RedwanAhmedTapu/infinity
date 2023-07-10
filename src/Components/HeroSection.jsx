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
            <p className="text-2xl">
              Welcome to InfinityShop, a revolutionary ecommerce platform that
              aims to redefine the way you shop online. With a vision to provide
              an extraordinary shopping experience, InfinityShop brings together
              convenience, quality, and infinite possibilities all in one place.
              Our Mission At InfinityShop, our mission is to empower individuals
              by offering a diverse range of high-quality products that cater to
              their unique tastes and needs. We strive to create a seamless
              online shopping environment that is accessible, reliable, and
              enjoyable for everyone. Our goal is to exceed customer
              expectations, consistently delivering exceptional service, and
              building long-lasting relationships. A World of Infinite Choices
              InfinityShop is home to an extensive selection of products from
              various categories, carefully curated to ensure a delightful
              shopping experience. From trendy fashion apparel and accessories
              to cutting-edge electronics, elegant home decor, and premium
              beauty essentials, our vast range of offerings is designed to
              cater to your diverse preferences. Explore our virtual aisles and
              unlock a world of infinite choices, where you can find everything
              you desire with ease. Exceptional Quality and Trusted Brands We
              understand that quality matters. That's why InfinityShop is
              committed to partnering with trusted brands and suppliers who
              share our dedication to excellence. Each product available on our
              platform undergoes a rigorous selection process to meet our
              stringent quality standards. We believe that every purchase you
              make should be a testament to our commitment to delivering
              exceptional products that enhance your life. User-Friendly
              Interface and Seamless Navigation At InfinityShop, we prioritize
              providing you with an intuitive and user-friendly interface that
              makes your shopping journey effortless. Our website is designed
              with simplicity and convenience in mind, allowing you to browse
              through our extensive catalog, easily search for products, and
              filter results based on your preferences. Discover a seamless
              shopping experience that saves you time and effort, so you can
              focus on finding the perfect items. Secure Transactions and
              Privacy Protection Your trust and security are of utmost
              importance to us. InfinityShop employs robust security measures to
              ensure that your personal information is protected and your
              transactions are secure. We prioritize the confidentiality of your
              data and implement industry-standard encryption technologies to
              safeguard your sensitive information. With our commitment to
              privacy protection, you can shop with confidence, knowing that
              your personal details are in safe hands. Exceptional Customer
              Service We believe that exceptional customer service is the
              cornerstone of a successful ecommerce platform. Our dedicated
              support team is available to assist you every step of the way,
              providing prompt and friendly assistance for any inquiries or
              concerns you may have. We value your satisfaction and strive to
              create a positive and rewarding shopping experience for each and
              every customer. Your feedback is invaluable to us as we
              continuously improve our services to meet your needs. Join the
              InfinityShop Community InfinityShop invites you to join our
              vibrant and growing community of shoppers who share a passion for
              quality and convenience. Discover a world of infinite
              possibilities, where you can indulge in the joy of finding the
              perfect products that elevate your lifestyle. We look forward to
              serving you and providing an exceptional shopping experience that
              exceeds your expectations.
            </p>
            <NavLink to="/">
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
