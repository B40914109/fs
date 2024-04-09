const path = require('path');
const archiver = require('archiver');
const fs = require('fs');
const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();
const srcPath = path.resolve(__dirname, './dist');
const configs = {
    host: "192.168.79.128",
    port: 22,
    username: "root",
    password: "461400",
};


// startZip();

function startZip() {
    var archive = archiver('zip', { zlib: { level: 5 } })
        .on('error', function (err) {
            throw err;
        });

    var output = fs.createWriteStream(__dirname + '/public.zip')
        .on('close', function (err) {
            if (err) {
                console.log('压缩zip文件异常：', err);
                return;
            }
            console.log('已生成zip包');
            console.log('开始上传public.zip至远程机器...');
            uploadFile();
        });

    archive.pipe(output);
    archive.directory(srcPath, '/public');
    archive.finalize();
}

function uploadFile() {
    ssh.connect({
        host: configs.host,
        username: configs.user,
        password: configs.password,
        port: 22
    }).then(function () {
        ssh.putFile(__dirname + '/public.zip', configs.path).then(function (status) {
            console.log("上传文件成功");
            console.log("开始执行远端脚本");
            startRemoteShell();
        }).catch(err => {
            console.log("ssh链接失败：", err);
            process.exit(0);
        })
    })
}

function startRemoteShell() {

}



const { Client } = require('ssh2');

const localFilePath = './public.zip';
const remoteFilePath = '/usr/etc/file.zip';

const conn = new Client();

conn.on('ready', () => {
    console.log('SSH connection successful');
    conn.sftp((err, sftp) => {
        if (err) throw err;

        // 创建可写流
        const writeStream = sftp.createWriteStream(remoteFilePath);

        // 本地文件可读流
        const readStream = fs.createReadStream(localFilePath);

        // 将本地文件流通过管道传输到远程服务器
        readStream.pipe(writeStream);

        writeStream.on('close', () => {
            console.log('File uploaded successfully');
            conn.end();
        });

        writeStream.on('error', (err) => {
            console.error('Error uploading file: ' + err);
            conn.end();
        });
    });
    // const remoteCommand = '/usr/etc/script.sh';

    // conn.exec(remoteCommand, (err, stream) => {
    //     if (err) {
    //         console.error('Error executing remote command: ' + err);
    //         conn.end();
    //         return;
    //     }

    //     stream.on('close', (code, signal) => {
    //         console.log('Remote command execution completed');
    //         conn.end();
    //     }).on('data', (data) => {
    //         console.log('STDOUT: ' + data);
    //     }).stderr.on('data', (data) => {
    //         console.error('STDERR: ' + data);
    //     });
    // });

}).connect(configs);

conn.on('error', (err) => {
    console.error('SSH connection error: ' + err);
});