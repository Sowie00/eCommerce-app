import React, { useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Drawer, Box, Typography } from "@mui/material";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Button = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: #355c7d;
`;

const Select = styled.select`
  width: 70%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 4px solid #355c7d;
  margin-top: 50px;
  padding: 10px;
  &::selection {
    border-top: none;
    border-left: none;
    border-right: none;
  }
`;

const SelectItem = styled.option``;

export const FiltersDrawer = ({ getFilters }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState();
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filter, setFilters] = useState({});

  const handleChange = (e) => {
    const value = e.target.value;
    setFilters({
      ...filter,
      [e.target.name]: value,
    });
  };

  getFilters(filter);
  return (
    <>
      <Button onClick={() => setIsDrawerOpen(true)}>
        <FilterListIcon /> <FilterText>Filter</FilterText>
      </Button>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
        }}
      >
        <Box p={2} width="350px" textAlign="center" role="presentation">
          <Typography
            variant="h6"
            color="#6c5b7b"
            fontWeight={700}
            component="div"
          >
            Filters
          </Typography>

          <Select name="size" onChange={handleChange}>
            <SelectItem selected disabled>
              Size
            </SelectItem>
            <SelectItem>7</SelectItem>
            <SelectItem>7.5</SelectItem>
            <SelectItem>8</SelectItem>
            <SelectItem>9</SelectItem>
            <SelectItem>9.5</SelectItem>
            <SelectItem>10</SelectItem>
            <SelectItem>10.5</SelectItem>
            <SelectItem>11</SelectItem>
            <SelectItem>12</SelectItem>
            <SelectItem>13</SelectItem>
            <SelectItem>14</SelectItem>
            <SelectItem>S</SelectItem>
            <SelectItem>M</SelectItem>
            <SelectItem>L</SelectItem>
            <SelectItem>One Size</SelectItem>
          </Select>

          <Select name="color" onChange={handleChange}>
            <SelectItem selected disabled>
              Color
            </SelectItem>
            <SelectItem>beige</SelectItem>
            <SelectItem>black</SelectItem>
            <SelectItem>blue</SelectItem>
            <SelectItem>brown</SelectItem>
            <SelectItem>red</SelectItem>
            <SelectItem>white</SelectItem>
            <SelectItem>yellow</SelectItem>
            <SelectItem>purple</SelectItem>
            <SelectItem>gray</SelectItem>
          </Select>
        </Box>
      </Drawer>
    </>
  );
};
