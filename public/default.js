
var restaurantArray = [
  restaurant1 = {
    name: 'Taco Taco!',
    id: 1,
    cost: '$',
    type: 'Mexican',
    numberOfReviews: 34,
    stars: 4.5,
    image: "images/mexican1.jpg",
    info: "Find us to try our savory tacos, our enormous burritos, and delightful antojitos. Don't forget to grab your freshly made agua fresca and to grab salsas from our 20+ salsa bar.",
    reviews: [
      {
        name: 'Shawna C.',
        id: 1,
        stars: 4,
        image: "images/mexicanreview1.jpg",
        useful: 4,
        funny: 0,
        cool: 2,
        content: "'Holy moly! Is this place GOOD! Don't let the look of the truck deceive you. At least for me, I had seen this truck numerous times at the food truck event that we frequent, but nothing really jumped out to me from the outside. The truck is a pretty plain black with simple gold small writing of Classic Tacos. Plus, you can find tacos at a lot of places. One day we finally decided to give it a shot and I really regret not trying these guys out sooner!!'"
      },
      {
        name: 'Brian R.',
        id: 2,
        stars: 5,
        image: "images/mexicanreview2.jpg",
        useful: 1,
        funny: 4,
        cool: 0,
        content: 'Man I read some of these reviews and damn some people really take their yelping very seriously. Straight and to the point. Food was great. Food was fast. The biggest challenge is my 3.5 year old daughter who is absurdly picky and she ate most of my burrito. Would eat again'
      },
      {
        name: 'Angie M.',
        id: 3,
        stars: 5,
        image: "images/mexicanreview3.jpg",
        useful: 3,
        funny: 0,
        cool: 1,
        content: 'I have to start by saying... I am often disappointed by food trucks.  Most of the time, I feel a little ripped off, and I dont feel like the food was worth it. That is NOT the case with the Classic Tacos Truck.  I LOVED IT!'
      }
    ]
  },

  restaurant2 = {
    name: 'Pizza Unlimited',
    id: 2,
    cost: '$$',
    type: 'Pizza',
    numberOfReviews: 14,
    stars: 3.1,
    image: "images/pizza1.jpg",
    info: 'We offer a flexible approach to dining, combining a fast paced, informal atmosphere in the daytime and casual sit down dinner service in the evening. Our thin, crisp pizzas combine a delicate balance of fresh, unique flavors paired with our carefully cured and handcrafted dough.',
    reviews: [
      {
        name: 'Beast A.',
        id: 4,
        stars: 2,
        image: "images/pizzareview1.jpg",
        useful: 6,
        funny: 0,
        cool: 0,
        content: "Ownership is rude. Staff is nice and on a weeknight the place seems like a good option but in reality it takes a long time to wait for food (20 minutes tonight) and there are better options really close by. I went to NY pizza cuz I'd been there in the past and didn't want to risk the new Square One or the CPK across Jeffrey since both are new and I wasn't sure how long the wait would be. But I certainly will be giving those a try next time! Can't be difficult to beat $26 medium pepperoni pizza with breadsticks and super easy to do better than the impolite owner with tons of attitude. Im all for buying local but why patronize a small business if they are going to be rude?"
      },
      {
        name: 'Dana K.',
        id: 5,
        stars: 4,
        image: "images/pizzareview2.jpg",
        useful: 3,
        funny: 0,
        cool: 1,
        content: 'I love pizza by the slice since I can get a variety. My default is the white pizza with mozzarella and ricotta and sprinkles of pepper flakes. Their garlic knots are super garlicy and bready which I absolutely love. They use good sausage (nice and peppery) on their pepperoni and sausage pizza.'
      },
      {
        name: 'Aaron E.',
        id: 6,
        stars: 3,
        image: "images/pizzareview3.jpg",
        useful: 3,
        funny: 0,
        cool: 0,
        content: 'The pie itself is undoubtedly greasy, as the cheese top showcased pools of yellow oily liquid and the paper plate it arrived on had some areas saturated with grease as well. The marinara was quite good however, with a nice kick of basil in each bite and the perfect consistency of tomato paste. The Crust was also noteworthy, doughy on the inside, crusty on the outside and the crust to toppings ratio was spot on.'
      }
    ]
  },

  restaurant3 = {
    name: 'Urban Plates',
    id: 3,
    cost: '$$$',
    type: 'American',
    numberOfReviews: 198,
    stars: 4,
    image: 'images/american1.jpg',
    info: "We're farm to plate and won't break the bank! It's true. Farm means freshly delivered from local farms and producers. Plate means chef-crafted dishes piled high with one-of-a-kind flavors. Won't break the bank means you could pay twice as much for food this good.",
    reviews: [
      {
        name: 'Julie H.',
        id: 7,
        stars: 4,
        image: "images/americanreview1.jpg",
        useful: 4,
        funny: 0,
        cool: 0,
        content: 'My first impression of Urban Plates was that it was like a Lemonade done better. When I first walked in I immediately liked the variety in the seating arrangement. It includes a long narrow table on which people propped up their laptops and were working while others were able to eat and chat with the person across from them. They also offered 2 and 4 person tables around this longer table and plenty of outdoor seating on their covered patio.'
      },
      {
        name: 'Anh B.',
        id: 8,
        stars: 2,
        image: "images/americanreview2.jpg",
        useful: 2,
        funny: 0,
        cool: 0,
        content: "The dinner team tonight executed service really well!! Not sure if it's like this every weekend nights as we've only been here a handful of time. But well done!! The food backed up the line a little and some were sent back (our neighboring table :p but they were not the only ones) because they were undercooked but the team handled it very well!!"
      },
      {
        name: 'Joanna H.',
        id: 9,
        stars: 4,
        image: "images/americanreview3.jpg",
        useful: 1,
        funny: 0,
        cool: 2,
        content: "Recently, I've been trying to calm down my beer belly by eating healthier. I haven't consumed less beer... but I have been eating healthier! While figuring out a quick dinner with a few girlfriends, Urban Plates seemed like the perfect candidate for a healthy, faux-home-cooked meal with the fresh ingredients I was looking for. "
      }
    ]
  },

  restaurant4 = {
    name: 'Burger!',
    id: 4,
    cost: '$',
    type: 'American',
    numberOfReviews: 56,
    stars: 4.5,
    image: 'images/american2.jpg',
    info: "Intricately Simple - We are quite Intricate in our preparation, techniques, and craft. Yet, our menu is Simple, just good ol' fashioned grub.",
    reviews: [
      {
        name: 'Truong T.',
        id: 10,
        stars: 5,
        image: "images/americanreview4.jpg",
        useful: 3,
        funny: 0,
        cool: 0,
        content: 'Overall this was a wonderful food truck.  I had a great lunch experience here though it can be a bit pricey.  The total was about 40 bucks which is a bit insane for lunch but sometimes you gotta pay the cost to be a boss.'
      },
      {
        name: 'Stacy S.',
        id: 11,
        stars: 5,
        image: "images/americanreview5.jpg",
        useful: 2,
        funny: 0,
        cool: 0,
        content: 'Super awesome burger food truck!!  I learned of this place because it was stationed right outside of a brewery (Bottle Logic) that we were going to check out. I got their Savory Burger and it was perfection in every bite!  It has bacon relish, Swiss cheese, aioli and 3,000 sauce.'
      },
      {
        name: 'Rob D.',
        id: 12,
        stars: 4,
        image: "images/americanreview6.jpg",
        useful: 2,
        funny: 0,
        cool: 1,
        content: 'I ordered the Savory Cut burger that came with bacon relish, swiss cheese, aioli splash (their name for sauce) and the 3000 splash priced at $11.  The burger patty had a nice beefy, charred flavor and was pretty rich and moist.  They put this bacon relish on that has bacon pieces, capers and what looked like little smashed grapes.  It was really good and complimented the burger patty very well with the richness of the bacon and the sweet, tangy and slight pepper flavor of the capers and little smashed grapes.  The bun was very good being moist, buttery and bready holding up well to the burger patty and other ingredients.  Also, the swiss was a good choice for this rendition of a burger.'
      }
    ]
  },

  restaurant5 = {
    name: 'Pizza Cafe',
    id: 5,
    cost: '$$',
    type: 'Pizza',
    numberOfReviews: 74,
    stars: 4,
    image: "images/pizza2.jpg",
    info: 'Authentic Neapolitan Style Pizza made in a 900 degree wood fired oven. Closest to real Italian pizza outside of Naples, Italy.',
    reviews: [
      {
        name: 'Puja L.',
        id: 13,
        stars: 4,
        image: "images/pizzareview4.jpg",
        useful: 3,
        funny: 0,
        cool: 0,
        content: "Mix and match everything!  It's like a dream come true for a person who loves to sample things.  I'm a big fan of variety...and I got it at Pizza Cafe. You can do up to 4 different pizzas on your pie, and order a beer flight of any 4 of the beers they have on tap ($9). I will say that I didn't love their crust, but I was still a pretty happy customer. "
      },
      {
        name: 'Shelly C.',
        id: 14,
        stars: 4,
        image: "images/pizzareview5.jpg",
        useful: 2,
        funny: 0,
        cool: 1,
        content: "At first, we order first class pizza because it's so close to our house- 2 minute of drive, how convenient! AND after we tasted the pizza, we were impressive how good the pizza was! Their crust is the chewy, thicker type, which I love. However, there's also an ultra thin crust option on the menu. Kids like the Sweet Pig (Hawaiian) and plain cheese, my husband and I like the Zesty Italian and Popeye's Favorite. They were generous on toppings, not stingy at all! Our go-to pizza place when I don't feel like cooking!"
      },
      {
        name: 'Denise K.',
        id: 15,
        stars: 5,
        image: "images/pizzareview6.jpg",
        useful: 1,
        funny: 0,
        cool: 0,
        content: 'My favorite kind of pizza has crust that is crispy on the outside and chewy on the inside. Pizza Cafe serves up first class pizza dough - exactly how I like it! Not only do they have great flavors, but they are generous with the toppings too. We ordered an XL combo and it was enough for 4 average appetites. My family has a big appetite so we ordered another XL - pizza of the month: feta, garlic, spinach and roma tomatoes. The pizza of the month was my favorite of the two.'
      }
    ]
  },

  restaurant6 = {
    name: 'Aioli',
    id: 6,
    cost: '$$$$',
    type: 'American',
    numberOfReviews: 201,
    stars: 4,
    image: 'images/american3.jpg',
    info: 'Our restaurant serves great burgers, fresh salads, healthy meals and Chicago specialties.  Our catering service specializes in corporate catering, drop off catering, lunch catering, wedding and party catering. Let Aioli create an unforgettable experience for your next event.',
    reviews: [
      {
        name: 'Romuel Dave C.',
        id: 16,
        stars: 3,
        image: "images/americanreview7.jpg",
        useful: 3,
        funny: 0,
        cool: 0,
        content: 'I had really high hopes for this spot.  It is located inside the Main Place food court off Jamboree and Main.  This place has the makings of the perfect burger, but it sort of fell short of great in my book.  Perhaps its my choice on the menu that I made a mistake on... so I wont be too harsh.'
      },
      {
        name: 'Truong T.',
        id: 17,
        stars: 4,
        image: "images/americanreview8.jpg",
        useful: 4,
        funny: 0,
        cool: 0,
        content: "I've been eyeing Aioli for a while now but nobody wanted to go with me for lunch at work to it since my street cred has taken quite a hit from prior bad experiences (curses).  Finally I got somebody to trust me (sucker).  I came through with my coworker to a food court located on Main St.  The place was pretty runned down.  It lacked outer appeal but the interior was actually quite decent."
      },
      {
        name: 'Aaron E.',
        id: 18,
        stars: 2,
        image: "images/americanreview9.jpg",
        useful: 1,
        funny: 3,
        cool: 0,
        content: 'I can only give Aioli 2 stars and it is probably all of my own fault. No fewer than 10 people I follow on Yelp and a few co-workers have raved about the food at Aioli by mouth or in reviews so I have had this one bookmarked for quite a while now. The opportunity to stop for lunch finally arose and I think I totally blew it while ordering. '
      }
    ]
  },

  restaurant7 = {
    name: 'Mod Pizza',
    id: 7,
    cost: '$$',
    type: 'Pizza',
    numberOfReviews: 93,
    stars: 4.5,
    image: "images/pizza3.jpg",
    info: 'MOD Pizza specializes in individual artisan-style pizzas Made On Demand (MOD) in a fast, friendly and stylish environment. All pizzas are cooked by hand in an 800 degree display oven and ready in under 5 minutes with as many toppings as you like for one low price. You can also create your own salads. Northwest beers on tap, wine, sodas and milkshakes. Takeout, awesome music and patio dining.',
    reviews: [
      {
        name: 'Janet R.',
        id: 19,
        stars: 5,
        image: "images/pizzareview7.jpg",
        useful: 6,
        funny: 0,
        cool: 0,
        content: 'This is probably my favorite make your own pizza place. They have a variety of toppings to choose from. I usually like to pack my pizza with a lot of veggies and places like Blaze and Pieology get the crust soggy, but here the crust stays nice and crisp!'
      },
      {
        name: 'Nijole T.',
        id: 20,
        stars: 5,
        image: "images/pizzareview8.jpg",
        useful: 8,
        funny: 0,
        cool: 3,
        content: 'Really falling in love with MOD! More options than any other places where you can create your own pizza, different size pizzas and salads, several tasty and fresh juices instead of soda, desserts and more toppings than any other place offers! Prices and quality are great, this is the perfect place to take kids and picky eaters, you can be healthy or not, everything is fresh and made in house, even the salad dressings which I also love. Service wass very nice, they are a bit slower and your food takes longer than other chains, but the wait is well worth it. Cool and clean location, plenty of seating, worth checking out!'
      },
      {
        name: 'Fernando C.',
        id: 21,
        stars: 4,
        image: "images/pizzareview9.jpg",
        useful: 3,
        funny: 0,
        cool: 0,
        content: 'I am a converted MOD believer.  I have come back 6 or 7 times now and it seems they got rid of the rude girl that made my first visit so unpleasant.  I like the topping options here compared to similar spots.  Surprisingly their drinks are scrumptious although more size options would be nice.'
      }
    ]
  },

  restaurant8 = {
    name: 'La Sirena Grill',
    id: 8,
    cost: '$$',
    type: 'Mexican',
    numberOfReviews: 34,
    stars: 4,
    image: "images/mexican2.jpg",
    info: 'Contemporary Mexican Grill with an edge. Everything from our spicy fire-roasted salsas, blackened seasonings, hand-made tortillas & agua frescas.',
    reviews: [
      {
        name: 'Matt K.',
        id: 22,
        stars: 4,
        image: "images/mexicanreview4.jpg",
        useful: 4,
        funny: 0,
        cool: 0,
        content: "'Excellent Mexican food in the Orchard Hills Plaza.  It's a quick order type of place like a Rubio's.  I think the food tastes fresh and clean.  My carnitas burrito was not heavy at all.  It also came with guacamole on the side which was good and tortilla chips which were also good.  I don't like the salsas at their salsa bar, but the pico de gallo is good.'"
      },
      {
        name: 'Aileen K.',
        id: 23,
        stars: 3,
        image: "images/mexicanreview5.jpg",
        useful: 2,
        funny: 0,
        cool: 1,
        content: "'My friend and I shared the chicken nachos and the chicken burrito. Both came with nice portions of delicious guacamole, which was amazing and fresh. However, the burrito was quite plain and small. Nachos are, well, nachos (delicious and filling but gluttonous). Additionally, the salsas were mediocre.'"
      },
      {
        name: 'Tom',
        id: 24,
        stars: 4,
        image: "images/mexicanreview6.jpg",
        useful: 3,
        funny: 0,
        cool: 4,
        content: "'Since I don't like too authentic mexican food that can get pretty spicy, too saucy, and stinky from over seasoning meat, I think this place is just right for my tastebuds. Clean, simple and and not crazy with mysterious green, red, black or white sauces! I always get chicken nachos and salmon burrito here. '"
      }
    ]
  },

  restaurant9 = {
    name: 'Super Mex',
    id: 9,
    cost: '$$',
    type: 'Mexican',
    numberOfReviews: 34,
    stars: 3,
    image: "images/mexican3.jpg",
    info: 'Super Mex offers great-tasting, traditional Mexican food that is prepared to taste homemade. Our signature "Super Mex Burrito" is the perfect example of classic Mexican comfort food prepared with a distinct homemade authenticity. Our extra-grande tortilla chips, legendary salsa, and tender pork carnitas are among the staples here at Super Mex.',
    reviews: [
      {
        name: 'A. P.',
        id: 25,
        stars: 2,
        image: "images/mexicanreview7.jpg",
        useful: 3,
        funny: 0,
        cool: 0,
        content: "'Good food and good service.  There were 5 of us seated at a table with a bench on one side and two chairs in the other.  No one can sit at the end of the table so three of us sat on one side while two sat on the other.  Very uncomfortable when one is left-handed and has all but 1 foot of space to work with.  I honestly don't know what they were thinking by seating 5 adults at a table designed for 4.  It was a busy Saturday night but no excuse for that.  I didn't want to upset the grandparents who were already comfortably seated so we sat through dinner without complaint. '"
      },
      {
        name: 'Jessica E.',
        id: 26,
        stars: 3,
        image: "images/mexicanreview8.jpg",
        useful: 3,
        funny: 0,
        cool: 1,
        content: "'Tonight I ordered 2 meals to go, it was $25 plus tip. My order was 2 cheese enchiladas  crispy asada taco and beans. Well I got about 2 tablespoons of beans if that... the food was cold, I got a soft taco not a Crispy taco. By the time my husband go home it was all cold. we live 5 min away. He even tipped them and when he got home we realized all of this was wrong. I'm super disappointed. I can't believe a place of service would actually serve food this way.  The only reason I gave 2 stars is because the food tasted decent once I reheated it.'"
      },
      {
        name: 'Victoria S.',
        id: 27,
        stars: 4,
        image: "images/mexicanreview9.jpg",
        useful: 2,
        funny: 0,
        cool: 0,
        content: "'4 stars for finding a good Mexican food restaurant in Irvine. This definitely is not the best Mexican food I've ever had... But trying to find authentic Mexican in irvine is probably impossible. I'm all about authentic Mexican food, like not-so-pretty restaurants made with love from my Tia (I'm not Latina, but I'm from an area with a large percentage so I love good stuff!) '"
      }
    ]
  }
];

