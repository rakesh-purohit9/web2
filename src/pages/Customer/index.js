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
  List,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";
import { getPosts } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomerPage = () => {
  const [apiData, setapiData] = React.useState();
  const navigate = useNavigate();
  React.useEffect(() => {
    callApi();
  }, []);

  function callApi() {
    const req = {};

    getPosts(req)
      .then((res) => {
        setapiData(res);

        toast.success("Fetched data successfully!");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error!");
      });
  }
  function handleNavigate() {
    navigate("/dashboard");
  }
  function handleNavigate1() {
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
                src="images/img_group_1.svg"
                className="max-w-[199px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]"
                alt="Group"
              />
              <Column className="flex flex-col items-center justify-start sm:mb-[300px] md:mb-[388px] mb-[564px] sm:mt-[25px] md:mt-[33px] mt-[48px] w-[100%]">
                <Row
                  className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap items-center p-[10px] sm:p-[5px] md:p-[6px] w-[100%]"
                  onClick={handleNavigate}
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
                <Row
                  className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] p-[10px] sm:p-[5px] md:p-[6px] w-[100%]"
                  onClick={handleNavigate1}
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
                <Row className="bg-blue_50 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] pr-[128px] sm:pr-[15px] md:pr-[88px] w-[100%]">
                  <Line className="bg-blue_A700 sm:h-[22px] md:h-[28px] h-[40px] max-w-[2px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]" />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center max-w-[98px] md:ml-[15px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_frame3806.svg"
                      className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="Frame3806"
                    />
                    <Text
                      className="flex-grow font-medium sm:ml-[4px] md:ml-[5px] ml-[8px] text-blue_A700"
                      as="h5"
                      variant="h5"
                    >
                      Customer
                    </Text>
                  </Row>
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
                  alt="user"
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
                Customer
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
            <Column className="flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
              <Column className="bg-white_A700 flex flex-col items-center justify-start md:p-[11px] sm:p-[15px] p-[16px] rounded-radius10 shadow-bs w-[100%]">
                <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
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
                        alt="user One"
                      />
                    </Row>
                    <List
                      className="sm:gap-[17px] md:gap-[22px] gap-[32px] grid min-h-[auto] md:mt-[11px] mt-[16px] sm:mt-[8px] md:pt-[11px] pt-[16px] sm:pt-[8px] md:px-[11px] sm:px-[15px] px-[16px] w-[100%]"
                      orientation="vertical"
                    >
                      {apiData?.map((apiDataResponseEle, index) => {
                        return (
                          <React.Fragment key={`apiDataResponseEle${index}`}>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:px-[0] w-[100%]">
                              <Text
                                className="font-medium text-bluegray_900 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                {apiDataResponseEle?.id}
                              </Text>
                              <Text
                                className="font-medium sm:ml-[30px] md:ml-[39px] ml-[57px] text-bluegray_900 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                {apiDataResponseEle?.userId}
                              </Text>
                              <Text
                                className="font-medium sm:ml-[41px] md:ml-[52px] ml-[77px] text-bluegray_900 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                {apiDataResponseEle?.title}
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
                            {index < apiData?.length - 1 && (
                              <Line className="self-center w-[100%] h-[1px] bg-blue_51" />
                            )}
                          </React.Fragment>
                        );
                      })}
                    </List>
                  </Column>
                </Column>
              </Column>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]">
                <Text
                  className="font-medium text-bluegray_400 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Displaying 10 Out of 250
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-montserrat items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
                  <Text
                    className="flex-grow font-medium text-bluegray_400"
                    as="h6"
                    variant="h6"
                  >
                    10-250
                  </Text>
                  <Img
                    src="images/img_videocamera_30X60.svg"
                    className="flex-shrink-0 max-w-[100%] sm:w-[100%] w-[49%]"
                    alt="videocamera"
                  />
                </Row>
              </Row>
            </Column>
          </Column>
        </Column>
      </Row>
      <ToastContainer />
    </>
  );
};

export default CustomerPage;
