---


---

<h1 id="building-a-blog-with-gatsby--graphql">Building A Blog With Gatsby &amp; GraphQL</h1>
<p>Building a custom blog doesn’t have to be hard, and you don’t have to do all of the hard work from scratch!</p>
<p>Gatsby, a static site generator for React, is an amazing tool that comes pre-configured with GraphQL and it allows you to easily get up and running.</p>
<h2 id="foundational-knowledge">Foundational Knowledge</h2>
<p>Since Gatsby is a static site generator for React, you should have some React knowledge prior to taking this tutorial.</p>
<p>You should also be familiar with how to use the command line / terminal as we’ll be installing some packages with npm.</p>
<h2 id="setup">Setup</h2>
<p>We need to install the Gatsby CLI (command-line-interface) to build new Gatsby projects.</p>
<p>To install the Gatsby CLI tool, run the following <code>npm</code> command:</p>
<pre><code>npm install -g gatsby-cli
</code></pre>
<h2 id="building-a-blog-the-short-way">Building A Blog: The Short Way</h2>
<p>Gatsby has a series of starter files called <a href="https://www.gatsbyjs.org/starters/?v=2">Gatsby Starters</a> which allow you to quickly spin up different types of Gatsby sites.</p>
<p>Gatsby provides a <a href="https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/">starter blog</a> which you can use to quickly get up-and-running.</p>
<p><strong><em>If you aren’t familiar with Gatsby or GraphQL, I recommend following the in-depth tutorial to learn the in-and-outs.</em></strong></p>
<p>To build a blog with the blog starter, simply run:</p>
<pre><code>gatsby new &lt;&lt;my-blog-name&gt;&gt; https://github.com/gatsbyjs/gatsby-starter-blog
</code></pre>
<p>Then add your markdown blog files and customize to your heart’s content.</p>
<h2 id="building-a-blog-the-long-but-in-depth-way">Building A Blog: The Long (But In-Depth) Way</h2>
<p>Let’s walk through the steps of building a Gatsby blog from scratch using the default starter.</p>
<p>First, create your starter project by running</p>
<pre><code>gatsby new &lt;&lt;my-blog-name&gt;&gt; &amp;&amp; cd &lt;&lt;my-blog-name&gt;&gt;
gatsby develop
</code></pre>
<p>When you open <code>localhost:8000</code> in your browser, you will see the Gatsby default application.<img src="tutorial/01-gatsby-default-starter-.png" alt="Gatsby default starter"><br>
Let’s go ahead and remove all of the boilerplate. We will leave the current file structure inside of the <code>src/</code> directory but remove all of the files inside.</p>
<pre><code>rm -rf src/**/*.*
</code></pre>
<h3 id="gatsby-architecture">Gatsby Architecture</h3>
<p>Since Gatsby is a static site generator for React, you can write simple React components, like you would do with create react app.</p>
<p>Here is the current architecture of our application:</p>
<ul>
<li><code>components/</code> : Contains all of your React components (i.e. navigation).</li>
<li><code>pages/</code> : Contains all pages with unique routes: any JavaScript file located in this directory will be accessible through its own URL <code>my-website/&lt;&lt;page-name&gt;&gt;</code></li>
<li><code>images/</code> : Contains all image assets for our project.</li>
</ul>
<h3 id="structure">Structure</h3>
<p>Let’s go ahead and add some of the files that we’ll need to build our blog.</p>
<p>Our blog will have four pages:</p>
<ul>
<li>Home</li>
<li>About</li>
<li>Blog</li>
<li>Contact</li>
</ul>
<p>Let’s create a JavaScript file for each of these pages inside of the <code>pages</code> directory:</p>
<ul>
<li><code>index.js</code></li>
<li><code>about.js</code></li>
<li><code>blog.js</code></li>
<li><code>contact.js</code></li>
</ul>
<p>Since we also removed all of the images from our project, we need to remove the reference to <code>gatsby-icon</code> to fix our development server.</p>
<p>Inside <code>gatsby-config.js</code>, remove the icon from the <code>options</code> object.</p>
<pre class=" language-json"><code class="prism  language-json"><span class="token comment">// delete me</span>
icon<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`src/images/gatsby-icon.png`</span></span>
</code></pre>
<p>To check whether everything is working as expected, let’s have <code>index.js</code> in the <code>pages/</code> directory return some simple JSX.</p>
<pre class=" language-jsx"><code class="prism  language-jsx"><span class="token comment">// pages/index.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span>  <span class="token string">"react"</span>
<span class="token keyword">const</span> <span class="token function-variable function">Home</span>  <span class="token operator">=</span>  <span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span>  <span class="token keyword">default</span> Home
</code></pre>
<p>When we restart our development server and head to our browser, we should see this:</p>
<p><img src="tutorial/02-home-page.png" alt="Home page"></p>
<p>Let’s add similar JSX into the other three page components:</p>
<pre class=" language-jsx"><code class="prism  language-jsx"><span class="token comment">// pages/about.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span>

<span class="token keyword">const</span> <span class="token function-variable function">About</span>  <span class="token operator">=</span>  <span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>About<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span>  <span class="token keyword">default</span> About
</code></pre>
<pre class=" language-jsx"><code class="prism  language-jsx"><span class="token comment">// pages/blog.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span>

<span class="token keyword">const</span> <span class="token function-variable function">Blog</span>  <span class="token operator">=</span>  <span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Blog<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span>  <span class="token keyword">default</span> Blog
</code></pre>
<pre class=" language-jsx"><code class="prism  language-jsx"><span class="token comment">// pages/contact.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span>

