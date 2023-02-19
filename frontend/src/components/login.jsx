import React, { useState } from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  Button,
  InputGroup,
} from "@chakra-ui/react";
import { BiShow, BiHide } from "react-icons/bi";

import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [passwordshow, setpasswordShow] = useState(false);
  const [loading, setloading] = useState(false);
 const navigate = useNavigate()
  const toast = useToast();

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
            _hover={{bg:"rgba(250, 100, 100, 0.90597)"}}
            w="100%"
            mt={2}
            type="submit"
            isLoading={loading}
          >
            Login
          </Button>
        </form>
      </VStack>
    </>
  );
};
export default Login;
