import { Box, Flex, HStack, Button, Text } from "@chakra-ui/react";

const Links = ["Home", "Features", "Templates", "Contact"];

const NavLink = ({ children }: { children: React.ReactNode }) => (
  <Box
    px={3}
    py={2}
    rounded="md"
    cursor="pointer"
    _hover={{
      textDecoration: "none",
      bg: "gray.100",
    }}
  >
    {children}
  </Box>
);

export const Navbar = () => {
  return (
    <Box
      bg="white"
      px={6}
      boxShadow="sm"
      position="sticky"
      top={0}
      zIndex={100}
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Logo */}
        <Text fontSize="xl" fontWeight="bold">
          ResumeLens
        </Text>

        {/* Desktop Menu */}
        <HStack gap={6} display={{ base: "none", md: "flex" }}>
          {Links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </HStack>

        {/* Right Buttons */}
        <HStack gap={3} display={{ base: "none", md: "flex" }}>
          <Button colorScheme="blue">Get Started</Button>
        </HStack>
      </Flex>
    </Box>
  );
};
