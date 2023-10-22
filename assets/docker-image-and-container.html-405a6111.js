import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o,c,a as n,b as s,d as t,e as a}from"./app-3e6d2d9d.js";const p={},u=a('<h1 id="docker概述" tabindex="-1"><a class="header-anchor" href="#docker概述" aria-hidden="true">#</a> Docker概述</h1><h2 id="基本介绍" tabindex="-1"><a class="header-anchor" href="#基本介绍" aria-hidden="true">#</a> 基本介绍</h2><p><code>Docker</code>是一个开源的应用容器引擎，基于<code>Go</code>语言并遵从<code>Apache2.0</code>协议开源。</p><p><code>Docker</code>可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的<code>Linux</code>机器上，也可以实现虚拟化。</p><p>容器是完全使用沙箱机制，相互之间不会有任何接口（类似<code>iPhone</code>的<code>app</code>）,更重要的是容器性能开销极低。</p>',5),d=n("p",null,[n("code",null,"Docker"),s("从 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"17.03")]),n("annotation",{encoding:"application/x-tex"},"17.03")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"17.03")])])]),s(" 版本之后分为"),n("code",null,"CE"),s("（"),n("code",null,"Community Edition"),s("：社区版） 和"),n("code",null,"EE"),s("（"),n("code",null,"Enterprise Edition"),s("：企业版），一般用社区版就可以了。")],-1),r={href:"https://docs.docker.com/",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"https://docs.docker.com/",-1),b=a(`<h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h2><ul><li><code>Web</code>应用的自动化打包和发布</li><li>自动化测试和持续集成、发布</li><li>在服务型环境中部署和调整数据库或其他的后台应用</li><li>从头编译或者扩展现有的<code>OpenShift</code>或<code>Cloud Foundry</code>平台来搭建自己的<code>PaaS</code>环境</li></ul><h2 id="docker-的优势" tabindex="-1"><a class="header-anchor" href="#docker-的优势" aria-hidden="true">#</a> Docker 的优势</h2><p><code>Docker</code>是一个用于开发，交付和运行应用程序的开放平台。</p><p><code>Docker</code>能够将应用程序与基础架构分开，从而可以快速交付软件；借助<code>Docker</code>，可以与管理应用程序相同的方式来管理基础架构；通过利用<code>Docker</code>的方法来快速交付，测试和部署代码，可以大大减少编写代码和在生产环境中运行代码之间的延迟。</p><ol><li><p>快速，一致地交付您的应用程序。</p><p><code>Docker</code>允许开发人员使用提供的应用程序或服务的本地容器在标准化环境中工作，从而简化了开发的生命周期。</p><p>容器非常适合持续集成和持续交付（<code>CI / CD</code>）工作流程，考虑以下示例方案：</p><ul><li>开发人员在本地编写代码，并使用 Docker 容器与同事共享他们的工作。他们使用<code>Docker</code>将其应用程序推送到测试环境中，并执行自动或手动测试</li><li>当开发人员发现错误时，他们可以在开发环境中对其进行修复，然后将其重新部署到测试环境中，以进行测试和验证</li><li>测试完成后，将修补程序推送给生产环境，就像将更新的镜像推送到生产环境一样简单</li></ul></li><li><p>响应式部署和扩展</p><ul><li><code>Docker</code>是基于容器的平台，允许高度可移植的工作负载</li><li><code>Docker</code>容器可以在开发人员的本机上，数据中心的物理或虚拟机上，云服务上或混合环境中运行</li><li><code>Docker</code>的可移植性和轻量级的特性，还可以轻松地完成动态管理的工作负担，并根据业务需求指示，实时扩展或拆除应用程序和服务</li></ul></li><li><p>在同一硬件上运行多工作负载</p><ul><li><code>Docker</code>轻巧快速。它为基于虚拟机管理程序的虚拟机提供了可行、经济、高效的替代方案，因此您可以利用更多的计算能力来实现业务目标</li><li><code>Docker</code>非常适合于高密度环境以及中小型部署，可以用更少的资源做更多的事情</li></ul></li></ol><h1 id="虚拟化技术和容器化技术" tabindex="-1"><a class="header-anchor" href="#虚拟化技术和容器化技术" aria-hidden="true">#</a> 虚拟化技术和容器化技术</h1><h2 id="容器化技术" tabindex="-1"><a class="header-anchor" href="#容器化技术" aria-hidden="true">#</a> 容器化技术</h2><h3 id="容器官方解释" tabindex="-1"><a class="header-anchor" href="#容器官方解释" aria-hidden="true">#</a> 容器官方解释</h3><p>一句话概括容器：容器就是将软件打包成标准化单元，以用于开发、交付和部署。</p><ul><li>容器镜像是轻量的、可执行的独立软件包，包含软件运行所需的所有内容：代码、运行时环境、系统工具、系统库和设置</li><li>容器化软件适用于基于<code>Linux</code>和<code>Windows</code>的应用，在任何环境中都能够始终如一地运行</li><li>容器赋予了软件独立性，使其免受外在环境差异（例如，开发和预演环境的差异）的影响，从而有助于减少团队间在相同基础设施上运行不同软件时的冲突</li></ul><h3 id="容器通俗解释" tabindex="-1"><a class="header-anchor" href="#容器通俗解释" aria-hidden="true">#</a> 容器通俗解释</h3><p>容器化技术不是模拟的一个完整的操作系统。</p><p>通俗地描述容器，容器就是一个存放东西的地方，就像书包可以装各种文具、衣柜可以放各种衣服、鞋架可以放各种鞋子一样。现在所说的容器存放的东西可能更偏向于应用比如网站、程序甚至是系统环境。</p><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/docker-image-and-container/docker-container.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="虚拟化技术" tabindex="-1"><a class="header-anchor" href="#虚拟化技术" aria-hidden="true">#</a> 虚拟化技术</h2><p><code>Docker</code>容器虚拟化技术为基础的软件，什么是虚拟化技术呢？</p><p>简单的说，虚拟化技术可以这样定义：</p><blockquote><p>虚拟化技术是一种资源管理技术，是将计算机的各种实体资源（<code>CPU</code>、内存、磁盘空间、网络适配器等），予以抽象、转换后呈现出来并可供分割、组合为一个或多个电脑配置环境。由此，打破实体结构间的不可切割的障碍，使用户可以比原本的配置更好的方式来应用这些电脑硬件资源。这些资源的新虚拟部分是不受现有资源的架设方式，地域或物理配置所限制。一般所指的虚拟化资源包括计算能力和数据存储。</p></blockquote><p>虚拟化技术特点：</p><ol><li>资源占用多</li><li>冗余步骤多</li><li>启动很慢</li></ol><h2 id="docker-基于-lxc-虚拟容器技术" tabindex="-1"><a class="header-anchor" href="#docker-基于-lxc-虚拟容器技术" aria-hidden="true">#</a> Docker 基于 LXC 虚拟容器技术</h2><p><code>Docker</code>技术是基于<code>LXC</code>（<code>Linux container</code>：<code>Linux</code>容器）虚拟容器技术的。</p><blockquote><p><code>LXC</code>，其名称来自<code>Linux</code>软件容器（<code>Linux Containers</code>）的缩写，一种操作系统层虚拟化（<code>Operating system–level virtualization</code>）技术，为<code>Linux</code>内核容器功能的一个用户空间接口。它将应用软件系统打包成一个软件容器（<code>Container</code>），内含应用软件本身的代码，以及所需要的操作系统核心和库。通过统一的名字空间和共用<code>API</code>来分配不同软件容器的可用硬件资源，创造出应用程序的独立沙箱运行环境，使得<code>Linux</code>用户可以容易的创建和管理系统或应用容器。</p></blockquote><p><code>LXC</code>技术主要是借助<code>Linux</code>内核中提供的<code>CGroup</code>功能和<code>namespace</code>来实现的，通过<code>LXC</code>可以为软件提供一个独立的操作系统运行环境。</p><p><code>Docker</code>和虚拟机的不同：</p><ol><li>传统虚拟机，虚拟出硬件，运行一个完整的操作系统，然后在这个系统上安装和运行软件</li><li><code>Docker</code>容器内的应用直接运行在宿主机的内容，容器是没有自己的内核的，也没有虚拟硬件</li><li>每个容器都是相互隔离的，每个容器都有属于自己的文件系统，互不影响</li></ol><h3 id="cgroup-和-namespace" tabindex="-1"><a class="header-anchor" href="#cgroup-和-namespace" aria-hidden="true">#</a> cgroup 和 namespace</h3><h4 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h4><ul><li><code>namespace</code>是<code>Linux</code>内核用来隔离内核资源的方式，通过<code>namespace</code>可以让一些进程只能看到与自己相关的一部分资源，而另外一些进程也只能看到与它们自己相关的资源，这两拨进程根本就感觉不到对方的存在。具体的实现方式是把一个或多个进程的相关资源指定在同一个<code>namespace</code>中；<code>Linux namespaces</code>是对全局系统资源的一种封装隔离，使得处于不同<code>namespace</code>的进程拥有独立的全局系统资源，改变一个<code>namespace</code>中的系统资源只会影响当前 <code>namespace</code>里的进程，对其他<code>namespace</code>中的进程没有影响</li><li><code>CGroup</code>是<code>Control Groups</code>的缩写，是<code>Linux</code>内核提供的一种可以限制、记录、隔离进程组 （<code>process groups</code>）所使用的物力资源（如<code>cpu</code>、<code>memory</code>、<code>i/o</code>等）的机制</li></ul><h4 id="对比" tabindex="-1"><a class="header-anchor" href="#对比" aria-hidden="true">#</a> 对比</h4><p>两者都是将进程进行分组，但是两者的作用还是有本质区别。</p><p><code>namespace</code>是为了隔离进程组之间的资源，而<code>cgroup</code>是为了对一组进程进行统一的资源监控和限制。</p><h3 id="容器化的好处" tabindex="-1"><a class="header-anchor" href="#容器化的好处" aria-hidden="true">#</a> 容器化的好处</h3><ol><li><p>应用更快速的交互和部署</p><ul><li>传统：一堆帮助文档，安装程序</li><li><code>Docker</code>：打包镜像发布测试，一键运行</li></ul></li><li><p>更便捷的升级和扩容<br> 使用<code>Docker</code>之后，项目打包为一个镜像，部署应用就像搭积木一样</p></li><li><p>更简单的系统运维<br> 在容器化之后，开发、测试环境都是高度统一的</p></li><li><p>更高效的计算资源利用<br><code>Docker</code>是内核级别的虚拟化，可以在一个物理机上运行很多的容器实例，服务器的性能可以被压榨到极致</p></li></ol><h1 id="docker-基本组成" tabindex="-1"><a class="header-anchor" href="#docker-基本组成" aria-hidden="true">#</a> Docker 基本组成</h1><p><code>Docker</code>中有非常重要的三个基本概念，理解了这三个概念，就理解了<code>Docker</code>的整个生命周期。</p><ul><li><p>镜像（<code>Image</code>）<br><code>Docker</code>镜像就好比是一个模板，可以通过这个模板来创建容器服务，运行<code>tomcat</code>镜像 ===&gt; <code>tomcat01</code>容器提供<code>web</code>服务器服务</p></li><li><p>容器（<code>Container</code>）<br><code>Docker</code>利用容器技术，独立运行一个或者一组通过镜像创建的应用</p></li><li><p>仓库（<code>Repository</code>）</p><ul><li>仓库就是存放镜像的地方</li><li>仓库分为公有仓库（<code>Docker Hub</code>）和私有仓库</li></ul></li></ul><h1 id="docker-的安装与卸载" tabindex="-1"><a class="header-anchor" href="#docker-的安装与卸载" aria-hidden="true">#</a> Docker 的安装与卸载</h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><ol><li><p>查看系统内核和系统信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看系统内核版本</span>
<span class="token function">uname</span> <span class="token parameter variable">-r</span>   
<span class="token comment"># 查看系统版本</span>
<span class="token function">cat</span> /etc/os-release
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>卸载旧版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum remove <span class="token function">docker</span> <span class="token punctuation">\\</span>
           docker-client <span class="token punctuation">\\</span>
           docker-client-latest <span class="token punctuation">\\</span>
           docker-common <span class="token punctuation">\\</span>
           docker-latest <span class="token punctuation">\\</span>
           docker-latest-logrotate <span class="token punctuation">\\</span>
           docker-logrotate <span class="token punctuation">\\</span>
           docker-engine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>下载依赖安装包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>配置镜像仓库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 国外的地址</span>
yum-config-manager <span class="token punctuation">\\</span>
    --add-repo <span class="token punctuation">\\</span>
    https://download.docker.com/linux/centos/docker-ce.repo  

<span class="token comment"># 设置阿里云的 Docker 镜像仓库</span>
yum-config-manager <span class="token punctuation">\\</span>
    --add-repo <span class="token punctuation">\\</span>
    https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>更新<code>yum</code>软件包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum makecache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>下载<code>Docker</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装社区版</span>
yum <span class="token function">install</span> docker-ce docker-ce-cli containerd.io   
<span class="token comment"># 安装企业版</span>
yum <span class="token function">install</span> docker-ee docker-ee-cli containerd.io 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般情况下安装社区版</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># CentOS 8 安装 Docker 会和 podman 冲突</span>
yum erase <span class="token function">podman</span> buildah
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>启动<code>Docker</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动 Docker</span>
systemctl start <span class="token function">docker</span>   
<span class="token comment"># 查看当前版本号，是否启动成功</span>
<span class="token function">docker</span> version   
<span class="token comment"># 设置开机自启动</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>Docker</code>的<code>HelloWorld</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run hello-world
<span class="token comment"># 查看下载的 hello world 镜像</span>
<span class="token function">docker</span> images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载" aria-hidden="true">#</a> 卸载</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 卸载依赖</span>
yum remove docker-ce docker-ce-cli containerd.io  
<span class="token comment"># 删除资源  . /var/lib/docker 是 docker 的默认工作路径</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/docker   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-容器运行流程和原理" tabindex="-1"><a class="header-anchor" href="#docker-容器运行流程和原理" aria-hidden="true">#</a> Docker 容器运行流程和原理</h2><h3 id="运行流程" tabindex="-1"><a class="header-anchor" href="#运行流程" aria-hidden="true">#</a> 运行流程</h3><p>启动一个容器，<code>Docker</code>的运行流程如下图：</p><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/docker-image-and-container/docker-run-process.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="底层原理" tabindex="-1"><a class="header-anchor" href="#底层原理" aria-hidden="true">#</a> 底层原理</h2><p><code>Docker</code>是一个<code>Client-Server</code>结构的系统，<code>Docker</code>的守护进程运行在主机上，通过<code>Socker</code>从客户端访问！<code>Docker Server</code>接收到<code>Docker-Client</code>的指令，就会执行这个指令！</p><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/docker-image-and-container/docker-underly-principle.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="docker-整体架构" tabindex="-1"><a class="header-anchor" href="#docker-整体架构" aria-hidden="true">#</a> Docker 整体架构</h3><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/docker-image-and-container/docker-overall-framework.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><code>Docker</code>为什么比<code>VM Ware</code>快？</p><ol><li><code>Docker</code>比虚拟机更少的抽象层</li><li><code>Docker</code>利用宿主机的内核，<code>VM</code>需要的是<code>Guest OS</code></li></ol><p><code>Docker</code>新建一个容器的时候，不需要像虚拟机一样重新加载一个操作系统内核，直接利用宿主机的操作系统，而虚拟机是需要加载<code>Guest OS</code>。</p><p><code>Docker</code>和<code>VM</code>的对比如下：</p>`,56),k=n("table",null,[n("thead",null,[n("tr",null,[n("th"),n("th",null,"Docker 容器"),n("th",null,"LXC"),n("th",null,"VM")])]),n("tbody",null,[n("tr",null,[n("td",null,"虚拟化类型"),n("td",null,[n("code",null,"OS"),s("虚拟化")]),n("td",null,[n("code",null,"OS"),s("虚拟化")]),n("td",null,"硬件虚拟化")]),n("tr",null,[n("td",null,"性能"),n("td",null,"物理机性能"),n("td",null,"物理机性能"),n("td",null,[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"5"),n("mi",{mathvariant:"normal"},"%"),n("mo",null,"−"),n("mn",null,"20"),n("mi",{mathvariant:"normal"},"%")]),n("annotation",{encoding:"application/x-tex"},"5 \\%-20 \\%")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.0833em"}}),n("span",{class:"mord"},"5%"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"−"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8056em","vertical-align":"-0.0556em"}}),n("span",{class:"mord"},"20%")])])]),s("损耗")])]),n("tr",null,[n("td",null,"隔离性"),n("td",null,[n("code",null,"NS"),s("隔离")]),n("td",null,[n("code",null,"NS"),s("隔离")]),n("td",null,"强")]),n("tr",null,[n("td",null,[n("code",null,"Qos")]),n("td",null,[n("code",null,"Cgroup"),s("弱")]),n("td",null,[n("code",null,"Cgroup"),s("弱")]),n("td",null,"强")]),n("tr",null,[n("td",null,"安全性"),n("td",null,"中"),n("td",null,"差"),n("td",null,"强")]),n("tr",null,[n("td",null,[n("code",null,"GuestOS")]),n("td",null,[s("只支持"),n("code",null,"Linux")]),n("td",null,[s("只支持"),n("code",null,"Linux")]),n("td",null,"全部")])])],-1),v=a(`<h1 id="配置阿里云镜像" tabindex="-1"><a class="header-anchor" href="#配置阿里云镜像" aria-hidden="true">#</a> 配置阿里云镜像</h1><ol><li><p>进入阿里云官网，搜索容器镜像服务</p></li><li><p>执行命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker
<span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;https://axvfsf7e.mirror.aliyuncs.com&quot;]
}
EOF</span>
<span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h1 id="docker-常用命令" tabindex="-1"><a class="header-anchor" href="#docker-常用命令" aria-hidden="true">#</a> Docker 常用命令</h1><h2 id="基础命令" tabindex="-1"><a class="header-anchor" href="#基础命令" aria-hidden="true">#</a> 基础命令</h2><ol><li><p>查看<code>Docker</code>的版本信息：<code>docker version</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker version</span>
Client: Docker Engine - Community
 Version:           <span class="token number">20.10</span>.10
 API version:       <span class="token number">1.41</span>
 Go version:        go1.16.9
 Git commit:        b485636
 Built:             Mon Oct <span class="token number">25</span> 07:42:56 <span class="token number">2021</span>
 OS/Arch:           linux/amd64
 Context:           default
 Experimental:      <span class="token boolean">true</span>

Server: Docker Engine - Community
 Engine:
  Version:          <span class="token number">20.10</span>.10
  API version:      <span class="token number">1.41</span> <span class="token punctuation">(</span>minimum version <span class="token number">1.12</span><span class="token punctuation">)</span>
  Go version:       go1.16.9
  Git commit:       e2f740d
  Built:            Mon Oct <span class="token number">25</span> 07:41:17 <span class="token number">2021</span>
  OS/Arch:          linux/amd64
  Experimental:     <span class="token boolean">false</span>
 containerd:
  Version:          <span class="token number">1.4</span>.11
  GitCommit:        5b46e404f6b9f661a205e28d59c982d3634148f8
 runc:
  Version:          <span class="token number">1.0</span>.2
  GitCommit:        v1.0.2-0-g52b36a2
 docker-init:
  Version:          <span class="token number">0.19</span>.0
  GitCommit:        de40ad0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看<code>Docker</code>的系统信息，包括镜像和容器的数量：<code>docker info</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker info</span>
Client:
 Context:    default
 Debug Mode: <span class="token boolean">false</span>
 Plugins:
  app: Docker App <span class="token punctuation">(</span>Docker Inc., v0.9.1-beta3<span class="token punctuation">)</span>
  buildx: Build with BuildKit <span class="token punctuation">(</span>Docker Inc., v0.6.3-docker<span class="token punctuation">)</span>
  scan: Docker Scan <span class="token punctuation">(</span>Docker Inc., v0.9.0<span class="token punctuation">)</span>

Server:
 Containers: <span class="token number">1</span>
  Running: <span class="token number">0</span>
  Paused: <span class="token number">0</span>
  Stopped: <span class="token number">1</span>
 Images: <span class="token number">2</span>
 Server Version: <span class="token number">20.10</span>.10
 Storage Driver: overlay2
  Backing Filesystem: xfs
  Supports d_type: <span class="token boolean">true</span>
  Native Overlay Diff: <span class="token boolean">true</span>
  userxattr: <span class="token boolean">false</span>
 Logging Driver: json-file
 Cgroup Driver: cgroupfs
 Cgroup Version: <span class="token number">1</span>
 Plugins:
  Volume: <span class="token builtin class-name">local</span>
  Network: bridge <span class="token function">host</span> ipvlan macvlan null overlay
  Log: awslogs fluentd gcplogs gelf journald json-file <span class="token builtin class-name">local</span> logentries splunk syslog
 Swarm: inactive
 Runtimes: io.containerd.runc.v2 io.containerd.runtime.v1.linux runc
 Default Runtime: runc
 Init Binary: docker-init
 containerd version: 5b46e404f6b9f661a205e28d59c982d3634148f8
 runc version: v1.0.2-0-g52b36a2
 init version: de40ad0
 Security Options:
  seccomp
   Profile: default
 Kernel Version: <span class="token number">4.18</span>.0-305.19.1.el8_4.x86_64
 Operating System: CentOS Linux <span class="token number">8</span>
 OSType: linux
 Architecture: x86_64
 CPUs: <span class="token number">2</span>
 Total Memory: <span class="token number">1</span>.748GiB
 Name: localhost.localdomain
 ID: B5XT:RYL7:BWKX:PBVC:P4UM:VECG:ITI7:S4GJ:J3GP:DR5E:KXT7:III4
 Docker Root Dir: /var/lib/docker
 Debug Mode: <span class="token boolean">false</span>
 Registry: https://index.docker.io/v1/
 Labels:
 Experimental: <span class="token boolean">false</span>
 Insecure Registries:
  <span class="token number">127.0</span>.0.0/8
 Registry Mirrors:
  https://axvfsf7e.mirror.aliyuncs.com/
 Live Restore Enabled: <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>帮助命令（可查看可选的参数）：<code>docker 命令 --help</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker info --help</span>
Usage:  <span class="token function">docker</span> info <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span>
Display system-wide information
Options:
  -f, <span class="token parameter variable">--format</span> string   Format the output using the given Go template
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,5),g={href:"https://docs.docker.com/engine/reference/commandline/docker/",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"https://docs.docker.com/engine/reference/commandline/docker/",-1),q=a(`<h2 id="镜像命令" tabindex="-1"><a class="header-anchor" href="#镜像命令" aria-hidden="true">#</a> 镜像命令</h2><h3 id="查看本地主机的所有镜像" tabindex="-1"><a class="header-anchor" href="#查看本地主机的所有镜像" aria-hidden="true">#</a> 查看本地主机的所有镜像</h3><p><code>docker images</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
hello-world   latest    d1165f221234   <span class="token number">5</span> months ago   <span class="token number">13</span>.3kB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>列表参数介绍：</p><ul><li><code>REPOSITORY</code>： 镜像的仓库源</li><li><code>TAG</code>：镜像的标签</li><li><code>IMAGE ID</code>：镜像的<code>id</code></li><li><code>CREATED</code>：镜像的创建时间</li><li><code>SIZE</code>：镜像的大小</li></ul><p>可选参数：</p><ul><li><code>-a/--all</code>：列出所有镜像</li><li><code>-q/--quiet</code>：只显示镜像的<code>id</code></li></ul><h3 id="搜索镜像" tabindex="-1"><a class="header-anchor" href="#搜索镜像" aria-hidden="true">#</a> 搜索镜像</h3><p><code>docker search</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker search mysql</span>
NAME                              DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
mysql                             MySQL is a widely used, open-source relation…   <span class="token number">10308</span>     <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
mariadb                           MariaDB is a community-developed fork of MyS…   <span class="token number">3819</span>      <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
mysql/mysql-server                Optimized MySQL Server Docker images. Create…   <span class="token number">754</span>                  <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
percona                           Percona Server is a fork of the MySQL relati…   <span class="token number">517</span>       <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
centos/mysql-57-centos7           MySQL <span class="token number">5.7</span> SQL database server                   <span class="token number">86</span>
mysql/mysql-cluster               Experimental MySQL Cluster Docker images. Cr…   <span class="token number">79</span>
centurylink/mysql                 Image containing mysql. Optimized to be link…   <span class="token number">60</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可选参数：</p>`,12),f=n("ul",null,[n("li",null,[n("p",null,[n("code",null,"-f, --filter filter"),s("：根据提供的条件过滤输出")]),n("ul",null,[n("li",null,[n("p",null,[s("搜索收藏数大于 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"3000")]),n("annotation",{encoding:"application/x-tex"},"3000")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"3000")])])]),s(" 的镜像")]),n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token punctuation"},"["),s("root@localhost ~"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token comment"},"# docker search mysql --filter=STARS=3000"),s(`
NAME      DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
mysql     MySQL is a widely used, open-source relation…   `),n("span",{class:"token number"},"11603"),s("     "),n("span",{class:"token punctuation"},"["),s("OK"),n("span",{class:"token punctuation"},"]"),s(`
mariadb   MariaDB Server is a high performing `),n("span",{class:"token function"},"open"),s(" sou…   "),n("span",{class:"token number"},"4414"),s("      "),n("span",{class:"token punctuation"},"["),s("OK"),n("span",{class:"token punctuation"},"]"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])])])]),n("li",null,[n("p",null,[n("code",null,"--format string"),s("：使用"),n("code",null,"Go"),s("模板的漂亮打印搜索")])]),n("li",null,[n("p",null,[n("code",null,"--limit int"),s("：最大搜索结果数量（默认为 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"25")]),n("annotation",{encoding:"application/x-tex"},"25")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"25")])])]),s("）")])]),n("li",null,[n("p",null,[n("code",null,"--no-trunc"),s("：不截断输出")])])],-1),x=a(`<h3 id="下载镜像" tabindex="-1"><a class="header-anchor" href="#下载镜像" aria-hidden="true">#</a> 下载镜像</h3><p><code>docker pull 镜像名[:tag]</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 如果不写 tag 默认就是 latest，写上 tag 就下载指定版本</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker pull mysql:5.7</span>
<span class="token number">5.7</span>: Pulling from library/mysql
<span class="token comment"># 分层下载，docker image 的核心-联合文件系统</span>
33847f680f63: Pull complete 
5cb67864e624: Pull complete 
1a2b594783f5: Pull complete 
b30e406dd925: Pull complete 
48901e306e4c: Pull complete 
603d2b7147fd: Pull complete 
802aa684c1c4: Pull complete 
5b5a19178915: Pull complete 
f9ce7411c6e4: Pull complete 
f51f6977d9b2: Pull complete 
aeb6b16ce012: Pull complete 
Digest: sha256:be70d18aedc37927293e7947c8de41ae6490ecd4c79df1db40d1b5b5af7d9596
Status: Downloaded newer image <span class="token keyword">for</span> mysql:5.7
docker.io/library/mysql:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除镜像" tabindex="-1"><a class="header-anchor" href="#删除镜像" aria-hidden="true">#</a> 删除镜像</h3><p><code>docker rmi</code></p><ol><li><p>查看镜像</p><ul><li><p>查看全部镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY    TAG       IMAGE ID       CREATED       SIZE
mysql         <span class="token number">5.7</span>       938b57d64674   <span class="token number">10</span> days ago   448MB
hello-world   latest    feb5d9fea6a5   <span class="token number">5</span> weeks ago   <span class="token number">13</span>.3kB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看全部镜像（只显示<code>id</code>）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker images -aq</span>
938b57d64674
feb5d9fea6a5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>删除镜像</p><ul><li><p>删除指定的镜像<code>id</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker rmi -f  镜像id</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>删除多个镜像<code>id</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker rmi -f  镜像id 镜像id 镜像id</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>删除全部的镜像<code>id</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker rmi -f  $(docker images -aq)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li></ol><h2 id="容器命令" tabindex="-1"><a class="header-anchor" href="#容器命令" aria-hidden="true">#</a> 容器命令</h2><h3 id="运行容器" tabindex="-1"><a class="header-anchor" href="#运行容器" aria-hidden="true">#</a> 运行容器</h3><p><code>docker run [可选参数] image</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost /<span class="token punctuation">]</span><span class="token comment"># docker run 8cf625070931</span>
<span class="token number">2021</span>-08-03 06:48:07+00:00 <span class="token punctuation">[</span>Note<span class="token punctuation">]</span> <span class="token punctuation">[</span>Entrypoint<span class="token punctuation">]</span>: Entrypoint script <span class="token keyword">for</span> MySQL Server <span class="token number">5.7</span>.35-1debian10 started.
<span class="token number">2021</span>-08-03 06:48:07+00:00 <span class="token punctuation">[</span>Note<span class="token punctuation">]</span> <span class="token punctuation">[</span>Entrypoint<span class="token punctuation">]</span>: Switching to dedicated user <span class="token string">&#39;mysql&#39;</span>
<span class="token number">2021</span>-08-03 06:48:07+00:00 <span class="token punctuation">[</span>Note<span class="token punctuation">]</span> <span class="token punctuation">[</span>Entrypoint<span class="token punctuation">]</span>: Entrypoint script <span class="token keyword">for</span> MySQL Server <span class="token number">5.7</span>.35-1debian10 started.
<span class="token number">2021</span>-08-03 06:48:07+00:00 <span class="token punctuation">[</span>ERROR<span class="token punctuation">]</span> <span class="token punctuation">[</span>Entrypoint<span class="token punctuation">]</span>: Database is uninitialized and password option is not specified
    You need to specify one of the following:
    - MYSQL_ROOT_PASSWORD
    - MYSQL_ALLOW_EMPTY_PASSWORD
    - MYSQL_RANDOM_ROOT_PASSWORD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明：</p><ul><li><p><code>--name=&quot;名字&quot;</code>：指定容器名字</p></li><li><p><code>-d</code>：后台方式运行</p></li><li><p><code>-it</code>：使用交互方式运行,进入容器查看内容</p></li><li><p><code>-p</code>：指定容器的端口</p><ul><li><p><code>-p ip:主机端口:容器端口</code>： 配置主机端口映射到容器端口</p><ul><li>简化版：<code>-p 主机端口:容器端口</code>或<code>-p 容器端口</code></li></ul></li></ul></li><li><p><code>-P</code>：随机指定端口（大写的<code>P</code>）</p></li></ul><h3 id="进入容器" tabindex="-1"><a class="header-anchor" href="#进入容器" aria-hidden="true">#</a> 进入容器</h3><p><code>docker run</code></p><p><code>docker run -it [容器ID] /bin/bash</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># </span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker run -it centos /bin/bash</span>
Unable to <span class="token function">find</span> image <span class="token string">&#39;centos:latest&#39;</span> locally
latest: Pulling from library/centos
a1d0c7532777: Pull complete
Digest: sha256:a27fd8080b517143cbbbab9dfb7c8571c40d67d534bbdee55bd6c473f432b177
Status: Downloaded newer image <span class="token keyword">for</span> centos:latest
<span class="token punctuation">[</span>root@25027261f0db /<span class="token punctuation">]</span><span class="token comment"># ls</span>
bin  dev  etc  home  lib  lib64  lost+found  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
<span class="token punctuation">[</span>root@25027261f0db /<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="退出容器" tabindex="-1"><a class="header-anchor" href="#退出容器" aria-hidden="true">#</a> 退出容器</h3><ul><li><p><code>exit</code>：停止并退出容器（后台方式运行则仅退出）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@950ba2403e4c /<span class="token punctuation">]</span><span class="token comment"># ls</span>
bin  dev  etc  home  lib  lib64  lost+found  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
<span class="token punctuation">[</span>root@950ba2403e4c /<span class="token punctuation">]</span><span class="token comment"># exit</span>
<span class="token builtin class-name">exit</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>Ctrl+P+Q</code>：不停止容器，直接退出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@25027261f0db /<span class="token punctuation">]</span><span class="token comment"># [root@localhost ~]#</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="列出容器" tabindex="-1"><a class="header-anchor" href="#列出容器" aria-hidden="true">#</a> 列出容器</h3><p><code>docker ps</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE     COMMAND       CREATED         STATUS         PORTS     NAMES
25027261f0db   centos    <span class="token string">&quot;/bin/bash&quot;</span>   <span class="token number">6</span> minutes ago   Up <span class="token number">6</span> minutes             hardcore_galileo
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明：</p><ul><li><code>-a</code>：列出所有容器的运行记录</li><li><code>-n=?</code>：显示最近创建的<code>n</code>个容器</li><li><code>-q</code>：只显示容器的编号</li></ul><h3 id="删除容器" tabindex="-1"><a class="header-anchor" href="#删除容器" aria-hidden="true">#</a> 删除容器</h3><p><code>docker rm</code></p><ul><li><p>删除指定的容器，不能删除正在运行的容器，强制删除使用<code>rm -f</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> 容器id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>删除所有的容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-aq</span><span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>删除所有的容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> -q<span class="token operator">|</span><span class="token function">xargs</span> <span class="token function">docker</span> <span class="token function">rm</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h4 id="启动和重启容器命令" tabindex="-1"><a class="header-anchor" href="#启动和重启容器命令" aria-hidden="true">#</a> 启动和重启容器命令</h4><ul><li><p>启动容器：<code>docker start 容器id</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker start 25027261f0db</span>
25027261f0db
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>重启容器：<code>docker restart 容器id</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker restart 25027261f0db</span>
25027261f0db
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>停止当前运行的容器：<code>docker stop 容器id</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker stop 25027261f0db</span>
25027261f0db
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>强制停止当前容器：<code>docker kill 容器id</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker kill 25027261f0db</span>
25027261f0db
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="其他命令" tabindex="-1"><a class="header-anchor" href="#其他命令" aria-hidden="true">#</a> 其他命令</h2><h3 id="查看日志" tabindex="-1"><a class="header-anchor" href="#查看日志" aria-hidden="true">#</a> 查看日志</h3><p><code>docker logs</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker logs --help</span>

Usage:  <span class="token function">docker</span> logs <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> CONTAINER

Fetch the logs of a container

Options:
      <span class="token parameter variable">--details</span>        Show extra details provided to logs
  -f, <span class="token parameter variable">--follow</span>         Follow log output
      <span class="token parameter variable">--since</span> string   Show logs since timestamp <span class="token punctuation">(</span>e.g. <span class="token number">2013</span>-01-02T13:23:37Z<span class="token punctuation">)</span> or relative <span class="token punctuation">(</span>e.g. 42m <span class="token keyword">for</span> <span class="token number">42</span> minutes<span class="token punctuation">)</span>
  -n, <span class="token parameter variable">--tail</span> string    Number of lines to show from the end of the logs <span class="token punctuation">(</span>default <span class="token string">&quot;all&quot;</span><span class="token punctuation">)</span>
  -t, <span class="token parameter variable">--timestamps</span>     Show timestamps
      <span class="token parameter variable">--until</span> string   Show logs before a timestamp <span class="token punctuation">(</span>e.g. <span class="token number">2013</span>-01-02T13:23:37Z<span class="token punctuation">)</span> or relative <span class="token punctuation">(</span>e.g. 42m <span class="token keyword">for</span> <span class="token number">42</span> minutes<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常用：</p><ul><li><p><code>docker logs -tf 容器id</code></p></li><li><p><code>docker logs --tail number 容器id</code></p><ul><li><code>num</code>为要显示的日志条数</li></ul></li></ul><p><code>Docker</code>容器后台运行必须要有一个前台的进程，否则会自动停止；编写<code>shell</code>脚本循环执行，使<code>centos</code>容器保持运行状态。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker run -d centos /bin/sh -c &quot;while true;do echo hi;sleep 5;done&quot;</span>
4c57edbf79227f256452ebb719716ed2b4b9dcd5170fce1a8a1da10dff225082
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS     NAMES
4c57edbf7922   centos    <span class="token string">&quot;/bin/sh -c &#39;while t…&quot;</span>   <span class="token number">12</span> seconds ago   Up <span class="token number">11</span> seconds             xenodochial_lalande
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker logs -tf --tail 10 4c57edbf7922</span>
<span class="token number">2021</span>-10-29T07:12:38.680645208Z hi
<span class="token number">2021</span>-10-29T07:12:43.682316339Z hi
<span class="token number">2021</span>-10-29T07:12:48.684010465Z hi
<span class="token number">2021</span>-10-29T07:12:53.686100268Z hi
<span class="token number">2021</span>-10-29T07:12:58.687727415Z hi
<span class="token number">2021</span>-10-29T07:13:03.689642682Z hi
<span class="token number">2021</span>-10-29T07:13:08.691281535Z hi
<span class="token number">2021</span>-10-29T07:13:13.692534177Z hi
<span class="token number">2021</span>-10-29T07:13:18.693935678Z hi
<span class="token number">2021</span>-10-29T07:13:23.695554000Z hi
^C
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看容器中进程信息" tabindex="-1"><a class="header-anchor" href="#查看容器中进程信息" aria-hidden="true">#</a> 查看容器中进程信息</h3><p><code>docker top</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker top 4c57edbf7922</span>
<span class="token environment constant">UID</span>                 PID                 <span class="token environment constant">PPID</span>                C                   STIME               TTY                 TIME                CMD
root                <span class="token number">2523</span>                <span class="token number">2504</span>                <span class="token number">0</span>                   <span class="token number">15</span>:12               ?                   00:00:00            /bin/sh <span class="token parameter variable">-c</span> <span class="token keyword">while</span> <span class="token boolean">true</span><span class="token punctuation">;</span><span class="token keyword">do</span> <span class="token builtin class-name">echo</span> hi<span class="token punctuation">;</span><span class="token function">sleep</span> <span class="token number">5</span><span class="token punctuation">;</span><span class="token keyword">done</span>
root                <span class="token number">2595</span>                <span class="token number">2523</span>                <span class="token number">0</span>                   <span class="token number">15</span>:14               ?                   00:00:00            /usr/bin/coreutils --coreutils-prog-shebang<span class="token operator">=</span>sleep /usr/bin/sleep <span class="token number">5</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看容器的元数据" tabindex="-1"><a class="header-anchor" href="#查看容器的元数据" aria-hidden="true">#</a> 查看容器的元数据</h3><p><code>docker inspect 容器id</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker inspect 4c57edbf7922</span>
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;Id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;4c57edbf79227f256452ebb719716ed2b4b9dcd5170fce1a8a1da10dff225082&quot;</span>,
        <span class="token string">&quot;Created&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2021-10-29T07:12:38.500368814Z&quot;</span>,
        <span class="token string">&quot;Path&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/bin/sh&quot;</span>,
        <span class="token string">&quot;Args&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;-c&quot;</span>,
            <span class="token string">&quot;while true;do echo hi;sleep 5;done&quot;</span>
        <span class="token punctuation">]</span>,
        <span class="token string">&quot;State&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Status&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;running&quot;</span>,
            <span class="token string">&quot;Running&quot;</span><span class="token builtin class-name">:</span> true,
            <span class="token string">&quot;Paused&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;Restarting&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;OOMKilled&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;Dead&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;Pid&quot;</span><span class="token builtin class-name">:</span> <span class="token number">2523</span>,
            <span class="token string">&quot;ExitCode&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;Error&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;StartedAt&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2021-10-29T07:12:38.681818995Z&quot;</span>,
            <span class="token string">&quot;FinishedAt&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;0001-01-01T00:00:00Z&quot;</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;Image&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;sha256:5d0da3dc976460b72c77d94c8a1ad043720b0416bfc16c52c45d4847e53fadb6&quot;</span>,
        <span class="token string">&quot;ResolvConfPath&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/containers/4c57edbf79227f256452ebb719716ed2b4b9dcd5170fce1a8a1da10dff225082/resolv.conf&quot;</span>,
        <span class="token string">&quot;HostnamePath&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/containers/4c57edbf79227f256452ebb719716ed2b4b9dcd5170fce1a8a1da10dff225082/hostname&quot;</span>,
        <span class="token string">&quot;HostsPath&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/containers/4c57edbf79227f256452ebb719716ed2b4b9dcd5170fce1a8a1da10dff225082/hosts&quot;</span>,
        <span class="token string">&quot;LogPath&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/containers/4c57edbf79227f256452ebb719716ed2b4b9dcd5170fce1a8a1da10dff225082/4c57edbf79227f256452ebb719716ed2b4b9dcd5170fce1a8a1da10dff225082-json.log&quot;</span>,
        <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/xenodochial_lalande&quot;</span>,
        <span class="token string">&quot;RestartCount&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
        <span class="token string">&quot;Driver&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;overlay2&quot;</span>,
        <span class="token string">&quot;Platform&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;linux&quot;</span>,
        <span class="token string">&quot;MountLabel&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;ProcessLabel&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;AppArmorProfile&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;ExecIDs&quot;</span><span class="token builtin class-name">:</span> null,
        <span class="token string">&quot;HostConfig&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Binds&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;ContainerIDFile&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;LogConfig&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;Type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;json-file&quot;</span>,
                <span class="token string">&quot;Config&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;NetworkMode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;default&quot;</span>,
            <span class="token string">&quot;PortBindings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>,
            <span class="token string">&quot;RestartPolicy&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;no&quot;</span>,
                <span class="token string">&quot;MaximumRetryCount&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;AutoRemove&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;VolumeDriver&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;VolumesFrom&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;CapAdd&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;CapDrop&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;CgroupnsMode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;host&quot;</span>,
            <span class="token string">&quot;Dns&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">&quot;DnsOptions&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">&quot;DnsSearch&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">&quot;ExtraHosts&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;GroupAdd&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;IpcMode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;private&quot;</span>,
            <span class="token string">&quot;Cgroup&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;Links&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;OomScoreAdj&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;PidMode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;Privileged&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;PublishAllPorts&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;ReadonlyRootfs&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;SecurityOpt&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;UTSMode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;UsernsMode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;ShmSize&quot;</span><span class="token builtin class-name">:</span> <span class="token number">67108864</span>,
            <span class="token string">&quot;Runtime&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;runc&quot;</span>,
            <span class="token string">&quot;ConsoleSize&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token number">0</span>,
                <span class="token number">0</span>
            <span class="token punctuation">]</span>,
            <span class="token string">&quot;Isolation&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;CpuShares&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;Memory&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;NanoCpus&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;CgroupParent&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;BlkioWeight&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;BlkioWeightDevice&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">&quot;BlkioDeviceReadBps&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;BlkioDeviceWriteBps&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;BlkioDeviceReadIOps&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;BlkioDeviceWriteIOps&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;CpuPeriod&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;CpuQuota&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;CpuRealtimePeriod&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;CpuRealtimeRuntime&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;CpusetCpus&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;CpusetMems&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;Devices&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">&quot;DeviceCgroupRules&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;DeviceRequests&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;KernelMemory&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;KernelMemoryTCP&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;MemoryReservation&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;MemorySwap&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;MemorySwappiness&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;OomKillDisable&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;PidsLimit&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;Ulimits&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;CpuCount&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;CpuPercent&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;IOMaximumIOps&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;IOMaximumBandwidth&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;MaskedPaths&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;/proc/asound&quot;</span>,
                <span class="token string">&quot;/proc/acpi&quot;</span>,
                <span class="token string">&quot;/proc/kcore&quot;</span>,
                <span class="token string">&quot;/proc/keys&quot;</span>,
                <span class="token string">&quot;/proc/latency_stats&quot;</span>,
                <span class="token string">&quot;/proc/timer_list&quot;</span>,
                <span class="token string">&quot;/proc/timer_stats&quot;</span>,
                <span class="token string">&quot;/proc/sched_debug&quot;</span>,
                <span class="token string">&quot;/proc/scsi&quot;</span>,
                <span class="token string">&quot;/sys/firmware&quot;</span>
            <span class="token punctuation">]</span>,
            <span class="token string">&quot;ReadonlyPaths&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;/proc/bus&quot;</span>,
                <span class="token string">&quot;/proc/fs&quot;</span>,
                <span class="token string">&quot;/proc/irq&quot;</span>,
                <span class="token string">&quot;/proc/sys&quot;</span>,
                <span class="token string">&quot;/proc/sysrq-trigger&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;GraphDriver&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Data&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;LowerDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/overlay2/294a9e60f30995ad07636a45030fc9ac104cfe0f35d3197a6bc7171186f5fe5f-init/diff:/var/lib/docker/overlay2/0ab1d01f204652c7e92e556e2dd1f08093d99ee5ba7a2ee15aeb70324e819ac0/diff&quot;</span>,
                <span class="token string">&quot;MergedDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/overlay2/294a9e60f30995ad07636a45030fc9ac104cfe0f35d3197a6bc7171186f5fe5f/merged&quot;</span>,
                <span class="token string">&quot;UpperDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/overlay2/294a9e60f30995ad07636a45030fc9ac104cfe0f35d3197a6bc7171186f5fe5f/diff&quot;</span>,
                <span class="token string">&quot;WorkDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/overlay2/294a9e60f30995ad07636a45030fc9ac104cfe0f35d3197a6bc7171186f5fe5f/work&quot;</span>
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;overlay2&quot;</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;Mounts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
        <span class="token string">&quot;Config&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Hostname&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;4c57edbf7922&quot;</span>,
            <span class="token string">&quot;Domainname&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;User&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;AttachStdin&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;AttachStdout&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;AttachStderr&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;Tty&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;OpenStdin&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;StdinOnce&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;Env&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin&quot;</span>
            <span class="token punctuation">]</span>,
            <span class="token string">&quot;Cmd&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;/bin/sh&quot;</span>,
                <span class="token string">&quot;-c&quot;</span>,
                <span class="token string">&quot;while true;do echo hi;sleep 5;done&quot;</span>
            <span class="token punctuation">]</span>,
            <span class="token string">&quot;Image&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;centos&quot;</span>,
            <span class="token string">&quot;Volumes&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;WorkingDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;Entrypoint&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;OnBuild&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;Labels&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;org.label-schema.build-date&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;20210915&quot;</span>,
                <span class="token string">&quot;org.label-schema.license&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;GPLv2&quot;</span>,
                <span class="token string">&quot;org.label-schema.name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;CentOS Base Image&quot;</span>,
                <span class="token string">&quot;org.label-schema.schema-version&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1.0&quot;</span>,
                <span class="token string">&quot;org.label-schema.vendor&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;CentOS&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;NetworkSettings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Bridge&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;SandboxID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;0a7fdfc5a908ad18bf51398c0328cf7b4e515286df97592d367d80d9290e5033&quot;</span>,
            <span class="token string">&quot;HairpinMode&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;LinkLocalIPv6Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;LinkLocalIPv6PrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;Ports&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>,
            <span class="token string">&quot;SandboxKey&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/run/docker/netns/0a7fdfc5a908&quot;</span>,
            <span class="token string">&quot;SecondaryIPAddresses&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;SecondaryIPv6Addresses&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;EndpointID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;c68d2781bd2dc7144ea44e21b3c72ebf3058eb0dde2b6523e303dfc9dc3edb0c&quot;</span>,
            <span class="token string">&quot;Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.17.0.1&quot;</span>,
            <span class="token string">&quot;GlobalIPv6Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;GlobalIPv6PrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;IPAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.17.0.2&quot;</span>,
            <span class="token string">&quot;IPPrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">16</span>,
            <span class="token string">&quot;IPv6Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;MacAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;02:42:ac:11:00:02&quot;</span>,
            <span class="token string">&quot;Networks&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;bridge&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                    <span class="token string">&quot;IPAMConfig&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;Links&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;Aliases&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;NetworkID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;70b9319ee22c471f91a2b307d7444a3e0ffe8ddb4b22340b2e62684cf59fd26d&quot;</span>,
                    <span class="token string">&quot;EndpointID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;c68d2781bd2dc7144ea44e21b3c72ebf3058eb0dde2b6523e303dfc9dc3edb0c&quot;</span>,
                    <span class="token string">&quot;Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.17.0.1&quot;</span>,
                    <span class="token string">&quot;IPAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.17.0.2&quot;</span>,
                    <span class="token string">&quot;IPPrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">16</span>,
                    <span class="token string">&quot;IPv6Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                    <span class="token string">&quot;GlobalIPv6Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                    <span class="token string">&quot;GlobalIPv6PrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
                    <span class="token string">&quot;MacAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;02:42:ac:11:00:02&quot;</span>,
                    <span class="token string">&quot;DriverOpts&quot;</span><span class="token builtin class-name">:</span> null
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="进入当前正在运行的容器" tabindex="-1"><a class="header-anchor" href="#进入当前正在运行的容器" aria-hidden="true">#</a> 进入当前正在运行的容器</h4><ol><li><p><code>docker exec</code>：进入容器后开启一个新的终端，可以在里面操作</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker exec -it  4c57edbf7922 /bin/bash</span>
<span class="token punctuation">[</span>root@4c57edbf7922 /<span class="token punctuation">]</span><span class="token comment"># ls</span>
bin  dev  etc  home  lib  lib64  lost+found  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
<span class="token punctuation">[</span>root@4c57edbf7922 /<span class="token punctuation">]</span><span class="token comment"># ps -es</span>
  <span class="token environment constant">UID</span>     PID          PENDING          BLOCKED          IGNORED           CAUGHT STAT TTY        TIME COMMAND
    <span class="token number">0</span>      <span class="token number">66</span> 0000000000000000 0000000000010000 0000000000380004 000000004b817efb Ss   pts/0      <span class="token number">0</span>:00 /bin/bash <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/b
    <span class="token number">0</span>      <span class="token number">84</span> 0000000000000000 0000000000000000 0000000000000000 00000001f3d1fef9 R+   pts/0      <span class="token number">0</span>:00 <span class="token function">ps</span> <span class="token parameter variable">-es</span> <span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>en_US.UTF-8 <span class="token assign-left variable"><span class="token environment constant">HOSTNAME</span></span><span class="token operator">=</span>4c57edbf7922 <span class="token assign-left variable"><span class="token environment constant">PWD</span></span><span class="token operator">=</span>/ <span class="token assign-left variable"><span class="token environment constant">HOME</span></span><span class="token operator">=</span>/root
<span class="token punctuation">[</span>root@4c57edbf7922 /<span class="token punctuation">]</span><span class="token comment"># ps -ef</span>
<span class="token environment constant">UID</span>          PID    <span class="token environment constant">PPID</span>  C STIME TTY          TIME CMD
root           <span class="token number">1</span>       <span class="token number">0</span>  <span class="token number">0</span> 07:12 ?        00:00:00 /bin/sh <span class="token parameter variable">-c</span> <span class="token keyword">while</span> <span class="token boolean">true</span><span class="token punctuation">;</span><span class="token keyword">do</span> <span class="token builtin class-name">echo</span> hi<span class="token punctuation">;</span><span class="token function">sleep</span> <span class="token number">5</span><span class="token punctuation">;</span><span class="token keyword">done</span>
root          <span class="token number">66</span>       <span class="token number">0</span>  <span class="token number">0</span> 07:17 pts/0    00:00:00 /bin/bash
root          <span class="token number">85</span>       <span class="token number">1</span>  <span class="token number">0</span> 07:17 ?        00:00:00 /usr/bin/coreutils --coreutils-prog-shebang<span class="token operator">=</span>sleep /usr/bin/sleep <span class="token number">5</span>
root          <span class="token number">86</span>      <span class="token number">66</span>  <span class="token number">0</span> 07:17 pts/0    00:00:00 <span class="token function">ps</span> <span class="token parameter variable">-ef</span>
<span class="token punctuation">[</span>root@4c57edbf7922 /<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>docker attach</code>：进入容器正在执行的终端，不会启动新的进程</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker attach 4c57edbf7922</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="拷贝容器文件到主机" tabindex="-1"><a class="header-anchor" href="#拷贝容器文件到主机" aria-hidden="true">#</a> 拷贝容器文件到主机</h3><p><code>docker cp 容器id:容器内路径 目的主机路径</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker exec -it 4c57edbf7922 /bin/bash</span>
<span class="token punctuation">[</span>root@4c57edbf7922 /<span class="token punctuation">]</span><span class="token comment"># cd home</span>
<span class="token punctuation">[</span>root@4c57edbf7922 home<span class="token punctuation">]</span><span class="token comment"># ls</span>
<span class="token punctuation">[</span>root@4c57edbf7922 home<span class="token punctuation">]</span><span class="token comment"># touch text.java</span>
<span class="token punctuation">[</span>root@4c57edbf7922 home<span class="token punctuation">]</span><span class="token comment"># ls</span>
text.java
<span class="token punctuation">[</span>root@4c57edbf7922 home<span class="token punctuation">]</span><span class="token comment"># exit</span>
<span class="token builtin class-name">exit</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS     NAMES
4c57edbf7922   centos    <span class="token string">&quot;/bin/sh -c &#39;while t…&quot;</span>   <span class="token number">11</span> minutes ago   Up <span class="token number">11</span> minutes             xenodochial_lalande
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker cp 4c57edbf7922:/home/text.java /home</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls /home</span>
<span class="token builtin class-name">echo</span>  text.java
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用命令小结" tabindex="-1"><a class="header-anchor" href="#常用命令小结" aria-hidden="true">#</a> 常用命令小结</h2><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/docker-image-and-container/docker-commands-diagram.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/docker-image-and-container/docker-commands-summary.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="docker-图形化管理工具" tabindex="-1"><a class="header-anchor" href="#docker-图形化管理工具" aria-hidden="true">#</a> Docker 图形化管理工具</h2><h3 id="docker-ui" tabindex="-1"><a class="header-anchor" href="#docker-ui" aria-hidden="true">#</a> Docker UI</h3><ol><li><p>查找</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker search dockerui</span>
NAME                           DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
uifd/ui-for-docker             A web interface <span class="token keyword">for</span> Docker, formerly known a…   <span class="token number">108</span>                  <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
abh1nav/dockerui               An updated version of crosbymichael/dockerui…   <span class="token number">98</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
kevan/dockerui                 Deprecated: Use  uifd/ui-for-docker             <span class="token number">15</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
microbox/dockerui              Trusted Automated dockerui image <span class="token punctuation">(</span>16MB size<span class="token punctuation">)</span>    <span class="token number">9</span>
madhavkobal/dockerui           Docker Updated Version having Search, Pull, …   <span class="token number">7</span>
mgtsai/dockerui.base-xpra      Provide base <span class="token function">docker</span> images <span class="token keyword">for</span> X application…   <span class="token number">2</span>
rediceli/dockerui              Dockerui with nginx <span class="token keyword">for</span> basic auth              <span class="token number">1</span>
navionics/dockerui             Docker UI                                       <span class="token number">1</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
elegoev/dockerui               dockerui image based on crosbymichael/docker…   <span class="token number">1</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
levkov/dockerui                dockerui                                        <span class="token number">0</span>
yungsang/dockerui              Docker API Version: v1.8 UI Version: v0.4 Bu…   <span class="token number">0</span>
david510c/dockerui.base-xpra   dockerui.base-xpra with Firefox                 <span class="token number">0</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
winking/dockerui               The latest DockerUI build, see https://githu…   <span class="token number">0</span>
bbdinc/dockerui                A rebuild of the dockerui-with-auth             <span class="token number">0</span>
devalih/dockerui               To run <span class="token builtin class-name">:</span>  <span class="token function">docker</span> pull devalih/dockerui  dock…   <span class="token number">0</span>
bettse/dockerui                Fork of crosbymichael/dockerui                  <span class="token number">0</span>
alexerm/dockerui-auth                                                          <span class="token number">0</span>
drakin/dockerui                                                                <span class="token number">0</span>
cloudaku/dockerui                                                              <span class="token number">0</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
allincloud/dockerui                                                            <span class="token number">0</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
psychemedia/dockerui_patch                                                     <span class="token number">0</span>
c0710204/dockerui                                                              <span class="token number">0</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
pemcconnell/dockerui                                                           <span class="token number">0</span>
biibds/dockerui                                                                <span class="token number">0</span>
wansc/dockerui                                                                 <span class="token number">0</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>下载</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker pull abh1nav/dockerui</span>
Using default tag: latest
latest: Pulling from abh1nav/dockerui
Image docker.io/abh1nav/dockerui:latest uses outdated schema1 manifest format. Please upgrade to a schema2 image <span class="token keyword">for</span> better future compatibility. More information at https://docs.docker.com/registry/spec/deprecated-schema-v1/
a3ed95caeb02: Pull complete
5d3df020ecd3: Pull complete
bebf5a3b4dfb: Pull complete
e4452c0fe72b: Pull complete
6167d9726b07: Pull complete
53ebae19a314: Pull complete
Digest: sha256:a9c6c5393f561a0f42f41cfa80572b666e745d9b419569c42bac1e5cf9ceda32
Status: Downloaded newer image <span class="token keyword">for</span> abh1nav/dockerui:latest
docker.io/abh1nav/dockerui:latest
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker run -d --privileged --name dockerui -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock abh1nav/dockerui</span>
ee4f62f8a2da81a3f3d7ccf105fb263e9b2bacea0f65e2693e8893e1d87bf6b7
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>测试<br><img src="https://cdn.jsdelivr.net/gh/1coins/assets/docker-image-and-container/docker-ui.png" alt="" loading="lazy"></p></li></ol><h3 id="shipyard" tabindex="-1"><a class="header-anchor" href="#shipyard" aria-hidden="true">#</a> Shipyard</h3><h3 id="portainer" tabindex="-1"><a class="header-anchor" href="#portainer" aria-hidden="true">#</a> Portainer</h3><ol><li><p>查找</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker search portainer</span>
NAME                             DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
portainer/portainer              This Repo is now deprecated, use portainer/p…   <span class="token number">2136</span>
portainer/portainer-ce           Portainer CE - Making Docker and Kubernetes …   <span class="token number">818</span>
portainer/agent                  An agent used to manage all the resources in…   <span class="token number">120</span>
portainer/templates              App Templates <span class="token keyword">for</span> Portainer http://portainer…   <span class="token number">23</span>
lihaixin/portainer               <span class="token function">docker</span> ui                                       <span class="token number">15</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
greenled/portainer-stack-utils   Bash scripts to deploy/undeploy stacks <span class="token keyword">in</span> a …   <span class="token number">6</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
portainer/portainer-k8s-beta     Portainer <span class="token keyword">for</span> Kubernetes BETA                   <span class="token number">5</span>
portainerci/portainer            Portainer images automatically created via P…   <span class="token number">5</span>
portainer/golang-builder         Utility to build Golang binaries.               <span class="token number">4</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
hassioaddons/portainer                                                           <span class="token number">2</span>
portainer/portainer-ee           Portainer EE - Making Docker and Kubernetes …   <span class="token number">2</span>
portainer/base                   Multi-stage build image to create the Portai…   <span class="token number">2</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
portainer/agent-k8s-beta         Portainer <span class="token keyword">for</span> Kubernetes BETA <span class="token punctuation">(</span>agent<span class="token punctuation">)</span>           <span class="token number">1</span>
cqkz/portainer-zh                portainer-ce:2.1.1-alpine，汉化文件来自恩山…             <span class="token number">1</span>
softonic/portainer-endpoint      Allows auto register all the swarm nodes <span class="token keyword">in</span> …   <span class="token number">1</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
portainerci/portainer-ee         Portainer EE CI repository                      <span class="token number">0</span>
xanderstrike/portainer-issue     <span class="token keyword">for</span> illustrating a portainer issue              <span class="token number">0</span>
iconviet/portainer                                                               <span class="token number">0</span>
hassioaddons/portainer-amd64                                                     <span class="token number">0</span>
<span class="token number">6053537</span>/portainer-ce             portainer-ce中文汉化版                               <span class="token number">0</span>
portainerci/agent                Portainer agent images automatically created…   <span class="token number">0</span>
helloysd/portainer                                                               <span class="token number">0</span>
antsoftxyz/portainer-api         A portainer api wrapper <span class="token function">which</span> can <span class="token builtin class-name">help</span> you C…   <span class="token number">0</span>
11384eb/portainer                                                                <span class="token number">0</span>
nenadilic84/portainer                                                            <span class="token number">0</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>下载</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker pull portainer/portainer</span>
Using default tag: latest
latest: Pulling from portainer/portainer
94cfa856b2b1: Pull complete
49d59ee0881a: Pull complete
a2300fd28637: Pull complete
Digest: sha256:fb45b43738646048a0a0cc74fcee2865b69efde857e710126084ee5de9be0f3f
Status: Downloaded newer image <span class="token keyword">for</span> portainer/portainer:latest
docker.io/portainer/portainer:latest
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker run -d --name portainerui -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer</span>
fb7e6dd2e3296b05868cf17f00902d3da598abde5e9959a0db39c84bb28cdcf6
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>测试</p><ol><li>第一次登录设置<code>admin</code>用户的密码<br><img src="https://cdn.jsdelivr.net/gh/1coins/assets/docker-image-and-container/docker-portainer-pass.png" alt="" loading="lazy"></li><li>如果是阿里云服务器记得设置安全组，选择连接本地的<code>Docker</code><br><img src="https://cdn.jsdelivr.net/gh/1coins/assets/docker-image-and-container/docker-portainer-connect.png" alt="" loading="lazy"></li></ol></li></ol><h2 id="docker-镜像详解" tabindex="-1"><a class="header-anchor" href="#docker-镜像详解" aria-hidden="true">#</a> Docker 镜像详解</h2><h3 id="什么是镜像" tabindex="-1"><a class="header-anchor" href="#什么是镜像" aria-hidden="true">#</a> 什么是镜像</h3><p>镜像是一种轻量级、可执行的独立软件包，用来打包软件运行环境和基于运行环境开发的软件，它包含运行某个软件所需要的所有内容，包括代码，运行时（一个程序在运行或者在被执行的依赖）、库，环境变量和配置文件。</p><h3 id="unionfs-联合文件系统" tabindex="-1"><a class="header-anchor" href="#unionfs-联合文件系统" aria-hidden="true">#</a> UnionFS（联合文件系统）</h3><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/docker-image-and-container/docker-union-fs-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/docker-image-and-container/docker-union-fs-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>联合文件系统（<code>UnionFS</code>）是一种分层、轻量级并且高性能的文件系统，它支持对文件系统的修改作为一次提交来一层层的叠加，同时可以将不同目录挂载到同一个虚拟文件系统下。联合文件系统是<code>Docker</code>镜像的基础。镜像可以通过分层来进行继承，基于基础镜像（没有父镜像），可以制作各种具体的应用镜像。</li><li>特性：一次同时加载多个文件系统，但从外面看起来只能看到一个文件系统。联合加载会把各层文件系统叠加起来，这样最终的文件系统会包含所有底层的文件和目录。</li></ul><h3 id="镜像加载原理" tabindex="-1"><a class="header-anchor" href="#镜像加载原理" aria-hidden="true">#</a> 镜像加载原理</h3><p><code>Docker</code>的镜像实际由一层一层的文件系统组成：</p><ul><li><code>bootfs</code>（<code>boot file system</code>）主要包含<code>bootloader</code>和<code>kernel</code>；<code>bootloader</code>主要是引导加载<code>kernel</code>，完成后整个内核就都在内存中了，此时内存的使用权已由<code>bootfs</code>转交给内核，系统卸载<code>bootfs</code>，可以被不同的<code>Linux</code>发行版公用。</li><li><code>rootfs</code>（<code>root file system</code>），包含典型<code>Linux</code>系统中的<code>/dev</code>，<code>/proc</code>，<code>/bin</code>，<code>/etc</code>等标准目录和文件；<code>rootfs</code>就是各种不同操作系统发行版（<code>Ubuntu</code>，<code>Centos</code>等）。因为底层直接用<code>Host</code>的<code>kernel</code>，<code>rootfs</code>只包含最基本的命令，工具和程序就可以了。</li></ul><h3 id="分层理解" tabindex="-1"><a class="header-anchor" href="#分层理解" aria-hidden="true">#</a> 分层理解</h3><p>所有的<code>Docker</code>镜像都起始于一个基础镜像层，当进行修改或增加新的内容时，就会在当前镜像层之上，创建新的容器层。</p><p>容器在启动时会在镜像最外层上建立一层可读写的容器层（<code>R/W</code>），而镜像层是只读的（<code>R/O</code>）。</p><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/docker-image-and-container/docker-layer.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>查看镜像分层的方式可以通过<code>docker image inspect</code>命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker image inspect tomcat:latest</span>
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;Id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;sha256:b0e0b0a92cf96022059ea14d7c0bee5f51cc856f21be4566d435125d6b261a6b&quot;</span>,
        <span class="token string">&quot;RepoTags&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;tomcat:latest&quot;</span>
        <span class="token punctuation">]</span>,
        <span class="token string">&quot;RepoDigests&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;tomcat@sha256:509cf786b26a8bd43e58a90beba60bdfd6927d2ce9c7902cfa675d3ea9f4c631&quot;</span>
        <span class="token punctuation">]</span>,
        <span class="token string">&quot;Parent&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;Comment&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;Created&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2021-10-22T00:23:10.031482334Z&quot;</span>,
        <span class="token string">&quot;Container&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;3910543988c25e096c2ed3920ba0fd86a1d227fad82651cd6c8176d1427e3cbb&quot;</span>,
        <span class="token string">&quot;ContainerConfig&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Hostname&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;3910543988c2&quot;</span>,
            <span class="token string">&quot;Domainname&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;User&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;AttachStdin&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;AttachStdout&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;AttachStderr&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;ExposedPorts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;8080/tcp&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;Tty&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;OpenStdin&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;StdinOnce&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;Env&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;PATH=/usr/local/tomcat/bin:/usr/local/openjdk-11/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin&quot;</span>,
                <span class="token string">&quot;JAVA_HOME=/usr/local/openjdk-11&quot;</span>,
                <span class="token string">&quot;LANG=C.UTF-8&quot;</span>,
                <span class="token string">&quot;JAVA_VERSION=11.0.13&quot;</span>,
                <span class="token string">&quot;CATALINA_HOME=/usr/local/tomcat&quot;</span>,
                <span class="token string">&quot;TOMCAT_NATIVE_LIBDIR=/usr/local/tomcat/native-jni-lib&quot;</span>,
                <span class="token string">&quot;LD_LIBRARY_PATH=/usr/local/tomcat/native-jni-lib&quot;</span>,
                <span class="token string">&quot;GPG_KEYS=A9C5DF4D22E99998D9875A5110C01C5A2F6059E7&quot;</span>,
                <span class="token string">&quot;TOMCAT_MAJOR=10&quot;</span>,
                <span class="token string">&quot;TOMCAT_VERSION=10.0.12&quot;</span>,
                <span class="token string">&quot;TOMCAT_SHA512=e084fc0cc243c0a9ac7de85ffd4b96d00b40b5493ed7ef276d91373fe8036bc953406cd3c48db6b5ae116f2af162fd1bfb13ecdddf5d64523fdd69a9463de8a3&quot;</span>
            <span class="token punctuation">]</span>,
            <span class="token string">&quot;Cmd&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;/bin/sh&quot;</span>,
                <span class="token string">&quot;-c&quot;</span>,
                <span class="token string">&quot;#(nop) &quot;</span>,
                <span class="token string">&quot;CMD [<span class="token entity" title="\\&quot;">\\&quot;</span>catalina.sh<span class="token entity" title="\\&quot;">\\&quot;</span> <span class="token entity" title="\\&quot;">\\&quot;</span>run<span class="token entity" title="\\&quot;">\\&quot;</span>]&quot;</span>
            <span class="token punctuation">]</span>,
            <span class="token string">&quot;Image&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;sha256:9b2ff315119c435ad9053c0af16ad0e7b888bb8c78f54428b83de6edac04d00a&quot;</span>,
            <span class="token string">&quot;Volumes&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;WorkingDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/usr/local/tomcat&quot;</span>,
            <span class="token string">&quot;Entrypoint&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;OnBuild&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;Labels&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;DockerVersion&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;20.10.7&quot;</span>,
        <span class="token string">&quot;Author&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;Config&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Hostname&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;Domainname&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;User&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;AttachStdin&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;AttachStdout&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;AttachStderr&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;ExposedPorts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;8080/tcp&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;Tty&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;OpenStdin&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;StdinOnce&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;Env&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;PATH=/usr/local/tomcat/bin:/usr/local/openjdk-11/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin&quot;</span>,
                <span class="token string">&quot;JAVA_HOME=/usr/local/openjdk-11&quot;</span>,
                <span class="token string">&quot;LANG=C.UTF-8&quot;</span>,
                <span class="token string">&quot;JAVA_VERSION=11.0.13&quot;</span>,
                <span class="token string">&quot;CATALINA_HOME=/usr/local/tomcat&quot;</span>,
                <span class="token string">&quot;TOMCAT_NATIVE_LIBDIR=/usr/local/tomcat/native-jni-lib&quot;</span>,
                <span class="token string">&quot;LD_LIBRARY_PATH=/usr/local/tomcat/native-jni-lib&quot;</span>,
                <span class="token string">&quot;GPG_KEYS=A9C5DF4D22E99998D9875A5110C01C5A2F6059E7&quot;</span>,
                <span class="token string">&quot;TOMCAT_MAJOR=10&quot;</span>,
                <span class="token string">&quot;TOMCAT_VERSION=10.0.12&quot;</span>,
                <span class="token string">&quot;TOMCAT_SHA512=e084fc0cc243c0a9ac7de85ffd4b96d00b40b5493ed7ef276d91373fe8036bc953406cd3c48db6b5ae116f2af162fd1bfb13ecdddf5d64523fdd69a9463de8a3&quot;</span>
            <span class="token punctuation">]</span>,
            <span class="token string">&quot;Cmd&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;catalina.sh&quot;</span>,
                <span class="token string">&quot;run&quot;</span>
            <span class="token punctuation">]</span>,
            <span class="token string">&quot;Image&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;sha256:9b2ff315119c435ad9053c0af16ad0e7b888bb8c78f54428b83de6edac04d00a&quot;</span>,
            <span class="token string">&quot;Volumes&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;WorkingDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/usr/local/tomcat&quot;</span>,
            <span class="token string">&quot;Entrypoint&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;OnBuild&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;Labels&quot;</span><span class="token builtin class-name">:</span> null
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;Architecture&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;amd64&quot;</span>,
        <span class="token string">&quot;Os&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;linux&quot;</span>,
        <span class="token string">&quot;Size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">679601323</span>,
        <span class="token string">&quot;VirtualSize&quot;</span><span class="token builtin class-name">:</span> <span class="token number">679601323</span>,
        <span class="token string">&quot;GraphDriver&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Data&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;LowerDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/overlay2/d790d6db212523ea1193ce0b069697c847cf1f46dd7ee49426dbcd7143e6c178/diff:/var/lib/docker/overlay2/92a2c12ab39fe48f706f82bb5676d1864f599e9ab599d9db39cccbfe92039638/diff:/var/lib/docker/overlay2/407eb8f0c69437754677107d8fd7f17f4a1860145be1efc8b42346ce0fd4dbfe/diff:/var/lib/docker/overlay2/463c9c2a46ab7dd277bd856e02fa289c79c35ec8448d5bd928b9cc5f8c135c20/diff:/var/lib/docker/overlay2/4fece198c14710f63376f1cbad8eeb9d6d96ef2bc0abae8f0151e6f747860e4a/diff:/var/lib/docker/overlay2/bea7f4174b9fed08da36a6410fda3c8ac58f435775b9c421cd99728fff3e9886/diff:/var/lib/docker/overlay2/7067926d50fd10ed3aa0640305af85fa6dcc06a97a5673d7a5e6bc18a0e22fc9/diff:/var/lib/docker/overlay2/f7216c6e8ddb0119daa9c817454fe291cbe2ffdda129215ae36ce4c75f211b3d/diff:/var/lib/docker/overlay2/821accbe6656f334993170bbd8d3eddeef16b7b6aa257612b8dd7f829bbf2786/diff&quot;</span>,
                <span class="token string">&quot;MergedDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/overlay2/196ca3b125c83355469032ec19738aa2dc468a29d3ae7877904abc5a06b967a5/merged&quot;</span>,
                <span class="token string">&quot;UpperDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/overlay2/196ca3b125c83355469032ec19738aa2dc468a29d3ae7877904abc5a06b967a5/diff&quot;</span>,
                <span class="token string">&quot;WorkDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/overlay2/196ca3b125c83355469032ec19738aa2dc468a29d3ae7877904abc5a06b967a5/work&quot;</span>
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;overlay2&quot;</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;RootFS&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;layers&quot;</span>,
            <span class="token string">&quot;Layers&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;sha256:62a747bf1719d2d37fff5670ed40de6900a95743172de1b4434cb019b56f30b4&quot;</span>,
                <span class="token string">&quot;sha256:0b3c02b5d746e8cc8d537922b7c2abc17b22da7de268d068f2a4ebd55ac4f6d7&quot;</span>,
                <span class="token string">&quot;sha256:9f9f651e9303146e4dd98aca7da21fd8e21dd1a47d71da3d6d187da7691a6dc9&quot;</span>,
                <span class="token string">&quot;sha256:ba6e5ff31f235bbfd34aae202da4e6d4dc759f266f284d79018cae755f36f9e3&quot;</span>,
                <span class="token string">&quot;sha256:36e0782f115904773d06f7d03af94a1ec9ca9ad42736ec55baae8823c457ba69&quot;</span>,
                <span class="token string">&quot;sha256:62a5b8741e8334844625c513016da47cf2b61afb1145f6317edacb4c13ab010e&quot;</span>,
                <span class="token string">&quot;sha256:78700b6b35d0ab6e70befff1d26c5350222a8fea49cc874916bce950eeae35a1&quot;</span>,
                <span class="token string">&quot;sha256:cb80689c9aefc3f455b35b0110fa04a7c13e21a25f342ee2bb27c28f618a0eb5&quot;</span>,
                <span class="token string">&quot;sha256:5122793ce9cb2007fe52ae7bb8ff25001e7c29c04d081a0a4bb1986d1b06a4cb&quot;</span>,
                <span class="token string">&quot;sha256:450346f29d28210054da70889add4cf59f9c9f3964a94cfa213f905620ade8e2&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;Metadata&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;LastTagTime&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;0001-01-01T00:00:00Z&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里指示了分层信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token string">&quot;RootFS&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;Type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;layers&quot;</span>,
    <span class="token string">&quot;Layers&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;sha256:62a747bf1719d2d37fff5670ed40de6900a95743172de1b4434cb019b56f30b4&quot;</span>,
        <span class="token string">&quot;sha256:0b3c02b5d746e8cc8d537922b7c2abc17b22da7de268d068f2a4ebd55ac4f6d7&quot;</span>,
        <span class="token string">&quot;sha256:9f9f651e9303146e4dd98aca7da21fd8e21dd1a47d71da3d6d187da7691a6dc9&quot;</span>,
        <span class="token string">&quot;sha256:ba6e5ff31f235bbfd34aae202da4e6d4dc759f266f284d79018cae755f36f9e3&quot;</span>,
        <span class="token string">&quot;sha256:36e0782f115904773d06f7d03af94a1ec9ca9ad42736ec55baae8823c457ba69&quot;</span>,
        <span class="token string">&quot;sha256:62a5b8741e8334844625c513016da47cf2b61afb1145f6317edacb4c13ab010e&quot;</span>,
        <span class="token string">&quot;sha256:78700b6b35d0ab6e70befff1d26c5350222a8fea49cc874916bce950eeae35a1&quot;</span>,
        <span class="token string">&quot;sha256:cb80689c9aefc3f455b35b0110fa04a7c13e21a25f342ee2bb27c28f618a0eb5&quot;</span>,
        <span class="token string">&quot;sha256:5122793ce9cb2007fe52ae7bb8ff25001e7c29c04d081a0a4bb1986d1b06a4cb&quot;</span>,
        <span class="token string">&quot;sha256:450346f29d28210054da70889add4cf59f9c9f3964a94cfa213f905620ade8e2&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举一个简单的例子，加入基于<code>Ubuntu Linux 16.04</code>创建一个新的镜像，这就是新镜像的第一层；如果在该镜像中添加<code>Python</code>包，就会在基础镜像层之上创建第二个镜像层；如果继续添加一个安全补丁，就会创建第三个镜像层。</p><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/docker-image-and-container/docker-image-package-layer.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在添加额外镜像层的同时，镜像始终保持是当前所有镜像的组合。下图举了一个简单的例子，每个镜像层包含三个文件，而镜像包含了来自两个镜像层的六个文件。</p><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/docker-image-and-container/docker-image-layer.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这种情况下，上层镜像层中的文件覆盖了底层镜像层中的文件，这样就使得文件的更新版本作为一个新镜像层添加到镜像当中。</p><p><code>Docker</code>通过存储引擎（新版本采用快照机制）的方式来实现镜像层堆栈，并保证多镜像层对外展示为统一的文件系统。</p><p><code>Linux</code>上可用的存储引擎有<code>AUFS</code>、<code>Overlay2</code>、<code>Device Mapper</code>、<code>Btrfs</code>以及<code>ZFS</code>。顾名思义，每种存储引擎都基于<code>Linux</code>中对应的文件系统或者块设备技术，并且每种存储引擎都有其独有的性能特点。</p><p><code>Docker</code>在<code>Windows</code>上仅支持<code>windowsfilter</code>一种存储引擎，该引擎基于<code>NTFS</code>文件系统之上实现了分层和<code>CoW</code>。</p><p>下图展示了与系统显示相同的三层镜像，所有镜像层堆叠并合并，对外提供统一的视图。</p><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/docker-image-and-container/docker-image-merge-view.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><code>Docker</code>镜像都是只读的，当容器启动时，一个新的可写层被加载到镜像的底部，这一层就是通常说的容器层，容器层之下都叫镜像层。</p><h3 id="提交镜像" tabindex="-1"><a class="header-anchor" href="#提交镜像" aria-hidden="true">#</a> 提交镜像</h3><p>使用<code>docker commit</code>命令提交容器成为一个新的版本，<code>docker commit -m=“提交的描述信息” -a=&quot;作者&quot; 容器id 目标镜像名:[TAG]</code>。</p><p>由于默认的<code>Tomcat</code>镜像的<code>webapps</code>文件夹中没有任何内容，需要从<code>webapps.dist</code>中拷贝文件到<code>webapps</code>文件夹。下面自行制作镜像：就是从<code>webapps.dist</code>中拷贝文件到<code>webapps</code>文件夹下，并提交该镜像作为一个新的镜像。使得该镜像默认的<code>webapps</code>文件夹下就有文件。具体命令如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker run -it tomcat /bin/bash</span>
root@36d34cc37920:/usr/local/tomcat<span class="token comment"># cd webapps</span>
root@36d34cc37920:/usr/local/tomcat/webapps<span class="token comment"># ls</span>
root@36d34cc37920:/usr/local/tomcat/webapps<span class="token comment"># cd ../</span>
root@36d34cc37920:/usr/local/tomcat<span class="token comment"># cp -r webapps.dist/* webapps</span>
root@36d34cc37920:/usr/local/tomcat<span class="token comment"># cd webapps</span>
root@36d34cc37920:/usr/local/tomcat/webapps<span class="token comment"># ls</span>
ROOT  docs  examples  host-manager  manager
root@36d34cc37920:/usr/local/tomcat/webapps<span class="token comment"># [root@localhost ~]#</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE     COMMAND       CREATED              STATUS              PORTS      NAMES
36d34cc37920   tomcat    <span class="token string">&quot;/bin/bash&quot;</span>   About a minute ago   Up About a minute   <span class="token number">8080</span>/tcp   sweet_meninsky
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker commit -m=&quot;add files to  webapps&quot; -a=&quot;echo&quot; 36d34cc37920 mytomcat:1.0</span>
sha256:97a599676bbb23fb8ee80fc9872c07660893560cc5af3450d53b6967cb516611
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY            TAG       IMAGE ID       CREATED         SIZE
mytomcat              <span class="token number">1.0</span>       97a599676bbb   <span class="token number">4</span> seconds ago   684MB
tomcat                latest    b0e0b0a92cf9   <span class="token number">8</span> days ago      680MB
mysql                 <span class="token number">5.7</span>       938b57d64674   <span class="token number">11</span> days ago     448MB
nginx                 latest    87a94228f133   <span class="token number">2</span> weeks ago     133MB
hello-world           latest    feb5d9fea6a5   <span class="token number">5</span> weeks ago     <span class="token number">13</span>.3kB
centos                latest    5d0da3dc9764   <span class="token number">6</span> weeks ago     231MB
portainer/portainer   latest    580c0e4e98b0   <span class="token number">7</span> months ago    <span class="token number">79</span>.1MB
elasticsearch         latest    5acf0e8da90b   <span class="token number">3</span> years ago     486MB
abh1nav/dockerui      latest    6e4d05915b2a   <span class="token number">6</span> years ago     470MB
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker run -it mytomcat:1.0 /bin/bash</span>
root@3821c6f35992:/usr/local/tomcat<span class="token comment"># cd webapps</span>
root@3821c6f35992:/usr/local/tomcat/webapps<span class="token comment"># ls</span>
ROOT  docs  examples  host-manager  manager
root@3821c6f35992:/usr/local/tomcat/webapps<span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明：</p><ul><li><code>-m</code>：提交的描述信息</li><li><code>-a</code>：作者</li><li><code>:[TAG]</code>：版本号</li></ul><h1 id="常见容器部署" tabindex="-1"><a class="header-anchor" href="#常见容器部署" aria-hidden="true">#</a> 常见容器部署</h1><h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h2>`,93),y=n("ol",null,[n("li",null,[n("p",null,"查找"),n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token punctuation"},"["),s("root@localhost ~"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token comment"},"# docker search nginx"),s(`
NAME                              DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
nginx                             Official build of Nginx.                        `),n("span",{class:"token number"},"15725"),s("     "),n("span",{class:"token punctuation"},"["),s("OK"),n("span",{class:"token punctuation"},"]"),s(`
jwilder/nginx-proxy               Automated Nginx reverse proxy `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token function"},"docker"),s(" con…   "),n("span",{class:"token number"},"2088"),s("                 "),n("span",{class:"token punctuation"},"["),s("OK"),n("span",{class:"token punctuation"},"]"),s(`
richarvey/nginx-php-fpm           Container running Nginx + PHP-FPM capable of…   `),n("span",{class:"token number"},"818"),s("                  "),n("span",{class:"token punctuation"},"["),s("OK"),n("span",{class:"token punctuation"},"]"),s(`
jc21/nginx-proxy-manager          Docker container `),n("span",{class:"token keyword"},"for"),s(" managing Nginx proxy ho…   "),n("span",{class:"token number"},"266"),s(`
linuxserver/nginx                 An Nginx container, brought to you by LinuxS…   `),n("span",{class:"token number"},"159"),s(`
tiangolo/nginx-rtmp               Docker image with Nginx using the nginx-rtmp…   `),n("span",{class:"token number"},"142"),s("                  "),n("span",{class:"token punctuation"},"["),s("OK"),n("span",{class:"token punctuation"},"]"),s(`
jlesage/nginx-proxy-manager       Docker container `),n("span",{class:"token keyword"},"for"),s(" Nginx Proxy Manager        "),n("span",{class:"token number"},"142"),s("                  "),n("span",{class:"token punctuation"},"["),s("OK"),n("span",{class:"token punctuation"},"]"),s(`
alfg/nginx-rtmp                   NGINX, nginx-rtmp-module and FFmpeg from sou…   `),n("span",{class:"token number"},"110"),s("                  "),n("span",{class:"token punctuation"},"["),s("OK"),n("span",{class:"token punctuation"},"]"),s(`
nginxdemos/hello                  NGINX webserver that serves a simple page co…   `),n("span",{class:"token number"},"76"),s("                   "),n("span",{class:"token punctuation"},"["),s("OK"),n("span",{class:"token punctuation"},"]"),s(`
privatebin/nginx-fpm-alpine       PrivateBin running on an Nginx, php-fpm `),n("span",{class:"token operator"},"&"),s(" Al…   "),n("span",{class:"token number"},"59"),s("                   "),n("span",{class:"token punctuation"},"["),s("OK"),n("span",{class:"token punctuation"},"]"),s(`
nginx/nginx-ingress               NGINX and  NGINX Plus Ingress Controllers fo…   `),n("span",{class:"token number"},"55"),s(`
nginxinc/nginx-unprivileged       Unprivileged NGINX Dockerfiles                  `),n("span",{class:"token number"},"54"),s(`
staticfloat/nginx-certbot         Opinionated setup `),n("span",{class:"token keyword"},"for"),s(" automatic TLS certs lo…   "),n("span",{class:"token number"},"25"),s("                   "),n("span",{class:"token punctuation"},"["),s("OK"),n("span",{class:"token punctuation"},"]"),s(`
nginxproxy/nginx-proxy            Automated Nginx reverse proxy `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token function"},"docker"),s(" con…   "),n("span",{class:"token number"},"23"),s(`
nginx/nginx-prometheus-exporter   NGINX Prometheus Exporter `),n("span",{class:"token keyword"},"for"),s(" NGINX and NGIN…   "),n("span",{class:"token number"},"21"),s(`
schmunk42/nginx-redirect          A very simple container to redirect HTTP tra…   `),n("span",{class:"token number"},"19"),s("                   "),n("span",{class:"token punctuation"},"["),s("OK"),n("span",{class:"token punctuation"},"]"),s(`
centos/nginx-112-centos7          Platform `),n("span",{class:"token keyword"},"for"),s(" running nginx "),n("span",{class:"token number"},"1.12"),s(" or building …   "),n("span",{class:"token number"},"15"),s(`
centos/nginx-18-centos7           Platform `),n("span",{class:"token keyword"},"for"),s(" running nginx "),n("span",{class:"token number"},"1.8"),s(" or building n…   "),n("span",{class:"token number"},"13"),s(`
bitwarden/nginx                   The Bitwarden nginx web server acting as a r…   `),n("span",{class:"token number"},"11"),s(`
flashspys/nginx-static            Super Lightweight Nginx Image                   `),n("span",{class:"token number"},"11"),s("                   "),n("span",{class:"token punctuation"},"["),s("OK"),n("span",{class:"token punctuation"},"]"),s(`
mailu/nginx                       Mailu nginx frontend                            `),n("span",{class:"token number"},"9"),s("                    "),n("span",{class:"token punctuation"},"["),s("OK"),n("span",{class:"token punctuation"},"]"),s(`
sophos/nginx-vts-exporter         Simple server that scrapes Nginx vts stats a…   `),n("span",{class:"token number"},"7"),s("                    "),n("span",{class:"token punctuation"},"["),s("OK"),n("span",{class:"token punctuation"},"]"),s(`
ansibleplaybookbundle/nginx-apb   An APB to deploy NGINX                          `),n("span",{class:"token number"},"2"),s("                    "),n("span",{class:"token punctuation"},"["),s("OK"),n("span",{class:"token punctuation"},"]"),s(`
wodby/nginx                       Generic nginx                                   `),n("span",{class:"token number"},"1"),s("                    "),n("span",{class:"token punctuation"},"["),s("OK"),n("span",{class:"token punctuation"},"]"),s(`
arnau/nginx-gate                  Docker image with Nginx with Lua enabled on …   `),n("span",{class:"token number"},"1"),s("                    "),n("span",{class:"token punctuation"},"["),s("OK"),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"["),s("root@localhost ~"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token comment"},"#"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])]),n("li",null,[n("p",null,"下载"),n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token punctuation"},"["),s("root@localhost ~"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token comment"},"# docker pull nginx"),s(`
Using default tag: latest
latest: Pulling from library/nginx
b380bbd43752: Already exists
fca7e12d1754: Pull complete
745ab57616cb: Pull complete
a4723e260b6f: Pull complete
1c84ebdff681: Pull complete
858292fd2e56: Pull complete
Digest: sha256:644a70516a26004c97d0d85c7fe1d0c3a67ea8ab7ddf4aff193d9f301670cf36
Status: Downloaded newer image `),n("span",{class:"token keyword"},"for"),s(` nginx:latest
docker.io/library/nginx:latest
`),n("span",{class:"token punctuation"},"["),s("root@localhost ~"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token comment"},"#"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])]),n("li",null,[n("p",null,"启动"),n("ul",null,[n("li",null,[n("code",null,"-d"),s("：后台运行")]),n("li",null,[n("code",null,"--name"),s("：给容器命名")]),n("li",null,[n("code",null,"-p 3334:80"),s("：将宿主机的端口 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"3334")]),n("annotation",{encoding:"application/x-tex"},"3334")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"3334")])])]),s(" 映射到该容器的 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"80")]),n("annotation",{encoding:"application/x-tex"},"80")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"80")])])]),s(" 端口")])]),n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token punctuation"},"["),s("root@localhost ~"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token comment"},"# docker run -d --name nginx -p 9000:80 nginx"),s(`
e8eb3635abc7f90fe9e7c75cf863f60682c9220550b76041177e4080292438c3
`),n("span",{class:"token punctuation"},"["),s("root@localhost ~"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token comment"},"#"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])]),n("figure",null,[n("img",{src:"https://cdn.jsdelivr.net/gh/1coins/assets/docker-image-and-container/docker-container-portmap.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")])]),n("li",null,[n("p",null,[s("配置文件"),n("br"),s(" 进入容器，自定义配置文件")]),n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token punctuation"},"["),s("root@localhost ~"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token comment"},"# docker exec -it nginx /bin/bash"),s(`
root@e8eb3635abc7:/`),n("span",{class:"token comment"},"# whereis nginx"),s(`
nginx: /usr/sbin/nginx /usr/lib/nginx /etc/nginx /usr/share/nginx
root@e8eb3635abc7:/`),n("span",{class:"token comment"},"# cd /etc/nginx"),s(`
root@e8eb3635abc7:/etc/nginx`),n("span",{class:"token comment"},"# ls"),s(`
conf.d  fastcgi_params  mime.types  modules  nginx.conf  scgi_params  uwsgi_params
root@e8eb3635abc7:/etc/nginx`),n("span",{class:"token comment"},"#"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])]),n("li",null,[n("p",null,"访问测试"),n("ul",null,[n("li",null,[n("p",null,[s("本地主机访问测试，"),n("code",null,"curl"),s("命令发起请求，如果使用阿里云服务器需要设置安全组")]),n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token punctuation"},"["),s("root@localhost ~"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token comment"},"# docker ps"),s(`
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS                                   NAMES
e8eb3635abc7   nginx     `),n("span",{class:"token string"},'"/docker-entrypoint.…"'),s("   "),n("span",{class:"token number"},"19"),s(" minutes ago   Up "),n("span",{class:"token number"},"19"),s(" minutes   "),n("span",{class:"token number"},"0.0"),s(".0.0:9000-"),n("span",{class:"token operator"},">"),n("span",{class:"token number"},"80"),s("/tcp, :::9000-"),n("span",{class:"token operator"},">"),n("span",{class:"token number"},"80"),s(`/tcp   nginx
`),n("span",{class:"token punctuation"},"["),s("root@localhost ~"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token comment"},"# curl localhost:9000"),s(`
`),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"!"),s("DOCTYPE html"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token operator"},"<"),s("html"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token operator"},"<"),s("head"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token operator"},"<"),s("title"),n("span",{class:"token operator"},">"),s("Welcome to nginx"),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"<"),s("/title"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token operator"},"<"),s("style"),n("span",{class:"token operator"},">"),s(`
html `),n("span",{class:"token punctuation"},"{"),s(" color-scheme: light dark"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}"),s(`
body `),n("span",{class:"token punctuation"},"{"),s(" width: 35em"),n("span",{class:"token punctuation"},";"),s(" margin: "),n("span",{class:"token number"},"0"),s(" auto"),n("span",{class:"token punctuation"},";"),s(`
font-family: Tahoma, Verdana, Arial, sans-serif`),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token operator"},"<"),s("/style"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token operator"},"<"),s("/head"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token operator"},"<"),s("body"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token operator"},"<"),s("h"),n("span",{class:"token operator"},[n("span",{class:"token file-descriptor important"},"1"),s(">")]),s("Welcome to nginx"),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"<"),s("/h"),n("span",{class:"token operator"},[n("span",{class:"token file-descriptor important"},"1"),s(">")]),s(`
`),n("span",{class:"token operator"},"<"),s("p"),n("span",{class:"token operator"},">"),s(`If you see this page, the nginx web server is successfully installed and
working. Further configuration is required.`),n("span",{class:"token operator"},"<"),s("/p"),n("span",{class:"token operator"},">"),s(`

`),n("span",{class:"token operator"},"<"),s("p"),n("span",{class:"token operator"},">"),s(`For online documentation and support please refer to
`),n("span",{class:"token operator"},"<"),s("a "),n("span",{class:"token assign-left variable"},"href"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"http://nginx.org/"'),n("span",{class:"token operator"},">"),s("nginx.org"),n("span",{class:"token operator"},"<"),s("/a"),n("span",{class:"token operator"},">"),s("."),n("span",{class:"token operator"},"<"),s("br/"),n("span",{class:"token operator"},">"),s(`
Commercial support is available at
`),n("span",{class:"token operator"},"<"),s("a "),n("span",{class:"token assign-left variable"},"href"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"http://nginx.com/"'),n("span",{class:"token operator"},">"),s("nginx.com"),n("span",{class:"token operator"},"<"),s("/a"),n("span",{class:"token operator"},">"),s("."),n("span",{class:"token operator"},"<"),s("/p"),n("span",{class:"token operator"},">"),s(`

`),n("span",{class:"token operator"},"<"),s("p"),n("span",{class:"token operator"},">"),n("span",{class:"token operator"},"<"),s("em"),n("span",{class:"token operator"},">"),s("Thank you "),n("span",{class:"token keyword"},"for"),s(" using nginx."),n("span",{class:"token operator"},"<"),s("/em"),n("span",{class:"token operator"},">"),n("span",{class:"token operator"},"<"),s("/p"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token operator"},"<"),s("/body"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token operator"},"<"),s("/html"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token punctuation"},"["),s("root@localhost ~"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token comment"},"#"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])]),n("li",null,[n("p",null,[s("浏览器访问"),n("br"),n("img",{src:"https://cdn.jsdelivr.net/gh/1coins/assets/docker-image-and-container/docker-nginx-view.png",alt:"",loading:"lazy"})])])])])],-1),D=a(`<h2 id="tomcat" tabindex="-1"><a class="header-anchor" href="#tomcat" aria-hidden="true">#</a> Tomcat</h2><ol><li><p>查找</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker search tomcat</span>
NAME                          DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
tomcat                        Apache Tomcat is an <span class="token function">open</span> <span class="token builtin class-name">source</span> implementati…   <span class="token number">3161</span>      <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
tomee                         Apache TomEE is an all-Apache Java EE certif…   <span class="token number">93</span>        <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
dordoka/tomcat                Ubuntu <span class="token number">14.04</span>, Oracle JDK <span class="token number">8</span> and Tomcat <span class="token number">8</span> base…   <span class="token number">58</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
kubeguide/tomcat-app          Tomcat image <span class="token keyword">for</span> Chapter <span class="token number">1</span>                      <span class="token number">31</span>
consol/tomcat-7.0             Tomcat <span class="token number">7.0</span>.57, <span class="token number">8080</span>, <span class="token string">&quot;admin/admin&quot;</span>              <span class="token number">18</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
cloudesire/tomcat             Tomcat server, <span class="token number">6</span>/7/8                            <span class="token number">15</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
aallam/tomcat-mysql           Debian, Oracle JDK, Tomcat <span class="token operator">&amp;</span> MySQL              <span class="token number">13</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
arm32v7/tomcat                Apache Tomcat is an <span class="token function">open</span> <span class="token builtin class-name">source</span> implementati…   <span class="token number">11</span>
andreptb/tomcat               Debian Jessie based image with Apache Tomcat…   <span class="token number">10</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
rightctrl/tomcat              CentOS , Oracle Java, tomcat application ssl…   <span class="token number">7</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
arm64v8/tomcat                Apache Tomcat is an <span class="token function">open</span> <span class="token builtin class-name">source</span> implementati…   <span class="token number">6</span>
unidata/tomcat-docker         Security-hardened Tomcat Docker container.      <span class="token number">5</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
amd64/tomcat                  Apache Tomcat is an <span class="token function">open</span> <span class="token builtin class-name">source</span> implementati…   <span class="token number">3</span>
cfje/tomcat-resource          Tomcat Concourse Resource                       <span class="token number">2</span>
fabric8/tomcat-8              Fabric8 Tomcat <span class="token number">8</span> Image                          <span class="token number">2</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
oobsri/tomcat8                Testing CI Jobs with different names.           <span class="token number">2</span>
jelastic/tomcat               An image of the Tomcat Java application serv…   <span class="token number">2</span>
chenyufeng/tomcat-centos      tomcat基于centos6的镜像                              <span class="token number">1</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
picoded/tomcat7               tomcat7 with jre8 and MANAGER_USER / MANAGER…   <span class="token number">1</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
ppc64le/tomcat                Apache Tomcat is an <span class="token function">open</span> <span class="token builtin class-name">source</span> implementati…   <span class="token number">1</span>
99taxis/tomcat7               Tomcat7                                         <span class="token number">1</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
camptocamp/tomcat-logback     Docker image <span class="token keyword">for</span> tomcat with logback integra…   <span class="token number">1</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
secoresearch/tomcat-varnish   Tomcat and Varnish <span class="token number">5.0</span>                          <span class="token number">0</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
s390x/tomcat                  Apache Tomcat is an <span class="token function">open</span> <span class="token builtin class-name">source</span> implementati…   <span class="token number">0</span>
softwareplant/tomcat          Tomcat images <span class="token keyword">for</span> jira-cloud testing            <span class="token number">0</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>下载</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker pull tomcat</span>
Using default tag: latest
latest: Pulling from library/tomcat
bb7d5a84853b: Pull complete
f02b617c6a8c: Pull complete
d32e17419b7e: Pull complete
c9d2d81226a4: Pull complete
fab4960f9cd2: Pull complete
da1c1e7baf6d: Pull complete
1d2ade66c57e: Pull complete
ea2ad3f7cb7c: Pull complete
d75cb8d0a5ae: Pull complete
76c37a4fffe6: Pull complete
Digest: sha256:509cf786b26a8bd43e58a90beba60bdfd6927d2ce9c7902cfa675d3ea9f4c631
Status: Downloaded newer image <span class="token keyword">for</span> tomcat:latest
docker.io/library/tomcat:latest
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker run -d --name tomcat -p 9000:8080 tomcat</span>
3b86e8c4255c9d42448e50cae8b6fd528ab0b801a20e66d2bb79dc702be17fb5
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>进入容器</p><ul><li>容器中的命令少了</li><li>阿里云镜像默认下载的是最小的镜像，保证最小的运行环境</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker exec -it tomcat /bin/bash</span>
root@3b86e8c4255c:/usr/local/tomcat<span class="token comment"># ls</span>
BUILDING.txt  CONTRIBUTING.md  LICENSE  NOTICE  README.md  RELEASE-NOTES  RUNNING.txt  bin  conf  lib  logs  native-jni-lib  temp  webapps  webapps.dist  work
root@3b86e8c4255c:/usr/local/tomcat<span class="token comment"># cd webapps.dist</span>
root@3b86e8c4255c:/usr/local/tomcat/webapps.dist<span class="token comment"># ls</span>
ROOT  docs  examples  host-manager  manager
root@3b86e8c4255c:/usr/local/tomcat/webapps.dist<span class="token comment"># cd ../webapps</span>
root@3b86e8c4255c:/usr/local/tomcat/webapps<span class="token comment"># ls</span>
root@3b86e8c4255c:/usr/local/tomcat/webapps<span class="token comment"># cp -r /usr/local/tomcat/webapps.dist/* /usr/local/tomcat/webapps/</span>
root@3b86e8c4255c:/usr/local/tomcat/webapps<span class="token comment"># ls</span>
ROOT  docs  examples  host-manager  manager
root@3b86e8c4255c:/usr/local/tomcat/webapps<span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>访问测试</p><ul><li><p>本地主机访问测试，<code>curl</code>命令发起请求，如果使用阿里云服务器需要设置安全组</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># curl localhost:9000</span>



<span class="token operator">&lt;</span><span class="token operator">!</span>DOCTYPE html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html <span class="token assign-left variable">lang</span><span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>meta <span class="token assign-left variable">charset</span><span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span> /<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Apache Tomcat/10.0.1<span class="token operator"><span class="token file-descriptor important">2</span>&lt;</span>/title<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>link <span class="token assign-left variable">href</span><span class="token operator">=</span><span class="token string">&quot;favicon.ico&quot;</span> <span class="token assign-left variable">rel</span><span class="token operator">=</span><span class="token string">&quot;icon&quot;</span> <span class="token assign-left variable">type</span><span class="token operator">=</span><span class="token string">&quot;image/x-icon&quot;</span> /<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>link <span class="token assign-left variable">href</span><span class="token operator">=</span><span class="token string">&quot;tomcat.css&quot;</span> <span class="token assign-left variable">rel</span><span class="token operator">=</span><span class="token string">&quot;stylesheet&quot;</span> <span class="token assign-left variable">type</span><span class="token operator">=</span><span class="token string">&quot;text/css&quot;</span> /<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>/head<span class="token operator">&gt;</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>浏览器访问<br><img src="https://cdn.jsdelivr.net/gh/1coins/assets/docker-image-and-container/docker-tomcat-view.png" alt="" loading="lazy"></p></li></ul></li></ol><h2 id="elasticsearch" tabindex="-1"><a class="header-anchor" href="#elasticsearch" aria-hidden="true">#</a> ElasticSearch</h2><ol><li><p>查找</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker search elasticsearch</span>
NAME                                         DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
elasticsearch                                Elasticsearch is a powerful <span class="token function">open</span> <span class="token builtin class-name">source</span> sear…   <span class="token number">5289</span>      <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
nshou/elasticsearch-kibana                   Elasticsearch-7.15.1 Kibana-7.15.1              <span class="token number">132</span>                  <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
mobz/elasticsearch-head                      elasticsearch-head front-end and standalone …   <span class="token number">81</span>
elastichq/elasticsearch-hq                   Official Docker image <span class="token keyword">for</span> ElasticHQ: Elastic…   <span class="token number">76</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
itzg/elasticsearch                           Provides an easily configurable Elasticsearc…   <span class="token number">71</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
elastic/elasticsearch                        The Elasticsearch Docker image maintained by…   <span class="token number">56</span>
taskrabbit/elasticsearch-dump                Import and <span class="token builtin class-name">export</span> tools <span class="token keyword">for</span> elasticsearch       <span class="token number">27</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
lmenezes/elasticsearch-kopf                  elasticsearch kopf                              <span class="token number">18</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
barnybug/elasticsearch                       Latest Elasticsearch <span class="token number">1.7</span>.2 and previous rele…   <span class="token number">17</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
justwatch/elasticsearch_exporter             Elasticsearch stats exporter <span class="token keyword">for</span> Prometheus     <span class="token number">17</span>
blacktop/elasticsearch                       Alpine Linux based Elasticsearch Docker Image   <span class="token number">16</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
esystemstech/elasticsearch                   Debian based Elasticsearch packing <span class="token keyword">for</span> Lifer…   <span class="token number">15</span>
monsantoco/elasticsearch                     ElasticSearch Docker image                      <span class="token number">11</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
mesoscloud/elasticsearch                     <span class="token punctuation">[</span>UNMAINTAINED<span class="token punctuation">]</span> Elasticsearch                    <span class="token number">9</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
dtagdevsec/elasticsearch                     elasticsearch                                   <span class="token number">4</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
centerforopenscience/elasticsearch           Elasticsearch                                   <span class="token number">4</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
barchart/elasticsearch-aws                   Elasticsearch AWS <span class="token function">node</span>                          <span class="token number">3</span>
jetstack/elasticsearch-pet                   An elasticsearch image <span class="token keyword">for</span> kubernetes PetSets   <span class="token number">1</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
axway/elasticsearch-docker-beat              <span class="token string">&quot;Beat&quot;</span> extension to <span class="token builtin class-name">read</span> logs of containers …   <span class="token number">1</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
thingswise/elasticsearch                     Elasticsearch + etcd2 peer discovery            <span class="token number">1</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
kuzzleio/elasticsearch                       Elasticsearch container based on Alpine Linu…   <span class="token number">1</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
phenompeople/elasticsearch                   Elasticsearch is a powerful <span class="token function">open</span> <span class="token builtin class-name">source</span> sear…   <span class="token number">1</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
dsteinkopf/elasticsearch-ingest-attachment   elasticsearch + ingest-attachment to be used…   <span class="token number">1</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
wreulicke/elasticsearch                      elasticsearch                                   <span class="token number">0</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
travix/elasticsearch-kubernetes              To run ElasticSearch <span class="token keyword">in</span> kubernetes and expor…   <span class="token number">0</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>下载</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker pull elasticsearch</span>
Using default tag: latest
latest: Pulling from library/elasticsearch
05d1a5232b46: Pull complete
5cee356eda6b: Pull complete
89d3385f0fd3: Pull complete
65dd87f6620b: Pull complete
78a183a01190: Pull complete
1a4499c85f97: Pull complete
2c9d39b4bfc1: Pull complete
1b1cec2222c9: Pull complete
59ff4ce9df68: Pull complete
1976bc3ee432: Pull complete
5af49e8af381: Pull complete
42c8b75ff7af: Pull complete
7e6902915254: Pull complete
99853874fa54: Pull complete
596fbad6fcff: Pull complete
Digest: sha256:a8081d995ef3443dc6d077093172a5931e02cdb8ffddbf05c67e01d348a9770e
Status: Downloaded newer image <span class="token keyword">for</span> elasticsearch:latest
docker.io/library/elasticsearch:latest
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行</p><ol><li><p>添加 <code>-e ES_JAVA_OPTS=&quot;-Xms128m -Xmx512m&quot;</code> 配置<code>ElasticSearch</code>的虚拟机占用的内存大小</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker run -d --name elasticsearch -p 9200:9200 -p 9300:9300 -e &quot;discovery.type=single-node&quot; -e ES_JAVA_OPTS=&quot;-Xms128m -Xmx512m&quot; elasticsearch</span>
f0df576e243ccb3d0fffdd85924f3241a9490876783440c5fe237d283c76b82f
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>docker stats</code>：查看资源占用情况</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE           COMMAND                  CREATED              STATUS              PORTS                                                                                  NAMES
f0df576e243c   elasticsearch   <span class="token string">&quot;/docker-entrypoint.…&quot;</span>   About a minute ago   Up About a minute   <span class="token number">0.0</span>.0.0:9200-<span class="token operator">&gt;</span><span class="token number">9200</span>/tcp, :::9200-<span class="token operator">&gt;</span><span class="token number">9200</span>/tcp, <span class="token number">0.0</span>.0.0:9300-<span class="token operator">&gt;</span><span class="token number">9300</span>/tcp, :::9300-<span class="token operator">&gt;</span><span class="token number">9300</span>/tcp   elasticsearch
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker stats</span>
CONTAINER ID   NAME            CPU %     MEM USAGE / LIMIT     MEM %     NET I/O     BLOCK I/O     PIDS
f0df576e243c   elasticsearch   <span class="token number">0.05</span>%     <span class="token number">280</span>.3MiB / <span class="token number">1</span>.748GiB   <span class="token number">15.66</span>%    976B / 0B   0B / <span class="token number">48</span>.1kB   <span class="token number">31</span>
CONTAINER ID   NAME            CPU %     MEM USAGE / LIMIT     MEM %     NET I/O     BLOCK I/O     PIDS
f0df576e243c   elasticsearch   <span class="token number">0.05</span>%     <span class="token number">280</span>.3MiB / <span class="token number">1</span>.748GiB   <span class="token number">15.66</span>%    976B / 0B   0B / <span class="token number">48</span>.1kB   <span class="token number">31</span>
^C
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>进入容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker exec -it elasticsearch /bin/bash</span>
root@f0df576e243c:/usr/share/elasticsearch<span class="token comment"># ls</span>
NOTICE.txt  README.textile  bin  config  data  lib  logs  modules  plugins
root@f0df576e243c:/usr/share/elasticsearch<span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>访问</p><ul><li><p>本地主机访问测试，<code>curl</code>命令发起请求，如果使用阿里云服务器需要设置安全组</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>root@f0df576e243c:/usr/share/elasticsearch<span class="token comment"># curl localhost:9200</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;name&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;6F1a2UH&quot;</span>,
  <span class="token string">&quot;cluster_name&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;elasticsearch&quot;</span>,
  <span class="token string">&quot;cluster_uuid&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;D_t1vzAURlmAP6TwqcjKPA&quot;</span>,
  <span class="token string">&quot;version&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;number&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;5.6.12&quot;</span>,
    <span class="token string">&quot;build_hash&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;cfe3d9f&quot;</span>,
    <span class="token string">&quot;build_date&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;2018-09-10T20:12:43.732Z&quot;</span>,
    <span class="token string">&quot;build_snapshot&quot;</span> <span class="token builtin class-name">:</span> false,
    <span class="token string">&quot;lucene_version&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;6.6.1&quot;</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;tagline&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;You Know, for Search&quot;</span>
<span class="token punctuation">}</span>
root@f0df576e243c:/usr/share/elasticsearch<span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>浏览器访问<br><img src="https://cdn.jsdelivr.net/gh/1coins/assets/docker-image-and-container/docker-elasticsearch-view.png" alt="" loading="lazy"></p></li></ul></li></ol><p>‍</p>`,5);function A(O,w){const e=l("ExternalLinkIcon");return o(),c("div",null,[u,d,n("p",null,[n("a",r,[s("官网"),t(e)]),s("："),m,s("。")]),b,k,v,n("p",null,[s("命令"),n("a",g,[s("帮助文档"),t(e)]),s("："),h,s("。")]),q,f,x,y,D])}const E=i(p,[["render",A],["__file","docker-image-and-container.html.vue"]]);export{E as default};
