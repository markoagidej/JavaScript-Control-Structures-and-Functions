let isLoggedIn = true
let items = {apple:2, orange:3, banana:1}
let cart = []

function addItem(cart, item) {
    cart.push(item)
    return cart
}

// Task 1: Implement a conditional statement to check if a user is logged in before allowing them to add items to the cart.
if (isLoggedIn) {
    // Task 2: Use a loop to display the list of available products to the user and add functionality for users to add products to their cart.
    
    addItem(cart, "apple");
    addItem(cart, "apple");
    addItem(cart, "orange");

    for (const item in items) {
        console.log(item)
    }

    // Task 3: Calculate the total cost of the items in the cart and display it to the user.
    let totalCost = 0
    for (const item in cart) {
        totalCost += items[cart[item]]
    }
    console.log(totalCost)
}