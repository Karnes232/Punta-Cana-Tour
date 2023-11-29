# Punta Cana Tour Company Website

Welcome to the Punta Cana Tour Company website built with GatsbyJS! This website showcases various excursions offered by the tour company in Punta Cana, allowing users to explore tours, make bookings, and proceed with payments via PayPal.

## Features

- **Homepage**: The homepage provides an overview of the company, a hero section, tour information, and a carousel showcasing the highlights of the tours.
- **Tours Page**: View all available tours with detailed information about each excursion. Users can navigate to individual tour pages for more details.
- **Individual Tour Pages**: Each tour has its own dedicated page with in-depth information, images, and booking options.
- **Cart & Payment**: Utilizes React's useContext hook and local storage to store selected tours in the cart. PayPal integration allows users to make payments securely.
- **Data Storage**: Completed purchases are stored in a Firebase database for easy access and management.
- **Email Notifications**: Upon successful payment, clients receive automated emails confirming their purchase and providing tour details.

## Technologies Used

- GatsbyJS
- React
- Firebase (Realtime Database)
- PayPal Integration
- React Context API

## Installation

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Set up your Firebase configuration and PayPal API keys.
4. Run `gatsby develop` to start the development server.

## Usage

- Access the website via the development server (`localhost:8000`) after running `gatsby develop`.
- Explore tours, add them to the cart, and proceed with a mock payment using PayPal Sandbox for testing purposes.
- Monitor the Firebase database for stored purchase information.
- Customize the website content and styles according to business requirements.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests for enhancements, bug fixes, or new features.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- Thanks to [GatsbyJS](https://www.gatsbyjs.com/) for the wonderful framework.
- PayPal API and Firebase for providing secure payment and data storage solutions.
