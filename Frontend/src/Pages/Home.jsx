import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';  
import About from '../components/About';  
import Qualities from '../components/Qualities';
import Menu from '../components/Menu';
import WhoAreWe from '../components/WhoAreWe';
import Team from '../components/Team';
import Reservation from '../components/Reservation';
import Footer from '../components/Footer';

// Popular Dishes data
const dishes = [
  {
    id: 1,
    name: 'Chicken Dum Biryani',
    image: '/images/chicken-biryani.jpg',
    description: 'A slow-cooked, aromatic rice dish where tender chicken is layered with fragrant basmati rice and spices, cooked under a sealed lid using the "dum" method. This technique locks in the flavors and aroma, creating a deeply flavorful and aromatic biryani.',
    category: 'Lunch & Dinner'
  },
  {
    id: 2,
    name: 'Chicken tikka masala with butter naan',
    image: '/images/chicken-naan2.jpg',
    description: 'Succulent, charred pieces of chicken dance in a silky, rich tomato-based curry, butter-soft and spiced just right. And that butter naan? Fluffy, slightly crispy, and perfect for swooping up pools of that luscious gravy.ad and honey.',
    category: 'Lunch & Dinner'
  },
  {
    id: 3,
    name: 'Ghee rice',
    image: '/images/ghee-rice.jpg',
    description: 'Simple and fragrant. It’s basmati rice cooked with ghee (clarified butter) and lightly spiced with ingredients like cloves, cardamom, and cinnamon. Topped with fried cashews or raisins for extra richness.ad.',
    category: 'Lunch & Dinner'
  },
  {
    id: 4,
    name: 'Creamy garlic pasta',
    image: '/images/garlic-pasta.jpg',
    description: 'Pasta is cooked and tossed in a smooth, creamy sauce full of garlic flavor. It’s finished with a sprinkle of herbs and cheese, making it rich but easy to eat.eart.',
    category: 'Lunch & Dinner'
  },
  {
    id: 5,
    name: 'Palak paneer',
    image: '/images/Palak-Paneer.jpg',
    description: 'A North Indian dish where paneer cubes (a type of fresh cheese) are cooked in a creamy spinach gravy. It’s mildly spiced and very comforting, giving you both nutrition and flavor in every spoonful..',
    category: 'Lunch & Dinner'
  },
  {
    id: 6,
    name: 'Paneer Butter Masala',
    image: '/images/paneer-butter-masala.jpg',
    description: 'Rich, buttery gravy made with tomatoes, cream, and spices, wrapped around tender cubes of paneer.',
    category: 'Lunch & Dinner'
  },
  {
    id: 7,
    name: 'Veg Pulao',
    image: '/images/veg-pulao.jpg',
    description: 'A fragrant rice dish loaded with colorful vegetables and mildly spiced with whole garam masalas.',
    category: 'Lunch & Dinner'
  },
  {
    id: 8,
    name: 'Grilled Sandwich',
    image: '/images/grilled-sandwich.jpg',
    description: 'Crispy grilled bread filled with cheesy, spicy vegetables or chicken stuffing — perfect for a quick snack.',
    category: 'Snacks'
  },
  {
    id: 9,
    name: 'Chocolate Brownie',
    image: '/images/chocolate-brownie.jpg',
    description: 'A rich, fudgy chocolate dessert with a crackly top and a gooey center — heaven for chocolate lovers!',
    category: 'Dessert'
  },
  {
    id: 10,
    name: 'Paneer Tikka',
    image: '/images/paneer-tikka.jpg',
    description: 'Grilled cubes of marinated paneer served with mint chutney.',
    category: 'Snacks'
  },
  {
    id: 11,
    name: 'Chole Bhature',
    image: '/images/chole-bhature.jpg',
    description: 'Spicy chickpeas served with deep-fried bread, a North Indian favorite.',
    category: 'Lunch & Dinner'
  },
  {
    id: 12,
    name: 'Samosa',
    image: '/images/samosa.jpg',
    description: 'Crispy pastry filled with spiced potatoes and peas, served with chutney.',
    category: 'Snacks'
  },
  {
    id: 13,
    name: 'Butter Chicken',
    image: '/images/butter-chicken.jpg',
    description: 'Tender chicken cooked in a creamy tomato sauce, best served with naan.',
    category: 'Lunch & Dinner'
  },
  {
    id: 14,
    name: 'Momos',
    image: '/images/momos.jpg',
    description: 'A steamed dumpling made from wheat dough flat and stuffed with minced meats, vegetables, spices and herbs usually served with chutney.',
    category: 'Snacks'
  },
  {
    id: 15,
    name: 'Aloo Gobi',
    image: '/images/aloo-gobi.jpg',
    description: 'A classic Indian dish made with potatoes and cauliflower, seasoned with spices.',
    category: 'Lunch & Dinner'
  },
  {
    id: 16,
    name: 'Pav Bhaji',
    image: '/images/pav-bhaji.jpg',
    description: 'A spicy vegetable mash served with buttered bread rolls, a popular street food.',
    category: 'Snacks'
  },
  {
    id: 17,
    name: 'Daal Makhani',
    image: '/images/daal-makhani.jpg',
    description: 'Creamy black lentils cooked with butter and spices, served with rice or naan.',
    category: 'Lunch & Dinner'
  },
  {
    id: 18,
    name: 'Tandoori Chicken',
    image: '/images/tandoori-chicken.jpg',
    description: 'Chicken marinated in yogurt and spices, cooked in a traditional tandoor oven.',
    category: 'Lunch & Dinner'
  },
  {
    id: 19,
    name: 'Methi Thepla',
    image: '/images/methi-thepla.jpg',
    description: 'Spiced flatbreads made with fenugreek leaves, perfect for breakfast or snacks.',
    category: 'Snacks'
  },
  {
    id: 20,
    name: 'Ras Malai',
    image: '/images/ras-malai.jpg',
    description: 'Soft cheese dumplings soaked in sweetened milk, garnished with pistachios.',
    category: 'Dessert'
  },
  {
    id: 21,
    name: 'Bhel Puri',
    image: '/images/bhel-puri.jpg',
    description: 'A tangy and crunchy snack made with puffed rice, vegetables, and tamarind sauce.',
    category: 'Snacks'
  },
  {
    id: 22,
    name: 'Kadai Paneer',
    image: '/images/kadai-paneer.jpg',
    description: 'Paneer cooked with bell peppers and spices in a wok-like vessel called a kadai.',
    category: 'Lunch & Dinner'
  },
  {
    id: 23,
    name: 'Pani Puri',
    image: '/images/pani-puri.jpg',
    description: 'Crispy hollow puris filled with spicy tamarind water and chickpeas.',
    category: 'Snacks'
  },
  {
    id: 24,
    name: 'Lassi',
    image: '/images/lassi.jpg',
    description: 'A refreshing yogurt-based drink, available in sweet or salty flavors.',
    category: 'Beverage'
  },
  {
    id: 25,
    name: 'Gulab Jamun',
    image: '/images/gulab-jamun.jpg',
    description: 'Deep-fried dough balls soaked in sugar syrup, a beloved Indian dessert.',
    category: 'Dessert'
  },
  {
    id: 26,
    name: 'Vegetable Manchurian',
    image: '/images/vegetable-manchurian.jpg',
    description: 'Fried vegetable balls tossed in a tangy Indo-Chinese sauce.',
    category: 'Snacks'
  },
  {
    id: 27,
    name: 'Egg Curry',
    image: '/images/egg-curry.jpg',
    description: 'Hard-boiled eggs cooked in a spicy tomato and onion gravy.',
    category: 'Lunch & Dinner'
  },
  {
    id: 28,
    name: 'Pasta Primavera',
    image: '/images/pasta-primavera.jpg',
    description: 'Pasta tossed with fresh vegetables and a light garlic sauce.',
    category: 'Lunch & Dinner'
  },
  {
    id: 29,
    name: 'Sooji Halwa',
    image: '/images/sooji-halwa.jpg',
    description: 'A sweet dish made from semolina, ghee, and sugar, garnished with nuts.',
    category: 'Dessert'
  },
  {
    id: 30,
    name: 'Chaat',
    image: '/images/chaat.jpg',
    description: 'A savory snack made with a mix of potatoes, chickpeas, and tangy sauces.',
    category: 'Snacks'
  },
  {
    id: 31,
    name: 'Aloo Paratha',
    image: '/images/aloo-paratha.jpg',
    description: 'A stuffed flatbread made with whole wheat flour and spiced mashed potatoes, served with yogurt and pickles.',
    category: 'Breakfast'
  },
  {
    id: 32,
    name: 'Idli',
    image: '/images/idli.jpg',
    description: 'Steamed rice cakes made from fermented rice and lentil batter, typically served with coconut chutney and sambar.',
    category: 'Breakfast'
  },
  {
    id: 33,
    name: 'Dosa',
    image: '/images/dosa.jpg',
    description: 'Crispy crepes made from fermented rice and lentil batter, often served with chutneys and sambar.',
    category: 'Breakfast'
  },
  {
    id: 34,
    name: 'Pongal',
    image: '/images/pongal.jpg',
    description: 'A savory dish made with rice and lentils, flavored with black pepper, cumin, and ghee, often garnished with cashews.',
    category: 'Breakfast'
  },
  {
    id: 35,
    name: 'Upma',
    image: '/images/upma.jpg',
    description: 'A savory dish made from semolina, cooked with vegetables and spices, often garnished with coriander.',
    category: 'Breakfast'
  },
  {
    id: 36,
    name: 'Poha',
    image: '/images/poha.jpg',
    description: 'Flattened rice cooked with onions, mustard seeds, and turmeric, garnished with peanuts and coriander.',
    category: 'Breakfast'
  },
  {
    id: 37,
    name: 'Thepla',
    image: '/images/thepla.jpg',
    description: 'Spiced flatbreads made with whole wheat flour and fenugreek leaves, often served with yogurt.',
    category: 'Breakfast'
  }
  
];

