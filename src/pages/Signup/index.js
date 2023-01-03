import React from "react";

import { Column, Img, Text, Input, Button, Row, Line } from "components";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  function handleNavigate7() {
    navigate("/grid");
  }

  return (
    <>
      <Column className="bg-gray_50 flex flex-col items-center justify-start mx-[auto] p-[141px] sm:p-[15px] md:p-[97px] w-[100%]">
        <Column className="bg-white_A700 flex flex-col items-center justify-start max-w-[636px] mb-[1px] ml-[auto] mr-[auto] sm:p-[15px] md:p-[55px] p-[80px] sm:pl-[15px] sm:pr-[15px] rounded-radius8 w-[100%]">
          <Img
            src="images/img_group_53X247.svg"
            className="max-w-[100%] sm:w-[100%] w-[52%]"
            alt="Group"
          />
          <Column className="flex flex-col items-center justify-start sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
            <Column className="flex flex-col font-roboto items-center justify-start sm:pb-[3px] md:pb-[4px] pb-[6px] sm:px-[3px] md:px-[4px] px-[6px] w-[100%]">
              <Text className="text-black_900 w-[auto]" as="h1" variant="h1">
                Register
              </Text>
              <Text
                className="sm:mt-[11px] md:mt-[14px] mt-[21px] text-bluegray_700 w-[auto]"
                as="h4"
                variant="h4"
              >
                Welcome!
              </Text>
            </Column>
            <Column className="flex flex-col font-roboto items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
              <Input
                className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                wrapClassName="w-[100%]"
                type="text"
                name="frame9898"
                placeholder="Username"
              ></Input>
              <Input
                className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                wrapClassName="flex md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]"
                type="password"
                name="frame9899"
                placeholder="Confirm Password"
                suffix={
                  <Img
                    src="images/img_eye.svg"
                    className="ml-[35px] mr-[1px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                    alt="eye"
                  />
                }
              ></Input>
              <Input
                className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                wrapClassName="flex md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]"
                type="password"
                name="frame9898 One"
                placeholder="Password"
                suffix={
                  <Img
                    src="images/img_eye.svg"
                    className="ml-[35px] mr-[1px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                    alt="eye"
                  />
                }
              ></Input>
            </Column>
            <Button
              className="common-pointer cursor-pointer font-gilroy font-semibold sm:mt-[17px] md:mt-[22px] mt-[32px] text-[18px] text-center text-white_A700 w-[100%]"
              onClick={handleNavigate7}
              shape="RoundedBorder8"
              size="lg"
              variant="FillBlueA700"
            >
              Register
            </Button>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-gilroy sm:items-center items-start sm:justify-center sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
              <Line className="bg-bluegray_200 h-[0.5px] sm:mb-[4px] md:mb-[6px] mb-[9px] sm:mt-[3px] md:mt-[4px] mt-[6px] sm:w-[100%] w-[45%]" />
              <Text
                className="font-medium sm:ml-[4px] md:ml-[6px] ml-[9px] text-black_900 w-[auto]"
                as="h5"
                variant="h5"
              >
                or
              </Text>
              <Line className="bg-bluegray_200 h-[0.5px] sm:mb-[4px] md:mb-[6px] mb-[9px] sm:ml-[4px] md:ml-[6px] ml-[9px] sm:mt-[3px] md:mt-[4px] mt-[6px] sm:w-[100%] w-[45%]" />
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center sm:mt-[19px] md:mt-[24px] mt-[36px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[62%]">
              <Text
                className="font-inter font-normal mt-[1px] not-italic text-black_900 w-[auto]"
                as="h5"
                variant="h5"
              >
                Already have an account ?
              </Text>
              <Text
                className="font-bold font-roboto ml-[4px] text-blue_A700 w-[auto]"
                as="h5"
                variant="h5"
              >
                Login
              </Text>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default SignupPage;
