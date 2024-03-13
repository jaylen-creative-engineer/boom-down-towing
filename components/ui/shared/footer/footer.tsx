import Image from "next/image";
import "./footer.css";

type NavigationItem = {
  label: string;
  link: string;
};

const general_navigation: NavigationItem[] = [
  {
    label: "Home",
    link: "/home",
  },
  {
    label: "Services",
    link: "/services",
  },
  {
    label: "Gallery",
    link: "/gallery",
  },
];

const information_navigation: NavigationItem[] = [
  {
    label: "Contact Us",
    link: "/contact",
  },
];

export const Footer = ({}: {}) => {
  return (
    <div className="component_container">
      <div className="navigation_container">
        <h1 className="call_us_label">
          Enjoyed Our Service? Leave Us a Review!
        </h1>
        <div className="navigation_section">
          <div className="navigation_column">
            <div className="navigation_label">General</div>
            {general_navigation.map((item, index) => {
              return (
                <a key={index} className="navigation_link">
                  {item.label}
                </a>
              );
            })}
          </div>
          <div className="navigation_column">
            <div className="navigation_label">Information</div>
            {information_navigation.map((item, index) => {
              return (
                <a key={index} className="navigation_link">
                  {item.label}
                </a>
              );
            })}
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
          <button>
            <Image
              src="/ig_logo.png"
              alt="Instagram Logo"
              width={32}
              height={32}
            />
          </button>
          <button>
            <Image
              src="/facebook_logo.png"
              alt="Facebook Logo"
              width={32}
              height={32}
              style={{ borderRadius: "6.5px" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
