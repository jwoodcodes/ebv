import MainNav from "@/components/MainNav";
import Footer from "@/components/home/Footer";
import styles from "@/styles/venue.module.css";
import Image from "next/image";

export default function Venue() {
  return (
    <>
      <MainNav />
      <div className={styles.mainTitle}>About The Venue</div>
      <div className={styles.photosText}>Venue Photos</div>
      <div className={styles.mainGalleryWrapper}>
        <figure className={styles.wrapperImg1}>
          <Image
            src="/venue photo 1.jpg"
            className={styles.galImg}
            cover
            height="300"
            width="600"
            alt="stream and stage"
          ></Image>
        </figure>

        <figure className={styles.wrapperImg2}>
          <Image
            src="/venue photo 2.jpg"
            className={styles.galImg}
            cover
            height="300"
            width="600"
            alt="stage at night"
          ></Image>
        </figure>

        <figure className={styles.wrapperImg3}>
          <Image
            src="/venue photo 3.jpg"
            className={styles.galImg}
            cover
            height="300"
            width="600"
            alt="bridge and stage"
          ></Image>
        </figure>

        <figure className={styles.wrapperImg4}>
          <Image
            src="/venue photo 4.webp"
            className={styles.galImg}
            cover
            height="300"
            width="600"
            alt="close up crowd at concert"
          ></Image>
        </figure>

        <figure className={styles.wrapperImg5}>
          <Image
            src="/venue photo 5.webp"
            className={styles.galImg}
            cover
            height="300"
            width="600"
            alt="large crowd and stage"
          ></Image>
        </figure>

        <figure className={styles.wrapperImg6}>
          <Image
            src="/venue photo 6.webp"
            className={styles.galImg}
            cover
            height="300"
            width="600"
            alt="stage close up with band and merchandise"
          ></Image>
        </figure>

        <figure className={styles.wrapperImg7}>
          <Image
            src="/venue photo 7.webp"
            className={styles.galImg}
            cover
            height="300"
            width="600"
            alt="crowd at concert from a distance"
          ></Image>
        </figure>

        <figure className={styles.wrapperImg8}>
          <Image
            src="/venue photo 8.webp"
            className={styles.galImg}
            cover
            height="300"
            width="600"
            alt="people dancing at outdoor concert"
          ></Image>
        </figure>

        <figure className={styles.wrapperImg9}>
          <Image
            src="/venue photo 9.jpg"
            className={styles.galImg}
            cover
            height="300"
            width="600"
            alt="sunset over lakes"
          ></Image>
        </figure>

        <figure className={styles.wrapperImg10}>
          <Image
            src="/venue photo 10.jpg"
            className={styles.galImg}
            cover
            height="300"
            width="600"
            alt="people harvesting elderberries"
          ></Image>
        </figure>

        <figure className={styles.wrapperImg11}>
          <Image
            src="/venue photo 11.jpg"
            className={styles.galImg}
            cover
            height="300"
            width="600"
            alt="lerge square stones seating"
          ></Image>
        </figure>

        <figure className={styles.wrapperImg12}>
          <Image
            src="/venue photo 12.jpg"
            className={styles.galImg}
            cover
            height="300"
            width="600"
            alt="cocktails on a stone in a flowing stream"
          ></Image>
        </figure>

        <figure className={styles.wrapperImg13}>
          <Image
            src="/venue photo 13.jpg"
            className={styles.galImg}
            cover
            height="300"
            width="600"
            alt="stone seating area and stage from a distance"
          ></Image>
        </figure>

        <figure className={styles.wrapperImg14}>
          <Image
            src="/venue photo 14.jpg"
            className={styles.galImg}
            cover
            height="300"
            width="600"
            alt="lanscaped planters along a stone path"
          ></Image>
        </figure>

        <figure className={styles.wrapperImg15}>
          <Image
            src="/venue photo 15.jpg"
            className={styles.galImg}
            cover
            height="300"
            width="600"
            alt="band playing acoustic inside winery"
          ></Image>
        </figure>

        <figure className={styles.wrapperImg16}>
          <Image
            src="/venue photo 16.jpg"
            className={styles.galImg}
            cover
            height="300"
            width="600"
            alt="farm  under blue sky and whispy clouds"
          ></Image>
        </figure>

        <figure className={styles.wrapperImg17}>
          <Image
            src="/venue photo 17.jpg"
            className={styles.galImg}
            cover
            height="300"
            width="600"
            alt="river stones in stream"
          ></Image>
        </figure>

        <figure className={styles.wrapperImg18}>
          <Image
            src="/venue photo 18.jpg"
            className={styles.galImg}
            cover
            height="300"
            width="600"
            alt="cocktail menu sign on a wall"
          ></Image>
        </figure>

        <figure className={styles.wrapperImg19}>
          <Image
            src="/venue photo 19.jpg"
            className={styles.galImg}
            cover
            height="300"
            width="600"
            alt="outdoor stage from a distance"
          ></Image>
        </figure>

        <figure className={styles.wrapperImg20}>
          <Image
            src="/venue photo 20.webp"
            className={styles.galImg}
            cover
            height="300"
            width="600"
            alt="people dancing and band at outdoor concert"
          ></Image>
        </figure>
      </div>
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
      <Footer />
    </>
  );
}
