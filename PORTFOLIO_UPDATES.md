# Portfolio Update Summary - Yuexuan Li

## Overview
This document summarizes all changes made to transform the portfolio template into a personalized portfolio for Yuexuan Li.

## Updated Files and Changes

### 1. Personal Information & Branding
- **package.json**: Updated project name to "yuexuan-li-portfolio" v1.0.0
- **public/index.html**: Updated title and meta tags with Yuexuan Li's information
- **public/manifest.json**: Updated app name to "Yuexuan Li - Portfolio"
- **README.md**: Customized introduction and description

### 2. Home Section
- **src/components/Home/Home.js**
  - Changed name from "SOUMYAJIT BEHERA" to "YUEXUAN LI"
  - Updated social media links (GitHub, LinkedIn, Email)
  - Removed Instagram link

- **src/components/Home/Home2.js**
  - Rewrote professional introduction highlighting:
    - Test Engineer role
    - Computational Neuroscience & Cognitive Robotics background
    - Expertise in Python, MATLAB, Java, SQL
    - Focus on automated testing, BCI, and machine learning

- **src/components/Home/Type.js**
  - Updated typing animation with roles:
    - Test Engineer
    - Computational Neuroscience Researcher
    - Data Analysis Specialist
    - BCI & Machine Learning Developer

