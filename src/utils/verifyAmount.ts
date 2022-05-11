export enum Actions {
    ADD,
    SUBTRACT,
}

export const verifyAmount = (prev:number, action:Actions) => {
    switch (action) {
        case Actions.ADD:
            if (prev < 10) {
                return prev + 1
            } else {
                return prev
            }
        case Actions.SUBTRACT:
            if (prev > 2) {
                return prev - 1
            } else {
                return prev
            }
    }
}