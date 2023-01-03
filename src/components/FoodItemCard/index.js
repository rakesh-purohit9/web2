import React from "react";

import { Column, Img, Row, Text, Button } from "components";

const FoodItemCard = (props) => {
  return (
    <>
      <Column className={props.className}>
        <Img
          src={props?.imageSrc}
          className="max-w-[100%] rounded-radius10 w-[100%]"
          alt="monikagrabkows"
        />
        <Column className="flex flex-col justify-start mt-[12px] sm:mt-[6px] md:mt-[8px] sm:w-[100%] w-[97%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
            <Text className="font-medium font-roboto text-[14px] text-bluegray_400 w-[auto]">
              {props?.title}
            </Text>
            <Text className="font-medium font-roboto text-[14px] text-bluegray_400 w-[auto]">
              {props?.orderCount}
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[46%]">
            <Img
              src="images/img_frame9906.svg"
              className="flex-shrink-0 max-w-[100%] my-[3px] sm:w-[100%] w-[46%]"
              alt="Frame9906"
            />
            <Text className="flex-grow font-medium font-roboto sm:ml-[4px] md:ml-[6px] ml-[9px] text-[12px] text-bluegray_400">
              {props?.review}
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]">
            <Button
              className="bg-blue_A700 cursor-pointer font-medium font-roboto min-w-[26%] px-[11px] sm:px-[5px] md:px-[7px] sm:py-[3px] md:py-[4px] py-[7px] rounded-radius2 text-[14px] text-center text-white_A700 w-[max-content]"
              shape="RoundedBorder2"
              size="PaddingAll7"
              variant="FillBlueA700"
              fontStyle="RobotoMedium14"
            >
              {props?.price}
            </Button>
            <Text className="font-medium font-roboto sm:my-[3px] md:my-[4px] my-[7px] text-[14px] text-bluegray_400 w-[auto]">
              {props?.revenue}
            </Text>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default FoodItemCard;
