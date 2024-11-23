import React, { useEffect } from 'react';
import { Container, VStack, Text, SimpleGrid} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useProductStore } from '../store/product';

const HomePage = () => {

  const {fetchProducts, products} = useProductStore();

  useEffect(()=> {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products", products);
  return (
    <Container>
      <VStack>
        <Text 
        fontSize={"30"}
        fontWeight={"bold"}
        bgColor={"linear(to-r, cyan.400, blue.500)"}
        textAlign={"center"}>
          Current Products
        </Text>

        <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
        }} 
        spacing={10}
        w={"full"}>

        </SimpleGrid>

        <Text
        fontSize='xl'
        textAlign={"center"}
        fontWeight={"bold"}
        color={'gray.500'}
        >
          No Products Found! {"   "}
          <Link to={"/create"}>
          <Text as={"span"} color={"blue.400"} _hover={{textDecoration: "underline"}}>
            create a product
          </Text>
          </Link>

        </Text>
      </VStack>
    </Container>
  )
}

export default HomePage