import React, { useState } from "react";
import styled from "styled-components";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../dummyData";
import { Route, Link, Router, Routes, useNavigate } from "react-router-dom";

const UserListUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const EditButton = styled.button`
  padding: 5px 10px;
  margin-right: 20px;
  border: none;
  border-radius: 10px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  color: red;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 4;
`;

export const UserList = () => {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <UserListUser>
            <Image src={params.row.avatar} alt="" />
            {params.row.username}
          </UserListUser>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transactions",
      headerName: "Transaction",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <ButtonContainer>
            <Link to={"/user/" + params.row.id}>
              <EditButton>Edit</EditButton>
            </Link>
            <Icon onClick={() => handleDelete(params.row.id)}>
              <DeleteOutline />
            </Icon>
          </ButtonContainer>
        );
      },
    },
  ];
  return (
    <Container>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Container>
  );
};
