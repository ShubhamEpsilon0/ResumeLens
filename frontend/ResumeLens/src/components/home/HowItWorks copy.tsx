import { Box, Container, Heading, Stack, Text, List } from "@chakra-ui/react";

const HowItWorks: React.FC = () => {
  return (
    <Box bg="white" py={10} border={"1 1 1"}>
      <Container maxW="8xl">
        <Stack alignItems="start" px="5" gap="6">
          <Heading textAlign="start">How It Works</Heading>

          <List.Root as="ol" fontSize="lg">
            <List.Item>Upload your resume (PDF)</List.Item>
            <List.Item>Paste a job posting URL</List.Item>
            <List.Item>Review and apply AI-powered suggestions</List.Item>
            <List.Item>Export a clean, ATS-ready resume</List.Item>
          </List.Root>

          <Text color="gray.600" textAlign="start">
            No accounts. No clutter. Just focused resume improvement.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default HowItWorks;
