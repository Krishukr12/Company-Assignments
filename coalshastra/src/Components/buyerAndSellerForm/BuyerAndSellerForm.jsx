import React from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  Select,
  FormLabel,
  FormControl,
  Radio,
  Button,
  InputGroup,
  InputRightElement,
  Grid,
} from "@chakra-ui/react";
import SearchBox from "./SearchBox";
import SelectBox from "./SelectBox";
import { BsPencil } from "react-icons/bs";
import { AiFillFire } from "react-icons/ai";

const BuyerAndSellerForm = () => {
  return (
    <Grid
      mt="2rem"
      gap="1.5rem"
      fontSize={".8rem"}
      p="2rem"
      borderWidth={"1px"}
      w={{ base: "100%", md: "70%", lg: "58%" }}
    >
      <Flex fontSize={"1.1rem"} gap="1rem" fontWeight={"bold"}>
        <Text>Buy</Text>
        <Text px="1rem" borderBottom={"2px solid blue"} color="blue">
          Sell
        </Text>
      </Flex>
      {/* Ist Row */}
      <Flex gap="1rem">
        <FormControl isRequired>
          <FormLabel>{`Vessel(s)`}</FormLabel>
          <Input w="18rem" placeholder="" />
        </FormControl>
        <SearchBox label={"Quantity"} leftAddon={"700"} rightAddon={"MT"} />
        <SearchBox
          label={"Offer Price..."}
          leftAddon={"11990"}
          rightAddon={"INT/MT"}
        />
      </Flex>

      {/* Second Layer */}
      <Flex gap="3rem">
        <SelectBox
          label={"Payment Terms"}
          option={["Cash & Carry", "Card", "Online"]}
        />
        <SearchBox label={"Advance"} leftAddon={"30"} rightAddon={"%"} />
        <SearchBox label={"Balance"} leftAddon={"70"} rightAddon={"%"} />
      </Flex>

      {/* Third Layer */}
      <Flex gap="3rem">
        <SearchBox
          label={"No. of Payment Days"}
          leftAddon={"15"}
          rightAddon={"Days"}
        />
        <SearchBox label={"Lifting Days"} leftAddon={"15"} rightAddon={""} />
        <SelectBox label={"Expiry"} option={["Today", "Week", "Month"]} />
      </Flex>

      {/* Fourth Layer */}
      <FormControl isRequired>
        <FormLabel>Address</FormLabel>
        <InputGroup w="65%" variant={"filled"}>
          <Input type="text" placeholder="Tuna Port, Kutch, Gujarat,370205" />
          <InputRightElement>
            <BsPencil color="gray" />
          </InputRightElement>
        </InputGroup>
      </FormControl>

      {/* 5th layer */}
      <Flex gap="3rem">
        <FormControl>
          <FormLabel>Make Your Listing Hot?</FormLabel>
          <Flex gap="5px" alignItems={"center"}>
            <Radio defaultChecked value="hot">
              Hot
            </Radio>
            <AiFillFire size="1.5rem" color="yellow" />
          </Flex>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Post Your Listing On?</FormLabel>
          <Flex gap="1rem">
            <Radio colorScheme="gray" defaultChecked value="coalshastra">
              Coalshastra
            </Radio>
            <Radio colorScheme="gray" value="brandstore">
              Brand Store
            </Radio>
          </Flex>
        </FormControl>
      </Flex>

      {/* 6th Layer */}

      <Text fontSize={".7rem"}>
        <Text as="span" mr="8px">
          +
        </Text>
        Add Special Comments
      </Text>

      {/* 7th layer */}
      <Button fontWeight={"bold"} textTransform={"uppercase"} w="max-content" colorScheme="linkedin">{"Submit Your Product"}</Button>
    </Grid>
  );
};

export default BuyerAndSellerForm;
