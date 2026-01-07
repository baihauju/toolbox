/**
 * ToolBox - 工具内容和功能实现
 */

// ==================== 获取工具内容模板 ====================
function getToolContent(toolId) {
    const tools = {
        // 字数统计
        'word-count': `
            <div class="tool-header">
                <h2>🔢 字数统计</h2>
                <p>统计字符数、单词数、行数等信息</p>
            </div>
            <div class="tool-area">
                <label class="tool-label">输入文本</label>
                <textarea class="tool-textarea" id="wordCountInput" placeholder="在此输入或粘贴文本..."></textarea>
            </div>
            <div class="tool-result" id="wordCountResult">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1.5rem; text-align: center;">
                    <div>
                        <div style="font-size: 2rem; font-weight: 700; color: var(--accent-primary);" id="charCount">0</div>
                        <div style="color: var(--text-muted); font-size: 0.9rem;">字符数</div>
                    </div>
                    <div>
                        <div style="font-size: 2rem; font-weight: 700; color: var(--accent-secondary);" id="charNoSpace">0</div>
                        <div style="color: var(--text-muted); font-size: 0.9rem;">字符(不含空格)</div>
                    </div>
                    <div>
                        <div style="font-size: 2rem; font-weight: 700; color: var(--accent-primary);" id="wordCount">0</div>
                        <div style="color: var(--text-muted); font-size: 0.9rem;">单词数</div>
                    </div>
                    <div>
                        <div style="font-size: 2rem; font-weight: 700; color: var(--accent-secondary);" id="lineCount">0</div>
                        <div style="color: var(--text-muted); font-size: 0.9rem;">行数</div>
                    </div>
                    <div>
                        <div style="font-size: 2rem; font-weight: 700; color: var(--accent-primary);" id="chineseCount">0</div>
                        <div style="color: var(--text-muted); font-size: 0.9rem;">中文字数</div>
                    </div>
                    <div>
                        <div style="font-size: 2rem; font-weight: 700; color: var(--accent-secondary);" id="readTime">0</div>
                        <div style="color: var(--text-muted); font-size: 0.9rem;">阅读时间(分)</div>
                    </div>
                </div>
            </div>
        `,
        
        // JSON格式化
        'json-format': `
            <div class="tool-header">
                <h2>{ } JSON格式化</h2>
                <p>美化、压缩、验证JSON数据</p>
            </div>
            <div class="tool-area">
                <label class="tool-label">输入JSON</label>
                <textarea class="tool-textarea" id="jsonInput" placeholder='{"name": "example", "value": 123}'></textarea>
            </div>
            <div class="tool-actions">
                <button class="tool-btn" id="jsonFormat">✨ 格式化</button>
                <button class="tool-btn tool-btn-secondary" id="jsonMinify">📦 压缩</button>
                <button class="tool-btn tool-btn-secondary" id="jsonCopy">📋 复制结果</button>
            </div>
            <div class="tool-area" style="margin-top: 1.5rem;">
                <label class="tool-label">输出结果</label>
                <textarea class="tool-textarea" id="jsonOutput" readonly placeholder="结果将显示在这里..."></textarea>
            </div>
            <div id="jsonError" style="color: var(--error); margin-top: 0.5rem; display: none;"></div>
        `,
        
        // Base64编解码
        'base64': `
            <div class="tool-header">
                <h2>🔐 Base64编解码</h2>
                <p>文本与Base64相互转换</p>
            </div>
            <div class="tool-area">
                <label class="tool-label">输入文本</label>
                <textarea class="tool-textarea" id="base64Input" placeholder="输入要编码或解码的文本..."></textarea>
            </div>
            <div class="tool-actions">
                <button class="tool-btn" id="base64Encode">🔒 编码</button>
                <button class="tool-btn tool-btn-secondary" id="base64Decode">🔓 解码</button>
                <button class="tool-btn tool-btn-secondary" id="base64Copy">📋 复制</button>
            </div>
            <div class="tool-area" style="margin-top: 1.5rem;">
                <label class="tool-label">输出结果</label>
                <textarea class="tool-textarea" id="base64Output" readonly placeholder="结果将显示在这里..."></textarea>
            </div>
        `,
        
        // 时间戳转换
        'timestamp': `
            <div class="tool-header">
                <h2>⏰ 时间戳转换</h2>
                <p>Unix时间戳与日期时间互转</p>
            </div>
            <div style="background: var(--bg-card); padding: 1.5rem; border-radius: 12px; text-align: center; margin-bottom: 2rem;">
                <div style="color: var(--text-muted); margin-bottom: 0.5rem;">当前时间戳</div>
                <div style="font-size: 2rem; font-weight: 700; font-family: var(--font-mono); color: var(--accent-primary);" id="currentTimestamp">-</div>
                <div style="color: var(--text-secondary); margin-top: 0.5rem;" id="currentTime">-</div>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                <div class="tool-area">
                    <label class="tool-label">时间戳 → 日期</label>
                    <input type="text" class="tool-input" id="tsInput" placeholder="输入时间戳 (秒或毫秒)">
                    <button class="tool-btn" style="margin-top: 1rem; width: 100%;" id="tsToDate">转换为日期 →</button>
                    <div class="tool-result" id="tsResult" style="margin-top: 1rem;">-</div>
                </div>
                <div class="tool-area">
                    <label class="tool-label">日期 → 时间戳</label>
                    <input type="datetime-local" class="tool-input" id="dateInput">
                    <button class="tool-btn" style="margin-top: 1rem; width: 100%;" id="dateToTs">转换为时间戳 →</button>
                    <div class="tool-result" id="dateResult" style="margin-top: 1rem;">-</div>
                </div>
            </div>
        `,
        
        // Hash计算
        'hash': `
            <div class="tool-header">
                <h2># Hash计算</h2>
                <p>计算文本的MD5、SHA1、SHA256值</p>
            </div>
            <div class="tool-area">
                <label class="tool-label">输入文本</label>
                <textarea class="tool-textarea" id="hashInput" placeholder="输入要计算Hash的文本..."></textarea>
            </div>
            <button class="tool-btn" id="hashCalc">🔢 计算Hash</button>
            <div class="tool-result" style="margin-top: 1.5rem;">
                <div style="margin-bottom: 1rem;">
                    <div style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 0.25rem;">MD5</div>
                    <div style="font-family: var(--font-mono); word-break: break-all; background: var(--bg-secondary); padding: 0.75rem; border-radius: 8px;" id="hashMD5">-</div>
                </div>
                <div style="margin-bottom: 1rem;">
                    <div style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 0.25rem;">SHA-1</div>
                    <div style="font-family: var(--font-mono); word-break: break-all; background: var(--bg-secondary); padding: 0.75rem; border-radius: 8px;" id="hashSHA1">-</div>
                </div>
                <div>
                    <div style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 0.25rem;">SHA-256</div>
                    <div style="font-family: var(--font-mono); word-break: break-all; background: var(--bg-secondary); padding: 0.75rem; border-radius: 8px;" id="hashSHA256">-</div>
                </div>
            </div>
        `,
        
        // 正则测试
        'regex-tester': `
            <div class="tool-header">
                <h2>.* 正则表达式测试</h2>
                <p>实时测试正则表达式匹配</p>
            </div>
            <div class="tool-area">
                <label class="tool-label">正则表达式</label>
                <div style="display: flex; gap: 0.5rem; align-items: center;">
                    <span style="color: var(--text-muted);">/</span>
                    <input type="text" class="tool-input" id="regexPattern" placeholder="输入正则表达式" style="flex: 1;">
                    <span style="color: var(--text-muted);">/</span>
                    <input type="text" class="tool-input" id="regexFlags" placeholder="gi" style="width: 60px;">
                </div>
            </div>
            <div class="tool-area">
                <label class="tool-label">测试文本</label>
                <textarea class="tool-textarea" id="regexText" placeholder="输入要测试的文本..."></textarea>
            </div>
            <div class="tool-result">
                <div class="tool-result-title">匹配结果</div>
                <div id="regexResult" style="font-family: var(--font-mono); white-space: pre-wrap; word-break: break-all;">输入正则表达式和文本后自动显示结果</div>
                <div id="regexMatches" style="margin-top: 1rem; color: var(--text-secondary);"></div>
            </div>
        `,
        
        // 图片压缩
        'image-compress': `
            <div class="tool-header">
                <h2>🗜️ 图片压缩</h2>
                <p>本地压缩图片，不上传服务器</p>
            </div>
            <div class="upload-zone" id="imageDropZone">
                <div class="upload-icon">📷</div>
                <div class="upload-text">点击或拖拽图片到此处</div>
                <div class="upload-hint">支持 JPG、PNG、WebP 格式</div>
                <input type="file" id="imageInput" accept="image/*" style="display: none;">
            </div>
            <div class="tool-area" style="margin-top: 1.5rem;">
                <label class="tool-label">压缩质量: <span id="qualityValue">80</span>%</label>
                <input type="range" id="qualitySlider" min="10" max="100" value="80" style="width: 100%;">
            </div>
            <div id="imagePreview" style="display: none; margin-top: 1.5rem;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                    <div>
                        <div style="color: var(--text-muted); margin-bottom: 0.5rem;">原图 (<span id="originalSize">-</span>)</div>
                        <img id="originalImage" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color);">
                    </div>
                    <div>
                        <div style="color: var(--text-muted); margin-bottom: 0.5rem;">压缩后 (<span id="compressedSize">-</span>)</div>
                        <img id="compressedImage" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color);">
                    </div>
                </div>
                <button class="tool-btn" style="margin-top: 1.5rem;" id="downloadCompressed">⬇️ 下载压缩图片</button>
            </div>
        `,
        
        // 二维码生成
        'qrcode': `
            <div class="tool-header">
                <h2>📱 二维码生成</h2>
                <p>生成自定义二维码</p>
            </div>
            <div class="tool-area">
                <label class="tool-label">输入内容</label>
                <textarea class="tool-textarea" id="qrcodeInput" placeholder="输入网址、文本或其他内容..." style="min-height: 80px;"></textarea>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
                <div class="tool-area">
                    <label class="tool-label">前景色</label>
                    <input type="color" id="qrForeground" value="#000000" class="tool-input" style="height: 50px; padding: 5px;">
                </div>
                <div class="tool-area">
                    <label class="tool-label">背景色</label>
                    <input type="color" id="qrBackground" value="#ffffff" class="tool-input" style="height: 50px; padding: 5px;">
                </div>
            </div>
            <button class="tool-btn" id="generateQR">生成二维码</button>
            <div id="qrcodeResult" style="margin-top: 1.5rem; text-align: center; display: none;">
                <canvas id="qrcodeCanvas" style="border-radius: 12px;"></canvas>
                <div style="margin-top: 1rem;">
                    <button class="tool-btn tool-btn-secondary" id="downloadQR">⬇️ 下载二维码</button>
                </div>
            </div>
        `,
        
        // 配色方案
        'color-palette': `
            <div class="tool-header">
                <h2>🎨 配色方案生成</h2>
                <p>基于主色生成和谐配色方案</p>
            </div>
            <div class="tool-area">
                <label class="tool-label">选择主色</label>
                <div style="display: flex; gap: 1rem; align-items: center;">
                    <input type="color" id="mainColor" value="#6366f1" style="width: 80px; height: 50px; border: none; border-radius: 8px; cursor: pointer;">
                    <input type="text" class="tool-input" id="mainColorHex" value="#6366f1" style="flex: 1; font-family: var(--font-mono);">
                </div>
            </div>
            <div class="tool-actions">
                <button class="tool-btn" id="genComplement">互补色</button>
                <button class="tool-btn tool-btn-secondary" id="genAnalogous">相似色</button>
                <button class="tool-btn tool-btn-secondary" id="genTriadic">三角色</button>
                <button class="tool-btn tool-btn-secondary" id="genMonochrome">单色系</button>
            </div>
            <div class="tool-result" style="margin-top: 1.5rem;">
                <div class="tool-result-title">配色方案</div>
                <div id="colorPalette" style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <!-- 颜色块将动态生成 -->
                </div>
            </div>
        `,
        
        // 渐变生成器
        'gradient-gen': `
            <div class="tool-header">
                <h2>🌈 CSS渐变生成器</h2>
                <p>可视化创建CSS渐变背景</p>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
                <div class="tool-area">
                    <label class="tool-label">起始颜色</label>
                    <input type="color" id="gradientStart" value="#6366f1" class="tool-input" style="height: 50px; padding: 5px;">
                </div>
                <div class="tool-area">
                    <label class="tool-label">结束颜色</label>
                    <input type="color" id="gradientEnd" value="#d946ef" class="tool-input" style="height: 50px; padding: 5px;">
                </div>
            </div>
            <div class="tool-area">
                <label class="tool-label">渐变角度: <span id="angleValue">135</span>°</label>
                <input type="range" id="gradientAngle" min="0" max="360" value="135" style="width: 100%;">
            </div>
            <div class="tool-area">
                <label class="tool-label">渐变类型</label>
                <select class="tool-input" id="gradientType">
                    <option value="linear">线性渐变</option>
                    <option value="radial">径向渐变</option>
                </select>
            </div>
            <div id="gradientPreview" style="height: 150px; border-radius: 12px; margin: 1.5rem 0; background: linear-gradient(135deg, #6366f1, #d946ef);"></div>
            <div class="tool-area">
                <label class="tool-label">CSS代码</label>
                <div style="display: flex; gap: 0.5rem;">
                    <input type="text" class="tool-input" id="gradientCSS" readonly value="linear-gradient(135deg, #6366f1, #d946ef)" style="font-family: var(--font-mono);">
                    <button class="tool-btn" id="copyGradient">📋</button>
                </div>
            </div>
        `,
        
        // 文本对比
        'text-diff': `
            <div class="tool-header">
                <h2>🔍 文本对比</h2>
                <p>比较两段文本的差异</p>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div class="tool-area">
                    <label class="tool-label">原始文本</label>
                    <textarea class="tool-textarea" id="diffText1" placeholder="输入原始文本..."></textarea>
                </div>
                <div class="tool-area">
                    <label class="tool-label">修改后文本</label>
                    <textarea class="tool-textarea" id="diffText2" placeholder="输入修改后的文本..."></textarea>
                </div>
            </div>
            <button class="tool-btn" id="compareDiff" style="margin-top: 1rem;">🔍 对比差异</button>
            <div class="tool-result" style="margin-top: 1.5rem;">
                <div class="tool-result-title">对比结果</div>
                <div id="diffResult" style="font-family: var(--font-mono); white-space: pre-wrap; line-height: 1.8;">点击"对比差异"查看结果</div>
            </div>
        `,
        
        // Markdown预览
        'markdown-preview': `
            <div class="tool-header">
                <h2>📄 Markdown预览</h2>
                <p>实时渲染Markdown文档</p>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; height: 400px;">
                <div class="tool-area" style="height: 100%;">
                    <label class="tool-label">Markdown源码</label>
                    <textarea class="tool-textarea" id="mdInput" style="height: calc(100% - 30px); resize: none;" placeholder="# 标题

这是一段**粗体**和*斜体*文本。

- 列表项1
- 列表项2

\`代码\`块示例"></textarea>
                </div>
                <div class="tool-area" style="height: 100%;">
                    <label class="tool-label">渲染预览</label>
                    <div id="mdPreview" style="height: calc(100% - 30px); overflow-y: auto; padding: 1rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 12px;"></div>
                </div>
            </div>
        `,
        
        // 图片格式转换
        'image-convert': `
            <div class="tool-header">
                <h2>🔄 图片格式转换</h2>
                <p>PNG、JPG、WebP格式互转</p>
            </div>
            <div class="upload-zone" id="convertDropZone">
                <div class="upload-icon">🖼️</div>
                <div class="upload-text">点击或拖拽图片到此处</div>
                <div class="upload-hint">支持 JPG、PNG、WebP 格式</div>
                <input type="file" id="convertInput" accept="image/*" style="display: none;">
            </div>
            <div class="tool-area" style="margin-top: 1.5rem;">
                <label class="tool-label">转换为</label>
                <select class="tool-input" id="convertFormat">
                    <option value="image/png">PNG</option>
                    <option value="image/jpeg">JPG</option>
                    <option value="image/webp">WebP</option>
                </select>
            </div>
            <div id="convertPreview" style="display: none; margin-top: 1.5rem; text-align: center;">
                <img id="convertImage" style="max-width: 100%; max-height: 300px; border-radius: 8px; border: 1px solid var(--border-color);">
                <button class="tool-btn" style="margin-top: 1rem;" id="downloadConverted">⬇️ 下载转换后的图片</button>
            </div>
        `,
        
        // 图片调整大小
        'image-resize': `
            <div class="tool-header">
                <h2>📐 图片尺寸调整</h2>
                <p>调整图片宽高尺寸</p>
            </div>
            <div class="upload-zone" id="resizeDropZone">
                <div class="upload-icon">📐</div>
                <div class="upload-text">点击或拖拽图片到此处</div>
                <input type="file" id="resizeInput" accept="image/*" style="display: none;">
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1.5rem;">
                <div class="tool-area">
                    <label class="tool-label">宽度 (px)</label>
                    <input type="number" class="tool-input" id="resizeWidth" placeholder="800">
                </div>
                <div class="tool-area">
                    <label class="tool-label">高度 (px)</label>
                    <input type="number" class="tool-input" id="resizeHeight" placeholder="600">
                </div>
            </div>
            <div class="tool-area">
                <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                    <input type="checkbox" id="keepRatio" checked>
                    <span class="tool-label" style="margin: 0;">保持宽高比</span>
                </label>
            </div>
            <div id="resizePreview" style="display: none; margin-top: 1.5rem; text-align: center;">
                <div style="color: var(--text-muted); margin-bottom: 0.5rem;">原始: <span id="originalDimensions">-</span> → 新尺寸: <span id="newDimensions">-</span></div>
                <canvas id="resizeCanvas" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color);"></canvas>
                <button class="tool-btn" style="margin-top: 1rem;" id="downloadResized">⬇️ 下载调整后的图片</button>
            </div>
        `,
        
        // 图片裁剪（简化版）
        'image-crop': `
            <div class="tool-header">
                <h2>✂️ 图片裁剪</h2>
                <p>裁剪图片到指定尺寸</p>
            </div>
            <div class="upload-zone" id="cropDropZone">
                <div class="upload-icon">✂️</div>
                <div class="upload-text">点击或拖拽图片到此处</div>
                <input type="file" id="cropInput" accept="image/*" style="display: none;">
            </div>
            <div style="margin-top: 1.5rem;">
                <label class="tool-label">预设比例</label>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <button class="tool-btn tool-btn-secondary crop-ratio" data-ratio="1:1">1:1</button>
                    <button class="tool-btn tool-btn-secondary crop-ratio" data-ratio="4:3">4:3</button>
                    <button class="tool-btn tool-btn-secondary crop-ratio" data-ratio="16:9">16:9</button>
                    <button class="tool-btn tool-btn-secondary crop-ratio" data-ratio="9:16">9:16</button>
                    <button class="tool-btn tool-btn-secondary crop-ratio" data-ratio="free">自由</button>
                </div>
            </div>
            <div id="cropPreview" style="display: none; margin-top: 1.5rem; text-align: center;">
                <canvas id="cropCanvas" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color);"></canvas>
                <button class="tool-btn" style="margin-top: 1rem;" id="downloadCropped">⬇️ 下载裁剪后的图片</button>
            </div>
        `,
        
        // Favicon生成
        'favicon': `
            <div class="tool-header">
                <h2>🖼️ Favicon生成</h2>
                <p>生成网站图标</p>
            </div>
            <div class="upload-zone" id="faviconDropZone">
                <div class="upload-icon">🖼️</div>
                <div class="upload-text">上传图片生成Favicon</div>
                <div class="upload-hint">建议使用正方形图片</div>
                <input type="file" id="faviconInput" accept="image/*" style="display: none;">
            </div>
            <div id="faviconResult" style="display: none; margin-top: 1.5rem;">
                <div class="tool-result-title">生成的Favicon</div>
                <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; justify-content: center; margin-top: 1rem;">
                    <div style="text-align: center;">
                        <canvas id="favicon16" width="16" height="16" style="border: 1px solid var(--border-color); image-rendering: pixelated;"></canvas>
                        <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.5rem;">16x16</div>
                    </div>
                    <div style="text-align: center;">
                        <canvas id="favicon32" width="32" height="32" style="border: 1px solid var(--border-color); image-rendering: pixelated;"></canvas>
                        <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.5rem;">32x32</div>
                    </div>
                    <div style="text-align: center;">
                        <canvas id="favicon64" width="64" height="64" style="border: 1px solid var(--border-color);"></canvas>
                        <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.5rem;">64x64</div>
                    </div>
                    <div style="text-align: center;">
                        <canvas id="favicon128" width="128" height="128" style="border: 1px solid var(--border-color);"></canvas>
                        <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.5rem;">128x128</div>
                    </div>
                </div>
                <div style="text-align: center; margin-top: 1.5rem;">
                    <button class="tool-btn" id="downloadFavicon">⬇️ 下载所有尺寸</button>
                </div>
            </div>
        `
    };
    
    return tools[toolId] || null;
}

