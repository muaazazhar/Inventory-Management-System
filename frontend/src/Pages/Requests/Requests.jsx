import Tables from "../../Components/Shared/Tables/Tables";
import { Box, Button, IconButton, InputBase, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import {
  ownRequestLabel,
  requestsLabel,
  requestStatusOptions,
} from "../../Constant/tablesData";
import { headerDiv, headerText, main, addButton, searchStyles } from "./styles";
import { useEffect, useState } from "react";
import Select from "../../Components/Shared/Select/Select";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getRequests,
  searchRequests,
  selectUsingStatus,
} from "../../Redux/request/requestAction";
import { Role } from "../../Constant/componentConstants";

const Requests = () => {
  const [search, setSearch] = useState(""),
    navigate = useNavigate(),
    [statusSelect, setStatusSelect] = useState(""),
    { userValidation, requestData } = useSelector((state) => state),
    dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRequests("request"));
  }, [userValidation]);

  const handleSearch = (e) => {
    dispatch(
      searchRequests({ search: e.target.value, type: "request" })
    );
    setSearch(e.target.value);
    setStatusSelect("");
  }
  const handleSelect = (e) => {
    setSearch("");
    setStatusSelect(e.target.value);
    dispatch(
      selectUsingStatus({ select: e.target.value, type: "request" })
    );
  }

  return (
    <Box sx={main}>
      <Box sx={headerDiv}>
        <Typography sx={headerText}>Requests</Typography>
        {userValidation.role !== Role.Employee && (
          <>
            <Box component="form" sx={searchStyles}>
              <InputBase
                sx={{ textAlign: "center", m: 1 }}
                placeholder="Search something..."
                value={search}
                onChange={handleSearch}
              />
              <IconButton type="button" sx={{ p: "5%" }} color="primary">
                <SearchIcon />
              </IconButton>
            </Box>
            <Select
              label={"Select Status"}
              menuItems={requestStatusOptions}
              defaultValue={statusSelect}
              value={"status"}
              html={"status"}
              noLabel={true}
              onChange={handleSelect}
            />
          </>
        )}
        {userValidation.role === Role.Employee && (
          <Button
            startIcon={<AddIcon />}
            size="large"
            sx={addButton}
            color="success"
            variant="contained"
            onClick={() => {
              navigate("create");
            }}
          >
            {" "}
            Create
          </Button>
        )}
      </Box>
      <Tables
        label={
          userValidation.role === Role.Admin ? requestsLabel : ownRequestLabel
        }
        rowsPerPage={10}
        hidden={false}
        viewRoute={"details/"}
        data={requestData?.requests ? requestData.requests : []}
      />
    </Box>
  );
};

export default Requests;
