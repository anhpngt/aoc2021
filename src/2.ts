import { readFileSync } from "fs";

const inputFileName = "inputs/2.txt"
const fileContent = readFileSync(inputFileName, 'utf-8');
const lines = fileContent.split('\n').map(line => parseCommand(line));

type Command = [string, number]

function parseCommand(line: string): Command {
    const [action, value] = line.split(' ');
    return [action, Number(value)];
}

export function solveDay2_1() {
    let pos = 0;
    let depth = 0;
    for (const [action, value] of lines) {
        switch (action) {
            case 'down':
                depth += value;
                break;
            case 'up':
                depth -= value;
                break;
            case 'forward':
                pos += value;
                break;
        }
    }

    console.log(`final position: ${pos}, depth: ${depth} => ${pos * depth}`);
}

export function solveDay2_2() {
    let pos = 0;
    let depth = 0;
    let aim = 0;
    for (const [action, value] of lines) {
        switch (action) {
            case 'down':
                aim += value
                break
            case 'up':
                aim -= value
                break
            case 'forward':
                pos += value
                depth += aim * value
                break
        }
    }

    console.log(`final position: ${pos}, depth: ${depth} => ${pos * depth}`);
}