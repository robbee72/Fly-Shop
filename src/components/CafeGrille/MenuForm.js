import React from 'react';

class BreakfastForm extends React.Component {
  render() {
    return (
      <div className="parent">
        <div className="column col-left">
          <div className="content-container__menu">
            <div className="fm-lo__title">Eggs</div>
            <div className="fm-lo__subtitle">Classic Eggs Bendict</div>
            <div className="fm-lo__fm">
              Two poached eggs, english muffin, baked country ham, <br />
              fresh spinach, tomato, with hollandise sauce, touch of cayene
              pepper. <br />
              Served withHash browns
            </div>
            <div className="fm-lo__price">20.</div>
            <div className="fm-lo__subtitle">Turkey Avocado Bendict</div>
            <div className="fm-lo__fm">
              Poached eggs, housemade turkey sausage, avocado, smoked tomato
            </div>
            <div className="fm-lo__price">23.</div>
            <div className="fm-lo__subtitle">Three Egg Breakfast</div>
            <div className="fm-lo__fm">
              Three Egg Breakfast three eggs your way, skillet potatoes, choice
              of meat
            </div>
            <div className="fm-lo__price">18.</div>
            <div className="fm-lo__subtitle">Fried Eggs </div>
            <div className="fm-lo__fm">
              Your choice | Sunny side up | Over easy | Fried with a touch of
              crispy
            </div>
            <div className="fm-lo__subtitle">Boiled Eggs</div>
            <div className="fm-lo__fm">
              Two Hard Boiled Eggs <br />
              Two Softed Boiled Eggs
              <br />
              <br />
              Any egg dish made with egg whites–add All eggs are cage free.
            </div>
          </div>
        </div>
        <div className="column col-mid">
          <div className="content-container__menu">
            <div className="fm-lo__title">Specials</div>
            <div className="fm-lo__subtitle">Steak & Eggs</div>
            <div className="fm-lo__fm">
              beef tenderloin, eggs your way, crispy onions, skillet potatoes
            </div>
            <div className="fm-lo__price">22.</div>
            <div className="fm-lo__subtitle">Pancake & Eggs</div>
            <div className="fm-lo__fm">
              buttermilk pancake, two eggs your way, choice of meat
            </div>
            <div className="fm-lo__price">16.</div>
            <div className="fm-lo__subtitle">Huevos Rancheros Skillet</div>
            <div className="fm-lo__fm">
              <p>eggs your way, tostada, peppers, onions, chorizo, </p>
              <p>Cotija cheese,country potatoes, sour cream, </p>
              <p>spicy chile de árbol, avocado salsas</p>
            </div>
            <div className="fm-lo__price">18.</div>
            <div className="fm-lo__subtitle">Waffles</div>
            <div className="fm-lo__fm">
              Your choice fruit, spiced maple syrup
            </div>
            <div className="fm-lo__subtitle">Croissant French Toast</div>
            <div className="fm-lo__fm">lemon coconut yogurt, mixed berries</div>

            <div className="fm-lo__subtitle"> Omelettes</div>
            <div className="fm-lo__fm">
              <p>build your own</p>
            </div>
          </div>
        </div>
        <div className="column col-right">
          <div className="content-container__menu">
            <div className="fm-lo__title">Drinks</div>
            <div className="fm-lo__subtitle">Coffee, Espresso & Tea</div>
            <div className="fm-lo__fm">
              <p> Coffee 4.75 </p>
              <p>Espresso Single 5.50 </p>
              <p>Double 7. </p>
              <p>Cappuccino 6.50 </p>
              <p>Café Latte 6.50 </p>
              <p>
                Add a Shot of Flavor 1. caramel, chocolate, vanilla, hazelnut,
                chai, sugar free vanilla
              </p>
              <p>Tea Forté Hot Tea 5 </p>
              <p>Hot Chocolate 5.50 </p>
            </div>
            <div className="fm-lo__subtitle">Drinks Juices</div>
            <div className="fm-lo__fm">
              <p> Milk 4.75 </p>
              <p>Fresh Squeezed Juices 5.50 </p>
              <small>orange, grapefruit, carrot</small>
              <p>Juices 5.5 </p>
              <small>apple, cranberry, pineapple, tomato</small>
              <p>Mixed Berry Smoothie 7.50 </p>
              <small>
                yogurt, strawberries, blueberries, raspberries, orange juice
              </small>
              <p>Breakfast Cocktails Signature Bloody Mary 11. </p>
              <small>
                Absolut Peppar Vodka, Signature Bloody Mary Mix, fresh lemon
                juice
              </small>
              <p> Sparkling Cocktails 12 sparkling wine, bellini, mimosa</p>
            </div>
            <div className="fm-lo__subtitle">Sides</div>
            <div className="fm-lo__fm">
              <p>Bacon</p>
              <p>Sausage</p>
              <p>Ham</p>
              <p>Hash Browns</p>
              <p>Baked Cubes</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BreakfastForm;
