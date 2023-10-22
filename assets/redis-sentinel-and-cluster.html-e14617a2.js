import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as l,e as a,a as e,b as s}from"./app-3e6d2d9d.js";const t={},d=a(`<h1 id="哨兵模式" tabindex="-1"><a class="header-anchor" href="#哨兵模式" aria-hidden="true">#</a> 哨兵模式</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><h3 id="主机宕机" tabindex="-1"><a class="header-anchor" href="#主机宕机" aria-hidden="true">#</a> 主机宕机</h3><p>操作：</p><ul><li>关闭<code>master</code>和所有<code>slave</code></li><li>找一个<code>slave</code>作为<code>master</code></li><li>修改其他<code>slave</code>的配置，连接新的主</li><li>启动新的<code>master</code>与<code>slave</code></li><li>全量复制 * N + 部分复制 * N</li></ul><p>问题：</p><ul><li>关闭期间的数据服务谁来承接？</li><li>找一个主？怎么找法？</li><li>修改配置后，原始的主恢复了怎么办？</li></ul><h3 id="哨兵" tabindex="-1"><a class="header-anchor" href="#哨兵" aria-hidden="true">#</a> 哨兵</h3><p>哨兵（<code>sentinel</code>）是一个分布式系统，用于对主从结构中的每台服务器进行监控，当出现故障时通过投票机制选择新的<code>master</code>并将所有<code>slave</code>连接到新的<code>master</code>。</p><h3 id="哨兵的作用" tabindex="-1"><a class="header-anchor" href="#哨兵的作用" aria-hidden="true">#</a> 哨兵的作用</h3><ul><li><p>监控</p><ul><li>不断的检查<code>master</code>和<code>slave</code>是否正常运行。</li><li><code>master</code>存活检测、<code>master</code>与<code>slave</code>运行情况检测</li></ul></li><li><p>通知（提醒）</p><ul><li>当被监控的服务器出现问题时，向其他（哨兵间，客户端）发送通知。</li></ul></li><li><p>自动故障转移</p><ul><li>断开<code>master</code>与<code>slave</code>连接，选取一个<code>slave</code>作为<code>master</code>，将其他<code>slave</code>连接到新的<code>master</code>，并告知客户端新的服务器地址</li></ul></li></ul><p>注意：</p><ul><li>哨兵也是一台<code>Redis</code>服务器，只是不提供数据服务</li><li>通常哨兵配置数量为单数</li></ul><h2 id="启用哨兵模式" tabindex="-1"><a class="header-anchor" href="#启用哨兵模式" aria-hidden="true">#</a> 启用哨兵模式</h2><h3 id="配置哨兵" tabindex="-1"><a class="header-anchor" href="#配置哨兵" aria-hidden="true">#</a> 配置哨兵</h3><ul><li><p>配置一拖二的主从结构</p></li><li><p>配置三个哨兵（配置相同，端口不同）</p><ul><li>参看<code>sentinel.conf</code></li></ul></li><li><p>启动哨兵</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>redis-sentinel sentinel-端口号.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><ol><li><p>配置哨兵 1</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token punctuation">[</span>echo@centos ~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">cp</span> /opt/software/redis/sentinel.conf /etc/redis/sentinel-26379.conf
 <span class="token punctuation">[</span>echo@centos ~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">cp</span> /opt/software/redis/sentinel.conf /etc/redis/sentinel-26380.conf
 <span class="token punctuation">[</span>echo@centos ~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">cp</span> /opt/software/redis/sentinel.conf /etc/redis/sentinel-26381.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置哨兵 2</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token punctuation">[</span>echo@centos ~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">cat</span> /etc/redis/sentinel-26379.conf <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token string">&quot;#&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token string">&quot;^$&quot;</span>
 port <span class="token number">26379</span>
 daemonize no
 pidfile /var/run/redis-sentinel.pid
 logfile <span class="token string">&quot;&quot;</span>
 <span class="token function">dir</span> /var/lib/redis
 sentinel monitor mymaster <span class="token number">127.0</span>.0.1 <span class="token number">6379</span> <span class="token number">2</span>
 sentinel down-after-milliseconds mymaster <span class="token number">30000</span>
 acllog-max-len <span class="token number">128</span>
 sentinel parallel-syncs mymaster <span class="token number">1</span>
 sentinel failover-timeout mymaster <span class="token number">180000</span>
 sentinel deny-scripts-reconfig <span class="token function">yes</span>
 SENTINEL resolve-hostnames no
 SENTINEL announce-hostnames no
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>master</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token punctuation">[</span>echo@centos ~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> redis-server /etc/redis/redis-6379.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>slave1</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token punctuation">[</span>echo@centos ~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> redis-server /etc/redis/redis-6380.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>slave2</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token punctuation">[</span>echo@centos ~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> redis-server /etc/redis/redis-6381.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>哨兵 1</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token punctuation">[</span>echo@centos ~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> redis-server /etc/redis/redis-26379.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>哨兵 2</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token punctuation">[</span>echo@centos ~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> redis-server /etc/redis/redis-26380.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>哨兵 3</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token punctuation">[</span>echo@centos ~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> redis-server /etc/redis/redis-26381.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>哨兵客户端 1</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token punctuation">[</span>echo@centos ~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> redis-cli <span class="token parameter variable">-p</span> <span class="token number">26379</span>
  <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> name <span class="token number">123</span>
  <span class="token punctuation">(</span>error<span class="token punctuation">)</span> ERR unknown <span class="token builtin class-name">command</span> <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">set</span><span class="token variable">\`</span></span>, with args beginning with: <span class="token variable"><span class="token variable">\`</span>name<span class="token variable">\`</span></span>, <span class="token string">&#39;123&#39;</span>,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>master</code>客户端</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token punctuation">[</span>echo@centos ~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> redis-cli <span class="token parameter variable">-p</span> <span class="token number">6379</span>
  <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> name itheima
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>slave</code>客户端</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token punctuation">[</span>echo@centos ~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> redis-cli <span class="token parameter variable">-p</span> <span class="token number">6380</span>
  <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get name 
  <span class="token string">&quot;itheima&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>master</code>宕机</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  ^C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>哨兵选取新的<code>master</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  * +slave slave <span class="token number">127.0</span>.0.1:6381 <span class="token number">127.0</span>.0.1 <span class="token number">6381</span> @ mymaster <span class="token number">127.0</span>.0.1 <span class="token number">6380</span>
  * +slave slave <span class="token number">127.0</span>.0.1:6379 <span class="token number">127.0</span>.0.1 <span class="token number">6379</span> @ mymaster <span class="token number">127.0</span>.0.1 <span class="token number">6380</span>
  <span class="token comment"># +sdown slave 127.0.0.1:6379 127.0.0.1 6379 @ mymaster 127.0.0.1 6380</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><table><thead><tr><th style="text-align:center;">配置项</th><th style="text-align:center;">范例</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">sentinel auth-pass &lt;服务器名称&gt; &lt;passward&gt;</td><td style="text-align:center;">sentinel auth-pass mymaster itcast</td><td style="text-align:center;">连接服务器口令</td></tr><tr><td style="text-align:center;">sentinel down-after-milliseconds &lt;自定义服务名称&gt; &lt;主机地址&gt; &lt;端口&gt; &lt;主从服务器总量&gt;</td><td style="text-align:center;">sentinel monitor mymaster 192.168.194.131 6381 1</td><td style="text-align:center;">设置哨兵监听的主服务器信息，最后的参数决定了最终参与选举的服务器数量（-1）</td></tr><tr><td style="text-align:center;">sentinel down-after-milliseconds &lt;服务名称&gt; &lt;毫秒数（整数）&gt;</td><td style="text-align:center;">sentinel down-after-milliseconds mymaster 3000</td><td style="text-align:center;">指定哨兵在监控 Redis 服务时，判定服务器挂掉的时间周期，默认 30 秒（30000），也是主从切换的启动条件之一</td></tr><tr><td style="text-align:center;">sentinel parallel-syncs &lt;服务名称&gt; &lt;服务器数（整数）&gt;</td><td style="text-align:center;">sentinel parallel-syncs mymaster 1</td><td style="text-align:center;">指定同时进行主从的 slave 数量，数值越大，要求网络资源越高，要求约小，同步时间约长</td></tr><tr><td style="text-align:center;">sentinel failover-timeout &lt;服务名称&gt; &lt;毫秒数（整数）&gt;</td><td style="text-align:center;">sentinel failover-timeout mymaster 9000</td><td style="text-align:center;">指定出现故障后，故障切换的最大超时时间，超过该值，认定切换失败，默认3分钟</td></tr><tr><td style="text-align:center;">sentinel notification-script &lt;服务名称&gt; &lt;脚本路径&gt;</td><td style="text-align:center;"></td><td style="text-align:center;">服务器无法正常联通时，设定的执行脚本，通常调试使用。</td></tr></tbody></table><h2 id="哨兵工作原理" tabindex="-1"><a class="header-anchor" href="#哨兵工作原理" aria-hidden="true">#</a> 哨兵工作原理</h2><h3 id="主从切换" tabindex="-1"><a class="header-anchor" href="#主从切换" aria-hidden="true">#</a> 主从切换</h3><p>哨兵在进行主从切换过程中经历三个阶段：</p><ul><li>监控</li><li>通知</li><li>故障转移</li></ul><h4 id="监控阶段" tabindex="-1"><a class="header-anchor" href="#监控阶段" aria-hidden="true">#</a> 监控阶段</h4><p>用于同步各个节点的状态信息</p><ul><li><p>获取各个<code>sentinel</code>的状态（是否在线）</p></li><li><p>获取<code>master</code>的状态</p><ul><li><p><code>master</code>属性</p><ul><li><code>runid</code></li><li><code>role：master</code></li></ul></li><li><p>各个<code>slave</code>的详细信息</p></li></ul></li><li><p>获取所有<code>slave</code>的状态（根据<code>master</code>中的<code>slave</code>信息）</p><ul><li><p><code>slave</code>属性</p><ul><li><code>runid</code></li><li><code>role：slave</code></li><li><code>master_host、master_port</code></li><li><code>offset</code></li><li>……</li></ul></li></ul></li></ul><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/redis-sentinel-and-cluster/monitor-phase.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="通知阶段" tabindex="-1"><a class="header-anchor" href="#通知阶段" aria-hidden="true">#</a> 通知阶段</h4><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/redis-sentinel-and-cluster/notice-phase.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="故障转移阶段" tabindex="-1"><a class="header-anchor" href="#故障转移阶段" aria-hidden="true">#</a> 故障转移阶段</h4><h5 id="主观下线与客观下线" tabindex="-1"><a class="header-anchor" href="#主观下线与客观下线" aria-hidden="true">#</a> 主观下线与客观下线</h5><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/redis-sentinel-and-cluster/subjective-offline-and-objective-offline.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="哨兵竞选" tabindex="-1"><a class="header-anchor" href="#哨兵竞选" aria-hidden="true">#</a> 哨兵竞选</h5><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/redis-sentinel-and-cluster/sentinel-campaign.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="选取备用-master" tabindex="-1"><a class="header-anchor" href="#选取备用-master" aria-hidden="true">#</a> 选取备用 master</h5><p>服务器列表中挑选备选<code>master</code>。</p><p>挑选原则：</p><ul><li><p>不在线的<code>OUT</code></p></li><li><p>响应慢的<code>OUT</code></p></li><li><p>与原<code>master</code>断开时间久的<code>OUT</code></p></li><li><p>优先原则</p><ul><li>优先级</li><li><code>offset</code></li><li><code>runid</code></li></ul></li><li><p>发送指令（<code>sentinel</code>）</p><ul><li>向新的<code>master</code>发送<code>slaveof no one</code></li><li>向其他<code>slave</code>发送<code>slaveof</code>新<code>masterIP</code>端口</li></ul></li></ul><h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h4><ul><li><p>监控</p><ul><li>同步信息</li></ul></li><li><p>通知</p><ul><li>保持联通</li></ul></li><li><p>故障转移</p><ul><li>发现问题</li><li>竞选负责人</li><li>优选新<code>master</code></li><li>新<code>master</code>上任，其他<code>slave</code>切换<code>master</code>，原<code>master</code>作为<code>slave</code>故障回复后连接</li></ul></li></ul><h1 id="集群" tabindex="-1"><a class="header-anchor" href="#集群" aria-hidden="true">#</a> 集群</h1><h2 id="简介-1" tabindex="-1"><a class="header-anchor" href="#简介-1" aria-hidden="true">#</a> 简介</h2><h3 id="现状问题" tabindex="-1"><a class="header-anchor" href="#现状问题" aria-hidden="true">#</a> 现状问题</h3><p>业务发展过程中遇到的峰值瓶颈：</p>`,43),c=e("ul",null,[e("li",null,[e("code",null,"redis"),s("提供的服务"),e("code",null,"OPS"),s("可以达到 "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mn",null,"10")]),e("annotation",{encoding:"application/x-tex"},"10")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6444em"}}),e("span",{class:"mord"},"10")])])]),s(" 万/秒，当前业务"),e("code",null,"OPS"),s("已经达到 "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mn",null,"10")]),e("annotation",{encoding:"application/x-tex"},"10")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6444em"}}),e("span",{class:"mord"},"10")])])]),s(" 万/秒")]),e("li",null,[s("内存单机容量达到 "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mn",null,"256"),e("mi",null,"G")]),e("annotation",{encoding:"application/x-tex"},"256 G")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6833em"}}),e("span",{class:"mord"},"256"),e("span",{class:"mord mathnormal"},"G")])])]),s("，当前业务需求内存容量 "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mn",null,"1"),e("mi",null,"T")]),e("annotation",{encoding:"application/x-tex"},"1 T")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6833em"}}),e("span",{class:"mord"},"1"),e("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T")])])])]),e("li",null,"使用集群的方式可以快速解决上述问题")],-1),r=a(`<h3 id="集群架构" tabindex="-1"><a class="header-anchor" href="#集群架构" aria-hidden="true">#</a> 集群架构</h3><p>集群就是使用网络将若干台计算机联通起来，并提供统一的管理方式，使其对外呈现单机的服务效果。</p><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/redis-sentinel-and-cluster/cluster-architecture.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="集群作用" tabindex="-1"><a class="header-anchor" href="#集群作用" aria-hidden="true">#</a> 集群作用</h3><ul><li>分散单台服务器的访问压力，实现负载均衡</li><li>分散单台服务器的存储压力，实现可扩展性</li><li>降低单台服务器宕机带来的业务灾难</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/redis-sentinel-and-cluster/cluster-effect.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h1 id="集群结构设计" tabindex="-1"><a class="header-anchor" href="#集群结构设计" aria-hidden="true">#</a> 集群结构设计</h1><h2 id="数据存储设计" tabindex="-1"><a class="header-anchor" href="#数据存储设计" aria-hidden="true">#</a> 数据存储设计</h2><ul><li>通过算法设计，计算出<code>key</code>应该保存的位置</li><li>将所有的存储空间计划切割成 16384 份，每台主机保存一部分；每份代表的是一个存储空间（<strong>槽</strong>），不是一个<code>key</code>的保存空间</li><li>将<code>key</code>按照计算出的保存位置放到对应的存储空间</li><li>增强可扩展性，当有新的服务器加入事，原来的每个服务器取出自己的一部分槽给新的</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/redis-sentinel-and-cluster/data-storage-design1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/redis-sentinel-and-cluster/data-storage-design2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="集群内部通讯设计" tabindex="-1"><a class="header-anchor" href="#集群内部通讯设计" aria-hidden="true">#</a> 集群内部通讯设计</h2><ul><li>各个数据库相互通信，保存各个库中槽的编号数据</li><li>一次命中，直接返回</li><li>一次未命中，告知具体位置</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/redis-sentinel-and-cluster/cluster-internal-communication-design.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="集群结构搭建" tabindex="-1"><a class="header-anchor" href="#集群结构搭建" aria-hidden="true">#</a> 集群结构搭建</h2><h3 id="搭建方式" tabindex="-1"><a class="header-anchor" href="#搭建方式" aria-hidden="true">#</a> 搭建方式</h3><ul><li><p>原生安装（单条命令）</p><ul><li>配置服务器（3 主 3 从）</li><li>建立通信（<code>Meet</code>）</li><li>分槽（<code>Slot</code>）</li><li>搭建主从（<code>master-slave</code>）</li></ul></li><li><p>工具安装（批处理）</p></li></ul><h3 id="cluster-配置" tabindex="-1"><a class="header-anchor" href="#cluster-配置" aria-hidden="true">#</a> Cluster 配置</h3><ul><li><p>添加节点</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cluster-enabled <span class="token function">yes</span><span class="token operator">|</span>no
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>cluster</code>配置文件名，该文件属于自动生成，仅用于快速查找文件并查询文件内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cluster-config-file <span class="token operator">&lt;</span>filename<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>节点服务响应超时时间，用于判定该节点是否下线或切换为从节点</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cluster-node-timeout <span class="token operator">&lt;</span>milliseconds<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>master</code>连接的<code>slave</code>最小数量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cluster-migration-barrier <span class="token operator">&lt;</span>count<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="cluster-节点操作命令" tabindex="-1"><a class="header-anchor" href="#cluster-节点操作命令" aria-hidden="true">#</a> Cluster 节点操作命令</h3><ul><li><p>查看集群节点信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cluster nodes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>进入一个从节点<code>Redis</code>，切换其主节点</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cluster replicate <span class="token operator">&lt;</span>master-id<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>发现一个新节点，新增主节点</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cluster meet ip:port
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>忽略一个没有<code>solt</code>的节点</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cluster forget <span class="token operator">&lt;</span>id<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>手动故障转移</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cluster failover
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="redis-trib-命令" tabindex="-1"><a class="header-anchor" href="#redis-trib-命令" aria-hidden="true">#</a> redis-trib 命令</h3><ul><li><p>添加节点</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-trib.rb add-node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>删除节点</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-trib.rb del-node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>重新分片</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-trib.rb reshard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><ol><li><p><code>cluster</code>配置</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code> cluster-enabled yes
 cluster-config-file nodes-6379.conf
 cluster-node-timeout 15000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>master1</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token punctuation">[</span>echo@centos ~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> redis-server /etc/redis/redis-6379.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>master2</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token punctuation">[</span>echo@centos ~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> redis-server /etc/redis/redis-6380.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>master3</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token punctuation">[</span>echo@centos ~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> redis-server /etc/redis/redis-6381.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>slave1</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token punctuation">[</span>echo@centos ~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> redis-server /etc/redis/redis-6382.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>slave2</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token punctuation">[</span>echo@centos ~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> redis-server /etc/redis/redis-6383.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>slave3</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token punctuation">[</span>echo@centos ~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> redis-server /etc/redis/redis-6384.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>已开启的进程</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token punctuation">[</span>echo@centos ~<span class="token punctuation">]</span>$ <span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> redis-
 <span class="token number">6379</span>
 <span class="token number">6380</span>
 <span class="token number">6382</span>
 <span class="token number">6383</span>
 <span class="token number">6384</span>
 <span class="token number">6381</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>安装<code>ruby</code>和<code>gem</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token punctuation">[</span>echo@centos ~<span class="token punctuation">]</span>$ ruby <span class="token parameter variable">-v</span>
  ruby <span class="token number">2.7</span>.0p0
  <span class="token punctuation">[</span>echo@centos ~<span class="token punctuation">]</span>$ gem <span class="token parameter variable">-v</span>
  <span class="token number">3.1</span>.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>开启集群 1</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token punctuation">[</span>echo@centos /<span class="token punctuation">]</span>$ <span class="token function">sudo</span> ./etc/redis/redis-trib.rb create <span class="token parameter variable">--replicas</span> <span class="token number">1</span> <span class="token number">127.0</span>.0.1:6379 <span class="token number">127.0</span>.0.1:6380 <span class="token number">127.0</span>.0.1:6381 <span class="token number">127.0</span>.0.1:6382 <span class="token number">127.0</span>.0.1:6383 <span class="token number">127.0</span>.0.1:6384
  WARNING: redis-trib.rb is not longer available<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>开启集群 2</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token punctuation">[</span>echo@centos /<span class="token punctuation">]</span>$ redis-cli <span class="token parameter variable">--cluster</span> create <span class="token number">127.0</span>.0.1:6379 <span class="token number">127.0</span>.0.1:6380 <span class="token number">127.0</span>.0.1:6381 <span class="token number">127.0</span>.0.1:6382 <span class="token number">127.0</span>.0.1:6383 <span class="token number">127.0</span>.0.1:6384 --cluster-replicas <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>master1</code>存数据</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token punctuation">[</span>echo@centos ~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> redis-cli <span class="token parameter variable">-p</span> <span class="token number">6379</span>
  <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> name itheima
  <span class="token punctuation">(</span>error<span class="token punctuation">)</span> MOVED <span class="token number">5798</span> <span class="token number">127.0</span>.0.1:6380
  <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> QUIT
  <span class="token punctuation">[</span>echo@centos ~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> redis-cli <span class="token parameter variable">-p</span> <span class="token number">6379</span> <span class="token parameter variable">-C</span>
  <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> name itheima
  <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>slave1</code>取数据</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token punctuation">[</span>echo@centos ~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> redis-cli <span class="token parameter variable">-c</span> <span class="token parameter variable">-p</span> <span class="token number">6382</span>
  <span class="token number">127.0</span>.0.1:638<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> get name
  -<span class="token operator">&gt;</span> Redirected to slot <span class="token punctuation">[</span><span class="token number">5798</span><span class="token punctuation">]</span> located at <span class="token number">127.0</span>.0.1:6380
  <span class="token string">&quot;itheima&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>slave1</code>宕机后重新上线</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  * Connection with replica <span class="token number">127.0</span>.0.1:6382 lost
  <span class="token punctuation">..</span>.
  * Starting BGSAVE <span class="token keyword">for</span> SYNC with target:disk
  <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>master1</code>宕机</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  * Connection to MASTER <span class="token number">127.0</span>.0.1:6379
  * MASTER <span class="token operator">&lt;</span>-<span class="token operator">&gt;</span> REPLICA <span class="token function">sync</span> started
  <span class="token comment"># Error condition on socket for SYNC: Connection refused</span>
  <span class="token comment"># Starting a failover election fo epoch 7.</span>
  <span class="token comment"># Failover election won: I&#39;m the new master</span>
  <span class="token punctuation">..</span>.
  <span class="token comment"># Cluster state changed:ok</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>master1</code>重新上线</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token comment"># Cluster state changed:ok</span>
  * Replica <span class="token number">127.0</span>.0.1:6379 asks <span class="token keyword">for</span> synchronization
  <span class="token punctuation">..</span>.
  * Starting BGSAVE <span class="token keyword">for</span> SYNC with target:disk
  * Background saving started by pid <span class="token number">5766</span>
  <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>‍</p>`,25),o=[d,c,r];function p(u,m){return i(),l("div",null,o)}const b=n(t,[["render",p],["__file","redis-sentinel-and-cluster.html.vue"]]);export{b as default};
