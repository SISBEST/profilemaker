#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

var colors = require('colors');
var { program } = require('commander');
const randomItem = require('random-item');
var names = require('./names.json');
var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var syms = ["!", "#", "$", "%", "^", "&", "*", "(", ")", "~"];
var clients = ["@gmale.com", "@iclued.com", "@pretonmail.net"];
var name;

program
    .option('-E, --ext', 'get extended info')
    .option('-G, --gender <gender>', 'gender of character')
    .version(require('./package.json').version);
program.parse(process.argv);
if (program.gender && (program.gender == 'M' || program.gender == 'F')) {
    if (program.gender == 'M') {
        name = randomItem(names.male) + ' ' + randomItem(names.surnames);
    } else {
        name = randomItem(names.female) + ' ' + randomItem(names.surnames);
    }
    console.log(name.blue);
    if (program.ext) {
        console.log('Phone Number: '.yellow + '+1 555-'.green + randomItem(nums).green + randomItem(nums).green + randomItem(nums).green + '-'.green + randomItem(nums).green + randomItem(nums).green + randomItem(nums).green + randomItem(nums).green);
        console.log('Password: '.yellow + name.split(' ')[0].green + randomItem(syms).green + randomItem(syms).green + '-'.green + randomItem(syms).green + randomItem(syms).green + randomItem(nums).green + randomItem(nums).green);
        console.log('Email: '.yellow + name.replace(' ', '.').green + randomItem(clients).green);
    }
} else {
    console.log("Please enter M or F as value for the gender option.".red)
}