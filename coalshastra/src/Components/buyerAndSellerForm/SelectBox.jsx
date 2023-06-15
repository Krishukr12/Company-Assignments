import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import React from "react";

const SelectBox = ({ label, option }) => {
  return (
    <FormControl isRequired>
      <FormLabel>{label}</FormLabel>
      <Select>
        {option.map((data, _i) => (
          <option key={_i}>{data}</option>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectBox;
