import styles from "@/styles/table.module.css";
import Image from "next/image";

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

              //   console.log(+newData.actualPrice.slice(1));
              let totalPrice = +newData.actualPrice.slice(1) * newData.quantity;
              //   console.log(totalPrice);

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
                        key={newData.APIid}
                        className={styles.cartImg}
                      />
                    </td>
                  );
                }
                return <td key={accessor}>{tData}</td>;
              }
              if (tData === "——") {
                return <td key={accessor}>{`$${totalPrice}.00`}</td>;
              }
            })}
          </tr>
        );
      })}
    </tbody>
  );
}
