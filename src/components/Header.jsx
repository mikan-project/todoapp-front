import { Flex, Center, Box, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex bg="red.400" h="64px">
      <Center px="64px">
        <Text color="white" fontWeight="bold">
          ToDoアプリ
        </Text>
      </Center>
      <Box flex="1" />
      <Center px="32px">
        <Text color="white" fontWeight="bold">
          ログインしてね
        </Text>
      </Center>
    </Flex>
  );
};

export default Header;
