import { Box, Heading, Text} from "@chakra-ui/react";
import { Button } from '@chakra-ui/react';
import { Container } from "@chakra-ui/react";
import propsStyle from "./props.module.css";

export const Props = () => {
  const products = [
    {
      id: 1,
      productName: "Ttich",
      price: 30,
      size: "m l xl",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      productName: "product",
      price: 50,
      size: "m l xl",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit..",
    },
    {
      id: 3,
      productName: "tich",
      price: 40,
      size: "m l xl",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <Container
      maxW={"90%"}
      m="auto"
      mt={"70px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        "@media (max-width:768px)": {
          flexWrap: "wrap",
          "& > div": {
            width: "100%",
          },
        },
      }}
    >
      {products.map((product, index) => (
        <Box
        className={`${propsStyle.shdow_hover} ${propsStyle.text_center}
         ${propsStyle.border_rd} `}
          as="div"
          key={index}
          position={"relative"}
          bg={"Gray 200"}
          m={"20px"}
          w={"200px"}
          
        >

          <Box as="div"  className={`${propsStyle.border_rd_img}`} w={"100%"} h={"150px"} >
            <img  src="./1.png"alt="img"  />
          </Box>
          <Heading as={"h6"} fontSize={"1rem"} m={"auto"} w={"100px"} >
            {product.productName}
          </Heading>
          <Text as={"p"} color={"rgba(0,0,0,0.3)"} m={"5px"}>
            {product.body}
          </Text>
          <Heading m={"10px"} className={`${propsStyle.disply_flex}`} as={"span"} fontSize={"1rem"}>
           <span  >{product.size}</span> <span > {product.price + "$"}</span>
          </Heading>
          <Button cursor={"pointer"} mb={"10px"} fontSize={"1.2rem"}  bg={"Teal 200"}w={"120px"} h={"25px"} borderRadius={"10px"} border={"0"}>Add To card</Button>
        </Box>
      ))}
    </Container>
  );
};
