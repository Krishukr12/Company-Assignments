import React from "react";
import { Box, Grid, Text, Center, Flex } from "@chakra-ui/react";
import { FiGift } from "react-icons/fi";
import { AiFillExperiment } from "react-icons/ai";
import { FaMoneyCheck } from "react-icons/fa";
import StartCollection from "./StartCollection";

const Seller = ({
  views,
  liftingDay,
  advance,
  rating,
  bottomInfo,
  mt,
  price,
}) => {
  return (
    <Box borderWidth={"1px"} boxShadow={"md"} p="1rem">
      <Text fontWeight={"500"}>
        #{views}{" "}
        <Text
          pl="5px"
          color="blue"
          fontSize={".7rem"}
          fontWeight={"bold"}
          as="span"
        >{`(Views)`}</Text>
      </Text>
      <Flex justifyContent={"space-between"}>
        <Text textDecoration={"underline"} fontWeight={"bold"} color="red">
          {price}
        </Text>
        <Flex alignItems={"center"} gap="5px">
          <FaMoneyCheck color="gray" />|<Text fontWeight={"bold"}> {mt}</Text>
        </Flex>
      </Flex>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text>{advance}</Text>
        <Text>{liftingDay}</Text>
      </Flex>
      <Flex alignItems={"center"} gap="10px">
        <FiGift color="gray" />
        <Text>MV SAMJOHN SOLIDARITY</Text>
      </Flex>
      <Flex alignItems={"center"}>
        <AiFillExperiment />
        <Text>Seller Info</Text>
      </Flex>
      {/* Import start component */}
      <StartCollection rating={rating} />
      <Text>{bottomInfo}</Text>
    </Box>
  );
};

export default Seller;
