import React from 'react';
import './App.css';
import logo from './assets/logo.png';
import search from './assets/search.png';
import location from './assets/location.png';
import back_arrow from './assets/back_arrow.png';
import share from './assets/share.png';
import like from './assets/like.png';
import mountain from './assets/mountain.png';
import check_mark from './assets/check_mark.png';
import person from './assets/person.png';
import right_arrow from './assets/right_arrow.png';
import cups from './assets/cups.webp';
import coffee from './assets/coffee.png';

const App = () => {
  return (
    <div className="container">
      {/* Header */}
      <header>
        <img className='logo' src={logo} alt="logo" />

        {/* Search bar */}
        <div className="search-bar">
          <div className="search-input">
            <img src={search} alt="search_icon" />
            <input type="text" placeholder='"Gluten Free Restaurants"' />
          </div>
          
          <div className="divider"></div>

          {/* Location input */}
          <div className="location-input">
            <img src={location} alt="location_icon" />
            <input type="text" placeholder="2374 Willow St. Ave" />
          </div>    
        </div>
        
        {/* Authentication buttons */}
        <div className="auth-buttons">
          <button className='left_button'>Sign Up</button>
          <button className='right_button'>Log In</button>
        </div>
      </header>

      {/* Restaurant section */}
      <div className='restaurant'>
        {/* Top section */}
        <div className='top'>
          <div className='top-left'>
            <img src={back_arrow} alt='' />
          </div>
          <div className='top-right1'>
            <img src={share} alt='' />
            <img src={like} alt='' />
          </div>
        </div>

        {/* Bottom section */}
        <div className='bottom'>
          <img src={mountain} alt='' />
          <p>All (45) Photos</p>
        </div>
      </div>

      {/* Main section */}
      <section className='main'>
        {/* Left list section */}
        <div className='left-list'>
          <ul>
            <li>Best Matches</li>
            <li>Menu</li>
            <li>Dietary Info</li>
            <li>Reviews</li>
          </ul>
        </div>

        {/* Right main section */}
        <div className='right-main'>
          <div className='div2'> 
            {/* Daily grind and open status */}
            <div className='top-left'>
              <div className='top-left-line1'>
                <p>The Daily Grind</p>
                <img src={check_mark} alt=""/>
              </div>
              <div className='top-left-line2'>
                <p>1.2 miles away</p>
                <div className="divider"></div>
                <h3>Open</h3>
              </div>
            </div>

            {/* Add item section */}
            <div className='top-right'>
              <div className='person'>
                <img src={person} alt='' />
              </div>
              <div className='top-right-line1'>
                <p className='add_item'>Add item</p>
                <p>Add a new item to this menu</p>
              </div>
              <div className='arrow'>
                <img src={right_arrow} alt='' />
              </div>
            </div>
          </div>

          {/* Best Matches section */}
          <h2 className='title'>Best Matches</h2>
          <div className='best_match'>
            {/* Match items */}
            <div className='divs'>
              <img src={cups} alt='' />
              <div className='avocado'>Avocado Green Toast</div>
              <div className='green'>100% Preference Match</div>
              <div className='price'>$8.99</div>
            </div>
            <div className='divs'>
              <img src={cups} alt='' />
              <div className='avocado'>Avocado Green Toast</div>
              <div className='green'>100% Preference Match</div>
              <div className='price'>$8.99</div>
            </div>
            <div className='divs'>
              <img src={cups} alt='' />
              <div className='avocado'>Avocado Green Toast</div>
              <div className='green'>100% Preference Match</div>
              <div className='price'>$8.99</div>
            </div>
            <div className='divs'>
              <img src={cups} alt='' />
              <div className='avocado'>Avocado Green Toast</div>
              <div className='green'>100% Preference Match</div>
              <div className='price'>$8.99</div>
            </div>
            <div className='divs'>
              <img src={cups} alt='' />
              <div className='avocado'>Avocado Green Toast</div>
              <div className='green'>100% Preference Match</div>
              <div className='price'>$8.99</div>
            </div>
          </div>

          {/* Appetizers section */}
          <h2 className='title'>Appetizers</h2>
          <div className='appetizers'>
            {/* Appetizer items */}
            <div className='last_divs'>
              <div className='image_coffee'>
                <img src={coffee} alt='' />
              </div>
              <div className='description'>
                <div className='heading'>
                  <p>English Breakfast</p>
                  <p>$8.99</p>
                </div>
                <div className='sub_heading'>
                  Fluffy pancakes, with their golden-brown exteriors and soft, airy interiors, are a quintessential breakfast deli..
                </div>
                <div className='blue'>
                  75% Dietary Match
                </div>
              </div>
            </div>
            <div className='last_divs'>
              <div className='image_coffee'>
                <img src={coffee} alt='' />
              </div>
              <div className='description'>
                <div className='heading'>
                  <p>English Breakfast</p>
                  <p>$8.99</p>
                </div>
                <div className='sub_heading'>
                  Fluffy pancakes, with their golden-brown exteriors and soft, airy interiors, are a quintessential breakfast deli..
                </div>
                <div className='blue'>
                  75% Dietary Match
                </div>
              </div>
            </div>
            <div className='last_divs'>
              <div className='image_coffee'>
                <img src={coffee} alt='' />
              </div>
              <div className='description'>
                <div className='heading'>
                  <p>English Breakfast</p>
                  <p>$8.99</p>
                </div>
                <div className='sub_heading'>
                  Fluffy pancakes, with their golden-brown exteriors and soft, airy interiors, are a quintessential breakfast deli..
                </div>
                <div className='blue'>
                  75% Dietary Match
                </div>
              </div>
            </div>
            <div className='last_divs'>
              <div className='image_coffee'>
                <img src={coffee} alt='' />
              </div>
              <div className='description'>
                <div className='heading'>
                  <p>English Breakfast</p>
                  <p>$8.99</p>
                </div>
                <div className='sub_heading'>
                  Fluffy pancakes, with their golden-brown exteriors and soft, airy interiors, are a quintessential breakfast deli..
                </div>
                <div className='blue'>
                  75% Dietary Match
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>

    </div>
  );
};

export default App;
