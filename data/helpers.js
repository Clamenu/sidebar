const foods = [
  'American Chinese Cuisine',
  'Biscuit',
  'Bread',
  'Cookie',
  'Cuisine',
  'Apple ',
  'AppleSauce',
  'Potato',
  'Barbecue',
  'Bear Claw',
  'Beef Manhattan',
  'Blue Cheese Dressing',
  'Blue',
  'Bookbinder Soup',
  'Breakfast Burrito',
  'Brunswick Stew',
  'Buffalo Burger',
  'Buffalo Wing',
  'Bull Roast',
  'Burnt Ends',
  'Butter Cookie',
  'Pizza',
  'Cajun Cuisine',
  'Liver and Bacon',
  'Carne Pizzaiola',
  'Carolina Style',
  'Celery Victor',
  'Cheese Dog',
  'Cheese Fries',
  'Cheesesteak',
  'Chicago Style Pizza',
  'Chicken à la King',
  'Chicken and Waffles',
  'Chicken Divan',
  'Chicken Fingers',
  'Chicken French',
  'Chicken Fried bacon',
  'Chicken Fried steak',
  'Chicken Nugget',
  'Chicken Parmigiana',
  'Chicken Sandwich',
  'Chili con Carne',
  'Chili Dog',
  'Chimichanga',
  'Chips and dip',
  'Dark Chocolate',
  'Milk Chocolate',
  'White Chocolate',
  'Chocolate Chip Cookies',
  'Choco pie',
  'Chowder',
  'City chicken',
  'Clam cake',
  'Clam chowder',
  'Coleslaw',
  'Cordon bleu',
  'Corn chowder',
  'Corn dog',
  'Corn flakes',
  'Corn relish',
  'Corned beef',
  'Cornish game hen',
  'Cowboy beans',
  'Crab cake',
  'Creamed corn',
  'Creamed eggs on toast',
  'Deviled crab',
  'Deviled egg',
  'Domesticated turkey',
  'Doughnut',
  'Drunken chicken',
  'Eggo',
  'Eggs Benedict',
  'Eggs Neptune',
  'Energy bar',
  'Engastration',
  'Fajita',
  'Fortune cookie',
  'French dip',
  'Fried chicken',
  'Fried fish',
  'Fry sauce',
  'Frybread',
  'Garden salad',
  'German chocolate cake',
  'Goulash',
  'Greek - American cuisine',
  'Green bean casserole',
  'Grits',
  'Hamburger',
  'Hangtown fry',
  'Haystack',
  'Hog fry',
  'Home fries',
  'Hot chicken',
  'Hot chicken sandwich',
  'Ice cream cake',
  'Italian - American cuisine',
  'Italian beef',
  'Italian dressing',
  'Jell - O',
  'Jerky',
  'Juba',
  'Liver and onions',
  'Lobster Newberg',
  'Lobster roll',
  'London broil',
  'Lorna Doone',
  'Macaroni and cheese',
  'Macaroni salad',
  'Maple bacon donut',
  'Maraca pie',
  'Mashed potato',
  'Mashed pumpkin',
  'Meatcake',
  'Meatloaf',
  'Milk toast',
  'Milkshake',
  'Mission burrito',
  'Mozzarella sticks',
  'Muffuletta',
  'Mulligan stew',
  'Onion ring',
  'Oreo',
  'Oysters Rockefeller',
  'Pancakes',
  'Pasta salad',
  'Pastrami',
  'Patty',
  'Peanut butter',
  'Pemmican',
  'Pepperoni',
  'Pickled cucumber',
  'Pigs in blankets',
  'Pizza strips',
  'Ploye',
  'Pop - Tarts',
  'Popcorn',
  'Popover',
  'Poppyseed muffin',
  'Pork and beans',
  'Potato salad',
  'Potato skins',
  'Potato wedges',
  'Potatoes OBrien',
  'Protein bar',
  'Pulled pork',
  'Pumpkin pie',
  'Rabbit pie',
  'Ranch dressing',
  'Reuben sandwich',
  'Ribs',
  'Rolled oyster',
  'Russian dressing',
  'Russian tea cake',
  'Salisbury steak',
  'Sandwich',
  'Sausage gravy',
  'Scampi',
  'Scrapple',
  'Seafood cocktail',
  'Senate bean soup',
  'Slinger',
  'Sloppy joe',
  'Smelt',
  'Sonofabitch stew',
  'Soul food',
  'Sour cream',
  'Squab',
  'Steak',
  'Steak sandwich',
  'Steak sauce',
  'Steamed clams',
  'Stuffed ham',
  'Stuffed peppers',
  'Stuffed zucchini',
  'Succotash',
  'Surf and turf',
  'Swiss steak',
  'Tetrazzini',
  'Cuisine of the Thirteen Colonies',
  'Thousand Island dressing',
  'Toaster Strudel',
  'Tomato compote',
  'Tuna casserole',
  'Turducken',
  'Thanksgiving turkey',
  'Vichyssoise',
  'Waffle',
  'artichoke',
  'aubergine',
  'amrud',
  'asparagus',
  'legumes',
  'alfalfa sprouts',
  'bean sprouts',
  'black beans',
  'black - eyed peas',
  'borlotti bean',
  'broad beans',
  'chickpeas, garbanzos, or ceci beans',
  'green beans',
  'kidney beans',
  'lentils',
  'lima beans or Butter bean',
  'mung beans',
  'navy beans',
  'pinto beans',
  'runner beans',
  'split peas',
  'soy beans',
  'peas',
  'mangetout or snap peas',
  'broccoli',
  'brussels sprouts',
  'cabbage',
  'kohlrabi',
  'cauliflower',
  'celery',
  'endive',
  'fiddleheads',
  'frisee',
  'fennel',
  'greens',
  'Honeyberry',
  'Huckleberry',
  'Jabuticaba',
  'Jackfruit',
  'Jambul',
  'Japanese plum',
  'Jostaberry',
  'Jujube',
  'Juniper berry',
  'Kiwano',
  'Kiwifruit',
  'Kumquat',
  'Lemon',
  'Lime',
  'Loquat',
  'Longan',
  'Lychee',
  'Mango',
  'Mangosteen',
  'Marionberry',
  'Melon',
  'Cantaloupe',
  'Honeydew',
  'Watermelon',
  'Miracle fruit',
  'Mulberry',
  'Nectarine',
  'Nance',
  'Olive',
  'Orange',
  'Blood orange',
  'Clementine',
  'Mandarine',
  'Tangerine',
  'Papaya',
  'Passionfruit',
  'Peach',
  'Pear',
  'Persimmon',
  'Plantain',
  'Plum',
  'Pineapple',
  'Pineberry',
  'Plumcot',
  'Pomegranate',
  'Pomelo',
  'Purple mangosteen',
  'Quince',
  'Raspberry',
  'Salmonberry',
  'Rambutan',
  'Redcurrant',
  'Salal Berry',
  'Salak',
  'Satsuma',
  'Soursop',
  'Star Apple'];


