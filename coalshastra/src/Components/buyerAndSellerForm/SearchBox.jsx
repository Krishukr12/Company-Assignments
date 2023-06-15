import {
  FormControl,
  FormLabel,
  InputGroup,
  Text,
  InputLeftElement,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import React from "react";

const SearchBox = ({ label, leftAddon, rightAddon }) => {
  return (
    <FormControl isRequired>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Text pl="5px">{leftAddon}</Text>
        </InputLeftElement>
        <Input type="text" placeholder="" />
        <InputRightElement pr="1rem">
          <Text >{rightAddon}</Text>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

export default SearchBox;
