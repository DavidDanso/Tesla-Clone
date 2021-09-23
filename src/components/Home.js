import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Section from "./Section";

const Home = () => {
  return (
    <Container>
      <Header />
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        leftBtn="custom order"
        rightBtn="existing inventory"
        backgroundImage="Model S.jpeg"
        arrowDown="/images/arrow.svg"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        leftBtn="custom order"
        rightBtn="existing inventory"
        backgroundImage="Desktop-ModelY.jpeg"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        leftBtn="custom order"
        rightBtn="existing inventory"
        backgroundImage="Desktop-Model3.jpeg"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        leftBtn="custom order"
        rightBtn="existing inventory"
        backgroundImage="Desktop-ModelX.jpeg"
      />
      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        leftBtn="order now"
        rightBtn="learn more"
        backgroundImage="Desktop-SolarPanels.jpeg"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        leftBtn="order now"
        rightBtn="learn more"
        backgroundImage="Desktop-SolarRoof.jpeg"
      />
      <Section
        title="Accessories"
        description=""
        leftBtn="shop now"
        rightBtn=""
        backgroundImage="Desktop-Accessories.jpg"
      />
    </Container>
  );
};

const Container = styled.div`
  scroll-snap-type: y mandatory;
  overflow: auto;
  height: 100vh;
`;

export default Home;
