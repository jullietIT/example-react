import PropTypes from 'prop-types';
import { Recipe } from '../Recipe/Recipe';
import { ListItem, List } from './RecipeList.styled.js';

export const RecipeList = ({ recipes }) => {
  return (
    <List>
      {recipes.map(recipe => (
        <ListItem key={recipe.id}>
          <Recipe recipe={recipe} />
        </ListItem>
      ))}
    </List>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
