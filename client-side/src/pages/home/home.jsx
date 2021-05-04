import React, { useState } from "react";
import "./home.scss";
import { Link, useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
// import { userColumns } from "../../store/columnsStore";
import { useTableSearch } from "../../store/useTableSearch";
import axios from "axios";
import { Table, Tag, Button } from "antd";
import "antd/dist/antd.css";

const fetchStocks = async (e, record) => {
  const { data } = await axios.get("http://localhost:5000/");
  return { data };
};

const Home = () => {
  const [searchVal, setSearchVal] = useState(null);
  let history = useHistory();
  const { filteredData, loading } = useTableSearch({
    searchVal,
    retrieve: fetchStocks,
  });

  const toggleClick = async (e, record) => {
    const data = {
      id: record.id,
      name: record.name,
      symbol: record.symbol,
      marketCaptial: record.marketCaptial,
      stockPrice: record.stockPrice,
      button: !record.button,
    };
    await axios.post("http://localhost:5000/view", data);
    const updateData = {
      id: record.id,
      button: !record.button,
    };
    await axios.post("http://localhost:5000/", updateData);

    history.push("/homeUpdate");
  };

  const userColumns = [
    {
      title: "COMPANY NAME",
      dataIndex: "name",
      align:"center",
      key: "name",
    },
    {
      title: "SYMBOL",
      dataIndex: "symbol",
      color:"geekblue",
      align:"left",
      key: "symbol",
      render: (records) => <div className="symbol">{records}</div>,
    },
    {
      title: "MARKET CAP",
      dataIndex: "marketCaptial",
      align:"center",
      key: "marketCaptial",
    },
    {
      title: "",
      align:"center",
      key: "_id",
      render: (record) => (
        <div>
          {record.button ? (
            <Link to="/view">
              <button className="btn-view">View Data</button>
            </Link>
          ) : (
            <button
              className="btn-save"
              onClick={(e) => toggleClick(e, record)}
            >
              Save Data
            </button>
          )}
        </div>
      ),
    },
    {
      title: "CURRENT PRICE",
      align:"center",
      dataIndex: "stockPrice",
      key: "stockPrice",
    },
  ];

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
          rowClassName="row"
          dataSource={filteredData}
          columns={userColumns}
          loading={loading}
          pagination={true}
        />
      </div>
    </div>
  );
};

export default Home;