const Home = () => {
  const [selectedDish, setSelectedDish] = useState(null);

  const handleDishClick = (dish) => {
    setSelectedDish(dish);
  };

  const handleCloseDescription = () => {
    setSelectedDish(null);
  };

  return (
    <>
      <HeroSection />
      <About />
      <Qualities />

      {/* 🌟 This is your ONE AND ONLY Popular Dishes Section 🌟 */}
      <section style={{ padding: '40px', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '20px' }}>Popular Dishes</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {dishes.map(dish => (
            <div 
              key={dish.id} 
              onClick={() => handleDishClick(dish)}
              style={{
                width: '250px',
                cursor: 'pointer',
                boxShadow: '0px 2px 10px rgba(0,0,0,0.2)',
                borderRadius: '10px',
                overflow: 'hidden',
                transition: 'transform 0.2s',
                background: '#fff'
              }}
            >
              <img 
                src={dish.image} 
                alt={dish.name} 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div style={{ padding: '10px' }}>
                <span style={{
                  backgroundColor: '#333',
                  color: 'white',
                  padding: '5px 10px',
                  borderRadius: '20px',
                  fontSize: '12px'
                }}>
                  {dish.category}
                </span>
                <h3 style={{ marginTop: '10px' }}>{dish.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Dish Modal */}
        {selectedDish && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999
          }}>
            <div style={{
              background: '#fff',
              padding: '30px',
              borderRadius: '10px',
              textAlign: 'center',
              width: '400px'
            }}>
              <h2>{selectedDish.name}</h2>
              <p style={{ marginTop: '20px' }}>{selectedDish.description}</p>
              <button
                onClick={handleCloseDescription}
                style={{
                  marginTop: '20px',
                  padding: '10px 20px',
                  backgroundColor: '#333',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Then your regular journey continues 🛤️ */}
      <Menu />
      <WhoAreWe />
      <Team />
      <Reservation />
      <Footer />
    </>
  );
}

export default Home;
