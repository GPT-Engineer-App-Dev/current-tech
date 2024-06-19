import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box p={5}>
      <Heading as="h2" size="xl" mb={5}>Contact Us</Heading>
      <VStack align="start" spacing={4}>
        <Text fontSize="lg">Email: support@electroshop.com</Text>
        <Text fontSize="lg">Phone: +1 234 567 890</Text>
        <Text fontSize="lg">Address: 123 ElectroShop St, Tech City, TX 12345</Text>
      </VStack>
    </Box>
  );
};

export default Contact;