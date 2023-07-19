import React from "react";
import styles from "@/styles/contact.module.css";

export default function ContactForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [comment, setComment] = React.useState("");

  return (
    <div className={styles.formWrapper}>
      <form
        className={styles.form}
        onSubmit={(event) => {
          event.preventDefault();
          setName("");
          setEmail("");
          setComment("");
        }}
      >
        <label htmlFor="name-field" className={styles.label}>
          Name
        </label>
        <input
          id="name-field"
          placeholder="Full Name"
          value={name}
          className={styles.nameField}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <label htmlFor="email-field" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          placeholder="Email"
          id="email-field"
          value={email}
          className={styles.emailField}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <label htmlFor="comment-field" className={styles.label}>
          Question or Message
        </label>
        <textarea
          id="comment-field"
          placeholder="Your Comment or Question"
          className={styles.textField}
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />

        <button className={styles.submitBtn}>Submit</button>
      </form>
    </div>
  );
}
