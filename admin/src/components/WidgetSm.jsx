import React from "react";
import styled from "styled-components";
import { Visibility } from "@mui/icons-material";

const Container = styled.div`
  flex: 1;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
  margin-right: 25px;
`;

const WidgetSmTitle = styled.span`
  font-size: 22px;
  font-weight: 600;
`;
const WidgetSmList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const WidgetSmListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;

const WidgetSmUsername = styled.div`
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
const Username = styled.span`
  font-weight: 600;
`;
const UsernameTitle = styled.span`
  font-weight: 300;
`;
const WidgetButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;
`;

const Icon = styled.div`
  font-size: 16px;
  margin-right: 5px !important;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WidgetSm = () => {
  return (
    <Container>
      <WidgetSmTitle>New Join Members</WidgetSmTitle>
      <WidgetSmList>
        <WidgetSmListItem>
          <Image src="https://www.cbc.ca/kids/images/wild_and_wonderful_asian_animals_header_1140.jpg"></Image>
          <WidgetSmUsername>
            <Username>Sourav Pandya</Username>
            <UsernameTitle>Software Engineer</UsernameTitle>
          </WidgetSmUsername>
          <WidgetButton>
            <Icon>
              <Visibility /> Display
            </Icon>
          </WidgetButton>
        </WidgetSmListItem>
      </WidgetSmList>
      <WidgetSmList>
        <WidgetSmListItem>
          <Image src="https://www.cbc.ca/kids/images/wild_and_wonderful_asian_animals_header_1140.jpg"></Image>
          <WidgetSmUsername>
            <Username>Sourav Pandya</Username>
            <UsernameTitle>Software Engineer</UsernameTitle>
          </WidgetSmUsername>
          <WidgetButton>
            <Icon>
              <Visibility /> Display
            </Icon>
          </WidgetButton>
        </WidgetSmListItem>
      </WidgetSmList>
      <WidgetSmList>
        <WidgetSmListItem>
          <Image src="https://www.cbc.ca/kids/images/wild_and_wonderful_asian_animals_header_1140.jpg"></Image>
          <WidgetSmUsername>
            <Username>Sourav Pandya</Username>
            <UsernameTitle>Software Engineer</UsernameTitle>
          </WidgetSmUsername>
          <WidgetButton>
            <Icon>
              <Visibility /> Display
            </Icon>
          </WidgetButton>
        </WidgetSmListItem>
      </WidgetSmList>
      <WidgetSmList>
        <WidgetSmListItem>
          <Image src="https://www.cbc.ca/kids/images/wild_and_wonderful_asian_animals_header_1140.jpg"></Image>
          <WidgetSmUsername>
            <Username>Sourav Pandya</Username>
            <UsernameTitle>Software Engineer</UsernameTitle>
          </WidgetSmUsername>
          <WidgetButton>
            <Icon>
              <Visibility /> Display
            </Icon>
          </WidgetButton>
        </WidgetSmListItem>
      </WidgetSmList>
      <WidgetSmList>
        <WidgetSmListItem>
          <Image src="https://www.cbc.ca/kids/images/wild_and_wonderful_asian_animals_header_1140.jpg"></Image>
          <WidgetSmUsername>
            <Username>Sourav Pandya</Username>
            <UsernameTitle>Software Engineer</UsernameTitle>
          </WidgetSmUsername>
          <WidgetButton>
            <Icon>
              <Visibility /> Display
            </Icon>
          </WidgetButton>
        </WidgetSmListItem>
      </WidgetSmList>
    </Container>
  );
};