var userReview = {};
var userRestuarant = {};
var search;
var restaurantId;
var target;
var resId;
var revId
var addReviewButton = document.getElementById('add-review');
var jumbotron = document.getElementById('failed-search');
var addRestaurantButton = document.getElementById('add-restaurant');
var restaurants = document.getElementById('restaurants');
var selectedRestaurant = document.getElementById('selected-restaurant');
var listOfReviews = document.getElementById('review-list');
var searchButton = document.getElementById('form1');
var goBackToResultsButton = document.getElementById('search-results')
var foodHomePage = document.getElementById('food-image-home');
var userReviewForm = document.getElementById('form2');
var userRestaurantForm = document.getElementById('form3');
var submitUserForm = document.getElementById('submit-user-review');
var submitRestaurantForm = document.getElementById('submit-user-restaurant')
var sortReviewToggle = document.getElementById('sort-reviews');
var homeButton = document.getElementById('home');
var logo = document.getElementById('logo');
var mediaBody;
var mediaLeft;
var starValue;
var searchedArray = [];
var reviewList = [];

$('#carousel').carousel({
  interval: 7000
});

function removeDom(){
  var element = restaurants;
  var element2 = listOfReviews;
  var element3 = selectedRestaurant;
  while(element.firstChild){
    element.removeChild(element.firstChild);
  }
  while(element2.firstChild){
    element2.removeChild(element2.firstChild);
  }
  while(element3.firstChild){
    element3.removeChild(element3.firstChild);
  }
};

