const chessBoard = document.getElementById("chess-board")
let cellCount = 2

const GenerateBoard = () => {
    chessBoard.innerHTML = ""
    for (let i = 0; i < cellCount; i++) {
        chessBoard.innerHTML += `<div class="row"/>`
        const row = document.getElementsByClassName("row")[i]

        for (let j = 0; j < cellCount; j++) {
            const currentClass = (j+i) % 2 == 0 ? "first" : "second"
            row.innerHTML += `<div class="cell ${currentClass}" onClick="ChangeColor('${currentClass}')">`
        }
    }
}

const ChangeColor = (className) =>{
    let varName = `--${className}-color`
    document.documentElement.style.setProperty(varName,`rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`)
}

const SetCellCount = () =>{
    cellCount = document.getElementById("cell-count").value
    document.getElementById("count-label").innerHTML = cellCount
}

const SetCellSize = () =>{
    let cellSize = document.getElementById("cell-size").value
    document.getElementById("size-label").innerHTML = cellSize
    document.documentElement.style.setProperty("--cell-size",cellSize+"px")
}