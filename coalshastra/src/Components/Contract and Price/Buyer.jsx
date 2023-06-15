import React from "react";
import { Box, Grid, Text, Center, Flex } from "@chakra-ui/react";
import { FiGift } from "react-icons/fi";
import { AiFillExperiment } from "react-icons/ai";
import { FaMoneyCheck } from "react-icons/fa";
import StartCollection from "./StartCollection";

const Buyer = ({
  mt,
  price,
  views,
  liftingDay,
  creditDay,
  rating,
  bottomInfo,
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
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Flex alignItems={"center"} gap="5px">
          <FaMoneyCheck color="gray" />
          <Text>{mt}</Text>
        </Flex>
        <Text fontWeight={"bold"} color="green">
          {price}
        </Text>
      </Flex>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text>{liftingDay}</Text>
        <Text>{creditDay}</Text>
      </Flex>
      <Flex alignItems={"center"} gap="5px">
        <FiGift color="gray" />
        <Text>MV SAMJOHN SOLIDARITY</Text>
      </Flex>
      <Flex alignItems={"center"} gap="5px">
        <AiFillExperiment />
        <Text>Buyer Info</Text>
      </Flex>
      {/* Import start component */}
      <StartCollection rating={rating} />
      <Text>{bottomInfo}</Text>
    </Box>
  );
};

export default Buyer;
