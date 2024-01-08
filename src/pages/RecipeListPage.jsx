import { RecipeCard } from '../components/RecipeCard';
import { SimpleGrid, Heading, Box, Center, Input } from '@chakra-ui/react';
import { useState } from 'react';

export const RecipeListPage = ({ recipes, clickFn }) => {
	const [searchRecipe, setSearchRecipe] = useState('');

	const handleChange = (event) => {
		setSearchRecipe(event.target.value);
	};

  return (
    <Box gap={8} h="100vh" bgColor="#eed4c9">
      <Center>
        <Heading margin="50px">My Recipe App</Heading>
      </Center>

      <Center>
        <Input placeholder='Search for a recipe' width={"50%"} mb="50px" onChange={handleChange}></Input>
      </Center>

      <SimpleGrid minChildWidth={"350px"} bgColor="#eed4c9">
        {recipes
          .filter((recipe) => {
            const searchResultsName = recipe.recipe.label.toLowerCase().includes(searchRecipe.toLowerCase());
            const searchResultsHealthlabel = recipe.recipe.healthLabels.some(healthlabel => healthlabel.toLowerCase().includes(searchRecipe.toLowerCase()));
            return searchResultsName || searchResultsHealthlabel
          })
          .map((recipe) => ( <RecipeCard key={recipe.label} recipe={recipe} {...recipe} clickFn={clickFn} /> 
          ))
        }
      </SimpleGrid>
    </Box>
  );
};