### 3. About Section
- **src/components/About/AboutCard.js**
  - Updated personal information:
    - Name: Yuexuan Li
    - Location: Xi'an, China
    - Current role: Test Engineer at Beijing Longway Computer Application Technology Development Co., Ltd.
    - Education: MSc (University of Birmingham) and BSc (Xi'an University of Architecture and Technology)
    - Interests: Reading, Rock Climbing, Photography

- **src/components/About/Techstack.js**
  - Replaced tech stack with relevant technologies:
    - Core: Python, MATLAB, Java, SQL
    - Additional: C++, JavaScript, HTML5, CSS3, React.js
    - Tools: Git, JMeter, Postman

- **src/components/About/Toolstack.js**
  - Updated development tools:
    - VS Code
    - IntelliJ IDEA
    - Chrome DevTools

- **src/components/About/Github.js**
  - Updated GitHub username to "yuexuanli"

### 4. Projects Section (优化为3个项目 ✨)
- **src/components/Projects/Projects.js**
  - 精简为 3 个核心项目（工作经验 + 研究项目）:
    1. **Taikang Email Task Sorting Platform** 🏢
       - Work Experience: Test Engineer (Jun 2024 - Present)
       - 完整业务链自动化测试：邮件收发 → 智能分类 → 任务生成
       - 数据驱动测试 (CSV参数化 + Python脚本)
       - JMeter高级功能应用 (JSON提取、Groovy脚本、动态断言)
       - 性能基准建立、并发压力测试、响应时间追踪
       - 图片: TK_PROJECT.png
       - 按钮: "View Work Details" → GitHub链接

    2. **Brain Attention Control Mechanisms in High Autistic Traits** 🧠
       - Project Lead (Nov 2022 - Aug 2023)
       - 视觉搜索T-task范式模拟目标选择和干扰抑制
       - MATLAB + Bayesian DE-MCMC构建ADDM模型
       - 认知参数提取 (IOR, NDT, 选择率V)
       - 心理指标整合，分析高焦虑群体策略偏好
       - 图片: neuro.png
       - 按钮: "View Research Paper" → **PDF预览** (Dissertation_2418663_CNCR.pdf)

    3. **Interactive Music Therapy Device (BCI & ML)** 🎵
       - Project Member (Sep 2020 - Sep 2021)
       - OpenBCI采集脑电数据，ICA和FFT分析
       - 频域特征闭环控制：音乐输入 → 脑电采集 → 特征提取 → 动态调整
       - Raspberry Pi硬件控制器实时交互
       - 配对t检验验证系统有效性
       - 图片: EEG.png
       - 按钮: "View Project" → GitHub链接

- **src/components/Projects/ProjectCards.js**
  - ✨ **新功能：PDF预览按钮**
  - 添加 `pdfLink` 属性支持
  - 使用 PDF 图标 (`AiOutlineFilePdf`)
  - 自定义按钮文字 (`pdfButtonText`)
  - 优先显示PDF链接，无PDF时显示GitHub链接

### 5. Navigation & Footer
- **src/components/Navbar.js**
  - Removed blog navigation link
  - Updated GitHub repository link to yuexuanli/Portfolio

- **src/components/Footer.js**
  - Changed copyright to "Yuexuan Li" and "YL"
  - Updated all social media links (GitHub, LinkedIn, Email)

### 6. Resume Section
- **src/components/Resume/ResumeNew.js**
  - Updated PDF reference to "Yuexuan Li CV-EN_2025.pdf"

## Key Technical Details

### Contact Information
- **Email**: LorenaYxl@outlook.com (备用: LorenaYxl@163.com)
- **Mobile**: 18292683166
- **WeChat**: lyx319932362584
- **GitHub**: https://github.com/LorenaYuethuen
- **LinkedIn**: https://www.linkedin.com/in/yuexuan-li-ab84b1283
- **Instagram**: https://www.instagram.com/lorena_yuethuen/

### Technologies & Skills Highlighted
- **Programming Languages**: Python, MATLAB, Java, SQL, C++, JavaScript
- **Testing Tools**: JMeter, Postman
- **Research Tools**: OpenBCI, ICA, FFT, Bayesian modeling
- **Web Technologies**: React.js, HTML5, CSS3
- **Version Control**: Git
- **IDEs**: VS Code, IntelliJ IDEA

### Professional Focus Areas
1. Software Testing & Quality Assurance
2. Automated Testing Frameworks
3. Performance Testing & Optimization
4. Computational Neuroscience Research
5. Brain-Computer Interfaces
6. Machine Learning Applications
7. Data Analysis & Visualization

## Education Background
- **MSc in Computational Neuroscience and Cognitive Robotics** - University of Birmingham (Sep 2022 - Dec 2023)
- **BSc in Computer Science and Technology** - Xi'an University of Architecture and Technology (Sep 2018 - Jul 2022)

## Work Experience
- **Test Engineer** at Beijing Longway Computer Application Technology Development Co., Ltd. (Jun 2024 - Present)
  - Focus: Full-chain automated testing, data-driven testing, performance optimization

## Latest Updates (已完成 ✅)

### 2024-11-05 技能栈排版优化 v4 🎨
- ✅ 重新组织技能栈展示，按照4个分类清晰呈现
- ✅ 添加分类标题和间距，提升可读性
- ✅ 清理About.js中未使用的Github组件
- ✅ 修复所有ESLint警告

**新的技能栈分类：**
1. **Research & Data Analysis** - Python, MATLAB, SQL
2. **Software Development** - Java, C++, JavaScript
3. **Web Technologies** - HTML5, CSS3, React.js
4. **Testing & Tools** - JMeter, Postman, Git

### 2024-11-05 项目展示优化 v3 ✨
- ✅ 精简项目为3个核心项目（工作经验 + 2个研究项目）
- ✅ 添加PDF预览功能（脑注意力研究论文可直接预览）
- ✅ 优化项目描述，突出时间线和关键技术
- ✅ 使用指定图片：TK_PROJECT.png, neuro.png, EEG.png
- ✅ 创建灵活的按钮系统（PDF预览 vs GitHub链接）

### 2024-11-05 联系方式更新 v2
- ✅ 更新 GitHub 用户名至 `LorenaYuethuen`
- ✅ 更新 LinkedIn 完整链接至 `yuexuan-li-ab84b1283`
- ✅ 添加 Instagram 链接: `lorena_yuethuen`
- ✅ 更新主邮箱至 `LorenaYxl@outlook.com`
- ✅ 创建微信二维码弹窗组件 `WechatModal.js`
- ✅ 微信和邮箱按钮独立分开
- ✅ 清理所有未使用的imports
- ✅ 修复所有ESLint警告

### 社交媒体按钮 (5个)
现在页面上显示五个社交媒体按钮:
1. **GitHub** 🐙 - 链接到 https://github.com/LorenaYuethuen
2. **LinkedIn** 💼 - 链接到完整LinkedIn档案
3. **Instagram** 📷 - 链接到 Instagram 账号
4. **微信** 💬 - **点击弹出二维码图片**，扫码添加微信 (lyx319932362584)
5. **邮箱** ✉️ - 点击发送邮件至 LorenaYxl@outlook.com

### 新增功能：微信二维码弹窗
- 创建了独立的 `WechatModal` 组件
- 点击微信图标自动弹出模态框显示二维码
- 支持深色主题，与网站风格统一
- 显示微信号提示信息
- 自适应 Home 页面和 Footer 的不同样式需求

## Next Steps
1. ✅ GitHub username "LorenaYuethuen" 已更新
2. ✅ LinkedIn profile URL 已更新为完整链接
3. ✅ Instagram 账号已添加
4. ⚠️ 考虑为每个项目创建独立的GitHub仓库链接
5. ⚠️ 替换 `src/Assets/Projects/` 目录中的项目图片（如需要）
6. ✅ 运行 `npm start` 测试本地效果
7. 🚀 部署到你喜欢的平台 (Vercel, Netlify, GitHub Pages等)

## Running the Portfolio
```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Notes
- All linter checks passed ✅
- All imports cleaned up ✅
- No compilation errors ✅
- Social media links use placeholder usernames - update with your actual profiles
- Project images reference existing placeholder images - consider adding your own

---
**Last Updated**: November 5, 2025 (技能栈排版优化)
**Version**: 1.0.4
**Status**: ✅ 所有功能正常，无ESLint错误
**New Features**: 
- 微信二维码弹窗组件
- PDF预览按钮（研究论文可直接查看）
- 3个精选核心项目展示
- 分类式技能栈展示（4个类别）