<span class="token keyword">const</span> <span class="token function-variable function">Contact</span>  <span class="token operator">=</span>  <span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Contact<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span>  <span class="token keyword">default</span> Contact
</code></pre>
<p>If we head back to the browser and add a <code>/about</code> to the end of our <code>localhost</code> URL, we should see the about page. Likewise this will work for <code>/blog</code> and <code>/contact</code>.</p>
<p>So all of our pages are rendering, but wouldn’t it be nice if we had a navigation component we could use to switch between page views? Let’s build one!</p>
<h3 id="navigation">Navigation</h3>
<p>First let’s create two new files in the <code>components/</code> directory: <code>Nav.js</code> and <code>nav.css</code> .</p>
<p>Inside <code>Nav.js</code> add the following code:</p>
<pre class=" language-jsx"><code class="prism  language-jsx"><span class="token comment">// Nav.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span>  <span class="token string">"react"</span>

<span class="token keyword">const</span>  <span class="token function-variable function">Nav</span>  <span class="token operator">=</span>  <span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span>  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span>  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/about<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>About<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span>  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/blog<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Blog<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span>  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/contact<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Contact<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span>
<span class="token keyword">export</span>  <span class="token keyword">default</span> Nav
</code></pre>
<p>Since we want the navigation bar on every single page, we could import it to each individual page and render it, however there’s an easier way.</p>
<p>We can use a <code>&lt;Layout&gt;</code> component to ensure our navigation is rendered on each page, without having to manually import and render it for each one.</p>
<p>This is what our <code>&lt;Layout&gt;</code> component will look like:</p>
<p><img src="tutorial/03-layout.png" alt="Layout"></p>
<p>The navigation bar will sit at the top of the page, and all of the page content will be rendered in a <code>&lt;main&gt;</code> element beneath.</p>
<p>Inside <code>components/</code> create <code>Layout.js</code>.</p>
<p>First, let’s import React, Prop Types, and our Nav component:</p>
<pre class=" language-jsx"><code class="prism  language-jsx"><span class="token comment">// Layout.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span>  <span class="token string">"react"</span>
<span class="token keyword">import</span> PropTypes <span class="token keyword">from</span>  <span class="token string">"prop-types"</span>

<span class="token keyword">import</span> Nav <span class="token keyword">from</span>  <span class="token string">"./Nav"</span>
</code></pre>
<p>Next, we’ll create a stateless functional React component, passing <code>children</code> as a prop.</p>
<pre class=" language-jsx"><code class="prism  language-jsx"><span class="token comment">// Layout.js</span>
<span class="token keyword">const</span> <span class="token function-variable function">Layout</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Nav</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Layout<span class="token punctuation">;</span>
</code></pre>
<p>We also want to ensure we’re passing JSX to the <code>&lt;Layout&gt;</code> component, so we’ll use PropTypes to enforce that.</p>
<pre class=" language-jsx"><code class="prism  language-jsx"><span class="token comment">// Layout.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span>  <span class="token string">"react"</span>
<span class="token keyword">import</span> PropTypes <span class="token keyword">from</span>  <span class="token string">"prop-types"</span>

<span class="token keyword">import</span> Nav <span class="token keyword">from</span>  <span class="token string">"./Nav"</span>

<span class="token keyword">const</span> <span class="token function-variable function">Layout</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Nav</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

Layout<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  children<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>node<span class="token punctuation">.</span>isRequired
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Layout<span class="token punctuation">;</span>
</code></pre>
<p>Let’s see if our <code>&lt;Layout&gt;</code> component works.</p>
<p>Back in <code>index.js</code>, let’s import our <code>&lt;Layout&gt;</code> component and render it around our page content.</p>
<pre class=" language-jsx"><code class="prism  language-jsx"><span class="token comment">// index.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span>
<span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">"../components/Layout"</span>

<span class="token keyword">const</span> <span class="token function-variable function">Home</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Home<span class="token punctuation">;</span>
</code></pre>
<p>If we head over to our browser we should see the navigation appearing above our page title:</p>
<p><img src="tutorial/04-nav.png" alt="Nav"></p>
<p>Let’s add the <code>&lt;Layout&gt;</code> component to the other three pages.</p>
<pre class=" language-jsx"><code class="prism  language-jsx"><span class="token comment">// pages/about.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span>
<span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">"../components/Layout"</span>

<span class="token keyword">const</span> <span class="token function-variable function">About</span>  <span class="token operator">=</span>  <span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>About<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span>  <span class="token keyword">default</span> About
</code></pre>
<pre class=" language-jsx"><code class="prism  language-jsx"><span class="token comment">// pages/blog.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span>
<span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">"../components/Layout"</span>

<span class="token keyword">const</span> <span class="token function-variable function">Blog</span>  <span class="token operator">=</span>  <span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Blog<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span>  <span class="token keyword">default</span> Blog
</code></pre>
<pre class=" language-jsx"><code class="prism  language-jsx"><span class="token comment">// pages/contact.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span>
<span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">"../components/Layout"</span>

