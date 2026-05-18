import { useLockBodyScroll } from "../../hooks/useLockBodyScroll.js";
import FlowingMenu from "../FlowingMenu.jsx";

function MobileMenu({ items, open, onClose, onOpenContact }) {
  useLockBodyScroll(open);

  const flowingItems = items.map((item) => ({
    link: item.to,
    text: item.label,
    image: item.featured.image,
    onClick: onClose,
  }));

  return (
    <div className={open ? "mobile-menu is-open" : "mobile-menu"}>
      <div
        className="mobile-menu__backdrop"
        aria-hidden="true"
        onClick={onClose}
      />
      <div className="mobile-menu__panel">
        <div className="mobile-menu__header">
          <strong>Browse Minime</strong>
          <div>
            <button
              type="button"
              className="mobile-menu__contact-button"
              onClick={() => {
                onOpenContact();
                onClose();
              }}
            >
              Contact us
            </button>
            <button type="button" onClick={onClose}>
              Close
            </button>
          </div>
        </div>

        <div className="mobile-menu__body">
          <div className="mobile-menu__flowing-menu">
            <FlowingMenu
              items={flowingItems}
              speed={15}
              textColor="#ffffff"
              bgColor="#120F17"
              marqueeBgColor="#ffffff"
              marqueeTextColor="#120F17"
              borderColor="#ffffff"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
