import styles from "@/styles/table.module.css";

export default function TableBody({ tableData, columns }) {
  //   console.log(tableData);
  let newData;

  return (
    <tbody>
      {tableData.map((data) => {
        newData = {
          id: data.id,
          actualPrice: data.data.actualPrice,
          alttext: data.data.alttext,
          description: data.data.description,
          imgsrc: data.data.imgsrc,
          title: data.data.title,
          type: data.data.type,
          quantity: data.quantity,
        };
        return (
          <tr key={data.id}>
            {columns.map(({ accessor }) => {
              //   console.log(data.myOverallRank);
              //   console.log(data);
              //   console.log(data.imgsrc);

              //   console.log(newData);

              console.log(newData[accessor]);

              const tData = newData[accessor] ? newData[accessor] : "——";

              return <td key={accessor}>{tData}</td>;
            })}
          </tr>
        );
      })}
      {/* <tr key={tableData.id}>
        {columns.map(({ accessor, index }) => {
          //   console.log(data.myOverallRank);
          //   console.log(data);
          //   console.log(data.imgsrc);
          console.log(tableData[accessor]);

          const tData = tableData[accessor];
          return <td key={accessor}>{tData}</td>;
        })}
      </tr> */}
    </tbody>
  );
}
