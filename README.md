# Vue-Blog

**Vue-Blog** 是一个现代化的响应式博客平台，基于 Vue.js 构建，旨在通过最小的设置和部署时间为用户提供出色的体验。

## 安装步骤

按照以下步骤在本地设置 Vue-Blog：

1. **克隆仓库**：
   ```bash
   git clone https://github.com/your-username/vue-blog-alpha.git
   cd vue-blog-alpha
2. **安装依赖**:
   ```bash
   npm install
   npm i
3. **启动服务器**:
   ```bush
   npm run serve
4. **构建生产环境**:
   ```bush
   npm run build
5. **代码检查并修复**:
   ```bush
   npm run lint

## Docker 构建

1. **启动Docker**
2. **构建并启动容器**
   ```bush
    docker-compose up --build
3. **访问网站**
   ```bush
   http://localhost:8001/home
4. **停止并删除容器**
   ```bush
   docker-compose down

## 修改端口
docker-compose.yml文件中
```bush
services:
  app:
    container_name: docker-node-vue
    restart: always
    build: .
    ports:
      - '8001:8001'
      #本地端口：Docker端口