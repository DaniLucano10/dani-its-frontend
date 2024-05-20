import { Container, Heading, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const Borrador = () => {
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <>
      <Container as="section" maxWidth="8xl" my={10}>
        <Heading >
          PORTAL{" "}
        </Heading>
        <Heading
          my="-60px"
          fontSize="60px"
          color="#019CFE"
          as={motion.h1}
          initial={{ x: "-50px" }}
          animate={{ x: [50, 150, 50], opacity:1, scale: 1 }}
          transition={{
            durattion: 5,
            delay: 0.3
          }}
        >
          INFORMATIVO
        </Heading>
        <Heading my="150px" fontSize="40px" color="#09155f">
          CARGOS POR MÓDULOS:
        </Heading>
        
        
      </Container>
      ;

          <Image src="../src/assets/imgs/imag/aptim.png"  initial={{ x: "-50px" }}
          animate={{ x: [50, 150, 50], opacity:1, scale: 1 }}
          transition={{
            durattion: 5,
            delay: 0.3
          }}/>
    

      <div>
          <img src="../src/assets/imgs/imag/aptim.png" />
        </div>
    </>
  );
};
