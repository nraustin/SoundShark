# Welcome to Sound Shark
SoundShark is a JS clone of the popular music streaming site SoundCloud. Anyone may upload their favorite tunes and others may share their thoughts via comments on each and every upload.

# Technologies Used
* JavaScript
* React
* Redux
* Node
* Html
* CSS
* Sequelize

# Clone this repo: [SoundShark Repo](https://github.com/nraustin/SoundShark)
* Install dependencies in the root directory: npm install
* Create a POSTGRESQL user with CREATEDB and PASSWORD in PSQL
* CREATE USER <name> WITH CREATEDB PASSWORD <'password'>

* Create a .env file in the backedn directory based on the .env.example found in the .env.example
* Enter your own username and password information in your .env file as well as a personal database name
* Create a secured JWT_SECRET, and a PORT number
* In your package.json file within the frontend directory add the following "proxy": "http://localhost:5000" to your code, usually after the * last comma separated object in the file. (},)
* While in your 'backend' folder:
* Create your database by running npx dotenv sequelize db:create
* Migrate your tables by running npx dotenv sequelize db:migrate
* Seed your models with hardcoaded data npx dotenv sequelize db:seed:all
* Start the backend server by running npm start
* Navigate to your 'frontend' folder and also run npm start to begin it's server, which should be running on "http://localhost:3000"
* Demo user 'Demo-lition' provided for your convenience

# Features
* Users can ADD/CREATE/UPDATE/DELETE their own tracks via mp3 link
* Users can ADD/CREATE/EDITE/DELETE their own comments
