import Image from "next/image";

export const Footer = ({}: {}) => {
  return (
    <div className="component_container">
      <div className="navigation_row">
        <h1>Enjoyed Our Service? Leave Us a Review!</h1>
        <div className="navigation_section">
          <div className="navigation_column">
            <div className="navigation_label">General</div>
            {/* A list built using map function. */}
            <div className="navigation_items"></div>
          </div>
          <div className="navigation_column">
            <div className="navigation_label">Information</div>
            {/* A list built using map function. */}
            <div className="navigation_items"></div>
          </div>
        </div>
      </div>
      <div className="rights_reserved_container">
        <div className="rights_reserved_column">
          <Image
            src="/boom_down_logo.png"
            alt="Boom Down Towing Logo"
            width={160}
            height={74}
          />
          <p>© 2024 Boom Down Towing. All Rights Reserved.</p>
        </div>
        <div className="social_row">
          <button>Facebook</button>
          <button>Instagram</button>
        </div>
      </div>
    </div>
  );
};
