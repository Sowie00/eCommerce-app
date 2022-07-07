import React from "react";
import styled from "styled-components";
const Container = styled.div`
  flex: 2;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
`;

const WidgetLgTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;
const WidgetLgTable = styled.table`
  width: 100%;
  border-spacing: 20px;
`;
const WidgetLgTr = styled.tr``;
const WidgetLgTh = styled.th`
  text-align: left;
`;
const WidgetLgUser = styled.td`
  display: flex;
  align-items: center;
  font-weight: 600;
`;
const WidgetLgName = styled.span``;
const WidgetLgDate = styled.td`
  font-weight: 300;
`;
const WidgetLgAmount = styled.td`
  font-weight: 300;
`;
const WidgetLgStatus = styled.td``;
const WidgetLgButton = styled.button`
  padding: 5px 7px;
  border-radius: 10px;
  border: none;
  background-color: ${(props) => props.color};
  color: ${(props) => props.textColor};
`;
const WidgetLgImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

export default function WidgetLg() {
  return (
    <Container>
      <WidgetLgTitle>Latest transactions</WidgetLgTitle>
      <WidgetLgTable>
        <WidgetLgTr>
          <WidgetLgTh>Customer</WidgetLgTh>
          <WidgetLgTh>Date</WidgetLgTh>
          <WidgetLgTh>Amount</WidgetLgTh>
          <WidgetLgTh>Status</WidgetLgTh>
        </WidgetLgTr>
        <WidgetLgTr>
          <WidgetLgUser>
            <WidgetLgImage src="https://i.natgeofe.com/k/75ac774d-e6c7-44fa-b787-d0e20742f797/giant-panda-eating_16x9.jpg"></WidgetLgImage>
            <WidgetLgName>Susan Carol</WidgetLgName>
          </WidgetLgUser>
          <WidgetLgDate>6 July 2022</WidgetLgDate>
          <WidgetLgAmount>$122.00</WidgetLgAmount>
          <WidgetLgStatus>
            <WidgetLgButton textColor="#3bb077" color="#e5faf2">
              Approved
            </WidgetLgButton>
          </WidgetLgStatus>
        </WidgetLgTr>
        <WidgetLgTr>
          <WidgetLgUser>
            <WidgetLgImage src="https://i.natgeofe.com/k/75ac774d-e6c7-44fa-b787-d0e20742f797/giant-panda-eating_16x9.jpg"></WidgetLgImage>
            <WidgetLgName>Susan Carol</WidgetLgName>
          </WidgetLgUser>
          <WidgetLgDate>6 July 2022</WidgetLgDate>
          <WidgetLgAmount>$122.00</WidgetLgAmount>
          <WidgetLgStatus>
            <WidgetLgButton textColor="#d95087" color="#fff0f1">
              Declined
            </WidgetLgButton>
          </WidgetLgStatus>
        </WidgetLgTr>
        <WidgetLgTr>
          <WidgetLgUser>
            <WidgetLgImage src="https://i.natgeofe.com/k/75ac774d-e6c7-44fa-b787-d0e20742f797/giant-panda-eating_16x9.jpg"></WidgetLgImage>
            <WidgetLgName>Susan Carol</WidgetLgName>
          </WidgetLgUser>
          <WidgetLgDate>6 July 2022</WidgetLgDate>
          <WidgetLgAmount>$122.00</WidgetLgAmount>
          <WidgetLgStatus>
            <WidgetLgButton textColor="#2a7ade" status="#ebf1fe">
              Pending
            </WidgetLgButton>
          </WidgetLgStatus>
        </WidgetLgTr>
        <WidgetLgTr>
          <WidgetLgUser>
            <WidgetLgImage src="https://i.natgeofe.com/k/75ac774d-e6c7-44fa-b787-d0e20742f797/giant-panda-eating_16x9.jpg"></WidgetLgImage>
            <WidgetLgName>Susan Carol</WidgetLgName>
          </WidgetLgUser>
          <WidgetLgDate>6 July 2022</WidgetLgDate>
          <WidgetLgAmount>$122.00</WidgetLgAmount>
          <WidgetLgStatus>
            <WidgetLgButton textColor="#3bb077" color="#e5faf2">
              Approved
            </WidgetLgButton>
          </WidgetLgStatus>
        </WidgetLgTr>
      </WidgetLgTable>
    </Container>
  );
}
