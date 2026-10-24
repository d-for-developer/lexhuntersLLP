
import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import ContactCTA from "../components/ContactCTA";
import galleryData from "../data/galleryData.json";
import "../styles/gallery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const selectedIndex = selectedImage
    ? galleryData.findIndex((item) => item.id === selectedImage.id)
    : -1;

  const showPrevious = () => {
    if (selectedIndex < 0 || galleryData.length === 0) return;

    const previousIndex =
      (selectedIndex - 1 + galleryData.length) % galleryData.length;

    setSelectedImage(galleryData[previousIndex]);
  };

  const showNext = () => {
    if (selectedIndex < 0 || galleryData.length === 0) return;

    const nextIndex = (selectedIndex + 1) % galleryData.length;

    setSelectedImage(galleryData[nextIndex]);
  };

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage, selectedIndex]);

  return (
    <>
      <PageHeader
        title="Our Team"
        subtitle="Meet the people behind our legal practice."
        breadcrumb="Our Team"
      />

      <section className="gallery-section">
        <div className="container">
          <div className="gallery-heading">
            <span className="section-eyebrow">LEXHUNTERS LLP</span>
            <h2>Our People</h2>
            <p>
              A closer look at the individuals who contribute to our
              professional practice.
            </p>
          </div>

          {galleryData.length > 0 ? (
            <div className="gallery-grid">
              {galleryData.map((item) => (
                <button
                  type="button"
                  className="gallery-card"
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  aria-label="View team member photograph"
                >
                  <img
                    src={item.image}
                    alt={item.alt || "LexHunters LLP team member"}
                    loading="lazy"
                  />
                  <span className="gallery-card-icon" aria-hidden="true">
                    +
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <p className="gallery-empty">
              Team photographs will be added soon.
            </p>
          )}
        </div>
      </section>

      {selectedImage && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Team photograph viewer"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image viewer"
          >
            &times;
          </button>

          {galleryData.length > 1 && (
            <>
              <button
                type="button"
                className="gallery-lightbox-nav gallery-lightbox-prev"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                aria-label="Previous photograph"
              >
                &#10094;
              </button>

              <button
                type="button"
                className="gallery-lightbox-nav gallery-lightbox-next"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                aria-label="Next photograph"
              >
                &#10095;
              </button>
            </>
          )}

          <div
            className="gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.alt || "LexHunters LLP team member"}
            />

            <p className="gallery-image-count">
              {selectedIndex + 1} / {galleryData.length}
            </p>
          </div>
        </div>
      )}
      <br/>

      <ContactCTA />
    </>
  );
};

export default Gallery;
