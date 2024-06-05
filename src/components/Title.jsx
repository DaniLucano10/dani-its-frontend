import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const Title = () => {
  return (
    <>
      <Box
        width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
        overflow="hidden"
        height="auto"
        margin="auto"
        p={{ base: "4rem", md: "4rem", xl: "6rem" }}
      >
        <Text
          fontSize={{ base: "4xl", md: "4xl", lg: "6xl" }}
          color="#09155f"
          as={motion.h1}
          initial={{ x: "-20px" }}
          animate={{ x: [50, 150, 10], opacity: 1, scale: 1 }}
          transition="linear 0.2s"
          fontWeight="bold"
          lineHeight="shorter"
          ml={{ base: 8, md: 0, xl: 0 }}
        >
          PORTAL
        </Text>
        <Text
          fontSize={{ base: "4xl", md: "4xl", lg: "6xl" }}
          color="#019CFE"
          as={motion.p}
          initial={{ x: "-50px" }}
          animate={{ x: [50, 150, 10], opacity: 1, scale: 1 }}
          transition="linear 0.2s"
          fontWeight="bold"
          lineHeight="shorter"
          ml={{ base: -6, md: 0, xl: 0 }}
          mt={{ base: -5, md: -5, xl: -5 }}
        >
          INFORMATIVO
        </Text>
      </Box>

      <Box
        overflow="hidden"
        height="auto"
        p={{ base: "4rem", md: "4rem", xl: "7rem" }}
        mt={{ base: "-6rem", md: "-7rem", xl: "-7rem" }}
      >
        <Heading
          fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
          color="#09155f"
        >
          CARGOS POR MÓDULOS
        </Heading>
      </Box>
    </>
  );
};
