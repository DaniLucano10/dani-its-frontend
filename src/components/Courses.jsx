import { useEffect, useState } from "react";
import axios from "axios";
import Markdown from "markdown-to-jsx";

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
import { Title } from "./Title";

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
      <Title />
      <Box
        overflow="hidden"
        height="auto"
        margin="auto"
        p={{ base: "2rem", md: "4rem", xl: "8rem" }}
        mt={{ base: "-6rem", md: "-7rem", xl: "-15rem" }}
      >
        {categories?.map((category) => (
          <Box key={category.id}>
            <Box
              textAlign={{ base: "center", md: "30xl" }}
              mb={{ base: "-4rem", md: "-4rem" }} // Reduced margin bottom for mobile
              mt={{ base: "1rem", md: "-1rem" }} 
            >
              <Text fontSize="2xl" mt={{ base: "2rem", md: "3rem", xl: "3rem" }}>{category.name}</Text>
            </Box>
            <Flex direction={{ base: "column", md: "row" }}>
              <Box
                key={category.id}
                maxW="100%"
                overflow="hidden"
                padding="4rem"
                height="auto"
                flex={{ base: 1, md: 1 }}
              >
                <Image
                  src={`http://localhost:1337${category.img}`}
                  boxSize={{ base: "100%", md: "auto" }}
                  objectFit="cover"
                  display="block"
                  mx={{ base: "auto", md: "0" }}
                  mb={{ base: "2rem", md: "0" }}
                />
              </Box>
              <Box
                mt={{ base: "-6em", md: "3em", xl: "3em" }}
                flex={{ base: 1, md: 1.5 }}
                mr={{ base: -20, md: 30, xl: 40 }}
                p={{ base: 5 }}
                width={{ base: "100%", md: "auto" }}
              >
                <Accordion allowToggle>
                  {category.courses?.map((course) => (
                    <AccordionItem key={course.id} border="1px solid #E2E8F0">
                      <h2>
                        <AccordionButton width="100%">
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            color="inherit"
                            mt={6}
                          >
                            {course.title}
                          </Box>

                          <AccordionIcon boxSize="1.5em" />
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
                            <Text color="#000000" fontSize="lg">
                              <Markdown>{course.description}</Markdown>
                            </Text>
                          </Box>
                        </AccordionPanel>
                      </h2>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Box>
            </Flex>
          </Box>
        ))}
      </Box>
    </>
  );
};
