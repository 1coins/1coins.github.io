import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as t,c as r,a as n,b as e,d as a,w as o,e as s}from"./app-3e6d2d9d.js";const u={},p=s('<h1 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h1><h2 id="nginx-概述" tabindex="-1"><a class="header-anchor" href="#nginx-概述" aria-hidden="true">#</a> Nginx 概述</h2><p><code>Nginx</code>是一个高性能的<code>HTTP</code>和反向代理服务器，特点是占有内存少，并发能力强。事实上<code>Nginx</code>的并发能力确实在同类型的网页服务器中表现较好，中国大陆使用<code>Nginx</code>网站用户有：百度、京东、新浪、网易、腾讯、淘宝等。</p><h2 id="nginx-作为-web-服务器" tabindex="-1"><a class="header-anchor" href="#nginx-作为-web-服务器" aria-hidden="true">#</a> Nginx 作为 web 服务器</h2>',4),v=n("p",null,[n("code",null,"Nginx"),e("可以作为静态页面的"),n("code",null,"Web"),e("服务器，同时还支持"),n("code",null,"CGI"),e("协议的动态语言，比如"),n("code",null,"perl"),e("、"),n("code",null,"php"),e("等。但是不支持"),n("code",null,"Java"),e("。"),n("code",null,"Java"),e("程序只能通过与"),n("code",null,"Tomcat"),e("配合完成。"),n("code",null,"Nginx"),e("专为性能优化而开发，性能是其最重要的考量，实现上非常注重效率 ，能经受高负载的考验,有报告表明能支持高达 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"50000")]),n("annotation",{encoding:"application/x-tex"},"50000")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"50000")])])]),e(" 个并发连接数。")],-1),m=s('<p><code>https://lnmp.org/nginx.html</code></p><h2 id="正向代理" tabindex="-1"><a class="header-anchor" href="#正向代理" aria-hidden="true">#</a> 正向代理</h2><p><code>Nginx</code>不仅可以做反向代理，实现负载均衡。还能用作正向代理来进行上网等功能。</p><p>正向代理：如果把局域网外的<code>Internet</code>想象成一个巨大的资源库，则局域网中的客户端要访问<code>Internet</code>，则需要通过代理服务器来访问，这种代理服务就称为正向代理。</p><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/nginx-summary/forward-proxy.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理" aria-hidden="true">#</a> 反向代理</h2><p>反向代理，其实客户端对代理是无感知的，因为客户端不需要任何配置就可以访问，只需要将请求发送到反向代理服务器，由反向代理服务器去选择目标服务器获取数据后，在返回给客户端，此时反向代理服务器和目标服务器对外就是一个服务器，暴露的是代理服务器地址，隐藏了真实服务器<code>IP</code>地址。</p><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/nginx-summary/reverse-proxy.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡" aria-hidden="true">#</a> 负载均衡</h2><p>客户端发送多个请求到服务器，服务器处理请求，有一些可能要与数据库进行交互，服务器处理完毕后，再将结果返回给客户端。</p><p>这种架构模式对于早期的系统相对单一，并发请求相对较少的情况下是比较适合的，成本也低。但是随着信息数量的不断增长，访问量和数据量的飞速增长，以及系统业务的复杂度增加，这种架构会造成服务器相应客户端的请求日益缓慢，并发量特别大的时候，还容易造成服务器直接崩溃。很明显这是由于服务器性能的瓶颈造成的问题，那么如何解决这种情况呢？</p><p>首先想到的可能是升级服务器的配置，比如提高<code>CPU</code>执行频率，加大内存等提高机器的物理性能来解决此问题，但是应该知道由于摩尔定律的日益失效，硬件的性能提升已经不能满足日益提升的需求了。最明显的一个例子，天猫双十一当天，某个热销商品的瞬时访问量是极其庞大的，那么类似上面的系统架构，将机器都增加到现有的顶级物理配置，都是不能够满足需求的。那么怎么办呢？</p><p>通过上面的分析，去掉了增加服务器物理配置来解决问题的办法，也就是说纵向解决问题的办法行不通了，那么横向增加服务器的数量呢？这时候集群的概念产生了，单个服务器解决不了，就增加服务器的数量，然后将请求分发到各个服务器上，将原先请求集中到单个服务器上的情况改为将请求分发到多个服务器上，将负载分发到不同的服务器，也就是所说的负载均衡。</p><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/nginx-summary/load-balance.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="动静分离" tabindex="-1"><a class="header-anchor" href="#动静分离" aria-hidden="true">#</a> 动静分离</h2><p>为了加快网站的解析速度，可以把动态页面和静态页面由不同的服务器来解析，加快解析速度。降低原来单个服务器的压力。</p><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/nginx-summary/dynamic-static-separate.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1><h2 id="普通版" tabindex="-1"><a class="header-anchor" href="#普通版" aria-hidden="true">#</a> 普通版</h2>',19),b=n("code",null,"Nginx",-1),h={href:"http://nginx.org/",target:"_blank",rel:"noopener noreferrer"},k=s(`<li>安装<code>Nginx</code><ol><li><p>安装<code>openssl</code>、<code>zlib</code>、<code>gcc</code>依赖</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost home]# yum -y install make zlib zlib-devel gcc-c++ libtool openssl openssl-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>安装<code>pcre</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># wget http://downloads.sourceforge.net/project/pcre/pcre/8.45/pcre-8.45.tar.gz</span>
<span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># tar -xvf pcre-8.45.tar.gz</span>
<span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># cd pcre-8.45/</span>
<span class="token punctuation">[</span>root@localhost pcre-8.45<span class="token punctuation">]</span><span class="token comment"># ./configure</span>
<span class="token punctuation">[</span>root@localhost pcre-8.45<span class="token punctuation">]</span><span class="token comment"># make &amp;&amp; make install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>安装<code>nginx</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># tar -xvf nginx-1.21.4.tar.gz</span>
<span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># cd nginx-1.21.4/</span>
<span class="token punctuation">[</span>root@localhost nginx-1.21.4<span class="token punctuation">]</span><span class="token comment"># ./configure</span>
<span class="token punctuation">[</span>root@localhost nginx-1.21.4<span class="token punctuation">]</span><span class="token comment"># make &amp;&amp; make install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>进入目录<code>/usr/local/nginx/sbin/nginx</code>启动服务</p><ul><li>因为防火墙问题，在<code>windows</code>系统中访问<code>linux</code>中的<code>nginx</code>，默认不能访问的 <ol><li>查看开放的端口号<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost nginx-1.21.4<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --list-all</span>
public <span class="token punctuation">(</span>active<span class="token punctuation">)</span>
  target: default
  icmp-block-inversion: no
  interfaces: ens160
  sources:
  services: cockpit dhcpv6-client <span class="token function">ssh</span>
  ports:
  protocols:
  masquerade: no
  forward-ports:
  source-ports:
  icmp-blocks:
  rich rules:
<span class="token punctuation">[</span>root@localhost nginx-1.21.4<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>设置开放的端口号<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost nginx-1.21.4<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --add-port=80/tcp --permanent</span>
success
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li>重启防火墙<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost nginx-1.21.4<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --add-port=80/tcp --permanent</span>
success
<span class="token punctuation">[</span>root@localhost nginx-1.21.4<span class="token punctuation">]</span><span class="token comment"># firewall-cmd -–reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li></ul></li></ol></li>`,1),g=n("h2",{id:"docker-版",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-版","aria-hidden":"true"},"#"),e(" Docker 版")],-1),x=s(`<p>此外，运行容器时要挂载目录：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost container<span class="token punctuation">]</span><span class="token comment"># docker run -d -p 80:80 --name nginx01 nginx:latest</span>
<span class="token punctuation">[</span>root@localhost container<span class="token punctuation">]</span><span class="token comment"># docker stop 8bea</span>

<span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># mkdir -p /home/docker/nginx/{log,ssl,html,conf/conf.d}</span>
<span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># docker cp nginx01:/etc/nginx/nginx.conf /home/docker/nginx/conf/nginx.conf</span>
<span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># docker cp nginx01:/etc/nginx/conf.d/default.conf /home/docker/nginx/conf/conf.d/default.conf</span>

<span class="token punctuation">[</span>root@localhost container<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
<span class="token punctuation">[</span>root@localhost container<span class="token punctuation">]</span><span class="token comment"># rm -rf *</span>

<span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># docker run --name nginx01 -d --restart=always --privileged=true \\</span>
<span class="token parameter variable">-v</span> /home/docker/nginx/html:/usr/share/nginx/html <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/docker/nginx/conf/nginx.conf:/etc/nginx/nginx.conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/docker/nginx/conf/conf.d/default.conf:/etc/nginx/conf.d/default.conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/docker/nginx/log:/var/log/nginx <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/docker/nginx/ssl:/ssl/ <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">443</span>:443 <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="常用命令和配置文件" tabindex="-1"><a class="header-anchor" href="#常用命令和配置文件" aria-hidden="true">#</a> 常用命令和配置文件</h1><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><ol><li>查看版本号 <ul><li>在<code>/usr/local/nginx/sbin</code>目录下执行<code>./nginx -v</code></li></ul></li><li>启动 <ul><li>在<code>/usr/local/nginx/sbin</code>目录下执行<code>./nginx</code></li></ul></li><li>关闭 <ul><li>在<code>/usr/local/nginx/sbin</code>目录下执行<code>./nginx -s stop</code></li></ul></li><li>重新加载 <ul><li>在<code>/usr/local/nginx/sbin</code>目录下执行<code>./nginx-sreload</code></li></ul></li></ol><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>user  nginx<span class="token punctuation">;</span>
worker_processes  auto<span class="token punctuation">;</span>

error_log  /var/log/nginx/error.log notice<span class="token punctuation">;</span>
pid        /var/run/nginx.pid<span class="token punctuation">;</span>

events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
    include       /etc/nginx/mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>

    log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
                      <span class="token string">&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
                      <span class="token string">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span class="token punctuation">;</span>

    access_log  /var/log/nginx/access.log  main<span class="token punctuation">;</span>

    sendfile        on<span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

    <span class="token comment">#gzip  on;</span>

    include /etc/nginx/conf.d/*.conf<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置文件位置" tabindex="-1"><a class="header-anchor" href="#配置文件位置" aria-hidden="true">#</a> 配置文件位置</h3><ul><li>默认的配置文件都放在<code>Nginx</code>安装目录下的<code>conf</code>目录下</li><li><code>/usr/local/nginx/conf/nginx.conf</code></li></ul><h3 id="配置文件中的内容" tabindex="-1"><a class="header-anchor" href="#配置文件中的内容" aria-hidden="true">#</a> 配置文件中的内容</h3><h4 id="全局块" tabindex="-1"><a class="header-anchor" href="#全局块" aria-hidden="true">#</a> 全局块</h4><p>配置服务器整体运行的配置指令。</p><p>从配置文件开始到<code>events</code>块之间的内容，主要会设置一些影响<code>Nginx</code>服务器整体运行的配置指令，主要包括配置运行<code>Nginx</code>服务器的用户（组）、允许生成的<code>worker_process</code>数，进程<code>PID</code>存放路径、日志存放路径和类型以及配置文件的引入等。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>worker_processes auto<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>worker_processes</code>是<code>Nginx</code>服务器并发处理服务的关键配置，<code>worker_processes</code>值越大，可以支持的并发处理量也越多，但是会受到硬件、软件等设备的制约。</p><h4 id="events-块" tabindex="-1"><a class="header-anchor" href="#events-块" aria-hidden="true">#</a> events 块</h4><p>影响<code>Nginx</code>服务器与用户的网络连接。</p><p><code>events</code>块涉及的指令主要影响<code>Nginx</code>服务器与用户的网络连接，常用的设置包括是否开启对多<code>work_process</code>下的网络连接进行序列化，是否允许同时接收多个网络连接，选取哪种事件驱动模型来处理连接请求，每个<code>work_process</code>可以同时支持的最大连接数等。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述例子就表示每个<code>work_process</code>支持的最大连接数为 1024。这部分的配置对<code>Nginx</code>的性能影响较大，在实际中应该灵活配置。</p><h4 id="http块" tabindex="-1"><a class="header-anchor" href="#http块" aria-hidden="true">#</a> http块</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>http <span class="token punctuation">{</span>
    include       /etc/nginx/mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>

    log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
                      <span class="token string">&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
                      <span class="token string">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span class="token punctuation">;</span>

    access_log  /var/log/nginx/access.log  main<span class="token punctuation">;</span>

    sendfile        on<span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

    <span class="token comment">#gzip  on;</span>

    include /etc/nginx/conf.d/*.conf<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>http</code>块算是<code>Nginx</code>服务器配置中最频繁的部分，代理、缓存和日志定义等绝大多数功能和第三方模块的配置都在这里。<br> 需要注意的是，<code>http</code>块包括<code>http</code>全局块和<code>server</code>块。</p><h5 id="http-全局块" tabindex="-1"><a class="header-anchor" href="#http-全局块" aria-hidden="true">#</a> http 全局块</h5><p><code>http</code>全局块配置的指令包括文件引入、<code>MIME-TYPE</code>定义、日志自定义、连接超时时间、单链接请求数上限等。</p><h5 id="server-块" tabindex="-1"><a class="header-anchor" href="#server-块" aria-hidden="true">#</a> server 块</h5><p><code>server</code>块和虚拟主机有密切关系，虚拟主机从用户角度看，和一台独立的硬件主机是完全一样的，该技术的产生是为了节省互联网服务器硬件成本。</p><p>每个<code>http</code>块可以包括多个<code>server</code>块，而每个<code>server</code>块就相当于一个虚拟主机。而每个 <code>server</code>块也分为全局<code>server</code>块，以及可以同时包含多个<code>locaton</code>块。</p><ul><li>全局<code>server</code>块<br> 最常见的配置是本虚拟机主机的监听配置和本虚拟主机的名称或IP配置。</li><li><code>locaton</code>块<br> 一个<code>server</code>块可以配置多个<code>location</code>块。<br> 这块的主要作用是基于<code>Nginx</code>服务器接收到的请求字符串（例如<code>server_name/uri-string</code>），对虚拟主机名称（也可以是<code>IP</code>别名）之外的字符串（例如前面的<code>/uri-string</code>）进行匹配，对特定的请求进行处理。地址定向、数据缓存和应答控制等功能，还有许多第三方模块的配置也在这里进行。</li></ul><h1 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h1><h2 id="反向代理-1" tabindex="-1"><a class="header-anchor" href="#反向代理-1" aria-hidden="true">#</a> 反向代理</h2><h3 id="案例-1" tabindex="-1"><a class="header-anchor" href="#案例-1" aria-hidden="true">#</a> 案例 1</h3><h4 id="实现效果" tabindex="-1"><a class="header-anchor" href="#实现效果" aria-hidden="true">#</a> 实现效果</h4>`,33),f={href:"http://www.123.com/",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"Liunx",-1),w=n("code",null,"Tomcat",-1),y=n("h4",{id:"实现步骤",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#实现步骤","aria-hidden":"true"},"#"),e(" 实现步骤")],-1),N=n("p",null,[e("在"),n("code",null,"Liunx"),e("系统安装"),n("code",null,"Tomcat"),e("，使用默认端口 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"8080")]),n("annotation",{encoding:"application/x-tex"},"8080")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"8080")])])])],-1),P=s("<li><p>普通版</p><ol><li><code>Tomcat</code>安装文件放到<code>Liunx</code>系统中，解压</li><li>进入<code>Tomcat</code>的<code>bin</code>目录中，<code>./startup.sh</code>启动<code>tomcat</code>服务器</li></ol></li>",1),E=n("p",null,[n("code",null,"Docker"),e("版")],-1),S=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># mkdir -p docker/tomcat/{webapps,logs}</span>
<span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># docker run -d --name=tomcat01 -p 8080:8080 -v /home/docker/tomcat/webapps:/usr/local/tomcat/webapps -v /home/docker/tomcat/logs/:/usr/local/tomcat/logs tomcat</span>
3a53c13628d1e4e6572979e0a60c91b5f1799e27a68ebf23e97f18ad0e542343
<span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),T=s(`<li><p>对外开放访问的端口</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 对外开放访问的端口</span>
<span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --add-port=8080/tcp --permanent</span>
success
<span class="token comment"># 重启防火墙</span>
<span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --reload</span>
success
<span class="token comment"># 查看已经开放的端口号</span>
<span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --list-all</span>
public <span class="token punctuation">(</span>active<span class="token punctuation">)</span>
  target: default
  icmp-block-inversion: no
  interfaces: ens160
  sources:
  services: cockpit dhcpv6-client <span class="token function">ssh</span>
  ports: <span class="token number">80</span>/tcp <span class="token number">8080</span>/tcp
  protocols:
  masquerade: no
  forward-ports:
  source-ports:
  icmp-blocks:
  rich rules:
<span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),A=n("code",null,"Windows",-1),C=n("code",null,"C:\\Windows\\System32\\drivers\\et\\host",-1),I=n("code",null,"ip",-1),L=n("br",null,null,-1),q=n("a",{href:"www.123.com:8080"},"www.123.com:8080",-1),V=n("code",null,"Tomcat",-1),M=n("code",null,"Nginx",-1),$={href:"http://www.123.com/",target:"_blank",rel:"noopener noreferrer"},R=n("code",null,"Tomcat",-1),z=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Copyright (c) 1993-2009 Microsoft Corp.</span>
<span class="token comment">#</span>
<span class="token comment"># This is a sample HOSTS file used by Microsoft TCP/IP for Windows.</span>
<span class="token comment">#</span>
<span class="token comment"># This file contains the mappings of IP addresses to host names. Each</span>
<span class="token comment"># entry should be kept on an individual line. The IP address should</span>
<span class="token comment"># be placed in the first column followed by the corresponding host name.</span>
<span class="token comment"># The IP address and the host name should be separated by at least one</span>
<span class="token comment"># space.</span>
<span class="token comment">#</span>
<span class="token comment"># Additionally, comments (such as these) may be inserted on individual</span>
<span class="token comment"># lines or following the machine name denoted by a &#39;#&#39; symbol.</span>
<span class="token comment">#</span>
<span class="token comment"># For example:</span>
<span class="token comment">#</span>
<span class="token comment">#      102.54.94.97     rhino.acme.com          # source server</span>
<span class="token comment">#       38.25.63.10     x.acme.com              # x client host</span>

<span class="token comment"># localhost name resolution is handled within DNS itself.</span>
<span class="token comment">#	127.0.0.1       localhost</span>
<span class="token comment">#	::1             localhost</span>
<span class="token comment">#屏蔽 BandiZip 联网验证</span>
<span class="token number">0.0</span>.0.0 secure.bandisoft.com
<span class="token number">0.0</span>.0.0 secure-backup.bandisoft.com
<span class="token comment"># nginx 配置本地服务器</span>
<span class="token number">192.168</span>.30.128 www.123.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),D=n("p",null,[e("在"),n("code",null,"Nginx"),e("进行请求转发的配置（反向代理配置）")],-1),U={href:"http://www.123.com/",target:"_blank",rel:"noopener noreferrer"},H=n("code",null,"192.168.30.128:8080",-1),j=s(`<div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>server {
    listen       80;
    listen  [::]:80;
    # 修改监听的服务器地址
    server_name  192.168.30.128;

    #access_log  /var/log/nginx/host.access.log  main;

    location / {
        root   /usr/share/nginx/html;
        # 增加代理转发的地址
        proxy_pass http://192.168.30.128:8080;
        index  index.html index.htm;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \\.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}

    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    #location ~ \\.php$ {
    #    root           html;
    #    fastcgi_pass   127.0.0.1:9000;
    #    fastcgi_index  index.php;
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
    #    include        fastcgi_params;
    #}

    # deny access to .htaccess files, if Apache&#39;s document root
    # concurs with nginx&#39;s one
    #
    #location ~ /\\.ht {
    #    deny  all;
    #}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),B={href:"http://www.123.com/",target:"_blank",rel:"noopener noreferrer"},F=s('<h4 id="访问过程分析" tabindex="-1"><a class="header-anchor" href="#访问过程分析" aria-hidden="true">#</a> 访问过程分析</h4><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/nginx-summary/access-process-analysis.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="案例-2" tabindex="-1"><a class="header-anchor" href="#案例-2" aria-hidden="true">#</a> 案例 2</h3>',3),K=n("code",null,"Nginx",-1),O=n("code",null,"Nginx",-1),W={href:"http://192.168.30.128:80/edu/",target:"_blank",rel:"noopener noreferrer"},G=n("a",{href:"192.168.30.128:8080"},"192.168.30.128:8080",-1),J={href:"http://192.168.30.128:80/vod/",target:"_blank",rel:"noopener noreferrer"},X=n("a",{href:"192.168.30.128:8081"},"192.168.30.128:8081",-1),Y=s(`<li><p>准备一台服务器安装两个<code>Tomcat</code>，一个 8080 端口，一个 8081 端口</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># mkdir -p docker/tomcat/tomcat01/{webapps,logs}</span>
<span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># mkdir -p docker/tomcat/tomcat02/{webapps,logs}</span>
<span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># docker run -d --restart=always --name=tomcat0 1 -p 8080:8080 -v /home/docker/tomcat/tomcat01/webapps:/usr/local/tomcat/webapps -v /home/docker/tomcat/tomcat01/logs/:/usr/local/tomcat/logs tomcat</span>
708bd330e05141098575b4ebbfdbfe5a15970f76c115819fc5b6c56848707135
<span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># docker run -d --restart=always --name=tomcat02 -p 8081:8080 -v /home/docker/tomcat/tomcat02/webapps:/usr/local/tomcat/webapps -v /home/docker/tomcat/tomcat02/logs/:/usr/local/tomcat/logs tomcat</span>
6ab3d133356e3ea3b551452debfb7caa888b656f92187d78887d2d61e13e4876
<span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建文件夹和测试页面</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost conf.d<span class="token punctuation">]</span><span class="token comment"># cd /home/docker/tomcat/</span>
<span class="token punctuation">[</span>root@localhost tomcat<span class="token punctuation">]</span><span class="token comment"># ls</span>
tomcat01  tomcat02
<span class="token punctuation">[</span>root@localhost tomcat<span class="token punctuation">]</span><span class="token comment"># cd tomcat01/webapps/</span>
<span class="token punctuation">[</span>root@localhost webapps<span class="token punctuation">]</span><span class="token comment"># mkdir edu</span>
<span class="token punctuation">[</span>root@localhost webapps<span class="token punctuation">]</span><span class="token comment"># cd edu/</span>
<span class="token punctuation">[</span>root@localhost edu<span class="token punctuation">]</span><span class="token comment"># vi index.html</span>
<span class="token punctuation">[</span>root@localhost edu<span class="token punctuation">]</span><span class="token comment"># cd ../../../</span>
<span class="token punctuation">[</span>root@localhost tomcat<span class="token punctuation">]</span><span class="token comment"># cd tomcat02/webapps/</span>
<span class="token punctuation">[</span>root@localhost webapps<span class="token punctuation">]</span><span class="token comment"># mkdir vod</span>
<span class="token punctuation">[</span>root@localhost webapps<span class="token punctuation">]</span><span class="token comment"># cd vod/</span>
<span class="token punctuation">[</span>root@localhost vod<span class="token punctuation">]</span><span class="token comment"># vi index.html</span>
<span class="token punctuation">[</span>root@localhost vod<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>开放对外访问的端口号 80、8080、8081</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --add-port=8081/tcp --permanent</span>
success
<span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --reload</span>
success
<span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --list-all</span>
public <span class="token punctuation">(</span>active<span class="token punctuation">)</span>
  target: default
  icmp-block-inversion: no
  interfaces: ens160
  sources:
  services: cockpit dhcpv6-client <span class="token function">ssh</span>
  ports: <span class="token number">80</span>/tcp <span class="token number">8080</span>/tcp <span class="token number">8081</span>/tcp
  protocols:
  masquerade: no
  forward-ports:
  source-ports:
  icmp-blocks:
  rich rules:
<span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置<code>Nginx</code>反向代理<br> 在<code>http</code>块中添加<code>server{}</code></p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>server {
    listen       80;
    listen  [::]:80;
    server_name  182.168.30.128;

    #access_log  /var/log/nginx/host.access.log  main;

    location ~ /edu/ {
        proxy_pass http://192.168.30.128:8080;
    }

    location ~ /vod/ {
        proxy_pass http://192.168.30.128:8081;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>location</code>指令说明：该指令用于匹配<code>URL</code><br> 语法如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location <span class="token punctuation">[</span> <span class="token operator">=</span> <span class="token operator">|</span> ~ <span class="token operator">|</span> ~* <span class="token operator">|</span> ^~ <span class="token punctuation">]</span> uri <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>=</code>：用于不含正则表达式的<code>uri</code>前，要求请求字符串与<code>uri</code>严格匹配，如果匹配成功，就停止继续向下搜索并立即处理该请求</li><li><code>~</code>：用于表示<code>uri</code>包含正则表达式，并且区分大小写</li><li><code>~*</code>：用于表示<code>uri</code>包含正则表达式，并且不区分大小写</li><li><code>^~</code>：用于不含正则表达式的<code>uri</code>前，要求<code>Nginx</code>服务器找到标识<code>uri</code>和请求字符串匹配度最高的<code>location</code>后，立即使用此<code>location</code>处理请求，而不再使用<code>location</code>块中的正则<code>uri</code>和请求字符串做匹配</li></ul><p>注意：如果<code>uri</code>包含正则表达式，则必须要有<code>~</code>或<code>~*</code>标识</p></li>`,4),Z={href:"http://192.168.30.128:80/edu/",target:"_blank",rel:"noopener noreferrer"},Q={href:"http://192.168.30.128:80/vod/",target:"_blank",rel:"noopener noreferrer"},nn=s('<h2 id="负载均衡-1" tabindex="-1"><a class="header-anchor" href="#负载均衡-1" aria-hidden="true">#</a> 负载均衡</h2><p>随着互联网信息的爆炸性增长，负载均衡（<code>load balance</code>）已经不再是一个很陌生的话题， 顾名思义，负载均衡即是将负载分摊到不同的服务单元，既保证服务的可用性，又保证响应 足够快，给用户很好的体验。快速增长的访问量和数据流量催生了各式各样的负载均衡产品， 很多专业的负载均衡硬件提供了很好的功能，但却价格不菲，这使得负载均衡软件大受欢迎，<code>Nginx</code>就是其中的一个，在<code>Linux</code>下有<code>Nginx</code>、<code>LVS</code>、<code>Haproxy</code>等等服务可以提供负载均衡服 务，而且<code>Nginx</code>提供了几种分配方式（策略）。</p><h3 id="实现效果-1" tabindex="-1"><a class="header-anchor" href="#实现效果-1" aria-hidden="true">#</a> 实现效果</h3>',3),en={href:"http://192.168.30.128/edu/index.html",target:"_blank",rel:"noopener noreferrer"},sn=s(`<h3 id="实现步骤-1" tabindex="-1"><a class="header-anchor" href="#实现步骤-1" aria-hidden="true">#</a> 实现步骤</h3><ol><li><p>准备一台服务器安装两个<code>Tomcat</code>，端口分别是 8080 和 8081</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># mkdir -p docker/tomcat/tomcat01/{webapps,logs}</span>
<span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># mkdir -p docker/tomcat/tomcat02/{webapps,logs}</span>
<span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># docker run -d --restart=always --name=tomcat0 1 -p 8080:8080 -v /home/docker/tomcat/tomcat01/webapps:/usr/local/tomcat/webapps -v /home/docker/tomcat/tomcat01/logs/:/usr/local/tomcat/logs tomcat</span>
708bd330e05141098575b4ebbfdbfe5a15970f76c115819fc5b6c56848707135
<span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># docker run -d --restart=always --name=tomcat02 -p 8081:8080 -v /home/docker/tomcat/tomcat02/webapps:/usr/local/tomcat/webapps -v /home/docker/tomcat/tomcat02/logs/:/usr/local/tomcat/logs tomcat</span>
6ab3d133356e3ea3b551452debfb7caa888b656f92187d78887d2d61e13e4876
<span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在两台<code>Tomcat</code>的<code>webapps</code>目录中，创建名称是<code>edu</code>的文件夹，在<code>edu</code>文件夹中创建页面<code>index.html</code>，用于测试</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cd /home/docker/tomcat/tomcat02/webapps/</span>
<span class="token punctuation">[</span>root@localhost webapps<span class="token punctuation">]</span><span class="token comment"># ls</span>
vod
<span class="token punctuation">[</span>root@localhost webapps<span class="token punctuation">]</span><span class="token comment"># mkdir edu</span>
<span class="token punctuation">[</span>root@localhost webapps<span class="token punctuation">]</span><span class="token comment"># vi edu/index.html</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在<code>Nginx</code>的配置文件中进行负载均衡的配置</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>http {
    ...
    upstream myserver{
        server 192.168.30.128:8080;
        server 192.168.30.128:8081;
    }

    server {
        listen       80;
        listen  [::]:80;
        server_name  182.168.30.128;

        #access_log  /var/log/nginx/host.access.log  main;

        location ~ /edu/ {
            proxy_pass http://myserver;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="策略说明" tabindex="-1"><a class="header-anchor" href="#策略说明" aria-hidden="true">#</a> 策略说明</h3>`,3),an=n("ol",null,[n("li",null,[n("p",null,"轮询（默认）"),n("p",null,[e("每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器"),n("code",null,"down"),e("掉，能自动剔除。")])]),n("li",null,[n("p",null,[n("code",null,"weight")]),n("ul",null,[n("li",null,[n("code",null,"weight"),e("代表权重，默认为 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"1")]),n("annotation",{encoding:"application/x-tex"},"1")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"1")])])]),e("，权重越高被分配的客户端越多")]),n("li",null,[e("可以指定轮询几率，"),n("code",null,"weight"),e("和访问比率成正比，用于后端服务器性能不均的情况")])]),n("div",{class:"language-dsconfig line-numbers-mode","data-ext":"dsconfig"},[n("pre",{class:"language-dsconfig"},[n("code",null,`upstream server_pool{ 
    server 192.168.5.21 weight=10; 
    server 192.168.5.22 weight=10; 
}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])]),n("li",null,[n("p",null,[n("code",null,"ip_hash")]),n("p",null,[e("每个请求按访问"),n("code",null,"ip"),e("的"),n("code",null,"hash"),e("结果分配，这样每个访客固定访问一个后端服务器。")]),n("div",{class:"language-dsconfig line-numbers-mode","data-ext":"dsconfig"},[n("pre",{class:"language-dsconfig"},[n("code",null,`upstream server_pool{ 
    ip_hash; 
    server 192.168.5.21:80; 
    server 192.168.5.22:80; 
}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])]),n("li",null,[n("p",null,[n("code",null,"fair")]),n("p",null,"按后端服务器的响应时间来分配请求，响应时间短的优先分配。"),n("div",{class:"language-dsconfig line-numbers-mode","data-ext":"dsconfig"},[n("pre",{class:"language-dsconfig"},[n("code",null,`upstream server_pool{ 
    server 192.168.5.21:80; 
    server 192.168.5.22:80; 
    fair; 
}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])])],-1),ln=s(`<h2 id="动静分离-1" tabindex="-1"><a class="header-anchor" href="#动静分离-1" aria-hidden="true">#</a> 动静分离</h2><p><code>Nginx</code>动静分离简单来说就是把动态跟静态请求分开，不能理解成只是单纯的把动态页面和静态页面物理分离。严格意义上说应该是动态请求跟静态请求分开，可以理解成使用<code>Nginx</code>处理静态页面，<code>Tomcat</code>处理动态页面。</p><p>动静分离从目前实现角度来讲大致分为两种：</p><ol><li>纯粹把静态文件独立成单独的域名，放在独立的服务器上，也是目前主流推崇的方案</li><li>动态跟静态文件混合在一起发布，通过<code>Nginx</code>分开，配置<code>location</code>指定不同的后缀名实现不同的请求转发，<code>expires</code>参数设置浏览器缓存过期时间，减少与服务器之前的请求和流量。</li></ol><p><code>Expires</code>具体定义：是给一个资源设定一个过期时间，也就是说无需去服务端验证，直接通过浏览器自身确认是否过期即可，所以不会产生额外的流量。此种方法非常适合不经常变动的资源，如果经常更新的文件，不建议使<code>Expires</code>来缓存。设置<code>3d</code>，表示在 3 天之内访问这个<code>URL</code>，发送一个请求，比对服务器该文件最后更新时间没有变化，则不会从服务器抓取，返回状态码 304，如果有修改，则直接从服务器重新下载，返回状态码 200。</p><h3 id="实现效果-2" tabindex="-1"><a class="header-anchor" href="#实现效果-2" aria-hidden="true">#</a> 实现效果</h3><p>静态资源存放在<code>Nginx</code>服务器中，动态资源存放在<code>Tomcat</code>服务器中，访问静态资源时直接从<code>Nginx</code>服务器中获取。</p><h3 id="实现步骤-2" tabindex="-1"><a class="header-anchor" href="#实现步骤-2" aria-hidden="true">#</a> 实现步骤</h3><ol><li><p>在<code>Liunx</code>系统中准备静态资源，用于进行访问</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>[root@localhost conf]# cd /home/docker/nginx/
[root@localhost nginx]# ls
conf  html  log  ssl
[root@localhost nginx]# cd /home/docker/nginx/html/
[root@localhost html]# ls
[root@localhost html]# mkdir -p {image,www}
[root@localhost html]# cd image
[root@localhost image]# ls
cover.jpg
[root@localhost image]# cd ../www/
[root@localhost www]# vi index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在<code>Nginx</code>配置文件中进行配置</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>server {
    listen       80;
    listen  [::]:80;
    server_name  182.168.30.128;

    #access_log  /var/log/nginx/host.access.log  main;

    location /www/ {
        root /usr/share/nginx/html/;
        index index.html index.htm;
    }

    location /image/ {
        root /usr/share/nginx/html/;
        autoindex on;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>访问<code>192.168.30.128/image.cover.jpg</code>测试</p><p>参数<code>autoindex on</code>效果：<br><img src="https://cdn.jsdelivr.net/gh/1coins/assets/nginx-summary/autoindex-on.png" alt="" loading="lazy"></p></li></ol><h2 id="高可用集群" tabindex="-1"><a class="header-anchor" href="#高可用集群" aria-hidden="true">#</a> 高可用集群</h2><h3 id="什么是-nginx-高可用" tabindex="-1"><a class="header-anchor" href="#什么是-nginx-高可用" aria-hidden="true">#</a> 什么是 Nginx 高可用</h3><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/nginx-summary/nginx-high-available.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h3><ul><li>两台服务器 <a href="192.168.30.129">192.168.30.129</a> 和 <a href="192.168.30.130">192.168.30.130</a></li><li>在两台服务器安装<code>Nginx</code></li><li>在两台服务器安装<code>keepalived</code></li></ul><h3 id="单主单从" tabindex="-1"><a class="header-anchor" href="#单主单从" aria-hidden="true">#</a> 单主单从</h3><ol><li>安装<code>keepalived</code>和<code>Nginx</code><ul><li>安装<code>Nginx</code></li><li>安装<code>keepalived</code><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost /]# yum install keepalived -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li>修改<code>/etc/keepalived/keepalivec.conf</code>配置文件 <ul><li><code>master</code><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>! Configuration File for keepalived

global_defs {
    # 全局定义
    notification_email {
        acassen@firewall.loc
        failover@firewall.loc
        sysadmin@firewall.loc
    }
    notification_email_from Alexandre.Cassen@firewall.loc
    smtp_server 192.168.30.129
    smtp_connect_timeout 30
    # 唯一不重复
    router_id LVS_DEVEL
}
# 脚本配置
vrrp_script chk_http_port {
    # 检测脚本的位置及名称
    script &quot;/usr/local/src/nginx_check.sh&quot;
    # 检测脚本执行的间隔
    interval 2
    # 权重，设置当前服务器的权重，此处的配置说明：当前服务器如果宕机了，那么该服务器的权重降低 2
    weight 2
}
# 虚拟 IP 配置
vrrp_instance VI_1 {
    # 备份服务器上将 MASTER 改为 BACKUP
    state MASTER 
    # 网卡，通过 ifconfig 查看
    interface ens160
    # 主、备机的 virtual_router_id 必须相同
    virtual_router_id 51
    # 主、备机取不同的优先级，主机值较大，备份机值较小
    priority 100
    # 时间间隔。每隔多少秒发送一次心跳检测服务器是否还活着，默认 1 秒发送一次心跳
    advert_int 1
    authentication {
        auth_type PASS
        auth_pass 1111
    }
    virtual_ipaddress {
        # VRRP H 虚拟 IP 地址，网段要和 linux 的网段一致，可以绑定多个虚拟 ip
        192.168.30.60
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><code>salve</code><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>! Configuration File for keepalived
global_defs {
    # 全局定义
    notification_email {
        acassen@firewall.loc
        failover@firewall.loc
        sysadmin@firewall.loc
    }
    notification_email_from Alexandre.Cassen@firewall.loc
    smtp_server 192.168.30.130
    smtp_connect_timeout 30
    # 唯一不重复
    router_id LVS_DEVEL
}

vrrp_script chk_http_port {
    # 检测脚本的位置
    script &quot;/usr/local/src/nginx_check.sh&quot;
    # 检测脚本执行的间隔
    interval 2
    # 权重，设置当前服务器的权重，此处的配置说明：当前服务器如果宕机了，那么该服务器的权重降低 2
    weight 2
}
vrrp_script chk_http_port {
    # 检测脚本的位置
    script &quot;/usr/local/src/nginx_check.sh&quot;
    # 检测脚本执行的间隔
    interval 2
    weight 2
}
# 虚拟 IP 配置
vrrp_instance VI_1 {
    # 备份服务器上将 MASTER 改为 BACKUP
    state BACKUP
    # 网卡
    interface ens160
    # 主、备机的 virtual_router_id 必须相同
    virtual_router_id 51
    # 主、备机取不同的优先级，主机值较大，备份机值较小
    priority 90
    # 时间间隔。每隔多少秒发送一次心跳检测服务器是否还活着，默认 1 秒发送一次心跳
    advert_int 1
    authentication {
        auth_type PASS
        auth_pass 1111
    }
    virtual_ipaddress {
        # VRRP H 虚拟 IP 地址,网段要和 linux 的网段一致，可以绑定多个虚拟 ip
        192.168.30.60
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li>在两天服务器的<code>/usr/local/src/</code>中编写<code>Nginx</code>检测脚本<code>nginx_check.sh</code><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>[root@9e672b8dd7cd /]# vi /usr/local/src/nginx_check.sh
[root@9e672b8dd7cd /]# cat /usr/local/src/nginx_check.sh
#!/bin/bash
A=\`ps -C nginx –no-header |wc -l\`
if [ $A -eq 0 ];then
    /usr/local/nginx/sbin/nginx
    sleep 2
    if [ \`ps -C nginx --no-header |wc -l\` -eq 0 ];then
        killall keepalived
    fi
fi
[root@localhost /]#
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>在所有节点上面进行配置<div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code># 关闭防火墙
[root@localhost home]# systemctl stop firewalld 
# 关闭 selinux，重启生效
[root@localhost home]# sed -i &#39;s/^SELINUX=.*/SELINUX=disabled/&#39; /etc/sysconfig/selinux
# 关闭 selinux，临时生效
[root@localhost home]# setenforce 0
# 时间同步
[root@localhost home]# ntpdate 0.centos.pool.ntp.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>把两台服务器上<code>Nginx</code>和<code>keepalived</code>启动<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost keepalived]# cd /usr/local/nginx/sbin/
[root@localhost sbin]# ./nginx
[root@localhost sbin]# systemctl start keepalived.service
[root@localhost sbin]#
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>最终测试 <ul><li><p>在浏览器地址栏输入虚拟<code>ip</code>地址 <a href="192.168.30.60">192.168.30.60</a>，可以访问</p></li><li><p>把主服务器（<a href="192.168.60.129">192.168.60.129</a>）<code>Nginx</code>和<code>keepalived</code>停止，再输入 <a href="192.168.30.60">192.168.30.60</a>，仍然可以访问</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost keepalived<span class="token punctuation">]</span><span class="token comment"># cd /usr/local/nginx/sbin/</span>
<span class="token punctuation">[</span>root@localhost sbin<span class="token punctuation">]</span><span class="token comment"># ./nginx -s stop</span>
<span class="token punctuation">[</span>root@localhost sbin<span class="token punctuation">]</span><span class="token comment"># systemctl stop keepalived.service</span>
<span class="token punctuation">[</span>root@localhost sbin<span class="token punctuation">]</span><span class="token comment"># systemctl status keepalived.service</span>
● keepalived.service - LVS and VRRP High Availability Monitor
   Loaded: loaded <span class="token punctuation">(</span>/usr/lib/systemd/system/keepalived.service<span class="token punctuation">;</span> disabled<span class="token punctuation">;</span> vendor preset: disabled<span class="token punctuation">)</span>
   Active: inactive <span class="token punctuation">(</span>dead<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ol><h3 id="双主双从" tabindex="-1"><a class="header-anchor" href="#双主双从" aria-hidden="true">#</a> 双主双从</h3><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/nginx-summary/both-master-and-slave.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li><p>修改配置</p><ul><li><code>master</code><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>! Configuration File for keepalived
global_defs {
   notification_email {
     acassen@firewall.loc
     failover@firewall.loc
     sysadmin@firewall.loc
   }
   notification_email_from Alexandre.Cassen@firewall.loc
   smtp_server 192.168.30.129
   smtp_connect_timeout 30
   router_id LVS_DEVEL
}

vrrp_script chk_http_port {
    # 检测脚本的位置
    script &quot;/usr/local/src/nginx_check.sh&quot;
    # 检测脚本执行的间隔
    interval 2
    weight 2
}

vrrp_instance VI_1 {
    state MASTER
    interface ens160
    virtual_router_id 51
    priority 100
    advert_int 1
    authentication {
        auth_type PASS
        auth_pass 1111
    }
    virtual_ipaddress {
        192.168.10.30/24
    }
}

vrrp_instance VI_2 {
    state BACKUP
    interface ens160
    virtual_router_id 52
    priority 90
    advert_int 1
    authentication {
        auth_type PASS
        auth_pass 2222
    }
    virtual_ipaddress {
        192.168.10.60/24
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><code>slave</code><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>! Configuration File for keepalived
global_defs {
   notification_email {
     acassen@firewall.loc
     failover@firewall.loc
     sysadmin@firewall.loc
   }
   notification_email_from Alexandre.Cassen@firewall.loc
   smtp_server 192.168.30.130
   smtp_connect_timeout 30
   router_id LVS_DEVEL
}

vrrp_script chk_http_port {
    # 检测脚本的位置
    script &quot;/usr/local/src/nginx_check.sh&quot;
    # 检测脚本执行的间隔
    interval 2
    weight 2
}

vrrp_instance VI_1 {
    state BACKUP
    interface ens160
    virtual_router_id 51
    priority 90
    advert_int 1
    authentication {
        auth_type PASS
        auth_pass 1111
    }
    virtual_ipaddress {
        192.168.10.30/24
    }
}

vrrp_instance VI_2 {
    state MASTER
    interface ens160
    virtual_router_id 52
    priority 100
    advert_int 1
    authentication {
        auth_type PASS
        auth_pass 2222
    }
    virtual_ipaddress {
        192.168.10.60/24
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>重启</p><ul><li>重启<code>master</code><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost keepalived<span class="token punctuation">]</span><span class="token comment"># cd /usr/local/nginx/sbin/</span>
<span class="token punctuation">[</span>root@localhost sbin<span class="token punctuation">]</span><span class="token comment"># ./nginx</span>
<span class="token punctuation">[</span>root@localhost sbin<span class="token punctuation">]</span><span class="token comment"># systemctl restart keepalived.service</span>
<span class="token punctuation">[</span>root@localhost sbin<span class="token punctuation">]</span><span class="token comment"># systemctl status keepalived.service</span>
● keepalived.service - LVS and VRRP High Availability Monitor
   Loaded: loaded <span class="token punctuation">(</span>/usr/lib/systemd/system/keepalived.service<span class="token punctuation">;</span> disabled<span class="token punctuation">;</span> vendor preset: disabled<span class="token punctuation">)</span>
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Tue <span class="token number">2021</span>-11-16 04:40:13 EST<span class="token punctuation">;</span> 4s ago
  Process: <span class="token number">22700</span> <span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/sbin/keepalived <span class="token variable">$KEEPALIVED_OPTIONS</span> <span class="token punctuation">(</span>code<span class="token operator">=</span>exited, <span class="token assign-left variable">status</span><span class="token operator">=</span><span class="token number">0</span>/SUCCESS<span class="token punctuation">)</span>
 Main PID: <span class="token number">22701</span> <span class="token punctuation">(</span>keepalived<span class="token punctuation">)</span>
    Tasks: <span class="token number">2</span> <span class="token punctuation">(</span>limit: <span class="token number">4755</span><span class="token punctuation">)</span>
   Memory: <span class="token number">1</span>.7M
   CGroup: /system.slice/keepalived.service
           ├─22701 /usr/sbin/keepalived <span class="token parameter variable">-D</span>
           └─22702 /usr/sbin/keepalived <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>重启<code>slave</code><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost keepalived<span class="token punctuation">]</span><span class="token comment"># systemctl restart keepalived.service</span>
<span class="token punctuation">[</span>root@localhost keepalived<span class="token punctuation">]</span><span class="token comment"># systemctl status nginx.service</span>
Unit nginx.service could not be found.
<span class="token punctuation">[</span>root@localhost keepalived<span class="token punctuation">]</span><span class="token comment"># systemctl status keepalived.service</span>
● keepalived.service - LVS and VRRP High Availability Monitor
   Loaded: loaded <span class="token punctuation">(</span>/usr/lib/systemd/system/keepalived.service<span class="token punctuation">;</span> disabled<span class="token punctuation">;</span> vendor preset: disabled<span class="token punctuation">)</span>
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Tue <span class="token number">2021</span>-11-16 04:41:00 EST<span class="token punctuation">;</span> 18s ago
  Process: <span class="token number">15982</span> <span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/sbin/keepalived <span class="token variable">$KEEPALIVED_OPTIONS</span> <span class="token punctuation">(</span>code<span class="token operator">=</span>exited, <span class="token assign-left variable">status</span><span class="token operator">=</span><span class="token number">0</span>/SUCCESS<span class="token punctuation">)</span>
 Main PID: <span class="token number">15983</span> <span class="token punctuation">(</span>keepalived<span class="token punctuation">)</span>
    Tasks: <span class="token number">2</span> <span class="token punctuation">(</span>limit: <span class="token number">4755</span><span class="token punctuation">)</span>
   Memory: <span class="token number">1</span>.7M
   CGroup: /system.slice/keepalived.service
           ├─15983 /usr/sbin/keepalived <span class="token parameter variable">-D</span>
           └─15984 /usr/sbin/keepalived <span class="token parameter variable">-D</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>测试</p><ul><li><p>在浏览器地址栏输入虚拟<code>ip</code>地址 <a href="192.168.10.30">192.168.10.30</a>、<a href="192.168.10.60">192.168.10.60</a>，可以访问</p></li><li><p>把主服务器（<a href="192.168.60.129">192.168.60.129</a>）<code>Nginx</code>和<code>keepalived</code>停止，再输入 <a href="192.168.30.60">192.168.10.30、192.168.10.60</a>，仍然可以访问</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost keepalived<span class="token punctuation">]</span><span class="token comment"># cd /usr/local/nginx/sbin/</span>
<span class="token punctuation">[</span>root@localhost sbin<span class="token punctuation">]</span><span class="token comment"># ./nginx -s stop</span>
<span class="token punctuation">[</span>root@localhost sbin<span class="token punctuation">]</span><span class="token comment"># systemctl stop keepalived.service</span>
<span class="token punctuation">[</span>root@localhost sbin<span class="token punctuation">]</span><span class="token comment"># systemctl status keepalived.service</span>
● keepalived.service - LVS and VRRP High Availability Monitor
   Loaded: loaded <span class="token punctuation">(</span>/usr/lib/systemd/system/keepalived.service<span class="token punctuation">;</span> disabled<span class="token punctuation">;</span> vendor preset: disabled<span class="token punctuation">)</span>
   Active: inactive <span class="token punctuation">(</span>dead<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>测试可以发现访问<code>keepalived</code>中配置的两个<code>VIP</code>都可以正常调度等，当停止任意一台<code>keepalived</code>节点，同样还是正常访问；到此，<code>keepalived+nginx</code>高可用集群（双主模式）就搭建完成了。</p></li></ol><h1 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h1><h2 id="master-和-worker机制" tabindex="-1"><a class="header-anchor" href="#master-和-worker机制" aria-hidden="true">#</a> Master 和 Worker机制</h2><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/nginx-summary/master-and-worker-one.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/nginx-summary/master-and-worker-two.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><ol><li>可以使用<code>nginx –s reload</code>热部署，利用<code>Nginx</code>进行热部署操作</li><li>对于每个<code>worker</code>进程来说，独立的进程，不需要加锁，省掉了锁带来的开销，同时在编程以及问题查找时会方便很多</li><li>每个<code>woker</code>是独立的进程，如果有其中的一个<code>woker</code>出现问题，其他<code>woker</code>独立的，继续进行争抢，实现请求过程，不会造成服务中断</li></ol><h3 id="worker-数量" tabindex="-1"><a class="header-anchor" href="#worker-数量" aria-hidden="true">#</a> worker 数量</h3><p><code>Nginx</code>同<code>Redis</code>类似都采用了<code>io</code>多路复用机制，每个<code>worker</code>都是一个独立的进程，但每个进程里只有一个主线程，通过异步非阻塞的方式来处理请求，即使是千上万个请求也不在话下。</p><p>每个<code>worker</code>的线程可以把一个<code>CPU</code>的性能发挥到极致。所以<code>worker</code>数和服务器的<code>CPU</code>数相等是最为适宜的。设少了会浪费<code>CPU</code>，设多了会造成<code>CPU</code>频繁切换上下文带来的损耗。</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>worker_processes 4
#work 绑定 cpu(4 work 绑定 4cpu)
worker_cpu_affinity 0001 0010 0100 1000

#work 绑定 cpu (4 work 绑定 8cpu 中的 4 个) 
worker_cpu_affinity 0000001 00000010 00000100 00001000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="连接数" tabindex="-1"><a class="header-anchor" href="#连接数" aria-hidden="true">#</a> 连接数</h2><p><code>worker_connection</code>表示每个<code>worker</code>进程所能建立连接的最大值，所以，一个<code>Nginx</code>能建立的最大连接数，应该是<code>worker_connections * worker_processes</code>。</p><p>当然，这里说的是最大连接数，对于<code>HTTP</code>请 求 本 地 资 源 来 说 ， 能 够 支 持 的 最 大 并 发 数 量 是<code>worker_connections * worker_processes</code>，如果是支持<code>HTTP1.1</code>的浏览器每次访问要占两个连接，所以普通的静态访问最大并发数是：<code>worker_connections * worker_processes / 2</code>，而如果是<code>HTTP</code>作为反向代理来说，最大并发数量应该是<code>worker_connections * worker_processes / 4</code>。因为作为反向代理服务器，每个并发会建立与客户端的连接和与后端服务的连接，会占用两个连接。</p><h3 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h3><ol><li>发送请求，占用了<code>woker</code>的几个连接数？ <ul><li>2 或者 4 个</li></ul></li><li><code>Nginx</code>有一个<code>master</code>，四个<code>woker</code>，每个<code>woker</code>支持的最大连接数是 1024，那么支持的最大并发数是多少？ <ul><li>普通的静态访问最大并发数是：<code>worker_connections * worker_processes /2</code></li><li>而如果是<code>HTTP</code>作为反向代理来说，最大并发数量应该是<code>worker_connections * worker_processes / 4</code></li></ul></li></ol><h2 id="配置文件结构" tabindex="-1"><a class="header-anchor" href="#配置文件结构" aria-hidden="true">#</a> 配置文件结构</h2><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/nginx-summary/nginx-conf-structure.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,36);function cn(on,dn){const i=c("ExternalLinkIcon"),l=c("RouterLink");return t(),r("div",null,[p,v,m,n("ol",null,[n("li",null,[e("进入"),b,n("a",h,[e("官网"),a(i)]),e("下载")]),k]),g,n("p",null,[e("见 "),a(l,{to:"/article/nginx/assets/01.%E9%95%9C%E5%83%8F%E4%B8%8E%E5%AE%B9%E5%99%A8-20220116221224-5423vi3.html"},{default:o(()=>[e("Docker-镜像与容器")]),_:1})]),x,n("p",null,[e("打开浏览器，在浏览器地址栏输入地址 "),n("a",f,[e("www.123.com"),a(i)]),e("，跳转到"),_,e("系统"),w,e("主页面中。")]),y,n("ol",null,[n("li",null,[N,n("ul",null,[P,n("li",null,[E,n("p",null,[e("见 "),a(l,{to:"/article/nginx/assets/01.%E9%95%9C%E5%83%8F%E4%B8%8E%E5%AE%B9%E5%99%A8-20220116221224-f8q6z2d.html"},{default:o(()=>[e("Docker-镜像与容器")]),_:1}),e("，此外，在运行容器时要挂载卷。")]),S])])]),T,n("li",null,[n("p",null,[e("在"),A,e("系统的"),C,e("文件进行域名和"),I,e("对应关系的配置"),L,e(" 配置完成之后，就可以通过 "),q,e(" 访问到第一步出现的"),V,e("初始界面；再通过"),M,e("的反向代理，只需要输入 "),n("a",$,[e("www.123.com"),a(i)]),e(" 就可以跳转到"),R,e("初始界面。")]),z]),n("li",null,[D,n("p",null,[e("如下配置，监听 80 端口，访问域名为 "),n("a",U,[e("www.123.com"),a(i)]),e("，不加端口号时默认为 80 端口，故访问该域名时会跳转到"),H,e("路径上。")]),j]),n("li",null,[n("p",null,[e("通过浏览器访问"),n("a",B,[e("www.123.com"),a(i)])])])]),F,n("ul",null,[n("li",null,[e("实现效果 "),n("ul",null,[n("li",null,[e("使用"),K,e("反向代理，根据访问的路径跳转到不同端口的服务中，"),O,e("监听端口为 80 "),n("ul",null,[n("li",null,[e("访问 "),n("a",W,[e("http://192.168.30.128:80/edu/"),a(i)]),e(" 直接跳转到 "),G]),n("li",null,[e("访问 "),n("a",J,[e("http://192.168.30.128:80/vod/"),a(i)]),e(" 直接跳转到 "),X])])])])]),n("li",null,[e("实现步骤 "),n("ol",null,[Y,n("li",null,[n("p",null,[e("访问"),n("a",Z,[e("http://192.168.30.128:80/edu/"),a(i)]),e("、"),n("a",Q,[e("http://192.168.30.128:80/vod/"),a(i)]),e("测试")])])])])]),nn,n("p",null,[e("浏览器地址栏输入地址 "),n("a",en,[e("http://192.168.30.128/edu/index.html"),a(i)]),e("，实现负载均衡效果，平均访问 8080 和 8081 端口。")]),sn,an,ln])}const un=d(u,[["render",cn],["__file","nginx-summary.html.vue"]]);export{un as default};
