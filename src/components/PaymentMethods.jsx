import {
  Box,
  Card,
  CardFooter,
  Center,
  Heading,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";

export const PaymentMethods = () => {

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);

  const openModal1 = () => {
    setIsOpen1(true);
  };
  const closeModal1 = () => {
    setIsOpen1(false);
  };

  const openModal2 = () => {
    setIsOpen2(true);
  };
  const closeModal2 = () => {
    setIsOpen2(false);
  };

  const openModal3 = () => {
    setIsOpen3(true);
  };
  const closeModal3 = () => {
    setIsOpen3(false);
  };

  const openModal4 = () => {
    setIsOpen4(true);
  };
  const closeModal4 = () => {
    setIsOpen4(false);
  };

  const openModal5 = () => {
    setIsOpen5(true);
  };
  const closeModal5 = () => {
    setIsOpen5(false);
  };

  const openModal7 = () => {
    setIsOpen7(true);
  };
  const closeModal7 = () => {
    setIsOpen7(false);
  };
  const openModal8 = () => {
    setIsOpen8(true);
  };
  const closeModal8 = () => {
    setIsOpen8(false);
  };
  const textAlign = useBreakpointValue({ base: "center", md: "left" });

  return (
    <>
      <Box
        overflow="hidden"
        margin="auto"
        ml={{ base: "center", md: "7rem" }}
        mt="4rem"
      >
        <Heading
          textAlign={textAlign}
          fontSize={{ base: "4xl", md: "4xl", lg: "4xl" }}
          color="#09155f"
        >
          METODOS DE PAGO
        </Heading>

        <SimpleGrid
          maxW="6xl"
          my="50"
          spacing={50}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          ml={20}
        >
          <Card
            align="center"
            bg="#FFFFFF"
            borderRadius="full"
            border="3px solid"
            borderColor="#e2e8f0"
            width={{ base: "70%", lg: "100%", xl: "100%" }}
            maxHeight="80px"
            margin="center"
          >
            <CardFooter>
              <Box onClick={openModal1} _hover={{ cursor: "pointer" }}>
                <Image
                  src="../src/assets/imgs/img_pago/bbva1.png"
                  h={{ base: 10, md: "35px" }}
                />
              </Box>
            </CardFooter>
            <Modal
              isOpen={isOpen1}
              onClose={closeModal1}
              blockScrollOnMount={false}
            >
              <ModalOverlay bg="rgba(0, 0, 0, 0.8)" />
              <ModalContent
                maxW={{ base: "100%", lg: "80%", xl: "40%" }}
                maxH={{ base: "60%", lg: "100%", xl: "90%" }}
                margin={{ base: "auto", lg: "auto", xl: "auto" }}
              >
                <Box ml={{ base: "0rem", md: "4rem", xl: "5rem" }} mt={8}>
                  <Image
                    src="../src/assets/imgs/img_pago/bbva1.png"
                    h="60px"
                    margin={30}
                  />
                </Box>
                <Box>
                  <ModalHeader>
                    <Heading
                      fontSize={{ base: "40px", md: "10px", lg: "40px" }}
                      color="#00B5D8"
                      ml={{ base: "center", lg: "4rem", xl: "5rem" }}
                      mt={{ base: "center", lg: "2rem", xl: "2rem" }}
                    >
                      ITSYSTEMS PERU S.A.C.{" "}
                    </Heading>
                  </ModalHeader>
                </Box>
                <ModalCloseButton />
                <Box>
                  <ModalBody>
                    <Heading
                      color="RGBA(0, 0, 0, 0.64)"
                      fontSize={{ base: "20px", lg: "30px", xl: "35px" }}
                      ml={{ base: "center", lg: "4rem", xl: "5rem" }}
                      mt={{ base: "center", lg: "3rem", xl: "5rem" }}
                    >
                      CUENTA CORRIENTE:
                    </Heading>
                    <Text
                      fontSize={{ base: "20px", lg: "30px", xl: "35px" }}
                      ml={{ base: "center", lg: "4rem", xl: "5rem" }}
                      mt={{ base: "center", lg: "1rem", xl: "1rem" }}
                      color="RGBA(0, 0, 0, 0.64)"
                    >
                      0011 0127 0100037344
                    </Text>
                  </ModalBody>
                  <ModalBody>
                    <Heading
                      color="RGBA(0, 0, 0, 0.64)"
                      fontSize={{ base: "20px", lg: "30px", xl: "35px" }}
                      ml={{ base: "center", lg: "4rem", xl: "5rem" }}
                      mt={{ base: "center", lg: "3rem", xl: "2rem" }}
                    >
                      CUENTA INTERBANCARIA:
                    </Heading>
                    <Text
                      fontSize={{ base: "20px", lg: "30px", xl: "35px" }}
                      ml={{ base: "center", lg: "4rem", xl: "5rem" }}
                      mt={{ base: "center", lg: "1rem", xl: "1rem" }}
                      color="RGBA(0, 0, 0, 0.64)"
                    >
                      011 127 00010003734487
                    </Text>
                  </ModalBody>
                </Box>
              </ModalContent>
            </Modal>
          </Card>

          <Card
            align="center"
            bg="#FFFFFF"
            borderRadius="full"
            border="3px solid"
            borderColor="#e2e8f0"
            width={{ base: "70%", lg: "100%", xl: "100%" }}
            maxHeight="80px"
            margin="center"
          >
            <CardFooter>
              <Box
                bg="#FFFFFF"
                onClick={openModal2}
                _hover={{ cursor: "pointer" }}
              >
                <Image src="../src/assets/imgs/img_pago/bcp1.png" h="35px" />
              </Box>
            </CardFooter>
            <Modal
              isOpen={isOpen2}
              onClose={closeModal2}
              blockScrollOnMount={false}
            >
              <ModalOverlay bg="rgba(0, 0, 0, 0.8)" />
              <ModalContent
                maxW={{ base: "100%", lg: "80%", xl: "40%" }}
                maxH={{ base: "60%", lg: "100%", xl: "90%" }}
                margin={{ base: "auto", lg: "auto", xl: "auto" }}
              >
                <Box ml={{ base: "0rem", md: "4rem", xl: "5rem" }} mt={8}>
                  <Image
                    src="../src/assets/imgs/img_pago/bcp1.png"
                    h="60px"
                    margin={30}
                  />
                </Box>
                <Box>
                  <ModalHeader>
                    <Heading
                      fontSize={{ base: "40px", md: "10px", lg: "40px" }}
                      color="#00B5D8"
                      ml={{ base: "center", lg: "4rem", xl: "5rem" }}
                      mt={{ base: "center", lg: "2rem", xl: "2rem" }}
                    >
                      ITSYSTEMS PERU S.A.C.{" "}
                    </Heading>
                  </ModalHeader>
                </Box>
                <ModalCloseButton />
                <Box>
                  <ModalBody>
                    <Heading
                      color="RGBA(0, 0, 0, 0.64)"
                      fontSize={{ base: "20px", lg: "30px", xl: "35px" }}
                      ml={{ base: "center", lg: "4rem", xl: "5rem" }}
                      mt={{ base: "center", lg: "3rem", xl: "5rem" }}
                    >
                      CUENTA CORRIENTE:
                    </Heading>
                    <Text
                      fontSize={{ base: "20px", lg: "30px", xl: "35px" }}
                      ml={{ base: "center", lg: "4rem", xl: "5rem" }}
                      mt={{ base: "center", lg: "1rem", xl: "1rem" }}
                      color="RGBA(0, 0, 0, 0.64)"
                    >
                      191 2526660 0 17
                    </Text>
                  </ModalBody>
                  <ModalBody>
                    <Heading
                      color="RGBA(0, 0, 0, 0.64)"
                      fontSize={{ base: "20px", lg: "30px", xl: "35px" }}
                      ml={{ base: "center", lg: "4rem", xl: "5rem" }}
                      mt={{ base: "center", lg: "3rem", xl: "2rem" }}
                    >
                      CUENTA INTERBANCARIA:
                    </Heading>
                    <Text
                      fontSize={{ base: "20px", lg: "30px", xl: "35px" }}
                      ml={{ base: "center", lg: "4rem", xl: "5rem" }}
                      mt={{ base: "center", lg: "1rem", xl: "1rem" }}
                      color="RGBA(0, 0, 0, 0.64)"
                    >
                      002 191 00252666001757
                    </Text>
                  </ModalBody>
                </Box>
              </ModalContent>
            </Modal>
          </Card>

          <Card
            align="center"
            bg="#FFFFFF"
            borderRadius="full"
            border="3px solid"
            borderColor="#e2e8f0"
            width={{ base: "70%", lg: "100%", xl: "100%" }}
            maxHeight="80px"
            margin="center"
          >
            <CardFooter>
              <Box
                bg="#FFFFFF"
                onClick={openModal3}
                _hover={{ cursor: "pointer" }}
              >
                <Image
                  src="../src/assets/imgs/img_pago/interbank1.png"
                  h="35px"
                />
              </Box>
            </CardFooter>
            <Modal
              isOpen={isOpen3}
              onClose={closeModal3}
              blockScrollOnMount={false}
            >
              <ModalOverlay bg="rgba(0, 0, 0, 0.8)" />
              <ModalContent
                maxW={{ base: "100%", lg: "80%", xl: "40%" }}
                maxH={{ base: "60%", lg: "100%", xl: "90%" }}
                margin={{ base: "auto", lg: "auto", xl: "auto" }}
              >
                <Box ml={{ base: "0rem", md: "4rem", xl: "5rem" }} mt={8}>
                  <Image
                    src="../src/assets/imgs/img_pago/interbank1.png"
                    h="60px"
                    margin={30}
                  />
                </Box>
                <Box margin={59}>
                  <ModalHeader>
                    <Heading
                      color="#00B5D8"
                      ml={{ base: "-3.5rem", lg: "0rem", xl: "2rem" }}
                      mt={{ base: "-3rem", lg: "-2rem", xl: "-3rem" }}
                      fontSize={{ base: "3xl", lg: "7xl", xl: "5xl" }}
                    >
                      Elmer Angel Chipana Quispe{" "}
                    </Heading>
                  </ModalHeader>
                </Box>
                <ModalCloseButton />
                <Box>
                  <ModalBody>
                    <Heading
                      color="RGBA(0, 0, 0, 0.64)"
                      fontSize={{ base: "20px", lg: "30px", xl: "35px" }}
                      ml={{ base: "center", lg: "4rem", xl: "5rem" }}
                      mt={{ base: "-3rem", lg: "0rem", xl: "-3rem" }}
                    >
                      CUENTA DE AHORROS:
                    </Heading>
                    <Text
                      fontSize={{ base: "20px", lg: "30px", xl: "35px" }}
                      ml={{ base: "center", lg: "4rem", xl: "5rem" }}
                      mt={{ base: "center", lg: "1rem", xl: "1rem" }}
                      color="RGBA(0, 0, 0, 0.64)"
                    >
                      205 3103225977
                    </Text>
                  </ModalBody>
                  <ModalBody>
                    <Heading
                      color="RGBA(0, 0, 0, 0.64)"
                      fontSize={{ base: "20px", lg: "30px", xl: "35px" }}
                      ml={{ base: "center", lg: "4rem", xl: "5rem" }}
                      mt={{ base: "-1rem", lg: "0rem", xl: "0rem" }}
                    >
                      CUENTA INTERBANCARIA:
                    </Heading>
                    <Text
                      fontSize={{ base: "20px", lg: "30px", xl: "35px" }}
                      ml={{ base: "center", lg: "4rem", xl: "5rem" }}
                      mt={{ base: "center", lg: "1rem", xl: "1rem" }}
                      color="RGBA(0, 0, 0, 0.64)"
                    >
                      003 205 013103225977 25
                    </Text>
                  </ModalBody>
                </Box>
              </ModalContent>
            </Modal>
          </Card>

          <Card
            align="center"
            bg="#FFFFFF"
            borderRadius="full"
            border="3px solid"
            borderColor="#e2e8f0"
            width={{ base: "70%", md: "100%", lg: "100%" }}
            maxHeight="80px"
            margin="center"
          >
            <CardFooter>
              <Box
                bg="#FFFFFF"
                onClick={openModal4}
                _hover={{ cursor: "pointer" }}
              >
                <Image
                  src="../src/assets/imgs/img_pago/scotiabank1.png"
                  h="35px"
                />
              </Box>
            </CardFooter>
            <Modal
              isOpen={isOpen4}
              onClose={closeModal4}
              blockScrollOnMount={false}
            >
              <ModalOverlay bg="rgba(0, 0, 0, 0.8)" />
              <ModalContent
                maxW={{ base: "100%", lg: "80%", xl: "40%" }}
                maxH={{ base: "60%", lg: "100%", xl: "90%" }}
                margin={{ base: "auto", lg: "auto", xl: "auto" }}
              >
                <Box ml={{ base: "0rem", md: "4rem", xl: "5rem" }} mt={8}>
                  <Image
                    src="../src/assets/imgs/img_pago/SCOTIABANK1.png"
                    h="60px"
                    margin={30}
                  />
                </Box>
                <Box margin={59}>
                  <ModalHeader>
                    <Heading
                      color="#00B5D8"
                      ml={{ base: "-3.5rem", lg: "0rem", xl: "2rem" }}
                      mt={{ base: "-3rem", lg: "-2rem", xl: "-3rem" }}
                      fontSize={{ base: "3xl", lg: "7xl", xl: "5xl" }}
                    >
                      Elmer Angel Chipana Quispe{" "}
                    </Heading>
                  </ModalHeader>
                </Box>
                <ModalCloseButton />
                <Box>
                  <ModalBody>
                    <Heading
                      color="RGBA(0, 0, 0, 0.64)"
                      fontSize={{ base: "20px", lg: "30px", xl: "35px" }}
                      ml={{ base: "center", lg: "4rem", xl: "5rem" }}
                      mt={{ base: "-3rem", lg: "0rem", xl: "-3rem" }}
                    >
                      CUENTA DE AHORROS:
                    </Heading>
                    <Text
                      fontSize={{ base: "20px", lg: "30px", xl: "35px" }}
                      ml={{ base: "center", lg: "4rem", xl: "5rem" }}
                      mt={{ base: "center", lg: "1rem", xl: "1rem" }}
                      color="RGBA(0, 0, 0, 0.64)"
                    >
                      078 7312925
                    </Text>
                  </ModalBody>
                  <ModalBody>
                    <Heading
                      color="RGBA(0, 0, 0, 0.64)"
                      fontSize={{ base: "20px", lg: "30px", xl: "35px" }}
                      ml={{ base: "center", lg: "4rem", xl: "5rem" }}
                      mt={{ base: "-1rem", lg: "0rem", xl: "0rem" }}
                    >
                      CUENTA INTERBANCARIA:
                    </Heading>
                    <Text
                      fontSize={{ base: "20px", lg: "30px", xl: "35px" }}
                      ml={{ base: "center", lg: "4rem", xl: "5rem" }}
                      mt={{ base: "center", lg: "1rem", xl: "1rem" }}
                      color="RGBA(0, 0, 0, 0.64)"
                    >
                      009 254 200787312925 41
                    </Text>
                  </ModalBody>
                </Box>
              </ModalContent>
            </Modal>
          </Card>

          <Card
            align="center"
            bg="#FFFFFF"
            borderRadius="full"
            border="3px solid"
            borderColor="#e2e8f0"
            width={{ base: "70%", md: "100%", lg: "100%" }}
            maxHeight="80px"
            margin="center"
          >
            <CardFooter>
              <Box
                bg="#FFFFFF"
                onClick={openModal5}
                _hover={{ cursor: "pointer" }}
              >
                <Image src="../src/assets/imgs/img_pago/niubiz1.png" h="35px" />
              </Box>
            </CardFooter>
            <Modal
              isOpen={isOpen5}
              onClose={closeModal5}
              blockScrollOnMount={false}
            >
              <ModalOverlay bg="rgba(0, 0, 0, 0.8)" />
              <ModalContent
                maxW={{ base: "100%", lg: "80%", xl: "40%" }}
                maxH={{ base: "30%", lg: "50%", xl: "90%" }}
                margin={{ base: "auto", lg: "auto", xl: "auto" }}
              >
                <Box ml={{ base: "0rem", md: "4rem", xl: "5rem" }} mt={8}>
                  <Image
                    src="../src/assets/imgs/img_pago/niubiz1.png"
                    h="60px"
                    margin={30}
                  />
                </Box>
                <Box margin={59}>
                  <ModalHeader>
                    <Heading
                      fontSize={{ base: "18px", md: "10px", lg: "40px" }}
                      color="#00B5D8"
                      ml={{ base: "-3rem", lg: "0rem", xl: "2rem" }}
                      mt={{ base: "-4rem", lg: "-2rem", xl: "-3rem" }}
                    >
                      Nuestros Asesores le brindaran directamente el LINK.{" "}
                    </Heading>
                  </ModalHeader>
                </Box>
                <ModalCloseButton />
              </ModalContent>
            </Modal>
          </Card>

          <Card
            align="center"
            bg="#FFFFFF"
            borderRadius="full"
            border="3px solid"
            borderColor="#e2e8f0"
            width={{ base: "70%", md: "100%", lg: "100%" }}
            maxHeight="80px"
            margin="center"
          >
            <CardFooter>
              <Box bg="#FFFFFF" _hover={{ cursor: "pointer" }}>
                <Link href="https://www.paypal.com/paypalme/Itsperu" isExternal>
                  <Image
                    src="../src/assets/imgs/img_pago/paypal1.png"
                    h="35px"
                  />
                </Link>
              </Box>
            </CardFooter>
          </Card>

          <Card
            align="center"
            bg="#FFFFFF"
            borderRadius="full"
            border="3px solid"
            borderColor="#e2e8f0"
            width={{ base: "70%", md: "100%", lg: "100%" }}
            maxHeight="80px"
            margin="center"
          >
            <CardFooter>
              <Box
                bg="#FFFFFF"
                onClick={openModal7}
                _hover={{ cursor: "pointer" }}
              >
                <Image src="../src/assets/imgs/img_pago/plin1.png" h="35px" />
              </Box>
            </CardFooter>
            <Modal
              isOpen={isOpen7}
              onClose={closeModal7}
              blockScrollOnMount={false}
            >
              <ModalOverlay bg="rgba(0, 0, 0, 0.8)" />
              <ModalContent
                maxW={{ base: "100%", lg: "80%", xl: "40%" }}
                maxH={{ base: "100%", lg: "100%", xl: "90%" }}
                margin={{ base: "auto", lg: "auto", xl: "auto" }}
              >
                <Box ml={{ base: "0rem", md: "4rem", xl: "5rem" }} mt={8}>
                  <Image
                    src="../src/assets/imgs/img_pago/plin1.png"
                    h="100px"
                    margin={30}
                  />
                  <Heading
                    fontSize="35px"
                    color="#00B5D8"
                    mt={{ base: "2rem", lg: "2rem", xl: "2rem" }}
                    ml={{ base: "2rem", lg: "2rem", xl: "0rem" }}
                  >
                    Elmer Angel Chipana Quispe{" "}
                  </Heading>
                  <Text
                    fontSize="40"
                    mt={{ base: "0rem", lg: "0rem", xl: "0rem" }}
                    ml={{ base: "2rem", lg: "2rem", xl: "0rem" }}
                  >
                    954 101 100
                  </Text>
                  <Box as={Center}>
                    <Image
                      src="../src/assets/imgs/img_pago/qr_plin.png"
                      h="300px"
                      margin={30}
                    />
                  </Box>
                </Box>
                <ModalCloseButton />
              </ModalContent>
            </Modal>
          </Card>

          <Card
            align="center"
            bg="#FFFFFF"
            borderRadius="full"
            border="3px solid"
            borderColor="#e2e8f0"
            width={{ base: "70%", md: "100%", lg: "100%" }}
            maxHeight="80px"
            margin="center"
          >
            <CardFooter>
              <Box
                bg="#FFFFFF"
                onClick={openModal8}
                _hover={{ cursor: "pointer" }}
              >
                <Image src="../src/assets/imgs/img_pago/yape1.png" h="35px" />
              </Box>
            </CardFooter>
            <Modal
              isOpen={isOpen8}
              onClose={closeModal8}
              blockScrollOnMount={false}
            >
              <ModalOverlay bg="rgba(0, 0, 0, 0.8)" />
              <ModalContent
                maxW={{ base: "100%", lg: "80%", xl: "40%" }}
                maxH={{ base: "100%", lg: "100%", xl: "90%" }}
                margin={{ base: "auto", lg: "auto", xl: "auto" }}
              >
                <Box ml={{ base: "0rem", md: "4rem", xl: "5rem" }} mt={8}>
                  <Image
                    src="../src/assets/imgs/img_pago/yape1.png"
                    h="100px"
                    margin={30}
                  />
                  <Heading
                    fontSize="35px"
                    color="#00B5D8"
                    mt={{ base: "2rem", lg: "2rem", xl: "2rem" }}
                    ml={{ base: "2rem", lg: "2rem", xl: "0rem" }}
                  >
                    Elmer Angel Chipana Quispe{" "}
                  </Heading>
                  <Text
                    fontSize="40"
                    mt={{ base: "0rem", lg: "0rem", xl: "0rem" }}
                    ml={{ base: "2rem", lg: "2rem", xl: "0rem" }}
                  >
                    954 101 100
                  </Text>
                  <Box as={Center}>
                    <Image
                      src="../src/assets/imgs/img_pago/qr_yape.png"
                      h="300px"
                      margin={30}
                    />
                  </Box>
                </Box>
                <ModalCloseButton />
              </ModalContent>
            </Modal>
          </Card>
        </SimpleGrid>
      </Box>
    </>
  );
};
