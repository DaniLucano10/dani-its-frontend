import { Button, Container, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Stack, Text, useDisclosure } from "@chakra-ui/react"
import { ModalHeader } from "react-bootstrap"


export const PaymentMethods = () => {

    const { isOpen, onOpen, onClose } = useDisclosure('')
    return (
        <>
            <Container as="section" maxWidth="8xl" my={-200}>
                <Heading color="#09155f">METODOS DE PAGO</Heading>

                <Stack as="section" maxWidth="7xl" my="105px" direction="row">

                    <Container as="section" maxWidth="7xl">
                        <Button onClick={onOpen}>
                            <Image
                                src="../src/assets/imgs/img_pago/bbva1.png"
                                h="35px"
                            />
                        </Button>

                        <Modal isOpen={isOpen} onClose={onClose} >
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
                                    <ModalHeader >
                                        <Heading fontSize="40px" color="#00B5D8">ITSYSTEMS PERU S.A.C.   </Heading>
                                    </ModalHeader>
                                </Container>
                                <ModalCloseButton />
                                <Container>
                                    <ModalBody>
                                        <Heading ontSize="35px" color="RGBA(0, 0, 0, 0.64)" >CUENTA CORRIENTE:</Heading>
                                        <Text fontSize="35px" color="RGBA(0, 0, 0, 0.64)">0011 0127 0100037344</Text>
                                    </ModalBody>
                                    <ModalBody>
                                        <Heading fontSize="35px" color="RGBA(0, 0, 0, 0.64)">CUENTA INTERBANCARIA:</Heading>
                                        <Text fontSize="35px" color="RGBA(0, 0, 0, 0.64)">011 127 00010003734487</Text>
                                    </ModalBody>
                                </Container>
                            </ModalContent>
                        </Modal>
                    </Container>
                    <Container as="section" maxWidth="7xl">
                        <Button onClick={onOpen}>
                            <Image
                                src="../src/assets/imgs/img_pago/bbva1.png"
                                h="35px"
                            />
                        </Button>

                        <Modal isOpen={isOpen} onClose={onClose} >
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
                                    <ModalHeader >
                                        <Heading fontSize="40px" color="#00B5D8">ITSYSTEMS PERU S.A.C.   </Heading>
                                    </ModalHeader>
                                </Container>
                                <ModalCloseButton />
                                <Container>
                                    <ModalBody>
                                        <Heading ontSize="35px" color="RGBA(0, 0, 0, 0.64)" >CUENTA CORRIENTE:</Heading>
                                        <Text fontSize="35px" color="RGBA(0, 0, 0, 0.64)">0011 0127 0100037344</Text>
                                    </ModalBody>
                                    <ModalBody>
                                        <Heading fontSize="35px" color="RGBA(0, 0, 0, 0.64)">CUENTA INTERBANCARIA:</Heading>
                                        <Text fontSize="35px" color="RGBA(0, 0, 0, 0.64)">011 127 00010003734487</Text>
                                    </ModalBody>
                                </Container>
                            </ModalContent>
                        </Modal>
                    </Container>

                    
                </Stack>
            </Container>
        </>
    )
}