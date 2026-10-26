import { useEffect, useMemo, useRef, useState } from "react";
import {
  Activity, AlertTriangle, ArrowDown, ArrowRight, Bot, CheckCircle2, Code2,
  FileCode2, Github, GitBranch, GitPullRequest, Layers3, LoaderCircle,
  LockKeyhole, Search, Shield, ShieldCheck, Sparkles, Terminal, Workflow, Zap,
  Menu, X, ExternalLink
} from "lucide-react";
import { api } from "./api";

const STARTER = "https://github.com/psf/requests";
const TABS = [
  ["overview", "Repository map", Layers3],
  ["issue", "Issue intelligence", GitPullRequest],
  ["plan", "AI contribution plan", Bot],
  ["security", "Security review", Shield],
  ["patch", "Patch proposal", Code2],
  ["verify", "CI verification", Activity]
];

function CyberFilmCanvas(){
 const canvasRef=useRef(null),wrapRef=useRef(null);
 useEffect(()=>{
  const canvas=canvasRef.current,wrap=wrapRef.current;if(!canvas||!wrap)return;
  const ctx=canvas.getContext("2d",{alpha:false}),story=wrap.closest(".story");
  const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let w=0,h=0,dpr=1,raf=0,visible=true,p=0,px=0,py=0,tx=0,ty=0,last=0;
  const rand=n=>{const x=Math.sin(n*127.1+311.7)*43758.5453;return x-Math.floor(x)};
  const roots=Array.from({length:18},(_,i)=>({a:i*Math.PI*2/18+(rand(i)-.5)*.15,id:i}));
  function resize(){const r=wrap.getBoundingClientRect();w=r.width;h=r.height;dpr=Math.min(devicePixelRatio||1,2);canvas.width=w*dpr;canvas.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0)}
  function measure(){if(!story)return;const r=story.getBoundingClientRect();p=Math.max(0,Math.min(1,-r.top/Math.max(1,r.height-innerHeight)));const op=v=>Math.max(0,Math.min(1,1-Math.abs(p-v)/.19));story.style.setProperty("--beat-one",op(.06));story.style.setProperty("--beat-two",op(.5));story.style.setProperty("--beat-three",op(.94))}
  function pointer(e){const r=wrap.getBoundingClientRect();tx=(e.clientX-r.left)/r.width-.5;ty=(e.clientY-r.top)/r.height-.5}
  const observer=new IntersectionObserver(es=>visible=es[0].isIntersecting);observer.observe(wrap);
  function segment(x,y,X,Y,alpha,width){ctx.strokeStyle="rgba(190,225,116,"+alpha+")";ctx.lineWidth=width;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(X,Y);ctx.stroke()}
  function draw(t){raf=requestAnimationFrame(draw);if(!visible||document.hidden||!w||(reduced&&t-last<100))return;last=t;px+=(tx-px)*.05;py+=(ty-py)*.05;
   ctx.fillStyle="#10110d";ctx.fillRect(0,0,w,h);
   const progress=reduced?.55:p,zoom=progress<.48?1.65-progress*1.75:.81+(progress-.48)*1.25,cx=w*(.5+px*.04),cy=h*(.52+py*.04),R=Math.min(w,h)*.4;
   ctx.save();ctx.translate(cx,cy);ctx.scale(zoom,zoom);
   ctx.strokeStyle="rgba(230,236,207,.055)";ctx.lineWidth=1;for(let i=1;i<=6;i++){ctx.beginPath();ctx.arc(0,0,R*i/6,0,Math.PI*2);ctx.stroke()}
   for(let i=0;i<32;i++){const a=i*Math.PI/16;segment(Math.cos(a)*R*.9,Math.sin(a)*R*.9,Math.cos(a)*R,Math.sin(a)*R,.11,.7)}
   const growth=Math.max(0,Math.min(1,(progress-.015)/.72)),nodes=[];
   roots.forEach(root=>{let x=0,y=0,a=root.a,len=R*(.12+rand(root.id+40)*.08);for(let d=0;d<6;d++){const bend=(rand(root.id*21+d)-.5)*.65,X=x+Math.cos(a+bend)*len,Y=y+Math.sin(a+bend)*len,threshold=(d+rand(root.id+d)*.5)/6,reveal=Math.max(0,Math.min(1,(growth-threshold)*7));if(reveal>0){segment(x,y,x+(X-x)*reveal,y+(Y-y)*reveal,.2+reveal*.48,1.2-d*.12);if(reveal>.9)nodes.push({x:X,y:Y,id:root.id*10+d})}x=X;y=Y;a+=bend;len*=.7;if(growth<threshold)break}});
   nodes.forEach((n,i)=>{ctx.beginPath();ctx.arc(n.x,n.y,1.4*(reduced?1:.7+.3*Math.sin(t*.002+n.id)),0,Math.PI*2);ctx.fillStyle=i%5===0?"#e0f4a2":"#9ebc62";ctx.fill()});
   const pulse=reduced?1:1+Math.sin(t*.0013)*.025;ctx.save();ctx.scale(pulse,pulse);ctx.beginPath();for(let i=0;i<6;i++){const a=i*Math.PI/3-Math.PI/2,x=Math.cos(a)*47,y=Math.sin(a)*47;i?ctx.lineTo(x,y):ctx.moveTo(x,y)}ctx.closePath();ctx.fillStyle="rgba(174,213,98,.1)";ctx.fill();ctx.strokeStyle="#c5e477";ctx.lineWidth=1.5;ctx.stroke();ctx.beginPath();ctx.moveTo(-17,-1);ctx.lineTo(-4,13);ctx.lineTo(20,-15);ctx.strokeStyle="#e3f0bc";ctx.lineWidth=3;ctx.lineCap="round";ctx.lineJoin="round";ctx.stroke();ctx.restore();
   ctx.beginPath();ctx.arc(0,0,72+growth*R*.4,0,Math.PI*2);ctx.strokeStyle="rgba(197,228,119,"+(.12+growth*.24)+")";ctx.setLineDash([3,10]);ctx.stroke();ctx.setLineDash([]);ctx.restore();
   if(!reduced){const sy=(t*.025)%(h+80)-40,g=ctx.createLinearGradient(0,sy-24,0,sy+24);g.addColorStop(0,"rgba(197,228,119,0)");g.addColorStop(.5,"rgba(197,228,119,.06)");g.addColorStop(1,"rgba(197,228,119,0)");ctx.fillStyle=g;ctx.fillRect(0,sy-24,w,48)}
   ctx.fillStyle="rgba(197,228,119,.6)";ctx.font="9px monospace";ctx.fillText("THREAT SURFACE / "+String(Math.round(growth*100)).padStart(3,"0")+"%",22,h-24);
  }
  resize();measure();const ro=new ResizeObserver(resize);ro.observe(wrap);window.addEventListener("resize",resize);window.addEventListener("scroll",measure,{passive:true});wrap.addEventListener("pointermove",pointer);raf=requestAnimationFrame(draw);
  return()=>{cancelAnimationFrame(raf);observer.disconnect();ro.disconnect();window.removeEventListener("resize",resize);window.removeEventListener("scroll",measure);wrap.removeEventListener("pointermove",pointer);["--beat-one","--beat-two","--beat-three"].forEach(k=>story?.style.removeProperty(k))}
 },[]);
 return <div className="film-stage" ref={wrapRef} aria-label="Scroll-controlled cybersecurity network animation"><canvas ref={canvasRef}/><div className="film-vignette"/><div className="film-label"><span><i/> REPOSENTINEL / LIVE THREAT MODEL</span><b>SCROLL TO GROW THE SIGNAL</b></div><div className="film-coordinates">NODE CLUSTER 07<br/>ENCRYPTED · MONITORED · VERIFIED</div></div>
}