// ==================== 工具功能实现 ====================

// 字数统计
function initWordCount() {
    const input = document.getElementById('wordCountInput');
    
    function updateCount() {
        const text = input.value;
        
        document.getElementById('charCount').textContent = text.length;
        document.getElementById('charNoSpace').textContent = text.replace(/\s/g, '').length;
        document.getElementById('wordCount').textContent = text.trim() ? text.trim().split(/\s+/).length : 0;
        document.getElementById('lineCount').textContent = text ? text.split('\n').length : 0;
        
        // 中文字数
        const chineseChars = text.match(/[\u4e00-\u9fa5]/g);
        document.getElementById('chineseCount').textContent = chineseChars ? chineseChars.length : 0;
        
        // 阅读时间 (假设每分钟阅读300字)
        const totalChars = text.replace(/\s/g, '').length;
        document.getElementById('readTime').textContent = Math.ceil(totalChars / 300);
    }
    
    input.addEventListener('input', updateCount);
}

// JSON格式化
function initJsonFormat() {
    const input = document.getElementById('jsonInput');
    const output = document.getElementById('jsonOutput');
    const error = document.getElementById('jsonError');
    
    document.getElementById('jsonFormat').addEventListener('click', () => {
        try {
            const json = JSON.parse(input.value);
            output.value = JSON.stringify(json, null, 2);
            error.style.display = 'none';
        } catch (e) {
            error.textContent = '❌ JSON格式错误: ' + e.message;
            error.style.display = 'block';
        }
    });
    
    document.getElementById('jsonMinify').addEventListener('click', () => {
        try {
            const json = JSON.parse(input.value);
            output.value = JSON.stringify(json);
            error.style.display = 'none';
        } catch (e) {
            error.textContent = '❌ JSON格式错误: ' + e.message;
            error.style.display = 'block';
        }
    });
    
    document.getElementById('jsonCopy').addEventListener('click', function() {
        copyToClipboard(output.value, this);
    });
}

