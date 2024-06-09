
import {
  Box,
  Container,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  useBreakpointValue,

} from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons';
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
        overflow="hidden"
        margin="auto"
        ml={{ base: "center", md: "7rem" }}
        mt="4rem"
      >
        <Heading
          textAlign={textAlign}
          fontSize={{ base: "4xl", md: "4xl", lg: "4xl" }}
          color="#09155f"
        >
          CERTIFICACÍON
        </Heading>
      </Box>

      <Box bg="#ccebff">
        <Box
          overflow="hidden"
          margin="auto"
          ml={{ base: "center", md: "10rem" }}
          mt={{ base: "2rem", md: "2rem" }}

        >


          <Stack 
            alignItems="center"
            overflow="hidden"
            maxW={{ base: '100%', md: '100%', lg: '100%' }}
            direction={{ base: "column", md: "row" }}
            spacing={50}
           

          >

            <List spacing={3}>
              <Heading
                textAlign={textAlign}
                fontSize={{ base: "2xl", md: "2xl", lg: "2xl" }}
                color="#019CFE"
                mt={-10}
              >
                BENEFICIOS
              </Heading>
              <ListItem>

                <ListIcon as={CheckCircleIcon} color="#019CFE" />
                CANTIDAD DE HORAS: 30 HORAS
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="#019CFE" />
                RANGO: NIVEL INTERNACIONAL
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="#019CFE" />
                MEDIO DE ENTREGA: ONLINE Y VIRTUAL
              </ListItem>
              {/* You can also use custom icons from react-icons */}
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="#019CFE" />
                NOTA MINIMA DE APROBACION: 13 DE 20 PUNTOS
              </ListItem>
            </List>

            <Container maxW={{ base: "80%", sm: "80%", md: "60%", lg: "50%", xl: "35%" }}
              margin="auto"
              mt={{base: 0, xl:6}}
              >


              <ImageGallery
                items={images}
                showPlayButton={false}
                showFullscreenButton={false}
                howThumbnails={false}
                showNav={false}
                showBullets={true}
                autoPlay={true}
                slideInterval={3000}
                slideDuration={1000}
              />


            </Container>

          </Stack>
        </Box>
      </Box>
    </>
  );
};
