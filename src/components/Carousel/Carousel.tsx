import carouselImageOne from "../../img/carousel/img1.jpg"
import carouselImageTen from "../../img/carousel/img10.jpg"
import carouselImageEleven from "../../img/carousel/img11.jpg"
import carouselImageTwelve from "../../img/carousel/img12.jpg"
import carouselImageThirteen from "../../img/carousel/img13.png"
import carouselImageFourteen from "../../img/carousel/img14.png"
import carouselImageTwo from "../../img/carousel/img2.jpg"
import carouselImageThree from "../../img/carousel/img3.jpg"
import carouselImageFour from "../../img/carousel/img4.jpg"
import carouselImageFive from "../../img/carousel/img5.png"
import carouselImageSix from "../../img/carousel/img6.png"
import carouselImageSeven from "../../img/carousel/img7.jpg"
import carouselImageEight from "../../img/carousel/img8.jpg"
import carouselImageNine from "../../img/carousel/img9.jpg"
import {
  CarouselContainer,
  CarouselItem,
  CarouselTrack,
} from "./Carousel.styled"

// Assets

const Carousel = () => {
  // Crear un array de 8 imágenes
  const images = [
    carouselImageOne,
    carouselImageTwo,
    carouselImageThree,
    carouselImageFour,
    carouselImageFive,
    carouselImageSix,
    carouselImageSeven,
    carouselImageEight,
    carouselImageNine,
    carouselImageTen,
    carouselImageEleven,
    carouselImageTwelve,
    carouselImageThirteen,
    carouselImageFourteen,
  ]

  return (
    <CarouselContainer>
      <CarouselTrack>
        {images.map((image, index) => (
          <CarouselItem key={`carousel-item-${index}`}>
            <img src={image} alt={`Carousel panel ${index + 1}`} />
          </CarouselItem>
        ))}
        {/* Duplicamos las imágenes para crear el efecto infinito */}
        {images.map((image, index) => (
          <CarouselItem key={`carousel-item-duplicate-${index}`}>
            <img src={image} alt={`Carousel panel duplicate ${index + 1}`} />
          </CarouselItem>
        ))}
      </CarouselTrack>
    </CarouselContainer>
  )
}

export { Carousel }
