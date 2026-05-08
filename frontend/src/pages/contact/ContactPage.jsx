function ContactPage() {
  const contactMethods = [
    {
      id: "message",
      title: "Message us",
      details: [
        "Monday - Saturday from 10 AM to 10 PM (EST)",
        "Sunday from 10 AM to 9 PM (EST)",
      ],
    },
    {
      id: "call",
      title: "Call us",
      details: [
        "+1 (877) 682-2430",
        "Monday - Saturday from 10 AM to 10 PM (EST)",
      ],
    },
    {
      id: "chat",
      title: "Live chat",
      details: [
        "Monday - Saturday from 10 AM to 10 PM (EST)",
        "Sunday from 10 AM to 9 PM (EST)",
      ],
    },
    {
      id: "whatsapp",
      title: "WhatsApp us",
      details: [
        "Monday - Saturday from 10 AM to 10 PM (EST)",
        "Sunday from 10 AM to 9 PM (EST)",
      ],
    },
  ];

  return (
    <section className="contact-page">
      <div className="container contact-page__wrapper">
        <div className="contact-page__hero">
          <div className="contact-page__visual" aria-hidden="true" />

          <div className="contact-page__panel">
            <div className="contact-page__panel-copy">
              <p className="eyebrow">Contact us</p>
              <h1>Customer care designed for fast, thoughtful support.</h1>
              <p className="contact-page__intro">
                Reach out by message, phone, live chat, or WhatsApp. Our team is
                ready to help with orders, delivery, returns, styling, and
                gifting.
              </p>
            </div>

            <div className="contact-page__panel-actions">
              <button type="button" className="hero-pill hero-pill--dark">
                Start a conversation
              </button>
              <button type="button" className="hero-pill">
                Call customer care
              </button>
            </div>
          </div>
        </div>

        <div className="contact-page__methods">
          {contactMethods.map((method) => (
            <article key={method.id} className="contact-method-card">
              <p className="contact-method-card__label">{method.title}</p>
              <ul>
                {method.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