<span class="token keyword">const</span> <span class="token function-variable function">Contact</span>  <span class="token operator">=</span>  <span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Contact<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span>  <span class="token keyword">default</span> Contact
</code></pre>
<p>If we head back to the browser, we can now click each navigation item and see it’s respective page content.</p>
<p>And while this works, you’ll notice a re-render on each page. This is because we’re using the <code>&lt;a&gt;</code> tag to link between pages, and this forces a re-render.</p>
<p>As a solution, Gatsby provides a <code>&lt;Link&gt;</code> <a href="https://www.gatsbyjs.org/docs/gatsby-link/">component</a> to handle page routing.</p>
<p>Let’s head back to <code>Nav.js</code> and fix the page routing.</p>
<p>First let’s import Link.</p>
<pre class=" language-jsx"><code class="prism  language-jsx"><span class="token comment">// Nav.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"gatsby"</span><span class="token punctuation">;</span>
</code></pre>
<p>Next, let’s replace all <code>&lt;a&gt;</code> tags with <code>&lt;Link&gt;</code> and change the <code>href=</code> attributes to <code>to=</code> attributes.</p>
<pre class=" language-jsx"><code class="prism  language-jsx"><span class="token comment">// Nav.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"gatsby"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span>  <span class="token function-variable function">Nav</span>  <span class="token operator">=</span>  <span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/about<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>About<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/blog<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Blog<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/contact<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Contact<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span>
<span class="token keyword">export</span>  <span class="token keyword">default</span> Nav
</code></pre>
<p>Switching back to the browser, the page routing should be instantaneous when we click a navigation item.</p>
<h3 id="styling">Styling</h3>
<p>Now that our app works, let’s add a bit of styling to make it look nicer.</p>
<h4 id="active-link-styling">Active Link Styling</h4>
<p>Gatsby makes it simple to add specific styles when a navigation link is active.</p>
<p>There are <a href="https://www.gatsbyjs.org/docs/gatsby-link/">two ways to add styles</a> to an active link:</p>
<ul>
<li><code>activeStyle</code>: Uses inline CSS-in-JS to style an element when active.</li>
</ul>
<pre class=" language-jsx"><code class="prism  language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">activeStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">'red'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span>My link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<ul>
<li><code>activeClassName</code>: Gives the link element a class name when active.</li>
</ul>
<pre class=" language-jsx"><code class="prism  language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">activeClassName</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>active-link<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>My link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>I generally  use <code>activeClassName</code> if I have multiple links, however we’ll use <code>activeStyle</code> here to demonstrate CSS-in-JS.</p>
<p>I’ve also added some <code>className</code> attributes to the JSX code which we’ll use to style the rest of our navigation.</p>
<pre class=" language-jsx"><code class="prism  language-jsx"><span class="token comment">// Nav.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span>  <span class="token string">"react"</span>
<span class="token keyword">import</span>  <span class="token punctuation">{</span> Link <span class="token punctuation">}</span>  <span class="token keyword">from</span>  <span class="token string">"gatsby"</span>

<span class="token keyword">import</span>  <span class="token string">"./nav.css"</span>

<span class="token keyword">const</span>  <span class="token function-variable function">Nav</span>  <span class="token operator">=</span>  <span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>nav<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>nav-list<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>nav-list-item<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span>  
	  <span class="token attr-name">activeStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> borderBottom<span class="token punctuation">:</span>  <span class="token string">"2px solid #a64ac9"</span>  <span class="token punctuation">}</span><span class="token punctuation">}</span></span> 
	  <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span>
	<span class="token punctuation">&gt;</span></span>
            Home
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>nav-list-item<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span>  
          <span class="token attr-name">activeStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> borderBottom<span class="token punctuation">:</span>  <span class="token string">"2px solid #a64ac9"</span>  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>  
          <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/about<span class="token punctuation">"</span></span>
        <span class="token punctuation">&gt;</span></span>
            About
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>nav-list-item<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span>  
         <span class="token attr-name">activeStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> borderBottom<span class="token punctuation">:</span>  <span class="token string">"2px solid #a64ac9"</span>  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>  
         <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/blog<span class="token punctuation">"</span></span>
       <span class="token punctuation">&gt;</span></span>
           Blog
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>nav-list-item<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span>  
        <span class="token attr-name">activeStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> borderBottom<span class="token punctuation">:</span>  <span class="token string">"2px solid #a64ac9"</span>  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>  
        <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/contact<span class="token punctuation">"</span></span>
      <span class="token punctuation">&gt;</span></span>
        Contact
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span>

<span class="token keyword">export</span>  <span class="token keyword">default</span> Nav
</code></pre>
<p>Now each link, when selected, will have an underline of <code>2px</code>.</p>
<h4 id="navigation-styling">Navigation Styling</h4>
<p>Inside the <code>nav.css</code> file in the <code>components/</code> directory and add the following code.</p>
<pre class=" language-css"><code class="prism  language-css"><span class="token comment">/* nav.css */</span>
<span class="token selector"><span class="token class">.nav</span>  </span><span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span>  <span class="token number">24</span>px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector"><span class="token class">.nav-list</span>  </span><span class="token punctuation">{</span>
  <span class="token property">list-style</span><span class="token punctuation">:</span>  none<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span>  flex<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span>  <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span>  <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector"><span class="token class">.nav-list-item</span>  </span><span class="token punctuation">{</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span>  <span class="token number">24</span>px<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span>  -apple-system, BlinkMacSystemFont,  <span class="token string">"Segoe UI"</span>, Roboto, Oxygen,
       Ubuntu, Cantarell,  <span class="token string">"Open Sans"</span>,  <span class="token string">"Helvetica Neue"</span>,  sans-serif<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span>  <span class="token number">1.5</span>em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector"><span class="token class">.nav-list</span>  a  </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span>  <span class="token hexcode">#a64ac9</span><span class="token punctuation">;</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span>  none<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span>  <span class="token number">2</span>px  transparent<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span>  border  <span class="token number">0.1</span>s  linear<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector"><span class="token class">.nav-list</span>  a<span class="token pseudo-class">:hover</span>,
