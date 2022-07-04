import React, { useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import {
  Drawer,
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
  FormGroup,
  FormControl,
  Grid,
} from "@mui/material";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 20px;
`;

export const FiltersAccordion = () => {
  return (
    <Container>
      <Accordion>
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Category</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset">
            <FormGroup>
              <FormControlLabel
                label="Bags & Accessories"
                control={<Checkbox />}
              />
              <FormControlLabel label="Collections" control={<Checkbox />} />
              <FormControlLabel label="Footwear" control={<Checkbox />} />
              <FormControlLabel label="New arrivals" control={<Checkbox />} />
              <FormControlLabel label="Original Price" control={<Checkbox />} />
              <FormControlLabel label="Sale" control={<Checkbox />} />
              <FormControlLabel label="Workwear" control={<Checkbox />} />
            </FormGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Category</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset">
            <FormGroup>
              <FormControlLabel
                label="Bags & Accessories"
                control={<Checkbox />}
              />
              <FormControlLabel label="Collections" control={<Checkbox />} />
              <FormControlLabel label="Footwear" control={<Checkbox />} />
              <FormControlLabel label="New arrivals" control={<Checkbox />} />
              <FormControlLabel label="Original Price" control={<Checkbox />} />
              <FormControlLabel label="Sale" control={<Checkbox />} />
              <FormControlLabel label="Workwear" control={<Checkbox />} />
            </FormGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};
