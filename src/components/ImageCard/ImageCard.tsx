import css from "./ImageCard.module.css";

type ImageSrc = {
  regular: string;
  small: string;
};

type Props = {
  src: ImageSrc;
  alt: string;
  openModal: () => void;
  setSelectedImage: (image: { src: string; alt: string }) => void;
};

export default function ImageCard({
  src,
  alt,
  openModal,
  setSelectedImage,
}: Props) {
  const handleClick = () => {
    openModal();
    setSelectedImage({ src: src.regular, alt: alt });
  };
  return (
    <div onClick={handleClick}>
      <img className={css.image} src={src.small} alt={alt} />
    </div>
  );
}
