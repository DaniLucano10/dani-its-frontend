import {
  Button,
  Card,
  CardFooter,
  Center,
  Container,
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
} from "@chakra-ui/react";
import { useState } from "react";

export const PaymentMethods = () => {
  //const { isOpen, onOpen, onClose, } = useDisclosure("");

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);

  const openModal1 = () => {
    setIsOpen1(true);
  }
  const closeModal1 = () => {
    setIsOpen1(false);
  }

  const openModal2 = () => {
    setIsOpen2(true);
  }
  const closeModal2 = () => {
    setIsOpen2(false);
  }

  const openModal3 = () => {
    setIsOpen3(true);
  }
  const closeModal3 = () => {
    setIsOpen3(false);
  }

  const openModal4 = () => {
    setIsOpen4(true);
  }
  const closeModal4 = () => {
    setIsOpen4(false);
  }

  const openModal5 = () => {
    setIsOpen5(true);
  }
  const closeModal5 = () => {
    setIsOpen5(false);
  }
 
  const openModal7 = () => {
    setIsOpen7(true);
  }
  const closeModal7 = () => {
    setIsOpen7(false);
  }
  const openModal8 = () => {
    setIsOpen8(true);
  }
  const closeModal8 = () => {
    setIsOpen8(false);
  }

  return (
    <>
      <Container as="section" maxWidth="8xl" my={400}>
        <Heading color="#09155f">METODOS DE PAGO</Heading>

        <SimpleGrid
          maxW="6xl"
          my="50"
          spacing={50}
          templateColumns="repeat(auto-fill, minmax(200px, 4fr))"
        >
          <Card align="center" bg="#FFFFFF">
            <CardFooter>
              <Button onClick={openModal1}>
                <Image src="../src/assets/imgs/img_pago/bbva1.png" h="35px" />
              </Button>
            </CardFooter>
            <Modal isOpen={isOpen1} onClose={closeModal1}>
              <ModalOverlay />
              <ModalContent maxWidth={600}>
                <Container>
                  <Image
                    src="../src/assets/imgs/img_pago/bbva1.png"
                    h="55px"
                    margin={30}
                  />
                </Container>
                <Container margin={59}>
                  <ModalHeader>
                    <Heading fontSize="40px" color="#00B5D8">
                      ITSYSTEMS PERU S.A.C.{" "}
                    </Heading>
                  </ModalHeader>
                </Container>
                <ModalCloseButton />
                <Container>
                  <ModalBody>
                    <Heading ontSize="35px" color="RGBA(0, 0, 0, 0.64)">
                      CUENTA CORRIENTE:
                    </Heading>
                    <Text fontSize="35px" color="RGBA(0, 0, 0, 0.64)">
                      0011 0127 0100037344
                    </Text>
                  </ModalBody>
                  <ModalBody>
                    <Heading fontSize="35px" color="RGBA(0, 0, 0, 0.64)">
                      CUENTA INTERBANCARIA:
                    </Heading>
                    <Text fontSize="35px" color="RGBA(0, 0, 0, 0.64)">
                      011 127 00010003734487
                    </Text>
                  </ModalBody>
                </Container>
              </ModalContent>
            </Modal>
          </Card>


          <Card align="center">
            <CardFooter>
              <Button onClick={openModal2}>
                <Image src="../src/assets/imgs/img_pago/bcp1.png" h="35px" />
              </Button>
            </CardFooter>
            <Modal isOpen={isOpen2} onClose={closeModal2}>
              <ModalOverlay />
              <ModalContent maxWidth={600}>
                <Container>
                  <Image
                    src="../src/assets/imgs/img_pago/bcp1.png"
                    h="55px"
                    margin={30}
                  />
                </Container>
                <Container margin={59}>
                  <ModalHeader>
                    <Heading fontSize="40px" color="#00B5D8">
                      ITSYSTEMS PERU S.A.C.{" "}
                    </Heading>
                  </ModalHeader>
                </Container>
                <ModalCloseButton />
                <Container>
                  <ModalBody>
                    <Heading ontSize="35px" color="RGBA(0, 0, 0, 0.64)">
                      CUENTA CORRIENTE:
                    </Heading>
                    <Text fontSize="35px" color="RGBA(0, 0, 0, 0.64)">
                      191 2526660 0 17
                    </Text>
                  </ModalBody>
                  <ModalBody>
                    <Heading fontSize="35px" color="RGBA(0, 0, 0, 0.64)">
                      CUENTA INTERBANCARIA:
                    </Heading>
                    <Text fontSize="35px" color="RGBA(0, 0, 0, 0.64)">
                      002 191 00252666001757
                    </Text>
                  </ModalBody>
                </Container>
              </ModalContent>
            </Modal>
          </Card>

          <Card align="center">
            <CardFooter>
              <Button onClick={openModal3}>
                <Image src="../src/assets/imgs/img_pago/interbank1.png" h="35px" />
              </Button>
            </CardFooter>
            <Modal isOpen={isOpen3} onClose={closeModal3}>
              <ModalOverlay />
              <ModalContent maxWidth={600}>
                <Container>
                  <Image
                    src="../src/assets/imgs/img_pago/interbank1.png"
                    h="55px"
                    margin={30}
                  />
                </Container>
                <Container margin={59}>
                  <ModalHeader>
                    <Heading fontSize="40px" color="#00B5D8">
                      Elmer Angel Chipana Quispe{" "}
                    </Heading>
                  </ModalHeader>
                </Container>
                <ModalCloseButton />
                <Container>
                  <ModalBody>
                    <Heading ontSize="35px" color="RGBA(0, 0, 0, 0.64)">
                      CUENTA DE AHORROS:
                    </Heading>
                    <Text fontSize="35px" color="RGBA(0, 0, 0, 0.64)">
                      205 3103225977
                    </Text>
                  </ModalBody>
                  <ModalBody>
                    <Heading fontSize="35px" color="RGBA(0, 0, 0, 0.64)">
                      CUENTA INTERBANCARIA:
                    </Heading>
                    <Text fontSize="35px" color="RGBA(0, 0, 0, 0.64)">
                      003 205 013103225977 25
                    </Text>
                  </ModalBody>
                </Container>
              </ModalContent>
            </Modal>
          </Card>

          <Card align="center">
            <CardFooter>
              <Button onClick={openModal4}>
                <Image src="../src/assets/imgs/img_pago/scotiabank1.png" h="35px" />
              </Button>
            </CardFooter>
            <Modal isOpen={isOpen4} onClose={closeModal4}>
              <ModalOverlay />
              <ModalContent maxWidth={600}>
                <Container>
                  <Image
                    src="../src/assets/imgs/img_pago/SCOTIABANK1.png"
                    h="55px"
                    margin={30}
                  />
                </Container>
                <Container margin={59}>
                  <ModalHeader>
                    <Heading fontSize="40px" color="#00B5D8">
                      Elmer Angel Chipana Quispe{" "}
                    </Heading>
                  </ModalHeader>
                </Container>
                <ModalCloseButton />
                <Container>
                  <ModalBody>
                    <Heading ontSize="35px" color="RGBA(0, 0, 0, 0.64)">
                      CUENTA DE AHORROS:
                    </Heading>
                    <Text fontSize="35px" color="RGBA(0, 0, 0, 0.64)">
                      078 7312925
                    </Text>
                  </ModalBody>
                  <ModalBody>
                    <Heading fontSize="35px" color="RGBA(0, 0, 0, 0.64)">
                      CUENTA INTERBANCARIA:
                    </Heading>
                    <Text fontSize="35px" color="RGBA(0, 0, 0, 0.64)">
                      009 254 200787312925 41
                    </Text>
                  </ModalBody>
                </Container>
              </ModalContent>
            </Modal>
          </Card>

          <Card align="center">
            <CardFooter>
              <Button onClick={openModal5}>
                <Image src="../src/assets/imgs/img_pago/niubiz1.png" h="35px" />
              </Button>
            </CardFooter>
            <Modal isOpen={isOpen5} onClose={closeModal5}>
              <ModalOverlay />
              <ModalContent maxWidth={600}>
                <Container>
                  <Image
                    src="../src/assets/imgs/img_pago/niubiz1.png"
                    h="55px"
                    margin={30}
                  />
                </Container>
                <Container margin={59}>
                  <ModalHeader>
                    <Heading fontSize="40px" color="#00B5D8">
                      Nuestros Asesores le brindaran directamente el LINK.{" "}
                    </Heading>
                  </ModalHeader>
                </Container>
                <ModalCloseButton />
                <Container>
                  <ModalBody>
                    <Heading ontSize="35px" color="RGBA(0, 0, 0, 0.64)">

                    </Heading>
                    <Text fontSize="35px" color="RGBA(0, 0, 0, 0.64)">

                    </Text>
                  </ModalBody>
                  <ModalBody>
                    <Heading fontSize="35px" color="RGBA(0, 0, 0, 0.64)">

                    </Heading>
                    <Text fontSize="35px" color="RGBA(0, 0, 0, 0.64)">

                    </Text>
                  </ModalBody>
                </Container>
              </ModalContent>
            </Modal>
          </Card>

          <Card align="center">
            <CardFooter>
              <Button >
                <Link href="https://www.paypal.com/paypalme/Itsperu" isExternal>
                  <Image src="../src/assets/imgs/img_pago/paypal1.png" h="35px" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card align="center">

            <CardFooter>
              <Button onClick={openModal7}>
                <Image src="../src/assets/imgs/img_pago/plin1.png" h="35px" />
              </Button>
            </CardFooter>
            <Modal isOpen={isOpen7} onClose={closeModal7}>
              <ModalOverlay />
              <ModalContent maxWidth={600}>
                <Container>
                  <Image
                    src="../src/assets/imgs/img_pago/plin1.png"
                    h="100px"
                    margin={30}
                  />
                  <Heading fontSize="35px" color="#00B5D8">
                    Elmer Angel Chipana Quispe{" "}
                  </Heading>
                  <Text fontSize="40">954 101 100</Text>
                  <Container as={Center}>
                  <Image
                    src="../src/assets/imgs/img_pago/qr_plin.png"
                    h="300px"
                    margin={30}
                  />
                  </Container>

                </Container>
              </ModalContent>
            </Modal>
          </Card>

          <Card align="center">
            <CardFooter>
              <Button onClick={openModal8}>
                <Image src="../src/assets/imgs/img_pago/yape1.png" h="35px" />
              </Button>
            </CardFooter>
            <Modal isOpen={isOpen8} onClose={closeModal8}>
              <ModalOverlay />
              <ModalContent maxWidth={600}>
                <Container>
                  <Image
                    src="../src/assets/imgs/img_pago/yape1.png"
                    h="100px"
                    margin={30}
                  />
                  <Heading fontSize="35px" color="#00B5D8">
                    Elmer Angel Chipana Quispe{" "}
                  </Heading>
                  <Text fontSize="40">954 101 100</Text>
                  <Container as={Center}>
                    <Image
                      src="../src/assets/imgs/img_pago/qr_yape.png"
                      h="300px"
                      margin={30}
                    />
                  </Container>

                </Container>

              </ModalContent>
            </Modal>
          </Card>


        </SimpleGrid>
      </Container>
    </>
  );
};
