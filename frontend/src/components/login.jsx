import React, { useState, useEffect } from "react";
import {
  VStack,
  FormControl,
  Box,
  Text,
  Input,
  InputRightElement,
  Button,
  InputGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Spinner,
  HStack,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import { BiShow, BiHide } from "react-icons/bi";
import emailjs from "emailjs-com";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [passwordshow, setpasswordShow] = useState(false);
  const [otp, setotp] = useState();
  const [loading, setloading] = useState(false);
  const [sendingOtp, setsendingOtp] = useState(false);
  const [sendOtp, setsendOtp] = useState(false);
  const [pin, setPin] = useState("");
  const [repassword, setrepassword] = useState(false);
  const [Repassword, setRepassword] = useState();
  const [Recpassword, setRecpassword] = useState();
  const [second, setsecond] = useState(0);
  const [minutes, setminutes] = useState(5);
  const navigate = useNavigate();
  const toast = useToast();


  function handlePinChange(value) {
    setPin(value);
  }
  const Restart = () => {
    setminutes(5);
    setsecond(0);
  };
 
  const handleClickshowpassword = () => setpasswordShow(!passwordshow);

  const SendDataToBackend = async (e) => {
    try {
      setloading(true);
      e.preventDefault();
      const userdata = { email, password };
      const res = await axios.post(
        "http://localhost:5000/api/user/login",
        userdata,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res.status === 201) {
        setloading(false);
        localStorage.setItem("Chhule_Gagan_userInfo", JSON.stringify(res.data));

        navigate("/dashboard");
      } else {
        toast({
          title: "login failed",
          description: "try again",
          status: "error",
          duration: 5000,
          isClosable: true,
        });

        setloading(false);
      }
    } catch (err) {
      toast({
        title: "login failed",
        description: err.response.data,
        status: "error",
        duration: 5000,
        isClosable: true,
      });

      setloading(false);
    }
  };

  const SendOtp = async (e) => {
    setsendingOtp(true);
    try {
      if (email?.length > 0) {
        e.preventDefault();
        const userdata = { email };

        const res = await axios.post(
          "http://localhost:5000/api/user/sendotp",
          userdata,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
       
        if (res.status === 201) {
          setotp(res.data.otp);
          const templateParams = {
            sender_email: email,
            sender_name: res.data.name,
            otp: res.data.otp,
          };
          const result = await emailjs.send(
            "service_bofx8ne",
            "template_o82g8jz",
            templateParams,
            "B0Wamjh4x-3rFeUax"
          );

          if (result.status === 200) {
            toast({
              title: "OTP sent",

              status: "success",
              duration: 5000,
              isClosable: true,
            });
            setsendOtp(true);
          }
        }
      } else {
        toast({
          title: "Enter the email first",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (err) {
      setemail("");
      setpassword("");
      navigate("/register");
      toast({
        title: "Email is not registered yet",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    setsendingOtp(false);
  };

  const CheckOtp = (e) => {
    e.preventDefault();

    const isotp = pin === otp;

    if (isotp) {
      setsendOtp(false)
      setrepassword(true);
    } else {
      toast({
        title: "OTP didn't matched",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }

    setPin();
  };

  const ResetPassword = async (e) => {
    e.preventDefault();


    try {
      if (Repassword?.length < 6) {
        toast({
          title: "Password must contain minimum 6 digit",
          description: "try again",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else if (Repassword !== Recpassword) {
        toast({
          title: "Password is not matching",
          description: "try again",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else {
        const userdata = { email, password: Repassword };
        const res = await axios.post(
          "http://localhost:5000/api/user/changepassword",
          userdata,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        if (res.status === 201) {
          toast({
            title: "Password reset successfully",

            status: "success",
            duration: 5000,
            isClosable: true,
          });
          setrepassword(false);
        } else {
          toast({
            title: "password reset failed",

            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      }
    } catch (err) {
      toast({
        title: "password reset failed",
        description: err.response.data,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  var timer;

  useEffect(() => {
    timer = setInterval(() => {
      setsecond(second - 1);
      if (second === 0) {
        setsecond(59);
        setminutes(minutes - 1);
      }
      if (second === 0 && minutes === 0) {
      setsendOtp(false)
        toast({
          title: "Current OTP is invalid now. Retry again",

          status: "error",
          duration: 5000,
          isClosable: true,
        });
        navigate("/register");
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  useEffect(() => {
    Restart();
  }, [sendingOtp, sendOtp]);

  return (
    <>
      <VStack spacing={2} align="stretch">
        <form method="POST" onSubmit={SendDataToBackend}>
          <FormControl isRequired id="lemail" mb={3}>
            <Input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setemail(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired id="lpassword" mb={3}>
            <InputGroup>
              <Input
                type={passwordshow ? "text" : "password"}
                placeholder="Enter your password"
                onChange={(e) => setpassword(e.target.value)}
              />
              <InputRightElement>
                <p onClick={handleClickshowpassword}>
                  {!passwordshow ? <BiHide /> : <BiShow />}
                </p>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Button
            bg="rgba(250, 100, 100, 0.660597)"
            _hover={{ bg: "rgba(250, 100, 100, 0.90597)" }}
            w="100%"
            mt={2}
            type="submit"
            isLoading={loading}
          >
            Login
          </Button>
        </form>
        <Box display="flex">
          <Button
            className="text-left"
            variant="link"
            colorScheme="blue"
            onClick={SendOtp}
          >
            forget Password ?
          </Button>
        </Box>
      </VStack>

      {/* // sending otp */}
      <Modal isOpen={sendingOtp} onClose={false} isCentered size={"sm"}>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(1px)" />
        <ModalContent>
          <ModalBody>
            <VStack>
              <Text color="black" fontSize={"xl"} fontWeight="bold">
                Sending otp ....
              </Text>
              <Spinner size="xl" />
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* get otp */}
      <Modal isOpen={sendOtp} onClose={false} isCentered size={"sm"}>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(1px)" />
        <ModalContent>
          <ModalBody>
            <VStack>
              <Text color="black" fontStyle={"italic"}>
                OTP is sent to {email}. OTP will expire in{" "}
                {minutes < 10 ? "0" + minutes : minutes}
                {":"}
                {second < 10 ? "0" + second : second} seconds
              </Text>

              <HStack>
                <PinInput size="md" otp value={pin} onChange={handlePinChange}>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>

              <Button
                bg="rgba(250, 100, 100, 0.660597)"
                _hover={{ bg: "rgba(250, 100, 100, 0.90597)" }}
                w="100%"
                mt={2}
                type="submit"
                onClick={CheckOtp}
                isLoading={loading}
              >
                Verify OTP
              </Button>
            </VStack>
            <Button variant="link" colorScheme="blue" onClick={SendOtp}>
              Resend otp
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* enter repassword */}
      <Modal isOpen={repassword} onClose={false} isCentered size={"sm"}>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(1px)" />
        <ModalContent>
          <ModalBody>
            <VStack>
              <FormControl isRequired id="repassword" mb={3}>
                <InputGroup>
                  <Input
                    type={passwordshow ? "text" : "password"}
                    placeholder="Enter your password"
                    onChange={(e) => setRepassword(e.target.value)}
                  />
                  <InputRightElement>
                    <p onClick={handleClickshowpassword}>
                      {!passwordshow ? <BiHide /> : <BiShow />}
                    </p>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl isRequired id="recpassword" mb={3}>
                <InputGroup>
                  <Input
                    type={passwordshow ? "text" : "password"}
                    placeholder="confirm your password"
                    onChange={(e) => setRecpassword(e.target.value)}
                  />
                  <InputRightElement>
                    <p onClick={handleClickshowpassword}>
                      {!passwordshow ? <BiHide /> : <BiShow />}
                    </p>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                bg="rgba(250, 100, 100, 0.660597)"
                _hover={{ bg: "rgba(250, 100, 100, 0.90597)" }}
                w="100%"
                mt={2}
                type="submit"
                isLoading={loading}
                onClick={ResetPassword}
              >
                Reset Password
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default Login;
