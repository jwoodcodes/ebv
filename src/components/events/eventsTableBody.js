import styles from "@/styles/eventsTable.module.css";
import React from "react";
import Image from "next/image";
import EventsTableHead from "./eventsTableHead";

export default function EventsTableBody({ tableData, columns }) {
  let newData;
  let testData = tableData.upcomingEventsData;

  return (
    <tbody>
      {testData.map((data) => {
        return (
          <tr key={data.id}>
            {columns.map(({ accessor }) => {
              //   console.log(data.myOverallRank);

              const tData = data[accessor] ? data[accessor] : "——";
              console.log(data[accessor]);
              if (accessor === "imgsrc") {
                return (
                  <td key={accessor}>
                    <Image
                      src={data[accessor]}
                      width="175"
                      height="175"
                      priority
                      alt={data.alttext}
                      key={data.id}
                      className={styles.cartImg}
                    />
                  </td>
                );
              } else {
                return <td key={accessor}>{tData}</td>;
              }
            })}
          </tr>
        );
      })}
    </tbody>
  );
}
