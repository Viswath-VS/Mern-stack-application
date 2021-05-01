import React, { useState } from "react";
import "./home.scss";
import SearchIcon from "@material-ui/icons/Search";
import { userColumns } from "../../store/columnsStore";
import { useTableSearch } from "../../store/useTableSearch";
import axios from "axios";
import { Table } from "antd";

const { Column } = Table;
const fetchUsers = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users/"
  );
  return { data };
};

const Home = () => {
  const [searchVal, setSearchVal] = useState(null);
  const { filteredData, loading } = useTableSearch({
    searchVal,
    retrieve: fetchUsers,
  });

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
          //   columns={userColumns}
          loading={loading}
          pagination={true}
        >
          <Column title="name" dataIndex="name" key="name" />
          <Column title="Username" dataIndex="username" key="username" />
          <Column
            title="Email"
            dataIndex="email"
            key="email"
            className="email"
          />
        </Table>
      </div>
    </div>
  );
};

export default Home;
