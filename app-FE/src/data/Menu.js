import baconBurger from '../../public/images/Bacon-Ranch-Burger.jpg'
import bbqPizza from '../../public/images/BBQ-Chicken-Pizza.jpg'
import capreseSandwich from '../../public/images/Caprese-Sandwich.jpg'
import classicBurger from '../../public/images/Classic-Cheeseburger.jpg'
import clubSandwich from '../../public/images/Classic-Club-Sandwich.jpg'
import classicPizza from '../../public/images/Classic-Pepperoni-Pizza.jpg'
import soda from '../../public/images/Classic-Soda.jpg'
import chickenNugget from '../../public/images/delicious-crispy-chicken-nuggets-with-salt-and-spi-2024-12-13-02-43-28-utc.jpg'
import freshLemonade from '../../public/images/Fresh-Lemonade.jpg'
import chickenSandwich from '../../public/images/Grilled-Chicken-Sandwich.jpg'
import icedCoffee from '../../public/images/Iced-Coffee.jpg'
import miniBurger from '../../public/images/large-and-mini-burgers-with-fries-2023-12-06-00-29-08-utc.jpg'
import milkShake from '../../public/images/Milkshake.JPG'
import miniPizza from '../../public/images/mini-pizza-buns-are-delicious-snacks-2024-11-11-18-05-47-utc.jpg'
import phillyCheesesteake from '../../public/images/Philly-Cheesesteak.jpg'
import biancoPizza from '../../public/images/Pizza-Bianco-with-Rosemary-and-Pancetta.jpg'
import jalapenoBurger from '../../public/images/Spicy-Jalapeno-Burger.jpg'
import veggieBurger from '../../public/images/Veggie-Burger.jpg'
import veggiePizza from '../../public/images/Veggie-Delight-Pizza.jpg'
import pizzaIcon from '../../public/Menu/pizza.png'
import sandwichIcon from '../../public/Menu/Sandwich.png'
import drinkIcon from '../../public/Menu/Drink.png'
import burgerIcon from '../../public/Menu/burger.png'
import kidMealIcon from '../../public/Menu/kidmeal.png'
export const menu = [
    {
        "category": "Pizza",
        catImg: pizzaIcon,
        "items": [
            {
                image: classicPizza,
                "name": "Classic Pepperoni Pizza",
                "description": "A crispy crust topped with marinara sauce, melted mozzarella cheese, and savory pepperoni slices.",
                "price": 12.99
            },
            {
                image: biancoPizza,
                "name": "Pizza Bianco with Rosemary and Pancetta",
                "description": "A creamy white pizza with potatoes, pancetta, rosemary, garlic cream cheese, and herbs.",
                "price": 11.49
            },
            {
                image: bbqPizza,
                "name": "BBQ Chicken Pizza",
                "description": "Delicious barbecue-drizzled chicken pizza topped with onions and green peppers.",
                "price": 13.99
            },
            {
                image: veggiePizza,
                "name": "Veggie Delight Pizza",
                "description": "Loaded with bell peppers, onions, black olives, mushrooms, and marinara sauce.",
                "price": 12.49
            }
        ]
    }
    ,
      {
         "category": "Burger",
         catImg: burgerIcon,
         "items": [
             {
                image: classicBurger,
                 "name": "Classic Cheeseburger",
                 "description": "Juicy beef patty with cheddar cheese, lettuce, tomato, pickles, and signature sauce.",
                 "price": 8.99
             },
             {
                image: baconBurger,
                 "name": "Bacon Ranch Burger",
                 "description": "A beef patty paired with crispy bacon, fresh lettuce, tomato, and ranch dressing.",
                 "price": 9.99
             },
             {
                image:jalapenoBurger,
                 "name": "Spicy Jalapeño Burger",
                 "description": "Pepper jack cheese and jalapeños give this burger a flavorful, spicy kick.",
                 "price": 9.49
             },
             {
                image:veggieBurger,
                 "name": "Veggie Burger",
                 "description": "Plant-based patty served with avocado, lettuce, tomato, and vegan mayo.",
                 "price": 9.49
             }
         ]
     },
     {
         "category": "Sandwich",
         catImg: sandwichIcon,
         "items": [
             {
                image: clubSandwich,
                 "name": "Classic Club Sandwich",
                 "description": "Layers of turkey, ham, bacon, lettuce, tomato, and mayo on toasted bread.",
                 "price": 7.99
             },
             {
                image: chickenSandwich,
                 "name": "Grilled Chicken Sandwich",
                 "description": "Tender grilled chicken breast with lettuce, tomato, and honey mustard on a toasted bun.",
                 "price": 8.49
             },
             {
                image: phillyCheesesteake,
                 "name": "Philly Cheesesteak",
                 "description": "Thinly sliced steak with sautéed onions, peppers, and melted provolone cheese.",
                 "price": 9.99
             },
             {
                image: capreseSandwich,
                 "name": "Caprese Sandwich",
                 "description": "Fresh mozzarella, tomatoes, basil, and balsamic glaze on a ciabatta bread.",
                 "price": 7.99
             }
         ]
     },
     {
         "category": "Drink",
         catImg: drinkIcon,
         "items": [
             {
                image: soda,
                 "name": "Classic Soda",
                 "description": "Refreshing Coke, Sprite, or Dr Pepper.",
                 "price": 1.99
             },
             {
                image: freshLemonade,
                 "name": "Fresh Lemonade",
                 "description": "Homemade lemonade with a touch of mint for added refreshment.",
                 "price": 2.49
             },
             {
                image: icedCoffee,
                 "name": "Iced Coffee",
                 "description": "Cold-brew coffee served with milk and sweetener.",
                 "price": 3.49
             },
             {
                image: milkShake,
                 "name": "Milkshake",
                 "description": "Creamy milkshake available in vanilla, chocolate, or strawberry flavors.",
                 "price": 4.49
             }
         ]
     },
     {
         "category": "Kids Meal",
         catImg: kidMealIcon,
         "items": [
             {
                image: miniBurger,
                 "name": "Mini Cheeseburger Meal",
                 "description": "A beef slider with a side of fries and a juice box.",
                 "price": 6.99
             },
             {
                image: chickenNugget,
                 "name": "Chicken Nuggets Meal",
                 "description": "Six crispy chicken nuggets served with fries and a juice box.",
                 "price": 6.49
             },
             {
                image: miniPizza,
                 "name": "Mini Pizza Meal",
                 "description": "A kid-sized pizza with cheese and marinara sauce, served with a small drink.",
                 "price": 6.99
             }
         ]
     }
    
]