function SectionTag({ children }) { return <div className="section-tag"><span />{children}</div>; }
function MiniGraph({ kind }) {
  if (kind === "bars") return <svg viewBox="0 0 220 88" aria-hidden="true"><path d="M8 74H212" /><rect x="20" y="43" width="20" height="31" rx="3"/><rect x="55" y="25" width="20" height="49" rx="3"/><rect x="90" y="37" width="20" height="37" rx="3"/><rect x="125" y="12" width="20" height="62" rx="3"/><rect x="160" y="29" width="20" height="45" rx="3"/></svg>;
  if (kind === "pulse") return <svg viewBox="0 0 220 88" aria-hidden="true"><path d="M8 68H212" /><path className="graph-line" d="M8 55 L28 55 42 34 56 62 72 19 88 51 105 43 120 59 138 26 154 47 171 39 190 55 212 25" /></svg>;
  if (kind === "rings") return <svg viewBox="0 0 220 88" aria-hidden="true"><circle cx="110" cy="44" r="34"/><circle cx="110" cy="44" r="23"/><circle cx="110" cy="44" r="11"/><path d="M110 10V44L140 61"/></svg>;
  return <svg viewBox="0 0 220 88" aria-hidden="true"><path d="M8 70H212"/><path className="graph-line" d="M8 64 C35 61 40 20 69 28 S104 72 130 46 S170 7 212 18"/></svg>;
}

