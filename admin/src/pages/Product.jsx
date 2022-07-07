import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Chart } from "../components/Chart";
import { productData } from "../dummyData";

const Container = styled.div`
  flex: 4;
  padding: 20px;
`;

const ProductTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ProductTitle = styled.h1``;
const ProductAddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: #355c7d;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

const ProductTop = styled.div`
  display: flex;
`;
const ProductTopLeft = styled.div`
  flex: 1;
`;
const ProductTopRight = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const ProductBottom = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const ProductInfoTop = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;
const ProductName = styled.span`
  font-weight: 600;
`;
const ProductInfoItem = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;
const ProductInfoBottom = styled.div`
  margin-top: 10px;
`;
const ProductInfoKey = styled.span`
  color: #6c5b7b;
`;
const ProductInfoValue = styled.span`
  font-weight: 300;
`;

const ProductForm = styled.form`
  display: flex;
  justify-content: space-between;
`;
const ProductFormInput = styled.input`
  margin-bottom: 10px;
  border: none;
  padding: 5px;
  border-bottom: 1px solid gray;
`;
const ProductFormLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProductFormLabel = styled.label`
  margin-bottom: 10px;
  color: gray;
`;
const ProductFormSelect = styled.select`
  margin-bottom: 10px;
`;
const ProductFormOption = styled.option``;
const ProductFormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductUpload = styled.div`
  display: flex;
  align-items: center;
`;
const ProductUploadImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;
const ProductButton = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: #6c5b7b;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

export default function Product() {
  return (
    <Container>
      <ProductTitleContainer>
        <ProductTitle>Product</ProductTitle>
        <Link to="/newproduct">
          <ProductAddButton>Create</ProductAddButton>
        </Link>
      </ProductTitleContainer>
      <ProductTop>
        <ProductTopLeft>
          <Chart data={productData} dataKey="sales" title="Sales Performance" />
        </ProductTopLeft>
        <ProductTopRight>
          <ProductInfoTop>
            <Image src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Apple_AirPods_Pro_6.jpg" />
            <ProductName>Apple Airpods</ProductName>
          </ProductInfoTop>
          <ProductInfoBottom>
            <ProductInfoItem>
              <ProductInfoKey>id:</ProductInfoKey>
              <ProductInfoValue>123</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>sales:</ProductInfoKey>
              <ProductInfoValue>5123</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>active:</ProductInfoKey>
              <ProductInfoValue>yes</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>in stock:</ProductInfoKey>
              <ProductInfoValue>no</ProductInfoValue>
            </ProductInfoItem>
          </ProductInfoBottom>
        </ProductTopRight>
      </ProductTop>
      <ProductBottom>
        <ProductForm>
          <ProductFormLeft>
            <ProductFormLabel>Product Name</ProductFormLabel>
            <ProductFormInput type="text" placeholder="Apple Airpods" />
            <ProductFormLabel>In Stock</ProductFormLabel>
            <ProductFormSelect name="inStock" id="idStock">
              <ProductFormOption value="yes">Yes</ProductFormOption>
              <ProductFormOption value="no">No</ProductFormOption>
            </ProductFormSelect>
            <ProductFormLabel>Active</ProductFormLabel>
            <ProductFormSelect name="active" id="active">
              <ProductFormOption value="yes">Yes</ProductFormOption>
              <ProductFormOption value="no">No</ProductFormOption>
            </ProductFormSelect>
          </ProductFormLeft>
          <ProductFormRight>
            <ProductUpload>
              <ProductUploadImg src="https://media.wired.com/photos/59e94ff8ce22fd0cca3c5242/master/w_2560%2Cc_limit/headphones-edit-1.jpg" />
              <ProductFormLabel htmlFor="file"></ProductFormLabel>
              <ProductFormInput
                type="file"
                id="file"
                style={{ display: "none" }}
              ></ProductFormInput>
            </ProductUpload>
            <ProductButton>Update</ProductButton>
          </ProductFormRight>
        </ProductForm>
      </ProductBottom>
    </Container>
  );
}
