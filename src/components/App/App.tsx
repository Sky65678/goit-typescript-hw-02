import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import { fetchImages } from "../../services/AxiosImageGallery";

const notify = (message: string) => toast(message);

import { Image } from "../../types";

export default function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [totalPages, setTotalPages] = useState(1);

  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  }>({ src: "", alt: "" });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSearch = async (values: { image: string }): Promise<void> => {
    const searchImage = values.image.trim();
    if (!searchImage) {
      notify("Please enter a search query");
      return;
    }

    try {
      setLoading(true);
      setError(false);
      setQuery(searchImage);
      setPage(1);

      const data = await fetchImages(searchImage, 1);

      if (data.results.length === 0) {
        notify("No images found");
        setImages([]);
      } else {
        setImages(data.results);
        setTotalPages(data.total_pages);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async (): Promise<void> => {
    if (page >= totalPages) {
      notify("No more images to load");
      return;
    }

    try {
      setLoading(true);
      const nextPage = page + 1;
      setPage(nextPage);
      const data = await fetchImages(query, nextPage);

      setImages((prevImages) => [...prevImages, ...data.results]);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  function openModal(): void {
    setModalIsOpen(true);
  }

  function closeModal(): void {
    setModalIsOpen(false);
  }

  return (
    <div>
      <Toaster position="top-right" />
      <SearchBar onSubmit={handleSearch} />
      <ImageModal
        image={selectedImage}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
      />

      <Loader loading={loading} />
      <ErrorMessage error={error} />

      {images && (
        <ImageGallery
          images={images}
          openModal={openModal}
          setSelectedImage={setSelectedImage}
        />
      )}

      {images.length !== 0 && page < totalPages && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}
    </div>
  );
}
