import { solveDay1_1, solveDay1_2 } from './1';
import { solveDay2_1 } from './2';

const targetDay = Number(process.argv[2]);
console.log(`Solving day ${targetDay}`)
switch (targetDay) {
    case 1:
        solveDay1_1();
        solveDay1_2();
        break;
    case 2:
        solveDay2_1();
        break;
    default:
        console.log(`Day ${targetDay} not implemented yet`);
}