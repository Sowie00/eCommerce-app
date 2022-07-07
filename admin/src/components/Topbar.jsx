import React from "react";
import styled from "styled-components";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 999;
`;
const Wrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div``;
const Right = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.span`
  color: #355c7d;
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
`;

const Icon = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  color: #355c7d;
`;
const Badge = styled.span`
  width: 15px;
  height: 15px;
  font-weight: bold;
  font-size: 10px;
  position: absolute;
  top: -3px;
  right: -2px;
  background-color: #6c5b7b;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

export const Topbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Sowie.Admin</Logo>
        </Left>
        <Right>
          <Icon>
            <NotificationsNone />
            <Badge>2</Badge>
          </Icon>
          <Icon>
            <Language />
          </Icon>
          <Icon>
            <Settings />
          </Icon>
          <Image src="https://media.istockphoto.com/photos/male-lion-resting-on-a-rock-picture-id1333977253?b=1&k=20&m=1333977253&s=170667a&w=0&h=q_EqYl_GqFCR1XmF_AK91YRFDapwAClOoc2fZbsnmr4=" />
        </Right>
      </Wrapper>
    </Container>
  );
};
