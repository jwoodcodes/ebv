import MainNav from "@/components/MainNav";
import styles from "@/styles/Events.module.css";
import clientPromise from "@/lib/mongodb";
import EventsTable from "@/components/events/eventsTable";

export default function Events({ events }) {
  //   console.log(events);
  let itemsObject;
  return (
    <>
      {events.map((tempItem) => {
        itemsObject = tempItem;
      })}
      <div className={styles.eventsWrapper}>
        <MainNav />
        <div className={styles.eventsTitle}> Upcoming Events</div>
        <div className={styles.aboveTableText}>
          See what's coming up soon, tickets available online or at the door
        </div>
        <EventsTable data={itemsObject} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    const client = await clientPromise;
    const db = client.db("upcomingEventsDataDb");

    const events = await db.collection("upcomingEventsData").find({}).toArray();

    return {
      props: { events: JSON.parse(JSON.stringify(events)) },
    };
  } catch (e) {
    console.error(e);
  }
}
