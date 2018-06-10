# Game of Thrones Styled Clicky

This is the first react app I've built.  It is a basic front end ui, and some basic funtions to handle click events and state, keep track of score, and reset the game when you lose.

# Table of Contents

<!--ts-->
* [Table of Contents](#table-of-contents)
* [Philosophy](#philosophy)
* [Struggles](#struggles)
  <!--te-->

Philosophy
==========
Using the app:

* Click on a character
* The cards shuffle
* Click a character again
* Try and click on all 12 characters only once
* If you click on one character twice, you lose the game

Struggles
=========
Some of the challenges I encountered:

The sort function was pretty easy, and I thought that would be hard.  Where I struggled was with checking to see if the character had been clicked already and ending the game if they had.

I also for the longest time had all my functions working, but the game would only iterate score between 0 and 1.  I'd click, and it would move a character into the clicked array, and then I'd click another character and it would reset everything.  

I figured this out because I hadn't assigned the prop name to id in my FriendsCard.js file.  So, each element had an empty id, thus ending the game no matter what card I clicked.