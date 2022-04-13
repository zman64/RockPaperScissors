function computerPlay(){
    const choices = ["Rock", "Paper", "Scissors"];
    const randomChoiceIndex = Math.floor(Math.random() * 3)
    return choices[randomChoiceIndex];
}