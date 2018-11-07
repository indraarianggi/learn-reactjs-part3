export default (expenses) => {
    return expenses
        .map((expense) =>  expense.amount)
        .reduce((total, a) => total + a, 0);
}
