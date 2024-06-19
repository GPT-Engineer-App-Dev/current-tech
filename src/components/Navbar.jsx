import { Box, Flex, Link, Spacer, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex maxW="1200px" mx="auto" align="center">
        <Heading as="h1" size="lg" color="white">ElectroShop</Heading>
        <Spacer />
        <Link as={RouterLink} to="/" color="white" mx={2}>Home</Link>
        <Link as={RouterLink} to="/products" color="white" mx={2}>Products</Link>
        <Link as={RouterLink} to="/contact" color="white" mx={2}>Contact</Link>
      </Flex>
    </Box>
  );
};

export default Navbar;