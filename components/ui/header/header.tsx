type HeaderCarousel = {
  image: string;
  title: string;
  description: string;
};

export const Header = ({
  carousel_items,
}: {
  carousel_items: HeaderCarousel[];
}) => {
  return (
    <div className="component_container">
      <div className="need_help_row">
        <div className="need_help_column">
          <p>Need Help?</p>
          <h1>Give us a Call</h1>
        </div>
        <h1>1-800-123-4567</h1>
      </div>
      <div className="carousel_container">
        <div className="carousel"></div>
        <div className="carousel_controls">
          <div className="current_display_hstack">
            <p>01</p>
            <p>Tow</p>
          </div>
          <div className="number_of_slides_row">
            <p>01</p>
          </div>
        </div>
      </div>
    </div>
  );
};
