document.addEventListener('DOMContentLoaded', () => {
    const images = [
  "elegant-grey-rosette-birthday-cake.webp",
  "red-velvet-swirl-cake-bowl.webp",
  "astronaut-space-rocket-birthday-cake.webp",
  "kitchen-cooking-lady-birthday-cake.webp",
  "lazy-retirement-65th-birthday-cake.webp",
  "romantic-red-roses-love-anniversary-cake.webp",
  "heart-shaped-chocolate-gift-box-cake.webp",
  "21st-anniversary-photo-film-strip-cake.webp",
  "42nd-anniversary-pink-butterfly-cake.webp",
  "50th-anniversary-butterfly-cake.webp",
  "baby-bottle-1st-birthday-cake.webp",
  "blue-purple-rosette-birthday-girl-cake.webp",
  "blueberry-compote-round-cake.webp",
  "chocolate-overload-happy-holi-cake.webp",
  "cute-lion-face-kids-cake.webp",
  "elegant-red-silver-ornament-anniversary-cake.webp",
  "floral-tri-cake-setup-with-photos.webp",
  "heart-shaped-chocolate-birthday-cake.webp",
  "papas-shirt-and-tie-cake.webp",
  "pink-makeup-theme-birthday-cake.webp",
  "pink-purple-floral-butterfly-cake.webp",
  "pizza-slice-illusion-cake.webp",
  "premium-chocolate-swirl-cake.webp",
  "red-mini-cake-black-hearts.webp",
  "red-mirror-glaze-heart-cake.webp",
  "red-velvet-heart-cake.webp",
  "romantic-love-you-bunting-cake.webp",
  "valentines-day-rose-pot-cake.webp",
  "white-swirl-rose-anniversary-cake.webp",
  "worlds-best-sister-cake.webp",
  "classic-oreo-chocolate-cake-bowl.webp",
  "strawberry-dream-pink-cake-bowl.webp",
  "oreo-swirl-chocolate-chip-cake-bowl.webp",
  "romantic-red-velvet-heart-cake-bowl.webp",
  "velvety-red-velvet-cream-cake-bowl.webp",
  "fresh-fruit-rainbow-cake-bowl.webp",
  "pineapple-mango-gold-pearl-cake-bowl.webp",
  "pink-blue-number-birthday-cake.webp",
  "black-gold-moustache-celebration-cake.webp",
  "nutty-butter-cookies.webp",
  "pink-purple-butterfly-birthday-cake.webp",
  "blue-thar-vehicle-birthday-cake.webp",
  "cherry-confetti-birthday-cake.webp",
  "red-love-letter-cake.webp",
  "pink-lavender-sprinkle-cake.webp",
  "pink-cartoon-party-cake.webp",
  "snowman-winter-celebration-cake.webp",
  "graduation-cap-diploma-cake.webp",
  "blue-gold-number-15-birthday-cake.webp",
  "oreo-cookie-crunch-cake-bowl.webp",
  "biscoff-cookie-cream-cake-bowl.webp",
  "colorful-fruit-sprinkle-cookies.webp",
  "rose-garden-cupcakes.webp",
  "simple-love-arrow-cake.webp",
  "purple-heart-anniversary-cake.webp",
  "blue-yellow-floral-birthday-cake.webp",
  "purple-photo-memory-cake.webp",
  "pink-heart-marshmallow-cake-bowl.webp",
  "spider-hero-birthday-cake.webp",
  "fruit-nut-dessert-loaf.webp",
  "youre-gonna-bee-awesome-cake.webp",
  "safari-jungle-birthday-cake.webp",
  "chocolate-heart-sprinkle-cake-bowl.webp",
  "golden-mom-celebration-cake.webp",
  "red-rose-floral-celebration-cake.webp",
  "pink-butterfly-bow-cake.webp",
  "green-gold-rosette-birthday-cake.webp",
  "purple-mom-floral-cake.webp",
  "lattice-chocolate-dessert-slice.webp",
  "made-for-each-other-heart-cake.webp",
  "cream-rosette-birthday-cake.webp",
  "princess-doll-birthday-cake.webp",
  "mango-dessert-cups.webp",
  "blue-duck-birthday-cake.webp",
  "pink-pearl-birthday-cake.webp",
  "pink-cartoon-character-cake.webp",
  "chocolate-dessert-tray.webp",
  "assorted-dessert-bowl-set.webp",
  "welcome-baby-teddy-cake.webp",
  "classic-round-butter-cookies.webp",
  "pink-train-birthday-cake.webp",
  "mango-cream-dessert-slab.webp",
  "pink-mouse-birthday-cake.webp",
  "colorful-fruit-candy-cake-bowl.webp",
  "chocolate-drizzle-dessert-bowl-set.webp",
  "sleeping-baby-bed-cake.webp",
  "black-white-chocolate-overload-cake.webp",
  "yellow-mango-cream-cake.webp",
  "white-green-floral-birthday-cake.webp",
  "chocolate-dessert-slice-pack.webp",
  "oreo-chocolate-celebration-cake.webp",
  "glossy-chocolate-mini-cake.webp",
  "illuminated-tiered-celebration-cake.webp",
  "pink-rose-floral-cake.webp",
  "someone-special-pink-cake.webp",
  "mango-nut-crunch-cake-bowl.webp",
  "oreo-chocolate-chip-cake-bowl.webp",
  "black-white-feather-cake-bowl.webp",
  "black-white-bloom-cake-bowl.webp",
  "mango-cream-swirl-cake-bowl.webp",
  "chocolate-candy-crunch-cake-bowl.webp",
  "blue-white-birthday-cake.webp",
  "blue-lavender-silver-ball-cake.webp",
  "purple-number-26-birthday-cake.webp"
];

    const cakeCatalog = [
  {
    "title": "Elegant Grey Rosette Cake",
    "description": "A sophisticated grey buttercream cake adorned with delicate rosettes and shimmering pearls.",
    "category": "Birthday",
    "fileName": "elegant-grey-rosette-birthday-cake.webp"
  },
  {
    "title": "Red Velvet Swirl Bowl",
    "description": "Elegant red velvet layers topped with rich crimson swirls and shimmering silver pearls.",
    "category": "Cake Bowls",
    "fileName": "red-velvet-swirl-cake-bowl.webp"
  },
  {
    "title": "Astronaut Space Adventure Cake",
    "description": "Journey to the stars with this space-themed cake featuring a rocket, astronaut, and lunar landscape.",
    "category": "Kids",
    "fileName": "astronaut-space-rocket-birthday-cake.webp"
  },
  {
    "title": "Chef's Kitchen Birthday Cake",
    "description": "A detailed kitchen-themed cake celebrating a love for cooking, featuring a custom lady figurine.",
    "category": "Birthday",
    "fileName": "kitchen-cooking-lady-birthday-cake.webp"
  },
  {
    "title": "Relaxing 65th Birthday Cake",
    "description": "A humorous 65th birthday cake featuring a relaxing man in a recliner, perfect for a cozy celebration.",
    "category": "Birthday",
    "fileName": "lazy-retirement-65th-birthday-cake.webp"
  },
  {
    "title": "Romantic Red Roses Cake",
    "description": "Express your love with this elegant white cake topped with fresh red roses and a \"LOVE\" topper.",
    "category": "Anniversary",
    "fileName": "romantic-red-roses-love-anniversary-cake.webp"
  },
  {
    "title": "Chocolate Heart Gift Box Cake",
    "description": "A beautiful heart-shaped chocolate cake presented in a charming gift box with straw and festive decorations.",
    "category": "Birthday",
    "fileName": "heart-shaped-chocolate-gift-box-cake.webp"
  },
  {
    "title": "Film Strip Memories Cake",
    "description": "A sentimental 21st-anniversary cake featuring a photographic film strip design.",
    "category": "Anniversary",
    "fileName": "21st-anniversary-photo-film-strip-cake.webp"
  },
  {
    "title": "Pink Butterfly Anniversary Delight",
    "description": "Elegant pink butterflies flutter across this charming 42nd-anniversary creation.",
    "category": "Anniversary",
    "fileName": "42nd-anniversary-pink-butterfly-cake.webp"
  },
  {
    "title": "Golden Jubilee Butterfly Cake",
    "description": "Celebrate a 50th milestone with graceful butterflies and shimmering accents.",
    "category": "Anniversary",
    "fileName": "50th-anniversary-butterfly-cake.webp"
  },
  {
    "title": "Baby's First Bottle Cake",
    "description": "An adorable baby bottle-themed cake, perfect for a little one's 1st birthday.",
    "category": "Birthday",
    "fileName": "baby-bottle-1st-birthday-cake.webp"
  },
  {
    "title": "Blue & Purple Rosette Dream",
    "description": "Vibrant blue and purple buttercream rosettes cover this stunning birthday treat.",
    "category": "Birthday",
    "fileName": "blue-purple-rosette-birthday-girl-cake.webp"
  },
  {
    "title": "Blueberry Compote Round Cake",
    "description": "A classic round cake topped with a luscious, homemade blueberry compote.",
    "category": "Specialty",
    "fileName": "blueberry-compote-round-cake.webp"
  },
  {
    "title": "Holi Chocolate Overload",
    "description": "Celebrate the festival of colors with this chocolatey burst of joy.",
    "category": "Festive",
    "fileName": "chocolate-overload-happy-holi-cake.webp"
  },
  {
    "title": "Little Lion King Cake",
    "description": "Roar into the party with this cute and courageous lion-faced birthday cake.",
    "category": "Birthday",
    "fileName": "cute-lion-face-kids-cake.webp"
  },
  {
    "title": "Red & Silver Ornament Cake",
    "description": "Celebrate your anniversary with this stunning red and silver accented design.",
    "category": "Anniversary",
    "fileName": "elegant-red-silver-ornament-anniversary-cake.webp"
  },
  {
    "title": "Triple Floral Photo Display",
    "description": "A grand three-cake setup featuring beautiful flowers and personalized photos.",
    "category": "Specialty",
    "fileName": "floral-tri-cake-setup-with-photos.webp"
  },
  {
    "title": "Classic Heart Chocolate",
    "description": "The perfect chocolate heart for a sweet and simple birthday celebration.",
    "category": "Birthday",
    "fileName": "heart-shaped-chocolate-birthday-cake.webp"
  },
  {
    "title": "Dapper Dad's Shirt Cake",
    "description": "A stylish shirt-and-tie cake, perfect for celebrating the best dad.",
    "category": "Specialty",
    "fileName": "papas-shirt-and-tie-cake.webp"
  },
  {
    "title": "Glamour & Glitz Makeup Cake",
    "description": "A fabulous cake for the fashionista who loves all things beauty.",
    "category": "Birthday",
    "fileName": "pink-makeup-theme-birthday-cake.webp"
  },
  {
    "title": "Pastel Butterfly Garden",
    "description": "A whimsical blend of pink and purple flowers with fluttering butterflies.",
    "category": "Birthday",
    "fileName": "pink-purple-floral-butterfly-cake.webp"
  },
  {
    "title": "Pizza Party Illusion Cake",
    "description": "It looks like a pizza, but it tastes like a sweet, delicious dream!",
    "category": "Specialty",
    "fileName": "pizza-slice-illusion-cake.webp"
  },
  {
    "title": "Premium Chocolate Swirl",
    "description": "An indulgent chocolate cake with artistic swirls of premium frosting.",
    "category": "Specialty",
    "fileName": "premium-chocolate-swirl-cake.webp"
  },
  {
    "title": "Petite Crimson Hearts",
    "description": "A cute and compact mini cake adorned with bold black hearts.",
    "category": "Specialty",
    "fileName": "red-mini-cake-black-hearts.webp"
  },
  {
    "title": "Scarlet Mirror Glaze Heart",
    "description": "A sleek and shiny mirror-glazed heart cake that speaks of true love.",
    "category": "Anniversary",
    "fileName": "red-mirror-glaze-heart-cake.webp"
  },
  {
    "title": "Romantic Red Velvet Heart",
    "description": "The classic red velvet cake in a beautiful heart shape for your love.",
    "category": "Anniversary",
    "fileName": "red-velvet-heart-cake.webp"
  },
  {
    "title": "Sweet Bunting Love Cake",
    "description": "Express your feelings with this charming 'Love You' bunting cake.",
    "category": "Anniversary",
    "fileName": "romantic-love-you-bunting-cake.webp"
  },
  {
    "title": "Valentine's Rose Pot Delight",
    "description": "A unique cake shaped like a flower pot, overflowing with red roses.",
    "category": "Festive",
    "fileName": "valentines-day-rose-pot-cake.webp"
  },
  {
    "title": "Pristine Swirl Rose Anniversary",
    "description": "Celebrate another year together with this classic white rose cake.",
    "category": "Anniversary",
    "fileName": "white-swirl-rose-anniversary-cake.webp"
  },
  {
    "title": "World's Best Sister Cake",
    "description": "Show your sister some love with this specially designed tribute cake.",
    "category": "Specialty",
    "fileName": "worlds-best-sister-cake.webp"
  },
  {
    "title": "Classic Oreo Chocolate Bowl",
    "description": "Indulge in a rich chocolate base topped with creamy frosting, a whole Oreo cookie, and elegant silver pearls.",
    "category": "Cake Bowls",
    "fileName": "classic-oreo-chocolate-cake-bowl.webp"
  },
  {
    "title": "Strawberry Dream Bowl",
    "description": "A delightful pink-frosted treat featuring light, airy sponge and shimmering silver pearls for a touch of magic.",
    "category": "Cake Bowls",
    "fileName": "strawberry-dream-pink-cake-bowl.webp"
  },
  {
    "title": "Oreo Swirl & Chips Bowl",
    "description": "A playful mix of pink and chocolate frosting swirls, chocolate chips, and Oreo cookies for the ultimate crunch.",
    "category": "Cake Bowls",
    "fileName": "oreo-swirl-chocolate-chip-cake-bowl.webp"
  },
  {
    "title": "Romantic Red Velvet Bowl",
    "description": "Velvety red sponge layered with smooth cream frosting and adorable red heart-shaped sprinkles.",
    "category": "Cake Bowls",
    "fileName": "romantic-red-velvet-heart-cake-bowl.webp"
  },
  {
    "title": "Velvety Red Velvet Bowl",
    "description": "Celebrate love with this beautifully layered red velvet bowl topped with creamy swirls and golden accents.",
    "category": "Cake Bowls",
    "fileName": "velvety-red-velvet-cream-cake-bowl.webp"
  },
  {
    "title": "Fresh Fruit Rainbow Bowl",
    "description": "A refreshing blend of juicy grapes, pomegranate seeds, and vibrant sprinkles over a light cream base.",
    "category": "Cake Bowls",
    "fileName": "fresh-fruit-rainbow-cake-bowl.webp"
  },
  {
    "title": "Mango Bliss Gold Bowl",
    "description": "A sunny tropical delight featuring a bright mango glaze, golden pearls, and festive rainbow sprinkles.",
    "category": "Cake Bowls",
    "fileName": "pineapple-mango-gold-pearl-cake-bowl.webp"
  },
  {
    "title": "Pink & Blue Number Birthday Cake",
    "description": "A cheerful pink-and-blue birthday cake finished with playful lettering, pastel panels, and a golden bead border.",
    "category": "Birthday",
    "fileName": "pink-blue-number-birthday-cake.webp"
  },
  {
    "title": "Black & Gold Moustache Celebration Cake",
    "description": "A crisp white ridged cake dressed with black-and-gold spheres, bow accents, and a whimsical moustache topper.",
    "category": "Specialty",
    "fileName": "black-gold-moustache-celebration-cake.webp"
  },
  {
    "title": "Nutty Butter Cookies",
    "description": "Golden round butter cookies generously finished with a crunchy sprinkle of roasted nuts.",
    "category": "Specialty",
    "fileName": "nutty-butter-cookies.webp"
  },
  {
    "title": "Pink & Purple Butterfly Birthday Cake",
    "description": "A tall pastel celebration cake layered with butterfly details, purple swirls, and shimmering gold pearls.",
    "category": "Birthday",
    "fileName": "pink-purple-butterfly-birthday-cake.webp"
  },
  {
    "title": "Blue Vehicle Adventure Cake",
    "description": "A blue-and-white birthday cake featuring a detailed off-road vehicle, star accents, and bold piped trim.",
    "category": "Birthday",
    "fileName": "blue-thar-vehicle-birthday-cake.webp"
  },
  {
    "title": "Cherry Confetti Birthday Cake",
    "description": "A bright white cake scattered with red-and-green cherry-style decorations and a festive birthday topper.",
    "category": "Birthday",
    "fileName": "cherry-confetti-birthday-cake.webp"
  },
  {
    "title": "Red Love Letter Cake",
    "description": "A soft white-and-pink cake framed with glossy red LOVE letters and delicate piped details.",
    "category": "Anniversary",
    "fileName": "red-love-letter-cake.webp"
  },
  {
    "title": "Pink Lavender Sprinkle Cake",
    "description": "A simple pastel cake layered in pink and lavender with a joyful scatter of rainbow sprinkles.",
    "category": "Birthday",
    "fileName": "pink-lavender-sprinkle-cake.webp"
  },
  {
    "title": "Pink Cartoon Party Cake",
    "description": "A playful pink celebration cake topped with colorful cartoon-style figures and a festive message plaque.",
    "category": "Birthday",
    "fileName": "pink-cartoon-party-cake.webp"
  },
  {
    "title": "Snowman Winter Celebration Cake",
    "description": "A whimsical white-and-blue cake with a crowned snowman, gift details, and crisp star accents.",
    "category": "Festive",
    "fileName": "snowman-winter-celebration-cake.webp"
  },
  {
    "title": "Graduation Cap & Diploma Cake",
    "description": "A celebratory cake topped with a graduation cap, rolled diploma, red tassel, and sparkling achievement accents.",
    "category": "Specialty",
    "fileName": "graduation-cap-diploma-cake.webp"
  },
  {
    "title": "Blue & Gold Number 15 Cake",
    "description": "A dramatic navy birthday cake paired with a golden rosette, star sprinkles, and a bold number 15.",
    "category": "Birthday",
    "fileName": "blue-gold-number-15-birthday-cake.webp"
  },
  {
    "title": "Oreo Cookie Crunch Bowl",
    "description": "A rich chocolate cake bowl piled with Oreo pieces and a signature cookie in the center for extra crunch.",
    "category": "Cake Bowls",
    "fileName": "oreo-cookie-crunch-cake-bowl.webp"
  },
  {
    "title": "Biscoff Cookie Cream Bowl",
    "description": "Creamy chocolate layers meet caramel Biscoff crumbs and a whole biscuit in this indulgent dessert bowl.",
    "category": "Cake Bowls",
    "fileName": "biscoff-cookie-cream-cake-bowl.webp"
  },
  {
    "title": "Colorful Fruit Sprinkle Cookies",
    "description": "Soft-baked cookies dotted with colorful fruit pieces and cheerful confetti sprinkles.",
    "category": "Specialty",
    "fileName": "colorful-fruit-sprinkle-cookies.webp"
  },
  {
    "title": "Rose Garden Cupcakes",
    "description": "Two generous cupcakes bloom with hand-piped red rose frosting, white blossoms, and gold sugar pearls.",
    "category": "Specialty",
    "fileName": "rose-garden-cupcakes.webp"
  },
  {
    "title": "Simple Love Arrow Cake",
    "description": "A clean white celebration cake finished with a red LOVE arrow topper and elegant ruffled sides.",
    "category": "Anniversary",
    "fileName": "simple-love-arrow-cake.webp"
  },
  {
    "title": "Purple Heart Anniversary Cake",
    "description": "A romantic heart-shaped cake layered in purple and white with delicate pearls and a celebration topper.",
    "category": "Anniversary",
    "fileName": "purple-heart-anniversary-cake.webp"
  },
  {
    "title": "Blue & Yellow Floral Birthday Cake",
    "description": "A bright floral birthday cake crowned with white blossoms, blue accents, and golden sugar pearls.",
    "category": "Birthday",
    "fileName": "blue-yellow-floral-birthday-cake.webp"
  },
  {
    "title": "Purple Photo Memory Cake",
    "description": "A glossy purple celebration cake framed with piped flowers, butterflies, pearls, and a strip of treasured photos.",
    "category": "Specialty",
    "fileName": "purple-photo-memory-cake.webp"
  },
  {
    "title": "Pink Heart Marshmallow Bowl",
    "description": "A dreamy pink cake bowl topped with pastel heart-shaped marshmallows and silver sugar pearls.",
    "category": "Cake Bowls",
    "fileName": "pink-heart-marshmallow-cake-bowl.webp"
  },
  {
    "title": "Spider Hero Birthday Cake",
    "description": "A two-tier red-and-blue superhero cake finished with web piping, character toppers, and colorful spheres.",
    "category": "Birthday",
    "fileName": "spider-hero-birthday-cake.webp"
  },
  {
    "title": "Fruit & Nut Dessert Loaf",
    "description": "A homestyle glazed loaf studded with fruit and nuts and packed ready to share.",
    "category": "Specialty",
    "fileName": "fruit-nut-dessert-loaf.webp"
  },
  {
    "title": "You’re Gonna Bee Awesome Cake",
    "description": "A playful aqua cake with raised pink lettering, a fondant bee, red rose, and rainbow sprinkle border.",
    "category": "Birthday",
    "fileName": "youre-gonna-bee-awesome-cake.webp"
  },
  {
    "title": "Safari Jungle Birthday Cake",
    "description": "A sunny safari cake with friendly animal toppers, leafy accents, and a textured grass-green base.",
    "category": "Birthday",
    "fileName": "safari-jungle-birthday-cake.webp"
  },
  {
    "title": "Chocolate Heart Sprinkle Bowl",
    "description": "A glossy chocolate cake bowl showered with tiny red, pink, and white heart sprinkles.",
    "category": "Cake Bowls",
    "fileName": "chocolate-heart-sprinkle-cake-bowl.webp"
  },
  {
    "title": "Golden MOM Celebration Cake",
    "description": "A crisp white cake with a sculpted MOM topper, golden rosettes, and elegant wafer accents.",
    "category": "Festive",
    "fileName": "golden-mom-celebration-cake.webp"
  },
  {
    "title": "Red Rose Floral Celebration Cake",
    "description": "A softly ridged white cake crowned with a red rose, fresh-style blossoms, and gold finishing touches.",
    "category": "Festive",
    "fileName": "red-rose-floral-celebration-cake.webp"
  },
  {
    "title": "Pink Butterfly Bow Cake",
    "description": "A delicate pink cake wrapped in horizontal ridges and finished with white blooms, butterflies, and bows.",
    "category": "Birthday",
    "fileName": "pink-butterfly-bow-cake.webp"
  },
  {
    "title": "Green & Gold Rosette Birthday Cake",
    "description": "A rectangular birthday cake framed with deep green rosettes, golden pearls, and cheerful floral piping.",
    "category": "Birthday",
    "fileName": "green-gold-rosette-birthday-cake.webp"
  },
  {
    "title": "Purple MOM Floral Cake",
    "description": "A soft purple-and-white cake with a bold MOM topper, delicate flowers, and shimmering pearls.",
    "category": "Festive",
    "fileName": "purple-mom-floral-cake.webp"
  },
  {
    "title": "Lattice Chocolate Dessert Slice",
    "description": "A generous chocolate dessert slab finished with a crisp white lattice drizzle and a creamy center.",
    "category": "Specialty",
    "fileName": "lattice-chocolate-dessert-slice.webp"
  },
  {
    "title": "Made for Each Other Heart Cake",
    "description": "A romantic heart-shaped cake layered with chocolate lattice, red roses, and a heartfelt message.",
    "category": "Anniversary",
    "fileName": "made-for-each-other-heart-cake.webp"
  },
  {
    "title": "Cream Rosette Birthday Cake",
    "description": "A classic cream cake covered in generous rosettes, pearl details, and a golden birthday topper.",
    "category": "Birthday",
    "fileName": "cream-rosette-birthday-cake.webp"
  },
  {
    "title": "Princess Doll Birthday Cake",
    "description": "A showstopping princess cake with a fondant doll, cascading pink ruffles, and a butterfly base accent.",
    "category": "Birthday",
    "fileName": "princess-doll-birthday-cake.webp"
  },
  {
    "title": "Mango Dessert Cups",
    "description": "Individual dessert cups layered with silky cream, juicy mango pieces, and a scattering of crunchy nuts.",
    "category": "Specialty",
    "fileName": "mango-dessert-cups.webp"
  },
  {
    "title": "Blue Duck Birthday Cake",
    "description": "A playful blue birthday cake ringed with cheerful duck figures, chocolate curls, and pastel spheres.",
    "category": "Birthday",
    "fileName": "blue-duck-birthday-cake.webp"
  },
  {
    "title": "Pink Pearl Birthday Cake",
    "description": "A pretty pink cake finished with silver pearls, delicate piping, and a clean celebratory silhouette.",
    "category": "Birthday",
    "fileName": "pink-pearl-birthday-cake.webp"
  },
  {
    "title": "Nani Goddess Celebration Cake",
    "description": "A pink celebration cake honoring Nani with a detailed goddess design, silver pearls, and a heartfelt message.",
    "category": "Birthday",
    "fileName": "pink-cartoon-character-cake.webp"
  },
  {
    "title": "Chocolate Dessert Tray",
    "description": "A shareable tray of rich chocolate dessert topped with wafer rolls, white chips, and chocolate shavings.",
    "category": "Specialty",
    "fileName": "chocolate-dessert-tray.webp"
  },
  {
    "title": "Assorted Dessert Bowl Set",
    "description": "A tempting trio of branded dessert bowls showcasing sunny fruit and deep chocolate finishes.",
    "category": "Cake Bowls",
    "fileName": "assorted-dessert-bowl-set.webp"
  },
  {
    "title": "Welcome Baby Teddy Cake",
    "description": "A gentle blue-and-white welcome-baby cake topped with clouds, a teddy bear, and playful lettering.",
    "category": "Specialty",
    "fileName": "welcome-baby-teddy-cake.webp"
  },
  {
    "title": "Classic Round Butter Cookies",
    "description": "Tender round butter cookies baked to a lightly golden finish for a simple, comforting treat.",
    "category": "Specialty",
    "fileName": "classic-round-butter-cookies.webp"
  },
  {
    "title": "Pink Train Birthday Cake",
    "description": "A cheerful pink train-themed cake with playful fondant details, gold circles, and a joyful topper.",
    "category": "Birthday",
    "fileName": "pink-train-birthday-cake.webp"
  },
  {
    "title": "Mango Cream Dessert Slab",
    "description": "A rectangular mango dessert layered with whipped cream, white chips, and bright tropical fruit.",
    "category": "Specialty",
    "fileName": "mango-cream-dessert-slab.webp"
  },
  {
    "title": "Pink Mouse Birthday Cake",
    "description": "A charming pink celebration cake topped with mouse ears, a bow, balloons, and bright piped lettering.",
    "category": "Birthday",
    "fileName": "pink-mouse-birthday-cake.webp"
  },
  {
    "title": "Colorful Fruit Candy Bowl",
    "description": "A playful cake bowl split between creamy white piping and colorful fruit candies with chocolate chips.",
    "category": "Cake Bowls",
    "fileName": "colorful-fruit-candy-cake-bowl.webp"
  },
  {
    "title": "Chocolate Drizzle Dessert Bowl Set",
    "description": "A shareable set of chocolate bowls finished with white drizzle, chocolate chips, and tiny red hearts.",
    "category": "Cake Bowls",
    "fileName": "chocolate-drizzle-dessert-bowl-set.webp"
  },
  {
    "title": "Sleeping Baby Bed Cake",
    "description": "A charming blue bed-shaped cake with a sleeping fondant baby, blanket, pillows, and a tiny teddy bear.",
    "category": "Specialty",
    "fileName": "sleeping-baby-bed-cake.webp"
  },
  {
    "title": "Black & White Chocolate Overload Cake",
    "description": "A dramatic chocolate cake coated in dark ganache and white drizzle with a border of crisp chocolate bites.",
    "category": "Specialty",
    "fileName": "black-white-chocolate-overload-cake.webp"
  },
  {
    "title": "Yellow Mango Cream Cake",
    "description": "A sunny yellow cake topped with whipped cream rosettes and a generous crown of juicy mango pieces.",
    "category": "Specialty",
    "fileName": "yellow-mango-cream-cake.webp"
  },
  {
    "title": "White & Green Floral Birthday Cake",
    "description": "A soft white cake accented with green leaves, cream roses, and a delicate golden birthday topper.",
    "category": "Birthday",
    "fileName": "white-green-floral-birthday-cake.webp"
  },
  {
    "title": "Chocolate Dessert Slice Pack",
    "description": "Individually packed chocolate dessert slices finished with white drizzle for easy sharing.",
    "category": "Specialty",
    "fileName": "chocolate-dessert-slice-pack.webp"
  },
  {
    "title": "Oreo Chocolate Celebration Cake",
    "description": "A decadent chocolate cake layered with Oreo cookies, red accents, and bold white drizzle.",
    "category": "Specialty",
    "fileName": "oreo-chocolate-celebration-cake.webp"
  },
  {
    "title": "Glossy Chocolate Mini Cake",
    "description": "A petite mirror-glazed chocolate cake presented in a takeaway box with crisp heart decorations.",
    "category": "Specialty",
    "fileName": "glossy-chocolate-mini-cake.webp"
  },
  {
    "title": "Illuminated Tiered Celebration Cake",
    "description": "A dramatic tiered cake glowing with warm lights and crowned with a rich chocolate-and-blue finish.",
    "category": "Specialty",
    "fileName": "illuminated-tiered-celebration-cake.webp"
  },
  {
    "title": "Pink Rose Floral Cake",
    "description": "A romantic pink cake covered with dimensional red roses, white piping, and soft blue floral accents.",
    "category": "Birthday",
    "fileName": "pink-rose-floral-cake.webp"
  },
  {
    "title": "Someone Special Pink Cake",
    "description": "A joyful pink cake with a heartfelt message, ribbon-like piping, pearls, and a bright gold board.",
    "category": "Birthday",
    "fileName": "someone-special-pink-cake.webp"
  },
  {
    "title": "Mango Nut Crunch Bowl",
    "description": "A creamy mango cake bowl topped with fruit, roasted nuts, and chocolate chips for a tropical crunch.",
    "category": "Cake Bowls",
    "fileName": "mango-nut-crunch-cake-bowl.webp"
  },
  {
    "title": "Oreo Chocolate Chip Bowl",
    "description": "A glossy chocolate bowl topped with a whole Oreo, chocolate chips, and contrasting white and dark piping.",
    "category": "Cake Bowls",
    "fileName": "oreo-chocolate-chip-cake-bowl.webp"
  },
  {
    "title": "Black & White Feather Bowl",
    "description": "A dark chocolate cake bowl decorated with elegant white feather-like swirls and a ring of chocolate chips.",
    "category": "Cake Bowls",
    "fileName": "black-white-feather-cake-bowl.webp"
  },
  {
    "title": "Black & White Bloom Bowl",
    "description": "A glossy chocolate bowl finished with a radial white bloom pattern, gold shimmer, and chocolate chips.",
    "category": "Cake Bowls",
    "fileName": "black-white-bloom-cake-bowl.webp"
  },
  {
    "title": "Mango Cream Swirl Bowl",
    "description": "Juicy mango pieces and ribbons of whipped cream create a bright, tropical cake bowl.",
    "category": "Cake Bowls",
    "fileName": "mango-cream-swirl-cake-bowl.webp"
  },
  {
    "title": "Chocolate Candy Crunch Bowl",
    "description": "A chocolate cake bowl layered with black-and-white cream, colorful candy pearls, and rainbow sprinkles.",
    "category": "Cake Bowls",
    "fileName": "chocolate-candy-crunch-cake-bowl.webp"
  },
  {
    "title": "Blue & White Birthday Cake",
    "description": "A clean blue-and-white birthday cake finished with piped rosettes, a gold plaque, and soft layered texture.",
    "category": "Birthday",
    "fileName": "blue-white-birthday-cake.webp"
  },
  {
    "title": "Blue Lavender Silver Ball Cake",
    "description": "A cool blue-and-lavender celebration cake accented with silver spheres, clouds, and a playful message board.",
    "category": "Birthday",
    "fileName": "blue-lavender-silver-ball-cake.webp"
  },
  {
    "title": "Purple Number 26 Birthday Cake",
    "description": "A lilac birthday cake topped with soft pink number 26 candles, silver pearls, and graceful piped swirls.",
    "category": "Birthday",
    "fileName": "purple-number-26-birthday-cake.webp"
  }
];

    const imageToCakeTitle = {
  "elegant-grey-rosette-birthday-cake.webp": "Elegant Grey Rosette Cake",
  "red-velvet-swirl-cake-bowl.webp": "Red Velvet Swirl Bowl",
  "astronaut-space-rocket-birthday-cake.webp": "Astronaut Space Adventure Cake",
  "kitchen-cooking-lady-birthday-cake.webp": "Chef's Kitchen Birthday Cake",
  "lazy-retirement-65th-birthday-cake.webp": "Relaxing 65th Birthday Cake",
  "romantic-red-roses-love-anniversary-cake.webp": "Romantic Red Roses Cake",
  "heart-shaped-chocolate-gift-box-cake.webp": "Chocolate Heart Gift Box Cake",
  "21st-anniversary-photo-film-strip-cake.webp": "Film Strip Memories Cake",
  "42nd-anniversary-pink-butterfly-cake.webp": "Pink Butterfly Anniversary Delight",
  "50th-anniversary-butterfly-cake.webp": "Golden Jubilee Butterfly Cake",
  "baby-bottle-1st-birthday-cake.webp": "Baby's First Bottle Cake",
  "blue-purple-rosette-birthday-girl-cake.webp": "Blue & Purple Rosette Dream",
  "blueberry-compote-round-cake.webp": "Blueberry Compote Round Cake",
  "chocolate-overload-happy-holi-cake.webp": "Holi Chocolate Overload",
  "cute-lion-face-kids-cake.webp": "Little Lion King Cake",
  "elegant-red-silver-ornament-anniversary-cake.webp": "Red & Silver Ornament Cake",
  "floral-tri-cake-setup-with-photos.webp": "Triple Floral Photo Display",
  "heart-shaped-chocolate-birthday-cake.webp": "Classic Heart Chocolate",
  "papas-shirt-and-tie-cake.webp": "Dapper Dad's Shirt Cake",
  "pink-makeup-theme-birthday-cake.webp": "Glamour & Glitz Makeup Cake",
  "pink-purple-floral-butterfly-cake.webp": "Pastel Butterfly Garden",
  "pizza-slice-illusion-cake.webp": "Pizza Party Illusion Cake",
  "premium-chocolate-swirl-cake.webp": "Premium Chocolate Swirl",
  "red-mini-cake-black-hearts.webp": "Petite Crimson Hearts",
  "red-mirror-glaze-heart-cake.webp": "Scarlet Mirror Glaze Heart",
  "red-velvet-heart-cake.webp": "Romantic Red Velvet Heart",
  "romantic-love-you-bunting-cake.webp": "Sweet Bunting Love Cake",
  "valentines-day-rose-pot-cake.webp": "Valentine's Rose Pot Delight",
  "white-swirl-rose-anniversary-cake.webp": "Pristine Swirl Rose Anniversary",
  "worlds-best-sister-cake.webp": "World's Best Sister Cake",
  "classic-oreo-chocolate-cake-bowl.webp": "Classic Oreo Chocolate Bowl",
  "strawberry-dream-pink-cake-bowl.webp": "Strawberry Dream Bowl",
  "oreo-swirl-chocolate-chip-cake-bowl.webp": "Oreo Swirl & Chips Bowl",
  "romantic-red-velvet-heart-cake-bowl.webp": "Romantic Red Velvet Bowl",
  "velvety-red-velvet-cream-cake-bowl.webp": "Velvety Red Velvet Bowl",
  "fresh-fruit-rainbow-cake-bowl.webp": "Fresh Fruit Rainbow Bowl",
  "pineapple-mango-gold-pearl-cake-bowl.webp": "Mango Bliss Gold Bowl",
  "pink-blue-number-birthday-cake.webp": "Pink & Blue Number Birthday Cake",
  "black-gold-moustache-celebration-cake.webp": "Black & Gold Moustache Celebration Cake",
  "nutty-butter-cookies.webp": "Nutty Butter Cookies",
  "pink-purple-butterfly-birthday-cake.webp": "Pink & Purple Butterfly Birthday Cake",
  "blue-thar-vehicle-birthday-cake.webp": "Blue Vehicle Adventure Cake",
  "cherry-confetti-birthday-cake.webp": "Cherry Confetti Birthday Cake",
  "red-love-letter-cake.webp": "Red Love Letter Cake",
  "pink-lavender-sprinkle-cake.webp": "Pink Lavender Sprinkle Cake",
  "pink-cartoon-party-cake.webp": "Pink Cartoon Party Cake",
  "snowman-winter-celebration-cake.webp": "Snowman Winter Celebration Cake",
  "graduation-cap-diploma-cake.webp": "Graduation Cap & Diploma Cake",
  "blue-gold-number-15-birthday-cake.webp": "Blue & Gold Number 15 Cake",
  "oreo-cookie-crunch-cake-bowl.webp": "Oreo Cookie Crunch Bowl",
  "biscoff-cookie-cream-cake-bowl.webp": "Biscoff Cookie Cream Bowl",
  "colorful-fruit-sprinkle-cookies.webp": "Colorful Fruit Sprinkle Cookies",
  "rose-garden-cupcakes.webp": "Rose Garden Cupcakes",
  "simple-love-arrow-cake.webp": "Simple Love Arrow Cake",
  "purple-heart-anniversary-cake.webp": "Purple Heart Anniversary Cake",
  "blue-yellow-floral-birthday-cake.webp": "Blue & Yellow Floral Birthday Cake",
  "purple-photo-memory-cake.webp": "Purple Photo Memory Cake",
  "pink-heart-marshmallow-cake-bowl.webp": "Pink Heart Marshmallow Bowl",
  "spider-hero-birthday-cake.webp": "Spider Hero Birthday Cake",
  "fruit-nut-dessert-loaf.webp": "Fruit & Nut Dessert Loaf",
  "youre-gonna-bee-awesome-cake.webp": "You’re Gonna Bee Awesome Cake",
  "safari-jungle-birthday-cake.webp": "Safari Jungle Birthday Cake",
  "chocolate-heart-sprinkle-cake-bowl.webp": "Chocolate Heart Sprinkle Bowl",
  "golden-mom-celebration-cake.webp": "Golden MOM Celebration Cake",
  "red-rose-floral-celebration-cake.webp": "Red Rose Floral Celebration Cake",
  "pink-butterfly-bow-cake.webp": "Pink Butterfly Bow Cake",
  "green-gold-rosette-birthday-cake.webp": "Green & Gold Rosette Birthday Cake",
  "purple-mom-floral-cake.webp": "Purple MOM Floral Cake",
  "lattice-chocolate-dessert-slice.webp": "Lattice Chocolate Dessert Slice",
  "made-for-each-other-heart-cake.webp": "Made for Each Other Heart Cake",
  "cream-rosette-birthday-cake.webp": "Cream Rosette Birthday Cake",
  "princess-doll-birthday-cake.webp": "Princess Doll Birthday Cake",
  "mango-dessert-cups.webp": "Mango Dessert Cups",
  "blue-duck-birthday-cake.webp": "Blue Duck Birthday Cake",
  "pink-pearl-birthday-cake.webp": "Pink Pearl Birthday Cake",
  "pink-cartoon-character-cake.webp": "Nani Goddess Celebration Cake",
  "chocolate-dessert-tray.webp": "Chocolate Dessert Tray",
  "assorted-dessert-bowl-set.webp": "Assorted Dessert Bowl Set",
  "welcome-baby-teddy-cake.webp": "Welcome Baby Teddy Cake",
  "classic-round-butter-cookies.webp": "Classic Round Butter Cookies",
  "pink-train-birthday-cake.webp": "Pink Train Birthday Cake",
  "mango-cream-dessert-slab.webp": "Mango Cream Dessert Slab",
  "pink-mouse-birthday-cake.webp": "Pink Mouse Birthday Cake",
  "colorful-fruit-candy-cake-bowl.webp": "Colorful Fruit Candy Bowl",
  "chocolate-drizzle-dessert-bowl-set.webp": "Chocolate Drizzle Dessert Bowl Set",
  "sleeping-baby-bed-cake.webp": "Sleeping Baby Bed Cake",
  "black-white-chocolate-overload-cake.webp": "Black & White Chocolate Overload Cake",
  "yellow-mango-cream-cake.webp": "Yellow Mango Cream Cake",
  "white-green-floral-birthday-cake.webp": "White & Green Floral Birthday Cake",
  "chocolate-dessert-slice-pack.webp": "Chocolate Dessert Slice Pack",
  "oreo-chocolate-celebration-cake.webp": "Oreo Chocolate Celebration Cake",
  "glossy-chocolate-mini-cake.webp": "Glossy Chocolate Mini Cake",
  "illuminated-tiered-celebration-cake.webp": "Illuminated Tiered Celebration Cake",
  "pink-rose-floral-cake.webp": "Pink Rose Floral Cake",
  "someone-special-pink-cake.webp": "Someone Special Pink Cake",
  "mango-nut-crunch-cake-bowl.webp": "Mango Nut Crunch Bowl",
  "oreo-chocolate-chip-cake-bowl.webp": "Oreo Chocolate Chip Bowl",
  "black-white-feather-cake-bowl.webp": "Black & White Feather Bowl",
  "black-white-bloom-cake-bowl.webp": "Black & White Bloom Bowl",
  "mango-cream-swirl-cake-bowl.webp": "Mango Cream Swirl Bowl",
  "chocolate-candy-crunch-cake-bowl.webp": "Chocolate Candy Crunch Bowl",
  "blue-white-birthday-cake.webp": "Blue & White Birthday Cake",
  "blue-lavender-silver-ball-cake.webp": "Blue Lavender Silver Ball Cake",
  "purple-number-26-birthday-cake.webp": "Purple Number 26 Birthday Cake"
};

    const cakeCatalogByFile = Object.fromEntries(
        cakeCatalog.map((entry) => [entry.fileName, entry])
    );
    const cakeCatalogByTitle = Object.fromEntries(
        cakeCatalog.map((entry) => [entry.title, entry])
    );
    const cakeNotesByImage = Object.fromEntries(
        images
            .map((imageName) => {
                const title = imageToCakeTitle[imageName];
                const note = cakeCatalogByFile[imageName] || cakeCatalogByTitle[title];
                return [imageName, note];
            })
            .filter(([, note]) => Boolean(note))
    );

    const galleryContainer = document.getElementById("gallery-container");
    const galleryCount = document.getElementById("gallery-count");
    const filterStatus = document.getElementById("filter-status");
    const modal = document.getElementById("postcard-modal");
    const closeModalBtn = document.getElementById("modal-close");
    const postcardImage = document.getElementById("postcard-image");
    const postcardTitle = document.getElementById("postcard-title");
    const postcardDescription = document.getElementById("postcard-description");
    const postcardCategory = document.getElementById("postcard-category");
    const filterButtons = Array.from(document.querySelectorAll(".filter-btn"));
    const allFilterButton = filterButtons.find((button) => button.dataset.category === "all");
    let previousBodyOverflow = null;

    const defaultCakeNote = {
        title: "Signature Bakery Delight",
        description: "Freshly handcrafted at Pallav's Kitchen with premium ingredients and thoughtful finishing details.",
        category: "House Special"
    };

    function getCakeNote(imageName) {
        return cakeNotesByImage[imageName] || cakeCatalogByFile[imageName] || defaultCakeNote;
    }

    function getImageSource(fileName) {
        return "images/" + encodeURIComponent(fileName);
    }

    const warnedMissingAssets = new Set();

    function replaceImageWithFallback(image, note, fileName) {
        if (image.dataset.fallbackApplied === "true") {
            return;
        }

        image.dataset.fallbackApplied = "true";
        if (!warnedMissingAssets.has(fileName)) {
            warnedMissingAssets.add(fileName);
            console.warn("[gallery] missing asset", fileName);
        }

        const fallback = document.createElement("div");
        fallback.className = "media-fallback";
        fallback.setAttribute("role", "img");
        fallback.setAttribute("aria-label", "Image unavailable: " + note.title);
        fallback.textContent = "Image unavailable";
        image.replaceWith(fallback);
    }

    function createCardMedia(fileName, note, loading) {
        const media = document.createElement("div");
        media.className = "card-media";

        const image = document.createElement("img");
        image.width = 4;
        image.height = 3;
        image.loading = loading;
        image.setAttribute("loading", loading);
        image.src = getImageSource(fileName);
        image.alt = note.title;
        image.decoding = "async";
        image.onerror = () => {
            replaceImageWithFallback(image, note, fileName);
        };

        media.appendChild(image);
        return media;
    }

    function attachCardInteraction(card, note, src) {
        const action = card.querySelector(".card-action");
        const defaultTrigger = action || card;
        const open = (trigger = defaultTrigger) => openPostcard({ trigger, note, src });

        card.addEventListener("click", (event) => {
            const target = event.target;
            if (target && typeof target.closest === "function" && target.closest(".card-action")) {
                return;
            }
            open();
        });

        card.addEventListener("keydown", (event) => {
            if (event.key !== "Enter" && event.key !== " ") {
                return;
            }
            if (event.target && typeof event.target.closest === "function" && event.target.closest(".card-action")) {
                return;
            }

            event.preventDefault();
            open();
        });

        if (action) {
            action.addEventListener("click", (event) => {
                event.stopPropagation();
                open(action);
            });
        }
    }

    function createCatalogCard(fileName, options = {}) {
        const note = getCakeNote(fileName);
        const card = document.createElement("article");
        card.className = "gallery-card";
        card.dataset.fileName = fileName;
        card.dataset.category = note.category;
        card.tabIndex = 0;
        card.setAttribute("aria-label", "Open details for " + note.title);
        const cardIndex = Number.isFinite(options.index) ? options.index : 0;
        card.style.setProperty("--card-delay", ((cardIndex % 8) * 45) + "ms");

        const media = createCardMedia(
            fileName,
            note,
            options.loading || "lazy"
        );
        card.appendChild(media);

        const content = document.createElement("div");
        content.className = "card-content";

        const category = document.createElement("p");
        category.className = "card-category";
        category.textContent = note.category;

        const title = document.createElement("h3");
        title.className = "card-title";
        title.textContent = note.title;

        const action = document.createElement("button");
        action.type = "button";
        action.className = "card-action";
        action.textContent = "View details";

        content.append(category, title, action);
        card.appendChild(content);

        attachCardInteraction(card, note, getImageSource(fileName));
        return card;
    }

    function updateFilterStatus(category, count) {
        const selectedCategory = category || "all";
        const countLabel = count + (count === 1 ? " creation" : " creations");

        if (galleryCount) {
            galleryCount.textContent = countLabel;
        }

        if (filterStatus) {
            if (selectedCategory === "all") {
                filterStatus.textContent = "Showing all " + countLabel + ".";
            } else if (count === 0) {
                filterStatus.textContent = "No creations found in " + selectedCategory + ".";
            } else {
                filterStatus.textContent = "Showing " + countLabel + " in " + selectedCategory + ".";
            }
        }
    }

    function setActiveFilter(button) {
        filterButtons.forEach((candidate) => {
            const isActive = candidate === button;
            candidate.classList.toggle("is-active", isActive);
            candidate.classList.toggle("active", isActive);
            candidate.setAttribute("aria-pressed", String(isActive));
        });
    }

    function createEmptyState(category) {
        const empty = document.createElement("div");
        empty.className = "gallery-empty empty-state";

        const message = document.createElement("p");
        message.textContent = category === "all"
            ? "No creations are available right now."
            : "No creations found in " + category + ".";

        const reset = document.createElement("button");
        reset.type = "button";
        reset.className = "card-action";
        reset.textContent = "Show all creations";
        reset.addEventListener("click", () => {
            if (allFilterButton) {
                setActiveFilter(allFilterButton);
            }
            renderGallery("all");
        });

        empty.append(message, reset);
        return empty;
    }

    function renderGallery(category = "all") {
        const selectedCategory = category || "all";
        const selectedButton = filterButtons.find(
            (button) => button.dataset.category === selectedCategory
        );
        if (selectedButton) {
            setActiveFilter(selectedButton);
        }

        const matchingImages = images.filter((fileName) => {
            const note = getCakeNote(fileName);
            return selectedCategory === "all" || note.category === selectedCategory;
        });

        if (galleryContainer) {
            galleryContainer.innerHTML = "";
            matchingImages.forEach((fileName, index) => {
                galleryContainer.appendChild(createCatalogCard(fileName, {
                    loading: "lazy",
                    index
                }));
            });

            if (matchingImages.length === 0) {
                galleryContainer.appendChild(createEmptyState(selectedCategory));
            }
        }

        updateFilterStatus(selectedCategory, matchingImages.length);
        return matchingImages.length;
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", closePostcard);
    }

    if (modal) {
        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                closePostcard();
            }
        });
    }

    document.addEventListener("keydown", (event) => {
        if (!modal || modal.getAttribute("aria-hidden") !== "false") {
            return;
        }

        if (event.key === "Escape") {
            event.preventDefault();
            closePostcard();
            return;
        }

        if (event.key !== "Tab") {
            return;
        }

        const focusable = getModalFocusableElements();
        if (focusable.length === 0) {
            event.preventDefault();
            if (closeModalBtn) {
                closeModalBtn.focus();
            }
            return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && (document.activeElement === first || !modal.contains(document.activeElement))) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && (document.activeElement === last || !modal.contains(document.activeElement))) {
            event.preventDefault();
            first.focus();
        }
    });

    function getModalFocusableElements() {
        if (!modal) {
            return [];
        }

        const selector = [
            "button:not([disabled])",
            "[href]",
            "input:not([disabled])",
            "select:not([disabled])",
            "textarea:not([disabled])",
            "[tabindex]:not([tabindex=\"-1\"]):not([disabled])"
        ].join(",");

        return Array.from(modal.querySelectorAll(selector)).filter((element) => {
            return !element.hidden && element.getAttribute("aria-hidden") !== "true";
        });
    }

    function setModalInert(isInert) {
        if (!modal) {
            return;
        }

        if ("inert" in modal) {
            modal.inert = isInert;
        }
        if (isInert) {
            modal.setAttribute("inert", "");
        } else {
            modal.removeAttribute("inert");
        }
    }

    function openPostcard({ trigger = null, note = defaultCakeNote, src = "" } = {}) {
        if (!modal) {
            return;
        }

        const selectedNote = note || defaultCakeNote;
        if (postcardImage) {
            postcardImage.src = src;
            postcardImage.alt = selectedNote.title;
        }
        if (postcardTitle) {
            postcardTitle.textContent = selectedNote.title;
        }
        if (postcardDescription) {
            postcardDescription.textContent = selectedNote.description;
        }
        if (postcardCategory) {
            postcardCategory.textContent = selectedNote.category;
        }

        modal.__trigger = trigger;
        modal.hidden = false;
        setModalInert(false);
        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");
        if (previousBodyOverflow === null) {
            previousBodyOverflow = document.body.style.overflow;
        }
        document.body.classList.add("modal-open");
        document.body.style.overflow = "hidden";
        if (closeModalBtn) {
            closeModalBtn.focus();
        }
    }

    function closePostcard() {
        if (!modal) {
            return;
        }

        const trigger = modal.__trigger;
        modal.__trigger = null;
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
        setModalInert(true);
        modal.hidden = true;
        document.body.classList.remove("modal-open");
        if (previousBodyOverflow !== null) {
            document.body.style.overflow = previousBodyOverflow;
            previousBodyOverflow = null;
        }
        if (trigger && typeof trigger.focus === "function" && trigger.isConnected !== false) {
            trigger.focus();
        }
    }

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            setActiveFilter(button);
            renderGallery(button.dataset.category || "all");
        });
    });

    function initializeReveal() {
        const revealItems = Array.from(document.querySelectorAll(".reveal"));
        if (revealItems.length === 0) {
            return;
        }

        const show = (element) => element.classList.add("is-visible");
        const reducedMotion = typeof window.matchMedia === "function"
            && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reducedMotion || typeof window.IntersectionObserver !== "function") {
            revealItems.forEach(show);
            return;
        }

        const observer = new IntersectionObserver((entries, observerInstance) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    show(entry.target);
                    observerInstance.unobserve(entry.target);
                }
            });
        }, { root: null, rootMargin: "0px", threshold: 0.15 });

        revealItems.forEach((element) => observer.observe(element));
    }

    function initializeScrollMotion() {
        const hero = document.querySelector(".hero");
        const imageStrip = document.querySelector(".hero-image-strip");
        if (!hero || !imageStrip || typeof window === "undefined") {
            return;
        }

        const reducedMotion = typeof window.matchMedia === "function"
            && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let frame = 0;

        const update = () => {
            frame = 0;
            const viewportHeight = window.innerHeight || 1;
            const heroRect = hero.getBoundingClientRect();
            const start = viewportHeight * 0.24;
            const end = -heroRect.height * 0.7;
            const progress = Math.max(0, Math.min(1, (start - heroRect.top) / (start - end)));
            const documentHeight = Math.max(
                document.documentElement.scrollHeight - viewportHeight,
                1
            );
            const scrollProgress = Math.max(0, Math.min(100, (window.scrollY / documentHeight) * 100));

            document.documentElement.style.setProperty("--scroll-progress", scrollProgress + "%");
            if (!reducedMotion) {
                imageStrip.style.setProperty("--parallax-y", (progress * 16) + "px");
            }
        };

        const scheduleUpdate = () => {
            if (frame === 0) {
                frame = window.requestAnimationFrame(update);
            }
        };

        update();
        window.addEventListener("scroll", scheduleUpdate, { passive: true });
        window.addEventListener("resize", scheduleUpdate, { passive: true });
    }

    closePostcard();
    renderGallery("all");
    initializeReveal();
    initializeScrollMotion();

    if (typeof window !== "undefined") {
        window.getCakeNote = getCakeNote;
        window.renderGallery = renderGallery;
        window.openPostcard = openPostcard;
        window.closePostcard = closePostcard;
        window.updateFilterStatus = updateFilterStatus;
        window.setActiveFilter = setActiveFilter;
    }
});
