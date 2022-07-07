import React from "react";
import styled from "styled-components";
import { Topbar } from "./Topbar";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: rgb(251, 251, 255);
  position: sticky;
  top: 50px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const Wrapper = styled.div`
  padding: 20px;
  color: #355c7d;
`;
const Menu = styled.div`
  margin-bottom: 10px;
`;
const SidebarTitle = styled.h3`
  font-size: 13px;
  color: #355c7d;
`;
const SidebarList = styled.ul`
  list-style: none;
  padding: 5px;
`;

const Icon = styled.div`
  margin-right: 5px;
  display: flex;
  align-items: center;
  font-size: 20px !important;
`;
const SidebarListItem = styled.li`
  padding: 5px;
  display: flex;
  cursor: pointer;
  align-items: center;
  border-radius: 10px;

  &:hover,
  &.active {
    background-color: rgb(225, 225, 247);
  }
`;

export const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Menu>
          <SidebarTitle>Dashboard</SidebarTitle>
          <SidebarList>
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
              <SidebarListItem className="active">
                <Icon>
                  <LineStyle />
                </Icon>
                Home
              </SidebarListItem>
            </Link>
            <SidebarListItem>
              <Icon>
                <Timeline />
              </Icon>
              Analytics
            </SidebarListItem>
            <SidebarListItem>
              <Icon>
                <TrendingUp />
              </Icon>
              Sales
            </SidebarListItem>
          </SidebarList>
        </Menu>
        <Menu>
          <SidebarTitle>Quick Menu</SidebarTitle>
          <SidebarList>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/users"
            >
              <SidebarListItem>
                <Icon>
                  <PermIdentity />
                </Icon>
                Users
              </SidebarListItem>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/products"
            >
              <SidebarListItem>
                <Icon>
                  <Storefront />
                </Icon>
                Products
              </SidebarListItem>
            </Link>
            <SidebarListItem>
              <Icon>
                <AttachMoney />
              </Icon>
              Transactions
            </SidebarListItem>
            <SidebarListItem>
              <Icon>
                <BarChart />
              </Icon>
              Reports
            </SidebarListItem>
          </SidebarList>
        </Menu>
        <Menu>
          <SidebarTitle>Notifications</SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <Icon>
                <MailOutline />
              </Icon>
              Mail
            </SidebarListItem>
            <SidebarListItem>
              <Icon>
                <DynamicFeed />
              </Icon>
              Feedback
            </SidebarListItem>
            <SidebarListItem>
              <Icon>
                <ChatBubbleOutline />
              </Icon>
              Messages
            </SidebarListItem>
          </SidebarList>
        </Menu>
        <Menu>
          <SidebarTitle>Staff</SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <Icon>
                <WorkOutline />
              </Icon>
              Manage
            </SidebarListItem>
            <SidebarListItem>
              <Icon>
                <Timeline />
              </Icon>
              Analytics
            </SidebarListItem>
            <SidebarListItem>
              <Icon>
                <Report />
              </Icon>
              Reports
            </SidebarListItem>
          </SidebarList>
        </Menu>
      </Wrapper>
    </Container>
  );
};
