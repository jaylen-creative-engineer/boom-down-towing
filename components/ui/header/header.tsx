import "./header.css";
import { CarouselItem } from "@/typings/CarouselItem";
import Image from "next/image";

export const Header = ({ carousel }: { carousel: CarouselItem[] }) => {
  return (
    <div className="component_container">
      <div className="need_help_section">
        <div className="need_help_column">
          <p className="need_help_label">Need Help?</p>
          <h1 className="call_label">Give us a Call</h1>
        </div>
        <a href="tel:+12155554567">1-800-123-4567</a>
      </div>
      <div className="carousel_container">
        {/* <div className="carousel"></div> */}
        <Image
          src="/banner_1.jpeg"
          alt="Placeholder"
          width={0}
          height={0}
          sizes="100vw"
          className="carousel_image"
          style={{ width: "100%", height: "auto" }}
        />
        <div className="carousel_controls">
          <div className="current_display_hstack">
            <p className="current_number_label">01</p>
            <p className="current_category_label">Tow</p>
          </div>
          <div className="number_of_slides_row">
            <p className="slide_number">01</p>
            <p className="slide_number">02</p>
            <p className="slide_number">03</p>
            <p className="slide_number">04</p>
          </div>
        </div>
      </div>
    </div>
  );
};
