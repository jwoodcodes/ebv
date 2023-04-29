import Image from "next/image";

export default function ItemDetailsPage({ item, data }) {
  //   console.log({ data });
  let itemsArray;
  {
    data.map((items) => {
      //   console.log(items.allShopData);
      itemsArray = items.allShopData;
    });
  }
  return (
    <div>
      <div>{item}</div>
      {itemsArray.map((product, index) => {
        // console.log(product);
        if (item === product.title) {
          return (
            <Image
              src={product.imgsrc}
              width="500"
              height="500"
              priority
              alt={product.alttext}
              key={index}
            />
          );
        }
      })}
    </div>
  );
}
