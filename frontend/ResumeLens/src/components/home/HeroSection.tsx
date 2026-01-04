import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";

const HeroSection: React.FC = () => {
  return (
    <Box bg="white" py={16}>
      <Container maxW="7xl">
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap={{ base: 12, md: 16 }}
          alignItems="center"
        >
          {/* Left: Text Content */}
          <Stack gap={6}>
            <Heading size="2xl" lineHeight="1.2">
              See Your Resume Through the{" "}
              <Box as="span" color="blue.500">
                Recruiter’s Lens
              </Box>
            </Heading>

            <Text fontSize="lg" color="gray.600">
              ResumeLens analyzes your resume against real job postings and
              gives you ATS-aware, actionable feedback — so you know exactly
              what to improve before applying.
            </Text>

            <Stack direction={{ base: "column", sm: "row" }} gap={4}>
              <Button size="lg" colorScheme="blue">
                Review My Resume
              </Button>

              <Button size="lg" variant="outline">
                See How It Works
              </Button>
            </Stack>
          </Stack>

          {/* Right: Image */}
          <Box>
            <Image
              src="/images/HomePageHeading.webp"
              alt="Resume review illustration"
              maxW="100%"
              mx="auto"
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default HeroSection;
