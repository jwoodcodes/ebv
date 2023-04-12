import clientPromise from "lib/mongodb";

export default function Test({ items }) {
  console.log(items);

  return (
    <div>
      <h1>product data</h1>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <h2>{item.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const client = await clientPromise;
    const db = client.db("shopData");

    const items = await db.collection("shopData").find({}).toArray();

    return {
      props: { items: JSON.parse(JSON.stringify(items)) },
    };
  } catch (e) {
    console.error(e);
  }
}
