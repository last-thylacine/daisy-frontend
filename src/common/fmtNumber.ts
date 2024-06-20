export const fmtNumber = (n: number) => 
    n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
