import { Heading, Card, CardBody, Image, Text, Center, Tag, Box } from '@chakra-ui/react'

export const RecipeCard = ({ recipe, clickFn }) => {
  return (
    <>
    <Card cursor={"pointer"} onClick={() => clickFn(recipe)} borderRadius={"25px"} boxShadow='lg' padding={0} margin={"10px"} bg={"#e5a990"}>
      <CardBody padding={0}>
        <Image h={"200px"} w={"100%"} src={recipe.image} mb={"10px"} borderTopRadius={"20px"} objectFit={"cover"}></Image>
        
        <Text textAlign={"center"} color={"grey"} fontWeight={"700"}> {recipe.mealType} </Text>
        
        <Heading fontSize={20} margin={"10px"} textAlign={"center"}> {recipe.label} </Heading>
      
        <Center mb={"10px"}> {recipe.healthLabels.filter(label => label === "Vegetarian" || label === "Vegan").map((label) => (
          <Tag bg={"green.100"} m={"5px"} key={label} > {label} </Tag> ))}
        </Center>

        <Center mb={"10px"}> {recipe.dietLabels.map((dietlabel) => (
          <Tag bg={"yellow.100"} m={"5px"} key={dietlabel}> {dietlabel} </Tag> ))}
        </Center>
        
        <Text textAlign={"center"} mb={"10px"}> Dish type: {recipe.dishType} </Text>

        <Box align={"center"}> Cautions: 
          <Box align={"center"} mb={"20px"}> {recipe.cautions.map((caution) => (
            <Tag bg={"pink.100"} m={"5px"} key={caution}> {caution} </Tag> ))} 
          </Box> 
        </Box>
      </CardBody>
    </Card>
    </>
  )
}