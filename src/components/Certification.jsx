
import {
  Box,
  Container,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  useBreakpointValue,
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

  const textAlign = useBreakpointValue({ base: "center", md: "left" });
  return (
    <>
      <Box
        maxW={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
        width="100%"
        overflow="hidden"
        p="10"
        m="10"
      >
        <Heading
          textAlign={textAlign}
          fontSize={{ base: "4xl", md: "4xl", lg: "4xl" }}
          color="#09155f"
        >
          CERTIFICACÍON
        </Heading>
      </Box>

      <Container
        maxW={{ base: "100%", sm: "80%", md: "70%", lg: "60%", xl: "70%" }}
        p={{ base: 0, md: 0 }}
      >
        <Heading
          textAlign={textAlign}
          fontSize={{ base: "2xl", md: "2xl", lg: "2xl" }}
          color="#019CFE"
        >
          BENEFICIOS
        </Heading>

        <Flex direction="row"
          alignItems="center"
          overflow="hidden"
          p="0"
          maxW={{ base: '100%', md: '100%', lg: '100%' }}>
          
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

          <Container maxW={{ base: "0%", sm: "80%", md: "60%", lg: "50%", xl: "40%" }}
            margin="auto"
            p={0}>


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

           
          </Container>
          
        </Flex>
      </Container>
    </>
  );
};
