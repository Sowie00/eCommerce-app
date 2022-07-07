import React from "react";
import styled from "styled-components";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const FeaturedItem = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const FeaturedTitle = styled.span`
  font-size: 20px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color};
`;
const FeaturedMoney = styled.span`
  font-size: 30px;
  font-weight: 600;
`;
const FeaturedSubtitle = styled.span`
  font-size: 15px;
  color: gray;
`;
const FeaturedMoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin: 10px;
`;

const FeaturedMoneyContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
`;

export const FeaturedInfo = () => {
  return (
    <Container>
      <FeaturedItem>
        <FeaturedTitle>Revenue</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$2,415</FeaturedMoney>
          <FeaturedMoneyRate>
            -11.4
            <Icon color="red">
              <ArrowDownward />
            </Icon>
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSubtitle>Compared to last month</FeaturedSubtitle>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedTitle>Sales</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$4,415</FeaturedMoney>
          <FeaturedMoneyRate>
            -1.4
            <Icon color="red">
              <ArrowDownward />
            </Icon>
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSubtitle>Compared to last month</FeaturedSubtitle>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedTitle>Cost</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$2,225</FeaturedMoney>
          <FeaturedMoneyRate>
            +2.4
            <Icon color="green">
              <ArrowUpward />
            </Icon>
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSubtitle>Compared to last month</FeaturedSubtitle>
      </FeaturedItem>
    </Container>
  );
};
