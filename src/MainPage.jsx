import React, { useEffect, useState } from "react";
import TableHeader from "./TableComp/TableHeader";
import TableWrapper from "./TableComp/TableWrapper";
import TableBody from "./TableComp/TableBody";
import TableColumn from "./TableComp/TableColumn";
import TableRow from "./TableComp/TableRow";
import axios from "axios";

const MainPage = function MainPage(
  {
    // Props
  }
) {
  const columns = [
    {
      id: "name",
      header: "Name",
      sortable: true,
      render: (record) => `${record.first_name} ${record.last_name}`
    },
    {
      id: "email",
      header: "Email",
      width: { xs: false, sm: 200 },
      sortable: true,
      sortDescending: true,
      align: "right"
    },
    {
      id: "gender",
      header: "Gender",
      width: { xs: 100 }
    }
  ];
  const records = [
    {
      first_name: "John",
      last_name: "Doe",
      email: "j.doe@test.com",
      gender: "Male",
      count: 34
    },
    {
      first_name: "Joe",
      last_name: "Bloggs",
      email: "j.bloggs@test.com",
      gender: "Female",
      count: 15
    },
    {
      first_name: "Test",
      last_name: "User",
      email: "t.user@test.com",
      gender: "Male",
      count: 672
    }
  ];

  const [data, setData] = useState({ hits: [] });
  const [newCount, setNewCount] = useState(0);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       'https://hn.algolia.com/api/v1/search?query=redux',
  //     );

  //   setData(result.data);
  //     };
  //     fetchData();
  // }, []);

  const increaseCounter = (val) => {
    console.log(val);
    //  return val+=1;
    setNewCount(val + 1);
  };

  console.log("Main Records", records);
  console.log("data: ", data);

  return (
    <>
      <TableWrapper>
        <TableHeader>
          <TableRow>
            <TableColumn>Name</TableColumn>
            <TableColumn>Email</TableColumn>
            <TableColumn>Gender</TableColumn>
            <TableColumn>Count</TableColumn>
            <TableColumn>New Count</TableColumn>
            <TableColumn></TableColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.map((row) => (
            <TableRow key={row.email}>
              <TableColumn>{`${row.first_name} ${row.last_name}`}</TableColumn>
              <TableColumn>{row.email}</TableColumn>
              <TableColumn>{row.gender}</TableColumn>
              <TableColumn>{row.count}</TableColumn>
              <TableColumn>{row.count}</TableColumn>
              <TableColumn>
                <button
                  onClick={() => setNewCount(newCount + 1)}
                  className="btn"
                >
                  {newCount}
                </button>
              </TableColumn>
            </TableRow>
          ))}
        </TableBody>
      </TableWrapper>
      <div></div>
    </>
  );
};

export default MainPage;
