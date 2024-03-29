export default class ProductstoreService {

  products = [
    {
      title : "Product 1",
      description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price : "128",
      id : "15",
      coverImage:'https://pngimage.net/wp-content/uploads/2018/06/%D1%82%D0%BE%D0%B2%D0%B0%D1%80-png-3.png'
    },
    {
      title : "Product 2",
      description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price : "9",
      id : "26",
      coverImage:'https://pngimage.net/wp-content/uploads/2018/06/%D1%82%D0%BE%D0%B2%D0%B0%D1%80-png-3.png'
    },
    {
      title : "Product 3",
      description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price : "146",
      id : "23",
      coverImage:'https://pngimage.net/wp-content/uploads/2018/06/%D1%82%D0%BE%D0%B2%D0%B0%D1%80-png-3.png'
    },
    {
      title : "Product 4",
      description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price : "256",
      id : "74",
      coverImage:'https://pngimage.net/wp-content/uploads/2018/06/%D1%82%D0%BE%D0%B2%D0%B0%D1%80-png-3.png'
    },
    {
      title : "Product 5",
      description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price : "28",
      id : "89",
      coverImage:'https://pngimage.net/wp-content/uploads/2018/06/%D1%82%D0%BE%D0%B2%D0%B0%D1%80-png-3.png'
    }
  ];

  getProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error('Something bad happened'));
        } else {
          resolve(this.products);
        }
      }, 700);
    });
  }
}