// Base64编解码
function initBase64() {
    const input = document.getElementById('base64Input');
    const output = document.getElementById('base64Output');
    
    document.getElementById('base64Encode').addEventListener('click', () => {
        try {
            output.value = btoa(unescape(encodeURIComponent(input.value)));
        } catch (e) {
            output.value = '编码失败: ' + e.message;
        }
    });
    
    document.getElementById('base64Decode').addEventListener('click', () => {
        try {
            output.value = decodeURIComponent(escape(atob(input.value)));
        } catch (e) {
            output.value = '解码失败: ' + e.message;
        }
    });
    
    document.getElementById('base64Copy').addEventListener('click', function() {
        copyToClipboard(output.value, this);
    });
}

// 时间戳转换
function initTimestamp() {
    // 更新当前时间戳
    function updateCurrentTime() {
        const now = new Date();
        document.getElementById('currentTimestamp').textContent = Math.floor(now.getTime() / 1000);
        document.getElementById('currentTime').textContent = now.toLocaleString('zh-CN');
    }
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);
    
    // 时间戳转日期
    document.getElementById('tsToDate').addEventListener('click', () => {
        const ts = document.getElementById('tsInput').value;
        if (!ts) return;
        
        let timestamp = parseInt(ts);
        // 如果是秒级时间戳，转为毫秒
        if (timestamp < 10000000000) {
            timestamp *= 1000;
        }
        
        const date = new Date(timestamp);
        document.getElementById('tsResult').innerHTML = `
            <div style="font-family: var(--font-mono);">
                ${date.toLocaleString('zh-CN')}<br>
                <span style="color: var(--text-muted);">${date.toISOString()}</span>
            </div>
        `;
    });
    
    // 日期转时间戳
    document.getElementById('dateToTs').addEventListener('click', () => {
        const dateStr = document.getElementById('dateInput').value;
        if (!dateStr) return;
        
        const date = new Date(dateStr);
        const seconds = Math.floor(date.getTime() / 1000);
        const millis = date.getTime();
        
        document.getElementById('dateResult').innerHTML = `
            <div style="font-family: var(--font-mono);">
                秒: ${seconds}<br>
                毫秒: ${millis}
            </div>
        `;
    });
}

