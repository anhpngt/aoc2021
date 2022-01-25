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

export function solveDay3_2() {
    const oxygen = findOxygenRating()
    const co2 = findCO2Rating()
    console.log(`Oxygen: ${oxygen}, CO2: ${co2} => ${oxygen * co2}`)
}

function findOxygenRating(): number {
    let mask = new Array<boolean>(H).fill(true)
    let validCount = H

    for (let w = 0; w < W; w++) {
        let count = 0
        for (let h = 0; h < H; h++) {
            if (mask[h] && lines[h][w] === '1') {
                count++
            }
        }
        let chosen = count >= validCount / 2 ? '1' : '0'
        for (let h = 0; h < H; h++) {
            if (mask[h] && lines[h][w] !== chosen) {
                mask[h] = false
                validCount--
            }
        }

        if (validCount === 1) {
            for (let h = 0; h < H; h++) {
                if (mask[h]) {
                    return parseInt(lines[h], 2)
                }
            }
        }

    }

    throw Error("No solution found")
}

function findCO2Rating(): number {
    let mask = new Array<boolean>(H).fill(true)
    let validCount = H

    for (let w = 0; w < W; w++) {
        let count = 0
        for (let h = 0; h < H; h++) {
            if (mask[h] && lines[h][w] === '1') {
                count++
            }
        }
        let chosen = count >= validCount / 2 ? '0' : '1'
        for (let h = 0; h < H; h++) {
            if (mask[h] && lines[h][w] !== chosen) {
                mask[h] = false
                validCount--
            }
        }

        if (validCount === 1) {
            for (let h = 0; h < H; h++) {
                if (mask[h]) {
                    return parseInt(lines[h], 2)
                }
            }
        }

    }

    throw Error("No solution found")
}
