const styles = {
  section: 'max-w-4xl mx-auto px-6 py-16',
  title: 'text-3xl font-bold text-heading mb-2',
  subtitle: 'text-sm text-muted mb-4',
  divider: 'w-16 h-1 bg-accent rounded mb-8',
  card: 'bg-card border border-border rounded-xl p-6',
  label: 'bg-accent/10 text-accent-light text-xs font-mono px-2 py-0.5 rounded',
  tag: 'bg-surface border border-border text-muted text-xs px-2 py-0.5 rounded',
}

function FlowArrow() {
  return <div className="text-accent text-2xl mx-2">&darr;</div>
}

function Box({ children, color = 'accent', label }) {
  const colors = {
    accent: 'border-accent/30 bg-accent/5',
    green: 'border-green-500/30 bg-green-500/5',
    blue: 'border-blue-500/30 bg-blue-500/5',
    orange: 'border-orange-500/30 bg-orange-500/5',
  }
  return (
    <div className={`${colors[color]} border rounded-xl p-5 text-center`}>
      {label && <div className="text-xs text-muted mb-1">{label}</div>}
      <div className="text-white font-semibold">{children}</div>
    </div>
  )
}

function Cmd({ children }) {
  return <code className="bg-surface border border-border text-accent-light text-sm px-3 py-1 rounded font-mono">{children}</code>
}

function CmdCard({ cmd, desc, detail }) {
  return (
    <div className="bg-card border border-border rounded-xl p-5">
      <div className="flex items-center gap-3 mb-2">
        <Cmd>{cmd}</Cmd>
        <span className="text-sm text-heading">{desc}</span>
      </div>
      {detail && <p className="text-xs text-muted leading-relaxed">{detail}</p>}
    </div>
  )
}

