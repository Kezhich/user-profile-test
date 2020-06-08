export default function dateToString(date) {
    return new Date(date).toLocaleString('ru', {
        month: 'long',
        day: 'numeric',
    })
}
