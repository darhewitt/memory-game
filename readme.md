# Memory Game

This application is a simple memory game in which the player has to match pairs of cards.
The player can only turn two cards face up at a time, if the cards match they can stay flipped over, if they do not match then they are turned faced down again.
The game ends when the player has matched every card to its corrisponding pair.
The goal of the game is to complete the game in as few moves as possible.

## UX

The game is aimed at anyone that wants to test their memory. I used a very simple design so the user can easily focus on playing the game.
The user can only interacte by clicking on the cards to flip them over or by clicking on the restart button to reset the board which makes playing the game quite intuitive.
There are also positive or negative sounds that play to guide the player through the game.

## Features

### Existing Features

Flip function - This allows the user to click on two cards at a time and have them flip over to view their front face.

Sound effects - A postive sound plays when a player successfully selects a matching pair which tells the user they are successfully progressing through the game. A negative sound plays when a selected pair do not match. When the player successfully finishes the game a differant positive sound plays signaling the successfull end of the game.

Restart - This button allows the user to restart the game at any point throughout the game or afer its completion.

Responsive - This application is fully responsive, which allows the user to play on any device

### Features Left to Implement

- A timer can be added which would challenge the user to complete the game within a specific time frame

## Technologies Used

[HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
    - The project uses **HTML5** to render the application in the browser.

[CSS3](https://developer.mozilla.org/en-US/docs/Archive/CSS3)
    - The project uses **CSS3** to style the application.

[Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    - The project uses **Javascript** to manipulate the DOM and add the logic and functionality of the game.

[Git](https://git-scm.com/)
    - The project uses **Git** for version control.

[VSCode](https://code.visualstudio.com/)
    - The project uses **VSCode** as a text editor.

[GitHub](https://code.visualstudio.com/)
    - The project uses **GitHub** for hosting and deployment.

## Testing

Flip function
- Try to select more then two cards.
- Try to select the same card twice.
- Flip one card and then click on something that is not a card.

Sounds
- Test correct sound plays for a matched pair and unmatched pair.
- Test each card when clicked plays correct sound.
- Test correct sounds plays on game completion.

Logic
- Complete the game.
- Click same incorrect pair multiple times to make sure shuffle function does not run by mistake.

Restart
- Make sure when restart button is clicked that the cards shuffle.
- Click one card then click the restart button.
- Click two cards then click the restart button.

## Deployment
This application was logged with git through the terminal. The git log was pushed to my gitHub account.
From my gitHub account it was pushed live to gitHub pages.

### Media
- The images used in this site were obtained from www.flaticon.com
- The sounds used in this site were obtained from www.zapsplat.com

