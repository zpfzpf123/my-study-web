export default [
    {
        title:'uniapp存储文件和读取文件',
        name:'1',
        content:'# 一、读取本地文件\n' +
            '\n' +
            '```js\n' +
            '        // 读取本地文件的方法 参数1为文件名称，参数2为回调方法用于处理获取到的文件数据\n' +
            '\t\tfetchFileData(fileName,callback) {\n' +
            '\t\t\tplus.io.requestFileSystem(\n' +
            '\t\t\t\tplus.io.PUBLIC_DOWNLOADS, // 文件系统中的根目录\n' +
            '\t\t\t\tfs => {\n' +
            '\t\t\t\t\t// 创建或打开文件, fs.root是根目录操作对象,直接fs表示当前操作对象\n' +
            '\t\t\t\t\tfs.root.getFile(fileName, {\n' +
            '\t\t\t\t\t\tcreate: true // 文件不存在则创建\n' +
            '\t\t\t\t\t}, fileEntry => {\n' +
            '\t\t\t\t\t\t// 文件在手机中的路径\n' +
            '\t\t\t\t\t\tconsole.log(\'文件在手机中的路径\', fileEntry.fullPath)\n' +
            '\t\t\t\t\t\tfileEntry.file(function(file) {\n' +
            '\t\t\t\t\t\t\tvar fileReader = new plus.io.FileReader();\n' +
            '\t\t\t\t\t\t\tconsole.log("getFile:" + JSON.stringify(file));\n' +
            '\t\t\t\t\t\t\tfileReader.readAsText(file, "utf-8")\n' +
            '\t\t\t\t\t\t\tfileReader.onloadend = function(res) { //读取文件内容成功后的回调事件\n' +
            '\t\t\t\t\t\t\t\t//res.target.result读取到的文件内容信息\n' +
            '\t\t\t\t\t\t\t\tconsole.log(\'最后读取文件内容是=======\', res.target.result)\n' +
            '\t\t\t\t\t\t\t\tcallback(res.target.result)\n' +
            '\t\t\t\t\t\t\t}\n' +
            '\t\t\t\t\t\t});\n' +
            '\t\t\t\t\t}, e => {\n' +
            '\t\t\t\t\t\tconsole.log(\'报错111\', "getFile failed: " + e.message);\n' +
            '\t\t\t\t\t});\n' +
            '\t\t\t\t},\n' +
            ' \n' +
            '\t\t\t\te => {\n' +
            '\t\t\t\t\tconsole.log(\'报错222\', e.message);\n' +
            '\t\t\t\t}\n' +
            '\t\t\t);\n' +
            '\t\t},\n' +
            '```\n' +
            '\n' +
            '# 二、存储数据到本地文件\n' +
            '\n' +
            '```js\n' +
            '// 参数1为文件名称 参数2是文件内容 参数3是回调参数\t\t\n' +
            'saveFile(fileName,fileInfo,callback) {\n' +
            '\t\t\t// 请求本地文件系统对象\n' +
            '\t\t\tplus.io.requestFileSystem(\n' +
            '\t\t\t\tplus.io.PUBLIC_DOWNLOADS, // 文件系统中的根目录\n' +
            '\t\t\t\tfs => {\n' +
            '\t\t\t\t\t// 创建或打开文件, fs.root是根目录操作对象,直接fs表示当前操作对象\n' +
            '\t\t\t\t\tfs.root.getFile(fileName, {\n' +
            '\t\t\t\t\t\tcreate: true // 文件不存在则创建\n' +
            '\t\t\t\t\t}, fileEntry => {\n' +
            '\t\t\t\t\t\t// 文件在手机中的路径\n' +
            '\t\t\t\t\t\tconsole.log(\'最后文件在手机中的路径========\', fileEntry.fullPath)\n' +
            '\t\t\t\t\t\tfileEntry.createWriter(writer => {\n' +
            '\t\t\t\t\t\t\t// 写入文件成功完成的回调函数\n' +
            '\t\t\t\t\t\t\twriter.onwrite = e => {\n' +
            '\t\t\t\t\t\t\t\tconsole.log("写入数据成功");\n' +
            '\t\t\t\t\t\t\t\tcallback(true)\n' +
            '\t\t\t\t\t\t\t};\n' +
            '\t\t\t\t\t\t\t// 写入数据\n' +
            '\t\t\t\t\t\t\twriter.write(JSON.stringify(fileInfo));\n' +
            '\t\t\t\t\t\t})\n' +
            '\t\t\t\t\t}, e => {\n' +
            '\t\t\t\t\t\tcallback(false)\n' +
            '\t\t\t\t\t\tconsole.log(\'报错111\', "getFile failed: " + e.message);\n' +
            '\t\t\t\t\t});\n' +
            '\t\t\t\t},\n' +
            '\t\t\t\te => {\n' +
            '\t\t\t\t\tconsole.log(\'报错222\', e.message);\n' +
            '\t\t\t\t\tcallback(false)\n' +
            '\t\t\t\t}\n' +
            '\t\t\t);\n' +
            '\t\t},\n' +
            '```\n' +
            '\n' +
            ' '
    }
]