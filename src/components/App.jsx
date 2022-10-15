import { RecipeList } from './RecipeList/RecipeList';
import recipes from '../data/recipe.json';
import { PaymentWidget } from './PaymentWidget/PaymentWidget';

export const App = () => {
  return (
    <>
      {/* <RecipeList recipes={recipes} /> */}
      <PaymentWidget />
    </>
  );
};
