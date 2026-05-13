import { useState } from 'react'

const ARCH_FIG = '/udit/images/6c0c087566e9554aac2b986525fb058d73cd39bc17adaca0d4ee95b2b9d4cec0.jpg'
const ARCH_FIG2 = '/udit/images/acda007a34cb35de8467e3fe0555fe9cfd0e9550572e648345cbaa10dda18d7e.jpg'
const PATCHIFY_FIG = '/udit/images/3d9b02b491461b939a6cee6836fe4a15b97807906c448f0ec01619d33b572357.jpg'
const COND_FIG = '/udit/images/6221ad2c2e51fba8891ab99597f561347db739f65a5da142598891d17a5d1ad1.jpg'
const SCATTER_FIG = '/udit/images/b9991dfbff7738be252d7f13ba159df202d20fa8c27b20dd70b39630f145ea81.jpg'
const SAMPLE_FIG = '/udit/images/5441959db9003e9c58836ed5914586a5b276a9cfc35d795dd4c41cd07673e7ac.jpg'
const HERO_FIG = '/udit/images/135d9d545ae5723e87e16cf2ff9e2d10542b166d2d729988454a29116bce4127.jpg'
const COMPUTE_FIG = '/udit/images/c16b3a3b25728bc80306113775f3cc65690fd39b799297d6e508c878bfd8eafc.jpg'

function Section({ id, title, children, className = '' }) {
  return (
    <section id={id} className={`max-w-6xl mx-auto px-6 py-24 ${className}`}>
      <h2 className="text-3xl font-bold text-heading mb-2">{title}</h2>
      <div className="w-16 h-1 bg-accent rounded mb-10" />
      {children}
    </section>
  )
}

function Card({ children, className = '' }) {
  return (
    <div className={`bg-card border border-border rounded-xl p-6 ${className}`}>
      {children}
    </div>
  )
}

function Nav() {
  const links = [
    { href: '#abstract', label: 'Abstract' },
    { href: '#architecture', label: 'Architecture' },
    { href: '#design', label: 'Design Space' },
    { href: '#results', label: 'Results' },
    { href: '#takeaways', label: 'Takeaways' },
  ]
  return (
    <nav className="fixed top-0 w-full bg-surface/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <span className="text-accent font-bold text-lg">uDiT</span>
        <div className="flex gap-6 text-sm text-muted">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-heading transition-colors">{l.label}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-accent/10 text-accent-light text-xs font-mono px-4 py-1.5 rounded-full mb-6 border border-accent/20">
          ICCV 2023
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-heading leading-tight mb-4">
          Scalable Diffusion Models<br />with <span className="text-accent">Transformers</span>
        </h1>
        <p className="text-lg text-muted mb-2">
          William Peebles<span className="text-xs text-muted ml-1">UC Berkeley</span>
          <span className="mx-3 text-border">·</span>
          Saining Xie<span className="text-xs text-muted ml-1">New York University</span>
        </p>
        <div className="mt-12 max-w-2xl mx-auto">
          <Card className="text-left">
            <p className="text-sm text-muted leading-relaxed">
              We explore a new class of diffusion models based on the transformer architecture. We train latent diffusion models of images, replacing the commonly-used U-Net backbone with a transformer that operates on latent patches. We analyze the scalability of our Diffusion Transformers (DiTs) through the lens of forward pass complexity as measured by Gflops. We find that DiTs with higher Gflops—through increased transformer depth/width or increased number of input tokens—consistently have lower FID.
            </p>
          </Card>
        </div>
        <div className="mt-8 flex gap-4 justify-center">
          <a href="#architecture" className="bg-accent hover:bg-accent-light text-white px-6 py-2.5 rounded-lg font-medium transition-colors text-sm">
            Explore the Paper &rarr;
          </a>
          <a href="https://arxiv.org/abs/2212.09748" target="_blank" className="border border-border hover:border-accent/50 text-muted hover:text-heading px-6 py-2.5 rounded-lg font-medium transition-colors text-sm">
            arxiv.org
          </a>
        </div>
      </div>
      <div className="mt-16 max-w-4xl mx-auto">
        <img src={HERO_FIG} alt="DiT samples" className="rounded-xl border border-border w-full" />
        <p className="text-xs text-muted mt-2">Figure 1: Diffusion models with transformer backbones achieve state-of-the-art image quality. Selected samples from DiT-XL/2 models trained on ImageNet.</p>
      </div>
    </section>
  )
}