<span class="token class">.nav-list</span>  a<span class="token pseudo-class">:focus</span>  </span><span class="token punctuation">{</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span>  <span class="token number">2</span>px  solid  <span class="token hexcode">#a64ac9</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>Don’t forget to import <code>nav.css</code> in <code>Nav.js</code>:</p>
<pre class=" language-jsx"><code class="prism  language-jsx"><span class="token comment">// Nav.js</span>
<span class="token operator">...</span>
<span class="token keyword">import</span> <span class="token string">"./nav.css"</span><span class="token punctuation">;</span>
<span class="token operator">...</span>
</code></pre>
<h4 id="layout-styling">Layout Styling</h4>
<p>Now let’s add some styling to <code>Layout.js</code>. Create <code>layout.css</code> in the <code>components/</code> directory.</p>
<pre class=" language-css"><code class="prism  language-css"><span class="token comment">/* layout.css */</span>
<span class="token selector">html,
body  </span><span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span>  <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span>  <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token property">overflow-x</span><span class="token punctuation">:</span>  hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector"><span class="token class">.main</span>  </span><span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span>  <span class="token number">24</span>px<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span>  -apple-system, BlinkMacSystemFont,  <span class="token string">"Segoe UI"</span>, Roboto, Oxygen,
        Ubuntu, Cantarell,  <span class="token string">"Open Sans"</span>,  <span class="token string">"Helvetica Neue"</span>,  sans-serif<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span>  <span class="token hexcode">#a64ac9</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span>  <span class="token number">100%</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span>  <span class="token hexcode">#ffffff</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector"><span class="token class">.main</span>  h1  </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span>  <span class="token number">5</span>em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector"><span class="token class">.main</span>  p  </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span>  <span class="token number">2</span>em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>Import the CSS file into <code>Layout.js</code> and add a class name of <code>layout</code> to the outer <code>&lt;div&gt;</code> element and a class name of <code>main</code> to the <code>&lt;main&gt;</code> element.</p>
<pre class=" language-jsx"><code class="prism  language-jsx"><span class="token comment">// Layout.js</span>
<span class="token operator">...</span>
<span class="token keyword">import</span> <span class="token string">"./layout.css"</span>
<span class="token operator">...</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>layout<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Nav</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>main<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token operator">...</span>
</code></pre>
<h4 id="filler-content">Filler Content</h4>
<p>Lastly I’m going to add some filler content to <code>index.js</code>, <code>about.js</code>, and <code>contact.js</code>. I added 5 paragraphs with lorem ipsum text to each of the three pages.</p>
<pre class=" language-jsx"><code class="prism  language-jsx"><span class="token comment">// index.js, about.js, contact.js</span>
<span class="token operator">...</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
  Lorem ipsum dolor sit amet consectetur adipisicing elit<span class="token punctuation">.</span> Ea dignissimos
  aut consequuntur aspernatur corrupti ratione<span class="token punctuation">,</span> odit similique tenetur
  accusantium<span class="token punctuation">,</span> est nostrum esse minus iure voluptatum nihil cumque
  blanditiis non<span class="token operator">?</span> Odit<span class="token punctuation">.</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token operator">...</span>
</code></pre>
<p>Your site should now look much better!</p>
<p><img src="tutorial/05-styling.png" alt="Styling"></p>
<h3 id="blogs">Blogs</h3>
<p>Now it’s time to add some blogs!</p>
<h4 id="adding-blog-posts">Adding Blog Posts</h4>
<p>Inside of the <code>pages/</code> directory, create three folders: <code>2020-01-01-my-first-blog</code>, <code>2020-02-14-valentines-day</code>, <code>2020-04-01-april-fools</code>.</p>
<p>Inside each of these folders, add an <code>index.md</code> file with the following structure:</p>
<pre class=" language-md"><code class="prism  language-md">---
path: '/my-first-blog'
date: '2020-01-01'
title: 'My First Blog'
author: 'Emma Bostian'
description: 'This is my very first blog of 2020!'
---

Here is my main content
It is very interesting.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dignissimos
aut consequuntur aspernatur corrupti ratione, odit similique tenetur
accusantium, est nostrum esse minus iure voluptatum nihil cumque
blanditiis non? Odit.
</code></pre>
<p>Everything between the three hyphens is called frontmatter. Frontmatter is essentially metadata for your blog post.</p>
<p>For each blog post, add some frontmatter, containing the following data:</p>
<ul>
<li><code>path</code>: The URL path to your blog</li>
<li><code>date</code>: The date of publish</li>
<li><code>title</code>: The blog post title</li>
<li><code>author</code>: The blog post author</li>
<li><code>description</code>: The blog post description</li>
</ul>
<p>Everything after the closing hyphens is the main body of the blog post. You can add whatever you’d like here.</p>
<p>Add markdown content for each of our three blog posts.</p>
<h4 id="rendering-a-list-of-blog-posts">Rendering A List Of Blog Posts</h4>
<p>Now that we have markdown files, we want to render them on our <code>blog.js</code> page.</p>
<p>We first need to install a dependencies:</p>
<p>In your terminal, run the following command:</p>
<pre><code>yarn add gatsby-transformer-remark
</code></pre>
<p>Then, in <code>gatsby-config.js</code>, add <code>gatsby-transformer-remark</code> to the list of plugins.</p>
<pre class=" language-js"><code class="prism  language-js">  <span class="token comment">// gatsby-config.js</span>
  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span>
    <span class="token template-string"><span class="token string">`gatsby-transformer-remark`</span></span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
  <span class="token punctuation">]</span>
