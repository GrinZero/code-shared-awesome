# 1 开始

## 1.1 镜像拉取

```bash
sh ./service/install.sh
# jenkins 暂时不用
# docker pull jenkinsci/blueocean:1.25.3
```

## 1.2 启动

记住在根文件夹启动

```bash
npm run docker:build
npm run docker:start
```

现在默认启动容器会运行代码
清除的办法：

```bash
ps -fe
kill -9 [pid]
```

启动之后

- 8000 端口可以访问到 koa 服务
- nginx 暂时没用上

# 2 常见事项

- 其他解决不了

```bash
apt-get update
```

- 如果需要 ping 和其他网络相关

```bash
apt-get install iputils-ping
apt-get install dnsutils
```

- 如果需要 vim

```bash
apt-get install vim
```

- docker 日志相关

```bash
docker inspect -f '{{.HostConfig.LogConfig.Type}}' <containerID>
```

# 3 Linux 服务器部署

## 3.1 初始化

### 3.1.1 git 配置与拉取仓库

安装 git

```bash
yum -y install git
```

创建工作区

```bash
pwd
# /root
git clone xxx
```

# 4 数据库

## 4.1 mysql

```bash
mysql -h 127.0.0.1 -u root -p
```

## 4.2 改默认密码

```bash
mysql -h 127.0.0.1 -u root -p
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456'
```
