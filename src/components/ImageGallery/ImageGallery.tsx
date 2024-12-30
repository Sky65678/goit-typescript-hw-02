import ImageCard from "../ImageCard/ImageCard";

import css from "../ImageGallery/ImageGallery.module.css";

import { Image } from "../../types";

type Props = {
  images: Image[];
  openModal: () => void;
  setSelectedImage: (image: { src: string; alt: string }) => void;
};

export default function ImageGallery({
  images,
  openModal,
  setSelectedImage,
}: Props) {
  return (
    <ul className={css.imageGallery}>
      {images.map((image) => (
        <li key={image.id} className={css.image}>
          <ImageCard
            src={image.urls}
            alt={image.alt_description}
            openModal={openModal}
            setSelectedImage={setSelectedImage}
          />
        </li>
      ))}
    </ul>
  );
}
