import { 
  Image, 
  Card, 
  CardBody, 
  Center, 
  Button, 
  Box, 
  Text, 
  Tag, 
  SimpleGrid, 
  Heading, 
  CardFooter, 
  CardHeader 
} from '@chakra-ui/react'

export const RecipePage = ({ recipe, clickFn }) => {
  return (
    <>
      <Center padding={"20px"}>
        <Card 
          borderRadius="25px" 
          w="3xl" 
          bgColor="#eed4c9">
            <CardHeader>
              <Image 
                src={recipe.image}  
                h="md" 
                w="100%" 
                borderRadius="25px" 
                mb={'10px'} 
                objectFit={"cover"}/>
            </CardHeader>

          <CardBody>
            <SimpleGrid minChildWidth={"250px"}>
{/* column1 */}
              <Box mb={'10px'}>
                <Text 
                  color={"grey"} 
                  fontWeight={"700"} 
                  mb={'10px'}> 
                    {recipe.mealType} 
                </Text>

                <Heading 
                  fontSize={20} 
                  fontWeight={500} 
                  mb={'10px'}> 
                    {recipe.label} 
                </Heading>

                <Text 
                  fontSize={14} 
                  fontWeight={600}> 
                    Dish type: 
                </Text>
                <Text 
                  fontSize={14} 
                  mb={'10px'}> 
                    {recipe.dishType} 
                </Text>

                <Text 
                  fontSize={14} 
                  fontWeight={600}> 
                    Total cooking time: 
                </Text>
                <Text 
                  fontSize={14} 
                  mb={'10px'}> 
                    {recipe.totalTime} 
                </Text>

                <Text 
                  fontSize={14} 
                  fontWeight={600}> 
                    Servings: 
                </Text>
                <Text 
                  fontSize={14} 
                  mb={'10px'}> 
                    {recipe.yield} 
                </Text>

                <Text 
                  fontSize={14} 
                  fontWeight={600}> 
                    Ingredients:
                </Text>
                  {recipe.ingredientLines.map((ingredientline) => (
                    <Text 
                      fontSize={14} 
                      key={ingredientline}> 
                        {ingredientline} 
                    </Text> ))}
                </Box>
{/* column2 */}
              <Box>
                
                <Box mb={"10px"} >
                  <Text 
                    fontSize={14} 
                    fontWeight={600}>
                      Health labels:
                  </Text> 
                    {recipe.healthLabels.map((healthlabel) => (
                      <Tag 
                        bg={"purple.100"} 
                        mr={"10px"} 
                        mb={"10px"} 
                        key={healthlabel}> 
                          {healthlabel} 
                      </Tag> ))}
                </Box>

                <Box mb={"10px"} > 
                  <Text 
                    fontSize={14} 
                    fontWeight={600}>
                        Diet: 
                  </Text>
                    {recipe.dietLabels.map((dietlabel) => (
                      <Tag 
                        bg={"yellow.100"} 
                        mr={"10px"} 
                        key={dietlabel}> 
                          {dietlabel} 
                      </Tag> ))}
                </Box>

                <Box> 
                  <Text 
                    fontSize={14} 
                    fontWeight={600}>
                      Cautions: 
                  </Text>
                  <Box mb={"20px"} > 
                    {recipe.cautions.map((caution) => (
                      <Tag 
                        bg={"pink.100"} 
                        mr={"10px"} 
                        key={caution}> 
                          {caution} 
                      </Tag> ))} 
                  </Box> 
                </Box>

                <Box> 
                  <Text fontWeight={500}> 
                    Total nutrients: 
                  </Text>
                    <Tag 
                      bg={"blue.100"} 
                      mr={"10px"} 
                      mb={"10px"}> 
                        {Math.round(recipe.totalNutrients["ENERC_KCAL"].quantity)} {recipe.totalNutrients["ENERC_KCAL"].unit} 
                    </Tag>
                    <Tag 
                      bg={"blue.100"} 
                      mr={"10px"} 
                      mb={"10px"}> 
                        {Math.round(recipe.totalNutrients["PROCNT"].quantity)} {recipe.totalNutrients["PROCNT"].unit} 
                          protein 
                    </Tag>
                    <Tag 
                      bg={"blue.100"} 
                      mr={"10px"} 
                      mb={"10px"}> 
                        {Math.round(recipe.totalNutrients["FAT"].quantity)} {recipe.totalNutrients["FAT"].unit} 
                          fat 
                    </Tag>
                    <Tag 
                      bg={"blue.100"} 
                      mr={"10px"} 
                      mb={"10px"}> 
                        {Math.round(recipe.totalNutrients["CHOCDF"].quantity)} {recipe.totalNutrients["CHOCDF"].unit} 
                          carbs 
                    </Tag>
                    <Tag 
                      bg={"blue.100"} 
                      mr={"10px"} 
                      mb={"10px"}> 
                        {Math.round(recipe.totalNutrients["CHOLE"].quantity)} {recipe.totalNutrients["CHOLE"].unit} 
                          cholesterol 
                    </Tag>
                    <Tag 
                      bg={"blue.100"} 
                      mr={"10px"} 
                      mb={"10px"}> 
                        {Math.round(recipe.totalNutrients["NA"].quantity)} {recipe.totalNutrients["NA"].unit} 
                          sodium 
                    </Tag>
                  </Box>
                </Box>
              </SimpleGrid>
            </CardBody>

          <CardFooter>
            <Button 
              bgColor="green.100" 
              color={'black'} 
              padding={'8px'} 
              onClick={() => clickFn()}> 
                Back to all recipes 
            </Button>
          </CardFooter>
        </Card>
      </Center>
    </>
  );
};