import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 4;
  padding: 20px;
`;
const NewProductTitle = styled.h1`
  margin-left: 20px;
  color: #355c7d;
`;
const NewProductForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
const NewProductItem = styled.div`
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
  border: ${(props) => (props.type === "file" ? "none" : "1px solid gray")};
  border-radius: 5px;
  margin-left: 20px;
`;

const NewProductButton = styled.button`
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
const NewProductGender = styled.div`
  margin: 10px;
  font-size: 18px;
  color: #555;
`;
const NewProductSelect = styled.select`
  height: 40px;
  border-radius: 5px;
  margin-left: 20px;
`;
const NewProductOption = styled.option``;
const NewProductGenderLabel = styled.label`
  margin: 10px;
  font-size: 18px;
  color: #555;
`;
const NewProductGenderInput = styled.input`
  margin-top: 15px;
  margin-left: 10px;
`;

export const NewProduct = () => {
  return (
    <Container>
      <NewProductTitle>New Product</NewProductTitle>
      <NewProductForm>
        <NewProductItem type="file">
          <Label>Image</Label>
          <Input type="file" id="file"></Input>
        </NewProductItem>
        <NewProductItem>
          <Label>Name</Label>
          <Input type="text"></Input>
        </NewProductItem>
        <NewProductItem>
          <Label>Stock</Label>
          <NewProductSelect name="active" id="active">
            <NewProductOption>Yes</NewProductOption>
            <NewProductOption>No</NewProductOption>
          </NewProductSelect>
        </NewProductItem>
        <NewProductItem>
          <Label>Active</Label>
          <NewProductSelect name="active" id="active">
            <NewProductOption>Yes</NewProductOption>
            <NewProductOption>No</NewProductOption>
          </NewProductSelect>
        </NewProductItem>
        <NewProductButton>Create</NewProductButton>
      </NewProductForm>
    </Container>
  );
};
