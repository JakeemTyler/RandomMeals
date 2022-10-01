const entree1 ={

starter:
"Smoked Salmon",

main:
"Pesto Pasta with Chicken",

dessert:
"Spiced Pumpkin Pie",
}; 

const entree2 = {

starter:
"Duck & Orange Salad",

main:
"Broccoli and Chicken Stir-Fry",

dessert:
"Oreo and Peanut Butter Pie",
};

const entree3 = {
starter:
"Sticky Mango Prawns",

main: 
"Best Parmesan Chicken Bake",

dessert:
"Gingerbread brownies",
};

const entree4 ={

starter:
"Vegan Crab Cakes",
    
main:
"Chicken with Lemon-Caper Sauce",
    
dessert:
"Caramel Cake",
}; 
    
const entree5 = {
    
starter:
"Fried Mashed Potato Balls ",
    
main:
"Stuffing Meatloaf",
    
dessert:
"Dark Chocolate Self-Sauce Pudding",
};
    
const entree6 = {
starter:
"Classic Garlic Bread",
    
main: 
"Baked Lemon Butter Chicken Thighs",
    
dessert:
"Baked Ricotta",
};

const entree7 ={

starter:
"Spinach Artichoke Courgette Bites",
        
main:
"Chicken Lo Mein",
        
dessert:
"Chocolate Cake",
}; 
        
const entree8 = {
        
starter:
"Cheesy Pull-Apart Garlic Bread",
        
main:
"Chicken Enchiladas",
        
dessert:
"Sweet Potato Pie",
};

const entree9 = {
        
    starter:
    "Garlic Bites with Tomato sauce",
            
    main:
    "Chicken Alfredo",
            
    dessert:
    "Red Velvet Cake",
    };

    const entree10 = {
        
        starter:
        "Potato Wedges",
                
        main:
        "BBQ Turkey Burger with Mashed Potatoes",
                
        dessert:
        "Cherry Pie",
        };
        
const meals=[
    entree1,
    entree2,
    entree3,
    entree4,
    entree5,
    entree6,
    entree7,
    entree8,
    entree9,
    entree10
];

const randomMealSelected = function(){
    let mealNumber = Math.floor(Math.random() * meals.length);

    // Choose random meal
    let randomMean = meals[mealNumber];
    showMeal(randomMean);
    console.log(randomMean);
};

// Show Random Meal
const showMeal = (mealNumber) => {
    let mealString = `Start with:  ${mealNumber.starter},
    followed by:  ${mealNumber.main},
    and finish off your meal with:  ${mealNumber.dessert}`;

    let area= document.querySelector(".meals");
    area.innerHTML = mealString;
};