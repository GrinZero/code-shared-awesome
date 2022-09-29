
docker run -id --name=csa_redis \
-v $PWD/service/redis/data:/data \
-p 6379:6379 \
--expose 6379 redis:6.2.6

docker run -id --name=csa_nginx \
-p 8055:80 \
-p 8060:8090 \
-v $PWD/service/nginx/conf/nginx.conf:/etc/nginx/nginx.conf \
-v $PWD/service/nginx/logs:/var/log/nginx \
-v $PWD/service/nginx/html:/usr/share/nginx/html \
nginx

docker run -id --name=csa_koa \
-p 8000:3000 \
-v $PWD/log:/usr/src/csa-koa/log \
code-shared-awesome-koa:0.0.1

# docker run -id --name=csa_jenkins -p 49000:8080 -p 50000:50000 \
# -v jenkins-data:/var/jenkins_home \
# -v /var/run/docker.sock:/var/run/docker.sock \
# jenkinsci/blueocean:1.25.3

docker network create -d bridge csa-bridge
docker network connect csa-bridge csa_redis
docker network connect csa-bridge csa-koa
# docker network connect csa-bridge csa_jenkins
docker network connect csa-bridge csa_nginx


# docker exec -it csa-koa /bin/bash
# 现在默认启动容器会运行代码
# 清除的办法：
# ps -fe
# kill -9 [pid]