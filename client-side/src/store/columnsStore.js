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
      
      key: "id",
      render: (record)=>(<button onClick={(e)=>console.log(record)}>Save Data</button>),
      
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
  