function Architecture() {
  return (
    <Section id="architecture" title="Architecture">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <img src={ARCH_FIG} alt="DiT architecture" className="rounded-xl border border-border w-full" />
          <img src={ARCH_FIG2} alt="DiT blocks detail" className="rounded-xl border border-border w-full mt-4" />
          <p className="text-xs text-muted mt-2">Figure 3: The Diffusion Transformer (DiT) architecture.</p>
        </div>
        <div className="space-y-4">
          <Card>
            <h3 className="text-heading font-semibold mb-2">Latent Diffusion Pipeline</h3>
            <p className="text-sm text-muted leading-relaxed">
              DiT operates in VAE latent space (downsample factor 8). For a 256×256 RGB image, the VAE encoder produces a 32×32×4 latent. DiT processes this latent — not raw pixels — then the VAE decoder reconstructs the image.
            </p>
          </Card>
          <Card>
            <h3 className="text-heading font-semibold mb-2">Patchify</h3>
            <p className="text-sm text-muted leading-relaxed">
              The spatial latent is divided into patches of size p×p (p ∈ {2,4,8}), linearly embedded into a sequence of T = (32/p)² tokens with hidden dimension d. Smaller p means more tokens and higher Gflops.
            </p>
          </Card>
          <Card>
            <h3 className="text-heading font-semibold mb-2">DiT Blocks</h3>
            <p className="text-sm text-muted leading-relaxed">
              A sequence of N transformer blocks processes the token sequence. Each block incorporates conditioning on timestep t and class label c. The best variant uses adaLN-Zero — adaptive layer norm with zero-init residuals.
            </p>
          </Card>
          <Card>
            <h3 className="text-heading font-semibold mb-2">Decoder</h3>
            <p className="text-sm text-muted leading-relaxed">
              After the final DiT block, layer norm + linear decode maps each token back to a p×p×2C tensor (noise prediction ε_θ and covariance Σ_θ), then rearranged to original spatial layout.
            </p>
          </Card>
        </div>
      </div>
    </Section>
  )
}

