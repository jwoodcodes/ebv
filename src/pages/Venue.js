import MainNav from "@/components/MainNav";
import styles from "@/styles/venue.module.css";

export default function Venue() {
  return (
    <>
      <MainNav />
      <div className={styles.mainTitle}>About The Venue</div>
      <div className={styles.wrapper}>
        <div className={styles.mainTextWrapper}>
          <div className={styles.mainText}>
            ElderBlossom View is open Saturday 5:30-9:30 and Sunday 2-6 for the
            summer. Check our events tab for our band and food truck schedule.{" "}
            <br />
            <br />
            This is a working elderberry farm that produces bottled elderberry
            juices and wine. We also offer beverages and cocktails that feature
            our products. For insurance reasons we cannot allow visiting pets
            during public hours. <br />
            <br />
            Children under 16 must be with an adult at all times. For your
            safety please stay on the rock and gravel pathways and do not get in
            the water. Please contact us for any additional information. Thanks!
          </div>
        </div>
      </div>
      <div className={styles.photosText}>Venue Photos</div>
    </>
  );
}
