import { Card, CardBody, Container, Heading, Image, Stack, Text } from "@chakra-ui/react"

export const Requeriment = () => {

    return (
        <>
            <Container as="section" maxWidth="8xl" my={350} >
                <Heading >REQUISITOS DE INSCRIPCÍON</Heading>
                <Text>Envia los siguientes requisitos a tu asesor comercial para formalizar la inscripción</Text>
                <Container as="section" maxWidth="6xl" my={50}>
                    <Stack direction="row">
                        <Card >
                            <CardBody>
                                <Text>Voucher o captura de pago</Text>
                                <Image
                                    boxSize="100px"
                                    src="../src/assets/imgs/voucher.jpg"
                                />
                            </CardBody>
                        </Card>

                        <Card >
                            <CardBody>
                                <Text>Correo electrónico personal</Text>
                                <Image
                                    boxSize="100px"
                                    src="../src/assets/imgs/correo.jpg"
                                />
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <Text>Foto de la parte frontal del DNI</Text>
                                <Image
                                    boxSize="100px"
                                    src="../src/assets/imgs/dni.jpg"
                                />
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <Text>Rellenar ficha de inscripción</Text>
                                <Image
                                    boxSize="100px"
                                    src="../src/assets/imgs/ficha.jpg"
                                />
                            </CardBody>
                        </Card>
                    </Stack>
                </Container>
            </Container>
        </>
    )
}