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
    image: "/placeholder_image.png",
    service_name: "Service 1",
  },
  {
    image: "/placeholder_image.png",
    service_name: "Service 2",
  },
  {
    image: "/placeholder_image.png",
    service_name: "Service 3",
  },
  // Add more items as needed
];

const Skeleton: React.ReactNode = (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const gallery_content: GalleryItem[] = [
  {
    image: "/gallery_1.jpeg",
    title: "Image 1",
    header: Skeleton,
    className: "md:col-span-1",
  },
  {
    image: "/gallery_2.jpeg",
    title: "Image 2",
    header: Skeleton,
    className: "md:col-span-1",
  },
  {
    image: "/gallery_3.jpeg",
    title: "Image 3",
    header: Skeleton,
    className: "md:col-span-1",
  },
  {
    image: "/gallery_4.jpeg",
    title: "Image 4",
    header: Skeleton,
    className: "md:col-span-1",
  },
  {
    image: "/gallery_5.jpeg",
    title: "Image 5",
    header: Skeleton,
    className: "md:col-span-1",
  },
  {
    image: "/gallery_6.jpeg",
    title: "Image 5",
    header: Skeleton,
    className: "md:col-span-1",
  },
  // Add more items as needed
];

export default function Home() {
  return (
    <main className="page_container">
      <Header carousel={carousel_items} />
      <Gallery gallery={gallery_content} />
      <Services services={services} />
    </main>
  );
}
