import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";

const CallToAction: React.FC = () => {
  return (
    <Box py={16} bg="blue.50">
      <Container maxW="8xl">
        <Stack textAlign="center" gap={6}>
          <Heading>Ready to Improve Your Resume?</Heading>

          <Text fontSize="lg" color="gray.600">
            Upload your resume and see exactly how well it matches your next
            job.
          </Text>

          <Container maxW="2xl">
            <Button size="lg" colorScheme="blue">
              Get Started
            </Button>
          </Container>
        </Stack>
      </Container>
    </Box>
  );
};

export default CallToAction;