// Hash计算
function initHash() {
    document.getElementById('hashCalc').addEventListener('click', async () => {
        const text = document.getElementById('hashInput').value;
        if (!text) return;
        
        const encoder = new TextEncoder();
        const data = encoder.encode(text);
        
        // MD5 需要额外库，这里用简化版提示
        document.getElementById('hashMD5').textContent = '(需要引入MD5库)';
        
        // SHA-1
        const sha1Buffer = await crypto.subtle.digest('SHA-1', data);
        const sha1Array = Array.from(new Uint8Array(sha1Buffer));
        const sha1Hex = sha1Array.map(b => b.toString(16).padStart(2, '0')).join('');
        document.getElementById('hashSHA1').textContent = sha1Hex;
        
        // SHA-256
        const sha256Buffer = await crypto.subtle.digest('SHA-256', data);
        const sha256Array = Array.from(new Uint8Array(sha256Buffer));
        const sha256Hex = sha256Array.map(b => b.toString(16).padStart(2, '0')).join('');
        document.getElementById('hashSHA256').textContent = sha256Hex;
    });
}

// 正则测试
function initRegexTester() {
    const pattern = document.getElementById('regexPattern');
    const flags = document.getElementById('regexFlags');
    const text = document.getElementById('regexText');
    const result = document.getElementById('regexResult');
    const matches = document.getElementById('regexMatches');
    
    function testRegex() {
        if (!pattern.value || !text.value) {
            result.textContent = '输入正则表达式和文本后自动显示结果';
            matches.textContent = '';
            return;
        }
        
        try {
            const regex = new RegExp(pattern.value, flags.value || 'g');
            const allMatches = text.value.match(regex);
            
            if (allMatches) {
                // 高亮显示匹配
                const highlighted = text.value.replace(regex, '<mark style="background: var(--accent-primary); color: white; padding: 0 2px; border-radius: 2px;">$&</mark>');
                result.innerHTML = highlighted;
                matches.textContent = `找到 ${allMatches.length} 个匹配: ${allMatches.join(', ')}`;
            } else {
                result.textContent = text.value;
                matches.textContent = '没有找到匹配';
            }
        } catch (e) {
            result.textContent = '正则表达式错误: ' + e.message;
            matches.textContent = '';
        }
    }
    
    pattern.addEventListener('input', testRegex);
    flags.addEventListener('input', testRegex);
    text.addEventListener('input', testRegex);
}

