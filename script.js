function ExponentialPopGrowth() {
    let InitialPopulation = parseFloat(prompt('Enter the initial populaiton:'));
    let RateOfGrowth = parseFloat(prompt('Enter the rate of growth:'));
    let TimeInHours = parseFloat(prompt('Enter the time:'));

    let FinalPopulation = Math.round(InitialPopulation * Math.pow(Math.E, (RateOfGrowth*TimeInHours)));

    let location = prompt('Enter the location:');
    let MonsterName = prompt('Enter the name of the Monster:');

    let NameOfMonsterAndLocation = location.concat(" ", MonsterName).toUpperCase();

    document.getElementById("result").innerHTML="After " + TimeInHours + " Hour/s, the population of " + NameOfMonsterAndLocation + " has risen to " + FinalPopulation;

}
