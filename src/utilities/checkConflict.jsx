const isSameTerm = (a, b) => a.term == b.term;

const isSameDay = (a, b) => {
    const aDays = a.meets.split(' ')[0];
    const bDays = b.meets.split(' ')[0];
    return aDays == bDays;
}

const hasOverlapHours = (a, b) => {
    const aStart = (a.meets.split(' ')[1]).split('-')[0];
    const aEnd = (a.meets.split(' ')[1]).split('-')[1];
    const bStart = (b.meets.split(' ')[1]).split('-')[0];
    const bEnd = (b.meets.split(' ')[1]).split('-')[1];
    if (aStart < bStart) {
        return aEnd > bStart;
    }
    return bEnd > aStart;
}

const hasConflict = (selected, allCourses) => {
    const conflicted = []
    selected.forEach((selection) => {
        allCourses.forEach((course) => {
            if (selection.number != course.number &&
                isSameTerm(selection, course) &&
                isSameDay(selection, course) &&
                hasOverlapHours(selection, course)) {
                    conflicted.push(course);
                }
        })
    })
    return conflicted;
} 

export default hasConflict;