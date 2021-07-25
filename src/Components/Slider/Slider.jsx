/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SamplePrevArrow, SampleNextArrow } from "./sliderArrows";
import { SLIDER_CONTENT } from "../../constants/sliderContent";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const StyledSlider = styled(Slider)`
  .slick-next::before {
    right: 5px;
    content: "";
  }
  .slick-prev::before {
    content: "";
    left: 5px;
  }
`;

export function SimpleSlider() {
  return (
    <div>
      <StyledSlider {...settings}>
        {SLIDER_CONTENT.map((link) => (
          <div key={link.id}>
            <img width="100%" alt="top" src={link.link} />
          </div>
        ))}
      </StyledSlider>
    </div>
  );
}
