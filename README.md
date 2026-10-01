# Picturesque Scenery — GitHub Pages 版

这是一个纯静态个人网站，已专门适配 GitHub Pages。无需安装依赖或执行构建命令。

## 文件结构

```text
仓库根目录/
├── index.html
├── .nojekyll
├── README.md
├── assets/
│   └── hero-landscape.png
├── css/
│   └── style.css
└── js/
    └── main.js
```

`index.html` 必须位于仓库根目录，并与 `css`、`js`、`assets` 文件夹处于同一级。请不要只上传 `index.html`，也不要把整个项目再套一层文件夹后上传。

## 本地预览

最简单的方法是直接双击根目录中的 `index.html`。也可以使用任意静态服务器预览。

## 部署到 username.github.io 根站点

1. 在 GitHub 新建仓库，仓库名必须是 `你的用户名.github.io`。
2. 解压下载的 ZIP。
3. 把解压目录内的全部内容上传到仓库根目录；上传后仓库首页应直接看到 `index.html`、`.nojekyll`、`assets`、`css` 和 `js`。
4. 打开仓库的 **Settings → Pages**。
5. 在 **Build and deployment** 中选择：
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
6. 保存并等待 GitHub 完成部署，然后访问 `https://你的用户名.github.io/`。

## 部署到普通 Project Pages

1. 新建任意名称的 GitHub 仓库，例如 `picturesque-scenery`。
2. 将本项目的全部内容上传到该仓库根目录。
3. 打开 **Settings → Pages**，选择 **Deploy from a branch**、`main` 和 `/ (root)`。
4. 部署完成后访问 `https://你的用户名.github.io/picturesque-scenery/`。

本站的 CSS、JavaScript 和图片全部使用 `./` 开头的相对路径，因此根站点和 Project Pages 子目录都能正确加载静态资源。

## 常见问题：页面只有纯文字

如果页面显示成白底纯文字，说明 CSS 没有加载。请检查：

- 仓库根目录是否直接存在 `index.html`；
- 是否完整上传了 `css/style.css`；
- 文件夹与文件名的大小写是否完全一致；
- Pages 发布目录是否为 `main` 分支的 `/ (root)`；
- 浏览器访问 `你的站点地址/css/style.css`（Project Pages 则保留项目路径）时是否能看到 CSS 内容，而不是 404。

更新文件后，GitHub Pages 通常需要短暂时间重新部署。若仍看到旧页面，可强制刷新浏览器缓存。

## 自定义

- 页面内容：编辑 `index.html`
- 颜色与排版：编辑 `css/style.css`
- 交互效果：编辑 `js/main.js`
- 主视觉图片：替换 `assets/hero-landscape.png`，并保持文件名不变

主视觉为本项目随附的原创生成素材，可与网站一同部署。
