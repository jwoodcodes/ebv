import Link from "next/link";
import styles from "@/styles/About.module.css";
import MainNav from "./mainNav";
import Footer from "@/components/home/Footer";
import Image from "next/image";

export default function About() {
  return (
    <>
      <MainNav />
      <h1 className={styles.title}>About ElderBlossom View</h1>
      <div className={styles.mainWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            src="/ebvLogo.jfif"
            className={styles.footerLogo}
            width={525}
            height={525}
            alt="ElderBlossom View Logo"
          ></Image>
        </div>
        <div className={styles.paragraphWrapper}>
          <p>
            We take pride in being a friendly partner in the ecosystem here
            alongside Cedar Creek. Growing elderberries allows us to work with
            nature rather than against it with harmful herbicides or disruption
            of the soil. Using the fresh elderberries harvested from the
            surrounding orchard, we create a variety of healthy products. We
            offer our elderberry juice, elderflower nectar, elderberry wine
            ranging from sweet to dry, an elderflower mead, and a full cocktail
            list using our elderberry products. We don’t stop at great products,
            we have great times too! Our outdoor and indoor spaces are perfect
            for relaxing with a few friends or hosting a small event. Come enjoy
            live music and delicious eats by various local chefs (see events to
            see what’s cookin’) but you are welcome to pack a picnic of your
            own. We hope to see you soon!
            <br />
            <br />
            <Link
              href="https://www.youtube.com/watch?v=m7LYWf6vh6Q&feature=youtu.be"
              className={styles.aboutVideo}
            >
              video about EBV{" "}
            </Link>
          </p>
        </div>
      </div>
      <div className={styles.aboutLinksWrapper}>
        <div className={styles.linkAreaTitle}>
          Read more about EBV in the news
        </div>
        <div className={styles.linksWrapper}>
          <Link
            href="https://www.feastmagazine.com/columbia/article_cba1ab3e-c502-11e9-afd4-bb40e38d340c.html"
            className={styles.aboutLinks}
          >
            Feast magazine 2019
          </Link>
          <Link
            href="https://www.feastmagazine.com/columbia/article_48cf56fa-f153-11eb-9206-47b7e2ea74aa.html"
            className={styles.aboutLinks}
          >
            Feast magazine 2021
          </Link>
          <Link
            href="https://comomag.com/archives/"
            className={styles.aboutLinks}
          >
            COMO magazine DEC. 2021 pg.29
          </Link>
          <Link
            href="https://www.komu.com/news/midmissourinews/mid-missouri-farmers-face-issues-from-flooding-extreme-heat/article_91aa177a-fecd-11eb-9c31-fffc7055454f.html"
            className={styles.aboutLinks}
          >
            KOMU News
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