// 图片压缩
function initImageCompress() {
    const dropZone = document.getElementById('imageDropZone');
    const input = document.getElementById('imageInput');
    const preview = document.getElementById('imagePreview');
    const qualitySlider = document.getElementById('qualitySlider');
    const qualityValue = document.getElementById('qualityValue');
    
    let originalFile = null;
    
    dropZone.addEventListener('click', () => input.click());
    
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('drag-over');
    });
    
    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('drag-over');
    });
    
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('drag-over');
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            handleImage(file);
        }
    });
    
    input.addEventListener('change', (e) => {
        if (e.target.files[0]) {
            handleImage(e.target.files[0]);
        }
    });
    
    qualitySlider.addEventListener('input', (e) => {
        qualityValue.textContent = e.target.value;
        if (originalFile) {
            compressImage(originalFile, e.target.value / 100);
        }
    });
    
    function handleImage(file) {
        originalFile = file;
        document.getElementById('originalSize').textContent = formatSize(file.size);
        
        const reader = new FileReader();
        reader.onload = (e) => {
            document.getElementById('originalImage').src = e.target.result;
            preview.style.display = 'block';
            compressImage(file, qualitySlider.value / 100);
        };
        reader.readAsDataURL(file);
    }
    
    function compressImage(file, quality) {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            
            canvas.toBlob((blob) => {
                document.getElementById('compressedSize').textContent = formatSize(blob.size);
                document.getElementById('compressedImage').src = URL.createObjectURL(blob);
                
                document.getElementById('downloadCompressed').onclick = () => {
                    const link = document.createElement('a');
                    link.download = 'compressed_' + file.name;
                    link.href = URL.createObjectURL(blob);
                    link.click();
                };
            }, 'image/jpeg', quality);
        };
        img.src = URL.createObjectURL(file);
    }
    
    function formatSize(bytes) {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
        return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
    }
}

