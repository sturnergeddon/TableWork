import React from "react";

const TableColumn = function TableColumn({ children }) {
  return (
    <div
      onClick={() => {
      //  alert("this is a column");
      }}
      className="column"
    >
      {children}
    </div>
  );
};

export default TableColumn;
