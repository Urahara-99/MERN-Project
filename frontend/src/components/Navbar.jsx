import React from 'react'
import { Container, Flex, HStack, Button, Text, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { PlusSquareIcon } from '@chakra-ui/icons';
import { IoMoon } from 'react-icons/io5';
import { LuSun } from 'react-icons/lu';

const Navbar = () => {
    const { colorMode, toggleColorMode} =  useColorMode();

  return (
    <Container maxW={"1140px"} px={4}>
        <Flex
         h={16}
         justifyContent={"space-between"}
         alignItems={"center"}
         flexDir=
         {{
            base: "column",
            sm: "row"
         }}
         >
            <Text
            fontSize={{ base:"22", sm:"28" }}
            bgColor={"blue.500"}
            fontWeight={"bold"}
            textTransform= {"uppercase"}
            textAlign= {"center"}
            bgClip= {"text"}
            >
              <Link to={"/"}>Product Store</Link>
            </Text>
            <HStack spacing={2} alignItems={"center"}>
                <Link to={"/create"}>
                <Button>
                    <PlusSquareIcon fontSize={20} />
                </Button>
                </Link>
                <Button onClick={toggleColorMode}>
                    { colorMode === "light" ? <IoMoon /> : <LuSun fontSize={20}/> }
                </Button>
            </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar