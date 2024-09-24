🏋️ Freshlime Gym Web Application 🏋️

Welcome to Freshlime Gym, a modern, responsive web application for promoting gym offers and allowing users to sign up for a free trial week! This app includes a dynamic UI with animations, smooth scrolling, and email integration for contact forms.

🚀 Features
📱 Responsive Design: Optimized for mobile, tablet, and desktop using responsive layouts.
✉️ Email Sign-Up: Users can sign up for a free week trial by sending an email directly through the app via EmailJS.
🍔 Animated Menu: Burger menu with sleek animations powered by Framer Motion.
🖱️ Smooth Scrolling: Navigation between sections using React Scroll for a smooth user experience.
⏳ Spinner on Form Submission: Integrated loading spinner from Ant Design when the email is being sent.
💪 Workout Offers: Browse the various workouts and offers available at Freshlime Gym.
🛠️ Icons: Rich iconography using React Icons.
🛠️ Tech Stack
React: Front-end framework for building the UI.
EmailJS: For sending emails directly from the frontend.
Axios: Used for handling API requests.
Framer Motion: For animations and transitions (e.g., burger menu).
React Scroll: For smooth scrolling to different sections.
React Icons: For various icons used throughout the app.
Ant Design: For a loading spinner and general component design.
⚙️ Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/freshlime-gym.git
cd freshlime-gym
Install dependencies:

bash
Copy code
npm install
Set up EmailJS:

Go to EmailJS and create an account.
Get your Service ID, Template ID, and User ID.
Add your EmailJS credentials in a .env file:
bash
Copy code
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_USER_ID=your_user_id
Run the development server:

bash
Copy code
npm start
Open the app in your browser:

arduino
Copy code
http://localhost:3000
📖 Usage
✉️ Sending an Email for a Free Trial
The sign-up form is located under the "Get a Free Week" section. When the user fills out their details and clicks submit:

EmailJS handles sending the user's information via email.
An Ant Design spinner will appear while the email is being sent.
Upon success, the user will receive a confirmation message.
🍔 Animated Burger Menu
The mobile version of the app uses a burger menu:

Framer Motion adds smooth opening and closing animations.
The menu includes links to various sections of the page using React Scroll for smooth navigation.
💪 Workouts and Offers
Users can scroll through the different workout programs and gym offers available at Freshlime Gym. The workout section is designed to be visually appealing and informative.


📦 Dependencies
React: ^18.0.0
EmailJS: ^3.2.0
Axios: ^0.21.1
Framer Motion: ^4.1.17
React Scroll: ^1.8.4
React Icons: ^4.2.0
Ant Design: ^4.16.13

🏋️ Enjoy building and expanding the Freshlime Gym experience! 💪
