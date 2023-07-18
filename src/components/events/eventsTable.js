import styles from "@/styles/eventsTable.module.css";
import React from "react";
import EventsTableBody from "./eventsTableBody";
import EventsTableHead from "./eventsTableHead";

export default function EventsTable({ data }) {
  const [tableData, setTableData] = React.useState(data);
  //   console.log(tableData);

  const columns = [
    { label: "Band", accessor: "imgsrc" },
    { label: "Band Name", accessor: "title" },
    { label: "price", accessor: "price" },
    { label: "Date", accessor: "date" },
    { label: "Time", accessor: "time" },
    { label: "Food Truck", accessor: "foodTruck" },
    { label: "Description", accessor: "description" },
  ];

  return (
    <>
      <table className={styles.table}>
        <caption className={styles.caption}>events</caption>
        <EventsTableHead columns={columns} />
        <EventsTableBody columns={columns} tableData={tableData} />
      </table>
    </>
  );
}
