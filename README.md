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

![Game Title](Readme Image)






























- __The Game Area__  

    ![Game Area](Readme Image)

    - This section will allow the user play the Rock Paper Scissors game.
  
    - The user will be able to select what hand gesture to go with and immediately find out the result of the game round.

    ![Hero](Readme Image)


<br />

- __Hero__  

    ![Hero](https://github.com/anluke/candle-realm/blob/main/assets/readme-images/hero-section.png?raw=true)

    - The Hero section contains a greeting and provides a user with clear information about what the site is and the idea behind the company.

    - The aim for a background was to be peaceful yet welcoming and to blend in well with other colors on the website.

    - Hero section should catch the user's attention and look like a cozy place.

<br />

- __Main Section__  

    ![Main](https://github.com/anluke/candle-realm/blob/main/assets/readme-images/main-section.png?raw=true)

    - The purpose of the Main Section is to provide a user with information regarding the company and ingredients that we use.  
    It is just below the 'Hero-Section' and contains two leading pictures with **Candles** & **Kits** and their description respectfully.

    - It is welcoming and notifying users that we are one of the best suppliers of custom-made products and 'Do-It-Yourself' kits.

    - It also informs the user that all of the products are made by hand. Depending on the user's needs we have everything to get them started.

    - It also has three examples of the most popular types of wax: **BeesWax**, **Soy Wax** & **Paraffin Wax**.  
    Every ingredient has a description and a picture giving the best example of the difference between the three.  
    It also gives a quick description regarding their individual benefits or cons.

    - At the bottom of the main section is a time-lapse video showing a difference between them in a Real-Life setting.  
    It has a nice melody to it and is also very positive and inviting.  

<br />

- __About Section__

    ![About](https://github.com/anluke/candle-realm/blob/main/assets/readme-images/about-section.png?raw=true)

    - The About section shows the user important information they need to know about the Candle Realm.  
    Explains quickly who we are and why the customer should join us.

    - It has a couple of cards including **Who We Are**, **Why Us?**, **Our History**, and **Contact Us** card.

    - At the bottom of the section is a simple but informational contact card including phone number, email address & company location.  
<br />

- __Sign Up Section__

    ![Sign Up](https://github.com/anluke/candle-realm/blob/main/assets/readme-images/sign-up.png?raw=true)

     - The sign-up section has a form to collect basic details from users so they can get started with Code Realm membership.  

    - The form collects the user's name, last name, and email address.

    - The Sign-Up form has a background image with warm colors matching the layout and giving that warm feeling.

    - The Submit button scales and changes color on hover, adding more functionality to the overall submit form.  
<br />

- __Footer__

    ![Footer](https://github.com/anluke/candle-realm/blob/main/assets/readme-images/footer-section.png?raw=true)

    - The footer section is simple and visualy in line with the rest of the page.  
    Social section is responding to hover increasing in size and changing color for better accessibility.
    - It contains social media section on the top with all of the links working and opening in a new tab. Users can find us on **Facebook**, **Twitter**, **YouTube** and **Instagram**.
    - It also contains a company logo **Candle Realm** and a copyright license respectfully.

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