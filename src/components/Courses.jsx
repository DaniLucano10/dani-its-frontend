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
  Stack,
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
      <Container as="section" m="100px" my={100}>
        <Heading
          my="50px"
          fontSize="60px"
          color="#09155f"
          as={motion.h1}
          initial={{ x: "-20px" }}
          animate={{ x: [50, 150, 10], opacity: 1, scale: 1 }}
          transition="linear 0.2s"
          fontWeight="extrabold"
        >
          PORTAL{" "}
        </Heading>
        <Heading
          my="-60px"
          fontSize="60px"
          color="#019CFE"
          as={motion.h1}
          initial={{ x: "-50px" }}
          animate={{ x: [50, 150, 10], opacity: 1, scale: 1 }}
          transition="linear 0.2s"
          fontWeight="extrabold"
        >
          INFORMATIVO
        </Heading>

        <Heading my="150px" fontSize="40px" color="#09155f">
          CARGOS POR MÓDULOS
        </Heading>
      </Container>
      
      <Container m="200px" mt="-30px">
        {categories?.map((category) => (
          <Container key={category.id} maxWidth="1000px">
            <Stack key={category.id} direction="row">
              <Image src={`http://localhost:1337${category.img}`} />
            </Stack>
            <Container margin="-500px -150px 0px 450px" h={600}>
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
                            <Text color="#000000" fontSize='sm'>
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
          </Container>
        ))}
      </Container>
    </>
  );
};
