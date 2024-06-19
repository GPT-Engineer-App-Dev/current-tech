import { Box, Flex, Link, Spacer, Heading, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useState } from "react";
import { SearchIcon } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Box bg="teal.500" p={4}>
      <Flex maxW="1200px" mx="auto" align="center">
        <Heading as="h1" size="lg" color="white">ElectroShop</Heading>
        <InputGroup maxW="300px" mx={2}>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search products"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                window.location.href = `/products?search=${searchQuery}`;
              }
            }}
            bg="white"
            color="black"
          />
        </InputGroup>
        <Spacer />
        <Link as={RouterLink} to="/" color="white" mx={2}>Home</Link>
        <Link as={RouterLink} to="/products" color="white" mx={2}>Products</Link>
        <Link as={RouterLink} to="/contact" color="white" mx={2}>Contact</Link>
      </Flex>
    </Box>
  );
};

export default Navbar;