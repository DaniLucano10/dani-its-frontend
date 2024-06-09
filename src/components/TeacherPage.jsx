import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import axios from "axios";

function TeacherPage() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/teachers?populate=*"
        );
        const data = response.data.data;
        console.log(response.data);
        setTeachers(
          data.map((teacher) => ({
            id: teacher.id,
            name: teacher.attributes.name,
            date: teacher.attributes.date,
            information: teacher.attributes.information,
            image: teacher.attributes.image.data[0].attributes.url,
          }))
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
  const leftPosition = useBreakpointValue({ base: "-2%",md: "90px",xl: "100px" });

  const textAlign = useBreakpointValue({ base: "center", md: "left" });

  return (
    <>
      <Box
        maxW={{ base: "90%", sm: "80%", md: "70%", lg: "60%" }}
        overflow="hidden"
        ml={{ base: "center", md: "7rem" }}
        mt="4rem"
      >
        <Heading
          textAlign={textAlign}
          color="#09155f"
          fontSize={{ base: "4xl", md: "4xl", lg: "4xl" }}
       
        >
          NUESTROS INSTRUCTORES
        </Heading>
      </Box>
      <Swiper
        ref={swiperRef}
        spaceBetween={0}
        slidesPerView={slidesPerView}
        pagination={{ clickable: true }}
      >
        {teachers?.map((teacher) => (
          <SwiperSlide key={teacher.id}>
            <Flex
              height="40vh"
              alignItems="center"
              justifyContent="center"
              mt={{base: 10, md:10, xl: 10}}
            >
              <Flex
                direction="column"
                alignItems="center"
                overflow="hidden"
                maxW={{ base: "90%", md: "80%", lg: "70%" }}
              >
                <Flex
                  direction={{ base: "column", md: "row" }}
                  alignItems="center"
                  mb="4"
                >
                  <Image
                    src={`http://localhost:1337${teacher.image}`}
                    alt="Example Image"
                    boxSize={{ base: "50px", md: "70px", lg: "100px" }}
                    objectFit="cover"
                    mr={{ base: "0", md: "4" }}
                    mb={{ base: "4", md: "0" }}
                  />
                  <Box>
                    <Text
                      fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                      fontWeight="bold"
                      textAlign={{ base: "center", md: "left" }}
                      whiteSpace="pre-wrap"
                      color="#09155f"
                    >
                      {teacher.name}
                    </Text>
                    <Text
                      fontSize="xl"
                      color="#09155f"
                      textAlign={{ base: "left", md: "center" }}
                      mt={{base: -4, xl: -5}}
                    >
                      {teacher.date}
                    </Text>
                  </Box>
                </Flex>

                <Text
                  fontSize={{ base: "md", md: "lg", lg: "2xl" }}
                  textAlign="center"
                  bg="#ccebff"
                  borderRadius="10px"
                  padding={{base: 5, md:5}}
                  mt={{base: -5, md: 8}}
                >
                  {teacher.information}
                </Text>
              </Flex>
            </Flex>
          </SwiperSlide>
        ))}

        <IconButton
          icon={<ChevronLeftIcon boxSize="35px" color="blue.500" />}
          aria-label="Prev"
          onClick={goPrev}
          pos="absolute"
          top={{base: "70%", md: "60%", xl: "50%"}}
          left={leftPosition}
          transform="translateY(-50%)"
          bg="transparent"
          _hover={{ bg: "transparent" }}
          size={iconSize}
          _focus={{ outline: "none" }}
        />
        <IconButton
          icon={<ChevronRightIcon boxSize="35px" color="blue.500" />}
          aria-label="Next"
          onClick={goNext}
          pos="absolute"
          top={{base: "70%", md: "60%", xl: "50%"}}
          right={{base: "-1%", md: "10%", xl: "10%"}}
          transform="translateY(-50%)"
          bg="transparent"
          _hover={{ bg: "transparent" }}
          size={iconSize}
          _focus={{ outline: "none" }}
        />
      </Swiper>
    </>
  );
}

export default TeacherPage;
