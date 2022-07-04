import React, { useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Drawer, Box, Typography } from "@mui/material";
import styled from "styled-components";
import { FiltersAccordion } from "./FiltersAccordion";

const Button = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

export const FiltersDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState();
  return (
    <>
      <Button onClick={() => setIsDrawerOpen(true)}>
        <FilterListIcon /> <FilterText>Filter</FilterText>
      </Button>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="350px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Filters
          </Typography>
          <FiltersAccordion />
        </Box>
      </Drawer>
    </>
  );
};
