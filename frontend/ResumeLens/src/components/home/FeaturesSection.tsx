import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

interface FeatureProps {
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description }) => (
  <Stack py="10">
    <Heading size="md">{title}</Heading>
    <Text color="gray.600">{description}</Text>
  </Stack>
);

const FeaturesSection: React.FC = () => {
  return (
    <Box py={16} bg="blue.50">
      <Container maxW="8xl">
        <Stack gap="6">
          <Heading textAlign="center">Why ResumeLens?</Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap="10">
            <Feature
              title="Real Job Matching"
              description="Paste a job URL and let ResumeLens extract and analyze the actual requirements."
            />

            <Feature
              title="ATS-Aware Feedback"
              description="Get structured, actionable insights focused on what recruiters and ATS systems care about."
            />

            <Feature
              title="Edit While You Review"
              description="Apply AI suggestions instantly with a side-by-side resume editor."
            />
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
