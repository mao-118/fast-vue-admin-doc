import{_ as e,r as t,o as p,c as o,a as n,b as l,F as c,e as i,d as s}from"./app.de3041f3.js";const r={},u=i(`<h1 id="\u56FD\u9645\u5316" tabindex="-1"><a class="header-anchor" href="#\u56FD\u9645\u5316" aria-hidden="true">#</a> \u56FD\u9645\u5316</h1><p><code>element-plus</code> \u7EC4\u4EF6 \u9ED8\u8BA4 \u4F7F\u7528\u82F1\u8BED\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u4E2D\u6587\u53EA\u9700\u5728\u5F15\u5165\u7684\u5730\u65B9\u914D\u7F6E\u8BED\u8A00\u5305\u5373\u53EF</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>
<span class="token keyword">import</span> zhCn <span class="token keyword">from</span> <span class="token string">&#39;element-plus/es/locale/lang/zh-cn&#39;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">locale</span><span class="token operator">:</span> zhCn<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u5B9E\u73B0\u56FD\u9645\u5316" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u56FD\u9645\u5316" aria-hidden="true">#</a> \u5B9E\u73B0\u56FD\u9645\u5316</h1><p>Element Plus \u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E2A Vue \u7EC4\u4EF6 ConfigProvider \u7528\u4E8E\u5168\u5C40\u914D\u7F6E\u56FD\u9645\u5316\u7684\u8BBE\u7F6E\u3002</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-config-provider</span> <span class="token attr-name">:locale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>locale<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-config-provider</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> zhCn <span class="token keyword">from</span> <span class="token string">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>
<span class="token keyword">const</span> locale <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>zhCn<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),d={class:"custom-container tip"},k=n("p",{class:"custom-container-title"},"TIP",-1),v=s("\u5177\u4F53\u7684\u56FD\u9645\u5316\u4F7F\u7528\u53EF\u4EE5\u53C2\u8003\u9879\u76EE\u4E2D\u7684 "),m={href:"https://github.com/mao-118/fast-vue-admin/blob/main/src/views/localeConfig/index.vue",target:"_blank",rel:"noopener noreferrer"},g=s("\u56FD\u9645\u5316\u8BBE\u7F6E"),h=s(" \u9875\u9762");function b(_,f){const a=t("ExternalLinkIcon");return p(),o(c,null,[u,n("div",d,[k,n("p",null,[v,n("a",m,[g,l(a)]),h])])],64)}var y=e(r,[["render",b],["__file","globalization.html.vue"]]);export{y as default};