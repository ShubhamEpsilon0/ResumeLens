import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";

interface StepProps {
  title: string;
  description: string;
  imageSrc: string;
}

const StepCard: React.FC<StepProps> = ({ title, description, imageSrc }) => {
  return (
    <Stack
      gap={4}
      p={6}
      bg="white"
      borderRadius="xl"
      boxShadow="sm"
      textAlign="center"
      height="100%"
    >
      <Image
        src={imageSrc}
        alt={title}
        boxSize="120px"
        objectFit="contain"
        mx="auto"
      />

      <Heading size="md">{title}</Heading>

      <Text color="gray.600" fontSize="sm">
        {description}
      </Text>
    </Stack>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <Box bg="gray.50" py={16}>
      <Container maxW="6xl">
        <Stack gap={14}>
          <Stack gap={4} textAlign="center">
            <Heading size="xl">How It Works</Heading>
            <Text color="gray.600" fontSize="lg">
              A simple, focused workflow designed to improve your resume fast.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 4 }} gap={8}>
            <StepCard
              title="Upload Resume"
              description="Upload your existing resume in PDF format. No formatting loss."
              imageSrc="/images/upload-resume.svg"
            />

            <StepCard
              title="Paste Job URL"
              description="Provide a job posting link. ResumeLens extracts key requirements automatically."
              imageSrc="/images/job-url.svg"
            />

            <StepCard
              title="Review Suggestions"
              description="Get ATS-aware, role-specific feedback tailored to the job."
              imageSrc="/images/ai-review.svg"
            />

            <StepCard
              title="Edit & Export"
              description="Apply suggestions live and export a clean, job-ready resume."
              imageSrc="/images/edit-export.svg"
            />
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

export default HowItWorks;
