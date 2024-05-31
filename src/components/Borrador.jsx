import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Box, Flex, Heading, IconButton, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { useRef } from 'react';
import { useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

function Borrador() {
  const slidesPerView = useBreakpointValue({ base: 1, md: 1, lg: 1 });

  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    const interval = setInterval(() => {
      if (swiper.isEnd) {
        swiper.slideTo(0);
      } else {
        swiper.slideNext();
      }
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const goPrev = () => {
    const swiper = swiperRef.current.swiper;
    swiper.slidePrev();
  };

  const goNext = () => {
    const swiper = swiperRef.current.swiper;
    swiper.slideNext();
  };

  const iconSize = useBreakpointValue({ base: "2px", md: "32px" });
  const leftPosition = useBreakpointValue({ base: "5%", md: "100px" });

  const textAlign = useBreakpointValue({ base: "center", md: "left" });

  return (

    <>
      <Box maxW={{ base: "90%", sm: "80%", md: "70%", lg: "60%" }}
        width="100%"
        overflow="hidden"
        p="10"
        m="10">
        <Heading textAlign={textAlign} color="#09155f" fontSize={{ base: "4xl", md: "4xl", lg: "4xl" }}>NUESTROS INSTRUCTORES</Heading>
      </Box>
      <Swiper
        ref={swiperRef}
        spaceBetween={0}
        slidesPerView={slidesPerView}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Flex
            height="40vh"
            alignItems="center"
            justifyContent="center"
            p="4"
          >
            <Flex
              direction="column"
              alignItems="center"
              overflow="hidden"
              p="4"
              maxW={{ base: '90%', md: '80%', lg: '60%' }}
            >
              <Flex
                direction={{ base: 'column', md: 'row' }}
                alignItems="center"
                mb="4"
                
              >
                <Image
                  src="../src/assets/imgs/img-teachers/carlos.jpg"
                  alt="Example Image"
                  boxSize={{ base: "50px", md: "70px", lg: "100px" }}
                  objectFit="cover"
                  mr={{ base: "0", md: "4" }}
                  mb={{ base: "4", md: "0" }}
                />
                <Box >
                  <Text
                    fontSize={{ base: "lg", md: "xl", lg: "xl" }}
                    fontWeight="bold"
                    textAlign={{ base: 'center', md: 'left' }}
                    whiteSpace="pre-wrap"
                    color="#09155f"
                  >
                    CARLOS BAZALAR

                  </Text>
                  <Text color="#09155f" textAlign={{ base: "left", md: "center" }}>SAP BTP</Text>
                </Box>
              </Flex>

              <Text
                fontSize={{ base: "md", md: "lg", lg: "xl" }}
                textAlign="center"
                bg="#575757"
              >
                Backend Java - developer, con mas de 20 años de experiencia en Tecnología de la Información y certificación SCRUM
                Master. Ha participado en proyectos en el sector Privado y Estatal, siendo Jefe de Proyecto / Arquitecto / Analista Senior.
              </Text>
            </Flex>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            height="40vh"
            alignItems="center"
            justifyContent="center"
            p="4"
          >
            <Flex
              direction="column"
              alignItems="center"
              overflow="hidden"
              p="4"
              maxW={{ base: '90%', md: '80%', lg: '60%' }}
            >
              <Flex
                direction={{ base: 'column', md: 'row' }}
                alignItems="center"
                mb="4"
              >
                <Image
                  src="../src/assets/imgs/img-teachers/joel.jpg"
                  alt="Example Image"
                  boxSize={{ base: "50px", md: "70px", lg: "100px" }}
                  objectFit="cover"
                  mr={{ base: "0", md: "4" }}
                  mb={{ base: "4", md: "0" }}
                />
                <Box>
                  <Text
                    fontSize={{ base: "lg", md: "xl", lg: "xl" }}
                    fontWeight="bold"
                    textAlign={{ base: 'center', md: 'left' }}
                    whiteSpace="pre-wrap"
                    color="#09155f"
                  >
                    JOEL CAMPOS

                  </Text>
                  <Text color="#09155f" textAlign={{ base: "left", md: "center" }}>Consultor Senior SAP B1</Text>
                </Box>
              </Flex>

              <Text
                fontSize={{ base: "md", md: "lg", lg: "xl" }}
                textAlign="center"
              >
                Gestor de implementación Senior SAP Business One, con mas de 12 años de experiencia en implementaciones ERP,
                mejoras continuas e Instrucción en temáticas de procesos de negocios en la PUCP y CIBERTEC.
              </Text>
            </Flex>
          </Flex>
        </SwiperSlide>


        <SwiperSlide>
          <Flex
            height="40vh"
            alignItems="center"
            justifyContent="center"
            p="4"
          >
            <Flex
              direction="column"
              alignItems="center"
              overflow="hidden"
              p="4"
              maxW={{ base: '90%', md: '80%', lg: '60%' }}
            >
              <Flex
                direction={{ base: 'column', md: 'row' }}
                alignItems="center"
                mb="4"
              >
                <Image
                  src="../src/assets/imgs/img-teachers/jonny.jpg"
                  alt="Example Image"
                  boxSize={{ base: "50px", md: "70px", lg: "100px" }}
                  objectFit="cover"
                  mr={{ base: "0", md: "4" }}
                  mb={{ base: "4", md: "0" }}
                />
                <Box>
                  <Text
                    fontSize={{ base: "lg", md: "xl", lg: "xl" }}
                    fontWeight="bold"
                    textAlign={{ base: 'center', md: 'left' }}
                    whiteSpace="pre-wrap"
                    color="#09155f"
                  >
                    JOHNNY CUSI

                  </Text>
                  <Text color="#09155f" textAlign={{ base: "left", md: "center" }}>Consultor SAP S4 MM, SD, WM, PP</Text>
                </Box>
              </Flex>

              <Text
                fontSize={{ base: "md", md: "lg", lg: "xl" }}
                textAlign="center"
              >
                Consultor SAP especialista en temas logísticos (compras, ventas, inventarios, almacenes, producción)
                con mas de 5 años de experiencia. Los módulos sap que comprenden en su formación y experiencia son MM, SD, WM, PP.
              </Text>
            </Flex>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            height="40vh"
            alignItems="center"
            justifyContent="center"
            p="4"
          >
            <Flex
              direction="column"
              alignItems="center"
              overflow="hidden"
              p="4"
              maxW={{ base: '90%', md: '80%', lg: '60%' }}
            >
              <Flex
                direction={{ base: 'column', md: 'row' }}
                alignItems="center"
                mb="4"
              >
                <Image
                  src="../src/assets/imgs/img-teachers/indira.jpg"
                  alt="Example Image"
                  boxSize={{ base: "50px", md: "70px", lg: "100px" }}
                  objectFit="cover"
                  mr={{ base: "0", md: "4" }}
                  mb={{ base: "4", md: "0" }}
                />
                <Box>
                  <Text
                    fontSize={{ base: "lg", md: "xl", lg: "xl" }}
                    fontWeight="bold"
                    textAlign={{ base: 'center', md: 'left' }}
                    whiteSpace="pre-wrap"
                    color="#09155f"
                  >
                    INDIRA CARHUAS

                  </Text>
                  <Text color="#09155f" textAlign={{ base: "left", md: "center" }}>Consultora Senior SAP S4 FI</Text>
                </Box>
              </Flex>

              <Text
                fontSize={{ base: "md", md: "lg", lg: "xl" }}
                textAlign="center"
              >
                Consultora senior SAP FI S4 HANA, con mas de 10 años de experiencia participando en proyectos de implementación sap
                en la empresa del Grupo Romero, Telefónica del Perú.
              </Text>
            </Flex>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            height="40vh"
            alignItems="center"
            justifyContent="center"
            p="4"
          >
            <Flex
              direction="column"
              alignItems="center"
              overflow="hidden"
              p="4"
              maxW={{ base: '90%', md: '80%', lg: '60%' }}
            >
              <Flex
                direction={{ base: 'column', md: 'row' }}
                alignItems="center"
                mb="4"
              >
                <Image
                  src="../src/assets/imgs/img-teachers/reynaldo.jpg"
                  alt="Example Image"
                  boxSize={{ base: "50px", md: "70px", lg: "100px" }}
                  objectFit="cover"
                  mr={{ base: "0", md: "4" }}
                  mb={{ base: "4", md: "0" }}
                />
                <Box>
                  <Text
                    fontSize={{ base: "lg", md: "xl", lg: "xl" }}
                    fontWeight="bold"
                    textAlign={{ base: 'center', md: 'left' }}
                    whiteSpace="pre-wrap"
                    color="#09155f"
                  >
                    REYNALDO TUPIÑO

                  </Text>
                  <Text color="#09155f" textAlign={{ base: "left", md: "center" }}>Consultor Senior SAP S4 ABAP</Text>
                </Box>
              </Flex>

              <Text
                fontSize={{ base: "md", md: "lg", lg: "xl" }}
                textAlign="center"
              >
                Consultor senior SAP ABAP S4 HANA, con mas de 10 años de experiencia en análisis, desarrollo e implementacion SAP
                y brindando consultoría a empresas importantes.
              </Text>
            </Flex>
          </Flex>
        </SwiperSlide>


        <IconButton
          icon={<ChevronLeftIcon boxSize="35px" color="blue.500" />}
          aria-label="Prev"
          onClick={goPrev}
          pos="absolute"
          top="50%"
          left={leftPosition}
          transform="translateY(-50%)"
          bg="transparent"
          _hover={{ bg: "transparent" }}
          size={iconSize}
        />
        <IconButton
          icon={<ChevronRightIcon boxSize="35px" color="blue.500" />}
          aria-label="Next"
          onClick={goNext}
          pos="absolute"
          top="50%"
          right="15"
          transform="translateY(-50%)"
          bg="transparent"
          _hover={{ bg: "transparent" }}
          size={iconSize}
        />
      </Swiper>
    </>
  );
}

export default Borrador;