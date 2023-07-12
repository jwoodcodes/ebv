import styles from "@/styles/table.module.css";
import React from "react";
import Image from "next/image";
import EventsTableHead from "./eventsTableHead";

export default function EventsTableBody({ tableData, columns }) {
  let newData;

  return (
    <tbody>
      <tr key={tableData.upcomingEventsData.id}>
        {columns.map(({ accessor }) => {
          //   console.log(data.myOverallRank);
          //   console.log(data);
          //   console.log(data.imgsrc);
          //   console.log(tableData.upcomingEventsData);
          newData = tableData.upcomingEventsData;

          //   console.log(newData);

          const tData = newData[accessor] ? newData[accessor] : "——";
          if (tData !== "——") {
            if (newData[accessor] === newData.imgsrc) {
              // console.log(newData[accessor]);
              return (
                <td key={accessor}>
                  <Image
                    src={newData[accessor]}
                    width="200"
                    height="200"
                    priority
                    alt={newData.alttext}
                    key={newData.id}
                    className={styles.cartImg}
                  />
                </td>
              );
            }
            return <td key={accessor}>{tData}</td>;
          }
          // if (tData === "——") {
          //   return <td key={accessor}>{`$${totalPrice}.00`}</td>;
          // }
        })}
      </tr>
    </tbody>
  );
}

/* {tableData.map((data) => {
        newData = {
          id: data.data.id,
          price: data.data.price,
          alttext: data.data.alttext,
          description: data.data.description,
          imgsrc: data.data.imgsrc,
          alttext: data.data.alttext,
          title: data.data.title,
          date: data.data.date,
          time: data.dat.time,
          description: data.data.description,
        }; */
// return (
// ); })}