function removeRevDom(){
  var element = listOfReviews;
  while(element.firstChild){
    element.removeChild(element.firstChild);
  }
};

function removeSel(){
  var element = selectedRestaurant;
  while(element.firstChild){
    element.removeChild(element.firstChild);
  }
};

function removeRes(){
  var element = restaurants;
  while(element.firstChild){
    element.removeChild(element.firstChild);
  }
};

function showImages(){ foodHomePage.className ="row-fluid" };
function hideImages(){ foodHomePage.className ="hidden row-fluid" };
function showGoBack(){ goBackToResultsButton.className = "btn btn-default pull-left" };
function hideGoBack(){ goBackToResultsButton.className = "hidden btn btn-default pull-left" };
function showRevButton(){ addReviewButton.className = "btn btn-primary" };
function hideRevButton(){ addReviewButton.className = "hidden btn btn-primary" };
function showResForm(){ userRestaurantForm.className = "well" };
function hideResForm(){ userRestaurantForm.className = "hidden well" };
function showRevForm(event){
  event.preventDefault();
  userReviewForm.className="well"
};

function hideRevForm(){ userReviewForm.className="hidden well" };
function showRes(){ restaurants.className = "media" };
function hideRes(){ restaurants.className = "hidden media" }
function showRev(){ listOfReviews.className = "media" };
function hideRev(){ listOfReviews.className = "hidden media" };
function showSort(){
  var parent = sortReviewToggle.parentElement;
  var theParent = parent.parentElement;
  theParent.className = "form-group pull-right"
};

