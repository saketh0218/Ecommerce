const INITIAL_STATE = {
  sections: [
    {
      title: "Hats",
      imageUrl:
        "https://images.pexels.com/photos/5699102/pexels-photo-5699102.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "Jackets",
      imageUrl:
        "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "Sneakers",
      imageUrl:
        "https://images.pexels.com/photos/1102776/pexels-photo-1102776.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "Men",
      imageUrl:
        "https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      id: 4,
      size: "large",
      linkUrl: "shop/men",
    },
    {
      title: "Women",
      imageUrl:
        "https://images.pexels.com/photos/6813470/pexels-photo-6813470.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      id: 5,
      size: "large",
      linkUrl: "shop/women",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
