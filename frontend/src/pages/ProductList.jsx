import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import { FiltersDrawer } from "../components/FiltersDrawer";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const Select = styled.select`
  margin-left: 20px;
  padding: 10px;
`;

const SelectItem = styled.option``;

export const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Shoes</Title>
      <FilterContainer>
        <Filter>
          <FiltersDrawer />
        </Filter>
        <Filter>
          <FilterText>Sort By: </FilterText>
          <Select>
            <SelectItem selected>Featured</SelectItem>
            <SelectItem>Price: High to Low</SelectItem>
            <SelectItem>Price: Low to High</SelectItem>
            <SelectItem>Newest</SelectItem>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};
