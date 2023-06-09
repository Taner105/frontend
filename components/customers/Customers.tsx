import { Container, Box, Button } from "@mui/material";
import Title from "../ui/Title";
import CustomerItem from "./CustomerItem";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { NextBtnProps, PrevBtnProps } from "../../types/CustomersTypes";

const Customers = () => {
  function NextBtn({ onClick }: NextBtnProps) {
    return (
      <Button
        sx={{
          position: "absolute",
          bottom: -60,
          left: { xs: "10%", md: "40%" },
          bgcolor: "primary.main",
          color: "#fff",
          mr: -2,
          ":hover": {
            backgroundColor: "primary.main",
            opacity: "70%",
            transition: "all",
            color: "#fff",
          },
        }}
        onClick={onClick}
      >
        <IoIosArrowBack />
      </Button>
    );
  }

  function PrevBtn({ onClick }: PrevBtnProps) {
    return (
      <Button
        sx={{
          position: "absolute",
          bottom: -60,
          right: { xs: "10%", md: "40%" },
          bgcolor: "primary.main",
          color: "#fff",
          ":hover": {
            backgroundColor: "primary.main",
            opacity: "70%",
            transition: "all",
            color: "#fff",
          },
        }}
        onClick={onClick}
      >
        <IoIosArrowForward />
      </Button>
    );
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    nextArrow: <NextBtn onClick={() => {}} />,
    prevArrow: <PrevBtn onClick={() => {}} />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Container sx={{ mb: 15 }}>
      <Box>
        <Title propStyle={{ textAlign: "center", fontSize: "40px" }}>
          What Says Our Customers{" "}
        </Title>
      </Box>
      <Slider {...settings}>
        <CustomerItem imgSrc="/client1.jpg" />
        <CustomerItem imgSrc="/client2.jpg" />
        <CustomerItem imgSrc="/client2.jpg" />
        <CustomerItem imgSrc="/client2.jpg" />
        <CustomerItem imgSrc="/client2.jpg" />
      </Slider>
    </Container>
  );
};

export default Customers;