export default function App() {
  const [repoUrl, setRepoUrl] = useState(STARTER), [repo, setRepo] = useState(null);
  const [issueNo, setIssueNo] = useState("1"), [issue, setIssue] = useState(null);
  const [active, setActive] = useState("overview"), [loading, setLoading] = useState("");
  const [error, setError] = useState(""), [health, setHealth] = useState(null);
  const [plan, setPlan] = useState(""), [patch, setPatch] = useState("");
  const [security, setSecurity] = useState(null), [verification, setVerification] = useState(null);
  const [instructions, setInstructions] = useState("Propose the smallest safe fix supported by the supplied source. Include a focused test if evidence supports it.");
  const [copied, setCopied] = useState(false), [mobileMenu, setMobileMenu] = useState(false);
  const files = issue?.candidate_files || [];
  const aiPayload = useMemo(() => ({
    repo_url: repoUrl, issue_number: Number(issueNo),
    issue_title: issue?.issue?.title || "Contribution task",
    issue_body: issue?.issue?.body || "", files
  }), [repoUrl, issueNo, issue]);
  useEffect(() => { api.health().then(setHealth).catch(() => setHealth({ status: "offline" })); }, []);
  async function run(key, fn) {
    setLoading(key); setError("");
    try { await fn(); } catch (e) { setError(e.message || "Request failed"); }
    finally { setLoading(""); }
  }
  async function analyze() {
    await run("analyze", async () => {
      setRepo(await api.analyze(repoUrl)); setIssue(null); setPlan(""); setPatch("");
      setSecurity(null); setVerification(null); setActive("overview");
      document.getElementById("workbench")?.scrollIntoView({ behavior: "smooth" });
    });
  }
  async function inspect() { await run("issue", async () => { setIssue(await api.issue(repoUrl, issueNo)); setPlan(""); setPatch(""); setActive("issue"); }); }
  async function makePlan() { await run("plan", async () => { const d = await api.plan(aiPayload); setPlan(d.result); setActive("plan"); }); }
  async function makePatch() { await run("patch", async () => { const d = await api.patch({ ...aiPayload, instructions }); setPatch(d.result); setActive("patch"); }); }
  async function scan() { await run("security", async () => { setSecurity(await api.security(repoUrl)); setActive("security"); }); }
  async function verify() { await run("verify", async () => { setVerification(await api.verify(repoUrl, repo?.repository?.default_branch)); setActive("verify"); }); }
  async function copy() { await navigator.clipboard.writeText(patch); setCopied(true); setTimeout(() => setCopied(false), 1400); }
  const busy = !!loading;
  const go = (id) => { setMobileMenu(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  return <div className="site-shell">
    <header className="site-nav">
      <a className="wordmark" href="#top"><span className="mark"><ShieldCheck size={19}/></span><span>REPO<span className="wordmark-light">SENTINEL</span><small>OPEN CORE / SECURITY INTELLIGENCE</small></span></a>
      <button className="mobile-toggle" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Toggle navigation">{mobileMenu ? <X/> : <Menu/>}</button>
      <nav className={mobileMenu ? "nav-links nav-open" : "nav-links"}>
        <a href="#capabilities" onClick={() => setMobileMenu(false)}>Capabilities</a>
        <a href="#method" onClick={() => setMobileMenu(false)}>Method</a>
        <a href="#workbench" onClick={() => setMobileMenu(false)}>Workbench</a>
        <button className="nav-cta" onClick={() => go("workbench")}>Analyze a repository <ArrowRight size={14}/></button>
      </nav>
    </header>

    <main id="top">
      <section className="story" id="story">
        <div className="story-film"><CyberFilmCanvas/></div>
        <div className="story-copy">
          <article className="story-beat beat-one"><SectionTag>01 / MAP THE ATTACK SURFACE</SectionTag><h1>Security that<br/><em>takes root.</em></h1><p>Every repository has a living structure. RepoSentinel maps the code, surfaces risk, and helps teams see what needs attention.</p><button className="text-link" onClick={() => go("workbench")}>Explore your repository <ArrowRight size={16}/></button></article>
          <article className="story-beat beat-two"><SectionTag>02 / TRACE THE SIGNAL</SectionTag><h2>Signals, not<br/><em>more noise.</em></h2><p>Watch a connected codebase unfold into its dependencies, exposed surfaces, and security signals.</p><button className="text-link" onClick={() => go("capabilities")}>See the capabilities <ArrowRight size={16}/></button></article>
          <article className="story-beat beat-three"><SectionTag>03 / STRENGTHEN THE SYSTEM</SectionTag><h2>From insight<br/>to <em>action.</em></h2><p>Turn findings into a clear plan and a patch proposal — with human review always in control.</p><button className="text-link" onClick={() => go("workbench")}>Open the workbench <ArrowRight size={16}/></button></article>
        </div>
        <div className="story-rail"><span>01</span><i/><i/><i/><span>03</span></div>
      </section>

      <div className="marquee" aria-label="Repository intelligence, security review, contribution planning"><div>MAP THE CODE <b>✳</b> READ THE SIGNAL <b>✳</b> REVIEW THE RISK <b>✳</b> SHIP WITH CARE <b>✳</b> MAP THE CODE <b>✳</b> READ THE SIGNAL <b>✳</b> REVIEW THE RISK <b>✳</b></div></div>

      <section className="capabilities section-pad" id="capabilities">
        <div className="section-heading"><div><SectionTag>THE TOOLKIT / 04 MODULES</SectionTag><h2>Four ways to<br/><em>grow safer code.</em></h2></div><p>One workspace for understanding an unfamiliar codebase, investigating a reported issue, and preparing a careful contribution.</p></div>
        <div className="service-grid">
          <article className="service-card card-tall"><div className="card-top"><span>01 / MAP</span><Layers3 size={18}/></div><div className="service-art art-map"><MiniGraph kind="bars"/><div className="art-label">REPOSITORY STRUCTURE <b>INDEXED</b></div></div><h3>Repository<br/>intelligence</h3><p>Explore file structure, languages, project context, and README evidence before making a change.</p><button onClick={() => go("workbench")}>Explore repository <ArrowRight size={15}/></button></article>
          <article className="service-card"><div className="card-top"><span>02 / DETECT</span><Shield size={18}/></div><div className="service-art art-pulse"><MiniGraph kind="pulse"/><div className="art-label">STATIC SIGNALS <b>REVIEW</b></div></div><h3>Security<br/>analysis</h3><p>Run focused heuristic checks and optional Semgrep analysis against retrieved source files.</p><button onClick={() => { setActive("security"); go("workbench"); }}>Review security <ArrowRight size={15}/></button></article>
          <article className="service-card"><div className="card-top"><span>03 / REASON</span><Bot size={18}/></div><div className="service-art art-rings"><MiniGraph kind="rings"/><div className="art-label">GEMMA ASSIST <b>READY</b></div></div><h3>AI contribution<br/>planning</h3><p>Connect issue descriptions to candidate files and generate an evidence-backed plan with Gemma.</p><button onClick={() => { setActive("plan"); go("workbench"); }}>Plan a contribution <ArrowRight size={15}/></button></article>
          <article className="service-card"><div className="card-top"><span>04 / PROPOSE</span><Code2 size={18}/></div><div className="service-art art-flow"><MiniGraph kind="flow"/><div className="art-label">PATCH PREVIEW <b>HUMAN LED</b></div></div><h3>Patch<br/>proposals</h3><p>Draft a small unified diff for review. No automatic file changes, commits, or pull requests.</p><button onClick={() => { setActive("patch"); go("workbench"); }}>View patch workflow <ArrowRight size={15}/></button></article>
        </div>
      </section>

      <section className="signal-band">
        <div><SectionTag>BUILT AROUND EVIDENCE</SectionTag><h2>Clarity is a<br/><em>security feature.</em></h2></div>
        <div className="signal-stats"><div><b>06</b><span>connected workspaces</span><small>REPOSITORY · ISSUE · PLAN · SCAN · PATCH · CI</small></div><div><b>00</b><span>silent code changes</span><small>EVERY PROPOSAL STAYS REVIEWABLE</small></div><div><b>100%</b><span>human in control</span><small>NO AUTOMATIC EXECUTION OR PUSH</small></div></div>
      </section>

      <section className="method section-pad" id="method">
        <div className="section-heading"><div><SectionTag>THE METHOD / 03 STEPS</SectionTag><h2>Seed. Root.<br/><em>Strengthen.</em></h2></div><p>A deliberate workflow that keeps the evidence visible and the developer in control at every step.</p></div>
        <div className="method-steps">
          <article><span>01</span><div className="step-symbol"><Search/></div><h3>Seed</h3><p>Connect a public GitHub repository and map its structure, language mix, and project context.</p></article>
          <article><span>02</span><div className="step-symbol"><ShieldCheck/></div><h3>Root</h3><p>Inspect an issue, review candidate files, and run focused security checks on retrieved source.</p></article>
          <article><span>03</span><div className="step-symbol"><Sparkles/></div><h3>Strengthen</h3><p>Generate an AI contribution plan or patch proposal, then verify remote CI and review every change.</p></article>
        </div>
      </section>

      <section className="workbench-section section-pad" id="workbench">
        <div className="workbench-heading"><div><SectionTag>THE LAB / LIVE WORKSPACE</SectionTag><h2>Bring a repo.<br/><em>Find your signal.</em></h2><p>Connect a public GitHub repository to start a real analysis using the running RepoSentinel backend.</p></div><div className="engine-status"><i className={health?.status === "ok" ? "online" : "offline"}/><span>{health?.status === "ok" ? "API CONNECTED" : "API OFFLINE"}</span><b>{health?.model || "GEMMA 4"}</b></div></div>
        <div className="repo-connect">
          <label htmlFor="repo-url"><Github size={15}/> PUBLIC GITHUB REPOSITORY</label>
          <div className="repo-connect-row"><div className="repo-input"><Search size={17}/><input id="repo-url" value={repoUrl} onChange={e => setRepoUrl(e.target.value)} placeholder="https://github.com/owner/repository"/></div><button className="lime-button" disabled={busy || !repoUrl.trim()} onClick={analyze}>{loading === "analyze" ? <><LoaderCircle className="spin"/> Mapping repository</> : <>Analyze repository <ArrowRight size={16}/></>}</button></div>
          <small><LockKeyhole size={12}/> Public repositories only · No repository code execution · API keys remain server-side</small>
        </div>
        {error && <div className="error-banner"><AlertTriangle size={16}/>{error}<button onClick={() => setError("")}>Dismiss</button></div>}
        <div className="workbench-meta">
          <div className="engine-chip"><span className={health?.gemma_configured ? "dot-green" : "dot-amber"}/><b>GEMMA ENGINE</b><small>{health?.gemma_configured ? "CONFIGURED" : "API KEY NEEDED"}</small></div>
          <div className="workbench-tabs">{TABS.map(([id, label, Icon]) => <button key={id} className={active === id ? "tab-active" : ""} onClick={() => setActive(id)}><Icon size={14}/>{label}</button>)}</div>
        </div>

        {!repo && <div className="workbench-empty"><div className="empty-emblem"><ShieldCheck size={30}/></div><SectionTag>WAITING FOR INPUT</SectionTag><h3>Your next repository<br/><em>starts here.</em></h3><p>Paste a public GitHub URL above. We'll retrieve repository metadata and source context so you can explore the real project.</p><div className="empty-points"><span><FileCode2/> Code context</span><span><Bot/> Gemma 4</span><span><Shield/> Static review</span></div></div>}

        {repo && <div className="workbench-results">
          <div className="repo-summary"><div className="repo-avatar"><Github/></div><div className="repo-title"><b>{repo.repository.full_name}</b><small>{repo.repository.description || "No repository description."}</small></div><a href={repo.repository.html_url} target="_blank" rel="noreferrer">OPEN ON GITHUB <ExternalLink size={12}/></a><div className="repo-facts"><span>★ {repo.repository.stars}</span><span>⑂ {repo.repository.forks}</span><span><GitBranch size={12}/> {repo.repository.default_branch}</span></div></div>
          <div className="metric-grid"><div><small>FILES INDEXED</small><b>{repo.file_count.toLocaleString()}</b><span>Repository tree entries</span></div><div><small>LANGUAGES</small><b>{Object.keys(repo.languages).length}</b><span>Detected by GitHub</span></div><div><small>OPEN ISSUES</small><b>{repo.repository.open_issues.toLocaleString()}</b><span>Repository metadata</span></div><div><small>AI ENGINE</small><b className="metric-ready">{health?.gemma_configured ? "READY" : "SETUP"}</b><span>{health?.model || "Gemma 4 API"}</span></div></div>

          {active === "overview" && <div className="result-grid"><section className="result-panel"><div className="result-title"><span>LANGUAGE PROFILE</span><b>{Object.keys(repo.languages).length} DETECTED</b></div><div className="language-list">{Object.entries(repo.languages).sort((a,b) => b[1]-a[1]).map(([name, bytes]) => <div key={name}><span>{name}</span><i><b style={{width: Math.max(3, bytes / Math.max(...Object.values(repo.languages)) * 100) + "%"}}/></i><small>{(bytes/1024).toFixed(1)} KB</small></div>)}</div><div className="readme-block"><span>README / SOURCE CONTEXT</span><pre>{repo.readme?.slice(0, 1800) || "No README found."}</pre></div></section><section className="result-panel"><div className="result-title"><span>REPOSITORY MAP</span><b>{repo.files.length} PATHS · FIRST 300</b></div><div className="file-list">{repo.files.slice(0, 28).map(f => <div key={f.path}><FileCode2 size={13}/><span>{f.path}</span><small>{(f.size/1024).toFixed(1)} KB</small></div>)}</div></section></div>}

          {active === "issue" && <div className="result-stack"><section className="result-panel"><div className="result-title"><span>ISSUE INTELLIGENCE</span><b>01 / INVESTIGATE</b></div><div className="issue-form"><label>GITHUB ISSUE NUMBER<input type="number" min="1" value={issueNo} onChange={e => setIssueNo(e.target.value)}/></label><button className="dark-button" disabled={busy || !issueNo} onClick={inspect}>{loading === "issue" ? "Inspecting issue…" : "Inspect issue →"}</button></div></section>{issue && <><section className="result-panel"><div className="issue-title"><span className="state-pill">{issue.issue.state}</span><h3>#{issue.issue.number} {issue.issue.title}</h3><a href={issue.issue.html_url} target="_blank" rel="noreferrer">OPEN ISSUE ↗</a></div><p className="issue-body">{issue.issue.body || "No issue description."}</p><div className="issue-labels">{issue.issue.labels.map(x => <span key={x}>{x}</span>)}</div></section><section className="result-panel"><div className="result-title"><span>CANDIDATE SOURCE FILES</span><b>HEURISTIC MAPPING</b></div><p className="result-note"><AlertTriangle size={13}/>{issue.mapping_note}</p>{files.map(f => <div className="source-file" key={f.path}><b><FileCode2 size={13}/>{f.path}</b><a href={f.url} target="_blank" rel="noreferrer">SOURCE ↗</a><pre>{f.content.slice(0, 650)}</pre></div>)}</section><div className="result-actions"><button className="lime-button" disabled={busy || !files.length} onClick={makePlan}><Sparkles size={14}/> Generate Gemma plan</button><button className="dark-button" disabled={busy} onClick={scan}><Shield size={14}/> Run security scan</button></div></>}</div>}

          {active === "plan" && <div className="result-stack"><div className="result-intro"><div><h3>AI contribution plan</h3><p>Grounded in the selected issue and retrieved source files.</p></div><button className="lime-button" disabled={busy || !issue} onClick={makePlan}>{loading === "plan" ? "Thinking…" : "Generate plan →"}</button></div>{!issue && <p className="result-note"><AlertTriangle size={13}/> Inspect an issue first to give Gemma source evidence.</p>}{plan && <section className="result-panel"><div className="result-title"><span>GEMMA 4 / ANALYSIS</span><b>GENERATED OUTPUT</b></div><pre className="answer-output">{plan}</pre></section>}</div>}

          {active === "security" && <div className="result-stack"><div className="result-intro"><div><h3>Security posture</h3><p>Static checks on fetched Python source. Repository code is never executed.</p></div><button className="dark-button" disabled={busy} onClick={scan}>{loading === "security" ? "Scanning…" : "Run security scan →"}</button></div>{security && <><div className="scan-metrics"><div><b>{security.heuristic_findings.length}</b><span>Heuristic matches</span></div><div><b>{security.files_scanned}</b><span>Python files scanned</span></div><div><b>{security.semgrep.status.toUpperCase()}</b><span>Semgrep status</span></div></div><section className="result-panel"><div className="result-title"><span>FINDINGS FOR MANUAL REVIEW</span><b>{security.heuristic_findings.length} MATCHES</b></div>{security.heuristic_findings.length ? security.heuristic_findings.map((f,i) => <div className="finding" key={i}><div><span className="state-pill">REVIEW</span><b>{f.title}</b><small>{f.file}:{f.line}</small></div><code>{f.evidence}</code><p>{f.recommendation}</p></div>) : <p className="muted-result">No heuristic matches found. This is not proof that the repository is secure.</p>}</section><section className="result-panel"><div className="result-title"><span>SEMGREP RESULTS</span><b>{security.semgrep.status.toUpperCase()}</b></div><p className="muted-result">{security.semgrep.available ? "Semgrep was detected on the backend." : "Install Semgrep on the backend to enable this optional scan."}</p>{security.semgrep.findings?.map((f,i) => <div className="finding" key={i}><b>{f.rule}</b><small>{f.path}:{f.line}</small><p>{f.message}</p></div>)}</section><p className="result-footnote">{security.notice}</p></>}</div>}

          {active === "patch" && <div className="result-stack"><div className="result-intro"><div><h3>Patch proposal</h3><p>Generate a diff preview. Nothing is applied or pushed automatically.</p></div><span className="review-stamp">HUMAN REVIEW REQUIRED</span></div>{!issue && <p className="result-note"><AlertTriangle size={13}/> Inspect an issue first so the model has repository evidence.</p>}<section className="result-panel"><label className="patch-label">CHANGE INSTRUCTIONS<textarea rows="3" value={instructions} onChange={e => setInstructions(e.target.value)}/></label><button className="lime-button patch-generate" disabled={busy || !issue} onClick={makePatch}>{loading === "patch" ? "Generating…" : "Generate patch proposal →"}</button></section>{patch && <section className="result-panel"><div className="result-title"><span>PROPOSED UNIFIED DIFF</span><button className="copy-button" onClick={copy}>{copied ? "COPIED" : "COPY OUTPUT"}</button></div><pre className="answer-output patch-output">{patch}</pre></section>}</div>}

          {active === "verify" && <div className="result-stack"><div className="result-intro"><div><h3>Verification center</h3><p>Read GitHub Actions check-runs for the repository's latest branch commit.</p></div><button className="dark-button" disabled={busy} onClick={verify}>{loading === "verify" ? "Checking…" : "Check CI status →"}</button></div>{verification && <><div className="verify-summary"><CheckCircle2/><div><small>REMOTE CI RESULT</small><b>{verification.overall}</b><span>{verification.branch} · {verification.commit.slice(0,12)}</span></div></div><section className="result-panel"><div className="result-title"><span>GITHUB CHECK RUNS</span><b>{verification.checks.length} CHECKS</b></div>{verification.checks.length ? verification.checks.map((c,i) => <div className="check-row" key={i}><Workflow size={14}/><b>{c.name}</b><span>{c.status}</span><strong>{c.conclusion || "—"}</strong>{c.html_url && <a href={c.html_url} target="_blank" rel="noreferrer">VIEW ↗</a>}</div>) : <p className="muted-result">No check runs were reported for this commit.</p>}</section><p className="result-footnote">{verification.note}</p></>}</div>}
        </div>}
      </section>

      <section className="closing-cta"><div className="closing-orbit"/><SectionTag>MAKE THE NEXT CHANGE A BETTER ONE</SectionTag><h2>Understand deeply.<br/><em>Secure deliberately.</em></h2><p>Bring your repository into focus — and keep every decision in human hands.</p><button className="lime-button" onClick={() => go("workbench")}>Enter the workbench <ArrowRight size={16}/></button><div className="closing-meta"><span>REPOSENTINEL AI / OPEN CORE</span><span>PS 04 · EVIDENCE FIRST</span></div></section>
    </main>
    <footer className="site-footer"><a className="wordmark" href="#top"><span className="mark"><ShieldCheck size={17}/></span><span>REPO<span className="wordmark-light">SENTINEL</span><small>OPEN CORE / SECURITY INTELLIGENCE</small></span></a><p>Read-only by design. Evidence before action.</p><span>© 2026 REPOSENTINEL AI</span></footer>
  </div>;
}
