import React from "react";
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import "yet-another-react-lightbox/styles.css";
const CarouselLightBox = ({ photoList }) => {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  const toggleOpen = (state) => () => setOpen(state);

  const updateIndex = ({ index: current }) => setIndex(current);

  let slides = [];
  photoList?.forEach((image, key) => {
    const photoObject = {
      src: image.url,
      width: image.width,
      height: image.height,
      alt: image.title,
    };
    slides.push(photoObject);
  });

  return (
    <>
      <div className="w-full p-5 flex flex-grow">
        <Lightbox
          index={index}
          slides={slides}
          plugins={[Inline]}
          on={{
            view: updateIndex,
            click: toggleOpen(true),
          }}
          carousel={{
            padding: 0,
            spacing: 0,
            imageFit: "cover",
          }}
          inline={{
            style: {
              width: "100%",
              maxWidth: "900px",
              aspectRatio: "3 / 2",
              margin: "0 auto",
            },
          }}
        />

        <Lightbox
          open={open}
          close={toggleOpen(false)}
          index={index}
          slides={slides}
          on={{ view: updateIndex }}
          animation={{ fade: 0 }}
          controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
        />
      </div>
    </>
  );
};

export default CarouselLightBox;
