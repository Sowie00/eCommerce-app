import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { Add, Remove } from "@mui/icons-material";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.div`
  font-weight: 200;
  font-size: 20px;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const Select = styled.select`
  margin: 10px;
  padding: 5px;
`;
const Option = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #6c5b7b;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  background-color: white;
  border: 2px solid #6c5b7b;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

export const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
        </ImgContainer>
        <InfoContainer>
          <Title>NIKE Air Jordan 1 Retro Sneakers</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            officiis modi repudiandae odit, recusandae eveniet ea voluptate
            voluptates. Velit nemo qui modi debitis sequi natus esse voluptates?
            Unde, veniam quae. Officia explicabo dignissimos, expedita aperiam
            quas illum aut error beatae similique ducimus et non saepe,
            accusamus fugiat impedit repellat minus temporibus tempore,
            aspernatur ipsam! Atque quam dignissimos laborum incidunt
            voluptates!
          </Desc>
          <Price>$ 299</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="red"></FilterColor>
              <FilterColor color="blue"></FilterColor>
              <FilterColor color="green"></FilterColor>
              <FilterColor color="orange"></FilterColor>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <Select>
                <Option>6</Option>
                <Option>6.5</Option>
                <Option>7</Option>
                <Option>7.5</Option>
                <Option>8</Option>
                <Option>8.5</Option>
                <Option>9</Option>
                <Option>9.5</Option>
                <Option>10</Option>
                <Option>11</Option>
                <Option>12</Option>
                <Option>13</Option>
              </Select>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};
