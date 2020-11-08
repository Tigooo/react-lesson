export default function idGenerator () {
    return Math.random().toString(30).slice(2)+'-'+Math.random().toString(30).slice(2);
}