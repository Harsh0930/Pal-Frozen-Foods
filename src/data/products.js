const wixImage = (asset, width, height) =>
  `https://static.wixstatic.com/media/${asset}/v1/fit/w_${width},h_${height},q_90,enc_avif,quality_auto/${asset}`;

export const productBrandInfo = {
  'pal-fresh': {
    title: 'PAL FRESH FROZEN VEGETABLES',
    description: 'At Pal Frozen Foods, we believe healthy eating should be convenient without compromising on nutrition. Our Frozen Vegetables are harvested at the peak of freshness and quickly frozen using advanced IQF (Individually Quick Freezing) technology. This locks in natural taste, color, and nutrients – ensuring you get the best of the farm all year round.',
  },
  frozzo: {
    title: 'FROZZO FROZEN SNACKS',
    description: 'Our Frozen snacks are made with our farm grown fresh vegetables which are cultivated under the support and guidance of our agronomists. To give a delicious bite snacks, our Frozen snacks are carefully seasoned with the flavorful authentic Indian herbs.',
  },
};

export const products = [
  {
    id: 'frozen-green-peas',
    brand: 'pal-fresh',
    name: 'Frozen Green Peas',
    image: wixImage('852e77_17d0454fa6f447ae868f38950f26bb78~mv2.png', 574, 572),
  },
  {
    id: 'frozen-sweet-corn',
    brand: 'pal-fresh',
    name: 'Frozen Sweet Corn',
    image: wixImage('852e77_365a00b10b794ebdb8352348b0c55947~mv2.png', 574, 572),
  },
  {
    id: 'frozen-baby-corn',
    brand: 'pal-fresh',
    name: 'Frozen Baby Corn',
    image: wixImage('852e77_f3061d34f7284a1a9437f687a500d6e8~mv2.png', 356, 356),
  },
  {
    id: 'frozen-diced-carrot',
    brand: 'pal-fresh',
    name: 'Frozen Diced Carrot',
    image: wixImage('852e77_ca68928ea8c546bd8124e4dce2ff8377~mv2.png', 356, 356),
  },
  {
    id: 'crunchy-veggie-stix',
    brand: 'frozzo',
    name: 'Crunchy Veggie Stix',
    image: wixImage('852e77_d668494ad64e4a45a2267f052edcf1fa~mv2.png', 724, 724),
  },
  {
    id: 'crispy-aloo-tikki',
    brand: 'frozzo',
    name: 'Crispy Aloo Tikki',
    image: wixImage('852e77_bc65e7c6bc6049fda5215f43101be752~mv2.png', 724, 724),
  },
  {
    id: 'frozen-veg-momos',
    brand: 'frozzo',
    name: 'Frozen Veg Momos',
    image: wixImage('852e77_19ecaab1a25e4cb58cf816987650fa8b~mv2.png', 538, 304),
  },
  {
    id: 'frozen-veg-manchurian',
    brand: 'frozzo',
    name: 'Frozen Veg Manchurian',
    image: wixImage('852e77_4a55af05fef44420b916c2376e0d7341~mv2.png', 538, 304),
  },
  {
    id: 'frozen-potato-shots',
    brand: 'frozzo',
    name: 'Frozen Potato Shots',
    image: wixImage('852e77_e1444b64cff7496baccd747ea273a065~mv2.png', 538, 304),
  },
  {
    id: 'frozen-samosa',
    brand: 'frozzo',
    name: 'Frozen Samosa',
    image: wixImage('852e77_8bf3d6b39d5541c299743ef38ec810cb~mv2.png', 538, 304),
  },
  {
    id: 'frozen-paratha',
    brand: 'frozzo',
    name: 'Frozen Paratha',
    image: wixImage('852e77_c75d774a4dc642eb913bbaf644f0693b~mv2.png', 538, 304),
  },
  {
    id: 'frozen-herb-chilli-patty',
    brand: 'frozzo',
    name: 'Frozen Herb Chilli Patty',
    image: wixImage('852e77_593f1688a16c4b23b50b5198b7446f16~mv2.png', 538, 304),
  },
  {
    id: 'frozen-french-fries',
    brand: 'frozzo',
    name: 'Frozen French Fries',
    image: wixImage('852e77_1083a778f14348ada5b59188d497a9a8~mv2.png', 538, 304),
  },
  {
    id: 'frozen-paneer-spring-roll',
    brand: 'frozzo',
    name: 'Frozen Paneer Spring roll',
    image: wixImage('852e77_5cbbc342f57340c6a5e337b412d16f58~mv2.png', 538, 304),
  },
  {
    id: 'frozen-paneer-momo',
    brand: 'frozzo',
    name: 'Frozen Paneer Momo',
    image: wixImage('852e77_19ecaab1a25e4cb58cf816987650fa8b~mv2.png', 538, 304),
  },
];
