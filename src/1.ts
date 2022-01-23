import { readFileSync } from "fs";

const inputFileName = "inputs/1.txt"
const fileContent = readFileSync(inputFileName, 'utf-8');
const lines = fileContent.split('\n').map(line => Number(line));

export function solveDay1_1() {
    let a = lines[0]
    let count = 0
    for (let line of lines) {
        if (line > a) {
            count++
        }
        a = line
    }

    console.log(count)
}

export function solveDay1_2() {
    let a = lines.slice(0, 3).reduce((a, b) => a + b)
    let count = 0
    for (let i = 2, i_end = lines.length - 1; i < i_end; i++) {
        let b = lines.slice(i - 1, i + 2).reduce((a, b) => a + b)
        if (b > a) {
            count++
        }
        a = b
    }

    console.log(count)
}