function DesignSpace() {
  const configs = [
    { name: 'DiT-S', layers: 12, hidden: 384, heads: 6, gflops: 1.4 },
    { name: 'DiT-B', layers: 12, hidden: 768, heads: 12, gflops: 5.6 },
    { name: 'DiT-L', layers: 24, hidden: 1024, heads: 16, gflops: 19.7 },
    { name: 'DiT-XL', layers: 28, hidden: 1152, heads: 16, gflops: 29.1 },
  ]

  return (
    <Section id="design" title="Design Space">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <Card>
            <h3 className="text-heading font-semibold mb-3">Patch Size</h3>
            <p className="text-sm text-muted mb-4">Controls token count and Gflops without affecting parameters.</p>
            <div className="grid grid-cols-3 gap-3">
              {[2, 4, 8].map(p => (
                <div key={p} className="bg-surface rounded-lg p-3 text-center border border-border">
                  <div className="text-2xl font-bold text-accent">p={p}</div>
                  <div className="text-xs text-muted mt-1">{p === 2 ? '256' : p === 4 ? '64' : '16'} tokens</div>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <h3 className="text-heading font-semibold mb-3">Conditioning Mechanisms</h3>
            <p className="text-sm text-muted mb-4">Four ways to inject timestep & class label conditioning into DiT blocks.</p>
            <div className="space-y-3">
              {[
                { name: 'In-Context', desc: 'Append t & c as extra tokens in input sequence' },
                { name: 'Cross-Attention', desc: 'Separate conditioning sequence with cross-attention layer (+15% Gflops)' },
                { name: 'adaLN', desc: 'Regress scale & shift for layer norm from t + c embedding' },
                { name: 'adaLN-Zero', desc: 'adaLN + zero-init residual scaling; best quality & most efficient' },
              ].map(c => (
                <div key={c.name} className="flex items-start gap-3">
                  <div className="bg-accent/10 text-accent-light text-xs font-mono px-2 py-0.5 rounded shrink-0 mt-0.5">{c.name}</div>
                  <p className="text-xs text-muted">{c.desc}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
        <div className="space-y-4">
          <Card>
            <h3 className="text-heading font-semibold mb-3">Model Configurations</h3>
            <p className="text-sm text-muted mb-4">Following ViT model configs, scaling N, d, and attention heads jointly.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-muted text-xs uppercase">
                    <th className="text-left py-2 pr-4">Model</th>
                    <th className="text-right py-2 px-2">Layers</th>
                    <th className="text-right py-2 px-2">Hidden</th>
                    <th className="text-right py-2 px-2">Heads</th>
                    <th className="text-right py-2 pl-2">Gflops</th>
                  </tr>
                </thead>
                <tbody>
                  {configs.map(c => (
                    <tr key={c.name} className="border-b border-border/50 text-body">
                      <td className="py-3 pr-4 font-mono text-accent">{c.name}</td>
                      <td className="text-right py-3 px-2">{c.layers}</td>
                      <td className="text-right py-3 px-2">{c.hidden}</td>
                      <td className="text-right py-3 px-2">{c.heads}</td>
                      <td className="text-right py-3 pl-2">{c.gflops}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <Card>
            <img src={PATCHIFY_FIG} alt="Patchify illustration" className="rounded-lg border border-border w-full" />
            <p className="text-xs text-muted mt-2">Figure 4: Patchify converts spatial latent to patch sequence with positional embeddings.</p>
          </Card>
        </div>
      </div>
    </Section>
  )
}

function Results() {
  return (
    <Section id="results" title="Scaling Results">
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="md:col-span-2">
          <h3 className="text-heading font-semibold mb-3">Gflops vs. FID</h3>
          <p className="text-sm text-muted mb-4">12 DiT models trained across configs (S/B/L/XL) and patch sizes (2/4/8). Strong negative correlation: more Gflops yields lower FID.</p>
          <img src={SCATTER_FIG} alt="Gflops vs FID" className="rounded-lg border border-border w-full" />
          <p className="text-xs text-muted mt-2">Figure 8: Transformer Gflops are strongly correlated with FID.</p>
        </Card>

        <Card>
          <h3 className="text-heading font-semibold mb-3">Conditioning Comparison</h3>
          <img src={COND_FIG} alt="Conditioning strategies" className="rounded-lg border border-border w-full mb-3" />
          <p className="text-xs text-muted">Figure 5: adaLN-Zero outperforms all other conditioning strategies at all training stages, while being the most compute-efficient.</p>
        </Card>

        <Card>
          <h3 className="text-heading font-semibold mb-3">Visual Scaling</h3>
          <img src={SAMPLE_FIG} alt="Scaling visualization" className="rounded-lg border border-border w-full mb-3" />
          <p className="text-xs text-muted">Figure 7: Same latent noise, same label — increasing Gflops dramatically improves visual quality.</p>
        </Card>

        <Card className="md:col-span-2">
          <h3 className="text-heading font-semibold mb-3">State-of-the-Art on ImageNet 256×256</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-muted text-xs uppercase">
                  <th className="text-left py-2 pr-4">Model</th>
                  <th className="text-right py-2 px-2">FID↓</th>
                  <th className="text-right py-2 px-2">sFID↓</th>
                  <th className="text-right py-2 px-2">IS↑</th>
                  <th className="text-right py-2 px-2">Prec↑</th>
                  <th className="text-right py-2 pl-2">Rec↑</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['BigGAN-deep', '6.95', '7.36', '171.4', '0.87', '0.28'],
                  ['ADM-G, ADM-U', '3.94', '6.14', '215.84', '0.83', '0.53'],
                  ['LDM-4-G', '3.60', '—', '247.67', '0.87', '0.48'],
                  ['DiT-XL/2', '9.62', '6.85', '121.50', '0.67', '0.67'],
                  ['DiT-XL/2-G (cfg=1.5)', '2.27', '4.60', '278.24', '0.83', '0.57'],
                ].map(row => (
                  <tr key={row[0]} className={`border-b border-border/50 text-body ${row[0].startsWith('DiT-XL/2-G') ? 'bg-accent/5' : ''}`}>
                    <td className="py-3 pr-4 font-mono text-accent-light">{row[0]}</td>
                    {row.slice(1).map((v, i) => (
                      <td key={i} className={`text-right py-3 px-2 ${row[0].startsWith('DiT-XL/2-G') && i === 0 ? 'text-green-400 font-bold' : ''}`}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted mt-2">Table 2: DiT-XL/2 with classifier-free guidance achieves state-of-the-art 2.27 FID, outperforming all prior diffusion models.</p>
        </Card>

        <Card className="md:col-span-2">
          <h3 className="text-heading font-semibold mb-3">Compute Efficiency</h3>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <img src={COMPUTE_FIG} alt="Compute efficiency" className="rounded-lg border border-border w-full" />
              <p className="text-xs text-muted mt-2">Figure 9: Larger DiT models use training compute more efficiently.</p>
            </div>
            <div className="space-y-3">
              <Card className="border-green-500/30 bg-green-500/5">
                <p className="text-sm text-muted">DiT-XL/2 (118.6 Gflops) achieves <span className="text-green-400 font-bold">2.27 FID</span> — compared to ADM (1120 Gflops, 3.94 FID). That's <span className="text-white">~10× less compute</span> for better quality.</p>
              </Card>
              <Card>
                <p className="text-sm text-muted">Small models cannot compensate with more sampling steps. DiT-L/2 using 1000 steps (80.7 Tflops) still underperforms DiT-XL/2 using just 128 steps (15.2 Tflops).</p>
              </Card>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  )
}

function Takeaways() {
  const items = [
    {
      title: 'U-Net inductive bias is not essential',
      desc: 'DiT proves that a standard transformer backbone can replace the convolutional U-Net in diffusion models without losing performance — and actually improves scalability.',
    },
    {
      title: 'Gflops, not parameters, is the right metric',
      desc: 'FID correlates strongly with forward-pass Gflops, not parameter count. Two models with similar Gflops but different architectures achieve similar FID.',
    },
    {
      title: 'adaLN-Zero is the optimal conditioning',
      desc: 'Adaptive layer norm with zero-init residuals beats cross-attention and in-context conditioning while being the most compute-efficient — a clever architectural insight.',
    },
    {
      title: 'Scaling works predictably',
      desc: 'Increasing model depth/width (S to XL) and decreasing patch size (8 to 2) both improve FID monotonically. The scaling trend is clean and predictable, enabling compute-aware model selection.',
    },
    {
      title: 'Latent space + Transformer = best of both',
      desc: 'Combining VAE latent compression (from LDM) with transformer backbones (from ViT) yields a compute-efficient, highly scalable generative modeling framework.',
    },
    {
      title: 'Model compute > sampling compute',
      desc: 'Investing Gflops in model capacity during training is more effective than using extra compute at sampling time. Larger models win even with fewer sampling steps.',
    },
  ]

  return (
    <Section id="takeaways" title="Key Takeaways">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(item => (
          <Card key={item.title}>
            <div className="w-8 h-1 bg-accent rounded mb-3" />
            <h3 className="text-heading font-semibold text-sm mb-2">{item.title}</h3>
            <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}

import Guide from './Guide.jsx'

function Footer({ onGuide }) {
  return (
    <footer className="border-t border-border py-8 text-center">
      <p className="text-xs text-muted">
        Built with React & Tailwind CSS · Understanding DiT (ICCV 2023)
      </p>
      <button onClick={onGuide} className="text-xs text-accent hover:text-accent-light mt-3 transition-colors cursor-pointer">
        ? 搞不懂 npm / vite 是啥？点这里
      </button>
    </footer>
  )
}

export default function App() {
  const [page, setPage] = useState('paper')

  if (page === 'guide') {
    return <Guide onBack={() => setPage('paper')} />
  }

  return (
    <div className="min-h-screen bg-surface">
      <Nav />
      <Hero />
      <Architecture />
      <DesignSpace />
      <Results />
      <Takeaways />
      <Footer onGuide={() => setPage('guide')} />
    </div>
  )
}