</code></pre>
<p>We also need to add another plugin for <code>gatsby-source-filesystem</code> to tell GraphQL where to find our blog posts: our <code>pages/</code> directory.</p>
<pre class=" language-js"><code class="prism  language-js"><span class="token comment">// gatsby-config.js</span>
<span class="token punctuation">{</span>
plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>
<span class="token operator">...</span> 
<span class="token punctuation">{</span>
  resolve<span class="token punctuation">:</span>  <span class="token template-string"><span class="token string">`gatsby-source-filesystem`</span></span><span class="token punctuation">,</span>
  options<span class="token punctuation">:</span>  <span class="token punctuation">{</span>
  name<span class="token punctuation">:</span>  <span class="token template-string"><span class="token string">`pages`</span></span><span class="token punctuation">,</span>
  path<span class="token punctuation">:</span>  <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>__dirname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/src/pages`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token operator">...</span>
<span class="token punctuation">]</span>
</code></pre>
<p>Restart your development server, then head over to <code>http://localhost:8000/___graphql</code>.</p>
<p>Gatsby comes pre-configured with GraphQL which means we have access to GraphiQL.</p>
<p>To get a list of all blog posts, we’ll use the <code>AllMarkdownRemark</code> plugin. Select the following options in the Explorer panel:</p>
<pre><code>AllMarkdownRemark &gt; edges &gt; node &gt; frontmatter &gt; date title
</code></pre>
<p>Then press the play button.</p>
<p>You should see your blog post data in the right-hand panel.</p>
<p><img src="tutorial/06-all-blogs.png" alt="All blogs"></p>
<p>Copy this GraphQL query and head over to <code>blog.js</code>.</p>
<p>First, import <code>graphql</code> from <code>gatsby</code>.</p>
<pre class=" language-jsx"><code class="prism  language-jsx"><span class="token comment">// blog.js</span>
<span class="token operator">...</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> graphql <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"gatsby"</span>
<span class="token operator">...</span>
</code></pre>
<p>Then, after the blog export, add the following code, pasting in the GraphQL query we just copied from GraphiQL where it says <code>&lt;&lt;Your code here&gt;&gt;</code></p>
<pre class=" language-jsx"><code class="prism  language-jsx"><span class="token keyword">export</span> <span class="token keyword">const</span> AllBlogsQuery <span class="token operator">=</span> graphql<span class="token template-string"><span class="token string">`
  &lt;&lt;your code here&gt;&gt;
`</span></span>
</code></pre>
<p>My query looks like this (I added <code>description</code> <code>path</code>, and <code>author</code> to the list of data to retrieve from the frontmatter).</p>
<pre class=" language-jsx"><code class="prism  language-jsx"><span class="token comment">// blog.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> AllBlogsQuery <span class="token operator">=</span> graphql<span class="token template-string"><span class="token string">`
  query AllBlogPosts {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            title
            description
            author
            path
          }
        }
      }
    }
  }
