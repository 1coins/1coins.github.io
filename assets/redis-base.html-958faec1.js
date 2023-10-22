import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as s,e as i}from"./app-3e6d2d9d.js";const a={},d=i(`<h1 id="问题的抛出" tabindex="-1"><a class="header-anchor" href="#问题的抛出" aria-hidden="true">#</a> 问题的抛出</h1><p><strong>出现的问题：</strong></p><ul><li>海量用户</li><li>高并发</li></ul><p><strong>罪魁祸首——关系型数据库：</strong></p><ul><li>性能瓶颈：磁盘IO性能低下</li><li>扩展瓶颈：数据关系复杂，扩展性差，不便于大规模集群</li></ul><p><strong>解决思路：</strong></p><ul><li>降低磁盘IO次数，越低越好： 内存存储</li><li>去除数据间的关系，越简单越好： 不存储关系，只存储数据</li></ul><h1 id="nosql简介" tabindex="-1"><a class="header-anchor" href="#nosql简介" aria-hidden="true">#</a> NoSql简介</h1><p><code>NoSql</code>，即<code>Not-OnlySQL</code>（泛指非关系型的数据库），作为关系型数据库的补充，应用对于海量用户和海量数据前提吓得数据处理问题。</p><p><strong>特征：</strong></p><ul><li>可扩容，可伸缩</li><li>大数据量下得高性能</li><li>灵活得数据模型</li><li>高可用</li></ul><p><strong>常见</strong><code>NoSql</code><strong>数据库：</strong></p><ul><li>Redis</li><li>MemCache</li><li>HBase</li><li>MongoDB</li></ul><h1 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h1><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/redis-base/redis-scene.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h1 id="redis-简介" tabindex="-1"><a class="header-anchor" href="#redis-简介" aria-hidden="true">#</a> Redis 简介</h1><p>概念：<code>Redis(REmote DIctinary Server)</code>是用<code>C</code>语言开发的一个开源的高性能键值对（<code>key-value</code>）数据库。</p><p>特征：</p><ol><li>数据间没有必然的关联关系</li><li>内部采用单线程机制进行工作</li><li>高性能；官方提供测试数据，50 个并发执行 100000 个请求，读的速度是 110000 次/s，写的速度是 81000 次/s</li><li>多数据类型支持：<code>string</code>（字符串类型）、<code>list</code>（列表类型）、<code>hash</code>（散列类型）、<code>set</code>（集合类型）、<code>sorted_set</code>（有序集合类型）</li><li>持久化支持，可以进行数据灾难恢复</li></ol><h1 id="redis-应用" tabindex="-1"><a class="header-anchor" href="#redis-应用" aria-hidden="true">#</a> Redis 应用</h1><ul><li>为热点数据加速查询（主要场景）、如热点商品、热点新闻、热点资讯、推广类等提高访问量信息等</li><li>任务队列、如秒杀、抢购、购票等</li><li>即时信息查询，如各位排行榜、各类网站访问统计、公交到站信息、在线人数信息（聊天室、网站）、设备信号等</li><li>时效性信息控制，如验证码控制，投票控制等</li><li>分布式数据共享，如分布式集群构架中的session分离</li><li>消息队列</li><li>分布式锁</li></ul><h1 id="redis-基本操作" tabindex="-1"><a class="header-anchor" href="#redis-基本操作" aria-hidden="true">#</a> Redis 基本操作</h1><p>命令行模式工具使用：</p><ul><li>功能性命令</li><li>清除屏幕信息</li><li>帮助信息查阅</li><li>退出指令</li></ul><h2 id="信息添加" tabindex="-1"><a class="header-anchor" href="#信息添加" aria-hidden="true">#</a> 信息添加</h2><ul><li><p>功能：设置<code>key-value</code>数据</p></li><li><p>命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span> key value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>范例</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span> name itheima
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="信息查询" tabindex="-1"><a class="header-anchor" href="#信息查询" aria-hidden="true">#</a> 信息查询</h2><ul><li><p>功能：根据<code>key</code>查询对应的<code>value</code>，如果不存在，返回空（<code>null</code>)</p></li><li><p>命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>get key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>范例</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>get name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>功能：清除屏幕中的信息</p></li><li><p>命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">clear</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="帮助命令" tabindex="-1"><a class="header-anchor" href="#帮助命令" aria-hidden="true">#</a> 帮助命令</h2><ul><li><p>功能：获取命令帮助文档，获取组中所有命令信息名称</p></li><li><p>命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">help</span> 命令名称
<span class="token builtin class-name">help</span> @组名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/redis-base/redis-command-help.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="退出客户端命令行模式" tabindex="-1"><a class="header-anchor" href="#退出客户端命令行模式" aria-hidden="true">#</a> 退出客户端命令行模式</h2><ul><li><p>功能：推出客户端</p></li><li><p>命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>quit
<span class="token builtin class-name">exit</span>
<span class="token operator">&lt;</span> ESC<span class="token operator">&gt;</span><span class="token punctuation">(</span>慎用<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h1 id="redis-部署" tabindex="-1"><a class="header-anchor" href="#redis-部署" aria-hidden="true">#</a> Redis 部署</h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h3 id="从源代码-建议" tabindex="-1"><a class="header-anchor" href="#从源代码-建议" aria-hidden="true">#</a> 从源代码（建议）</h3><p>使用以下命令下载，提取和编译<code>Redis</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">wget</span> https://download.redis.io/releases/redis-6.2.1.tar.gz
$ <span class="token function">tar</span> xzf redis-6.2.1.tar.gz
$ <span class="token function">sudo</span> <span class="token function">mv</span> redis-6.2.1 redis
$ <span class="token function">sudo</span> <span class="token function">mkdir</span> /opt/software
$ <span class="token function">sudo</span> <span class="token function">mv</span> redis /opt/software
$ <span class="token builtin class-name">cd</span> /opt/software/redis
$ <span class="token function">sudo</span> <span class="token function">make</span>
$ <span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="来自官方的-ubuntu-ppa" tabindex="-1"><a class="header-anchor" href="#来自官方的-ubuntu-ppa" aria-hidden="true">#</a> 来自官方的 Ubuntu PPA</h3><p>可以从<code>redislabs/redis</code>软件包存储库中安装<code>Redis</code>的最新稳定版本。将存储库添加到<code>apt</code>索引，对其进行更新并安装：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> add-apt-repository ppa:redislabs/redis
$ <span class="token function">sudo</span> <span class="token function">apt-get</span> update
$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动服务" tabindex="-1"><a class="header-anchor" href="#启动服务" aria-hidden="true">#</a> 启动服务</h2><h3 id="服务端" tabindex="-1"><a class="header-anchor" href="#服务端" aria-hidden="true">#</a> 服务端</h3><ul><li><p>直接启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ src/redis-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>指定端口</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-server <span class="token parameter variable">--port</span> <span class="token number">6380</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="客户端" tabindex="-1"><a class="header-anchor" href="#客户端" aria-hidden="true">#</a> 客户端</h3><ul><li><p>直接启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ src/redis-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>指定端口</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token parameter variable">-p</span> <span class="token number">6380</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> foo bar
OK
redis<span class="token operator">&gt;</span> get foo
<span class="token string">&quot;bar&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指定配置文件启动服务" tabindex="-1"><a class="header-anchor" href="#指定配置文件启动服务" aria-hidden="true">#</a> 指定配置文件启动服务</h2><h3 id="生成配置文件" tabindex="-1"><a class="header-anchor" href="#生成配置文件" aria-hidden="true">#</a> 生成配置文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> /etc/redis
<span class="token function">sudo</span> <span class="token function">cp</span> /opt/software/redis/redis.conf /etc/redis
<span class="token function">sudo</span> <span class="token function">cp</span> /etc/redis/redis.conf /etc/redis/redis-6379.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编辑-redis-服务配置文件" tabindex="-1"><a class="header-anchor" href="#编辑-redis-服务配置文件" aria-hidden="true">#</a> 编辑 Redis 服务配置文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vi</span> /etc/redis/redis-6379.conf

<span class="token comment"># 配置端口</span>
port <span class="token number">6379</span>
<span class="token comment"># 配置服务为后台运行，关闭终端窗口后，redis 服务在后台运行</span>
<span class="token comment"># 以守护进程方式启动，使用本启动方式，redis 将以服务的形式存在，日志将不再打印到命令窗口中</span>
daemonize <span class="token function">yes</span>
<span class="token comment"># 配置日志路径</span>
logfile <span class="token string">&quot;/var/log/redis/6379.log&quot;</span>
<span class="token comment"># 配置 redis 工作目录</span>
<span class="token function">dir</span> var/lib/redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动-redis-服务进程并指定配置文件" tabindex="-1"><a class="header-anchor" href="#启动-redis-服务进程并指定配置文件" aria-hidden="true">#</a> 启动 Redis 服务进程并指定配置文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 指定配置文件启动服务</span>

<span class="token comment">## 安装 Redis</span>

\`\`\`bash
<span class="token function">wget</span> https://download.redis.io/releases/redis-6.2.1.tar.gz
<span class="token function">tar</span> xzf redis-6.2.1.tar.gz
<span class="token function">sudo</span> <span class="token function">mv</span> redis-6.2.1 redis
<span class="token function">sudo</span> <span class="token function">mkdir</span> /opt/software
<span class="token function">sudo</span> <span class="token function">mv</span> redis /opt/software
<span class="token builtin class-name">cd</span> /opt/software/redis
<span class="token function">sudo</span> <span class="token function">make</span>
<span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="生成配置文件-1" tabindex="-1"><a class="header-anchor" href="#生成配置文件-1" aria-hidden="true">#</a> 生成配置文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> /etc/redis
<span class="token function">sudo</span> <span class="token function">cp</span> /opt/software/redis/redis.conf /etc/redis
<span class="token function">sudo</span> <span class="token function">cp</span> /etc/redis/redis.conf /etc/redis/redis-6379.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编辑-redis-服务配置文件-1" tabindex="-1"><a class="header-anchor" href="#编辑-redis-服务配置文件-1" aria-hidden="true">#</a> 编辑 redis 服务配置文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vi</span> /etc/redis/redis-6379.conf

<span class="token comment"># 配置端口</span>
port <span class="token number">6379</span>
<span class="token comment"># 配置服务为后台运行，关闭终端窗口后，redis 服务在后台运行</span>
<span class="token comment"># 以守护进程方式启动，使用本启动方式，redis 将以服务的形式存在，日志将不再打印到命令窗口中</span>
daemonize <span class="token function">yes</span>
<span class="token comment"># 配置日志路径</span>
logfile <span class="token string">&quot;/var/log/redis/6379.log&quot;</span>
<span class="token comment"># 配置 redis 工作目录</span>
<span class="token function">dir</span> var/lib/redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动-redis-服务进程并指定配置文件-1" tabindex="-1"><a class="header-anchor" href="#启动-redis-服务进程并指定配置文件-1" aria-hidden="true">#</a> 启动 redis 服务进程并指定配置文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> redis-server /etc/redis/redis-6379.conf

<span class="token comment"># 查看 redis 服务进程</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> redis-
<span class="token comment"># 启动客户端检查</span>
redis-cli
\`\`\`sudo redis-server /etc/redis/redis-6379.conf

<span class="token comment"># 查看 redis 服务进程</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> redis-
<span class="token comment"># 启动客户端检查</span>
redis-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装docker版" tabindex="-1"><a class="header-anchor" href="#安装docker版" aria-hidden="true">#</a> 安装Docker版</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>atideas@W11-20220220428:~$ <span class="token function">docker</span> pull redis:7.0-rc1
atideas@W11-20220220428:~$ <span class="token function">mkdir</span> docker/redis/redis01/conf
atideas@W11-20220220428:~$ <span class="token function">mkdir</span> docker/redis/redis01/data
atideas@W11-20220220428:~/docker/redis/redis01$ <span class="token builtin class-name">cd</span> conf/
atideas@W11-20220220428:~/docker/redis/redis01/conf$ <span class="token function">vi</span> redis.conf
atideas@W11-20220220428:~/docker/redis/redis01/conf$ <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/
atideas@W11-20220220428:~/docker/redis/redis01$ <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 <span class="token parameter variable">-v</span> <span class="token variable">$pwd</span>/conf/redis.conf:/usr/local/etc/redis/redis.conf <span class="token parameter variable">-v</span> <span class="token variable">$pwd</span>/data:/data <span class="token parameter variable">--name</span> redis01 redis:7.0-rc1 redis-server /usr/local/etc/redis/redis.conf <span class="token parameter variable">--appendonly</span> <span class="token function">yes</span>
e13cdaf7d9119e27bc0c81d7c8f57bb778b410928c332e8245b362af0d930eec
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>$pwd</code>：代表当前目录</li><li><code>-privileged=true</code>：容器内的<code>root</code>拥有真正<code>root</code>权限，否则容器内<code>root</code>只是外部普通用户权限</li><li><code>-v</code>：指定数据卷绑定</li><li><code>redis-server /usr/local/etc/redis/redis.conf</code>：指定配置文件启动<code>redis-server</code>进程</li><li><code>-appendonly yes</code>：开启数据持久化</li></ul><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code># Redis configuration file example.
#
# Note that in order to read the configuration file, Redis must be
# started with the file path as first argument:
# 
# 开始启动时必须如下指定配置文件

# ./redis-server /path/to/redis.conf

# Note on units: when memory size is needed, it is possible to specify
# it in the usual form of 1k 5GB 4M and so forth:
# 
# 存储单位如下所示

# 1k =&gt; 1000 bytes
# 1kb =&gt; 1024 bytes
# 1m =&gt; 1000000 bytes
# 1mb =&gt; 1024*1024 bytes
# 1g =&gt; 1000000000 bytes
# 1gb =&gt; 1024*1024*1024 bytes

################################## INCLUDES ###################################

# 如果需要使用多配置文件配置redis，请用include
#
# include /path/to/local.conf
# include /path/to/other.conf

################################## MODULES ##################################### modules

# 手动设置加载模块（当服务无法自动加载时设置）
#
# loadmodule /path/to/my_module.so
# loadmodule /path/to/other_module.so

################################## NETWORK #####################################

# Examples:
#
# bind 192.168.1.100 10.0.0.1
# bind 127.0.0.1 ::1
# 
# 设置绑定的ip
bind 0.0.0.0

# 保护模式：不允许外部网络连接redis服务
protected-mode yes

# 设置端口号
port 6379

# TCP listen() backlog.
# 
# TCP 连接数，此参数确定了TCP连接中已完成队列(完成三次握手之后)的长度
tcp-backlog 511

# Unix socket.
# 
# 通信协议设置，本机通信使用此协议不适用tcp协议可大大提升性能
# unixsocket /tmp/redis.sock
# unixsocketperm 700



# TCP keepalive.
# 
# 定期检测cli连接是否存活
tcp-keepalive 300

################################# GENERAL #####################################

# 是否守护进程运行（后台运行）
daemonize yes

# 是否通过upstart和systemd管理Redis守护进程
supervised no

# 以后台进程方式运行redis，则需要指定pid 文件
pidfile /var/run/redis_6379.pid

# 日志级别
# 可选项有： # debug（记录大量日志信息，适用于开发、测试阶段）； # verbose（较多日志信息）； # notice（适量日志信息，使用于生产环境）； 
# warning（仅有部分重要、关键信息才会被记录）。
loglevel notice

# 日志文件的位置
logfile &quot;server_log.txt&quot;

# 数据库的个数
databases 16

# 是否显示logo
always-show-logo yes

################################ SNAPSHOTTING  ################################
#
# Save the DB on disk:
# 
# 持久化操作设置 900秒内触发一次请求进行持久化，300秒内触发10次请求进行持久化操作，60s内触发10000次请求进行持久化操作

save 900 1
save 300 10
save 60 10000

# 持久化出现错误后，是否依然进行继续进行工作
stop-writes-on-bgsave-error yes

# 使用压缩rdb文件 yes：压缩，但是需要一些cpu的消耗。no：不压缩，需要更多的磁盘空间
rdbcompression yes

# 是否校验rdb文件，更有利于文件的容错性，但是在保存rdb文件的时候，会有大概10%的性能损耗
rdbchecksum yes

# dbfilename的文件名
dbfilename dump.rdb

# dbfilename文件的存放位置
dir ./

################################# REPLICATION #################################

# replicaof 即slaveof 设置主结点的ip和端口
# replicaof &lt;masterip&gt; &lt;masterport&gt;

# 集群节点访问密码
# masterauth &lt;master-password&gt;

# 从结点断开后是否仍然提供数据
replica-serve-stale-data yes

# 设置从节点是否只读
replica-read-only yes

# 是或否创建新进程进行磁盘同步设置
repl-diskless-sync no

# master节点创建子进程前等待的时间
repl-diskless-sync-delay 5

# Replicas发送PING到master的间隔，默认值为10秒。
# repl-ping-replica-period 10

# 
# repl-timeout 60

# 
repl-disable-tcp-nodelay no

#
# repl-backlog-size 1mb

#
# repl-backlog-ttl 3600

# 
replica-priority 100

#
# min-replicas-to-write 3
# min-replicas-max-lag 10
#
# replica-announce-ip 5.5.5.5
# replica-announce-port 1234

################################## SECURITY ###################################

# 设置连接时密码
# requirepass 123456

################################### CLIENTS ####################################

# 最大连接数
# maxclients 10000

############################## MEMORY MANAGEMENT ################################

# redis配置的最大内存容量
# maxmemory &lt;bytes&gt;

# 内存达到上限的处理策略
# maxmemory-policy noeviction

# 处理策略设置的采样值
# maxmemory-samples 5

# 是否开启 replica 最大内存限制
# replica-ignore-maxmemory yes

############################# LAZY FREEING ####################################

# 惰性删除或延迟释放
lazyfree-lazy-eviction no
lazyfree-lazy-expire no
lazyfree-lazy-server-del no
replica-lazy-flush no

############################## APPEND ONLY MODE ###############################

# 是否使用AOF持久化方式
appendonly no

# appendfilename的文件名

appendfilename &quot;appendonly.aof&quot;

# 持久化策略
# appendfsync always
appendfsync everysec
# appendfsync no

# 持久化时（RDB的save | aof重写）是否可以运用Appendfsync，用默认no即可，保证数据安全性
no-appendfsync-on-rewrite no

# 设置重写的基准值
auto-aof-rewrite-percentage 100
auto-aof-rewrite-min-size 64mb

# 指定当发生AOF文件末尾截断时，加载文件还是报错退出
aof-load-truncated yes

# 开启混合持久化，更快的AOF重写和启动时数据恢复
aof-use-rdb-preamble yes

################################ REDIS CLUSTER  ###############################

# 是否开启集群
# cluster-enabled yes

# 集群结点信息文件
# cluster-config-file nodes-6379.conf

# 等待节点回复的时限
# cluster-node-timeout 15000

# 结点重连规则参数
# cluster-replica-validity-factor 10

#
# cluster-migration-barrier 1

#
# cluster-require-full-coverage yes

#
# cluster-replica-no-failover no
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：不要配置<code>daemonize yes</code>，否则无法启动容器，启动后会立即停止。</p>`,65),l=[d];function r(c,v){return e(),s("div",null,l)}const t=n(a,[["render",r],["__file","redis-base.html.vue"]]);export{t as default};
