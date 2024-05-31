import { useEffect, useState } from "react";
import axios from "axios";
import Markdown from "markdown-to-jsx";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Image,
  Heading,
  Text,
  Container,
  Flex,
} from "@chakra-ui/react";

export const Courses = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/categories?populate=*"
        );
        const data = response.data.data;
        console.log(response.data);
        setCategories(
          data.map((category) => ({
            id: category.id,
            name: category.attributes.name,
            img: category.attributes.img.data.attributes.url,
            courses: category.attributes.courses.data.map((course) => ({
              id: course.id,
              title: course.attributes.title,
              description: course.attributes.description,
            })),
          }))
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Box
        width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
        overflow="hidden"
        height="auto"
        margin="auto"
        padding="4rem"
      >
        <Heading
          fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }}
          color="#09155f"
          as={motion.h1}
          initial={{ x: "-20px" }}
          animate={{ x: [50, 150, 10], opacity: 1, scale: 1 }}
          transition="linear 0.2s"
          fontWeight="extrabold"
        >
          PORTAL
        </Heading>
        <Heading
          fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }}
          color="#019CFE"
          as={motion.h1}
          initial={{ x: "-50px" }}
          animate={{ x: [50, 150, 10], opacity: 1, scale: 1 }}
          transition="linear 0.2s"
          fontWeight="extrabold"
        >
          INFORMATIVO
        </Heading>
      </Box>

      <Box
        maxW={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
        overflow="hidden"
        padding="4rem"
        height="auto"
      >
        <Heading fontSize={{ base: "lg", md: "xl", lg: "3xl" }} color="#09155f">
          CARGOS POR MÓDULOS
        </Heading>
      </Box>

      <Container
        maxW={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" }}
        padding={1}
        margin={1}
        centerContent
      >
        {categories?.map((category) => (
          <Flex justify="space-between" key={category.id}>
            <Box
              key={category.id}
              maxW="100%"
              p="4"
              overflow="hidden"
              padding="4rem"
              height="auto"
            >
              <Image
                src={`http://localhost:1337${category.img}`}
                boxSize={{ base: "100%", md: "auto" }}
                objectFit="cover"
                mr={{ base: "5", md: "40" }}
                mb={{ base: "30", md: "30" }}
              />
            </Box>
            <Container
              maxW="100%"
              position="relative"
              left={{ base: "50%", md: "10%" }}
              top={{ base: "10%", md: "20%" }}
              overflow="hidden"
              p="4"
              mb={0}
            >
              <Text my={-8} fontSize="4xl" h={100}>
                {category.name}
              </Text>
              <Flex>
                <Accordion allowToggle>
                  {category.courses?.map((course) => (
                    <AccordionItem key={course.id}>
                      <h2>
                        <AccordionButton width={600}>
                          <Box as="span" flex="1" textAlign="left">
                            {course.title}
                          </Box>

                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4} border="1px solid #ccc">
                          <Box
                            position="relative"
                            top="-1"
                            left="40px"
                            backgroundColor=""
                            padding="4"
                            borderRadius="md"
                          >
                            <Text color="#000000" fontSize="sm">
                              <Markdown>{course.description}</Markdown>
                            </Text>
                          </Box>
                        </AccordionPanel>
                      </h2>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Flex>
            </Container>
          </Flex>
        ))}
      </Container>
    </>
  );
};
