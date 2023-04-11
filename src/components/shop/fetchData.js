// // posts will be populated at build time by getStaticProps()
// function ShopDataFromDb({ items }) {
//   //   return (
//   //     <ul>
//   //       {items.map((item) => (
//   //         <li>{item.title}</li>
//   //       ))}
//   //     </ul>
//   //   );
//   //   return <div>{items.map((item) => ({ item }))}</div>;
//   console.log(items);
//   return items;
// }

// // This function gets called at build time on server-side.
// // It won't be called on client-side, so you can even do
// // direct database queries.
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch(
//     "mongodb+srv://jwoodcodes:DlOwRc8ItLxRCM5g@cluster0.ve5iqom.mongodb.net/test"
//   );
//   const items = await res.json();
//   console.log(items);
//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       items,
//     },
//   };
// }

// getStaticProps();

// export default ShopDataFromDb;
