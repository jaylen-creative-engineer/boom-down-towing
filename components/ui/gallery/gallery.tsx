export const Gallery = ({ images }: { images: string[] }) => {
  return (
    <div className="component_container">
      <div className="header_section">
        <p className="header_tagline">Gallery</p>
        <h1 className="header_label">Customers We Have Helped</h1>
        <p className="gallery_subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.{" "}
        </p>
      </div>
      <div className="gallery_container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Gallery Image"
            className="gallery_image"
          />
        ))}
      </div>
    </div>
  );
};
