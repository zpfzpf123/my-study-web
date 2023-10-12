export default [
    {
        title:'修改浏览器默认滚动条样式',
        name:'1',
        content:'```css\n' +
            '// 滚动条整体部分\n' +
            '&::-webkit-scrollbar {\n' +
            '  width: 6px;\n' +
            '  height: 6px;\n' +
            '}\n' +
            '// 滚动条的轨道的两端按钮，允许通过点击微调小方块的位置。\n' +
            '&::-webkit-scrollbar-button {\n' +
            '  display: none;\n' +
            '}\n' +
            '// 滚动条的轨道（里面装有Thumb）\n' +
            '&::-webkit-scrollbar-track {\n' +
            '  background: transparent;\n' +
            '}\n' +
            '// 滚动条的轨道（里面装有Thumb）\n' +
            '&::-webkit-scrollbar-track-piece {\n' +
            '  background-color: transparent;\n' +
            '}\n' +
            '// 滚动条里面的小方块，能向上向下移动（或往左往右移动，取决于是垂直滚动条还是水平滚动条）\n' +
            '&::-webkit-scrollbar-thumb {\n' +
            '  background: #007cd6;\n' +
            '  cursor: pointer;\n' +
            '  border-radius: 4px;\n' +
            '}\n' +
            '// 边角，即两个滚动条的交汇处\n' +
            '&::-webkit-scrollbar-corner {\n' +
            '  display: none;\n' +
            '}\n' +
            '// 两个滚动条的交汇处上用于通过拖动调整元素大小的小控件\n' +
            '&::-webkit-resizer {\n' +
            '  display: none;\n' +
            '}\n' +
            '```'
    }
]