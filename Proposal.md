# Proposal

## Description
It is nice to keep money, but it is even better when someone gives you money. What better way to steal money from people than owning a casino? Big Von's Casio is a casino website with a bunch of minigames to play. I chose this topic because I felt like my Grid Assignment was good, but seemed empty. So instead of having 1 gamemode, Big Von's Casino will host at least 7 minigames to bet on. The game will use fictional money instead of real money.


## Needs to have
- An HTML main page
- At least 3 casino minigames
  - At least 1 multiplayer game (using p5.party)
    - There will be a 4 player Uno game which will include:
      - Wager on how much money you want to bet before entering a game (max is based on total amount of money (from money variable) the user has)
      - Placement of players (where their cards will be located so it is obvious to other players how many cards each player has, but not what cards they have (except you)):
        - Bottom (you)
        - Left (opp)
        - Right (opp)
        - Top (opp)
      - Pick up deck in middle (more left-ish side)
      - Place deck (more right-ish side)
      - Play only until 1 player wins
  - My GridBased Game
  - Roulet
      - A game with a circle that spins on the player's click
      - Before starting, the player can choose how many sections they want the cicle to be in (always going to be cut like pie)
        - Based on the amount of quadrents, the bet multiplier will increase (2 sections = low bet multiplier amount, 100 sections = high bet multiplier amount)
- Background music that loops 
- Buttons on main page that lead to each game
- A home button in each game that leads back to the main page 
- A money variable that is acceseable across every game (using local storage)


## Nice to have
- Add monopoly (multiplayer)
- A map button in each game, when clicked will open a top view of the casino (find random image online) (map). Then put pins on the map that represent each game. When either pin is pressed, then it will directly teleport to the game
- When the user will input their address, it will make a pin on the world map that represents where they are in the world. On the pin will be a plane that will go to Vegas. When the user presses the button that says 'Fly to Vegas', the plane will fly from their location and land in Vegas. The visuals will be based on the Flight Radar app.