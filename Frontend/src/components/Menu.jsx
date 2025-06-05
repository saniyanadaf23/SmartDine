import React from 'react'
// import { data } from '../restApi.json' // no need for data if we're not showing dishes

const Menu = () => {
  return (
    <>
      {/* 
      <section className='menu' id='menu'>
        <div className="container">
          <div className="heading_section">
            <h1 className="heading">POPULAR DISHES</h1>
            <p>Discover the flavors that keep our guests coming back! Each dish is crafted with the freshest ingredients and authentic recipes, bringing you a taste of perfection in every bite.</p>
          </div>
          <div className="dishes_container">
            {
              data[0].dishes.map(element => (
                <div className="card" key={element.id}>
                  <img src={element.image} alt={element.title} />
                  <h3>{element.title}</h3>
                  <button>{element.category}</button>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      */}
      {/* Menu Component is ready for new content! 🎨 */}
    </>
  )
}

export default Menu
