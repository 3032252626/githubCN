const allData = [
  // ===== 顶部导航 =====
  [`Recent Repositories`, `最近仓库`],
  [`Search or jump to…`, `搜索或跳转到…`],
  [`Issues`, `问题`],
  [`Pull requests`, `拉取请求`],
  [`Marketplace`, `市场`],
  [`Explore`, `探索`],
  [`Following`, `关注中`],
  [`Find a repository…`, `查找仓库`],
  [`Latest changes`, `最新变化`],
  [`hours ago`, `小时前`],
  [`days ago`, `天前`],
  [`New`, `新建`],
  [`Explore repositories`, `探索存储库`],
  [`Explore more →`, `探索更多 →`],

  // ===== 用户菜单 =====
  [`Set status`, `设置状态`],
  [`Your profile`, `个人资料`],
  [`Your repositories`, `个人仓库`],
  [`Your codespaces`, `你的 Codespaces`],
  [`Your projects`, `你的项目`],
  [`Signed in as`, `登录账户为`],
  [`Feature preview`, `功能预览`],
  [`Upgrade`, `升级`],
  [`Try Enterprise`, `尝试企业版`],
  [`Help`, `帮助`],
  [`Settings`, `设置`],
  [`Sign out`, `退出`],

  // ===== 个人主页 =====
  [`Overview`, `概述`],
  [`Repositories`, `仓库`],
  [`Packages`, `包`],
  [`Popular repositories`, `热门仓库`],
  [`Edit profile`, `编辑个人资料`],
  [`followers`, ` 关注者`],
  [`following`, ` 关注中`],
  [`Public`, `公开`],
  [`Customize your pins`, `自定义你的置顶项目`],
  [`Contribution settings`, `贡献设置`],
  [`Pinned`, `置顶`],
  [`Learn how we count contributions`, `了解我们如何计算贡献`],
  [`Code review`, `代码评审`],
  [`Commits`, `提交`],
  [`Contribution activity`, `贡献活动`],
  [`Show more activity`, `显示更多活动`],

  // ===== 仓库页面 =====
  [`Code`, `代码`],
  [`Go to file`, `转到文件`],
  [`Add file`, `添加文件`],
  [`About`, `关于`],
  [`Pin`, `置顶`],
  [`Pin this repository to your profile`, `置顶这个项目到你的个人资料`],
  [`New repository`, `新建仓库`],
  [`Import repository`, `导入仓库`],
  [`New organization`, `新建组织`],
  [`Create a new release`, `创建一个新的版本`],
  [`Publish your first package`, `发布你的第一个包`],
  [`Releases`, `发布`],
  [`Packages `, `包`],
  [`No packages published`, `没有发布任何软件包`],
  [`Languages`, `语言`],
  [`Show more`, `显示更多`],
  [`Recent activity`, `最新动态`],
  [`When you take actions across GitHub, we'll provide links to that activity here.`,
    `当你在 GitHub 上采取行动时，我们会在这里提供该活动的链接。`],
  [`More`, `更多`],
  [`Subscribe to your news feed`, `订阅你的动态`],
  [`Blog`, `博客`],
  [`Shop`, `商店`],
  [`Contact GitHub`, `联系 GitHub`],
  [`Pricing`, `定价`],
  [`Training`, `培训`],
  [`Status`, `状态`],
  [`Terms`, `条款`],
  [`Privacy`, `隐私`],
  [`Docs`, `文档`],
  [`New project`, `新建项目`],
  [`Activity  overview`, `活动概览`],
  [`Create new file`, `创建新文件`],
  [`Upload files`, `上传文件`],
  [`Local`, `本地`],
  [`Clone`, `克隆`],
  [`Open with GitHub Desktop`, `在 GitHub Desktop 中打开`],
  [`Download ZIP`, `下载 ZIP`],
  [`New codespace`, `新建 Codespace`],
  [`Less`, `收起`],
  [`Select type`, `选择类型`],
  [`Type`, `类型`],
  [`Language`, `语言`],
  [`Sort`, `排序`],
  [`Private`, `私有`],
  [`Select language`, `选择语言`],
  [`Select order`, `选择顺序`],
  [`Last updated`, `最近更新`],
  [`Create a new repository`, `创建一个新的仓库`],
  [`Owner`, `拥有者`],
  [`Repository name`, `仓库名称`],
  [`Description`, `描述`],
  [`(optional)`, `(可选)`],

  // ===== 新建仓库 =====
  [`Anyone on the internet can see this repository. You choose who can commit.`,
    `互联网上的任何人都可以看到此仓库，你选择谁能提交。`],
  [`You choose who can see and commit to this repository.`,
    `你选择谁可以查看和提交此仓库。`],
  [`A repository contains all project files, including the revision history. Already have a project repository elsewhere?`,
    `仓库包含所有项目文件（包括修订历史）。在其他地方已有项目仓库？`],
  [`Import a repository.`, `导入仓库`],
  [`Skip this step if you're importing an existing repository.`,
    `如果你要导入已有仓库，请跳过此步骤。`],
  [`Choose which files not to track from a list of templates.`,
    `从模板列表中选择不需要跟踪的文件。`],
  [`This is where you can write a long description for your project.`,
    `在此为项目撰写详细描述。`],
  [`A license tells others what they can and can't do with your code.`,
    `许可证告知他人可以对你的代码做什么、不能做什么。`],
  [`You are creating a public repository in your personal account.`,
    `你正在个人账户中创建公开仓库。`],
  [`Initialize this repository with:`, `初始化此仓库：`],
  [`Create repository`, `创建仓库`],
  [`Great repository names are short and memorable. Need inspiration? How about`,
    `好的仓库名称简短且令人难忘，需要灵感吗？比如`],
  [`Your personal account`, `你的个人账户`],
  [`Public profile`, `公开资料`],

  // ===== 账户设置 =====
  [`Name`, `姓名`],
  [`Change username`, `修改用户名`],
  [`Account`, `账户`],
  [`Export account data`, `导出账户数据`],
  [`Appearance`, `外观`],
  [`Accessibility`, `无障碍`],
  [`Notifications`, `通知`],
  [`Access`, `访问`],
  [`Personal billing`, `个人计费`],
  [`Emails`, `邮箱`],
  [`Billing and plans`, `计费和计划`],
  [`This is a list of SSH keys associated with your account. Remove any keys that you do not recognize.`,
    `这是与你账户关联的 SSH 密钥列表，删除任何不认识的密钥。`],
  [`Organizations`, `组织`],
  [`You are not a member of any organizations.`, `你不是任何组织的成员。`],
  [`Archives`, `归档`],
  [`Security log`, `安全日志`],
  [`Sponsorship log`, `赞助日志`],
  [`No sponsorship activity in this time period`, `此时间段内没有赞助活动`],

  // ===== 登录 =====
  [`Sign in to GitHub`, `登录 GitHub`],
  [`Username or email address`, `用户名或邮箱`],
  [`Password`, `密码`],
  [`Sign in`, `登录`],
  [`New to GitHub?`, `GitHub 新用户？`],
  [`Create an account`, `创建账户`],
  [`Forgot password?`, `忘记密码？`],
  [`Signing in…`, `登录中...`],

  // ===== Issues 和 Pull Requests =====
  [`Label issues and pull requests for new contributors`,
    `为新贡献者标记问题和拉取请求`],
  [`Filters`, `筛选`],
  [`New Issue`, `新建问题`],
  [`There aren't any open issues.`, `没有公开的问题。`],
  [`Edit repository details`, `编辑仓库详情`],
  [`Website`, `网站`],
  [`Save changes`, `保存更改`],
  [`Protect this branch`, `保护此分支`],
  [`Get started with GitHub Actions`, `开始使用 GitHub Actions`],
  [`Build, test, and deploy your code. Make code reviews, branch management, and issue triaging work the way you want. Select a workflow to get started.`,
    `构建、测试和部署你的代码。按你想要的方式运作代码审查、分支管理和问题分类。选择一个工作流开始吧。`],

  // ===== Actions 页面 =====
  [`Browse all categories`, `浏览所有类别`],
  [`Automation`, `自动化`],
  [`Deployment`, `部署`],
  [`Continuous integration`, `持续集成`],
  [`Reporting`, `报告`],
  [`General`, `常规`],

  // ===== 个人资料 =====
  [`Public email`, `公开邮箱`],
  [`Bio`, `个人简介`],
  [`URL`, `网站`],
  [`Twitter username`, `Twitter 用户名`],
  [`Company`, `公司`],
  [`Location`, `所在地`],
  [`Contributions & Activity`, `贡献和活动`],
  [`Successor settings`, `继承者设置`],
  [`You have not designated a successor.`, `你还没有指定继承人。`],
  [`Delete account`, `删除账户`],
  [`Once you delete your account, there is no going back. Please be certain.`,
    `一旦删除账户，将不可恢复，请确认。`],
  [`Display current local time`, `显示当前本地时间`],
  [`Keyboard shortcuts`, `快捷键`],

  // ===== 安全设置 =====
  [`Subscriptions`, `订阅`],
  [`Verified domains`, `已验证的域名`],
  [`There are no verified domains.`, `没有已验证的域名。`],
  [`Password and authentication`, `密码和身份验证`],
  [`Change password`, `修改密码`],
  [`Old password`, `旧密码`],
  [`New password`, `新密码`],
  [`Confirm new password`, `确认新密码`],
  [`Two-factor authentication`, `双重身份验证`],
  [`Confirm access`, `确认访问`],
  [`Confirm`, `确认`],
  [`Who has access`, `谁有权限`],

  // ===== 仓库设置 =====
  [`Code and automation`, `代码与自动化`],
  [`Default branch`, `默认分支`],
  [`Branch protection rules`, `分支保护规则`],
  [`Protected tags`, `受保护标签`],
  [`Environments`, `环境`],
  [`Code security and analysis`, `代码安全与分析`],
  [`Integrations`, `集成`],
  [`Email notifications`, `邮件通知`],
  [`Collaborators`, `协作者`],
  [`Community Standards`, `社区标准`],
  [`Traffic`, `流量`],
  [`Code frequency`, `代码频率`],
  [`Dependency graph`, `依赖图`],
  [`Contributors`, `贡献者`],

  // ===== 评论区 =====
  [`You can`, `你可以`],
  [`@mention`, `@提及`],
  [`other users and organizations to link to them.`,
    `其他用户和组织来关联他们`],
  [`Cancel`, `取消`],
  [`Welcome to the all-new projects`, `欢迎来到全新的项目`],
  [`No open projects`, `没有开放的项目`],
  [`Add a bio`, `添加个人简介`],
  [`Loading more...`, `加载更多...`],
  [`Your popular repositories will now be shown instead of your pins.`,
    `你的热门仓库现在会显示，替代你的置顶。`],
  [`Unpin`, `取消置顶`],
  [`Your pins have been updated.`, `你的置顶已更新。`],

  // ===== 搜索与发现 =====
  [`Advanced search`, `高级搜索`],
  [`Branches`, `分支`],
  [`Tags`, `标签`],
  [`Social Preview`, `社交预览`],
  [`Upload an image to customize your repository's social media preview.`,
    `上传图片以自定义仓库的社交预览。`],
  [`Pull Requests`, `拉取请求`],

  // ===== 危险区 =====
  [`Danger Zone`, `危险区域`],
  [`Change repository visibility`, `更改仓库可见性`],
  [`Transfer ownership`, `转让所有权`],
  [`This repository is currently public.`, `此仓库当前为公开。`],
  [`This repository is currently private.`, `此仓库当前为私有。`],
  [`Archive this repository`, `归档此仓库`],
  [`Mark this repository as archived and read-only.`,
    `将此仓库标记为归档且只读。`],
  [`Delete this repository`, `删除此仓库`],
  [`Once you delete a repository, there is no going back. Please be certain.`,
    `一旦删除仓库，将不可恢复，请确认。`],
  [`Are you absolutely sure?`, `你完全确定吗？`],
  [`Change visibility`, `更改可见性`],
  [`Change to private`, `改为私有`],
  [`Transfer`, `转移`],

  // ===== 状态和消息 =====
  [`Edit status`, `编辑状态`],
  [`Busy`, `忙碌`],
  [`Clear status`, `清除状态`],
  [`Never`, `从不`],
  [`Your main branch isn't protected`, `你的主分支不受保护`],
  [`Protect this branch from force pushing or deletion, or require status checks before merging.`,
    `保护此分支免受强制推送或删除，或要求在合并前进行状态检查。`],
  [`Learn more`, `了解更多`],
  [`Learn more.`, `了解更多。`],
  [`Branch protection rule`, `分支保护规则`],
  [`Protect your most important branches`, `保护最重要的分支`],
  [`Achievements`, `成就`],
  [`Send feedback`, `发送反馈`],
  [`Choose a license`, `选择许可证`],
  [`Import your project to GitHub`, `将项目导入 GitHub`],

  // ===== 通知 =====
  [`Inbox`, `收件箱`],
  [`Prev`, `上页`],
  [`Next`, `下页`],
  [`Saved`, `已保存`],
  [`Done`, `完成`],
  [`Manage notifications`, `管理通知`],
  [`See more`, `查看更多`],
  [`Include in the home page`, `显示在首页`],

  // ===== Discussions =====
  [`Discussions`, `讨论`],
  [`Users`, `用户`],
  [`Lists`, `列表`],
  [`Create list`, `创建列表`],
  [`Pushes`, `推送`],
  [`Limit how many branches and tags can be updated in a single push`,
    `限制单次推送可以更新的分支和标签数量`],
  [`I want to make this repository private`, `我想将此仓库设为私有`],
  [`I have read and understand these effects`, `我已阅读并理解这些影响`],

  // ===== Issues / 里程碑 =====
  [`New issue`, `新建问题`],
  [`Labels`, `标签`],
  [`New milestone`, `新建里程碑`],
  [`Milestones`, `里程碑`],
  [`You haven't created any Milestones.`, `你还没有创建任何里程碑。`],

  // ===== 操作按钮 =====
  [`Edit`, `编辑`],
  [`Delete`, `删除`],
  [`Close`, `关闭`],
  [`to search`, `搜索`],
  [`Create your first project`, `创建你的第一个项目`],
  [`Ready to start building? Create a repository for a new idea or bring over an existing repository to keep contributing to it.`,
    `准备好开始构建了吗？为新想法创建仓库，或导入已有仓库继续贡献。`],
  [`Filter`, `筛选`],
  [`Events`, `事件`],
  [`Activity you want to see on your feed`, `你希望在动态中看到的活动`],
  [`Stars`, `星标`],
  [`main`, `主干`],
  [`Default`, `默认`],
  [`Watch`, `关注`],
  [`Fork`, `复刻`],
  [`Starred`, `已星标`],
  [`Switch branches/tags`, `切换分支/标签`],
  [`Profile picture`, `头像`],
  [`SSH and GPG keys`, `SSH 和 GPG 密钥`],
  [`Cancel changes`, `取消更改`],
  [`Commit changes...`, `提交更改...`],

  // ===== 基本 Git 操作 =====
  [`rebase`, `变基`],
  [`fetch`, `抓取`],
  [`checkout`, `检出`],
  [`stash`, `储藏`],
  [`cherry-pick`, `拣选`],
  [`revert`, `还原`],
  [`reset`, `重置`],
  [`diff`, `差异`],
  [`log`, `日志`],
  [`status`, `状态`],
  [`Stage changes`, `暂存更改`],
  [`Unstage changes`, `取消暂存`],
  [`Discard changes`, `丢弃更改`],
  [`View changes`, `查看更改`],
  [`Blame`, `追溯`],
  [`History`, `历史`],

  // ===== 协作术语 =====
  [`review`, `审查`],
  [`approve`, `批准`],
  [`conflict`, `冲突`],
  [`milestone`, `里程碑`],
  [`release`, `发布`],
  [`collaborator`, `协作者`],
  [`maintainer`, `维护者`],
  [`contributor`, `贡献者`],
  [`stargazer`, `星标者`],
  [`watcher`, `关注者`],

  // ===== 文件术语 =====
  [`.gitignore`, `忽略文件列表`],
  [`README`, `自述文件`],
  [`LICENSE`, `许可证`],
  [`CONTRIBUTING`, `贡献指南`],
  [`CODE_OF_CONDUCT`, `行为准则`],
  [`workflow`, `工作流`],
  [`action`, `操作`],
  [`runner`, `运行器`],
  [`artifact`, `制品`],
  [`secret`, `密钥`],

  // ===== 界面元素 =====
  [`Dashboard`, `仪表板`],
  [`Actions`, `操作`],
  [`Wiki`, `维基`],
  [`Insights`, `Insights`],
  [`Projects`, `项目`],
  [`Security`, `安全`],
  [`Pulse`, `动态`],
  [`Graphs`, `图表`],
  [`Network`, `网络`],
  [`Forks`, `复刻`],

  // ===== 错误提示 =====
  [`Bad credentials`, `无效凭据`],
  [`Permission denied (publickey)`, `权限被拒绝（公钥）`],
  [`Repository not found`, `仓库未找到`],
  [`Branch not found`, `分支未找到`],
  [`Merge conflict`, `合并冲突`],
  [`Push rejected`, `推送被拒绝`],
  [`Authentication failed`, `身份验证失败`],
  [`Rate limit exceeded`, `速率限制已超出`],
  [`Network error`, `网络错误`],
  [`Server error`, `服务器错误`],

  // ===== PR 操作 =====
  [`Create branch`, `创建分支`],
  [`Delete branch`, `删除分支`],
  [`Compare changes`, `比较更改`],
  [`Create pull request`, `创建拉取请求`],
  [`Merge pull request`, `合并拉取请求`],
  [`Close pull request`, `关闭拉取请求`],
  [`Reopen pull request`, `重新打开拉取请求`],
  [`Request review`, `请求审查`],
  [`Assign`, `分配`],
  [`Label`, `标签`],

  // ===== 状态 =====
  [`Open`, `打开`],
  [`Closed`, `已关闭`],
  [`Merged`, `已合并`],
  [`Draft`, `草稿`],
  [`Ready for review`, `准备审查`],
  [`Changes requested`, `需要更改`],
  [`Approved`, `已批准`],
  [`Pending`, `待处理`],
  [`Success`, `成功`],
  [`Failure`, `失败`],

  // ===== 时间 =====
  [`just now`, `刚刚`],
  [`a minute ago`, `1 分钟前`],
  [`minutes ago`, `分钟前`],
  [`an hour ago`, `1 小时前`],
  [`a day ago`, `1 天前`],
  [`a week ago`, `1 周前`],
  [`a month ago`, `1 个月前`],
  [`a year ago`, `1 年前`],

  // ===== 文件操作 =====
  [`Raw`, `原始`],
  [`Download`, `下载`],
  [`Copy`, `复制`],

  // ===== 通知与设置（补充） =====
  [`Notification settings`, `通知设置`],
  [`Email preferences`, `邮件偏好`],
  [`Security settings`, `安全设置`],
  [`SSH keys`, `SSH 密钥`],
  [`GPG keys`, `GPG 密钥`],
  [`OAuth apps`, `OAuth 应用`],
  [`Personal access tokens`, `个人访问令牌`],
  [`Billing`, `计费`],
  [`Sponsors`, `赞助者`],

  // ===== 搜索与筛选 =====
  [`Filter by`, `筛选依据`],
  [`Sort by`, `排序依据`],
  [`Clear filter`, `清除筛选`],
  [`Search results`, `搜索结果`],
  [`No results found`, `未找到结果`],
  [`Loading...`, `加载中...`],
  [`Retry`, `重试`],
  [`Refresh`, `刷新`],
  [`Back`, `返回`],
  [`Next page`, `下一页`],

  // ===== 新增：GitHub Copilot / AI =====
  [`Copilot`, `Copilot`],
  [`Ask Copilot`, `询问 Copilot`],
  [`GitHub Copilot`, `GitHub Copilot`],
  [`Start a conversation with Copilot`, `与 Copilot 开始对话`],
  [`Use AI to find code and debug issues`, `使用 AI 查找代码和调试问题`],

  // ===== 新增：仓库交互 =====
  [`Use this template`, `使用此模板`],
  [`Create a new issue`, `创建新问题`],
  [`Compare & pull request`, `比较并创建拉取请求`],
  [`<> Code`, `<> 代码`],
  [`No description, website, or topics provided.`, `未提供描述、网站或主题。`],
  [`Readme`, `自述文件`],
  [`MIT License`, `MIT 许可证`],
  [`Apache-2.0 license`, `Apache-2.0 许可证`],
  [`GPL-3.0 license`, `GPL-3.0 许可证`],
  [`BSD-3-Clause license`, `BSD-3-Clause 许可证`],
  [`No license`, `无许可证`],

  // ===== 新增：贡献图表 =====
  [`contributions in the last year`, `过去一年的贡献`],
  [`Contribution activity in`, `贡献活动于`],
  [`No contributions on`, `无贡献于`],

  // ===== 新增：菜单项 =====
  [`Your stars`, `你的星标`],
  [`Your Gists`, `你的 Gists`],
  [`Your sponsors`, `你的赞助者`],
  [`Feature requests`, `功能请求`],
  [`GitHub Changelog`, `GitHub 更新日志`],
  [`Discussions`, `讨论`],

  // ===== 新增：文件浏览 =====
  [`Find file`, `查找文件`],
  [`Copy path`, `复制路径`],
  [`Latest commit`, `最新提交`],
  [`View code`, `查看代码`],
  [`Compare`, `比较`],

  // ===== 新增：PR / Issue 详情 =====
  [`conversation`, `会话`],
  [`commits`, `提交记录`],
  [`checks`, `检查`],
  [`files changed`, `更改的文件`],
  [`Show all checks`, `显示所有检查`],
  [`Merge branch`, `合并分支`],
  [`Rebase and merge`, `变基并合并`],
  [`Squash and merge`, `压缩并合并`],
  [`Review changes`, `审查更改`],
  [`Comment`, `评论`],
  [`Submit review`, `提交审查`],
  [`This branch has no conflicts with the base branch`, `此分支与基础分支没有冲突`],

  // ===== 新增：Gist =====
  [`All gists`, `所有 gists`],
  [`Create a gist`, `创建 gist`],
  [`Secret`, `私密`],

  // ===== 新增：Sponsor =====
  [`Sponsor`, `赞助`],
  [`Become a sponsor`, `成为赞助者`],

  // ===== 新增：通知 =====
  [`Mark all as read`, `全部标记为已读`],
  [`Participating`, `参与中`],
  [`Unread`, `未读`],

  // ===== 新增：导航 =====
  [`Home`, `首页`],
  [`Top repositories`, `热门仓库`],
  [`Trending`, `趋势`],
  [`Collections`, `合集`],

  // ===== 新增：Repository 模板/指南 =====
  [`Code of conduct`, `行为准则`],
  [`Contributing`, `贡献指南`],
  [`Security policy`, `安全策略`],
  [`No packages published`, `未发布任何包`],

  // ===== 新增：Git LFS / 大文件 =====
  [`Git LFS`, `Git LFS`],
  [`Storage`, `存储`],

  // ===== 新增：成员/组织 =====
  [`Member`, `成员`],
  [`Owner`, `所有者`],
  [`Members`, `成员`],
  [`Teams`, `团队`],
  [`Audit log`, `审计日志`],
  [`Billing & Licensing`, `计费与许可`],

  // ===== 新增：GitHub Mobile =====
  [`Mobile`, `移动端`],
  [`Download GitHub Mobile`, `下载 GitHub 移动端`],

  // ===== 新增：Respository template =====
  [`Template`, `模板`],
  [`Create a repository from the template`, `从此模板创建仓库`],

  // ===== 新增：Issues =====
  [`Assignees`, `负责人`],
  [`No one assigned`, `无人分配`],

  // ===== 新增：Commits =====
  [`View commit`, `查看提交`],
  [`Browse files`, `浏览文件`],

  // ===== 新增：Pages =====
  [`GitHub Pages`, `GitHub Pages`],
  [`Deploy from a branch`, `从分支部署`],
  [`Visit site`, `访问站点`],

  // ===== 新增：Codespaces =====
  [`Get started with GitHub Codespaces`, `开始使用 GitHub Codespaces`],
  [`New with options...`, `带选项新建...`],
  [`Codespaces`, `Codespaces`],
  [`Stop codespace`, `停止 Codespace`],

  // ===== 新增：Sponsors / Sponsor button =====
  [`Funding links`, `赞助链接`],

  // ===== 新增：Tabs =====
  [`Bookmarks`, `书签`],
  [`Recent`, `最近`],
];

