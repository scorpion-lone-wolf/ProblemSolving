function countStudents(students: number[], sandwiches: number[]): number {

    let countOne = 0;
    let countZero = 0;

    for (let student of students) {
        if (student == 1) countOne++;
        else countZero++;
    }

    for (let i = 0; i < sandwiches.length; ++i) {
        if (sandwiches[i] == 1) {
            if (countOne == 0) return countZero
            countOne--
        } else {
            if (countZero == 0) return countOne
            countZero--
        }
    }
    return 0
};