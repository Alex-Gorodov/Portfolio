import React, { useState } from 'react';
import axios from 'axios';
import { Spinner } from '../spinner/spinner';

export function Contact(): JSX.Element {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSending, setSending] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSending(true);

    try {
      await axios.post('https://formspree.io/f/mgebwvrj', formData);
      setTimeout(() => {
        setSending(false);
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
      }, 2000);
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };

  return (
    <section className="section contact" id="contact">
      <h2>Contact me</h2>
      <div className="contact__wrapper">
        <p className="description contact__description">
          I'm interested in freelance opportunities - landing pages and small sites, for now. However, if you have other request of question, don't hesitate to use the form.
        </p>
        <div className="contact__form-wrapper">
          {isSending ? (
            <div style={{paddingTop: '60px'}}>
              <Spinner size={'40'} color={'#000c24'} />
            </div>
          ) : isSuccess ? (
            <p className="contact__success-message">Successfully sent!</p>
          ) : (
            <form className="contact__form" action="https://formspree.io/f/mgebwvrj" method="POST">
              <label className="contact__item contact__item--name contact__item--required" htmlFor="name">
                <input
                  className={`contact__field ${isError && formData.name.length < 2 && 'contact__field--error'}`}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  minLength={2}
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </label>
              <label className="contact__item contact__item--email contact__item--required" htmlFor="email">
                <input
                  className={`contact__field ${isError && formData.email.length < 5 && 'contact__field--error'}`}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  minLength={5}
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </label>
              <label className="contact__item contact__item--subject" htmlFor="subject">
                <input
                  className="contact__field"
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </label>
              <label className="contact__item contact__item--message contact__item--required" htmlFor="message">
                <textarea
                  className="contact__field contact__field--message"
                  name="message"
                  id="message"
                  cols={30}
                  rows={5}
                  placeholder="Message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </label>
              <button className="contact__submit" type="submit" onClick={sendForm}>
                Send message!
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
