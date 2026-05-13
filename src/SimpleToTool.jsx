function Card({ children, className = '' }) {
  return <div className={`bg-card border border-border rounded-xl p-6 ${className}`}>{children}</div>
}

function Pill({ children }) {
  return <span className="bg-accent/10 text-accent-light text-xs font-mono px-2.5 py-0.5 rounded-full border border-accent/20">{children}</span>
}

export default function SimpleToTool({ onBack }) {
  return (
    <div className="min-h-screen bg-surface">
      {/* Top bar */}
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <span className="text-accent font-bold text-lg">uDiT</span>
        <button onClick={onBack} className="text-sm text-muted hover:text-heading transition-colors cursor-pointer">&larr; 返回论文</button>
      </div>

      {/* Hero */}
      <section className="text-center px-6 pb-12">
        <Pill>写给初学者的对比</Pill>
        <h1 className="text-4xl md:text-5xl font-bold text-heading mt-5 mb-3">
          从写简单网页到用前端工具
        </h1>
        <p className="text-muted max-w-2xl mx-auto text-sm">
          本质是一样的——最终都是 HTML + CSS + JS。区别在于：写的时候用什么方式组织代码。
        </p>
      </section>

      {/* Side by side comparison */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left: simple */}
          <Card className="border-2 border-blue-400/40">
            <div className="text-center mb-4">
              <span className="text-3xl">📄</span>
              <h2 className="text-heading font-bold text-lg mt-2">写简单网页</h2>
              <p className="text-xs text-muted">一个文件搞定一切</p>
            </div>
            <div className="bg-surface rounded-lg p-4 font-mono text-xs text-body border border-border">
              <span className="text-blue-500">my-page/</span>
              <br />  <span className="text-green">index.html</span>  <span className="text-muted"># HTML 结构 + CSS 样式 + JS 代码</span>
              <br />  <span className="text-muted">（就这一个文件）</span>
            </div>
            <div className="mt-4 space-y-2 text-xs text-body">
              <div className="flex items-start gap-2">
                <span className="text-green shrink-0">✓</span>
                <span>直接在浏览器打开就能看</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green shrink-0">✓</span>
                <span>改代码 → 手动刷新浏览器</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green shrink-0">✓</span>
                <span>上传到服务器直接部署</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-400 shrink-0">✗</span>
                <span>代码多了难维护（全挤在一个文件）</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-400 shrink-0">✗</span>
                <span>没有"组件"概念，改一处可能影响别处</span>
              </div>
            </div>
          </Card>

          {/* Right: with tools */}
          <Card className="border-2 border-accent/40">
            <div className="text-center mb-4">
              <span className="text-3xl">🏗️</span>
              <h2 className="text-heading font-bold text-lg mt-2">用前端工具</h2>
              <p className="text-xs text-muted">React + Vite + Tailwind</p>
            </div>
            <div className="bg-surface rounded-lg p-4 font-mono text-xs text-body border border-border">
              <span className="text-accent-light">my-app/</span>
              <br />  <span className="text-green">src/</span>
              <br />    App.jsx      <span className="text-muted"># 拆成组件</span>
              <br />    Header.jsx   <span className="text-muted"># 每个组件单独一个文件</span>
              <br />    Footer.jsx
              <br />    index.css    <span className="text-muted"># 样式</span>
              <br />  package.json    <span className="text-muted"># 依赖清单</span>
            </div>
            <div className="mt-4 space-y-2 text-xs text-body">
              <div className="flex items-start gap-2">
                <span className="text-green shrink-0">✓</span>
                <span>代码按组件拆分，好维护</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green shrink-0">✓</span>
                <span>改代码自动刷新浏览器（热更新）</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green shrink-0">✓</span>
                <span>Tailwind 写样式快，不用切文件</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-400 shrink-0">✗</span>
                <span>需要先安装工具（npm install）</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-400 shrink-0">✗</span>
                <span>需要构建后才能部署（npm run build）</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* The key insight */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <Card className="border-2 border-green/30 bg-green/5">
          <div className="text-center mb-6">
            <h2 className="text-heading font-bold text-xl">到底有什么区别？一句话说清</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl mb-2">📝</div>
              <div className="text-heading font-semibold text-sm mb-1">写代码时</div>
              <p className="text-xs text-muted">简单网页：一个 HTML 文件混着写<br />用工具：拆成多个组件文件，各管各的</p>
            </div>
            <div className="md:border-x border-border md:px-4">
              <div className="text-3xl mb-2">⚙️</div>
              <div className="text-heading font-semibold text-sm mb-1">开发时</div>
              <p className="text-xs text-muted">简单网页：浏览器打开就看<br />用工具：需要启动 dev server，但有热更新</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🚀</div>
              <div className="text-heading font-semibold text-sm mb-1">上线时</div>
              <p className="text-xs text-muted">简单网页：直接上传文件<br />用工具：npm run build 打包后再上传 dist/</p>
            </div>
          </div>
        </Card>
      </section>

      {/* Visual flow comparison */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-heading mb-2">完整流程对比</h2>
        <div className="w-12 h-1 bg-accent rounded mb-8" />

        <Card className="mb-6">
          <h3 className="text-heading font-semibold text-sm mb-4">简单网页的流程</h3>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="bg-blue-100 text-blue-700 border border-blue-300 px-3 py-1.5 rounded-lg font-mono dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700">写 index.html</span>
            <span className="text-muted">&rarr;</span>
            <span className="bg-blue-100 text-blue-700 border border-blue-300 px-3 py-1.5 rounded-lg font-mono dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700">浏览器打开</span>
            <span className="text-muted">&rarr;</span>
            <span className="bg-blue-100 text-blue-700 border border-blue-300 px-3 py-1.5 rounded-lg font-mono dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700">看效果</span>
            <span className="text-muted">&rarr;</span>
            <span className="bg-blue-100 text-blue-700 border border-blue-300 px-3 py-1.5 rounded-lg font-mono dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700">上传服务器</span>
            <span className="text-green text-lg ml-1">✓</span>
          </div>
        </Card>

        <Card>
          <h3 className="text-heading font-semibold text-sm mb-4">用前端工具的流程</h3>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="bg-accent/10 text-accent-light border border-accent/30 px-3 py-1.5 rounded-lg font-mono">写 .jsx 组件</span>
            <span className="text-muted">&rarr;</span>
            <span className="bg-accent/10 text-accent-light border border-accent/30 px-3 py-1.5 rounded-lg font-mono">npm run dev</span>
            <span className="text-muted">↓</span>
            <span className="bg-accent/10 text-accent-light border border-accent/30 px-3 py-1.5 rounded-lg font-mono">Vite 编译 + 热更新</span>
            <span className="text-muted">&rarr;</span>
            <span className="bg-accent/10 text-accent-light border border-accent/30 px-3 py-1.5 rounded-lg font-mono">浏览器看效果</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs mt-3">
            <span className="text-muted">（开发完）</span>
            <span className="text-muted">&rarr;</span>
            <span className="bg-accent/10 text-accent-light border border-accent/30 px-3 py-1.5 rounded-lg font-mono">npm run build</span>
            <span className="text-muted">&rarr;</span>
            <span className="bg-accent/10 text-accent-light border border-accent/30 px-3 py-1.5 rounded-lg font-mono">得到 dist/</span>
            <span className="text-muted">&rarr;</span>
            <span className="bg-accent/10 text-accent-light border border-accent/30 px-3 py-1.5 rounded-lg font-mono">部署 dist/ 到服务器</span>
            <span className="text-green text-lg ml-1">✓</span>
          </div>
        </Card>
      </section>

      {/* Analogy */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-heading mb-2">一个比喻</h2>
        <div className="w-12 h-1 bg-accent rounded mb-8" />

        <Card>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">✍️</span>
                <span className="text-heading font-bold">写简单网页 = 手写信</span>
              </div>
              <p className="text-xs text-body leading-relaxed">
                拿出纸笔直接写，写完装进信封就能寄出去。简单直接，不需要任何工具。
                但如果你写错了，就得重写一整页。
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">💻</span>
                <span className="text-heading font-bold">用前端工具 = 用 Word 写文档</span>
              </div>
              <p className="text-xs text-body leading-relaxed">
                你得先安装 Word（npm install）。写的时候自动保存、自动检查错别字（热更新）。
                写完后点"导出 PDF"（npm run build），发给别人。虽然多了步骤，
                但修改方便、排版漂亮、能协作。
              </p>
            </div>
          </div>
          <div className="mt-6 bg-surface rounded-lg p-4 border border-border">
            <p className="text-xs text-body text-center">
              <span className="text-accent font-semibold">关键是：</span>
              不管是手写信还是 Word，最终别人收到的都是"信"（HTML + CSS + JS）。
              只是你写的方式不一样。
            </p>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center">
        <button onClick={onBack} className="text-sm text-accent hover:text-accent-light transition-colors cursor-pointer">&larr; 返回论文页面</button>
      </footer>
    </div>
  )
}