`</span></span>
</code></pre>
<p>The last thing we have to do is pass <code>data</code> from the query as a parameter to the blog page. Let’s console log it to see if it’s working.</p>
<pre class=" language-jsx"><code class="prism  language-jsx"><span class="token comment">// blog.js</span>
<span class="token operator">...</span>
<span class="token keyword">const</span> <span class="token function-variable function">Blog</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> data <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Blog<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">}</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span>
</code></pre>
<p><img src="tutorial/07-console.png" alt="Console"></p>
<h4 id="dynamically-creating-a-list-of-blogs">Dynamically Creating A List Of Blogs</h4>
<p>Now let’s iterate over our blog data and create nodes for each of them.</p>
<p>Create two new files in the component folder called <code>Post.js</code> and <code>post.css</code>.</p>
<p><code>Post</code> will take five arguments:</p>
<ul>
<li><code>title</code></li>
<li><code>author</code></li>
<li><code>description</code></li>
<li><code>date</code></li>
<li><code>path</code></li>
</ul>
<pre class=" language-jsx"><code class="prism  language-jsx"><span class="token comment">// Post.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span>  <span class="token string">"react"</span>
<span class="token keyword">import</span>  <span class="token punctuation">{</span> Link <span class="token punctuation">}</span>  <span class="token keyword">from</span>  <span class="token string">"gatsby"</span>
<span class="token keyword">import</span>  <span class="token string">"./post.css"</span>

<span class="token keyword">const</span>  <span class="token function-variable function">Post</span>  <span class="token operator">=</span>  <span class="token punctuation">(</span><span class="token punctuation">{</span>  title<span class="token punctuation">,</span>  author<span class="token punctuation">,</span>  date<span class="token punctuation">,</span>  description<span class="token punctuation">,</span>  path  <span class="token punctuation">}</span><span class="token punctuation">)</span>  <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>  <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span>  <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>post-title<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span>  <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>post-description<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>description<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span>  <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>post-written-by<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      Written by <span class="token punctuation">{</span>author<span class="token punctuation">}</span> on <span class="token punctuation">{</span>date<span class="token punctuation">}</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span>  <span class="token attr-name">to</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>path<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span>Read more<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span>

<span class="token keyword">export</span>  <span class="token keyword">default</span> Post
</code></pre>
<p>Here is the styling for our blog posts:</p>
<pre class=" language-css"><code class="prism  language-css"><span class="token comment">/* post.css */</span>
<span class="token selector"><span class="token class">.post</span> </span><span class="token punctuation">{</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span>  <span class="token number">80</span>px<span class="token punctuation">;</span>
  <span class="token property">padding-bottom</span><span class="token punctuation">:</span>  <span class="token number">80</span>px<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span>  <span class="token number">2</span>px  solid  white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector"><span class="token class">.post</span> <span class="token class">.post-title</span>  </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span>  <span class="token number">3</span>em<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span>  <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector"><span class="token class">.post</span> <span class="token class">.post-description</span>  </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span>  <span class="token number">1.5</span>em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector"><span class="token class">.post</span> <span class="token class">.post-written-by</span>  </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span>  <span class="token number">1</span>em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector"><span class="token class">.post</span> a  </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span>  white<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span>  <span class="token hexcode">#a64ac9</span><span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span>  <span class="token number">16</span>px  <span class="token number">24</span>px<span class="token punctuation">;</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span>  none<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span>  <span class="token number">16</span>px<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span>  inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>Now we can import <code>Post</code> into <code>blog.js</code> and render a new post for each markdown file:</p>
<pre class=" language-jsx"><code class="prism  language-jsx"><span class="token comment">// blog.js</span>
<span class="token operator">...</span>
<span class="token keyword">import</span> Post <span class="token keyword">from</span>  <span class="token string">"../components/Post"</span>

<span class="token operator">...</span>

<span class="token keyword">const</span>  <span class="token function-variable function">Blog</span>  <span class="token operator">=</span>  <span class="token punctuation">(</span><span class="token punctuation">{</span>  data  <span class="token punctuation">}</span><span class="token punctuation">)</span>  <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Blog<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">{</span>data<span class="token punctuation">.</span>allMarkdownRemark<span class="token punctuation">.</span>edges<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>post  <span class="token operator">=&gt;</span>  <span class="token punctuation">{</span>
      <span class="token keyword">const</span>  <span class="token punctuation">{</span>  title<span class="token punctuation">,</span>  author<span class="token punctuation">,</span>  date<span class="token punctuation">,</span>  description<span class="token punctuation">,</span>  path  <span class="token punctuation">}</span>  <span class="token operator">=</span> post<span class="token punctuation">.</span>node<span class="token punctuation">.</span>frontmatter

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Post</span>
        <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>title<span class="token punctuation">}</span></span>
        <span class="token attr-name">author</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>author<span class="token punctuation">}</span></span>
        <span class="token attr-name">date</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>date<span class="token punctuation">}</span></span>
        <span class="token attr-name">description</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>description<span class="token punctuation">}</span></span>
        <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>date<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">__</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">}</span></span>
        <span class="token attr-name">path</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>path<span class="token punctuation">}</span></span>
     <span class="token punctuation">/&gt;</span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span>
</code></pre>
<p>Your blog should now look like this:</p>
<p><img src="tutorial/08-posts.png" alt="Posts"></p>
<h4 id="dynamically-generating-individual-blog-pages">Dynamically Generating Individual Blog Pages</h4>
<p>Now that we’ve generated a list of blogs on our blog page, how can we create a page for each blog which appears when the user clicks ‘Read More’?</p>
<p>We could manually create a page for each post, but this would be tedious.</p>
<p>Luckily Gatsby, in combination with node.js, provides functionality for dynamically generating pages.</p>
<p>Let’s first create the GraphQL query for retrieving data for an individual blog post.</p>
<p>When we created the GraphQL schema for retrieving all blog posts, we used the <code>allMarkdownRemark</code> plugin.</p>
<p>This time, we only want the data for an individual blog post, so we’ll use the <code>markdownRemark</code> plugin.</p>
<p>In the Explorer panel on the left, select:</p>
<pre><code>`markdownRemark &gt; frontmatter(purple) &gt; path &gt; eq: "_"
</code></pre>
<p><em>Be sure to select the purple <code>frontmatter</code> for this part of the query; it’s an argument versus a field name.</em></p>
<p>This tells GraphQL that we will select a specific asset by their path, which will be passed as a parameter.</p>
<p>For this individual post we want to get several pieces of frontmatter data, so we’ll select</p>
<pre><code>markdownRemark &gt; html, frontmatter (blue) &gt; author date path title
</code></pre>
<p><em>Be sure to select the blue <code>frontmatter</code> for this part of the query; it’s a field name versus an argument.</em></p>
<p>Next, where we’re passing an argument to <code>markdownRemark</code>, we have to give GraphQL an <code>eq</code> value to look for. In our case, we’ll pass the <code>path</code> for the blog post whose content we want to display.</p>
<p>We first need to pass this argument to our query, before we can pass it to the <code>markdownRemark</code> plugin. You can also change the name of the query to be more semantic:</p>
<pre class=" language-graphql"><code class="prism  language-graphql"><span class="token keyword">query</span> BlogPost<span class="token punctuation">(</span><span class="token variable">$path</span><span class="token punctuation">:</span> String<span class="token operator">!</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   markdownRemark<span class="token punctuation">(</span><span class="token attr-name">frontmatter</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token attr-name">path</span><span class="token punctuation">:</span> <span class="token attr-name">eq</span><span class="token punctuation">:</span> <span class="token variable">$path</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    frontmatter <span class="token punctuation">{</span>
      author
      date
      title
      path
    <span class="token punctuation">}</span>
    html
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<p><em><code>String!</code> tells GraphQL that the path argument we’re passing is of type <code>String</code> and is required.</em></p>
<p>Now let’s test if this query actually works.</p>
<p>If we press play, we get an error:</p>
<p><img src="tutorial/09-error.png" alt="Error"></p>
<p>This is due to the fact that our query expects an argument but we haven’t passed it one!</p>
<p>Open the panel at the bottom called Query Variables and enter the following:</p>
<pre class=" language-graphql"><code class="prism  language-graphql"><span class="token punctuation">{</span>
  <span class="token string">"path"</span><span class="token punctuation">:</span> <span class="token string">"/april-fools"</span>
<span class="token punctuation">}</span>
</code></pre>
<p>When we press the play  button now we get the data back for our April Fools blog.</p>
<p><img src="tutorial/10-post.png" alt="Post"></p>
<p>Now that we have our query, what do we do with it?</p>
<p>First, let’s build a template which will denote how each blog post should be structured.</p>
<p>In the <code>src/</code> directory, create a new folder called <code>templates</code> and add a file inside called <code>blogTemplate.js</code>.</p>
<p>We first need to include some imports:</p>
<pre class=" language-jsx"><code class="prism  language-jsx"><span class="token comment">// templates/blogTemplate.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> graphql<span class="token punctuation">,</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"gatsby"</span>

<span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">"../components/Layout"</span>
</code></pre>
<p>Next, let’s create the function skeleton:</p>
<pre class=" language-jsx"><code class="prism  language-jsx"><span class="token comment">// templates/blogTemplate.js</span>
<span class="token operator">...</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Template</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre>
<p>This template will take in our blog data and render it accordingly.</p>
<p>Finally, let’s add our GraphQL query to the bottom of the file.</p>
<pre class=" language-jsx"><code class="prism  language-jsx"><span class="token comment">// templates/blogTemplate.js</span>
<span class="token operator">...</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> postQuery <span class="token operator">=</span> graphql<span class="token template-string"><span class="token string">`
query BlogPost($path: String!) {
   markdownRemark(frontmatter: { path: { eq: $path }}) {
    frontmatter {
      author
      date
      title
      path
    }
    html
  }
}
`</span></span>
</code></pre>
<p>Now let’s construct our blog post structure. First, let’s grab the <code>post</code> and the <code>title</code>, <code>author</code>, and <code>date</code> from the data.</p>
<pre class=" language-jsx"><code class="prism  language-jsx"><span class="token comment">// templates/blogTemplate.js</span>
<span class="token operator">...</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Template</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> post <span class="token operator">=</span> data<span class="token punctuation">.</span>markdownRemark<span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> title<span class="token punctuation">,</span> author<span class="token punctuation">,</span> date <span class="token punctuation">}</span> <span class="token operator">=</span> post<span class="token punctuation">.</span>frontmatter<span class="token punctuation">;</span>
</code></pre>
<p>We’ll wrap our JSX in the <code>&lt;Layout&gt;</code> component, and inside we’ll have:</p>
<ul>
<li>A link back to the blogs page</li>
<li>The blog post title</li>
<li>The posted by with author name and date</li>
<li>A <code>&lt;div&gt;</code> containing the <code>dangerouslySetInnerHTML</code> attribute, which takes the <code>post.html</code> markup as the value.</li>
</ul>
<pre class=" language-jsx"><code class="prism  language-jsx"><span class="token comment">// templates/blogTemplate.js</span>
<span class="token operator">...</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Template</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> post <span class="token operator">=</span> data<span class="token punctuation">.</span>markdownRemark<span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> title<span class="token punctuation">,</span> author<span class="token punctuation">,</span> date <span class="token punctuation">}</span> <span class="token operator">=</span> post<span class="token punctuation">.</span>frontmatter<span class="token punctuation">;</span>
  
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Back to blogs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Posted by <span class="token punctuation">{</span>author<span class="token punctuation">}</span> on <span class="token punctuation">{</span>date<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">dangerouslySetInnerHTML</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> __html<span class="token punctuation">:</span> post<span class="token punctuation">.</span>html <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token operator">...</span>
</code></pre>
<p>Here is the completed <code>blogTemplate.js</code> file:</p>
<pre class=" language-jsx"><code class="prism  language-jsx"><span class="token comment">// templates/blogTemplate.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> graphql<span class="token punctuation">,</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"gatsby"</span>

<span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">"../components/Layout"</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Template</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> post <span class="token operator">=</span> data<span class="token punctuation">.</span>markdownRemark<span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> title<span class="token punctuation">,</span> author<span class="token punctuation">,</span> date <span class="token punctuation">}</span> <span class="token operator">=</span> post<span class="token punctuation">.</span>frontmatter<span class="token punctuation">;</span>
  
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Back to blogs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Posted by <span class="token punctuation">{</span>author<span class="token punctuation">}</span> on <span class="token punctuation">{</span>date<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">dangerouslySetInnerHTML</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> __html<span class="token punctuation">:</span> post<span class="token punctuation">.</span>html <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> postQuery <span class="token operator">=</span> graphql<span class="token template-string"><span class="token string">`
query BlogPost($path: String!) {
   markdownRemark(frontmatter: { path: { eq: $path }}) {
    frontmatter {
      author
      date
      title
      path
    }
    html
  }
}
`</span></span>
</code></pre>
<p>Now that we have our template, let’s use it! We have to tell Gatsby to dynamically generate pages for each blog post, so let’s head over to <code>gatsby-node.js</code>.</p>
<p>Let’s first require the <code>path</code> module:</p>
<pre class=" language-js"><code class="prism  language-js"><span class="token comment">// gatsby-node.js</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
</code></pre>
<p>We’re going to use the <code>exports.createPages</code> <a href="https://www.gatsbyjs.org/docs/node-apis/">API</a> to dynamically generate our pages.</p>
<pre class=" language-js"><code class="prism  language-js"><span class="token comment">// gatsby-node.js</span>
<span class="token operator">...</span>
exports<span class="token punctuation">.</span><span class="token function-variable function">createPages</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> boundActionCreators<span class="token punctuation">,</span> graphql <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> createPages <span class="token punctuation">}</span> <span class="token operator">=</span> boundActionCreators

  <span class="token keyword">const</span> postTemplate <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'src/templates/blogTemplate.js'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>  
</code></pre>
<p>We now have to return a query to get all blog posts, so we can iterate over an generate our pages. We already have this query from a previous step, and all we need for each post is its <code>path</code>.</p>
<pre class=" language-js"><code class="prism // language-js">  <span class="token operator">...</span>
  <span class="token keyword">return</span> <span class="token function">graphql</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `</span></span><span class="token punctuation">)</span>
</code></pre>
<p>Once we receive a response back from the query, we want to reject the promise if an error occurred, and otherwise create a page for each post.</p>
<p>This will create a post at the designated path received from the query results, and will use the <code>postTemplate</code> we declared above (our <code>blogPost.js</code> template) to render each post.</p>
<pre class=" language-js"><code class="prism // language-js">  <span class="token operator">...</span> 
  <span class="token keyword">return</span> <span class="token function">graphql</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>errors<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>errors<span class="token punctuation">)</span> <span class="token punctuation">}</span>

    res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>allMarkdownRemark<span class="token punctuation">.</span>edges<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> node <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">createPage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      path<span class="token punctuation">:</span> node<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>path<span class="token punctuation">,</span>
      component<span class="token punctuation">:</span> postTemplate
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre>
<p>Here is the completed <code>gatsby-node.js</code> file:</p>
<pre class=" language-js"><code class="prism // language-js"><span class="token keyword">const</span> path <span class="token operator">=</span>  <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span>
exports<span class="token punctuation">.</span><span class="token function-variable function">createPages</span>  <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> boundActionCreators<span class="token punctuation">,</span> graphql <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> createPage <span class="token punctuation">}</span> <span class="token operator">=</span> boundActionCreators
<span class="token keyword">const</span> postTemplate <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"src/templates/blogTemplate.js"</span><span class="token punctuation">)</span>

