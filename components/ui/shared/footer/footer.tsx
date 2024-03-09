import Image from "next/image";

export const Footer = ({}: {}) => {
  return (
    <div className="component_container">
      <div className="navigation_row">
        <h1>Enjoyed Our Service? Leave Us a Review!</h1>
        <div className="general_column"></div>
        <div className="information_column"></div>
      </div>
      <div className="rights_reserved_vstack">
        <Image
          src="/boom_down_logo.png"
          alt="Boom Down Towing Logo"
          width={160}
          height={74}
        />
        <div className="rights_reserved_and_socials">
          <p>© 2024 Boom Down Towing. All Rights Reserved.</p>
          <div className="social_row">
            <button>Facebook</button>
            <button>Instagram</button>
          </div>
        </div>
      </div>
    </div>
  );
};