function hideSort(){
  var parent = sortReviewToggle.parentElement;
  var theParent = parent.parentElement;
  theParent.className = "hidden form-group pull-right"
};

function generateId(){
  var resList = [];
  var revList = [];
  for(var i = 0; i< restaurantArray.length; i++){
    resList.push(restaurantArray[i].id);
    var rev = restaurantArray[i].reviews;
    for (var z = 0; z < rev.length; z++){
      revList.push(rev[z].id);
    }
  }
  var resLast = Math.max.apply(null, resList);
  var revLast = Math.max.apply(null, revList);
  resId = (resLast +1);
  revId = (revLast +1);
};

function hideJumbo(){
  while(jumbotron.firstChild){
    jumbotron.removeChild(jumbotron.firstChild);
  }
  jumbotron.className="hidden jumbotron"
};

function stopRefresh(event) {
  hideRes();
  removeDom();
  hideGoBack();
  hideRevButton();
  hideImages();
  hideRev();
  hideSort();
  event.preventDefault();
  search = document.getElementById('search-bar').value;
  searchedArray = [];
  sortRestaurants(restaurantArray, search.toLowerCase());
};

function stopRefresh1(value) {
  hideRes();
  removeDom();
  hideGoBack();
  hideRevButton();
  hideImages();
  hideRev();
  hideSort();
  event.preventDefault();
  search = value;
  searchedArray = [];
  sortRestaurants(restaurantArray, search.toLowerCase());
};

