import { Dimensions } from 'react-native'

const params = {
    blockSize: 30,
    boderSize: 5,
    fontSize: 15,
    headerRatio: 0.15,
    difficultLevel: 0.1,
    getColumnsAmount() {
        const widht = Dimensions.get('window').width
        return Math.floor(widht / this.blockSize)
    },
    getRowsAmount() {
        const totalHeight = Dimensions.get('window').height
        const boardHeight = totalHeight * (1 - this.headerRatio)
        return Math.floor(boardHeight / this.blockSize)
    }
}

export default params