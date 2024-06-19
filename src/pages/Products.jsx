import { Box, SimpleGrid, Image, Text, VStack, Heading, Checkbox, CheckboxGroup, Stack, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: 699, image: "/images/smartphone.jpg", category: "Electronics", brand: "BrandA" },
  { id: 2, name: "Laptop", price: 999, image: "/images/laptop.jpg", category: "Electronics", brand: "BrandB" },
  { id: 3, name: "Smartwatch", price: 199, image: "/images/smartwatch.jpg", category: "Wearables", brand: "BrandA" },
  { id: 4, name: "Headphones", price: 149, image: "/images/headphones.jpg", category: "Accessories", brand: "BrandC" },
];

const Products = ({ searchQuery }) => {
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleCategoryChange = (categories) => {
    setSelectedCategories(categories);
  };

  const handleBrandChange = (brands) => {
    setSelectedBrands(brands);
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  useEffect(() => {
    let filtered = sampleProducts.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
      (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  return (
    <Box p={5}>
      <Heading as="h2" size="xl" mb={5}>Products</Heading>
      <Box mb={5}>
        <Heading as="h4" size="md" mb={3}>Filter by Category</Heading>
        <CheckboxGroup onChange={handleCategoryChange}>
          <Stack spacing={2} direction="row">
            <Checkbox value="Electronics">Electronics</Checkbox>
            <Checkbox value="Wearables">Wearables</Checkbox>
            <Checkbox value="Accessories">Accessories</Checkbox>
          </Stack>
        </CheckboxGroup>
      </Box>
      <Box mb={5}>
        <Heading as="h4" size="md" mb={3}>Filter by Brand</Heading>
        <CheckboxGroup onChange={handleBrandChange}>
          <Stack spacing={2} direction="row">
            <Checkbox value="BrandA">BrandA</Checkbox>
            <Checkbox value="BrandB">BrandB</Checkbox>
            <Checkbox value="BrandC">BrandC</Checkbox>
          </Stack>
        </CheckboxGroup>
      </Box>
      <Box mb={5}>
        <Heading as="h4" size="md" mb={3}>Filter by Price</Heading>
        <RangeSlider defaultValue={[0, 1000]} min={0} max={1000} step={50} onChangeEnd={handlePriceChange}>
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
        <Text mt={2}>Price Range: ${priceRange[0]} - ${priceRange[1]}</Text>
      </Box>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {filteredProducts.map(product => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
            <Image src={product.image} alt={product.name} />
            <VStack align="start" mt={4}>
              <Text fontWeight="bold" fontSize="lg">{product.name}</Text>
              <Text color="gray.500">${product.price}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;