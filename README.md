# Bifurcate-project

Bifurcate is a website combined with a custom app to share groceries, keep track of transactions and to split bills among each other.

Website

Do pip install then npm install after entering the directory to install the dependencies

Use Python 3.7 (since that is the most stable python version at the moment) to run the main.py server

go to the main terminal and type npm start to run the webapp on a local server

the design of the webapp can be seen below

Domain model, in the early stages

![Domain diagram](https://user-images.githubusercontent.com/85255384/160873867-d34b4dff-2e03-4b92-bb4a-1e6da4015f6c.png)

UML diagram

![UML](https://user-images.githubusercontent.com/85255384/162363364-a50c9326-cdb4-4494-b750-9b92f72320c4.png)

The login page

<img width="782" alt="image" src="https://user-images.githubusercontent.com/85255384/160874141-1dc4ac0f-6d3d-4ca9-926d-81d4a8c126c7.png">

The home screen after logging-in, showing the transactions

<img width="900" alt="image" src="https://user-images.githubusercontent.com/85255384/162363542-340ca531-3107-44df-b1e5-e531121e1b25.png">

The splitting money tab looks as shown below

<img width="900" alt="image" src="https://user-images.githubusercontent.com/85255384/162363764-ba7540a9-fc16-4b62-ae69-ef305b8acdee.png">

The send notification tab should look like:

<img width="900" alt="image" src="https://user-images.githubusercontent.com/85255384/162881192-39eeea26-7efa-44ad-8085-beabe1a9cd68.png">

With this send notification tab, you can send a notification to your friend with a custom message. Attached to this email will be a link to .exe which asks the user where to send the shopping list once the user is done shopping then opens the shopping site automatically.

Notification through email:

![image](https://user-images.githubusercontent.com/85255384/162881557-b81b4d75-8303-4617-85b0-42d8c832ea35.png)

Bifurcate Application

To run the application a windows system with the Chrome web browser installed is needed. Just run the .exe file to run the application. If prompted with windows warnings chose the run away option.

Application asking where to send the shopping list:

![image](https://user-images.githubusercontent.com/85255384/162881806-4761459d-f270-404c-8788-84163c6088cb.png)

Opening the shopping site automatically (in this case Canadian tire):

![image](https://user-images.githubusercontent.com/85255384/162881871-0651db0a-1c6d-405b-bc12-81b82eebac5b.png)

After the shopping is done (i.e after adding the desired items to the shopping cart) when the user proceds to shopping cart, the items along with the total amount will be sent to the email which the user provided when the application started.

Receiving the shopping list and the total from user:

![image](https://user-images.githubusercontent.com/85255384/162882204-5d504142-4578-495a-b661-b43f79e1e124.png)

![image](https://user-images.githubusercontent.com/85255384/162882223-9321cd38-bd73-4a1e-9ab5-ee6c7eb7d7a2.png)

![image](https://user-images.githubusercontent.com/85255384/162882238-18d8e9c1-76c0-4a53-ae61-77ec4d991248.png)

You can then add this total in the spliting tab to keep track of who owes to whom.



