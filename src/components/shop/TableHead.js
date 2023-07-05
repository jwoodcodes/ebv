import React from "react";
import styles from "@/styles/table.module.css";

export default function TableHead({ columns }) {
  //   console.log(columns);
  const [sortField, setSortField] = React.useState("");
  const [order, setOrder] = React.useState("asc");

  return (
    <thead>
      <tr>
        {columns.map(({ label, accessor }) => {
          if (label === "Item Image") {
            return <th key={accessor}></th>;
          }
          return <th key={accessor}>{label}</th>;
        })}
      </tr>
    </thead>
  );
}
