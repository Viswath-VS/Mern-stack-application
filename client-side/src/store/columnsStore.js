// import { Button } from 'antd';
// import React,{useState,useEffect} from 'react';


export const userColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "",
      key: "key",
      dataIndex:"key",
      render:(record)=>(
          <button onClick={()=>console.log(record)}>Button Test</button>
      ) 
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone"
    },
    {
      title: "Website",
      dataIndex: "website",
      key: "website"
    }
  ];


