import { Container, HStack, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import { motion } from "framer-motion";


export const Images = () => {

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 6,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );

        }
    }
    return (
        <>
            <Container as="section" maxWidth="10xl" my={400} >
                <Slider {...settings}>
                    <div>
                        <img src="../src/assets/imgs/imag/aptim.png" />
                    </div>
                    <div>
                        <img src="../src/assets/imgs/imag/articruz.png" />
                    </div>
                    <div>
                        <img src="../src/assets/imgs/imag/audax.png" />
                    </div>
                    <div>
                        <img src="../src/assets/imgs/imag/camposol.png" />
                    </div>
                    <div>
                        <img src="../src/assets/imgs/imag/chinalco.png" />
                    </div>
                    <div>
                        <img src="../src/assets/imgs/imag/cooper.png" />
                    </div>
                    <div>
                        <img src="../src/assets/imgs/imag/crosland.png" />
                    </div>
                    <div>
                        <img src="../src/assets/imgs/imag/distriluz.png" />
                    </div>
                    <div>
                        <img src="../src/assets/imgs/imag/ecogal.png" />
                    </div>
                    <div>
                        <img src="../src/assets/imgs/imag/edeza.png" />
                    </div>
                    <div>
                        <img src="../src/assets/imgs/imag/esSalud.png" />
                    </div>
                    <div>
                        <img src="../src/assets/imgs/imag/ferreyros.png" />
                    </div>
                    <div>
                        <img src="../src/assets/imgs/imag/fff.png" />
                    </div>
                    <div>
                        <img src="../src/assets/imgs/imag/globaltec.png" />
                    </div>
                    <div>
                        <img src="../src/assets/imgs/imag/hortifrut.png" />
                    </div>
                    <div>
                        <img src="../src/assets/imgs/imag/ism.png" />
                    </div>
                    <div>
                        <img src="../src/assets/imgs/imag/malaga.png" />
                    </div>
                    <div>
                        <img src="../src/assets/imgs/imag/milpo.png" />
                    </div>
                    <div>
                        <img src="../src/assets/imgs/imag/minera.png" />
                    </div>
                    <div>
                        <img src="../src/assets/imgs/imag/nexa.png" />
                    </div>
                    <div>
                        <img src="../src/assets/imgs/imag/sanmartin.png" />
                    </div>
                    <div>
                        <img src="../src/assets/imgs/imag/talma.png" />
                    </div>
                    <div>
                        <img src="../src/assets/imgs/imag/tupemesa.png" />
                    </div>
                </Slider>
            </Container>
        </>
    )
}