const names4 = [
  'Timmie',
  'Timmy',
  'Timothea',
  'Tina',
  'Tine',
  'Tiphani',
  'Tiphanie',
  'Tiphany',
  'Tish',
  'Tisha',
  'Tobe',
  'Tobey',
  'Tobi',
  'Toby',
  'Tobye',
  'Toinette',
  'Toma',
  'Tomasina',
  'Tomasine',
  'Tomi',
  'Tommi',
  'Tommie',
  'Tommy',
  'Toni',
  'Tonia',
  'Tonie',
  'Tony',
  'Tonya',
  'Tonye',
  'Tootsie',
  'Torey',
  'Tori',
  'Torie',
  'Torrie',
  'Tory',
  'Tova',
  'Tove',
  'Tracee',
  'Tracey',
  'Traci',
  'Tracie',
  'Tracy',
  'Trenna',
  'Tresa',
  'Trescha',
  'Tressa',
  'Tricia',
  'Trina',
  'Trish',
  'Trisha',
  'Trista',
  'Trix',
  'Trixi',
  'Trixie',
  'Trixy',
  'Truda',
  'Trude',
  'Trudey',
  'Trudi',
  'Trudie',
  'Trudy',
  'Trula',
  'Tuesday',
  'Twila',
  'Twyla',
  'Tybi',
  'Tybie',
  'Tyne',
  'Ula',
  'Ulla',
  'Ulrica',
  'Ulrika',
  'Ulrikaumeko',
  'Ulrike',
  'Umeko',
  'Una',
  'Ursa',
  'Ursala',
  'Ursola',
  'Ursula',
  'Ursulina',
  'Ursuline',
  'Uta',
  'Val',
  'Valaree',
  'Valaria',
  'Vale',
  'Valeda',
  'Valencia',
  'Valene',
  'Valenka',
  'Valentia',
  'Valentina',
  'Valentine',
  'Valera',
  'Valeria',
  'Valerie',
  'Valery',
  'Valerye',
  'Valida',
  'Valina',
  'Valli',
  'Vallie',
  'Vally',
  'Valma',
  'Valry',
  'Van',
  'Vanda',
  'Vanessa',
  'Vania',
  'Vanna',
  'Vanni',
  'Vannie',
  'Vanny',
  'Vanya',
  'Veda',
  'Velma',
  'Velvet',
  'Venita',
  'Venus',
  'Vera',
  'Veradis',
  'Vere',
  'Verena',
  'Verene',
  'Veriee',
  'Verile',
  'Verina',
  'Verine',
  'Verla',
  'Verna',
  'Vernice',
  'Veronica',
  'Veronika',
  'Veronike',
  'Veronique',
  'Vevay',
  'Vi',
  'Vicki',
  'Vickie',
  'Vicky',
  'Victoria',
  'Vida',
  'Viki',
  'Vikki',
  'Vikky',
  'Vilhelmina',
  'Vilma',
  'Vin',
  'Vina',
  'Vinita',
  'Vinni',
  'Vinnie',
  'Vinny',
  'Viola',
  'Violante',
  'Viole',
  'Violet',
  'Violetta',
  'Violette',
  'Virgie',
  'Virgina',
  'Virginia',
  'Virginie',
  'Vita',
  'Vitia',
  'Vitoria',
  'Vittoria',
  'Viv',
  'Viva',
  'Vivi',
  'Vivia',
  'Vivian',
  'Viviana',
  'Vivianna',
  'Vivianne',
  'Vivie',
  'Vivien',
  'Viviene',
  'Vivienne',
  'Viviyan',
  'Vivyan',
  'Vivyanne',
  'Vonni',
  'Vonnie',
  'Vonny',
  'Vyky',
  'Wallie',
  'Wallis',
  'Walliw',
  'Wally',
  'Waly',
  'Wanda',
  'Wandie',
  'Wandis',
  'Waneta',
  'Wanids',
  'Wenda',
  'Wendeline',
  'Wendi',
  'Wendie',
  'Wendy',
  'Wendye',
  'Wenona',
  'Wenonah',
  'Whitney',
  'Wileen',
  'Wilhelmina',
  'Wilhelmine',
  'Wilie',
  'Willa',
  'Willabella',
  'Willamina',
  'Willetta',
  'Willette',
  'Willi',
  'Willie',
  'Willow',
  'Willy',
  'Willyt',
  'Wilma',
  'Wilmette',
  'Wilona',
  'Wilone',
  'Wilow',
  'Windy',
  'Wini',
  'Winifred',
  'Winna',
  'Winnah',
  'Winne',
  'Winni',
  'Winnie',
  'Winnifred',
  'Winny',
  'Winona',
  'Winonah',
  'Wren',
  'Wrennie',
  'Wylma',
  'Wynn',
  'Wynne',
  'Wynnie',
  'Wynny',
  'Xaviera',
  'Xena',
  'Xenia',
  'Xylia',
  'Xylina',
  'Yalonda',
  'Yasmeen',
  'Yasmin',
  'Yelena',
  'Yetta',
  'Yettie',
  'Yetty',
  'Yevette',
  'Ynes',
  'Ynez',
  'Yoko',
  'Yolanda',
  'Yolande',
  'Yolane',
  'Yolanthe',
  'Yoshi',
  'Yoshiko',
  'Yovonnda',
  'Ysabel',
  'Yvette',
  'Yvonne',
  'Zabrina',
  'Zahara',
  'Zandra',
  'Zaneta',
  'Zara',
  'Zarah',
  'Zaria',
  'Zarla',
  'Zea',
  'Zelda',
  'Zelma',
  'Zena',
  'Zenia',
  'Zia',
  'Zilvia',
  'Zita',
  'Zitella',
  'Zoe',
  'Zola',
  'Zonda',
  'Zondra',
  'Zonnya',
  'Zora',
  'Zorah',
  'Zorana',
  'Zorina',
  'Zorine',
  'Zsa Zsa',
  'Zsazsa',
  'Zulema',
  'Zuzana',
];

module.exports.foods = foods;
module.exports.names4 = names4;
