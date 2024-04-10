import { Spinner } from '../spinner/spinner';
import React, { useState } from 'react';
import axios from 'axios';

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
    if (formData.name === '' || formData.email === '') {
      setError(true);
      return;
    }

    setSending(true);

    try {
      await axios.post('https://formspree.io/f/mgebwvrj', formData);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setSending(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setError(false);
      }, 2000);
    } catch (error) {
      setError(true);
      console.error(error);
      setSending(false);
    }
  };

  return (
    <section className="section contact" id="contact">
      <h2>Contact me</h2>
      <div className="contact__wrapper">
        <p className="description contact__description">
          I'm interested in freelance opportunities - landing pages and small sites, for now. However, if you have other request of question, don't hesitate to use the form.
        </p>
        {!isSuccess && (
          <div className="contact__form-wrapper">
            {isSending ? (
              <div style={{paddingTop: '60px'}}>
                <Spinner size={'40'} color={'#000c24'} />
              </div>
            ) : (
              <form className="contact__form" action="https://formspree.io/f/mgebwvrj" method="POST">
                <label className={`contact__item ${isError && 'contact__item--error'}`} htmlFor="name">
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
                <label className={`contact__item ${isError && 'contact__item--error'}`} htmlFor="email">
                  <input
                    className={`contact__field ${isError && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email) && 'contact__field--error'}`}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    minLength={5}
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </label>
                <label className="contact__item contact__item--wide" htmlFor="subject">
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
                <label className="contact__item contact__item--wide" htmlFor="message">
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
                <button className="effect-button contact__submit" type="submit" onClick={sendForm}>
                  Send message!
                </button>
                <p className={`contact__error-message ${isError && (formData.name.length < 2 || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) && 'contact__error-message--opened'}`}>Please fill in the required fields.</p>
              </form>
            )}
          </div>
        )}
        {isSuccess && (
          <p className="contact__success-message">Successfully sent!</p>
        )}
      </div>
    </section>
  );
}
