/**
 * ToolBox - 主应用逻辑
 */

// DOM Elements
const modalOverlay = document.getElementById('modalOverlay');
const modalContainer = document.getElementById('modalContainer');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');
const themeToggle = document.getElementById('themeToggle');
const donateFab = document.getElementById('donateFab');

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initToolCards();
    initModal();
    initDonate();
    initNavLinks();
});

// ==================== 主题切换 ====================
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// ==================== 工具卡片点击 ====================
function initToolCards() {
    const toolCards = document.querySelectorAll('.tool-card');
    
    toolCards.forEach(card => {
        card.addEventListener('click', () => {
            const toolId = card.dataset.tool;
            openTool(toolId);
        });
    });
}

// ==================== Modal 控制 ====================
function initModal() {
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    // ESC 键关闭
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
}

function openModal() {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ==================== 打开工具 ====================
function openTool(toolId) {
    const toolContent = getToolContent(toolId);
    if (toolContent) {
        modalContent.innerHTML = toolContent;
        openModal();
        initToolFunctions(toolId);
    }
}

// ==================== 导航链接平滑滚动 ====================
function initNavLinks() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==================== 打赏功能 ====================
function initDonate() {
    donateFab.addEventListener('click', () => {
        modalContent.innerHTML = getDonateContent();
        openModal();
    });
}

function getDonateContent() {
    return `
        <div class="tool-header">
            <h2>☕ 打赏支持</h2>
            <p>如果这些工具对您有帮助，欢迎请我喝杯咖啡</p>
        </div>
        <div style="text-align: center; padding: 2rem;">
            <div style="display: flex; justify-content: center; gap: 3rem; flex-wrap: wrap;">
                <div>
                    <p style="margin-bottom: 1rem; font-weight: 500;">微信支付</p>
                    <div style="width: 180px; height: 180px; background: var(--bg-card); border-radius: 12px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--border-color);">
                        <span style="color: var(--text-muted);">二维码占位</span>
                    </div>
                </div>
                <div>
                    <p style="margin-bottom: 1rem; font-weight: 500;">支付宝</p>
                    <div style="width: 180px; height: 180px; background: var(--bg-card); border-radius: 12px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--border-color);">
                        <span style="color: var(--text-muted);">二维码占位</span>
                    </div>
                </div>
            </div>
            <p style="margin-top: 2rem; color: var(--text-muted);">感谢您的支持！🙏</p>
        </div>
    `;
}

// ==================== 工具函数初始化 ====================
function initToolFunctions(toolId) {
    switch(toolId) {
        case 'word-count':
            initWordCount();
            break;
        case 'json-format':
            initJsonFormat();
            break;
        case 'base64':
            initBase64();
            break;
        case 'timestamp':
            initTimestamp();
            break;
        case 'hash':
            initHash();
            break;
        case 'regex-tester':
            initRegexTester();
            break;
        case 'image-compress':
            initImageCompress();
            break;
        case 'image-convert':
            initImageConvert();
            break;
        case 'image-resize':
            initImageResize();
            break;
        case 'image-crop':
            initImageCrop();
            break;
        case 'qrcode':
            initQRCode();
            break;
        case 'color-palette':
            initColorPalette();
            break;
        case 'gradient-gen':
            initGradientGen();
            break;
        case 'text-diff':
            initTextDiff();
            break;
        case 'markdown-preview':
            initMarkdownPreview();
            break;
        case 'favicon':
            initFavicon();
            break;
    }
}

// ==================== 通用工具函数 ====================
function copyToClipboard(text, button) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.textContent;
        button.textContent = '✓ 已复制';
        button.style.background = 'var(--success)';
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 1500);
    }).catch(err => {
        console.error('复制失败:', err);
        alert('复制失败，请手动复制');
    });
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? 'var(--success)' : 'var(--error)'};
        color: white;
        border-radius: 10px;
        z-index: 3000;
        animation: fadeInUp 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

