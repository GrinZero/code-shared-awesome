docker-compose up -d
# docker exec -it csa_koa /bin/bash
# 现在默认启动容器会运行代码
# 清除的办法：
# ps -fe
# kill -9 [pid]

# docker run -id --name=csa_koa \
# -p 8000:3000 \
# -v $PWD/log:/usr/src/csa-koa/log \
# code-shared-awesome-koa:0.0.1
