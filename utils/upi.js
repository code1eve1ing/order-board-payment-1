exports.getUpi = (amount, transactionId, userId) => {
    const PA = process.env.PA
    const PN = process.env.PN
    const TN = `Payment-of-user:${userId}`
    const TID = transactionId
    const AM = amount
    const URL = `localhost:3000/success/${TID}/${userId}`
    const upi = `upi://pay?pa=${PA}&pn=${PN}&tn=${TN}&tid=${TID}&am=${AM}&cu=INR&url=${URL}`
    return upi
}