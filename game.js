#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//clasess player and opponent
class player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecreas() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuleIncrease() {
        this.fuel = 100;
    }
}
class opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecreas() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuleIncrease() {
        this.fuel = 100;
    }
}
let Player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please Enter your name:"
});
let Opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select your oponent",
    choices: ["Skeleton", "Assassin", "Zombie"]
});
//gather data 
let plyer1 = new player(Player.name);
let o1 = new opponent(Opponent.select);
//use do while loop
do {
    if (Opponent.select == "Skeleton") {
        // console.log(`${chalk.bold.yellow(plyer1.name)} Verses ${chalk.bold.red(o1.name)}`)
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Select your opponent",
            choices: ["Attack", "Drink Portion", "Run for your Life"]
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                plyer1.fuelDecreas();
                console.log(chalk.bold.red(`${plyer1.name} fuel is ${plyer1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fule is ${o1.fuel}`));
                if (plyer1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("You Loose , better Luck next time."));
                }
            }
            if (num <= 0) {
                o1.fuelDecreas();
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.red(`${plyer1.name} fule is ${plyer1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("YOU WIN"));
                    process.exit();
                }
            }
        }
        if (ask.option == "Drink Portion") {
            plyer1.fuleIncrease();
            console.log(chalk.bold.italic.green(`You drink health portion your fuel is ${plyer1.fuel}`));
        }
        if (ask.option == "Run for your life") {
            console.log(chalk.red.bold.italic("You Loose , Better Luck Next Time "));
            process.exit();
        }
    }
    //assassin
    if (Opponent.select == "Assassin") {
        // console.log(`${chalk.bold.yellow(plyer1.name)} Verses ${chalk.bold.red(o1.name)}`)
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Select your opponent",
            choices: ["Attack", "Drink Portion", "Run for your Life"]
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                plyer1.fuelDecreas();
                console.log(chalk.bold.red(`${plyer1.name} fuel is ${plyer1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fule is ${o1.fuel}`));
                if (plyer1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("You Loose , better Luck next time."));
                }
            }
            if (num <= 0) {
                o1.fuelDecreas();
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.red(`${plyer1.name} fule is ${plyer1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("YOU WIN"));
                    process.exit();
                }
            }
        }
        if (ask.option == "Drink Portion") {
            plyer1.fuleIncrease();
            console.log(chalk.bold.green.italic(`You drink health portion your fuel is ${plyer1.fuel}`));
        }
        if (ask.option == "Run for your life") {
            console.log(chalk.red.bold.italic("You Loose , Better Luck Next Time "));
            process.exit();
        }
    }
    //zombie
    if (Opponent.select == "Zombie") {
        // console.log(`${chalk.bold.yellow(plyer1.name)} Verses ${chalk.bold.red(o1.name)}`)
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Select your opponent",
            choices: ["Attack", "Drink Portion", "Run for your Life"]
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                plyer1.fuelDecreas();
                console.log(chalk.bold.red(`${plyer1.name} fuel is ${plyer1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fule is ${o1.fuel}`));
                if (plyer1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("You Loose , better Luck next time."));
                }
            }
            if (num <= 0) {
                o1.fuelDecreas();
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.red(`${plyer1.name} fule is ${plyer1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("YOU WIN"));
                    process.exit();
                }
            }
        }
        if (ask.option == "Drink Portion") {
            plyer1.fuleIncrease();
            console.log(chalk.bold.green.italic(`You drink health portion your fuel is ${plyer1.fuel}`));
        }
        if (ask.option == "Run for your life") {
            console.log(chalk.red.bold.italic("You Loose , Better Luck Next Time "));
            process.exit();
        }
    }
} while (true);
