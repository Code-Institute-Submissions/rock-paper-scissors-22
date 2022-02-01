Idea came from a game called: **Rock Paper Scissors**. It is a hand game usually played between two people in which each player simultaneously forms one of three shapes with an outstretched hand. These shapes are "rock" (a closed fist), "paper" (a flat hand), and "scissors" (a fist with the index finger and middle finger extended, forming a V).  

This is a 2nd Milestone project for Code Institute. The purpose was to build a simple and effective site with good implementation of **JavaScript**. Very simple but functional.  
It was a perfect little project to use some of the JavaScript content covered so far.  

The live website can be found [here](link to webpage).


![Devices](picture across different devices)

<br />

## User Story

Target Audience for this game would be children aged from **5 - 10** years.  
The game should be played clearly across different devices and respond instantly.  
There is no time limit on the game itself.  

It's a fun way to interact with a computer and see who would win majority of rounds.



## Features

- __Rock Paper Scissors Heading__

    - Featured at the top of the page, the name of the game and heading is easy to see for the user.

![Title](https://github.com/anluke/rock-paper-scissors/blob/main/assets/images/readme_snips/title.png?raw=true)


<br>

- __The Game Area__  

    ![Game Area](https://github.com/anluke/rock-paper-scissors/blob/main/assets/images/readme_snips/game_section.png?raw=true)

    - This section will allow the user play the Rock Paper Scissors game.
  
    - The user will be able to select what hand gesture to go with and immediately find out the result of the game round.

    - Each of the elements are responsive and change color *(more on that below)*.


    <br>

- __Win Event__  

    ![Win](https://github.com/anluke/rock-paper-scissors/blob/main/assets/images/readme_snips/win.png?raw=true)

    - In the chance that the player wins the round, the winning hand will turn **green** and slightly increase in size while losing hand will turn **red** and slightly scale down.

    - This event will only last for 1 second. I thought about making the effect look longer but it would interfere with fast paced game.

    - Win event will also increment user's score by **1** and color change follows in the same manner for both the user and the computer.

    - There is also an announcement section that tells us who won the current round and elements chosen. In this case it was Rock that beat Scissors.

    <br>

- __Lose Event__  

    ![Lose](https://github.com/anluke/rock-paper-scissors/blob/main/assets/images/readme_snips/lose.png?raw=true)

    - In the chance that player loses the round, the hand will turn **red** and slightly decrease in size while computers winning hand will turn **green** and slightly scale up.

    - Lose event will keep our current score intact while only incrementing computer's current score.

    - Color change will follow in the same fashion as above **Win** function.

   

<br />

- __Draw Event__

    ![Draw](https://github.com/anluke/rock-paper-scissors/blob/main/assets/images/readme_snips/draw.png?raw=true)

    - The About section shows the user important information they need to know about the Candle Realm.  
    Explains quickly who we are and why the customer should join us.

    - It has a couple of cards including **Who We Are**, **Why Us?**, **Our History**, and **Contact Us** card.

    - At the bottom of the section is a simple but informational contact card including phone number, email address & company location.  

<br />

## Testing

- I tested that this page works in different browsers: Chrome, Firefox, and Safari.

- The page is responsive and contains all the functions across different screen sizes using the dev tools device toolbar.

- I confirmed that header/navbar, hero, main-section, about, sign up and footer are all readable and easy to understand.

- I also confirm that submit form works: requires an entry in every field and also checks if a user has put a correct email address by checking the email address format.


### Bugs

- When I tested my page through **Multi Device Website Mockup Generator** I discovered a slight offset in the hero background image.  
While writing a Media Query for Laptop devices I had moved the background image left by ```-1 cm``` instead of moving it ```left``` to allow for better representation of the Hero background image.

```
  #hero {
    background-position-x: -1cm;
  }
```
 - Removing the ```-1 cm``` and replacing it with ```left``` attribute fixed the issue and got the Hero image to respond how I intended.


 ### Validator Testing

 - HTML
    - No errors were returned when passing through [W3C validator](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Fanluke.github.io%2Fcandle-realm%2F).

- CSS  
    - No errors were found when passing through the official [WRC(JigSaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fanluke.github.io%2Fcandle-realm%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en).

- Validator Testing
    - I confirmed that the color palette and font is easy to read and accessible by running it through **Lighthouse** in devtools.

        ![Validator Test](https://github.com/anluke/candle-realm/blob/main/assets/readme-images/desktop-lighthouse.png?raw=true)

### Unfixed Bugs

No reports of bugs.

<br />

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to Settings tab.
  - From the source section drop-down menu, select the Master Branch.
  - Once the master branch has been selected, the page provided the link to the completed website.

The live link can be found here: [Candle Realm](https://anluke.github.io/candle-realm/)

<br />

## Credits

- Content

    - The markup code for social media links was taken from the [CI Love-Running](https://github.com/Code-Institute-Solutions/Love-Running-Solutions).

    - The icons in the footer were taken from [Font Awesome](https://fontawesome.com/).


- Media

    - The image in the hero section was taken from [Unsplash](https://images.unsplash.com/photo-1557761830-8d36eedd1718?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80).

    - The image in the sign-up section was taken from [Pexels](https://images.pexels.com/photos/7445004/pexels-photo-7445004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260).

    - The image in the main section for Candles was taken from [brambleberry](https://www.brambleberry.com/on/demandware.static/-/Sites-brambleberry-Library/default/dw8dfa4417/images/articles/art0171-art0190/art0179-scented-candle-kits-testing.jpg).

    - The image in the main section for Kits was taken from [Willow & Finn Candles](https://cdn.shopify.com/s/files/1/0069/1866/8401/products/image_4ef06143-e2ba-4683-9586-716b7966d210.jpg?v=1633886380).

    - The image in the main section for BeesWax was taken from [post.heatline](https://post.healthline.com/wp-content/uploads/2019/10/Beeswax_Beauty_Products_732x549-thumbnail.jpg).

    - The image in the main section for Soy Wax was taken from [artnews](https://www.artnews.com/wp-content/uploads/2020/08/AdobeStock_310424293.jpeg).

    - The image in the main section for Soy Wax was taken from [fumeibee](https://www.fumeibee.com/wp-content/uploads/2021/04/sl-2.jpg).

    - The video in the main section for Wax Comparison was taken from YouTube, Account: [Sir Topham Hatt](https://www.youtube.com/watch?v=EoNDXLigmmk).


 - Readme

    - For Readme file I used [CI readme template](https://github.com/Code-Institute-Solutions/readme-template) as a general idea and built my project around similar layout.