import { Box, SimpleGrid, Image, Text, VStack, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$699", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$999", image: "/images/laptop.jpg" },
  { id: 3, name: "Smartwatch", price: "$199", image: "/images/smartwatch.jpg" },
  { id: 4, name: "Headphones", price: "$149", image: "/images/headphones.jpg" },
];

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    const filtered = sampleProducts.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  return (
    <Box p={5}>
      <Heading as="h2" size="xl" mb={5}>Products</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {filteredProducts.map(product => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
            <Image src={product.image} alt={product.name} />
            <VStack align="start" mt={4}>
              <Text fontWeight="bold" fontSize="lg">{product.name}</Text>
              <Text color="gray.500">{product.price}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;