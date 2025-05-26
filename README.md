# Fluxy 📊

A powerful npm package that analyzes your codebase and provides a comprehensive dashboard with detailed statistics and insights. Built with React.js and Material-UI, Fluxy helps developers understand their code quality, identify issues, and optimize their projects.


[![npm Beta version](https://badge.fury.io/js/fluxy.svg)](https://www.npmjs.com/package/@blazexsam/fluxy)
[![Downloads](https://img.shields.io/npm/dm/fluxy.svg)](https://npmjs.com/package/fluxy)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🚀 Features

### 📈 Code Analysis
- **Error Detection**: Identifies syntax errors and runtime issues
- **Warning Analysis**: Highlights potential problems and code smells
- **Lines of Code**: Comprehensive line counting with breakdown by file type
- **Unreachable Code**: Detects dead code and unused functions
- **Potential Fixes**: AI-powered suggestions for code improvements

### 📊 Interactive Dashboard
- **Visual Statistics**: Beautiful charts and graphs powered by Material-UI
- **Real-time Analysis**: Live updates as you modify your code
- **Detailed Reports**: Exportable reports in multiple formats
- **File-level Insights**: Drill down into specific files and functions
- **Historical Tracking**: Track code quality improvements over time

### 🔧 Developer Tools
- **Multi-language Support**: JavaScript, TypeScript, React, Node.js, and more
- **Customizable Rules**: Configure analysis rules to match your coding standards
- **Integration Ready**: Easy integration with CI/CD pipelines
- **Performance Metrics**: Code complexity and performance analysis

## 📦 Installation

### Global Installation (Recommended)
```bash
npm install -g fluxy
```

### Local Installation
```bash
npm install fluxy --save-dev
```

### Using with npx
```bash
npx fluxy analyze ./your-project
```

## 🛠️ Usage

### Basic Usage
```bash
# Analyze current directory
fluxy analyze

# Analyze specific directory
fluxy analyze ./src

# Generate dashboard
fluxy dashboard

# Run analysis and open dashboard
fluxy analyze --dashboard
```


## 📊 Dashboard Features

### Overview Tab
- **Project Summary**: High-level statistics and health score
- **Error/Warning Counters**: Quick overview of issues
- **Code Quality Trends**: Visual representation of improvements

### Detailed Analysis
- **File Explorer**: Navigate through your codebase
- **Issue Browser**: Filter and sort detected problems
- **Metrics Viewer**: Detailed statistics per file/function

### Reports
- **Exportable Data**: JSON, CSV, HTML formats
- **Custom Filters**: Generate reports for specific criteria
- **Historical Comparison**: Track changes over time

## 🔍 Supported Analysis Types

### Code Quality
- Syntax errors and parsing issues
- ESLint-style warnings and errors
- Code complexity metrics (Cyclomatic complexity)
- Maintainability index

### Code Structure
- Lines of code (total, blank, comment, source)
- Function and class counts
- Import/export analysis
- Dependency tracking

### Performance Issues
- Unreachable code detection
- Unused variable identification
- Dead code elimination suggestions
- Performance anti-patterns

### Best Practices
- Naming convention violations
- Code duplication detection
- Security vulnerability scanning
- Documentation coverage

## 🚀 API Usage

```javascript
const fluxy = require('fluxy');

// Analyze a directory
const results = await fluxy.analyze('./src', {
  includeWarnings: true,
  detectUnreachable: true
});

console.log(`Found ${results.errors.length} errors`);
console.log(`Lines of code: ${results.metrics.linesOfCode}`);

// Start dashboard programmatically
await fluxy.startDashboard({
  data: results,
  port: 3001
});
```

## 🔧 Integration

### GitHub Actions
```yaml
name: Code Quality Check
on: [push, pull_request]

jobs:
  quality-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: npm install -g fluxy
      - run: fluxy analyze --export json
      - uses: actions/upload-artifact@v2
        with:
          name: fluxy-report
          path: fluxy-reports/
```


## 📈 Sample Output

```bash
🔍 Fluxy Analysis Results
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Overview
  Total Files Analyzed: 45
  Lines of Code: 12,847
  Errors: 3
  Warnings: 12
  Code Quality Score: 87/100

⚠️  Issues Found
  • Unused variable 'tempData' in src/utils/helper.js:23
  • Unreachable code after return in src/components/Modal.jsx:45
  • Complex function detected in src/services/api.js:12 (complexity: 15)

🎯 Suggestions
  • Remove 3 unused variables
  • Eliminate 2 unreachable code blocks
  • Refactor 1 complex function

📋 Dashboard available at: http://localhost:3001
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Issues & Support

- **Bug Reports**: [GitHub Issues](https://github.com/Blazexsam27/fluxy/issues)
- **Feature Requests**: [GitHub Discussions](https://github.com/Blazexsam27/fluxy/discussions)
- **Documentation**: [Wiki](https://github.com/Blazexsam27/fluxy/wiki)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [React.js](https://reactjs.org/) and [Material-UI](https://mui.com/)
- Inspired by tools like ESLint, SonarQube, and CodeClimate
- Thanks to the open-source community for continuous feedback


---

**Made with ❤️ by [Blazexsam27](https://github.com/Blazexsam27)**

⭐ If Fluxy helped improve your code quality, please give it a star!
