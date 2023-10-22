import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-3e6d2d9d.js";const i={},l=e(`<h1 id="事务" tabindex="-1"><a class="header-anchor" href="#事务" aria-hidden="true">#</a> 事务</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p><code>Redis</code>执行指令过程中，多条连续执行的指令被干扰，打断，插队。</p><p><code>Redis</code>事务就是一个命令执行的队列，将一系列预定义命令包装成一个整体（一个队列）。当执行时，一次性按照添加顺序依次执行，中间不会被打断或者干扰。</p><p>一个队列中，一次性、顺序性、排他性的执行一系列命令。</p><h2 id="事务基本操作" tabindex="-1"><a class="header-anchor" href="#事务基本操作" aria-hidden="true">#</a> 事务基本操作</h2><ul><li><p>开启事务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>multi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>作用</p><ul><li>设定事务的开启位置，此指令执行后，后续的所有指令均加入到事务中</li></ul></li></ul></li><li><p>执行事务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">exec</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>作用</p><ul><li>设定事务的结束位置，同时执行事务。与<code>multi</code>成对出现，成对使用</li></ul></li></ul></li><li><p>取消事务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>discard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>作用</p><ul><li>终止当前事务的定义，发生在<code>multi</code>之后，<code>exec</code>之前</li></ul></li></ul></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> multi
Ok
<span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> age <span class="token number">30</span>
QUEUED
<span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> get age
QUEUED
<span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> age <span class="token number">31</span>
QUEUED
<span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> get age
QUEUED
<span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token builtin class-name">exec</span>
<span class="token number">1</span><span class="token punctuation">)</span> OK
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;30&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> OK
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;31&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span>  
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> multi
Ok
<span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> age <span class="token number">32</span>
QUEUED
<span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> get age
QUEUED
<span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> age <span class="token number">33</span>
QUEUED
<span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> get age
QUEUED
<span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> discard
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">exec</span>
<span class="token punctuation">(</span>error<span class="token punctuation">)</span> ERR EXEC without MULTI
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：加入事务的命令暂时进入到任务队列中，并没有立即执行，只有执行<code>exec</code>命令才开始执行。</p><h3 id="事务的工作流程" tabindex="-1"><a class="header-anchor" href="#事务的工作流程" aria-hidden="true">#</a> 事务的工作流程</h3><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/redis-transaction-and-delete-policy/transaction-operate-process.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="事务注意事项" tabindex="-1"><a class="header-anchor" href="#事务注意事项" aria-hidden="true">#</a> 事务注意事项</h3><ul><li><p>语法错误（命令格式输入错误）</p><ul><li><p>指命令书写格式有误</p></li><li><p>处理结果</p><ul><li>如果定义的事务中所包含的命令存在语法错误，整体事务中所有命令均不会执行。包括那些语法正确的命令</li></ul></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> multi
  <span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> name itheima
  QUEUED
  <span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> get name
  QUEUED
  <span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> tes name itcast
  <span class="token punctuation">(</span>error<span class="token punctuation">)</span>
  <span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token builtin class-name">exec</span>
  <span class="token punctuation">(</span>error<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行错误（命令执行出现错误）</p><ul><li><p>指命令格式正确，但是无法正确的执行，例如对<code>list</code>进行<code>incr</code>操作</p></li><li><p>处理结果</p><ul><li>能够正确运行的命令会执行，运行错误的命令不会被执行</li></ul></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> multi
  <span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> name itheima
  QUEUED
  <span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> get name
  QUEUED
  <span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> name itcast
  QUEUED
  <span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> get name
  QUEUED
  <span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> lpush name a b c
  QUEUED
  <span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> get name
  QUEUED
  <span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> EXEC
  <span class="token number">1</span><span class="token punctuation">)</span> ok
  <span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;ITHEIMA&quot;</span>
  <span class="token number">3</span><span class="token punctuation">)</span> ok
  <span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;itheima&quot;</span>
  <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>error<span class="token punctuation">}</span> WRONGTYPE
  <span class="token number">6</span><span class="token punctuation">)</span> <span class="token string">&quot;itcast&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>注意：已经执行完毕的命令对应的数据不会自动回滚，需要程序员自己在代码中实现回滚。</p><h3 id="手动事务回滚" tabindex="-1"><a class="header-anchor" href="#手动事务回滚" aria-hidden="true">#</a> 手动事务回滚</h3><ul><li><p>记录操作过程中被影响的数据之前的状态</p><ul><li>单数据：<code>string</code></li><li>多数据：<code>hash</code>、<code>list</code>、<code>set</code>、<code>zset</code></li></ul></li><li><p>设置指令恢复所有的被修改的项</p><ul><li>单数据：直接<code>set</code>（注意周边属性，例如时效）</li><li>多数据：修改对应值或整体克隆复制</li></ul></li></ul><h1 id="锁" tabindex="-1"><a class="header-anchor" href="#锁" aria-hidden="true">#</a> 锁</h1><h2 id="监视锁" tabindex="-1"><a class="header-anchor" href="#监视锁" aria-hidden="true">#</a> 监视锁</h2><h3 id="业务场景" tabindex="-1"><a class="header-anchor" href="#业务场景" aria-hidden="true">#</a> 业务场景</h3><p>天猫双 11 热卖过程中，对已经售罄的货物追加补货，4 个业务员都有权限进行补货；补货的操作可能是一系列的操作，牵扯到多个连续操作，如何保障不会重复操作？</p><h3 id="业务分析" tabindex="-1"><a class="header-anchor" href="#业务分析" aria-hidden="true">#</a> 业务分析</h3><ul><li>多个客户端有可能同时操作同一组数据，并且该数据一旦被操作修改后，将不适用于继续操作</li><li>在操作之前锁定要操作的数据，一旦发生变化，终止当前操作</li></ul><h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h3><ul><li><p>对<code>key</code>添加监视锁，在执行<code>exec</code>前如果<code>key</code>发生了变化，终止事务执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">watch</span> key1 <span class="token punctuation">[</span>key2……<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>取消对所有<code>key</code>的监视</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>unwatch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><ol><li><p>客户端 1</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> name <span class="token number">123</span>
 <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token function">watch</span> name
 OK
 <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> multi
 <span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> a a
 QUEUED
 <span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> get a
 QUEUED
 <span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> EXEC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>客户端 2</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token punctuation">[</span>echo@centos ~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> redis-cli
 <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> name <span class="token number">321</span>
 OK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>客户端 1</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> name <span class="token number">123</span>
 <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token function">watch</span> name
 <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> multi
 <span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> a a
 QUEUED
 <span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> get a
 QUEUED
 <span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token builtin class-name">exec</span>
 <span class="token punctuation">(</span>nil<span class="token punctuation">)</span>
 <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="tips-21" tabindex="-1"><a class="header-anchor" href="#tips-21" aria-hidden="true">#</a> <strong>Tips 21</strong></h3><p><code>Redis</code>应用基于状态控制的批量任务执行。</p><h2 id="分布式锁" tabindex="-1"><a class="header-anchor" href="#分布式锁" aria-hidden="true">#</a> 分布式锁</h2><h3 id="业务场景-1" tabindex="-1"><a class="header-anchor" href="#业务场景-1" aria-hidden="true">#</a> 业务场景</h3><p>天猫双 11 热卖过程中，对已经售罄的货物追加补货，且补货完成，客户购买热情高涨，3 秒内将所有商品购买完毕；本次补货已经将库存全部清空，如何避免最后一件商品不被多人同时购买？【超卖问题】</p><h3 id="业务分析-1" tabindex="-1"><a class="header-anchor" href="#业务分析-1" aria-hidden="true">#</a> 业务分析</h3><ul><li>使用<code>watch</code>监控一个<code>key</code>有没有改变已经不能解决问题，此处要监控的是具体数据</li><li>虽然<code>Redis</code>是单线程的，但是多个客户端对同一数据同时进行操作时，如何避免不被同时修改？</li></ul><h3 id="解决方案-1" tabindex="-1"><a class="header-anchor" href="#解决方案-1" aria-hidden="true">#</a> 解决方案</h3><ul><li><p>使用<code>setnx</code>设置一个公共锁</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>setnx lock-key value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><p>利用<code>setnx</code>命令的返回值特征，有值则返回设置失败，无值则返回设置成功</p><ul><li>对于返回设置成功的，拥有控制权，进行下一步的具体业务操作</li><li>对于返回设置失败的，不具有控制权，排队或等待</li></ul><p>操作完毕通过<code>del</code>操作释放锁。</p><ol><li><p>客户端 1</p><div class="language-baah line-numbers-mode" data-ext="baah"><pre class="language-baah"><code> 127.0.0.1:6379&gt; set num 10
 127.0.0.1:6379&gt; setnx lock-num 1
 (integer) 1
 127.0.0.1:6379&gt; incrby num -1
 (integer) 9
 127.0.0.1:6379&gt; del lock-num
 (integer) 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>客户端 2</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> setnx lock-num <span class="token number">1</span>
 <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>客户端 1</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> num <span class="token number">10</span>
 <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> setnx lock-num <span class="token number">1</span>
 <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
 <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> incrby num <span class="token parameter variable">-1</span>
 <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">9</span>
 <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> del lock-num
 <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
 <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> 
 <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> setnx lock-num <span class="token number">1</span>
 <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>客户端 2</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> setnx lock-num <span class="token number">1</span>
 <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
 <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> incrby num <span class="token parameter variable">-1</span>
 <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">8</span>
 <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> del lock-num
 <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>客户端 1</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> num <span class="token number">10</span>
 <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> setnx lock-num <span class="token number">1</span>
 <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
 <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> incrby num <span class="token parameter variable">-1</span>
 <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">9</span>
 <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> del lock-num
 <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
 <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> 
 <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> setnx lock-num <span class="token number">1</span>
 <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
 <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> setnx lock-num <span class="token number">1</span>
 <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>注意：上述解决方案是一种设计概念，依赖规范保障，具有风险性</p><h3 id="tips-22" tabindex="-1"><a class="header-anchor" href="#tips-22" aria-hidden="true">#</a> Tips 22</h3><p><code>Redis</code>应用基于分布式锁对应的场景控制。</p><h2 id="分布式锁改良" tabindex="-1"><a class="header-anchor" href="#分布式锁改良" aria-hidden="true">#</a> 分布式锁改良</h2><h3 id="业务场景-2" tabindex="-1"><a class="header-anchor" href="#业务场景-2" aria-hidden="true">#</a> 业务场景</h3><p>依赖分布式锁的机制，某个用户操作时对应客户端宕机，且此时已经获取到锁，如何解决？</p><h3 id="业务分析-2" tabindex="-1"><a class="header-anchor" href="#业务分析-2" aria-hidden="true">#</a> 业务分析</h3><ul><li>由于锁操作由用户控制加锁解锁，必定会存在加锁后未解锁的风险</li><li>需要解锁操作不能仅依赖用户控制，系统级别要给出对应的保底处理方案</li></ul><h3 id="解决方案-2" tabindex="-1"><a class="header-anchor" href="#解决方案-2" aria-hidden="true">#</a> 解决方案</h3><ul><li><p>使用<code>expire</code>为锁<code>key</code>添加时间限定，到时不释放，放弃锁</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>expire lock-key second
