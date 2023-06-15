import { HiDownload } from "react-icons/hi";
import { HiLocationMarker } from "react-icons/hi";

import { Box, Text, Flex, Image, Center, Grid } from "@chakra-ui/react";
import Buyer from "./Buyer";
import Seller from "./Seller";
let usaImg =
  "https://cdn.pixabay.com/photo/2017/03/14/21/00/american-flag-2144392_640.png";
const PriceDetails = () => {
  return (
    <Flex flexDir={"column"} gap="12px" p="10px" borderWidth={"1px"}>
      <Center p="5px" bg="blue.100">
        All Prices are Including CESS
      </Center>
      <Center p="5px" bg="red.100" color="red">
        Accepting terms, without any modification, of a "HOT listing" will lead
        to compulsory bid/offer acceptance
      </Center>
      <Box>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Text textTransform={"uppercase"}>MV samjohn sodidarity</Text>
          <Text fontSize={".9rem"} color="gray.500">
            Last Match
          </Text>
        </Flex>
        <Flex gap="1rem" alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Flex gap="5px">
              <Image boxSize={"1rem"} src={usaImg} alt="Usa image" />
              <Text>United States |</Text>
            </Flex>
            <Flex gap="5px">
              <HiLocationMarker size="1rem" color="gray" />
              <Text>Tuna Port Port |</Text>
            </Flex>
            <Text>6968 NAR {`NAR(Kcal/kg)`}</Text>
          </Box>
          <Text fontSize={"1.2rem"} color="blue">
            INR 14840.00 /MT
          </Text>
        </Flex>
      </Box>
      {/* Dowload icon */}
      <Flex>
        <HiDownload color="gray" />
        <Text textDecor={"underline"}>Download Report</Text>
      </Flex>

      {/* All Listing Items */}
      <Text fontWeight="bold" fontSize="1.2rem" mt="10px">
        All Listing
      </Text>

      {/* Listing Card of buyer and seller */}

      <Grid gap="5px" templateColumns={"repeat(2,1fr)"}>
        <Buyer
          views={"31886"}
          mt="1000 MT"
          price="INR 12505.00/MT"
          liftingDay={"30"}
          creditDay={"0"}
          rating={"5"}
          bottomInfo={"50K+ Tons | 100+ Deals | <1 Yr"}
        />
        <Seller
          views={"31886"}
          mt="1000 MT"
          price="INR 12505.00/MT"
          advance={"40% Advance"}
          liftingDay={"15 Lifting Days"}
          creditDay={"0"}
          rating={"5"}
          bottomInfo={"50K+ Tons | 100+ Deals | <1 Yr"}
        />
        <Buyer
          views={"31886"}
          mt="1000 MT"
          price="INR 12505.00/MT"
          // advance={"30% Advance"}
          liftingDay={"18 Lifting Days"}
          creditDay={"0"}
          rating={"5"}
          bottomInfo={"50K+ Tons | 100+ Deals | <1 Yr"}
        />
        <Seller
          views={"31886"}
          mt="1000 MT"
          price="INR 12505.00/MT"
          advance={"100% Advance"}
          liftingDay={"15 Lifting Days"}
          // creditDay={"0"}
          rating={"5"}
          bottomInfo={"50K+ Tons | 100+ Deals | <1 Yr"}
        />
      </Grid>
      {/* Total Quantity */}
      <Flex>
        <Text>2000</Text>
        <Text>Total Quantity</Text>
        <Text>1400</Text>
      </Flex>
      <Text textAlign={"center"} color="blue">
        No More Listings
      </Text>
    </Flex>
  );
};

export default PriceDetails;
