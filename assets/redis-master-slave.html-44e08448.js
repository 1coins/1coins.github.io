const e=JSON.parse('{"key":"v-48544ad6","path":"/article/redis/redis-master-slave.html","title":"Redis 主从复制","lang":"zh-CN","frontmatter":{"date":"2023-10-01T00:00:00.000Z","article":true,"timeline":true,"index":true,"title":"Redis 主从复制","category":"Redis","tag":["Redis"],"description":"主从复制简介 互联网“三高”架构 高并发 高性能 高可用 Redis 是否高可用 单机Redis的风险与问题： 问题 1：机器故障 现象：硬盘故障、系统崩溃 本质：数据丢失，很可能对业务造成灾难性打击 结论：基本上会放弃使用Redis 问题 2：容量瓶颈 现象：内存不足，从 16G 升级到 64G，从 64G 升级到 128G，无限升级内存 本质：穷，硬件条件跟不上 结论：放弃使用Redis","head":[["meta",{"property":"og:url","content":"https://1coins.github.io/article/redis/redis-master-slave.html"}],["meta",{"property":"og:site_name","content":"乾元"}],["meta",{"property":"og:title","content":"Redis 主从复制"}],["meta",{"property":"og:description","content":"主从复制简介 互联网“三高”架构 高并发 高性能 高可用 Redis 是否高可用 单机Redis的风险与问题： 问题 1：机器故障 现象：硬盘故障、系统崩溃 本质：数据丢失，很可能对业务造成灾难性打击 结论：基本上会放弃使用Redis 问题 2：容量瓶颈 现象：内存不足，从 16G 升级到 64G，从 64G 升级到 128G，无限升级内存 本质：穷，硬件条件跟不上 结论：放弃使用Redis"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-07T14:38:24.000Z"}],["meta",{"property":"article:author","content":"乾元"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:published_time","content":"2023-10-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-07T14:38:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis 主从复制\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-07T14:38:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"乾元\\",\\"url\\":\\"https://github.com/1coins\\",\\"email\\":\\"lau5464@126.com\\"}]}"]]},"headers":[{"level":2,"title":"互联网“三高”架构","slug":"互联网-三高-架构","link":"#互联网-三高-架构","children":[]},{"level":2,"title":"Redis 是否高可用","slug":"redis-是否高可用","link":"#redis-是否高可用","children":[]},{"level":2,"title":"多台服务器连接方案","slug":"多台服务器连接方案","link":"#多台服务器连接方案","children":[]},{"level":2,"title":"主从复制","slug":"主从复制","link":"#主从复制","children":[]},{"level":2,"title":"主从复制的作用","slug":"主从复制的作用","link":"#主从复制的作用","children":[]},{"level":2,"title":"建立连接阶段","slug":"建立连接阶段","link":"#建立连接阶段","children":[{"level":3,"title":"工作流程","slug":"工作流程","link":"#工作流程","children":[]},{"level":3,"title":"主从连接（slave 连接 master）","slug":"主从连接-slave-连接-master","link":"#主从连接-slave-连接-master","children":[]},{"level":3,"title":"主从断开连接","slug":"主从断开连接","link":"#主从断开连接","children":[]},{"level":3,"title":"授权访问","slug":"授权访问","link":"#授权访问","children":[]}]},{"level":2,"title":"数据同步阶段","slug":"数据同步阶段","link":"#数据同步阶段","children":[{"level":3,"title":"工作流程","slug":"工作流程-1","link":"#工作流程-1","children":[]},{"level":3,"title":"数据同步阶段 master 说明","slug":"数据同步阶段-master-说明","link":"#数据同步阶段-master-说明","children":[]},{"level":3,"title":"数据同步阶段 slave 说明","slug":"数据同步阶段-slave-说明","link":"#数据同步阶段-slave-说明","children":[]}]},{"level":2,"title":"命令传播阶段","slug":"命令传播阶段","link":"#命令传播阶段","children":[{"level":3,"title":"命令传播阶段的部分复制","slug":"命令传播阶段的部分复制","link":"#命令传播阶段的部分复制","children":[]},{"level":3,"title":"服务器运行 ID（RunID）","slug":"服务器运行-id-runid","link":"#服务器运行-id-runid","children":[]},{"level":3,"title":"复制缓冲区","slug":"复制缓冲区","link":"#复制缓冲区","children":[]},{"level":3,"title":"主从服务器复制偏移量（offset）","slug":"主从服务器复制偏移量-offset","link":"#主从服务器复制偏移量-offset","children":[]}]},{"level":2,"title":"数据同步+命令传播阶段工作流程","slug":"数据同步-命令传播阶段工作流程","link":"#数据同步-命令传播阶段工作流程","children":[]},{"level":2,"title":"心跳机制","slug":"心跳机制","link":"#心跳机制","children":[{"level":3,"title":"心跳阶段注意事项","slug":"心跳阶段注意事项","link":"#心跳阶段注意事项","children":[]}]},{"level":2,"title":"主从复制工作流程（完整）","slug":"主从复制工作流程-完整","link":"#主从复制工作流程-完整","children":[]},{"level":2,"title":"频繁的全量复制","slug":"频繁的全量复制","link":"#频繁的全量复制","children":[]},{"level":2,"title":"频繁的网络中断","slug":"频繁的网络中断","link":"#频繁的网络中断","children":[]},{"level":2,"title":"数据不一致","slug":"数据不一致","link":"#数据不一致","children":[]}],"git":{"createdTime":1696689504000,"updatedTime":1696689504000,"contributors":[{"name":"1coins","email":"lau5464@126.com","commits":1}]},"readingTime":{"minutes":12.25,"words":3675},"filePathRelative":"article/redis/redis-master-slave.md","localizedDate":"2023年10月1日","excerpt":"<h1> 主从复制简介</h1>\\n<h2> 互联网“三高”架构</h2>\\n<ul>\\n<li>高并发</li>\\n<li>高性能</li>\\n<li>高可用</li>\\n</ul>\\n<h2> Redis 是否高可用</h2>\\n<p><strong>单机<code>Redis</code>的风险与问题：</strong></p>\\n<ul>\\n<li>\\n<p>问题 1：机器故障</p>\\n<ul>\\n<li>现象：硬盘故障、系统崩溃</li>\\n<li>本质：数据丢失，很可能对业务造成灾难性打击</li>\\n<li>结论：基本上会放弃使用<code>Redis</code></li>\\n</ul>\\n</li>\\n<li>\\n<p>问题 2：容量瓶颈</p>\\n<ul>\\n<li>现象：内存不足，从 16G 升级到 64G，从 64G 升级到 128G，无限升级内存</li>\\n<li>本质：穷，硬件条件跟不上</li>\\n<li>结论：放弃使用<code>Redis</code></li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};