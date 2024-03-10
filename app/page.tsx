import "./landing_page.css";
import { Gallery, Header, Services } from "@/components/ui";
import { CarouselItem, GalleryItem, ServiceItem } from "@/typings";

const carousel_items: CarouselItem[] = [
  {
    image: "next.svg",
    title: "Title 1",
    description: "Description 1",
  },
  {
    image: "next.svg",
    title: "Title 2",
    description: "Description 2",
  },
  {
    image: "next.svg",
    title: "Title 3",
    description: "Description 3",
  },
];

const services: ServiceItem[] = [
  {
    image: "next.svg",
    service_name: "Service 1",
  },
  {
    image: "next.svg",
    service_name: "Service 2",
  },
  {
    image: "next.svg",
    service_name: "Service 3",
  },
  // Add more items as needed
];

const gallery_content: GalleryItem[] = [
  {
    image: "next.svg",
    title: "Image 1",
  },
  {
    image: "next.svg",
    title: "Image 2",
  },
  {
    image: "next.svg",
    title: "Image 3",
  },
  // Add more items as needed
];

export default function Home() {
  return (
    <main className="page_container">
      <Header carousel={carousel_items} />
      <Services services={services} />
      <Gallery gallery={gallery_content} />
    </main>
  );
}
