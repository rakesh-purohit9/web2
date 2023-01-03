import React from "react";

import {
  Row,
  Column,
  Img,
  Text,
  Line,
  Radio,
  Input,
  Button,
  SelectBox,
  Grid,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import FoodItemCard from "components/FoodItemCard";
import { useNavigate } from "react-router-dom";

const GridPage = () => {
  const navigate = useNavigate();

  function handleNavigate2() {
    navigate("/dashboard");
  }
  function handleNavigate3() {
    navigate("/customer");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Row className="bg-gray_50 flex flex-row md:flex-wrap sm:flex-wrap font-roboto items-center mx-[auto] w-[100%]">
        <aside className="md:hidden sm:hidden w-[18%]">
          <div className="">
            <Column className="bg-white_A700 border border-bluegray_50 border-solid flex flex-col items-center justify-start md:py-[13px] sm:py-[15px] py-[19px] w-[100%]">
              <Img
                src="images/img_group_2.svg"
                className="max-w-[199px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]"
                alt="Group"
              />
              <Column className="flex flex-col items-center justify-start sm:mb-[393px] md:mb-[507px] mb-[738px] sm:mt-[25px] md:mt-[33px] mt-[48px] w-[100%]">
                <Row
                  className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap items-center p-[10px] sm:p-[5px] md:p-[6px] w-[100%]"
                  onClick={handleNavigate2}
                >
                  <Img
                    src="images/img_settings.svg"
                    className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[20px] sm:ml-[7px] md:ml-[9px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%] sm:w-[10px] md:w-[13px]"
                    alt="settings"
                  />
                  <Text
                    className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-bluegray_400"
                    as="h5"
                    variant="h5"
                  >
                    Dashboard
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] p-[10px] sm:p-[5px] md:p-[6px] w-[100%]">
                  <Img
                    src="images/img_music.svg"
                    className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[20px] sm:ml-[7px] md:ml-[9px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%] sm:w-[10px] md:w-[13px]"
                    alt="music"
                  />
                  <Text
                    className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-bluegray_400"
                    as="h5"
                    variant="h5"
                  >
                    Orders
                  </Text>
                </Row>
                <Row className="bg-blue_50 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] md:pr-[102px] pr-[149px] sm:pr-[15px] w-[100%]">
                  <Line className="bg-blue_A700 sm:h-[22px] md:h-[28px] h-[40px] max-w-[2px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]" />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center max-w-[77px] md:ml-[15px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_frame3805_20X20.svg"
                      className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="Frame3805"
                    />
                    <Text
                      className="flex-grow font-medium sm:ml-[4px] md:ml-[5px] ml-[8px] text-blue_A700"
                      as="h5"
                      variant="h5"
                    >
                      Menus
                    </Text>
                  </Row>
                </Row>
                <Row
                  className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] p-[10px] sm:p-[5px] md:p-[6px] w-[100%]"
                  onClick={handleNavigate3}
                >
                  <Img
                    src="images/img_user.svg"
                    className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[20px] sm:ml-[7px] md:ml-[9px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%] sm:w-[10px] md:w-[13px]"
                    alt="user"
                  />
                  <Text
                    className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-bluegray_400"
                    as="h5"
                    variant="h5"
                  >
                    Customer
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] p-[10px] sm:p-[5px] md:p-[6px] w-[100%]">
                  <Img
                    src="images/img_frame3807.svg"
                    className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[20px] sm:ml-[7px] md:ml-[9px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%] sm:w-[10px] md:w-[13px]"
                    alt="Frame3807"
                  />
                  <Text
                    className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-bluegray_400"
                    as="h5"
                    variant="h5"
                  >
                    Analytics
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] p-[10px] sm:p-[5px] md:p-[6px] w-[100%]">
                  <Img
                    src="images/img_contrast.svg"
                    className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[20px] sm:ml-[7px] md:ml-[9px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%] sm:w-[10px] md:w-[13px]"
                    alt="contrast"
                  />
                  <Text
                    className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-bluegray_400"
                    as="h5"
                    variant="h5"
                  >
                    Table
                  </Text>
                </Row>
                <Radio
                  value="Setting"
                  className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-[16px] text-bluegray_400 w-[100%]"
                  inputClassName="mr-[5px]"
                  checked={false}
                  name="Setting"
                  label="Setting"
                ></Radio>
              </Column>
            </Column>
          </div>
        </aside>
        <Column className="flex flex-col items-center max-w-[1190px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Column className="bg-white_A700 flex flex-col items-end justify-start md:p-[13px] sm:p-[15px] p-[20px] shadow-bs1 w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] mr-[10px] md:mr-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal not-italic p-[0] text-[12px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                wrapClassName="flex my-[1px] sm:mx-[0] sm:w-[100%] w-[40%]"
                name="Frame18345"
                placeholder="Search here"
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      className="cursor-pointer ml-[35px] mr-[1px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                      onClick={() => setInputvalue("")}
                      color="#74839d"
                    />
                  ) : (
                    <Img
                      src="images/img_search.svg"
                      className="cursor-pointer ml-[35px] mr-[1px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                      alt="search"
                    />
                  )
                }
                shape="srcRoundedBorder17"
                size="smSrc"
                variant="srcFillBluegray50"
              ></Input>
              <Button
                className="flex sm:h-[20px] md:h-[25px] h-[36px] items-center justify-center sm:ml-[15px] md:ml-[20px] ml-[30px] my-[1px] sm:w-[19px] md:w-[24px] w-[36px]"
                shape="icbRoundedBorder17"
                size="smIcn"
                variant="icbFillBluegray50"
              >
                <Img
                  src="images/img_lightbulb.svg"
                  className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                  alt="lightbulb"
                />
              </Button>
              <Button
                className="flex sm:h-[20px] md:h-[25px] h-[36px] items-center justify-center sm:ml-[15px] md:ml-[20px] ml-[30px] my-[1px] sm:w-[19px] md:w-[24px] w-[36px]"
                shape="icbRoundedBorder17"
                size="smIcn"
                variant="icbFillBluegray50"
              >
                <Img
                  src="images/img_user_36X36.svg"
                  className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                  alt="user One"
                />
              </Button>
              <Button
                className="cursor-pointer font-normal min-w-[29%] sm:ml-[15px] md:ml-[20px] ml-[30px] not-italic text-[16px] text-center text-white_A700 w-[max-content]"
                shape="RoundedBorder5"
                size="md"
                variant="FillBlueA700"
              >
                Hello, Lojusa
              </Button>
            </Row>
          </Column>
          <Column className="flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
              <Text className="text-bluegray_400 w-[auto]" as="h2" variant="h2">
                Categories
              </Text>
              <SelectBox
                className="font-normal sm:mx-[0] not-italic text-[12px] text-black_901 sm:w-[100%] w-[9%]"
                placeholderClassName="text-black_901"
                name="Frame18359"
                placeholder="Monthly"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_frame_3813.svg"
                    className="w-[10px] h-[10px] mr-[16px] sm:mr-[8px] sm:h-[6px] sm:w-[5px] md:mr-[11px] md:h-[7px] md:w-[6px] max-w-[100%]"
                    alt="Frame 3813"
                  />
                }
              ></SelectBox>
            </Row>
            <Grid className="gap-[0] grid grid-cols-1 md:grid-cols-2 min-h-[auto] sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                <FoodItemCard
                  className="bg-white_A700 flex flex-col items-center sm:mx-[0] p-[12px] sm:p-[6px] md:p-[8px] rounded-radius10 shadow-bs sm:w-[100%] w-[32%]"
                  imageSrc="images/img_monikagrabkows.png"
                  title="Pizza for kids "
                  orderCount="Total  Order : 250"
                  review="(Review 4.5 )"
                  price="Price:$32"
                  revenue="Revenue :$1000"
                />
                <FoodItemCard
                  className="bg-white_A700 flex flex-col items-center sm:mx-[0] p-[12px] sm:p-[6px] md:p-[8px] rounded-radius10 shadow-bs sm:w-[100%] w-[32%]"
                  imageSrc="images/img_monikagrabkows.png"
                  title="Pizza for kids "
                  orderCount="Total  Order : 250"
                  review="(Review 4.5 )"
                  price="Price:$32"
                  revenue="Revenue :$1000"
                />
                <FoodItemCard
                  className="bg-white_A700 flex flex-col items-center sm:mx-[0] p-[12px] sm:p-[6px] md:p-[8px] rounded-radius10 shadow-bs sm:w-[100%] w-[32%]"
                  imageSrc="images/img_monikagrabkows.png"
                  title="Pizza for kids "
                  orderCount="Total  Order : 250"
                  review="(Review 4.5 )"
                  price="Price:$32"
                  revenue="Revenue :$1000"
                />
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                <FoodItemCard
                  className="bg-white_A700 flex flex-col items-center sm:mx-[0] p-[12px] sm:p-[6px] md:p-[8px] rounded-radius10 shadow-bs sm:w-[100%] w-[32%]"
                  imageSrc="images/img_monikagrabkows.png"
                  title="Pizza for kids "
                  orderCount="Total  Order : 250"
                  review="(Review 4.5 )"
                  price="Price:$32"
                  revenue="Revenue :$1000"
                />
                <FoodItemCard
                  className="bg-white_A700 flex flex-col items-center sm:mx-[0] p-[12px] sm:p-[6px] md:p-[8px] rounded-radius10 shadow-bs sm:w-[100%] w-[32%]"
                  imageSrc="images/img_monikagrabkows.png"
                  title="Pizza for kids "
                  orderCount="Total  Order : 250"
                  review="(Review 4.5 )"
                  price="Price:$32"
                  revenue="Revenue :$1000"
                />
                <FoodItemCard
                  className="bg-white_A700 flex flex-col items-center sm:mx-[0] p-[12px] sm:p-[6px] md:p-[8px] rounded-radius10 shadow-bs sm:w-[100%] w-[32%]"
                  imageSrc="images/img_monikagrabkows.png"
                  title="Pizza for kids "
                  orderCount="Total  Order : 250"
                  review="(Review 4.5 )"
                  price="Price:$32"
                  revenue="Revenue :$1000"
                />
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                <FoodItemCard
                  className="bg-white_A700 flex flex-col items-center sm:mx-[0] p-[12px] sm:p-[6px] md:p-[8px] rounded-radius10 shadow-bs sm:w-[100%] w-[32%]"
                  imageSrc="images/img_monikagrabkows.png"
                  title="Pizza for kids "
                  orderCount="Total  Order : 250"
                  review="(Review 4.5 )"
                  price="Price:$32"
                  revenue="Revenue :$1000"
                />
                <FoodItemCard
                  className="bg-white_A700 flex flex-col items-center sm:mx-[0] p-[12px] sm:p-[6px] md:p-[8px] rounded-radius10 shadow-bs sm:w-[100%] w-[32%]"
                  imageSrc="images/img_monikagrabkows.png"
                  title="Pizza for kids "
                  orderCount="Total  Order : 250"
                  review="(Review 4.5 )"
                  price="Price:$32"
                  revenue="Revenue :$1000"
                />
                <FoodItemCard
                  className="bg-white_A700 flex flex-col items-center sm:mx-[0] p-[12px] sm:p-[6px] md:p-[8px] rounded-radius10 shadow-bs sm:w-[100%] w-[32%]"
                  imageSrc="images/img_monikagrabkows.png"
                  title="Pizza for kids "
                  orderCount="Total  Order : 250"
                  review="(Review 4.5 )"
                  price="Price:$32"
                  revenue="Revenue :$1000"
                />
              </Row>
            </Grid>
          </Column>
        </Column>
      </Row>
    </>
  );
};

export default GridPage;
