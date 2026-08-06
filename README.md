# GithubCN

> 原作者：[JQiue](https://github.com/JQiue/githubCN)  
> 本文档由 AI 辅助维护，内容源自上游仓库与实际代码分析

Github 浏览器中文汉化插件，通过 MutationObserver 监听 DOM 变化，将 GitHub 页面上的英文文本节点实时替换为中文翻译。支持 Manifest V3 和 Tampermonkey 油猴脚本。

## 功能概述

- 覆盖 GitHub 全站常用文本：导航栏、仓库页面、Issues/PR、Actions、设置、个人主页等
- 支持文本节点、`placeholder`、`data-label` 等属性的翻译
- 基于 MutationObserver 的动态翻译，兼容 GitHub 的 SPA 导航
- 轻量级，仅在 `github.com` 域名下运行
- **新增：Tampermonkey 油猴脚本版本**，无需安装浏览器扩展

## 安装

### 方式一：浏览器扩展（推荐）

| 浏览器           | 方式                                                                                         |
| ---------------- | -------------------------------------------------------------------------------------------- |
| Edge             | [Edge 应用商店](https://microsoftedge.microsoft.com/addons/detail/githubcn/onlodfoebaobhmlhgcbddjngjbkdbfaj) |
| Google Chrome    | 下载源代码，在 `chrome://extensions` 开启「开发者模式」后拖放 `src` 文件夹或加载已解压的扩展目录 |
| 其他 Chromium 系 | 与 Chrome 相同，加载 `src` 目录即可                                                          |

### 方式二：Tampermonkey 油猴脚本

适用于不想安装浏览器扩展的用户，或需要在受限环境中使用。

**安装步骤：**
1. 浏览器安装 [Tampermonkey](https://www.tampermonkey.net/) 扩展
2. 点击 [githubCN.user.js](https://github.com/3032252626/githubCN/blob/main/githubCN.user.js) 直接安装
3. 或打开 Tampermonkey 面板 → 新建脚本 → 复制粘贴代码 → 保存

**优势：**
- 无需安装浏览器扩展
- 自动更新（GitHub 原生支持）
- 兼容所有支持 Tampermonkey 的浏览器

## 文件结构

```
githubCN/
├── src/
│   ├── manifest.json        # Manifest V3 配置
│   ├── js/
│   │   ├── background.js    # Service Worker（空，预留）
│   │   └── content.js       # 核心翻译逻辑 + 词条数据
│   └── img/                 # 插件图标
├── githubCN.user.js         # Tampermonkey 油猴脚本
├── app.js                   # 打包/开发辅助脚本
├── package.json
└── README.md
```

## 翻译覆盖范围

当前内置约 **350+ 条翻译词条**，涵盖以下区域：

| 分类               | 示例                                 |
| ------------------ | ------------------------------------ |
| 顶部导航           | Pull requests → 拉取请求             |
| 用户菜单           | Your profile → 个人资料              |
| 个人主页           | Overview / Repositories / Packages   |
| 仓库页面           | Code / Issues / Actions / Wiki       |
| 新建仓库流程       | Owner / Repository name / License    |
| 账户设置           | Account / Appearance / Notifications |
| 安全设置           | SSH keys / GPG keys / OAuth apps     |
| Issues & PR        | Assign / Label / Review changes      |
| Actions / CI       | Automation / Deployment / Workflow   |
| 危险区操作         | Change visibility / Archive / Delete |
| Git 操作术语       | rebase / cherry-pick / stash         |
| 协作术语           | reviewer / maintainer / contributor  |
| 时间表达           | just now / hours ago / a year ago    |
| 错误提示           | Bad credentials / Rate limit exceeded|
| Copilot / Codespaces| Ask Copilot / New codespace          |

## 如何补充翻译词条

### 扩展版本
编辑 `src/js/content.js`，在 `allData` 数组中按格式添加：

```js
const allData = [
  [`English Text`, `中文翻译`],
  [`Multi-word phrase`, `多词短语`],
  // ...
];
```

### 油猴脚本版本
编辑 `githubCN.user.js`，在 `allData` 数组中按相同格式添加。

**规则：**
- key 必须与页面上 textContent 完全一致（含空格、标点）
- 键重复时以首次出现的为准
- 支持 `placeholder`、`data-label` 等属性的自动翻译

## 已知限制

- 仅替换纯文本节点，不处理通过 CSS `::before`/`::after` 渲染的内容
- 部分动态注入的 `placeholder` / `value` 属性可能因 MutationObserver 的 `attributeFilter` 范围限制而遗漏
- 不对 `<input>` 元素的 `.value` DOM 属性做修改，因此表单提交的实际值不会改变

## 版本

**1.6.3**（当前）：
- 新增: Tampermonkey 油猴脚本版本（`githubCN.user.js`）
- 尝试修复: 文件列表中 `<relative-time>` 元素的时间文本（如"6 minutes ago"）不翻译的问题，在元素节点处理中增加对 `RELATIVE-TIME` / `TIME-AGO` 标签的直接处理（**已知仍不生效，待进一步排查**）

**1.6.2**：
- 新增: 15 条时间相关静态词条（just now → 刚刚、yesterday → 昨天、Commits → 次提交 等）
- 新增: 文本节点正则 fallback，将 `\d+ minutes ago` 等动态时间转为中文
- 新增: `\d+ Commits` → `\d+ 次提交`、`\d+ Branches` → `\d+ 个分支` 等正则翻译

**1.6.1**：
- 修复: MutationObserver 修改文本节点后自身触发新 mutation 导致页面卡死（无限递归），加入 200ms debounce + disconnect/observe 防自触发机制

**1.6**：
- 对齐官方术语: 参照 [docs.github.com/zh](https://docs.github.com/zh) 修正 16 处翻译用语（Pull requests → 拉取请求、Profile → 个人资料、Billing → 计费 等）

**1.5**：
- 修复: 表单提交按钮的 `data-signin-label` / `data-disable-with` 属性污染问题（Bug #1）
- 移除: 过于宽泛的 `['s', '']` 匹配规则
- 扩充: 新增 100+ 条翻译词条（Copilot、Codespaces、Gist、Sponsor 等）
- 清理: 移除重复键、统一译文风格

## 致谢

- 原始项目 [JQiue/githubCN](https://github.com/JQiue/githubCN)
- 所有贡献翻译词条的用户
