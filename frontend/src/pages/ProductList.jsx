import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import { FiltersDrawer } from "../components/FiltersDrawer";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { useState } from "react";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
  color: #355c7d;
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
  color: #355c7d;
`;

const Select = styled.select`
  margin-left: 20px;
  padding: 10px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 4px solid #355c7d;
`;

const SelectItem = styled.option``;

export const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [sort, setSort] = useState("featured");
  const [filters, setFilters] = useState({});

  const getFilters = (filter) => {
    setFilters(filter);
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FiltersDrawer getFilters={getFilters} />
        </Filter>
        <Filter>
          <FilterText>Sort By: </FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <SelectItem value="asc">Price: Low to High</SelectItem>
            <SelectItem value="desc">Price: High to Low</SelectItem>
            <SelectItem selected value="newest">
              Newest
            </SelectItem>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};
