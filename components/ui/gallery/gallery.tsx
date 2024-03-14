import "./gallery.css";
import { GalleryItem } from "@/typings/GalleryItem";
import { BentoGrid, BentoGridItem } from "..";

export const Gallery = ({ gallery }: { gallery: GalleryItem[] }) => {
  return (
    <div className="component_container">
      <div className="header_section">
        <p className="header_tagline">Gallery</p>
        <h1 className="header_label">More of the Customers We Help</h1>
        <p className="gallery_subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.{" "}
        </p>
      </div>
      <div className="gallery_container">
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] w-full">
          {gallery.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              image={item.image}
              description="hello world"
              header={item.header}
              className={item.className}
            />
          ))}
        </BentoGrid>
        {/* {gallery.map((item, index) => {
          return (
            <div className="gallery_item" key={index}>
              <Image
                src={item.image}
                alt={item.title}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
              <p className="gallery_item_label">{item.title}</p>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};
