import { solveDay1_1, solveDay1_2 } from './1';

const targetDay = Number(process.argv[2]);
switch (targetDay) {
    case 1:
        solveDay1_1();
        solveDay1_2();
        break;
    default:
        console.log(`Day ${targetDay} not implemented yet`);
}