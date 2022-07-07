import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 4;
  padding: 20px;
`;
const NewUserTitle = styled.h1`
  color: #355c7d; ;
`;
const NewUserForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const NewUserItem = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 90px;
`;
const Label = styled.label`
  color: #d1c7c7;
  margin-bottom: 10px;
  margin-left: 20px;
  font-size: 14px;
  font-weight: 600;
`;

const Input = styled.input`
  height: 20px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
  margin-left: 20px;
`;

const NewUserButton = styled.button`
  width: 200px;
  border: none;
  background-color: #355c7d;
  color: white;
  padding: 7px 10px;
  font-weight: 600;
  border-radius: 10px;
  margin-top: 40px;
  margin-left: 20px;
  cursor: pointer;
`;
const NewUserGender = styled.div`
  margin: 10px;
  font-size: 18px;
  color: #555;
`;
const NewUserSelect = styled.select`
  height: 40px;
  border-radius: 5px;
  margin-left: 20px;
`;
const NewUserOption = styled.option``;
const NewUserGenderLabel = styled.label`
  margin: 10px;
  font-size: 18px;
  color: #555;
`;
const NewUserGenderInput = styled.input`
  margin-top: 15px;
  margin-left: 10px;
`;

export const NewUser = () => {
  return (
    <Container>
      <NewUserTitle>New User</NewUserTitle>
      <NewUserForm>
        <NewUserItem>
          <Label>Username</Label>
          <Input type="text"></Input>
        </NewUserItem>
        <NewUserItem>
          <Label>Full Name</Label>
          <Input type="text"></Input>
        </NewUserItem>
        <NewUserItem>
          <Label>Email</Label>
          <Input type="email"></Input>
        </NewUserItem>
        <NewUserItem>
          <Label>Password</Label>
          <Input type="password"></Input>
        </NewUserItem>
        <NewUserItem>
          <Label>Phone</Label>
          <Input type="text"></Input>
        </NewUserItem>
        <NewUserItem>
          <Label>Address</Label>
          <Input type="text"></Input>
        </NewUserItem>
        <NewUserItem>
          <Label>Occupation</Label>
          <Input type="text"></Input>
        </NewUserItem>
        <NewUserItem>
          <Label>Gender</Label>
          <NewUserGender>
            <NewUserGenderInput
              type="radio"
              name="gender"
              id="male"
              value="male"
            ></NewUserGenderInput>
            <NewUserGenderLabel for="male">Male</NewUserGenderLabel>
            <NewUserGenderInput
              type="radio"
              name="gender"
              id="female"
              value="female"
            ></NewUserGenderInput>
            <NewUserGenderLabel for="female">Female</NewUserGenderLabel>
            <NewUserGenderInput
              type="radio"
              name="gender"
              id="private"
              value="private"
            ></NewUserGenderInput>
            <NewUserGenderLabel for="private">
              Prefer not to say
            </NewUserGenderLabel>
          </NewUserGender>
        </NewUserItem>
        <NewUserItem>
          <Label>Active</Label>
          <NewUserSelect name="active" id="active">
            <NewUserOption>Yes</NewUserOption>
            <NewUserOption>No</NewUserOption>
          </NewUserSelect>
        </NewUserItem>
        <NewUserButton>Create</NewUserButton>
      </NewUserForm>
    </Container>
  );
};
