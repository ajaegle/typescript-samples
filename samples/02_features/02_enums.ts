/* tslint:disable: no-var-keyword use-strict */
namespace enums {

  enum Color { Red, Green, Blue };
  let myColor: Color = Color.Blue;
  console.log("my color value:", myColor); // 2
  console.log("my color meaning:", Color[myColor]); // "Blue"

  console.log("\n--- betting ---");

  enum Bet { Home = 1, Away = 2, Draw = 0}
  let myBet = Bet.Home;

  if (myBet === Bet.Home) {
    console.log("win!");
    console.log("You got the correct bet!", myBet, Bet[myBet]);
  }
}
