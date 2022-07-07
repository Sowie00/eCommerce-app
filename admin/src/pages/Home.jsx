import React from "react";
import styled from "styled-components";
import { Chart } from "../components/Chart";
import { FeaturedInfo } from "../components/FeaturedInfo";
import WidgetLg from "../components/WidgetLg";
import { WidgetSm } from "../components/WidgetSm";
import { userData } from "../dummyData";

const Container = styled.div`
  flex: 4;
`;

const Widgets = styled.div`
  display: flex;
  margin: 20px;
`;

export const Home = () => {
  return (
    <Container>
      <FeaturedInfo />
      <Chart
        data={userData}
        title="Sales Analytics"
        grid
        dataKey="Active User"
      />
      <Widgets>
        <WidgetSm />
        <WidgetLg />
      </Widgets>
    </Container>
  );
};
