export const concatClass = (...str: (string | undefined)[]) => {
    return str.filter(Boolean).join(' ')
}