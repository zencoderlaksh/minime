import { useUiStore } from "../../store/useUiStore.js";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll.js";

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

function ContactDrawer() {
  const isOpen = useUiStore((state) => state.isContactDrawerOpen);
  const closeContactDrawer = useUiStore((state) => state.closeContactDrawer);

  useLockBodyScroll(isOpen);

  return (
    <div className={isOpen ? "contact-drawer is-open" : "contact-drawer"}>
      <div
        className="contact-drawer__backdrop"
        aria-hidden="true"
        onClick={closeContactDrawer}
      />

      <aside className="contact-drawer__panel" role="dialog" aria-modal="true">
        <div className="contact-drawer__header">
          <div>
            <p className="eyebrow">Contact us</p>
            <h2>Need help? We’re right here.</h2>
          </div>
          <button
            type="button"
            className="contact-drawer__close"
            onClick={closeContactDrawer}
            aria-label="Close contact drawer"
          >
            ×
          </button>
        </div>

        <p className="contact-drawer__intro">
          Choose a contact method and we’ll respond quickly with support for
          orders, returns, shipping, and styling.
        </p>

        <div className="contact-drawer__methods">
          {contactMethods.map((method) => (
            <article key={method.id} className="contact-drawer__method">
              <h3>{method.title}</h3>
              <ul>
                {method.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="contact-drawer__footer">
          <button type="button" className="hero-pill hero-pill--dark">
            Start a conversation
          </button>
        </div>
      </aside>
    </div>
  );
}

export default ContactDrawer;
