import React from "react";
import styled from "styled-components";

const Section = ({
  title,
  description,
  leftBtn,
  rightBtn,
  backgroundImage,
  arrowDown,
}) => {
  return (
    <Wrap bgImage={backgroundImage}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <InfoLinks>
        <ButtonGroups>
          <LeftButton>{leftBtn}</LeftButton>
          {rightBtn && <RightButton>{rightBtn}</RightButton>}
        </ButtonGroups>
        {arrowDown && <ArrowDown src="/images/arrow.svg" />}
      </InfoLinks>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("/images/Model S.jpeg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  scroll-snap-align: start;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;
const ItemText = styled.div`
  padding-top: 18vh;
  text-align: center;

  h1 {
    font-family: var(--header-font);
    color: var(--text-color);
    leter-spacing: 1px;
    font-size: 6vh;
  }
  p {
    font-family: var(--text-font);
    color: var(--text-color);
    leter-spacing: 1px;
    font-size: 1.8vh;
  }
`;

const InfoLinks = styled.div``;
const ButtonGroups = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8%;
  cursor: pointer;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background: var(--text-color);
  leter-spacing: 1px;
  font-family: var(--text-font);
  color: var(--bg-color);
  opacity: 0.85;
  padding: 14px 80px;
  border-radius: 100px;
  font-size: 1.7vh;
  text-transform: uppercase;
  margin: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RightButton = styled(LeftButton)`
  background: var(--bg-color);
  leter-spacing: 1px;
  color: var(--text-color);
  opacity: 0.65;
`;
const ArrowDown = styled.img`
  width: 4%;
  margin-left: 45%;
  animation: animationArrow infinite 1.9s;
`;

export default Section;