function sortRestaurants(array,b) {
  var b =b;
  var array = array;
  for (var i = 0; i< array.length; i++){
    var a = array[i];
    var name = a.name.toLowerCase();
    if (b == 'food'){
      searchedRestaurants(a);
      searchedArray.push(a);
    } else if ((a.type.toLowerCase() == b) || (a.name.toLowerCase() == b)){
      searchedRestaurants(a);
      searchedArray.push(a);
    } else if(name.indexOf(b)!=-1){
      searchedRestaurants(a);
      searchedArray.push(a);
    } else if (a.cost == b) {
      searchedRestaurants(a);
      searchedArray.push(a);
    }
  }
  sortOptions();
  addType();
  if(restaurants.className === "hidden media"){
   failedSearch(b);
  }
};

function failedSearch(b){
  hideSort();
  hideJumbo();
  var container = document.createElement('div');
  var h1 = document.createElement('h1');
  var p = document.createElement('p');
  var button = document.createElement('button');
  button.setAttribute('type', 'submit');
  button.setAttribute('data-id', 'restaurant');
  button.setAttribute('class', 'btn btn-primary btn-lg');
  var buttonP = document.createElement('p');
  var buttonTxt = document.createTextNode('Add Restaurant!')
  var fail = document.createTextNode('"' + captilizeFirstLetter(b) + '"' + ' brought 0 results!');
  var text = document.createTextNode('Sorry, but ' + '"'+ captilizeFirstLetter(b) +'"' + ' failed to bring any results. You can add ' + '"' + captilizeFirstLetter(b) + '"' + ' by pressing the Add Restaurant button below.' );
  container.className = "container";
  button.appendChild(buttonTxt);
  buttonP.appendChild(button);
  p.appendChild(text);
  h1.appendChild(fail);
  container.appendChild(h1);
  container.appendChild(p);
  container.appendChild(buttonP);
  jumbotron.appendChild(container);
  jumbotron.className = "jumbotron";
};

function searchedRestaurants(array){
  var res = array;
  hideJumbo();
  appendRes(res);
  var button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.setAttribute('class', 'btn btn-default center-block');
  button.setAttribute('data-id','show');
  var buttonContent = document.createTextNode('Show Reviews');
  button.appendChild(buttonContent);
  var divRestaurant = document.createElement('div');
  divRestaurant.className = "media well";
  mediaLeft.appendChild(button);
  divRestaurant.appendChild(mediaLeft);
  divRestaurant.appendChild(mediaBody);
  restaurants.appendChild(divRestaurant);
  showSort();
  showRes();
};

function appendRes(array){
  var name = array.name;
  var stars = array.stars;
  var image = array.image;
  var info = array.info;
  var id = array.id;
  var rev = array.numberOfReviews;
  var type = array.type;
  var cost = array.cost;
  starIcon(stars);
  stars = starValue;
  mediaBody = document.createElement('div');
  mediaBody.className = "media-body";
  mediaLeft = document.createElement('div');
  mediaLeft.className = "media-left";
  var resImage = document.createElement('img');
  var starImage = document.createElement('img');
  var totalRev = document.createTextNode(" " + rev + " reviews");
  resImage.className="img-rounded";
  resImage.setAttribute('data-id', 'resImage')
  resImage.setAttribute('src', image);
  resImage.setAttribute('alt', "");
  resImage.setAttribute('width', "324");
  resImage.setAttribute('height', "236");
  starImage.setAttribute('data-id', 'img');
  starImage.setAttribute('src', stars);
  starImage.setAttribute('alt', "");
  starImage.setAttribute('width', "150");
  starImage.setAttribute('height', "");
  var nameContent = document.createTextNode(name);
  var resName = document.createElement('h3');
  var resTotal = document.createElement('p');
  var infoTextNode = document.createTextNode(info);
  var resInfo = document.createElement('p');
  var quickInfo = document.createElement('p');
  var quickNode = document.createTextNode(cost + " " + type);
  quickInfo.appendChild(quickNode);
  starImage.appendChild(totalRev);
  resName.setAttribute('id', id);
  resName.appendChild(nameContent);
  resInfo.appendChild(infoTextNode);
  resTotal.appendChild(starImage);
  resTotal.appendChild(totalRev)
  mediaBody.appendChild(resName);
  mediaBody.appendChild(resTotal);
  mediaBody.appendChild(quickInfo);
  mediaBody.appendChild(resInfo);
  mediaLeft.appendChild(resImage);
};

function slRes(array){
  var array = array;
  appendRes(array);
  var divRestaurant = document.createElement('div');
  divRestaurant.className = "media well";
  divRestaurant.appendChild(mediaLeft);
  divRestaurant.appendChild(mediaBody);
  selectedRestaurant.appendChild(divRestaurant);
  hideSort();
};

function showReviews(target){
  var parent = target.parentElement;
  var theParent = parent.nextSibling.getElementsByTagName("h3")[0];
  restaurantId = theParent.id;
  for (var i = 0; i < restaurantArray.length; i++) {
    if (restaurantId == restaurantArray[i].id){
      slRes(restaurantArray[i]);
      reviewsList(restaurantArray[i].reviews);
    }
  }
  hideRes();
  showRev();
};

function reviewsList(array){
  var reviews = array;
  reviewList =[];
  var i = 0;
  var newDiv1;
  var newDivContainer1;
  var newDivMediaLeft1;
  while  (i<reviews.length){
    addReviews(reviews[i]);
    reviewList.push(reviews[i]);
    i++;
  }
  hideResForm();
  showGoBack();
  showRevButton();
  sortOptions();
  showSort();
};

