import { Box, Flex } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "../src/assets/imgs/imag/aptim.png",
  "../src/assets/imgs/imag/articruz.png",
  "../src/assets/imgs/imag/audax.png",
  "../src/assets/imgs/imag/camposol.png",
  "../src/assets/imgs/imag/chinalco.png",
  "../src/assets/imgs/imag/cooper.png",
  "../src/assets/imgs/imag/crosland.png",
  "../src/assets/imgs/imag/distriluz.png",
  "../src/assets/imgs/imag/ecogal.png",
  "../src/assets/imgs/imag/edeza.png",
  "../src/assets/imgs/imag/esSalud.png",
  "../src/assets/imgs/imag/ferreyros.png",
  "../src/assets/imgs/imag/fff.png",
  "../src/assets/imgs/imag/globaltec.png",
  "../src/assets/imgs/imag/hortifrut.png",
  "../src/assets/imgs/imag/ism.png",
  "../src/assets/imgs/imag/malaga.png",
  "../src/assets/imgs/imag/milpo.png",
  "../src/assets/imgs/imag/minera.png",
  "../src/assets/imgs/imag/nexa.png",
  "../src/assets/imgs/imag/sanmartin.png",
  "../src/assets/imgs/imag/talma.png",
  "../src/assets/imgs/imag/tupemesa.png",
];

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const ImagePage = () => {
  return (
    <Box
      overflow="hidden"
      margin="auto"
      ml={{ base: "center", md: "center" }}
      mt={{ base: "0rem", lg: "-4rem", xl: "-7rem" }}
      bg="#f3f6f6"
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} as="figure" mt={2}>
            <Flex align="center" justifyContent="center">
              <img
                src={image}
                alt={`Slide ${index}`}
                style={{
                  width: "7rem", // tamaño fijo para las imágenes
                  height: "5rem", // tamaño fijo para las imágenes
                  objectFit: "contain",
                  display: "block",
                  margin: "auto",
                }}
              />
            </Flex>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImagePage;
