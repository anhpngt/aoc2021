import { readFileSync } from "fs";

const inputFileName = "inputs/3.txt"
const fileContent = readFileSync(inputFileName, 'utf-8')
const lines = fileContent.split('\n')
const H = lines.length
const W = lines[0].length

export function solveDay3_1() {
    let positionalBitCount = new Array<number>(W).fill(0)
    for (const line of lines) {
        for (let i = 0; i < W; i++) {
            if (line[i] === "1") {
                positionalBitCount[i]++
            }
        }
    }

    let gammaBits = new Array<number>(W)
    let epsilonBits = new Array<number>(W)
    for (let i = 0; i < W; i++) {
        if (positionalBitCount[i] >= H / 2) {
            gammaBits[i] = 1
            epsilonBits[i] = 0
        } else {
            gammaBits[i] = 0
            epsilonBits[i] = 1
        }
    }

    const gamma = parseInt(gammaBits.join(""), 2)
    const epsilon = parseInt(epsilonBits.join(""), 2)
    console.log(`gamma: ${gamma}, epsilon: ${epsilon} => ${gamma * epsilon}`)
}
