# ToolBox - 免费在线工具箱

一个零成本、纯前端的在线工具网站，可直接部署到 GitHub Pages。

## 🚀 特性

- ✅ **零服务器成本** - 纯静态网站，GitHub Pages 免费托管
- ✅ **无需后端** - 所有处理在浏览器本地完成
- ✅ **隐私安全** - 数据不上传，本地处理
- ✅ **响应式设计** - 适配桌面和移动端
- ✅ **深色/浅色主题** - 自动保存用户偏好

## 📦 包含工具

### 📷 图片工具
- 图片压缩
- 格式转换 (PNG/JPG/WebP)
- 尺寸调整
- 图片裁剪

### 📝 文本工具
- 字数统计
- 文本对比
- Markdown 预览
- JSON 格式化

### 🔧 开发工具
- 正则表达式测试
- 时间戳转换
- Base64 编解码
- Hash 计算

### 🎨 设计工具
- 配色方案生成
- CSS 渐变生成器
- 二维码生成
- Favicon 生成

## 🛠️ 本地运行

```bash
# 方法1: 使用 Python
cd ai-tools-site
python3 -m http.server 8080

# 方法2: 使用 Node.js
npx serve .

# 方法3: 直接打开
# 直接在浏览器中打开 index.html
```

然后访问 http://localhost:8080

## 📤 部署到 GitHub Pages

1. 创建 GitHub 仓库
2. 推送代码到仓库
3. 进入仓库 Settings → Pages
4. Source 选择 `main` 分支
5. 保存后等待几分钟即可访问

## 💰 变现方式

### 1. 广告收入
在 `index.html` 中添加 Google AdSense 代码：
```html
<!-- 在 <head> 中添加 -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ID" crossorigin="anonymous"></script>
```

### 2. 打赏功能
替换打赏弹窗中的二维码占位图为真实的支付二维码。

### 3. 付费高级功能
可添加需要付费解锁的高级功能（如批量处理、无水印导出等）。

## 📁 项目结构

```
ai-tools-site/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   ├── app.js          # 主应用逻辑
│   └── tools.js        # 工具功能实现
├── assets/             # 资源文件（图片等）
└── README.md           # 说明文档
```

## 🔧 扩展指南

### 添加新工具

1. 在 `tools.js` 的 `getToolContent()` 中添加工具 HTML 模板
2. 在 `index.html` 中添加工具卡片
3. 在 `app.js` 的 `initToolFunctions()` 中添加初始化调用
4. 在 `tools.js` 中实现工具功能函数

### 添加第三方库

推荐使用 CDN 引入：
- QRCode.js: `<script src="https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js"></script>`
- MD5.js: `<script src="https://cdn.jsdelivr.net/npm/blueimp-md5@2.19.0/js/md5.min.js"></script>`

## 📝 License

MIT License - 可自由使用和修改

