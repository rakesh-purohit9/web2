import React from "react";

import {
  Row,
  Column,
  Img,
  Line,
  Text,
  Radio,
  Input,
  Button,
  List,
  SelectBox,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import {
  ComposedChart,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  Bar,
} from "recharts";
import { ComposedData } from "./chartData.js";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  function handleNavigate4() {
    navigate("/customer");
  }
  function handleNavigate5() {
    navigate("/grid");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Row className="bg-gray_50 flex flex-row md:flex-wrap sm:flex-wrap font-roboto items-center mx-[auto] w-[100%]">
        <aside className="md:hidden sm:hidden w-[18%]">
          <div className="">
            <Column className="bg-white_A700 border border-bluegray_50 border-solid flex flex-col items-center justify-start md:py-[13px] sm:py-[15px] py-[19px] w-[100%]">
              <Img
                src="images/img_group_42X199.svg"
                className="max-w-[199px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]"
                alt="Group"
              />
              <Column className="flex flex-col items-center justify-start sm:mb-[326px] md:mb-[421px] mb-[613px] sm:mt-[25px] md:mt-[33px] mt-[48px] w-[100%]">
                <Row className="bg-blue_50 flex flex-row md:flex-wrap sm:flex-wrap items-center pr-[120px] sm:pr-[15px] md:pr-[82px] w-[100%]">
                  <Line className="bg-blue_A700 sm:h-[22px] md:h-[28px] h-[40px] max-w-[2px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]" />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center max-w-[106px] md:ml-[15px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_videocamera.svg"
                      className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="videocamera"
                    />
                    <Text
                      className="flex-grow font-medium sm:ml-[4px] md:ml-[5px] ml-[8px] text-blue_A700"
                      as="h5"
                      variant="h5"
                    >
                      Dashboard
                    </Text>
                  </Row>
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
                <Row
                  className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] p-[10px] sm:p-[5px] md:p-[6px] w-[100%]"
                  onClick={handleNavigate5}
                >
                  <Img
                    src="images/img_frame3805.svg"
                    className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[20px] sm:ml-[7px] md:ml-[9px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%] sm:w-[10px] md:w-[13px]"
                    alt="Frame3805"
                  />
                  <Text
                    className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-bluegray_400"
                    as="h5"
                    variant="h5"
                  >
                    Menus
                  </Text>
                </Row>
                <Row
                  className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] p-[10px] sm:p-[5px] md:p-[6px] w-[100%]"
                  onClick={handleNavigate4}
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
                name="frame18345"
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
          <Column className="flex flex-col justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
            <Text className="text-bluegray_400 w-[auto]" as="h2" variant="h2">
              Dashboard
            </Text>
            <List
              className="sm:gap-[15px] md:gap-[20px] gap-[30px] grid md:grid-cols-2 sm:grid-cols-2 grid-cols-4 min-h-[auto] sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]"
              orientation="horizontal"
            >
              <Column className="bg-white_A700 flex flex-col justify-start p-[13px] sm:p-[6px] md:p-[8px] rounded-radius10 shadow-bs w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:justify-center ml-[11px] md:ml-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                  <Button
                    className="flex sm:h-[35px] md:h-[45px] h-[64px] items-center justify-center rounded-radius50 sm:w-[34px] md:w-[44px] w-[64px]"
                    size="mdIcn"
                    variant="icbFillBlue51"
                  >
                    <Img
                      src="images/img_menu.svg"
                      className="h-[32px] sm:h-[18px] md:h-[23px] flex items-center justify-center"
                      alt="menu"
                    />
                  </Button>
                  <Column className="flex flex-col sm:items-center ml-[13px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
                    <Text
                      className="text-blue_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      2560
                    </Text>
                    <Text
                      className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-bluegray_400 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Total Menus
                    </Text>
                  </Column>
                </Row>
              </Column>
              <Column className="bg-white_A700 flex flex-col justify-start p-[13px] sm:p-[6px] md:p-[8px] rounded-radius10 shadow-bs w-[100%]">
                <Row className="flex sm:flex sm:flex-col flex-row md:flex-wrap sm:flex-wrap items-center sm:items-center ml-[11px] md:ml-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                  <Button
                    className="flex sm:h-[35px] md:h-[45px] h-[64px] items-center justify-center rounded-radius50 sm:w-[34px] md:w-[44px] w-[64px]"
                    size="mdIcn"
                    variant="icbFillBlue51"
                  >
                    <Img
                      src="images/img_file.svg"
                      className="h-[32px] sm:h-[18px] md:h-[23px] flex items-center justify-center"
                      alt="file"
                    />
                  </Button>
                  <Column className="flex sm:flex flex-col sm:flex-col sm:items-center ml-[13px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[54%]">
                    <Text
                      className="text-blue_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      $87,256
                    </Text>
                    <Text
                      className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-bluegray_400 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Total Revenue
                    </Text>
                  </Column>
                </Row>
              </Column>
              <Column className="bg-white_A700 flex flex-col justify-start p-[13px] sm:p-[6px] md:p-[8px] rounded-radius10 shadow-bs w-[100%]">
                <Row className="flex sm:flex sm:flex-col flex-row md:flex-wrap sm:flex-wrap items-center sm:items-center ml-[11px] md:ml-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
                  <Button
                    className="flex sm:h-[35px] md:h-[45px] h-[64px] items-center justify-center rounded-radius50 sm:w-[34px] md:w-[44px] w-[64px]"
                    size="mdIcn"
                    variant="icbFillBlue51"
                  >
                    <Img
                      src="images/img_clock.svg"
                      className="h-[32px] sm:h-[18px] md:h-[23px] flex items-center justify-center"
                      alt="clock"
                    />
                  </Button>
                  <Column className="flex sm:flex flex-col sm:flex-col sm:items-center ml-[13px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[56%]">
                    <Text
                      className="text-blue_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      2560
                    </Text>
                    <Text
                      className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-bluegray_400 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Total Customer
                    </Text>
                  </Column>
                </Row>
              </Column>
              <Column className="bg-white_A700 flex flex-col justify-start p-[13px] sm:p-[6px] md:p-[8px] rounded-radius10 shadow-bs w-[100%]">
                <Row className="flex sm:flex sm:flex-col flex-row md:flex-wrap sm:flex-wrap items-center sm:items-center ml-[11px] md:ml-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                  <Button
                    className="flex sm:h-[35px] md:h-[45px] h-[64px] items-center justify-center rounded-radius50 sm:w-[34px] md:w-[44px] w-[64px]"
                    size="mdIcn"
                    variant="icbFillBlue51"
                  >
                    <Img
                      src="images/img_frame18351.svg"
                      className="h-[32px] sm:h-[18px] md:h-[23px] flex items-center justify-center"
                      alt="Frame18351"
                    />
                  </Button>
                  <Column className="flex sm:flex flex-col sm:flex-col sm:items-center ml-[13px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                    <Text
                      className="text-blue_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      2560
                    </Text>
                    <Text
                      className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-bluegray_400 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Total Orders
                    </Text>
                  </Column>
                </Row>
              </Column>
            </List>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
              <Column className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[19px] p-[29px] rounded-radius10 shadow-bs sm:w-[100%] w-[61%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[1px] sm:px-[0] w-[100%]">
                  <Text
                    className="font-medium text-bluegray_400 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Revenue
                  </Text>
                  <SelectBox
                    className="font-normal sm:mx-[0] not-italic text-[12px] text-black_901 sm:w-[100%] w-[15%]"
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
                <div className="flex flex-row md:flex-wrap sm:flex-wrap sm:h-[127px] md:h-[164px] h-[237px] items-start sm:mb-[3px] md:mb-[4px] mb-[7px] sm:mt-[18px] md:mt-[23px] mt-[34px] pt-[4px] sm:px-[0] w-[100%]">
                  <ResponsiveContainer>
                    <ComposedChart data={ComposedData}>
                      <RechartsTooltip />

                      <Bar dataKey="c0" fill="#ff8080" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </Column>
              <Column className="bg-white_A700 flex flex-col mt-[1px] sm:mx-[0] sm:p-[15px] md:p-[16px] p-[24px] rounded-radius10 shadow-bs sm:w-[100%] w-[38%]">
                <Text
                  className="font-medium text-bluegray_400 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Daily Trending Menus
                </Text>
                <List
                  className="sm:gap-[10px] md:gap-[13px] gap-[20px] grid min-h-[auto] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                      <Img
                        src="images/img_eaterscollecti.png"
                        className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] rounded-radius5 sm:w-[26px] md:w-[34px] w-[50px]"
                        alt="eaterscollecti"
                      />
                      <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                        <Text
                          className="font-medium leading-[16.00px] md:leading-[normal] sm:leading-[normal] text-black_901 w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          Sweet cheesy pizza for kids Meal (small)
                        </Text>
                        <Text
                          className="font-bold sm:mt-[4px] md:mt-[5px] mt-[8px] text-blue_A700 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          $5.6
                        </Text>
                      </Column>
                    </Row>
                    <Column className="flex flex-col sm:h-[29px] md:h-[37px] h-[53px] items-end justify-start sm:w-[28px] md:w-[36px] w-[53px]">
                      <Text
                        className="flex items-center text-blue_A700 w-[auto]"
                        variant="body1"
                      >
                        #1
                      </Text>
                      <Text
                        className="sm:mt-[13px] md:mt-[17px] mt-[26px] text-bluegray_400 w-[auto]"
                        variant="body1"
                      >
                        Order 56x{" "}
                      </Text>
                    </Column>
                  </Row>
                  <Line className="self-center w-[100%] h-[1px] bg-blue_51" />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                      <Img
                        src="images/img_eaterscollecti_50X50.png"
                        className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] rounded-radius5 sm:w-[26px] md:w-[34px] w-[50px]"
                        alt="eaterscollecti One"
                      />
                      <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                        <Text
                          className="font-medium leading-[16.00px] md:leading-[normal] sm:leading-[normal] text-black_901 w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          Sweet cheesy pizza for kids Meal (small)
                        </Text>
                        <Text
                          className="font-bold sm:mt-[4px] md:mt-[5px] mt-[8px] text-blue_A700 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          $5.6
                        </Text>
                      </Column>
                    </Row>
                    <Column className="flex flex-col sm:h-[29px] md:h-[37px] h-[53px] items-end justify-start sm:w-[28px] md:w-[36px] w-[53px]">
                      <Text className="text-blue_A700 w-[auto]" variant="body1">
                        #2
                      </Text>
                      <Text
                        className="sm:mt-[13px] md:mt-[17px] mt-[26px] text-bluegray_400 w-[auto]"
                        variant="body1"
                      >
                        Order 56x{" "}
                      </Text>
                    </Column>
                  </Row>
                  <Line className="self-center w-[100%] h-[1px] bg-blue_51" />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                      <Img
                        src="images/img_eaterscollecti_1.png"
                        className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] rounded-radius5 sm:w-[26px] md:w-[34px] w-[50px]"
                        alt="eaterscollecti Two"
                      />
                      <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                        <Text
                          className="font-medium leading-[16.00px] md:leading-[normal] sm:leading-[normal] text-black_901 w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          Sweet cheesy pizza for kids Meal (small)
                        </Text>
                        <Text
                          className="font-bold sm:mt-[4px] md:mt-[5px] mt-[8px] text-blue_A700 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          $5.6
                        </Text>
                      </Column>
                    </Row>
                    <Column className="flex flex-col sm:h-[29px] md:h-[37px] h-[53px] items-end justify-start sm:w-[28px] md:w-[36px] w-[53px]">
                      <Text className="text-blue_A700 w-[auto]" variant="body1">
                        #3
                      </Text>
                      <Text
                        className="sm:mt-[13px] md:mt-[17px] mt-[26px] text-bluegray_400 w-[auto]"
                        variant="body1"
                      >
                        Order 56x{" "}
                      </Text>
                    </Column>
                  </Row>
                  <Line className="self-center w-[100%] h-[1px] bg-blue_51" />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                      <Img
                        src="images/img_eaterscollecti_2.png"
                        className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] rounded-radius5 sm:w-[26px] md:w-[34px] w-[50px]"
                        alt="eaterscollecti Three"
                      />
                      <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                        <Text
                          className="font-medium leading-[16.00px] md:leading-[normal] sm:leading-[normal] text-black_901 w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          Sweet cheesy pizza for kids Meal (small)
                        </Text>
                        <Text
                          className="font-bold sm:mt-[4px] md:mt-[5px] mt-[8px] text-blue_A700 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          $5.6
                        </Text>
                      </Column>
                    </Row>
                    <Column className="flex flex-col sm:h-[29px] md:h-[37px] h-[53px] items-end justify-start sm:w-[28px] md:w-[36px] w-[53px]">
                      <Text className="text-blue_A700 w-[auto]" variant="body1">
                        #4
                      </Text>
                      <Text
                        className="sm:mt-[13px] md:mt-[17px] mt-[26px] text-bluegray_400 w-[auto]"
                        variant="body1"
                      >
                        Order 56x{" "}
                      </Text>
                    </Column>
                  </Row>
                </List>
              </Column>
            </Row>
            <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] md:p-[11px] sm:p-[15px] p-[16px] rounded-radius10 shadow-bs w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                <Text
                  className="font-medium text-bluegray_400 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Customer
                </Text>
                <SelectBox
                  className="font-normal sm:mx-[0] not-italic text-[12px] text-black_901 sm:w-[100%] w-[9%]"
                  placeholderClassName="text-black_901"
                  name="Frame18358"
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
              <Column className="flex flex-col items-center justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                <Row className="bg-blue_51 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[4px] md:p-[5px] p-[8px] rounded-radius5 w-[100%]">
                  <Text
                    className="font-medium sm:ml-[4px] md:ml-[5px] ml-[8px] text-bluegray_700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Order ID{" "}
                  </Text>
                  <Text
                    className="font-medium sm:ml-[41px] md:ml-[53px] ml-[78px] text-bluegray_700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Date
                  </Text>
                  <Text
                    className="font-medium sm:ml-[106px] md:ml-[137px] ml-[200px] text-bluegray_700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Customer
                  </Text>
                  <Text
                    className="font-medium ml-[118px] sm:ml-[62px] md:ml-[81px] text-bluegray_700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Location
                  </Text>
                  <Text
                    className="font-medium md:ml-[120px] ml-[175px] sm:ml-[93px] text-bluegray_700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Total Spent
                  </Text>
                  <Text
                    className="font-medium sm:ml-[20px] md:ml-[26px] ml-[38px] text-bluegray_700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Last Order
                  </Text>
                </Row>
                <Column className="flex flex-col items-center justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                    <Text
                      className="font-medium text-bluegray_900 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      #01236556
                    </Text>
                    <Text
                      className="font-medium sm:ml-[30px] md:ml-[39px] ml-[57px] text-bluegray_900 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      21 June 2020, 12:42 AM
                    </Text>
                    <Text
                      className="font-medium sm:ml-[41px] md:ml-[52px] ml-[77px] text-bluegray_900 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Guy Hawkins
                    </Text>
                    <Text
                      className="font-medium ml-[101px] sm:ml-[53px] md:ml-[69px] text-bluegray_900 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      {" "}
                      35 Station Road London
                    </Text>
                    <Text
                      className="font-medium sm:ml-[40px] md:ml-[52px] ml-[76px] text-bluegray_900 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $82.46
                    </Text>
                    <Text
                      className="font-medium sm:ml-[34px] md:ml-[44px] ml-[65px] text-bluegray_900 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $48.36
                    </Text>
                    <Img
                      src="images/img_user_20X20.svg"
                      className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] ml-[105px] sm:ml-[55px] md:ml-[72px] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="user Two"
                    />
                  </Row>
                  <List
                    className="sm:gap-[17px] md:gap-[22px] gap-[32px] grid min-h-[auto] md:mt-[11px] mt-[16px] sm:mt-[8px] md:pt-[11px] pt-[16px] sm:pt-[8px] md:px-[11px] sm:px-[15px] px-[16px] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:px-[0] w-[100%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        #01236556
                      </Text>
                      <Text
                        className="font-medium sm:ml-[30px] md:ml-[39px] ml-[57px] text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        21 June 2020, 12:42 AM
                      </Text>
                      <Text
                        className="font-medium sm:ml-[41px] md:ml-[52px] ml-[77px] text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Guy Hawkins
                      </Text>
                      <Text
                        className="font-medium ml-[101px] sm:ml-[53px] md:ml-[69px] text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        {" "}
                        35 Station Road London
                      </Text>
                      <Text
                        className="font-medium sm:ml-[40px] md:ml-[52px] ml-[76px] text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $82.46
                      </Text>
                      <Text
                        className="font-medium sm:ml-[34px] md:ml-[44px] ml-[65px] text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $48.36
                      </Text>
                      <Img
                        src="images/img_user_20X20.svg"
                        className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] ml-[105px] sm:ml-[55px] md:ml-[72px] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="user Three"
                      />
                    </Row>
                    <Line className="self-center w-[100%] h-[1px] bg-blue_51" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:px-[0] w-[100%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        #01236556
                      </Text>
                      <Text
                        className="font-medium sm:ml-[30px] md:ml-[39px] ml-[57px] text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        21 June 2020, 12:42 AM
                      </Text>
                      <Text
                        className="font-medium sm:ml-[41px] md:ml-[52px] ml-[77px] text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Guy Hawkins
                      </Text>
                      <Text
                        className="font-medium ml-[101px] sm:ml-[53px] md:ml-[69px] text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        {" "}
                        35 Station Road London
                      </Text>
                      <Text
                        className="font-medium sm:ml-[40px] md:ml-[52px] ml-[76px] text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $82.46
                      </Text>
                      <Text
                        className="font-medium sm:ml-[34px] md:ml-[44px] ml-[65px] text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $48.36
                      </Text>
                      <Img
                        src="images/img_user_20X20.svg"
                        className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] ml-[105px] sm:ml-[55px] md:ml-[72px] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="user Four"
                      />
                    </Row>
                    <Line className="self-center w-[100%] h-[1px] bg-blue_51" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:px-[0] w-[100%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        #01236556
                      </Text>
                      <Text
                        className="font-medium sm:ml-[30px] md:ml-[39px] ml-[57px] text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        21 June 2020, 12:42 AM
                      </Text>
                      <Text
                        className="font-medium sm:ml-[41px] md:ml-[52px] ml-[77px] text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Guy Hawkins
                      </Text>
                      <Text
                        className="font-medium ml-[101px] sm:ml-[53px] md:ml-[69px] text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        {" "}
                        35 Station Road London
                      </Text>
                      <Text
                        className="font-medium sm:ml-[40px] md:ml-[52px] ml-[76px] text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $82.46
                      </Text>
                      <Text
                        className="font-medium sm:ml-[34px] md:ml-[44px] ml-[65px] text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $48.36
                      </Text>
                      <Img
                        src="images/img_user_20X20.svg"
                        className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] ml-[105px] sm:ml-[55px] md:ml-[72px] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="user Five"
                      />
                    </Row>
                    <Line className="self-center w-[100%] h-[1px] bg-blue_51" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:px-[0] w-[100%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        #01236556
                      </Text>
                      <Text
                        className="font-medium sm:ml-[30px] md:ml-[39px] ml-[57px] text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        21 June 2020, 12:42 AM
                      </Text>
                      <Text
                        className="font-medium sm:ml-[41px] md:ml-[52px] ml-[77px] text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Guy Hawkins
                      </Text>
                      <Text
                        className="font-medium ml-[101px] sm:ml-[53px] md:ml-[69px] text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        {" "}
                        35 Station Road London
                      </Text>
                      <Text
                        className="font-medium sm:ml-[40px] md:ml-[52px] ml-[76px] text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $82.46
                      </Text>
                      <Text
                        className="font-medium sm:ml-[34px] md:ml-[44px] ml-[65px] text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $48.36
                      </Text>
                      <Img
                        src="images/img_user_20X20.svg"
                        className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] ml-[105px] sm:ml-[55px] md:ml-[72px] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="user Six"
                      />
                    </Row>
                  </List>
                </Column>
              </Column>
            </Column>
          </Column>
        </Column>
      </Row>
    </>
  );
};

export default DashboardPage;
