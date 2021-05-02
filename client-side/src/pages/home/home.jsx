import React, { useState } from "react";
import "./home.scss";
import SearchIcon from "@material-ui/icons/Search";
// import { userColumns } from "../../store/columnsStore";
import { useTableSearch } from "../../store/useTableSearch";
import axios from "axios";
import { Table } from "antd";
import "antd/dist/antd.css";

const fetchUsers = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users/"
  );
  return { data };
};

const Home = () => {
  const [searchVal, setSearchVal] = useState(null);
  const [buttonState, setButtonState] = useState(true);
  const { filteredData, loading } = useTableSearch({
    searchVal,
    retrieve: fetchUsers,
  });
  const handleClick = (e, record) => {
    // console.log(record);
    // const button = record.key;
    const newUserColumn = [...userColumns];
    newUserColumn[e.target.key].state = !newUserColumn[e.target.key].state;
    setUserColumns(newUserColumn);

    console.log(buttonState);
  };
  const [userColumns, setUserColumns] = useState([
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "",
      key: "id",
      state: false,
      render: (record) => (
        <div>
          {userColumns.state ? (
            <button onClick={(e) => handleClick(e, record)}>Save Data</button>
          ) : (
            <button onClick={(e) => handleClick(e, record)}>View Data</button>
          )}
        </div>
      ),
    },
  ]);

  return (
    <div className="home-wrapper">
      <div className="header-top">
        <div className="header-top-left">Stock Details Table</div>
        <div className="header-top-middle">
          <SearchIcon className="search" />
          <input
            onChange={(e) => setSearchVal(e.target.value)}
            className="search-bar"
            placeholder="Search by company name"
            type="text"
          />
        </div>
      </div>
      <div className="header-bottom">
        <Table
          rowKey="name"
          dataSource={filteredData}
          columns={userColumns}
          loading={loading}
          pagination={true}
        />
      </div>
    </div>
  );
};
// (e)=>console.log(record)
export default Home;
