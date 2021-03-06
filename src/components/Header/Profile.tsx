import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex
      align="center"
    >
      { showProfileData && (
        <Box mr="4" textAlign="right" >
          <Text>Diego Souza</Text>
          <Text
            color="gray.300"
            fontSize="small"
          >
            Diego785237@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Diego Souza" src="https://github.com/DiegoSouza7.png" />
    </Flex>
  )
}