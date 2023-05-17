export const formatVND = (amount: any, prefix = ',') => {
    if (!amount) return null
    let a = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, prefix)
    return a
  }