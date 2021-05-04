import React, { useState } from "react";
import "./view.scss";
import { Link, useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
// import { userColumns } from "../../store/columnsStore";
import { useTableSearch } from "../../store/useTableSearch";
import axios from "axios";
import { Table, Tag, Button } from "antd";
import "antd/dist/antd.css";

const fetchStocks = async (e, record) => {
  const { data } = await axios.get("http://localhost:5000/api/view");
  return { data };
};

const ViewUpdate = () => {
  const [searchVal, setSearchVal] = useState(null);
  let history = useHistory();
  const { filteredData, loading } = useTableSearch({
    searchVal,
    retrieve: fetchStocks,
  });
  const handleDelete = async (e, record) => {
    console.log(record);
    const data = {
      id: record.id,
      button: !record.button,
    };
    await axios.post("http://localhost:5000/api/delete", data);
    const updateData = {
      id: record.id,
      button: !record.button,
    };
    await axios.post("http://localhost:5000/api/", updateData);
    history.push("/view");
  };
  const userColumns = [
    {
      title: "COMPANY NAME",
      dataIndex: "name",
      align: "center",
      key: "name",
    },
    {
      title: "SYMBOL",
      dataIndex: "symbol",
      key: "symbol",
      render: (records) => <div className="symbol">{records}</div>,
    },
    {
      title: "MARKET CAP",
      dataIndex: "marketCaptial",
      align: "center",
      key: "marketCaptial",
    },
    {
      title: "",
      key: "_id",
      align: "center",
      render: (record) => (
        <div>
          <button className="btn-view" onClick={(e) => handleDelete(e, record)}>
            Delete
          </button>
        </div>
      ),
    },
    {
      title: "CURRENT PRICE",
      dataIndex: "stockPrice",
      align: "center",
      key: "stockPrice",
    },
  ];

  return (
    <div className="view-wrapper">
      <div className="header-top">
        <div className="header-top-left">Saved Data Table</div>
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
      <div className="middle">
        <Table
          rowKey="name"
          dataSource={filteredData}
          columns={userColumns}
          loading={loading}
          pagination={false}
        />
      </div>
      <div className="view-bottom">
        <Link to="/">
          <button className="btn-view">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default ViewUpdate;
