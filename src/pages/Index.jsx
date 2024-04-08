import { Box, Container, VStack, Heading, Text, SimpleGrid, GridItem, Image, Button, Input, Flex, Spacer, useColorModeValue } from "@chakra-ui/react";
import { FaRegNewspaper, FaSearch } from "react-icons/fa";

const NewsCard = ({ title, summary, imageUrl }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={6} bg={useColorModeValue("white", "gray.700")}>
      <Image borderRadius="md" src={imageUrl} alt={`Image for ${title}`} mb={4} w="full" h={64} objectFit="cover" />
      <Heading size="md" mb={2}>
        {title}
      </Heading>
      <Text noOfLines={3}>{summary}</Text>
    </Box>
  );
};

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Flex w="full">
          <Box p="2">
            <Heading size="lg">
              <FaRegNewspaper /> NewsPlatform
            </Heading>
          </Box>
          <Spacer />
          <Box p="2">
            <Input placeholder="Search news..." size="md" width="auto" />
            <Button ml={2} leftIcon={<FaSearch />} colorScheme="blue">
              Search
            </Button>
          </Box>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {/* Dummy data for news cards */}
          {[...Array(9)].map((_, index) => (
            <GridItem key={index}>
              <NewsCard title={`News Headline ${index + 1}`} summary={`Summary for news article ${index + 1}. This is a placeholder text to give an idea of a news summary.`} imageUrl={`https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuZXdzJTIwaW1hZ2V8ZW58MHx8fHwxNzEyNTQ0MDgwfDA&ixlib=rb-4.0.3&q=80&w=1080`} />
            </GridItem>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
