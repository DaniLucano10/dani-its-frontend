import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from "framer-motion"
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
} from '@chakra-ui/react';

export const Courses = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:1337/api/categories?populate=*');
                const data = response.data.data;
                setCategories(data.map(category => ({
                    id: category.id,
                    name: category.attributes.name,
                    img: category.attributes.img.data.attributes.url,
                    courses: category.attributes.courses.data.map(course => ({
                        id: course.id,
                        title: course.attributes.title,
                        description: course.attributes.description,
                    })),
                })));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (

        <>
        <Container as="section" maxWidth="8xl">
        <Heading my="50px" fontSize="60px" color="#09155f"
          as={motion.h1}
          initial={{x: "-20px"}}
          animate={{ x: [0, 150, 50], opacity:1, scale: 1 }}
          transition="linear 0.2s"
        >
          PORTAL{" "}
        </Heading>
        <Heading my="-60px" fontSize="60px" color="#019CFE"
          as={motion.h1}
          initial={{x: "-50px"}}
          animate={{ x: [50, 150, 50], opacity:1, scale: 1 }}
          transition="linear 0.2s"
        >
          INFORMATIVO
        </Heading>
        
        <Heading my="150px" fontSize="40px" color="#09155f">
          CARGOS POR MÓDULOS
        </Heading>
      </Container>
            <Container maxW="-70px" my={100}>
                {categories?.map(category => (
                    <Container key={category.id} maxWidth="1000px">
                        <Stack key={category.id} direction="row">
                            <Image src={`http://localhost:1337${category.img}`} />
                        </Stack>
                        <Container margin="-500px -150px 0px 450px" h={600}>
                            <Heading my={-8} fontSize="4xl" h={100}>
                                {category.name}
                            </Heading>
                            <Flex  >
                                <Accordion allowToggle >
                                    {category.courses?.map(course => (
                                        <AccordionItem key={course.id}>

                                            <h2>
                                            <AccordionButton bg="gray.200" >
                                                <Box as='span'>{course.title}</Box>

                                                <AccordionIcon />
                                            </AccordionButton>
                                            <AccordionPanel pb={4}  border="1px solid #ccc" >
                                                <Text>{course.description}</Text>
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