pexpire lock-key milliseconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><ol><li><p>客户端 1</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> name <span class="token number">123</span>
 <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> setnx lock-num <span class="token number">1</span>
 <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
 <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> expire lock-name <span class="token number">10</span>
 <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>客户端 2</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> setnx lock-name <span class="token number">1</span>
 <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
 <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> setnx lock-name <span class="token number">1</span>
 <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
 <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> setnx lock-name <span class="token number">1</span>
 <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
 <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> setnx lock-name <span class="token number">1</span>
 <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
 <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> setnx lock-name <span class="token number">1</span>
 <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>由于操作通常都是微秒或毫秒级，因此该锁定时间不宜设置过大，具体时间需要业务测试后确认：</p><ul><li>例如：持有锁的操作最长执行时间 127 ms，最短执行时间 7 ms。</li><li>测试百万次最长执行时间对应命令的最大耗时，测试百万次网络延迟平均耗时</li><li>锁时间设定推荐：最大耗时 * 120% + 平均网络延迟 * 110 %</li><li>如果业务最大耗时 &lt;&lt; 网络平均延迟，通常为 2 个数量级，取其中单个耗时较长即可</li></ul><h1 id="删除策略" tabindex="-1"><a class="header-anchor" href="#删除策略" aria-hidden="true">#</a> 删除策略</h1><h2 id="过期数据" tabindex="-1"><a class="header-anchor" href="#过期数据" aria-hidden="true">#</a> 过期数据</h2><h3 id="redis-中的数据特征" tabindex="-1"><a class="header-anchor" href="#redis-中的数据特征" aria-hidden="true">#</a> Redis 中的数据特征</h3><p><code>Redis</code>是一种内存级数据库，所有数据均存放在内存中，内存中的数据可以通过<code>TTL</code>指令获取其状态：</p><ul><li><code>XX</code>：具有时效性的数据</li><li>-1：永久有效的数据</li><li>-2：已经过期的数据或被删除的数据或未定义的数据</li></ul><p>过期数据就是那些曾经设置有有效期的数据到达了有效期最终留下的数据。</p><h3 id="数据删除策略" tabindex="-1"><a class="header-anchor" href="#数据删除策略" aria-hidden="true">#</a> 数据删除策略</h3><ul><li>定时删除</li><li>惰性删除</li><li>定期删除</li></ul><h2 id="数据删除策略-1" tabindex="-1"><a class="header-anchor" href="#数据删除策略-1" aria-hidden="true">#</a> 数据删除策略</h2><h3 id="时效性数据的存储结构" tabindex="-1"><a class="header-anchor" href="#时效性数据的存储结构" aria-hidden="true">#</a> 时效性数据的存储结构</h3><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/redis-transaction-and-delete-policy/time-sensitive-data-storage-structure.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="数据删除策略的目标" tabindex="-1"><a class="header-anchor" href="#数据删除策略的目标" aria-hidden="true">#</a> 数据删除策略的目标</h3><p>在内存占用与<code>CPU</code>占用之间寻找一种平衡，顾此失彼都会造成整体<code>Redis</code>性能的下降，甚至引发服务器宕机或内存泄露。</p><h3 id="定时删除" tabindex="-1"><a class="header-anchor" href="#定时删除" aria-hidden="true">#</a> 定时删除</h3><p>创建一个定时器，当<code>key</code>设置有过期时间，且过期时间到达时，由定时器任务立即执行对键的删除操作。</p><ul><li>优点：节约内存，到时就删除，快速释放掉不必要的内存占用</li><li>缺点：<code>CPU</code>压力很大，无论<code>CPU</code>此时负载量多高，均占用<code>CPU</code>，会影响<code>Redis</code>服务器响应时间和指令吞吐量</li></ul><p>总结：用处理器性能换取存储空间（拿时间换空间）。</p><h3 id="惰性删除" tabindex="-1"><a class="header-anchor" href="#惰性删除" aria-hidden="true">#</a> 惰性删除</h3><p>数据到达过期时间，不做处理。等下次访问该数据时：如果未过期，返回数据；如果发现已过期，删除，返回不存在（<code>get</code>操作与<code>expireIfNeeded()</code>函数绑定，在获取数据前先使用<code>expireIfNeeded()</code>函数查询数据是否过期）。</p><ul><li>优点：节约<code>CPU</code>性能，发现必须删除的时候才删除</li><li>缺点：内存压力很大，出现长期占用内存的数据</li></ul><p>总结：用存储空间换取处理器性能（拿时间换空间）。</p><h3 id="定期删除" tabindex="-1"><a class="header-anchor" href="#定期删除" aria-hidden="true">#</a> 定期删除</h3><figure><img src="https://cdn.jsdelivr.net/gh/1coins/assets/redis-transaction-and-delete-policy/delete-regularly.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p><code>Redis</code>启动服务器初始化时，读取配置<code>server.hz</code>的值，默认为 10</p></li><li><p>每秒钟执行<code>server.hz</code>次<code>serverCron()</code></p><div class="language-chart line-numbers-mode" data-ext="chart"><pre class="language-chart"><code>serverCron()
	|---&gt; databasesCron() 
		|---&gt; activeExpireCycle()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>activeExpireCycle()</strong> 对每个<code>expires[\\*]</code>逐一进行检测，每次执行<code>250ms/server.hz</code></p></li><li><p>对某个<code>expires[\\*]</code>检测时，随机挑选<code>W</code>个<code>key</code>检测</p><ul><li>如果<code>key</code>超时，删除<code>key</code></li><li>如果一轮中删除的<code>key</code>的数量 &gt; <code>W \\* 25%</code>，循环该过程</li><li>如果一轮中删除的<code>key</code>的数量 ≤ <code>W \\* 25%</code>，检查下一个<code>expires[\\*]</code>，0-15 循环（<code>expire</code>池有 16 个）</li><li><code>W</code>取值 = <code>ACTIVE_EXPIRE_CYCLE_LOOKUPS_PER_LOOP</code>属性值</li></ul></li><li><p>参数<code>current_db</code>用于记录**<code>activeExpireCycle()</code>** 进入哪个<code>expires[\\*]</code>执行</p></li><li><p>如果**<code>activeExpireCycle()</code>**执行时间到期，下次从<code>current_db</code>继续向下执行</p></li></ul><p>周期性轮询<code>Redis</code>库中的时效性数据，采用随机抽取的策略，利用过期数据占比的方式控制删除频度。</p><ul><li>特点1：<code>CPU</code>性能占用设置有峰值，检测频度可自定义设置</li><li>特点2：内存压力不是很大，长期占用内存的冷数据会被持续清理</li></ul><p>总结：周期性抽查存储空间（随机抽查，重点抽查）。</p><h3 id="删除策略比对" tabindex="-1"><a class="header-anchor" href="#删除策略比对" aria-hidden="true">#</a> 删除策略比对</h3><ul><li><p>定时删除</p><ul><li>节约内存，无占用</li><li>不分时段占用<code>CPU</code>资源，频度高</li><li>拿时间换空间</li></ul></li><li><p>惰性删除</p><ul><li>内存占用严重</li><li>延时执行，<code>CPU</code>利用率高</li><li>拿空间换时间</li></ul></li><li><p>定期删除</p><ul><li>内存定期随机清理</li><li>每秒花费固定的<code>CPU</code>资源维护内存</li><li>随机抽查，重点抽查</li></ul></li></ul><h1 id="逐出算法" tabindex="-1"><a class="header-anchor" href="#逐出算法" aria-hidden="true">#</a> 逐出算法</h1><h2 id="新数据进入检测" tabindex="-1"><a class="header-anchor" href="#新数据进入检测" aria-hidden="true">#</a> 新数据进入检测</h2><p>当新数据进入<code>Redis</code>时，如果内存不足怎么办？</p><p><code>Redis</code>使用内存存储数据，在执行每一个命令前，会调用**<code>freeMemoryIfNeeded()</code><strong>检测内存是否充足。如果内存不满足新加入数据的最低存储要求，<code>Redis</code>要</strong>临时删除一些数据**（数据淘汰/数据逐出）为当前指令清理存储空间。清理数据的策略称为<strong>逐出算法</strong>。</p><p>注意：逐出数据的过程不是 100 % 能够清理出足够的可使用的内存空间，如果不成功则反复执行。当对所有数据尝试完毕后，如果不能达到内存清理的要求，将出现<strong>错误信息</strong>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>error<span class="token punctuation">)</span>OOM <span class="token builtin class-name">command</span> not allowed when used memory <span class="token operator">&gt;</span> <span class="token string">&#39;maxmemory&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="影响数据逐出的相关配置" tabindex="-1"><a class="header-anchor" href="#影响数据逐出的相关配置" aria-hidden="true">#</a> 影响数据逐出的相关配置</h2><ul><li><p>最大可使用内存</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>maxmemory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>占用物理内存的比例，默认值为 0，表示不限制；生产环境中根据需求设定，通常设置在 50% 以上。</p></li><li><p>每次选取待删除数据的个数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>maxmemory-samples
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选取数据时并不会全库扫描，导致严重的性能消耗，降低读写性能，因此采用随机获取数据的方式作为待检测删除数据</p></li><li><p>删除策略</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>maxmemory-policy volatile-lru
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>达到最大内存后的，对被挑选出来的数据进行删除的策略</p><ul><li><p>检测易失数据（可能会过期的数据集<code>server.db[i].expires</code>）</p><ol><li><code>volatile-lru(Least Recently Used)</code>：挑选最近最少使用（最近没使用）的数据淘汰，<strong>建议使用</strong></li><li><code>volatile-lfu(Least Frequently Used)</code>：挑选最近使用次数最少的数据淘汰</li><li><code>volatile-ttl</code>：挑选将要过期的数据淘汰</li><li><code>volatile-random</code>：任意选择数据淘汰</li></ol></li><li><p>检测全库数据（所有数据集<code>server.db[i].dict</code>）<br> 5. <code>allkeys-lru</code>：挑选最近最少使用的数据淘汰<br> 6. <code>allkeys-lfu</code>：挑选最近使用次数最少的数据淘汰<br> 7. <code>allkeys-random</code>：任意选择数据淘汰</p></li><li><p>放弃数据驱逐<br>8. <code>no-enviction</code>（驱逐）：禁止驱逐数据（<code>Redis4.0</code>中默认策略），会引发错误<code>OOM(Out Of Memory)</code><br><img src="https://cdn.jsdelivr.net/gh/1coins/assets/redis-transaction-and-delete-policy/lru-and-lfu.png" alt="" loading="lazy"></p></li></ul></li></ul><h2 id="数据逐出策略配置依据" tabindex="-1"><a class="header-anchor" href="#数据逐出策略配置依据" aria-hidden="true">#</a> 数据逐出策略配置依据</h2><p>使用<code>INFO</code>命令输出监控信息，查询缓存<code>hit</code>（命中）和<code>miss</code>（丢失）的次数，根据业务需求调优<code>Redis</code>配置。</p><p>‍</p>`,91),t=[l];function p(c,o){return s(),a("div",null,t)}const u=n(i,[["render",p],["__file","redis-transaction-and-delete-policy.html.vue"]]);export{u as default};
