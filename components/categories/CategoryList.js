import ScreenView from '../views/ScreenView';

categories = ['dev', 'food', 'science'];

const CategoryList = {};
categories.map(category => {
  return (CategoryList[category] = {
    screen: ScreenView,
  });
});

console.log(CategoryList);
export default CategoryList;
