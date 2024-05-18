import {
  Container,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";


export const Certification = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/250/150/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
   },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <>
      <Container as="section" maxWidth="8xl" my={-300}>
        <Heading color="#09155f">CERTIFICACÍON</Heading>

        <Container as="section" maxWidth="7xl" my="80px" bg="#8ed1fc30">
          <Heading color="#019CFE" my="80px">BENEFICIOS</Heading>

          <Flex direction="row" my="40px">
            <List spacing={3}>
              <ListItem>
                <ListIcon as="MdCheckCircle" color="green.500" />
                CANTIDAD DE HORAS: 30 HORAS
              </ListItem>
              <ListItem>
                <ListIcon as="MdCheckCircle" color="green.500" />
                RANGO: NIVEL INTERNACIONAL
              </ListItem>
              <ListItem>
                <ListIcon as="MdCheckCircle" color="green.500" />
                MEDIO DE ENTREGA: ONLINE Y VIRTUAL
              </ListItem>
              {/* You can also use custom icons from react-icons */}
              <ListItem>
                <ListIcon as="MdSettings" color="green.500" />
                NOTA MINIMA DE APROBACION: 13 DE 20 PUNTOS
              </ListItem>
            </List>

            <div style={{ width: "20vw", margin: "auto" }}>
              <ImageGallery
                items={images}
                showPlayButton={false}
                showFullscreenButton={false}
                //howThumbnails={false}
                showNav={false}
                showBullets={true}
                autoPlay={true}
                slideInterval={3000}
                slideDuration={1000}
              />
            </div>
          </Flex>
        </Container>
      </Container>
    </>
  );
};
