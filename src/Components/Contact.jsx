import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion, useInView } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

const Contact = () => {
  const [drop, SetDrop] = useState(false);
  const [msg, SetMsg] = useState(false);
  const title = {
    hidden: {
      y: "50vh",

    },
    visible: {
      y: 0,
      transition: { duration: 1 },
    },
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fbr0l2f",
        "template_n6qgydp",
        form.current,
        "OeYGdfzkQTkFPufK3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  const [contactAnim, SetContactAnim] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { marginTop: "50%" });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const { scrollTop } = document.documentElement;
      if (scrollTop < 3700) {
        SetDrop(false);
        SetMsg(false);
      }
    });

    if (isInView) {
      SetContactAnim(true);
    }
    if (isInView === false) {
      SetDrop(false);
      SetMsg(false);
    }
  }, [isInView]);
  return (
    <div className="contact-container">
      {contactAnim && (
        <motion.div
          variants={title}
          initial="hidden"
          animate="visible"
          className="form-container"
        >
          <form ref={form} onSubmit={sendEmail}>
            <div className="title">
              <h1>Contact</h1>
            </div>
            <div className="name">
              <label>Prénom</label>
              <input type="text" name="user_name" required />
            </div>
            <div className="name">
              <label>Nom</label>
              <input type="text" name="last_name" required />
            </div>
            <div className="name">
              <label>Entreprise </label>
              <input type="text" name="user_societe" />
            </div>
            <div className="name">
              <label>Email</label>
              <input type="email" name="user_email" required />
            </div>
            <div className="name">
              <label>Téléphone</label>
              <input type="text" name="user_mobile" required />
            </div>
            <div className="msg">
              <label>Message :</label>
              <textarea name="message" />
            </div>

            <input
              onClick={() => {
                SetDrop(true);
                SetMsg(true);
              }}
              className="btn"
              type="submit"
              value="Send"
            />
          </form>
        </motion.div>
      )}
      {drop && (
        <motion.div
          onClick={() => {
            SetDrop(false);
            SetMsg(false);
          }}
          initial={{ height: 0 }}
          animate={{ height: "130%", transition: { duration: 1.5 } }}
          className="drop"
        ></motion.div>
      )}
      {msg && (
        <motion.div
          animate={{ opacity: 1, transition: { duration: 1.5, delay: 1.5 } }}
          className="thank"
        >
          <h1>message envoyé !</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In aut
            excepturi ipsam, illo doloribus incidunt doloremque aperiam. Nam eos
            reiciendis doloribus quas temporibus sapiente soluta, id
            reprehenderit consequatur impedit qui natus numquam, magnam fugiat
            est pariatur nulla? Provident eveniet reiciendis inventore
            blanditiis enim ipsa dolore temporibus libero, architecto
            dignissimos voluptate.
          </p>
        </motion.div>
      )}
      <div id="contact" ref={ref} className="contact-trigger"></div>
    </div>
  );
};

export default Contact;
