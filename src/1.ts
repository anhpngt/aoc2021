import { readFileSync } from "fs";

export function solveDay1_1() {
    const inputFileName = "inputs/1.txt"
    const fileContent = readFileSync(inputFileName, 'utf-8');
    const lines = fileContent.split('\n').map(line => Number(line));

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