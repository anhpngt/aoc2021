import { solveDay1_1, solveDay1_2 } from './1';
import { solveDay2_1, solveDay2_2 } from './2';
import { solveDay3_1, solveDay3_2 } from './3';

const targetDay = Number(process.argv[2]);
console.log(`Solving day ${targetDay}`)
switch (targetDay) {
    case 1:
        solveDay1_1();
        solveDay1_2();
        break;
    case 2:
        solveDay2_1();
        solveDay2_2();
        break;
    case 3:
        solveDay3_1();
        solveDay3_2();
        break;
    default:
        console.log(`Day ${targetDay} not implemented yet`);
}