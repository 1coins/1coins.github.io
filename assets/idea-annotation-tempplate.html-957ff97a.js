import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,e as o}from"./app-3e6d2d9d.js";const t={},s=o(`<h1 id="类注释" tabindex="-1"><a class="header-anchor" href="#类注释" aria-hidden="true">#</a> 类注释</h1><p>打开<code>IDEA</code>的<code>Settings</code>，点击<code>Editor--&gt;File and Code Templates</code>，点击右边<code>File</code>选项卡下面的<code>Class</code>，在其中添加下面的内容：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>#<span class="token keyword">if</span> <span class="token punctuation">(</span>$<span class="token punctuation">{</span><span class="token constant">PACKAGE_NAME</span><span class="token punctuation">}</span> <span class="token operator">&amp;&amp;</span> $<span class="token punctuation">{</span><span class="token constant">PACKAGE_NAME</span><span class="token punctuation">}</span> <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token keyword">package</span> $<span class="token punctuation">{</span><span class="token constant">PACKAGE_NAME</span><span class="token punctuation">}</span><span class="token punctuation">;</span>#end
#<span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&quot;File Header.java&quot;</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> echo
 * <span class="token keyword">@date</span> $<span class="token punctuation">{</span>YEAR<span class="token punctuation">}</span>年 $<span class="token punctuation">{</span>MONTH<span class="token punctuation">}</span>月 $<span class="token punctuation">{</span>DAY<span class="token punctuation">}</span>日 $<span class="token punctuation">{</span>TIME<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> $<span class="token punctuation">{</span><span class="token constant">NAME</span><span class="token punctuation">}</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h2><p>​<img src="https://cdn.jsdelivr.net/gh/1coins/assets/idea-annotation-tempplate/sample-template.png" alt="" loading="lazy">​</p><p>在我提供的示例模板中，说明了作者和时间，<code>IDEA</code>​支持的所有的模板参数在下方的<code>description</code>​中被列出来。</p><p>保存后，当你创建一个新的类的时候就会自动添加类注释。如果你想对接口也生效，同时配置上图中的<code>Interface</code>项即可。</p><h1 id="方法注释" tabindex="-1"><a class="header-anchor" href="#方法注释" aria-hidden="true">#</a> 方法注释</h1><p>不同于目前网络上互相复制粘贴的方法注释教程，本文将实现以下功能：</p><ul><li>根据形参数目自动生成<code>@param</code>注解</li><li>根据方法是否有返回值智能生成<code>@return</code>注解</li></ul><p>相较于类模板，为方法添加注释模板就较为复杂，首先在 <code>Settings</code>中点击<code>Editor--&gt;Live Templates</code>。</p><p>点击最右边的<code>+</code>，首先选择<code>2. Template Group...</code>来创建一个模板分组：</p><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/idea-annotation-tempplate/template-group.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在弹出的对话框中填写分组名，我这里叫做<code>userDefine</code>：</p><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/idea-annotation-tempplate/template-group-name.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>然后选中刚刚创建的模板分组<code>userDefine</code>，然后点击<code>+</code>，选择<code>1. Live Template</code>：</p><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/idea-annotation-tempplate/live-templates.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>此时就会创建了一个空的模板，我们修改该模板的<code>Abbreviation、Description</code>和<code>Template text</code>。需要注意的是，<code>Abbreviation</code>必须为<code>*</code>，最后检查下<code>Expand with</code>的值是否为<code>Enter</code>键。</p><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/idea-annotation-tempplate/live-templates-userdefine.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>上图中· <code>Template text</code>内容如下，需要注意首行没有 <code>/</code>，且<code>*</code>是顶格的。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">*</span>
 <span class="token operator">*</span>
 <span class="token operator">*</span> <span class="token annotation punctuation">@author</span> echo
 <span class="token operator">*</span> <span class="token annotation punctuation">@date</span> $date$ $time$$param$ $<span class="token keyword">return</span>$
 <span class="token operator">*</span><span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意到右下角的<code>No applicable contexts yet</code>了吗，这说明此时这个模板还没有指定应用的语言。</p><p>点击<code>Define</code>，在弹框中勾选<code>Java</code>，表示将该模板应用于所有的<code>Java</code>类型文件。</p><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/idea-annotation-tempplate/live-templates-userdefine.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="设置applicable-contexts" tabindex="-1"><a class="header-anchor" href="#设置applicable-contexts" aria-hidden="true">#</a> 设置<code>applicable contexts</code></h2><p>还记得我们配置<code>Template text</code>时里面包含了类似于<code>$date$</code>这样的参数，此时<code>IDEA</code>还不认识这些参数是啥玩意，下面我们对这些参数进行方法映射，让<code>IDEA</code>能够明白这些参数的含义。</p><p>点击<code>Edit variables</code>按钮：</p><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/idea-annotation-tempplate/live-templates-variables.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>为每一个参数设置相对应的<code>Expression</code>：</p><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/idea-annotation-tempplate/live-templates-edit-variables.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="设置expression" tabindex="-1"><a class="header-anchor" href="#设置expression" aria-hidden="true">#</a> 设置<code>Expression</code></h2><p>需要注意的是，<code>date</code>和<code>time</code>的<code>Expression</code>使用的是<code>IDEA</code>内置的函数，直接使用下拉框选择就可以了，而<code>param</code>这个参数<code>IDEA</code>默认的实现很差，因此我们需要手动实现，代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>groovyScript(&quot;def result = &#39;&#39;;def params = \\&quot;\${_1}\\&quot;.replaceAll(&#39;[\\\\\\\\[|\\\\\\\\]|\\\\\\\\s]&#39;, &#39;&#39;).split(&#39;,&#39;).toList(); for(i = 0; i &lt; params.size(); i++) {if(params[i] != &#39;&#39;)result+=&#39;* @param &#39; + params[i] + ((i &lt; params.size() - 1) ? &#39;\\\\r\\\\n &#39; : &#39;&#39;)}; return result == &#39;&#39; ? null : &#39;\\\\r\\\\n &#39; + result&quot;, methodParameters())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>另外<code>return</code>这个参数也要实现了下，代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>groovyScript(&quot;return \\&quot;\${_1}\\&quot; == &#39;void&#39; ? null : &#39;\\\\r\\\\n * @return &#39; + \\&quot;\${_1}\\&quot;&quot;, methodReturnType())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>注：你还注意到我并没有勾选<code>Skip if defined</code>属性，它的意思是如果在生成注释时候如果这一项被定义了，那么鼠标光标就会直接跳过它。我并不需要这个功能，因此有被勾选该属性。</p></blockquote><p>点击<code>OK</code>保存设置，大功告成！</p><h1 id="q-a" tabindex="-1"><a class="header-anchor" href="#q-a" aria-hidden="true">#</a> Q &amp; A</h1><ol><li><p>为什么模板的<code>Abbreviation</code>一定要叫<code>*</code>？<code>Expand with</code>要保证是<code>Enter</code>键？</p><blockquote><p>答：因为<code>IDEA</code>模板的生成逻辑是<code>模板名 + 生成键</code>，当生成键是<code>Enter</code>时，我们输入<code>* + Enter</code>就能够触发模板。<br> 这也同时说明了为什么注释模板首行是一个<code>*</code>了，因为当我们先输入<code>/*</code>，然后输入<code>* + Enter</code>，触发模板，首行正好拼成了<code>/**</code>，符合<code>Javadoc</code>的规范。</p></blockquote></li><li><p>注释模板中为什么有一行空的<code>*</code>？</p><blockquote><p>答：因为我习惯在这一行写方法说明，所以就预留了一行空的写，你也可以把它删掉。</p></blockquote></li><li><p>注释模板中<code>$time$$param$</code> \`这两个明明不相干的东西为什么紧贴在一起？</p><blockquote><p>答：首先网上提供的大部分<code>param</code>生成函数在无参情况下仍然会生成一行空的<code>@param</code>，因此我对<code>param</code>函数的代码进行修改，使得在无参情况下不生成<code>@param</code>，但是这就要求<code>$param$</code>要和别人处在同一行中，不然没法处理退格。</p></blockquote></li><li><p>为什么<code>return</code>参数不使用<code>methodReturnType()</code>， 而要自己实现？</p><blockquote><p>答：<code>methodReturnType()</code>在无返回值的情况下会返回<code>void</code>，这并没有什么意义，因此我对<code>methodReturnType()</code>返回值进行了处理，仅在有返回值时才生成。</p></blockquote></li><li><p>为什么<code>$return$</code> \`不是单独一行？</p><blockquote><p>答：因为当<code>methodReturnType()</code>返回<code>null</code>时，无法处理退格问题，原因同第三点。</p></blockquote></li></ol>`,39),c=[s];function d(i,p){return a(),n("div",null,c)}const u=e(t,[["render",d],["__file","idea-annotation-tempplate.html.vue"]]);export{u as default};
