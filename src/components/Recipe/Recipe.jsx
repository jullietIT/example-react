import PropTypes from 'prop-types';
import { RecipeDifficulty } from 'components/RecipeDiffuculty/RecipeDifficulty';
import { RecipeInfo } from 'components/RecipeInfo/RecipeInfo';
import { Title, Wrapper, Image } from './Recipe.styled';
import { Component } from 'react';

export class Recipe extends Component {
  state = {
    isOpen: false, // разворот карточки 2
  };
  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };
  // static defaultProps={}  указывают если данные не обязательны,  внашем случае они обязательны 2:1-39

  render() {
    const { isOpen } = this.state; // разворот карточки 1(2:1-39)
    const {
      recipe: {
        name,
        time,
        servings,
        calories,
        difficulty,
        image = 'http://www.tawridqatarwll.com/simsimarealestate.com/application/modules/themes/views/default/assets/images/image-placeholder-64x64.png',
      },
    } = this.props;

    return (
      <Wrapper>
        <Image src={image} alt={name} onClick={this.toggle} />
        <Title>{name}</Title>
        {isOpen && (
          <>
            <RecipeInfo time={time} servings={servings} calories={calories} />
            <RecipeDifficulty difficulty={difficulty} />
          </>
        )}
      </Wrapper>
    );
  }
}

Recipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']),
  }),
};
