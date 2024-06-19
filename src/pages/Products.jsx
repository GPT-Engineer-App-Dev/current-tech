import { Box, SimpleGrid, Image, Text, VStack, Heading } from "@chakra-ui/react";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$699", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$999", image: "/images/laptop.jpg" },
  { id: 3, name: "Smartwatch", price: "$199", image: "/images/smartwatch.jpg" },
  { id: 4, name: "Headphones", price: "$149", image: "/images/headphones.jpg" },
];

const Products = () => {
  return (
    <Box p={5}>
      <Heading as="h2" size="xl" mb={5}>Products</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {sampleProducts.map(product => (
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