import { GalleryItem } from "@/typings/GalleryItem";
import Image from "next/image";

export const Gallery = ({ gallery }: { gallery: GalleryItem[] }) => {
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
        {gallery.map((item, index) => (
          <Image
            key={index}
            src={item.image}
            alt={item.title}
            className="gallery_image"
          />
        ))}
      </div>
    </div>
  );
};