const MutationObserverConfig = {
  childList: true,
  subtree: true,
  attributeFilter: ["data-label"],
  characterData: true,
};

const observer = new MutationObserver(function (mutations) {
  const treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ALL,
    {
      acceptNode: function (node) {
        if (
          node.nodeType === 3 ||
          (node.hasAttribute &&
            (node.hasAttribute("data-label") ||
              node.hasAttribute("placeholder") ||
              node.hasAttribute("value")))
        ) {
          return NodeFilter.FILTER_ACCEPT;
        } else {
          return NodeFilter.FILTER_SKIP;
        }
      },
    },
    false
  );
  let dataMap = new Map();
  allData.forEach(([key, val]) => {
    if (key && !dataMap.has(key)) {
      dataMap.set(key, val);
    }
  });
  let currentNode = treeWalker.currentNode;
  while (currentNode) {
    if (currentNode.nodeType === 3) {
      let key1 = currentNode.textContent
        .replace(/^\s*|\s*$/g, "")
        .replace(/\s+/g, " ");
      if (dataMap.has(key1)) currentNode.textContent = dataMap.get(key1);
    } else {
      let key2 = currentNode.getAttribute("data-label");
      if (key2 && dataMap.has(key2))
        currentNode.setAttribute("data-label", dataMap.get(key2));
      let key3 = currentNode.getAttribute("placeholder") || "";
      if ((key3 = key3.trim())) {
        if (dataMap.has(key3))
          currentNode.setAttribute("placeholder", dataMap.get(key3));
      }
      let key4 = currentNode.getAttribute("value");
      if (currentNode.tagName == "INPUT" && dataMap.has(key4)) {
        currentNode.setAttribute("value", dataMap.get(key4));
        let key5 = currentNode.getAttribute("data-signin-label");
        if (key5 && dataMap.has(key5))
          currentNode.setAttribute("data-signin-label", dataMap.get(key5));
        let key6 = currentNode.getAttribute("data-disable-with");
        if (key6 && dataMap.has(key6))
          currentNode.setAttribute("data-disable-with", dataMap.get(key6));
      }
    }
    currentNode = treeWalker.nextNode();
  }
});

observer.observe(document.body, MutationObserverConfig);