<span class="token keyword">return</span>  <span class="token function">graphql</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
          }
        }
      }
   }
}
`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>errors<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>  Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>errors<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>allMarkdownRemark<span class="token punctuation">.</span>edges<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> node <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">createPage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      path<span class="token punctuation">:</span> node<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>path<span class="token punctuation">,</span>
      component<span class="token punctuation">:</span> postTemplate<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre>
<p>Now we’re ready to see if it worked!</p>
<p>Re-start your development server, then head over to the browser and click one of the blog post “Read more” links:</p>
<p>I’m going to add a bit more styling to make it look nicer.</p>
<p>I’ll create a <code>blogTemplate.css</code> file in the <code>templates/</code> directory:</p>
<pre class=" language-css"><code class="prism  language-css"><span class="token comment">/* blogTemplate.css */</span>
<span class="token selector"><span class="token class">.blogTemplate</span>  <span class="token class">.blogTemplate-title</span>  </span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span>  <span class="token number">80</span>px  <span class="token number">0</span>  <span class="token number">24</span>px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector"><span class="token class">.blogTemplate</span>  <span class="token class">.blogTemplate-posted-by</span>  </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span>  <span class="token number">1.2</span>em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector"><span class="token class">.blogTemplate</span>  a  </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span>  <span class="token hexcode">#fff</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>Then I’ll import the CSS file into <code>blogTemplate.js</code> and add the appropriate class names. I’ll also wrap the JSX inside of <code>&lt;Layout&gt;</code> in a <code>&lt;div&gt;</code> so we can give it a class name of <code>blogTemplate</code>.</p>
<pre class=" language-jsx"><code class="prism  language-jsx"><span class="token comment">// templates/blogTemplate.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> graphql<span class="token punctuation">,</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"gatsby"</span>

<span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">"../components/Layout"</span>

<span class="token keyword">import</span> <span class="token string">"./blogTemplate.css"</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Template</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> post <span class="token operator">=</span> data<span class="token punctuation">.</span>markdownRemark<span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> title<span class="token punctuation">,</span> author<span class="token punctuation">,</span> date <span class="token punctuation">}</span> <span class="token operator">=</span> post<span class="token punctuation">.</span>frontmatter<span class="token punctuation">;</span>
  
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>blogTemplate<span class="token punctuation">'</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/blogs<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Back to blogs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">&gt;</span></span>
        <span class="token operator">&lt;</span>h1 className<span class="token operator">=</span>"blogTemplate<span class="token operator">-</span>title<span class="token operator">&gt;</span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>blogTemplate-posted-by<span class="token punctuation">'</span></span><span class="token punctuation">&gt;</span></span>Posted by <span class="token punctuation">{</span>author<span class="token punctuation">}</span> on <span class="token punctuation">{</span>date<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">dangerouslySetInnerHTML</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> __html<span class="token punctuation">:</span> post<span class="token punctuation">.</span>html <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> postQuery <span class="token operator">=</span> graphql<span class="token template-string"><span class="token string">`