// 二维码生成（简化版，需要qrcode库）
function initQRCode() {
    document.getElementById('generateQR').addEventListener('click', () => {
        const text = document.getElementById('qrcodeInput').value;
        if (!text) {
            alert('请输入内容');
            return;
        }
        
        const canvas = document.getElementById('qrcodeCanvas');
        const ctx = canvas.getContext('2d');
        const fg = document.getElementById('qrForeground').value;
        const bg = document.getElementById('qrBackground').value;
        
        // 简化版：显示占位图
        canvas.width = 200;
        canvas.height = 200;
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, 200, 200);
        ctx.fillStyle = fg;
        ctx.font = '14px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('需要引入QRCode.js库', 100, 90);
        ctx.fillText('实现二维码生成', 100, 110);
        
        document.getElementById('qrcodeResult').style.display = 'block';
        
        document.getElementById('downloadQR').onclick = () => {
            const link = document.createElement('a');
            link.download = 'qrcode.png';
            link.href = canvas.toDataURL();
            link.click();
        };
    });
}

// 配色方案生成
function initColorPalette() {
    const mainColor = document.getElementById('mainColor');
    const mainColorHex = document.getElementById('mainColorHex');
    const palette = document.getElementById('colorPalette');
    
    mainColor.addEventListener('input', (e) => {
        mainColorHex.value = e.target.value;
    });
    
    mainColorHex.addEventListener('input', (e) => {
        if (/^#[0-9A-Fa-f]{6}$/.test(e.target.value)) {
            mainColor.value = e.target.value;
        }
    });
    
    function hexToHsl(hex) {
        let r = parseInt(hex.slice(1, 3), 16) / 255;
        let g = parseInt(hex.slice(3, 5), 16) / 255;
        let b = parseInt(hex.slice(5, 7), 16) / 255;
        
        let max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
        
        if (max === min) {
            h = s = 0;
        } else {
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
                case g: h = ((b - r) / d + 2) / 6; break;
                case b: h = ((r - g) / d + 4) / 6; break;
            }
        }
        
        return [h * 360, s * 100, l * 100];
    }
    
    function hslToHex(h, s, l) {
        h /= 360;
        s /= 100;
        l /= 100;
        
        let r, g, b;
        if (s === 0) {
            r = g = b = l;
        } else {
            const hue2rgb = (p, q, t) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1/6) return p + (q - p) * 6 * t;
                if (t < 1/2) return q;
                if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                return p;
            };
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1/3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1/3);
        }
        
        const toHex = x => {
            const hex = Math.round(x * 255).toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        };
        
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }
    
    function renderPalette(colors) {
        palette.innerHTML = colors.map(color => `
            <div style="text-align: center; cursor: pointer;" onclick="copyToClipboard('${color}', this)">
                <div style="width: 80px; height: 80px; background: ${color}; border-radius: 12px; border: 2px solid var(--border-color);"></div>
                <div style="font-family: var(--font-mono); font-size: 0.8rem; margin-top: 0.5rem; color: var(--text-secondary);">${color}</div>
            </div>
        `).join('');
    }
    
    // 互补色
    document.getElementById('genComplement').addEventListener('click', () => {
        const [h, s, l] = hexToHsl(mainColor.value);
        const colors = [
            mainColor.value,
            hslToHex((h + 180) % 360, s, l)
        ];
        renderPalette(colors);
    });
    
    // 相似色
    document.getElementById('genAnalogous').addEventListener('click', () => {
        const [h, s, l] = hexToHsl(mainColor.value);
        const colors = [
            hslToHex((h - 30 + 360) % 360, s, l),
            mainColor.value,
            hslToHex((h + 30) % 360, s, l)
        ];
        renderPalette(colors);
    });
    
    // 三角色
    document.getElementById('genTriadic').addEventListener('click', () => {
        const [h, s, l] = hexToHsl(mainColor.value);
        const colors = [
            mainColor.value,
            hslToHex((h + 120) % 360, s, l),
            hslToHex((h + 240) % 360, s, l)
        ];
        renderPalette(colors);
    });
    
    // 单色系
    document.getElementById('genMonochrome').addEventListener('click', () => {
        const [h, s, l] = hexToHsl(mainColor.value);
        const colors = [
            hslToHex(h, s, Math.max(l - 30, 10)),
            hslToHex(h, s, Math.max(l - 15, 20)),
            mainColor.value,
            hslToHex(h, s, Math.min(l + 15, 80)),
            hslToHex(h, s, Math.min(l + 30, 90))
        ];
        renderPalette(colors);
    });
}

