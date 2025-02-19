/**This README file will cover the strategies, tactic, and approaches of the website */

The key method is whenever there is a request from frontend, backend will responed with a "meaningful" data type => A pieace of JSON

The project will based on CRUD concept:
C: CREATE => a request to CREATE something in database
R: READ => a request to READ (or get something) in database
U: UPDATE => a request to UPDATE something in database
D: DELETE => a request to DELETE something in databse

1st request: To handle login/logout
2nd request: Compose of these algorithms
    + Estimating the cooking time
    + Estimating the Delivery time
    + Send back the JSON data

I. Handle Credentials
# typeOfRequest:String (to indicate whether it is logIn, signUp, etc,...)

    1. Retreive the data from frontend
        + When it is logIn -> The JSON file will compose of
        {
            typeOfRequest:"login",
            userName: String,
            password: String
        }
        + The Login logic 
            -> First the backend will retreive the JSON file and 
            assign them to dedicated variables
            -> Their must check if this userName is already in the database
            IF userName in DB:
                compare the hashed password (Query From DB) with the entered
                password (Using Bcrypt.JS) 
                IF hashedPassword === enteredPassword:
                    let token = //Generate the token here
                    return JSON.status(200) => OK to login (include the token)
                ELSE:
                    return JSON.status(400) => Not OK to login
            ELSE:
                return JSON.status(400) => Not OK to login

        + When it is signUp -> The JSON file will compose of
        {
            typeOfRequest: "signUp",
            fullName: String,
            email: String,
            userName: String,
            password: String,
            phoneNumber: Number
        }

            -> Firstly, backend will retreive the data and assign to dedicated
            variables
            -> Next is to check if userName, Password is already in the DB
            IF username AND password IN DB:
                return JSON.status(400) => Not OK to signUp
            ELSE:
                //Load data to database
                //Hashed the password before entering the databse
            

        + When it is forgotPassword -> The JSON file compose of
        {
            typeOfRequest: "forgotPassword",
            userName: String
        }

            -> This is kinda tricky: Firstly, grab the userName to see if it is in the DB
            -> IF username IN DB:
                  send a verify token to userName's Email
               ELSE:
                    return JSON.status(200) -> Not OK to login


        
