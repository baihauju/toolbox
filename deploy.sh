#!/bin/bash

# ToolBox 一键部署脚本
# 使用方法: ./deploy.sh <GitHub用户名> <仓库名>

set -e

# 颜色输出
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}"
echo "╔════════════════════════════════════════════╗"
echo "║     ToolBox GitHub Pages 部署脚本          ║"
echo "╚════════════════════════════════════════════╝"
echo -e "${NC}"

# 检查参数
if [ -z "$1" ]; then
    echo -e "${YELLOW}请输入你的 GitHub 用户名:${NC}"
    read GITHUB_USER
else
    GITHUB_USER=$1
fi

if [ -z "$2" ]; then
    echo -e "${YELLOW}请输入仓库名 (默认: toolbox):${NC}"
    read REPO_NAME
    REPO_NAME=${REPO_NAME:-toolbox}
else
    REPO_NAME=$2
fi

echo ""
echo -e "${BLUE}配置信息:${NC}"
echo -e "  GitHub 用户: ${GREEN}$GITHUB_USER${NC}"
echo -e "  仓库名称: ${GREEN}$REPO_NAME${NC}"
echo -e "  部署地址: ${GREEN}https://$GITHUB_USER.github.io/$REPO_NAME${NC}"
echo ""

# 确认
echo -e "${YELLOW}确认部署? (y/n)${NC}"
read CONFIRM
if [ "$CONFIRM" != "y" ] && [ "$CONFIRM" != "Y" ]; then
    echo -e "${RED}已取消${NC}"
    exit 0
fi

# 检查是否已有远程仓库
if git remote | grep -q origin; then
    echo -e "${YELLOW}检测到已存在远程仓库，是否替换? (y/n)${NC}"
    read REPLACE
    if [ "$REPLACE" = "y" ] || [ "$REPLACE" = "Y" ]; then
        git remote remove origin
    else
        echo -e "${RED}已取消${NC}"
        exit 0
    fi
fi

# 添加远程仓库
REPO_URL="https://github.com/$GITHUB_USER/$REPO_NAME.git"
echo -e "${BLUE}添加远程仓库: $REPO_URL${NC}"
git remote add origin $REPO_URL

# 推送代码
echo -e "${BLUE}推送代码到 GitHub...${NC}"
git push -u origin main

echo ""
echo -e "${GREEN}╔════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║           🎉 部署成功！                    ║${NC}"
echo -e "${GREEN}╚════════════════════════════════════════════╝${NC}"
echo ""
echo -e "${BLUE}接下来请完成以下步骤:${NC}"
echo ""
echo -e "1. 打开 GitHub 仓库设置页面:"
echo -e "   ${YELLOW}https://github.com/$GITHUB_USER/$REPO_NAME/settings/pages${NC}"
echo ""
echo -e "2. 在 'Build and deployment' 部分:"
echo -e "   - Source 选择: ${GREEN}GitHub Actions${NC}"
echo ""
echo -e "3. 等待 1-2 分钟，访问你的网站:"
echo -e "   ${GREEN}https://$GITHUB_USER.github.io/$REPO_NAME${NC}"
echo ""
echo -e "${BLUE}提示: 可在 Actions 标签页查看部署进度${NC}"
echo -e "   ${YELLOW}https://github.com/$GITHUB_USER/$REPO_NAME/actions${NC}"
echo ""

