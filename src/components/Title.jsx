import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const Title = () => {
  const AnimatedText = motion(Text);
  return (
    <>
      <Box
        width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
        overflow="hidden"
        height="auto"
        margin="auto"
        p={{ base: "4rem", md: "4rem", xl: "6rem" }}
      >
        <AnimatedText
          fontSize={{ base: "4xl", md: "4xl", lg: "6xl" }}
          color="#09155f"
          as={motion.h1}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "linear",
            duration: 2,
            x: { duration: 1 },
          }}
          fontWeight="bold"
          lineHeight="shorter"
          ml={{ base: 8, md: 10, xl: 0 }}
        >
          PORTAL
        </AnimatedText>
        <AnimatedText
          fontSize={{ base: "4xl", md: "4xl", lg: "6xl" }}
          color="#019CFE"
          as={motion.p}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "linear",
            duration: 2,
            x: { duration: 1 },
          }}
          fontWeight="bold"
          lineHeight="shorter"
          ml={{ base: -6, md: 10, xl: 0 }}
          mt={{ base: -5, md: -5, xl: -5 }}
        >
          INFORMATIVO
        </AnimatedText>
      </Box>

      <Box
        overflow="hidden"
        height="auto"
        p={{ base: "4rem", md: "4rem", xl: "7rem" }}
        mt={{ base: "-6rem", md: "-7rem", xl: "-7rem" }}
        ml={{ base: 8, md: 10, xl: 0 }}
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