function addReviews(array){
  var temp = array;
  var image = temp.image;
  var stars = temp.stars;
  var useful = temp.useful;
  var funny = temp.funny;
  var cool = temp.cool;
  var id = temp.id;
  starIcon(stars);
  stars = starValue;
  var i1 = document.createElement('i');
  i1.className="fa fa-thumbs-o-up";
  var i2 = document.createElement('i');
  i2.className = "fa fa-smile-o";
  var i3 = document.createElement('i');
  i3.className = "fa fa-beer";
  var usefulButton = document.createElement('button');
  var funnyButton = document.createElement('button');
  var coolButton = document.createElement('button');
  var usefulText = document.createTextNode(' Useful: ' + useful);
  var funnyText = document.createTextNode(' Funny: ' + funny);
  var coolText = document.createTextNode(' Cool: ' + cool);
  usefulButton.setAttribute('type', 'button');
  usefulButton.setAttribute('class', 'btn btn-default btn-sm');
  funnyButton.setAttribute('type', 'button');
  funnyButton.setAttribute('class', 'btn btn-default btn-sm');
  coolButton.setAttribute('type', 'button');
  coolButton.setAttribute('class', 'btn btn-default btn-sm');
  usefulButton.setAttribute('data-id', 'useful' );
  funnyButton.setAttribute('data-id', 'funny');
  coolButton.setAttribute('data-id', 'cool');
  var buttonDiv = document.createElement('div');
  buttonDiv.className="form-group pull-right";
  var buttonForm = document.createElement('form');
  buttonForm.className = "form-inline";
  var revContent = document.createTextNode(temp.content);
  var revName = document.createTextNode(temp.name);
  var starNumber = document.createTextNode(stars);
  var revImage = document.createElement('img');
  var starImage = document.createElement('img');
  revImage.className="img-rounded";
  revImage.setAttribute('src', image);
  revImage.setAttribute('alt', "");
  revImage.setAttribute('width', "185");
  revImage.setAttribute('height', "150");
  starImage.className="img-responsive";
  starImage.setAttribute('src', stars);
  starImage.setAttribute('alt', "");
  starImage.setAttribute('width', "100");
  starImage.setAttribute('height', "100");
  usefulButton.appendChild(i1);
  usefulButton.appendChild(usefulText);
  funnyButton.appendChild(i2);
  funnyButton.appendChild(funnyText);
  coolButton.appendChild(i3);
  coolButton.appendChild(coolText);
  buttonDiv.appendChild(usefulButton);
  buttonDiv.appendChild(funnyButton);
  buttonDiv.appendChild(coolButton);
  buttonForm.appendChild(buttonDiv);
  var mediaBody = document.createElement('div');
  mediaBody.className = "media-body";
  var div = document.createElement('div');
  div.className = "media well";
  var mediaLeft = document.createElement('div');
  mediaLeft.className = "media-left";
  var h3 = document.createElement('h3');
  var p = document.createElement('p');
  h3.setAttribute('id', id);
  p.appendChild(revContent);
  h3.appendChild(revName);
  buttonForm.appendChild(h3);
  h3.appendChild(starImage);
  mediaBody.appendChild(buttonForm);
  mediaBody.appendChild(p);
  mediaLeft.appendChild(revImage);
  div.appendChild(mediaLeft);
  div.appendChild(mediaBody);
  listOfReviews.appendChild(div);
};

function submitReview(event){
  event.preventDefault();
  generateId();
  var userName = document.getElementById('name-input').value;
  var starChoice = document.getElementsByName('inlineRadio');
  var stars1;
  for (var i = 0; i< starChoice.length; i++ ){
    if (starChoice[i].checked){
      stars1 = starChoice[i].value;
    }
  }
  if(stars1 === undefined){
    stars1 = 0;
  }
  var images;
  var reviewContent = document.getElementById('user-review-content').value;
  for (var i = 0; i < restaurantArray.length; i++) {
    if (restaurantId == restaurantArray[i].id){
      images = restaurantArray[i].image;
    }
  }
  userReview = {
    name: captilizeFirstLetter(userName),
    id: revId,
    stars: stars1,
    image: images,
    useful: 0,
    funny: 0,
    cool: 0,
    content: captilizeFirstLetter(reviewContent)
  };
  for (var i = 0; i < restaurantArray.length; i++) {
    if (restaurantId == restaurantArray[i].id){
      var sum = (restaurantArray[i].numberOfReviews +1)
      restaurantArray[i].numberOfReviews = sum;
      restaurantArray[i].reviews.push(userReview);
      updateStars(restaurantArray[i], userReview.stars);
      removeSel();
      slRes(restaurantArray[i]);
    }
  }
  document.forms['form2'].reset();
  resetReviews();
};

function updateStars(array, a){
  var array = array;
  var user =  parseFloat(a);
  var id = array.id;
  var stars = array.stars;
  var rev = (array.numberOfReviews -1)
  var mult = (rev * stars);
  var num = (mult + user);
  var dem = (rev +1)
  var total = (num / dem);
  for (var i = 0; i < restaurantArray.length; i++) {
    if (id == restaurantArray[i].id){
      restaurantArray[i].stars = total;
    }
  }
};

function resetReviews(){
  hideRevForm();
  removeRevDom();
  removeRes();
  for (var i = 0; i < restaurantArray.length; i++) {
    if (restaurantId == restaurantArray[i].id){
      reviewsList(restaurantArray[i].reviews);
    }
  }
  hideGoBack();
};

function goBackToResults(event){
  event.preventDefault();
  removeDom();
  hideGoBack();
  hideRevButton();
  hideRevForm();
  for (var i  = 0; i < searchedArray.length; i++){
    searchedRestaurants(searchedArray[i]);
  }
  sortOptions();
  addType();
  showRes();
};

function goHome(){
  event.preventDefault();
  removeDom();
  hideRevButton();
  hideGoBack();
  showImages();
  hideResForm();
  hideRevForm();
  hideJumbo();
  document.forms['form1'].reset();
  hideSort();
};

