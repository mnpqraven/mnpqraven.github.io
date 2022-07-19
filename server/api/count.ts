// simple count tracker
let counter = 0
export default () => {
    return JSON.stringify(counter++)
}
