import React from "react";

import { Column, Img, Text, Input, Button, Row, Line } from "components";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { postLogin } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useForm from "hooks/useForm";

const LoginPage = () => {
  const [apiData1, setapiData1] = React.useState();
  const formValidationSchema = yup.object().shape({
    username: yup
      .string()
      .required("Username is required")
      .matches(
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Username is not in correct format"
      )
      .min(15, "Username must be minimum of length 15"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-._]).{8,}$/,
        "Password is not in correct format"
      ),
  });
  const form = useForm(
    { username: "", password: "" },
    {
      validate: true,
      validateSchema: formValidationSchema,
      validationOnChange: true,
    }
  );
  const navigate = useNavigate();

  function callApi1(data) {
    const req = { data: { ...data } };

    postLogin(req)
      .then((res) => {
        setapiData1(res);

        navigate("/dashboard", { state: { token: res?.data?.token } });
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong. Try again.");
      });
  }
  function handleNavigate6() {
    navigate("/signup");
  }

  return (
    <>
      <Column className="bg-gray_50 flex flex-col font-roboto items-center justify-start mx-[auto] md:p-[106px] p-[155px] sm:p-[15px] w-[100%]">
        <Column className="bg-white_A700 flex flex-col items-center justify-start max-w-[636px] ml-[auto] mr-[auto] sm:p-[15px] md:p-[55px] p-[80px] sm:pl-[15px] sm:pr-[15px] rounded-radius8 w-[100%]">
          <Img
            src="images/img_group.svg"
            className="max-w-[100%] sm:w-[100%] w-[52%]"
            alt="Group"
          />
          <Column className="flex flex-col items-center justify-start sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
            <Column className="bg-colors1 border-2 border-colors border-dotted flex flex-col items-center justify-start sm:pb-[3px] md:pb-[4px] pb-[6px] sm:px-[3px] md:px-[4px] px-[6px] rounded-radius25 w-[50%]">
              <Text className="text-black_900 w-[auto]" as="h1" variant="h1">
                Login
              </Text>
              <Text
                className="sm:mt-[11px] md:mt-[14px] mt-[21px] text-colors2 w-[auto]"
                as="h4"
                variant="h4"
              >
                Welcome Back
              </Text>
            </Column>
            <Column className="flex flex-col justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
              <Input
                className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                wrapClassName="w-[100%]"
                type="text"
                onChange={(e) => {
                  form.handleChange("username", e.target.value);
                }}
                errors={form?.errors?.username}
                value={form?.values?.username}
                name="frame9898"
                placeholder="Username"
              ></Input>
              <Input
                className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                wrapClassName="flex md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]"
                type="password"
                onChange={(e) => {
                  form.handleChange("password", e.target.value);
                }}
                errors={form?.errors?.password}
                value={form?.values?.password}
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
              <Text
                className="font-medium sm:ml-[139px] md:ml-[180px] ml-[262px] sm:mt-[11px] md:mt-[14px] mt-[21px] text-bluegray_400 w-[auto]"
                as="h5"
                variant="h5"
              >
                Forgot Password ?
              </Text>
            </Column>
            <Button
              className="common-pointer cursor-pointer font-semibold sm:mt-[17px] md:mt-[22px] mt-[32px] text-[18px] text-center text-white_A700 w-[100%]"
              onClick={() => {
                form.handleSubmit(callApi1);
              }}
              shape="RoundedBorder8"
              size="lg"
              variant="FillBlueA700"
            >
              Login
            </Button>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-gilroy items-start sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
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
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-roboto items-start justify-center sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[69%]">
              <Text
                className="font-normal not-italic text-black_900 w-[auto]"
                as="h5"
                variant="h5"
              >
                Don’t have an account ?
              </Text>
              <Text
                className="common-pointer font-bold ml-[4px] mt-[1px] text-blue_A700 w-[auto]"
                as="h5"
                variant="h5"
                onClick={handleNavigate6}
              >
                Register Now
              </Text>
            </Row>
          </Column>
        </Column>
      </Column>
      <ToastContainer />
    </>
  );
};

export default LoginPage;
