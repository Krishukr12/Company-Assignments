import React from 'react'
import {Flex,Text} from "@chakra-ui/react"
import {AiFillStar} from "react-icons/ai"
const arr = Array(5).fill(0)
const StartCollection = ({rating}) => {
  return (
    <Flex alignItems={"center"} gap="3px">
        {
            arr.map((item,_i)=>(
                <AiFillStar key={_i} color="yellow" />
            ))
        }
        <Text>{rating}</Text>
    </Flex>
  )
}

export default StartCollection