// 渐变生成器
function initGradientGen() {
    const startColor = document.getElementById('gradientStart');
    const endColor = document.getElementById('gradientEnd');
    const angle = document.getElementById('gradientAngle');
    const angleValue = document.getElementById('angleValue');
    const type = document.getElementById('gradientType');
    const preview = document.getElementById('gradientPreview');
    const cssOutput = document.getElementById('gradientCSS');
    
    function updateGradient() {
        let gradient;
        if (type.value === 'linear') {
            gradient = `linear-gradient(${angle.value}deg, ${startColor.value}, ${endColor.value})`;
        } else {
            gradient = `radial-gradient(circle, ${startColor.value}, ${endColor.value})`;
        }
        preview.style.background = gradient;
        cssOutput.value = gradient;
    }
    
    startColor.addEventListener('input', updateGradient);
    endColor.addEventListener('input', updateGradient);
    angle.addEventListener('input', (e) => {
        angleValue.textContent = e.target.value;
        updateGradient();
    });
    type.addEventListener('change', updateGradient);
    
    document.getElementById('copyGradient').addEventListener('click', function() {
        copyToClipboard(cssOutput.value, this);
    });
}

// 文本对比
function initTextDiff() {
    document.getElementById('compareDiff').addEventListener('click', () => {
        const text1 = document.getElementById('diffText1').value;
        const text2 = document.getElementById('diffText2').value;
        const result = document.getElementById('diffResult');
        
        if (!text1 || !text2) {
            result.textContent = '请输入两段文本进行对比';
            return;
        }
        
        // 简单的行级对比
        const lines1 = text1.split('\n');
        const lines2 = text2.split('\n');
        
        let html = '';
        const maxLen = Math.max(lines1.length, lines2.length);
        
        for (let i = 0; i < maxLen; i++) {
            const line1 = lines1[i] || '';
            const line2 = lines2[i] || '';
            
            if (line1 === line2) {
                html += `<div style="color: var(--text-secondary);">${escapeHtml(line1) || '&nbsp;'}</div>`;
            } else {
                if (line1) {
                    html += `<div style="background: rgba(239, 68, 68, 0.2); color: var(--error);">- ${escapeHtml(line1)}</div>`;
                }
                if (line2) {
                    html += `<div style="background: rgba(34, 197, 94, 0.2); color: var(--success);">+ ${escapeHtml(line2)}</div>`;
                }
            }
        }
        
        result.innerHTML = html;
    });
    
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Markdown预览
function initMarkdownPreview() {
    const input = document.getElementById('mdInput');
    const preview = document.getElementById('mdPreview');
    
    function renderMarkdown() {
        let text = input.value;
        
        // 简单的Markdown解析
        text = text
            // 标题
            .replace(/^### (.*$)/gm, '<h3>$1</h3>')
            .replace(/^## (.*$)/gm, '<h2>$1</h2>')
            .replace(/^# (.*$)/gm, '<h1>$1</h1>')
            // 粗体和斜体
            .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            // 代码块
            .replace(/```([\s\S]*?)```/g, '<pre style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; overflow-x: auto;"><code>$1</code></pre>')
            // 行内代码
            .replace(/`(.*?)`/g, '<code style="background: var(--bg-secondary); padding: 0.2rem 0.4rem; border-radius: 4px;">$1</code>')
            // 链接
            .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" style="color: var(--accent-primary);">$1</a>')
            // 列表
            .replace(/^\- (.*$)/gm, '<li>$1</li>')
            // 换行
            .replace(/\n/g, '<br>');
        
        // 包裹列表项
        text = text.replace(/(<li>.*<\/li>)+/g, '<ul style="padding-left: 1.5rem;">$&</ul>');
        
        preview.innerHTML = text;
    }
    
    input.addEventListener('input', renderMarkdown);
    renderMarkdown(); // 初始渲染
}

