import styles from "@/styles/table.module.css";
import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

export default function Table({ data }) {
  const [tableData, setTableData] = React.useState(data);

  const columns = [
    { label: "Item Image", accessor: "imgsrc" },
    { label: "Item Name", accessor: "title" },
    { label: "Quantity", accessor: "quantity" },
    { label: "Unit Price", accessor: "actualPrice" },
    { label: "Total Price", accessor: "totalPrice" },
  ];

  return (
    <>
      <table className={styles.table}>
        <caption className={styles.caption}>Items In Cart</caption>
        <TableHead columns={columns} />
        <TableBody columns={columns} tableData={tableData} />
      </table>
    </>
  );
}
