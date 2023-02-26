import React, { useState } from "react";
import {
  VStack,
  FormControl,
  Select,
  Input,
  InputRightElement,
  Button,
  InputGroup,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { BiShow, BiHide } from "react-icons/bi";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [age, setage] = useState();
  const [gender, setgender] = useState();
  const [qualification, setqualification] = useState();
  const [mobileNo, setmobileNo] = useState();
  const [password, setpassword] = useState();
  const [cpassword, setcpassword] = useState();
  const [passwordshow, setpasswordShow] = useState(false);
  const [cpasswordshow, setcpasswordShow] = useState(false);

  const [loading, setloading] = useState(false);
  const toast = useToast();

  const handleClickshowpassword = () => setpasswordShow(!passwordshow);
  const handleClickshowCpassword = () => setcpasswordShow(!cpasswordshow);

  const navigate = useNavigate();

  const SendDataToBackend = async (e) => {
    try {
      setloading(true);
      e.preventDefault();

      if (mobileNo?.length !== 10) {
        toast({
          title: "Mobile No contain only 10 digit",
          description: "Enter mobile no again without code",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else if (password?.length < 6) {
        toast({
          title: "Password must contain minimum 6 digit",
          description: "try again",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else if (password !== cpassword) {
        toast({
          title: "Password is not matching",
          description: "try again",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else {
        const userdata = {
          name,
          age,
          gender,
          qualification,
          mobileNo,
          email,
          password,
        };
        const res = await axios.post(
          "http://localhost:5000/api/user/",
          userdata,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        if (res.status === 201) {
          localStorage.setItem(
            "Chhule_Gagan_userInfo",
            JSON.stringify(res.data)
          );
          navigate("/dashboard");
          // push to other place
        } else {
          toast({
            title: "Registation failed",
            description: "try again",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      }
    } catch (err) {
      toast({
        title: "Registation failed",
        description: err.response.data,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    setloading(false);
  };
  return (
    <>
      <VStack spacing={2} align="stretch">
        <form method="POST" onSubmit={SendDataToBackend}>
          <Wrap spacing={4}>
            <WrapItem w="100%">
              <FormControl isRequired id="name">
                <Input
                  type="text"
                  placeholder="Enter your name"
                  onChange={(e) => setname(e.target.value)}
                />
              </FormControl>
            </WrapItem>
            <WrapItem w="100%">
              <FormControl isRequired id="email">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setemail(e.target.value)}
                />
              </FormControl>
            </WrapItem>
            <WrapItem w={{ base: "100%", md: "46%" }}>
              <FormControl isRequired id="age">
                <Input
                  type="number"
                  placeholder="Enter your age"
                  onChange={(e) => setage(e.target.value)}
                />
              </FormControl>
            </WrapItem>
            <WrapItem w={{ base: "100%", md: "48%" }}>
              <FormControl isRequired id="gender">
                <Select
                  onChange={(e) => setgender(e.target.value)}
                  placeholder="Select Gender"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Transgender">Transgender</option>
                  <option value="Others">Others</option>
                  <option value="Prefer not to say">Prefer Not to say</option>
                </Select>
              </FormControl>
            </WrapItem>
            <WrapItem w={{ base: "100%", md: "46%" }}>
              <FormControl isRequired id="mobile">
                <Input
                  type="number"
                  placeholder="Enter your mobile no"
                  onChange={(e) => setmobileNo(e.target.value)}
                />
              </FormControl>
            </WrapItem>
            <WrapItem w={{ base: "100%", md: "48%" }}>
              <FormControl isRequired id="qualification">
                <Input
                  type="text"
                  placeholder="Enter your Qualification"
                  onChange={(e) => setqualification(e.target.value)}
                />
              </FormControl>
            </WrapItem>
            <WrapItem w={{ base: "100%", md: "46%" }}>
              <FormControl isRequired id="password">
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
            </WrapItem>
            <WrapItem w={{ base: "100%", md: "48%" }}>
              <FormControl isRequired id="cpassword">
                <InputGroup>
                  <Input
                    type={cpasswordshow ? "text" : "password"}
                    placeholder="Re-confirm your password"
                    onChange={(e) => setcpassword(e.target.value)}
                  />
                  <InputRightElement>
                    <p onClick={handleClickshowCpassword}>
                      {!cpasswordshow ? <BiHide /> : <BiShow />}
                    </p>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </WrapItem>
          </Wrap>

          <Button
            bg="rgba(250, 100, 100, 0.660597)"
            _hover={{ bg: "rgba(250, 100, 100, 0.90597)" }}
            w="100%"
            mt={2}
            type="submit"
            isLoading={loading}
          >
            Sign Up
          </Button>
        </form>
      </VStack>
    </>
  );
};
export default SignUp;
