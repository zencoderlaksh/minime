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
      <div className="contact-page__hero">
        <div className="contact-page__visual" aria-hidden="true" />

        <div className="contact-page__panel">
          <div className="contact-page__panel-copy">
            <p className="eyebrow">Contact us</p>
            <h1>Customer care and touchpoints for every enquiry.</h1>
            <p className="contact-page__intro">
              Reach us by message, call, live chat, or WhatsApp. We’re available
              throughout the week to help with orders, shipping, returns, and more.
            </p>
          </div>

          <div className="contact-page__methods">
            {contactMethods.map((method) => (
              <article key={method.id} className="contact-method-card">
                <h2>{method.title}</h2>
                <ul>
                  {method.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="contact-page__cta">
            <button type="button" className="hero-pill hero-pill--dark">
              Get in contact with us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
