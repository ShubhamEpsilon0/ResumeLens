import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Link,
  Separator,
} from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Box bg="gray.900" color="gray.300">
      <Container maxW="7xl" py={16}>
        <SimpleGrid columns={{ base: 1, md: 4 }} gap={10}>
          {/* Product */}
          <Stack gap={3}>
            <Text fontWeight="bold" color="white">
              ResumeLens
            </Text>
            <Text fontSize="sm" color="white">
              AI-powered resume review tool that analyzes your resume against
              real job postings to help you apply smarter.
            </Text>
          </Stack>

          {/* Product Links */}
          <Stack gap={2}>
            <Text fontWeight="bold" color="white">
              Product
            </Text>
            <Link href="#" fontSize="sm" color="white">
              How It Works
            </Link>
            <Link href="#" fontSize="sm" color="white">
              Resume Review
            </Link>
            <Link href="#" fontSize="sm" color="white">
              Roadmap
            </Link>
          </Stack>

          {/* Developer */}
          <Stack gap={2}>
            <Text fontWeight="bold" color="white">
              Developer
            </Text>
            <Text fontSize="sm" color="white">
              Built by Shubham Nigam
            </Text>
            <Link
              href="https://github.com/ShubhamEpsilon0"
              fontSize="sm"
              color="white"
            >
              GitHub
            </Link>
            <Link href="https://www.linkedin.com" fontSize="sm" color="white">
              LinkedIn
            </Link>
          </Stack>

          {/* Contact */}
          <Stack gap={2}>
            <Text fontWeight="bold" color="white">
              Contact
            </Text>
            <Text fontSize="sm" color="white">
              Questions or feedback?
            </Text>
            <Link
              href="mailto:your.email@example.com"
              fontSize="sm"
              color="white"
            >
              your.email@example.com
            </Link>
          </Stack>
        </SimpleGrid>

        <Separator my={10} borderColor="gray.700" />

        <Text fontSize="sm" textAlign="center" color="gray.500">
          © {new Date().getFullYear()} ResumeLens. Built for learning and
          experimentation. Not affiliated with any hiring platform.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