function starIcon(array){
  var array = parseFloat(array);
  if (array == 0){
    starValue = "images/stars0.png";
  }else if (0 <= array && array< 1){
    starValue = "images/stars1.png";
  }else if (1 <= array && array < 1.5){
    starValue = "images/stars1.png";
  }else if (1.5 <= array && array < 2){
    starValue = "images/stars1.5.png";
  }else if (2 <= array && array < 2.5){
    starValue = "images/stars2.png";
  }else if (2.5 <= array && array < 3){
    starValue = "images/stars2.5.png";
  }else if (3 <= array && array < 3.5){
    starValue = "images/stars3.png";
  }else if (3.5 <= array && array < 4){
    starValue = "images/stars3.5.png";
  }else if (4 <= array && array < 4.5){
    starValue = "images/stars4.png";
  }else if (4.5 <= array && array < 5){
    starValue = "images/stars4.5.png";
  }else if (array ==5){
    starValue = "images/stars5.png";
  }
};

function addRestaurantClick(event){
  event.preventDefault();
  removeSel();
  removeRevDom();
  hideJumbo();
  hideImages();
  hideRevButton();
  hideGoBack();
  hideRevForm();
  hideSort();
  showResForm();
};

function addRestaurant(event){
  event.preventDefault();
  generateId();
  var name = document.getElementById('restaurant-name').value;
  var type = document.getElementById('restaurant-type').value;
  var info = document.getElementById('restaurant-info').value;
  var costChoice = document.getElementsByName('inlineCost');
  var cost1;
  for (var i = 0; i< costChoice.length; i++ ){
    if (costChoice[i].checked){
      cost1 = costChoice[i].value;
    }
  }
  userRestuarant = {
    name: captilizeFirstLetter(name),
    type: captilizeFirstLetter(type),
    id: resId,
    numberOfReviews: 0,
    cost: cost1,
    stars: 0,
    image: 'images/defaultimage.jpg',
    info: captilizeFirstLetter(info),
    reviews: []
  };
  restaurantId = resId;
  restaurantArray.push(userRestuarant);
  document.forms['form3'].reset();
  hideResForm();
  removeRes();
  searchedRestaurants(userRestuarant);
  hideSort();
};

function findTarget(target){
  var parent = target.parentElement;
  var theParent = parent.nextSibling;
  reviewId = theParent.id;
};

function usefulClick(target){
  var target = target;
  event.preventDefault();
  findTarget(target);
  for (var i = 0; i < restaurantArray.length; i++) {
    if (restaurantId == restaurantArray[i].id){
      var array = restaurantArray[i].reviews;
      for (var z = 0; z < array.length; z++){
        if (reviewId == array[z].id){
          useful(array[z], target);
        }
      }
    }
  }
};

function useful(array, target){
  var array = array;
  var target = target;
  var count = array.useful;
  if (target.className === "btn btn-default btn-sm"){
    var sum1 = (count + 1);
    usefully(sum1, target);
    array.useful = sum1;
    target.className = "btn btn-default btn-sm btn-warning active"
  } else if (target.className === "btn btn-default btn-sm btn-warning active"){
    var minus1 = (count - 1);
    usefully(minus1, target);
    target.className = "btn btn-default btn-sm"
    array.useful = minus1;
  }
};

function funnyClick(target){
  var target = target;
  event.preventDefault();
  findTarget(target);
  for (var i = 0; i < restaurantArray.length; i++) {
    if (restaurantId == restaurantArray[i].id){
      var array = restaurantArray[i].reviews;
      for (var z = 0; z < array.length; z++){
        if (reviewId == array[z].id){
          funny(array[z], target);
        }
      }
    }
  }
};

function funny(array, target){
  var array = array;
  var target = target;
  var count = array.funny;
  if (target.className === "btn btn-default btn-sm"){
    var sum1 = (count + 1);
    funnier(sum1, target);
    array.funny = sum1;
    target.className = "btn btn-default btn-sm btn-success active"
  } else if (target.className === "btn btn-default btn-sm btn-success active"){
    var minus1 = (count - 1);
    funnier(minus1, target);
    target.className = "btn btn-default btn-sm"
    array.funny = minus1;
  }
};

function coolClick(target){
  var target = target;
  event.preventDefault();
  findTarget(target);
  for (var i = 0; i < restaurantArray.length; i++) {
    if (restaurantId == restaurantArray[i].id){
      var array = restaurantArray[i].reviews;
      for (var z = 0; z < array.length; z++){
        if (reviewId == array[z].id){
          cool(array[z], target);
        }
      }
    }
  }
};

function cool(array, target){
  var array = array;
  var target = target;
  var count = array.cool;
  if (target.className === "btn btn-default btn-sm"){
    var sum1 = (count + 1);
    cooler(sum1, target);
    target.className = "btn btn-default btn-sm btn-info active"
    array.cool = sum1;
  } else if (target.className === "btn btn-default btn-sm btn-info active"){
    var minus1 = (count - 1);
    cooler(minus1, target);
    target.className = "btn btn-default btn-sm"
    array.cool = minus1;
  }
};

function cooler(a ,target){
  target.textContent='';
  var i = document.createElement('i');
  i.className = "fa fa-beer";
  var text = document.createTextNode(' Cool: ' + a)
  target.appendChild(i);
  target.appendChild(text);
};

function funnier(a, target){
  target.textContent='';
  var i = document.createElement('i');
  i.className = "fa fa-smile-o";
  var text = document.createTextNode(' Funny: ' + a)
  target.appendChild(i);
  target.appendChild(text);
};

function usefully(a, target){
  target.textContent='';
  var i = document.createElement('i');
  i.className = "fa fa-thumbs-o-up";
  var text = document.createTextNode(' Useful: ' + a)
  target.appendChild(i);
  target.appendChild(text);
};