query BlogPost($path: String!) {
   markdownRemark(frontmatter: { path: { eq: $path }}) {
    frontmatter {
      author
      date
      title
      path
    }
    html
  }
}
`</span></span>
</code></pre>
<p>Your blog post should look like this:</p>
<p><img src="tutorial/11-blog-final.png" alt="Blog Final"></p>
<h2 id="deploying-to-netlify">Deploying To Netlify</h2>
<p>Now that we have a working blog, let’s deploy it to Netlify!</p>
<h3 id="setting-up-a-github-repository">Setting Up A GitHub Repository</h3>
<p>First, we need to establish our blog as a Git repository.</p>
<p>On GitHub, create a new repo:</p>
<p><img src="tutorial/12-create-a-repo.png" alt="Repo"></p>
<p>With the terminal, in the project directory run the following commands:</p>
<pre><code>git init
git add .
git commit -m "Adding my blog files"
git remote add origin &lt;&lt;repo-link&gt;&gt;
git push -u origin master
</code></pre>
<h3 id="deploying-to-netlify-1">Deploying To Netlify</h3>
<p>Once your code is on GitHub, it’s time to deploy!</p>
<p>Create an account on <a href="https://www.netlify.com/">Netlify</a> or sign in.</p>
<p>Click “New site from Git” and authenticate with GitHub.</p>
<p>Select your newly-created repository and click “Deploy.”</p>
<p><img src="tutorial/13-netlify-new-project.png" alt="Netlify"></p>
<p>Every time you push to the master branch, your site will auto-deploy (you can change the deploy configuration but this is the default.)</p>
<p>You can even add a <a href="https://docs.netlify.com/domains-https/custom-domains/">custom domain</a> to really make the blog your own.</p>
<h2 id="conclusion">Conclusion</h2>
<p>And that’s it! I hope this was helpful to explain the process for building a blog with Gatsby.</p>
<p>This process is tedious, so once you understand the architecture I would recommend using the Gatsby blog starter.</p>
<p>Feel free to contact me on Twitter if you have any questions.</p>
<p>Happy blogging!</p>