export default function Guide({ onBack }) {
  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
        <span className="text-accent font-bold text-lg">uDiT</span>
        <button onClick={onBack} className="text-sm text-muted hover:text-heading transition-colors cursor-pointer">&larr; 返回论文</button>
      </div>

      {/* Hero */}
      <section className="text-center px-6 pb-16">
        <div className="inline-flex items-center gap-2 bg-accent/10 text-accent-light text-xs font-mono px-4 py-1.5 rounded-full mb-6 border border-accent/20">
          写给初学者的指南
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-heading mb-4">
          前端工具到底在干什么
        </h1>
        <p className="text-muted max-w-2xl mx-auto text-sm">
          这个网站是用 React + Tailwind CSS 写的，但中间经过了好几步"翻译"才变成浏览器能看懂的东西。
          下面把这些步骤拆开讲清楚。
        </p>
      </section>

      {/* 1. 项目长什么样 */}
      <section className={styles.section}>
        <h2 className={styles.title}>1. 项目里都有什么文件</h2>
        <div className={styles.divider} />
        <div className={styles.card}>
          <div className="font-mono text-sm text-muted leading-loose whitespace-pre">
            <span className="text-accent-light">udit/</span>
            <br />  <span className="text-green">src/</span>              &lt;- <span className="text-body">你写代码的地方</span>
            <br />    App.jsx        <span className="text-muted"># 网页内容（React 组件）</span>
            <br />    index.css      <span className="text-muted"># 样式</span>
            <br />    main.jsx       <span className="text-muted"># 入口文件</span>
            <br />  <span className="text-green">public/</span>            &lt;- <span className="text-body">静态文件（图片等）</span>
            <br />  <span className="text-green">dist/</span>              &lt;- <span className="text-body">打包后的成品（自动生成）</span>
            <br />  <span className="text-green">package.json</span>       &lt;- <span className="text-body">项目的"说明书"</span>
            <br />  <span className="text-green">node_modules/</span>       &lt;- <span className="text-body">下载好的工具包（自动生成）</span>
          </div>
        </div>
      </section>

      {/* 2. 整体流程 */}
      <section className={styles.section}>
        <h2 className={styles.title}>2. 从写代码到网页的完整流程</h2>
        <div className={styles.divider} />
        <div className="space-y-1 flex flex-col items-center">
          <Box color="accent" label="第 1 步">你写 .jsx / .css 文件</Box>
          <FlowArrow />
          <Box color="blue" label="第 2 步">Vite 读取你的代码</Box>
          <FlowArrow />
          <Box color="orange" label="第 3 步">Vite 编译转换</Box>
          <div className="text-xs text-muted text-center max-w-md">JSX &rarr; 普通 JS，Tailwind &rarr; 普通 CSS</div>
          <FlowArrow />
          <Box color="green" label="第 4 步">输出到 dist/ 目录</Box>
          <div className="text-xs text-muted text-center max-w-md">一堆源文件 &rarr; 一个 index.html + 一个 index.js + 一个 index.css</div>
          <FlowArrow />
          <Box color="accent" label="第 5 步">部署到 GitHub Pages</Box>
          <div className="text-xs text-muted text-center max-w-md">dist/ 里的纯静态文件直接上线</div>
        </div>
      </section>

      {/* 3. 每个命令 */}
      <section className={styles.section}>
        <h2 className={styles.title}>3. 每个命令在干什么</h2>
        <div className={styles.divider} />
        <div className="space-y-4">

          <CmdCard
            cmd="npm install"
            desc="下载所有需要的工具"
            detail="读取 package.json 里的依赖列表，把所有工具包下载到 node_modules/ 文件夹。新 clone 项目后第一件事就是跑这个。"
          />

          <CmdCard
            cmd="npm run dev"
            desc="启动开发服务器"
            detail="运行 package.json 里 dev 对应的命令（vite）。启动一个本地服务器，你改代码它会自动刷新浏览器。地址通常是 http://localhost:5173"
          />

          <CmdCard
            cmd="npm run build"
            desc="打包成最终网页"
            detail="运行 package.json 里 build 对应的命令（vite build）。把所有源文件编译打包压缩到 dist/ 文件夹，这些就是可以部署上线的纯静态文件。"
          />

          <CmdCard
            cmd="npm run preview"
            desc="本地预览打包效果"
            detail="在本地启动一个服务器，展示 dist/ 里的内容，效果和部署到线上完全一样。用来在上线前检查有没有问题。"
          />
        </div>
      </section>

      {/* 4. 每个工具 */}
      <section className={styles.section}>
        <h2 className={styles.title}>4. 这些工具分别负责什么</h2>
        <div className={styles.divider} />
        <div className="grid md:grid-cols-2 gap-4">
          <div className={styles.card}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">📦</span>
              <span className="text-heading font-bold">npm</span>
              <span className={styles.label}>包管理器</span>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              Node Package Manager。就像手机的应用商店——你要用别人写的工具（比如 React、Vite），
              用 npm install 一键下载。package.json 就是你的"已安装应用列表"。
            </p>
          </div>

          <div className={styles.card}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">⚡</span>
              <span className="text-heading font-bold">Vite</span>
              <span className={styles.label}>构建工具</span>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              读你的 .jsx / .css 文件，编译成浏览器能识别的普通 JS 和 CSS，
              然后打包压缩。开发时提供热更新（改了代码页面自动刷新），
              上线前做最终打包。
            </p>
          </div>

          <div className={styles.card}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">⚛️</span>
              <span className="text-heading font-bold">React</span>
              <span className={styles.label}>UI 框架</span>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              帮你把网页拆成一个个小组件（Component）。比如这个网站的 Hero、Architecture、Footer
              都是独立组件，各管各的代码，拼起来就是完整页面。改一处不影响别处。
            </p>
          </div>

          <div className={styles.card}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🎨</span>
              <span className="text-heading font-bold">Tailwind CSS</span>
              <span className={styles.label}>CSS 工具库</span>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              不用自己写 CSS 类名。直接在 HTML 里用现成的工具类，
              比如 text-white 就是白色文字，bg-accent 就是紫色背景。
              又快又整齐，不需要切换到 CSS 文件去写样式。
            </p>
          </div>
        </div>
      </section>

      {/* 5. 关系图 */}
      <section className={styles.section}>
        <h2 className={styles.title}>5. 它们之间的关系</h2>
        <div className={styles.divider} />
        <div className={styles.card}>
          <div className="text-center space-y-4">
            <div className="text-xs text-muted">你直接打交道的</div>
            <div className="flex justify-center gap-3">
              <span className="bg-green/10 border border-green/30 text-green px-4 py-2 rounded-lg text-sm font-mono">npm run dev</span>
              <span className="bg-green/10 border border-green/30 text-green px-4 py-2 rounded-lg text-sm font-mono">npm run build</span>
              <span className="bg-green/10 border border-green/30 text-green px-4 py-2 rounded-lg text-sm font-mono">npm install</span>
            </div>
            <div className="text-accent text-lg">&darr; 调用了 &darr;</div>
            <div className="text-xs text-muted">背后实际干活的</div>
            <div className="flex justify-center gap-3">
              <span className="bg-accent/10 border border-accent/30 text-accent-light px-4 py-2 rounded-lg text-sm">Vite</span>
              <span className="bg-accent/10 border border-accent/30 text-accent-light px-4 py-2 rounded-lg text-sm">React</span>
              <span className="bg-accent/10 border border-accent/30 text-accent-light px-4 py-2 rounded-lg text-sm">Tailwind</span>
            </div>
            <div className="text-accent text-lg">&darr; 最终产出 &darr;</div>
            <div className="text-xs text-muted">浏览器真正运行的</div>
            <div className="flex justify-center gap-3">
              <span className="bg-white border border-border text-body px-4 py-2 rounded-lg text-sm font-mono">index.html</span>
              <span className="bg-white border border-border text-body px-4 py-2 rounded-lg text-sm font-mono">index.js</span>
              <span className="bg-white border border-border text-body px-4 py-2 rounded-lg text-sm font-mono">index.css</span>
            </div>
            <div className="text-xs text-muted mt-2">就是最普通的 HTML + JS + CSS，什么工具都不用也能跑</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center">
        <button onClick={onBack} className="text-sm text-accent hover:text-accent-light transition-colors cursor-pointer">&larr; 返回论文页面</button>
      </footer>
    </div>
  )
}