function sorter(event){
  event.preventDefault();
  var value = sortReviewToggle.value;
  removeRevDom();
  removeRes();
  while(restaurants.className == "media"){
    if (value === 'Name (A-Z)'){
      var list =  _.sortBy(searchedArray, function(i) {return i.name.toLowerCase();});
      for (var i = 0; i<searchedArray.length; i++){
        searchedRestaurants(list[i]);
      }
      break;
    } else if (value === 'Name (Z-A)'){
      var list =  _.sortBy(searchedArray, function(i) {return i.name.toLowerCase();});
      var rlist = list.reverse();
      for (var i = 0; i<searchedArray.length; i++){
        searchedRestaurants(rlist[i]);
      }
      break;
    } else if (value === 'Highest Rated'){
      var list =  _.sortBy(searchedArray, 'stars');
      var rlist = list.reverse();
      for (var i = 0; i<searchedArray.length; i++){
        searchedRestaurants(rlist[i]);
      }
      break;
    } else if (value === 'Lowest Rated'){
      var list =  _.sortBy(searchedArray, 'stars');
      for (var i = 0; i<searchedArray.length; i++){
        searchedRestaurants(list[i]);
      }
      break;
    } else if (value === 'Price (Low-High)'){
      var list =  _.sortBy(searchedArray, 'cost');
      for (var i = 0; i<searchedArray.length; i++){
        searchedRestaurants(list[i]);
      }
      break;
    } else if (value === 'Price (High-Low)'){
      var list =  _.sortBy(searchedArray, 'cost');
      var rlist= list.reverse();
      for (var i = 0; i<searchedArray.length; i++){
        searchedRestaurants(rlist[i]);
      }
      break;
    } else if (value === 'Type'){
      var list =  _.sortBy(searchedArray, function(i) {return i.type.toLowerCase();});
      for (var i = 0; i<searchedArray.length; i++){
        searchedRestaurants(list[i]);
      }
      break;
    }
  }
  while (restaurants.className == "hidden media"){
    if (value === 'Name (A-Z)'){
      var list =  _.sortBy(reviewList, function(i) {return i.name.toLowerCase();});
      for (var i = 0; i<list.length; i++){
        addReviews(list[i]);
      }
      break;
    } else if (value === 'Name (Z-A)'){
      var list =  _.sortBy(reviewList, function(i) {return i.name.toLowerCase();});
      var rlist = list.reverse();
      for (var i = 0; i<list.length; i++){
        addReviews(rlist[i]);
      }
      break;
    } else if (value ==='Highest Rated'){
      var list = _.sortBy(reviewList, 'stars');
      var rlist = list.reverse();
      for (var i =0; i<list.length; i++){
        addReviews(rlist[i]);
      }
      break;
    }else if (value ==='Lowest Rated'){
      var list = _.sortBy(reviewList, 'stars');
      for (var i =0; i<list.length; i++){
        addReviews(list[i]);
      }
      break;
    }
  }
};

function sortOptions(){
  var element = sortReviewToggle;
  while(element.firstChild){
    element.removeChild(element.firstChild);
  }
  var option = document.createElement('option');
  var option2 = document.createElement('option');
  var option3 = document.createElement('option');
  var option4 = document.createElement('option');
  var name = document.createTextNode('Name (A-Z)');
  var reverseName =document.createTextNode('Name (Z-A)')
  var stars = document.createTextNode('Lowest Rated');
  var reverseStars = document.createTextNode('Highest Rated')
  option.appendChild(name);
  option2.appendChild(reverseName);
  option3.appendChild(reverseStars);
  option4.appendChild(stars);
  sortReviewToggle.appendChild(option);
  sortReviewToggle.appendChild(option2);
  sortReviewToggle.appendChild(option3);
  sortReviewToggle.appendChild(option4);
};

function addType(){
  while (sortReviewToggle.lastChild.textContent ==='Lowest Rated'){
    var option = document.createElement('option');
    var option2 = document.createElement('option');
    var option3 = document.createElement('option');
    var type = document.createTextNode('Type');
    var cost = document.createTextNode('Price (Low-High)');
    var reverseCost = document.createTextNode('Price (High-Low)');
    option3.appendChild(reverseCost);
    option2.appendChild(cost);
    option.appendChild(type);
    sortReviewToggle.appendChild(option2);
    sortReviewToggle.appendChild(option3);
    sortReviewToggle.appendChild(option);
  }
};

function captilizeFirstLetter(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function myTarget(event){
  var ev = event;
  var target = ev.target;
  var theTarget = target.dataset.id;
  if (theTarget === 'useful'){
    usefulClick(target);
  } else if(theTarget === 'funny'){
    funnyClick(target);
  } else if(theTarget === 'cool'){
    coolClick(target);
  } else if(theTarget === 'show'){
    showReviews(target);
  } else if(theTarget === 'logo'){
    goHome(ev);
  } else if(theTarget === 'home'){
    goHome(ev);
  }else if(theTarget === 'back'){
    goBackToResults(ev);
  }else if(theTarget === 'reviews'){
    showRevForm(ev);
  }else if(theTarget === 'restaurant'){
    addRestaurantClick(ev);
  }else if(theTarget === 'submit-review'){
    submitReview(ev);
  }else if(theTarget === 'submit-restaurant'){
    addRestaurant(ev);
  }else if(theTarget === 'american'){
    stopRefresh1('american');
  }else if(theTarget === 'pizza'){
    stopRefresh1('pizza');
  }else if(theTarget === 'pizza'){
    stopRefresh1('pizza');
  }else if(theTarget === 'mexican'){
    stopRefresh1('mexican');
  }
};

document.body.addEventListener('click', myTarget)
sortReviewToggle.addEventListener('change', sorter);
searchButton.addEventListener("submit", stopRefresh);
