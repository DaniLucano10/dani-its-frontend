
import { Heading } from '@chakra-ui/react';
import { Container } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

export const Teachers = () => {

  const images = [
    {
      original: "../src/assets/imgs/img-teachers/carlos.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
      description: "sdegbzgbhzsdbgsdgbsdbgsdsgwserhgrehreay n4watb4wta4wt4t4at4wt4vt4t4t4t43t43t34t fsbghzrwshzwreherhrwhwrhwrhrwhrhrhrhrehrhrherher"
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
      <Container as="section" maxWidth="8xl">
        <Heading color="#09155f">NUESTROS INSTRUCTORES</Heading>
        <div style={{ width: "70vw", margin: "auto" }} >
          <ImageGallery items={images}
            showPlayButton={false}
            showFullscreenButton={false}
            //showThumbnails={false}
            //showNav={false}
            showBullets={true}
            autoPlay={true}
            slideInterval={3000}
            slideDuration={1000}

          />
        </div>
      </Container>
    </>
  );
};



<Container as="section" maxWidth="8xl" my={-150}>
        <Heading color="#09155f">NUESTROS INSTRUCTORES</Heading>

        <Flex my="50">
          <Avatar src="../src/assets/imgs/img-teachers/jonny.jpg" 
            alignItems="center"
            />
          <Box ml="5">
            <Text fontWeight="bold">
              JOHNNY CUSI
              <Badge ml="1" colorScheme="green">
              </Badge>
            </Text>
            <Text fontSize="sm">consultor SAP S4 MM, SD, WM, PP</Text>
          </Box>
        </Flex>
      </Container>











    <Container  as="section" maxWidth="8xl" my={-150}>
    <Heading color="#09155f">NUESTROS INSTRUCTORES</Heading>
      <div className="W-3/4 m-auto">
        <div className="mt-20">
          {data.map((d) =>(
            <div key="" className="bg-white h-[450px] text-black rounded-xl">
              <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
              </div>

              <div>
                <p>{d.name}</p>
                <p>{d.review}</p>
                <button>Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      </Container>




<Box h="100%" bg="#000000" marginTop="40">
        <Container as="section">
          <Flex direction="row" margin={-100}>
            <Link
              margin={50}
              fontSize="20px"
              href="https://platzi.com/blog/react-css/"
              color="#FFFFFF"
              my="20"
            >
              INSTITUTE
            </Link>
            <Text fontSize="20px" margin={20} color="#FFFFFF" marginLeft={100}>
              Cursos funcionales
              <Box>
                <Text>SAP Business One</Text>
                <Text color="#FFFFFF" fontSize="15px">
                  SAP MM S/4HANA Logística Digital
                </Text>
                <Text fontSize="15px">
                  SAP PM S/4HANA Mantenimiento digital
                </Text>
                <Text>SAP FI S/4HANA Finanzas Digitales</Text>
                <Text>SAP TR S/4HANA Gestión Bancaria</Text>
                <Text>SAP HCM Gestión Recursos Humanos</Text>
              </Box>
            </Text>
            <Text fontSize="20px" margin={20} color="#FFFFFF" marginLeft={200}>
              cursos tecnicos
            </Text>
            <Text fontSize="20px" margin={20} color="#FFFFFF" marginLeft={200}>
              Contáctanos
            </Text>
          </Flex>
        </Container>
      </Box>



//Teachers
<Container as="section" maxWidth="6xl" my="200">
<Heading color="#09155f" my={10}>NUESTROS INSTRUCTORES</Heading>
<Center as="section" bg='gray.100' height="100vh" >

  <Box maxWidth="420" bg="white" padding="6">
    <Image
      src="../src/assets/imgs/img-teachers/carlos.jpg"
      alt="Svartifoss Waterfall"
      borderRadius="xl"
      objectFit="cover"
      mx="auto"
    />
    <HStack mt='5' spacing='3'>
      {['Waterfall', 'Nature'].map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
    </HStack>
    <Heading my="4" size="lg">
      fdzbghfbfdbzfd
    </Heading>
    <Text>erhnbefdnhbredfnfnenrenre</Text>
  </Box>
</Center>
</Container>


//certificacion
<Box justifyContent="center" display="flex" alignContent="center" width="800px" height="100px">
              <Carousel data-bs-theme="dark" >
                <Carousel.Item height="100px">
                  <Stack >
                    <Image
                      boxSize="100px"
                      objectFit="cover"
                      src="../src/assets/imgs/correo.jpg"
                    />
                  </Stack>
                  
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="../src/assets/imgs/dni.jpg"
                    
                  />
                  
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="../src/assets/imgs/ficha.jpg"
                    
                  />
                  
                </Carousel.Item>
              </Carousel>
            </Box>