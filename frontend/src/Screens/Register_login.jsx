import React from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../components/login";
import SignUp from "../components/signup";

const Register = () => {
  return (
    <>
      <Box
        bg="linear-gradient(104.18deg, #EF6B6B 3.51%, rgba(250, 100, 100, 0.660597) 35.82%, rgba(247, 51, 51, 0.477679) 53.23%, rgba(235, 27, 27, 0.247724) 75.12%, rgba(245, 0, 0, 0.12752) 86.57%, rgba(236, 5, 5, 0) 98.7%);"
        display="flex"
        w="100%"
        
        flexDir={"row"}
        justifyContent="space-around"
      >
        <Box
          bg="white"
          mt={10}
          mb={10}
          textAlign={"center"}
          w={{ base: "90%", sm: "75%", md: "60%", lg: "50%" }}
          pt={5}
          px={2}
          borderRadius="lg"
          borderWidth="1px"
          height="auto"
          boxShadow='2xl'
        >
          <Tabs variant="soft-rounded" colorScheme="red">
            <TabList mb="1em">
              <Tab w="50%" pt={1} pb={1}>
                Login
              </Tab>
              <Tab w="50%" pt={1} pb={1}>
                Sign Up
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <SignUp />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  );
};
export default Register;
