import React from "react";
import styled from "styled-components";

import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 4;
  padding: 20px;
`;

const UserTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserTitle = styled.h1``;
const UserAddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: #6c5b7b;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 16px;
`;

const UserContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;
const UserShow = styled.div`
  flex: 1;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const UserUpdate = styled.div`
  flex: 2;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin-left: 20px;
`;

const UserShowTop = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
const UserShowTopTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const UserShowUsername = styled.span`
  font-weight: 700;
  color: #6c5b7b;
`;
const UserShowUserTitle = styled.span`
  font-weight: 400;
  color: #6c5b7b;
`;
const UserShowBottom = styled.div`
  margin-top: 20px;
`;
const UserShowInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
`;
const UserShowTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #d1c7c7;
`;
const UserShowInfoTitle = styled.span`
  color: #6c5b7b;
  margin-left: 10px;
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  color: #355c7d;
`;

const UserUpdateTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;
const UserUpdateForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const UserUpdateLeft = styled.div``;
const UserUpdateItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
const UserUpdateLabel = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
`;
const UserUpdateInput = styled.input`
  border: none;
  width: 250px;
  border-bottom: 1px solid gray;
  height: 30px;
`;
const UserUpdateRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const UserUpdateUpload = styled.div`
  display: flex;
  align-items: center;
`;
const UserUpdateImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;
const InputFileLabel = styled.label``;
const InputFile = styled.input``;
const UserUpdateButton = styled.button`
  border-radius: 5px;
  border: none;
  padding: 5px;
  cursor: pointer;
  background-color: #6c5b7b;
  color: white;
  font-weight: 600;
`;
const PublishIcon = styled.div`
  cursor: pointer;
`;

export const User = () => {
  return (
    <Container>
      <UserTitleContainer>
        <UserTitle>Edit User</UserTitle>
        <Link to="/newUser">
          <UserAddButton>Create</UserAddButton>
        </Link>
      </UserTitleContainer>
      <UserContainer>
        <UserShow>
          <UserShowTop>
            <Image src="https://www.iata.org/contentassets/d7c512eb9a704ba2a8056e3186a31921/cargo_live_animals_parrot.jpg?w=330&h=200&mode=crop&scale=both&v=20191213012337" />
            <UserShowTopTitle>
              <UserShowUsername>Sourav Pandya</UserShowUsername>
              <UserShowUserTitle>Software Engineer</UserShowUserTitle>
            </UserShowTopTitle>
          </UserShowTop>
          <UserShowBottom>
            <UserShowTitle>Account Details</UserShowTitle>
            <UserShowInfo>
              <Icon>
                <PermIdentity />
                <UserShowInfoTitle>Sowiep00</UserShowInfoTitle>
              </Icon>
            </UserShowInfo>
            <UserShowInfo>
              <Icon>
                <CalendarToday />
                <UserShowInfoTitle>10-20-1999</UserShowInfoTitle>
              </Icon>
            </UserShowInfo>
            <UserShowTitle>Contact Details</UserShowTitle>
            <UserShowInfo>
              <Icon>
                <PhoneAndroid />
                <UserShowInfoTitle>+1 999 999 9999</UserShowInfoTitle>
              </Icon>
            </UserShowInfo>
            <UserShowInfo>
              <Icon>
                <MailOutline />
                <UserShowInfoTitle>sowie00p@gmail.com</UserShowInfoTitle>
              </Icon>
            </UserShowInfo>
            <UserShowInfo>
              <Icon>
                <LocationSearching />
                <UserShowInfoTitle>Toronto, Canada</UserShowInfoTitle>
              </Icon>
            </UserShowInfo>
          </UserShowBottom>
        </UserShow>
        <UserUpdate>
          <UserUpdateTitle>Edit</UserUpdateTitle>
          <UserUpdateForm>
            <UserUpdateLeft>
              <UserUpdateItem>
                <UserUpdateLabel>Username</UserUpdateLabel>
                <UserUpdateInput
                  type="text"
                  placeholder="Sowiep00"
                ></UserUpdateInput>
              </UserUpdateItem>
              <UserUpdateItem>
                <UserUpdateLabel>Full Name</UserUpdateLabel>
                <UserUpdateInput
                  type="text"
                  placeholder="Sourav Pandya"
                ></UserUpdateInput>
              </UserUpdateItem>
              <UserUpdateItem>
                <UserUpdateLabel>Email</UserUpdateLabel>
                <UserUpdateInput
                  type="text"
                  placeholder="sowie00p@gmail.com"
                ></UserUpdateInput>
              </UserUpdateItem>
              <UserUpdateItem>
                <UserUpdateLabel>Phone</UserUpdateLabel>
                <UserUpdateInput
                  type="text"
                  placeholder="+1 999 999 9999"
                ></UserUpdateInput>
              </UserUpdateItem>
              <UserUpdateItem>
                <UserUpdateLabel>Address</UserUpdateLabel>
                <UserUpdateInput
                  type="text"
                  placeholder="Toronto, Canada"
                ></UserUpdateInput>
              </UserUpdateItem>
              <UserUpdateItem>
                <UserUpdateLabel>Occupation</UserUpdateLabel>
                <UserUpdateInput
                  type="text"
                  placeholder="Software Engineer"
                ></UserUpdateInput>
              </UserUpdateItem>
            </UserUpdateLeft>
            <UserUpdateRight>
              <UserUpdateUpload>
                <UserUpdateImg src="https://a-z-animals.com/media/2021/10/blue-gray-tanager-1024x535.jpg" />
                <InputFileLabel htmlFor="file">
                  <PublishIcon>
                    <Publish />
                  </PublishIcon>
                </InputFileLabel>
                <InputFile
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                ></InputFile>
              </UserUpdateUpload>
              <UserUpdateButton>Update</UserUpdateButton>
            </UserUpdateRight>
          </UserUpdateForm>
        </UserUpdate>
      </UserContainer>
    </Container>
  );
};
