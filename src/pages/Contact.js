import MainNav from "@/components/MainNav";
import styles from "@/styles/contact.module.css";
import ContactForm from "@/components/contact/ContactForm";
import React from "react";
import Footer from "@/components/home/Footer";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <MainNav />

      <h1 className={styles.heading}>
        Contact us to learn about our <br /> orchard and winery
      </h1>
      <div className={styles.aboveFormTextWrapper}>
        <section className={styles.aboveFormText}>
          <h2>Call, or Send Us a Message </h2>
          <p className={styles.aboveFormParagraph}>
            {" "}
            Reach out to us and let us know if there is anything we can do for
            you. You can fill out the form below, <br />
            or call us at{" "}
            <span className={styles.phoneNumber}>+1 573-268-8597</span>
          </p>
        </section>
      </div>
      <div className={styles.imgAndFormWrapper}>
        <Image
          src="/venue photo 12.jpg"
          className={styles.galImg}
          cover
          height="375"
          width="475"
          alt="cocktails on a stone in a flowing stream"
        ></Image>
        <ContactForm />
        <Image
          src="/venue photo 1.jpg"
          className={styles.galImg}
          cover
          height="375"
          width="475"
          alt="stream and stage"
        ></Image>
      </div>

      <Footer className={styles.footer} />
    </>
  );
}
