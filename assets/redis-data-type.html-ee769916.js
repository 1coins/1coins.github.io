const l=JSON.parse('{"key":"v-00987794","path":"/article/redis/redis-data-type.html","title":"Redis 数据类型","lang":"zh-CN","frontmatter":{"date":"2023-09-15T00:00:00.000Z","article":true,"timeline":true,"index":true,"title":"Redis 数据类型","category":"Redis","tag":["Redis"],"description":"Redis 数据类型的形成 作为缓存使用 原始业务功能设计 秒杀 618 活动 双十一活动 排队购票 运营平台监控到的突发高频访问数据 突发市政要闻，被强势关注围观 高频、复杂的统计数据 在线人数 投票排行榜 附加功能","head":[["meta",{"property":"og:url","content":"https://1coins.github.io/article/redis/redis-data-type.html"}],["meta",{"property":"og:site_name","content":"乾元"}],["meta",{"property":"og:title","content":"Redis 数据类型"}],["meta",{"property":"og:description","content":"Redis 数据类型的形成 作为缓存使用 原始业务功能设计 秒杀 618 活动 双十一活动 排队购票 运营平台监控到的突发高频访问数据 突发市政要闻，被强势关注围观 高频、复杂的统计数据 在线人数 投票排行榜 附加功能"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-24T03:08:04.000Z"}],["meta",{"property":"article:author","content":"乾元"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:published_time","content":"2023-09-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-24T03:08:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis 数据类型\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-15T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-24T03:08:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"乾元\\",\\"url\\":\\"https://github.com/1coins\\",\\"email\\":\\"lau5464@126.com\\"}]}"]]},"headers":[{"level":2,"title":"作为缓存使用","slug":"作为缓存使用","link":"#作为缓存使用","children":[]},{"level":2,"title":"附加功能","slug":"附加功能","link":"#附加功能","children":[]},{"level":2,"title":"数据存储格式","slug":"数据存储格式","link":"#数据存储格式","children":[]},{"level":2,"title":"string类型","slug":"string类型","link":"#string类型","children":[]},{"level":2,"title":"基本操作","slug":"基本操作","link":"#基本操作","children":[{"level":3,"title":"单数据操作与多数据操作的选择","slug":"单数据操作与多数据操作的选择","link":"#单数据操作与多数据操作的选择","children":[]}]},{"level":2,"title":"扩展操作","slug":"扩展操作","link":"#扩展操作","children":[{"level":3,"title":"数据表主键不重复","slug":"数据表主键不重复","link":"#数据表主键不重复","children":[]},{"level":3,"title":"数据时效性设置","slug":"数据时效性设置","link":"#数据时效性设置","children":[]}]},{"level":2,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]},{"level":2,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[{"level":3,"title":"微博主页显示粉丝数与微博数量","slug":"微博主页显示粉丝数与微博数量","link":"#微博主页显示粉丝数与微博数量","children":[]}]},{"level":2,"title":"存储的困惑","slug":"存储的困惑","link":"#存储的困惑","children":[]},{"level":2,"title":"hash类型","slug":"hash类型","link":"#hash类型","children":[]},{"level":2,"title":"基本操作","slug":"基本操作-1","link":"#基本操作-1","children":[]},{"level":2,"title":"扩展操作","slug":"扩展操作-1","link":"#扩展操作-1","children":[]},{"level":2,"title":"注意事项","slug":"注意事项-1","link":"#注意事项-1","children":[]},{"level":2,"title":"应用场景","slug":"应用场景-1","link":"#应用场景-1","children":[{"level":3,"title":"购物车","slug":"购物车","link":"#购物车","children":[]},{"level":3,"title":"抢购","slug":"抢购","link":"#抢购","children":[]},{"level":3,"title":"业务场景","slug":"业务场景-4","link":"#业务场景-4","children":[]},{"level":3,"title":"string与hash","slug":"string与hash","link":"#string与hash","children":[]}]},{"level":2,"title":"基本操作","slug":"基本操作-2","link":"#基本操作-2","children":[]},{"level":2,"title":"扩展操作","slug":"扩展操作-2","link":"#扩展操作-2","children":[{"level":3,"title":"业务场景","slug":"业务场景-6","link":"#业务场景-6","children":[]},{"level":3,"title":"Tips 6","slug":"tips-6","link":"#tips-6","children":[]}]},{"level":2,"title":"注意事项","slug":"注意事项-2","link":"#注意事项-2","children":[]},{"level":2,"title":"应用场景","slug":"应用场景-2","link":"#应用场景-2","children":[{"level":3,"title":"业务场景","slug":"业务场景-7","link":"#业务场景-7","children":[]},{"level":3,"title":"解决方案","slug":"解决方案-6","link":"#解决方案-6","children":[]},{"level":3,"title":"Tips 7","slug":"tips-7","link":"#tips-7","children":[]}]},{"level":2,"title":"基本操作","slug":"基本操作-3","link":"#基本操作-3","children":[]},{"level":2,"title":"扩展操作","slug":"扩展操作-3","link":"#扩展操作-3","children":[{"level":3,"title":"业务场景","slug":"业务场景-8","link":"#业务场景-8","children":[]},{"level":3,"title":"业务分析","slug":"业务分析-1","link":"#业务分析-1","children":[]},{"level":3,"title":"解决方案","slug":"解决方案-7","link":"#解决方案-7","children":[]},{"level":3,"title":"Tips 8","slug":"tips-8","link":"#tips-8","children":[]}]},{"level":2,"title":"扩展操作","slug":"扩展操作-4","link":"#扩展操作-4","children":[{"level":3,"title":"业务场景","slug":"业务场景-9","link":"#业务场景-9","children":[]},{"level":3,"title":"解决方案","slug":"解决方案-8","link":"#解决方案-8","children":[]},{"level":3,"title":"Tips 9","slug":"tips-9","link":"#tips-9","children":[]}]},{"level":2,"title":"注意事项","slug":"注意事项-3","link":"#注意事项-3","children":[]},{"level":2,"title":"应用场景","slug":"应用场景-3","link":"#应用场景-3","children":[{"level":3,"title":"权限校验","slug":"权限校验","link":"#权限校验","children":[]},{"level":3,"title":"网站访问量统计","slug":"网站访问量统计","link":"#网站访问量统计","children":[]},{"level":3,"title":"网站黑白名单","slug":"网站黑白名单","link":"#网站黑白名单","children":[]}]},{"level":2,"title":"基本操作","slug":"基本操作-4","link":"#基本操作-4","children":[]},{"level":2,"title":"扩展操作","slug":"扩展操作-5","link":"#扩展操作-5","children":[{"level":3,"title":"排行榜","slug":"排行榜","link":"#排行榜","children":[]}]},{"level":2,"title":"注意事项","slug":"注意事项-4","link":"#注意事项-4","children":[]},{"level":2,"title":"应用场景","slug":"应用场景-4","link":"#应用场景-4","children":[{"level":3,"title":"时效性任务管理","slug":"时效性任务管理","link":"#时效性任务管理","children":[]},{"level":3,"title":"带有权重的任务管理","slug":"带有权重的任务管理","link":"#带有权重的任务管理","children":[]}]},{"level":2,"title":"计数器","slug":"计数器","link":"#计数器","children":[{"level":3,"title":"业务场景","slug":"业务场景-16","link":"#业务场景-16","children":[]},{"level":3,"title":"解决方案","slug":"解决方案-15","link":"#解决方案-15","children":[]},{"level":3,"title":"解决方案改良","slug":"解决方案改良","link":"#解决方案改良","children":[]},{"level":3,"title":"Tips 16","slug":"tips-16","link":"#tips-16","children":[]}]},{"level":2,"title":"微信会话","slug":"微信会话","link":"#微信会话","children":[{"level":3,"title":"业务场景","slug":"业务场景-17","link":"#业务场景-17","children":[]},{"level":3,"title":"业务分析","slug":"业务分析-3","link":"#业务分析-3","children":[]},{"level":3,"title":"解决方案","slug":"解决方案-16","link":"#解决方案-16","children":[]}]},{"level":2,"title":"Bitmaps","slug":"bitmaps","link":"#bitmaps","children":[{"level":3,"title":"Bitmaps 类型的基础操作","slug":"bitmaps-类型的基础操作","link":"#bitmaps-类型的基础操作","children":[]},{"level":3,"title":"Bitmaps 类型的扩展操作","slug":"bitmaps-类型的扩展操作","link":"#bitmaps-类型的扩展操作","children":[]}]},{"level":2,"title":"HyperLogLog","slug":"hyperloglog","link":"#hyperloglog","children":[{"level":3,"title":"统计独立UV","slug":"统计独立uv","link":"#统计独立uv","children":[]},{"level":3,"title":"基数","slug":"基数","link":"#基数","children":[]},{"level":3,"title":"HyperLogLog 类型的基本操作","slug":"hyperloglog-类型的基本操作","link":"#hyperloglog-类型的基本操作","children":[]},{"level":3,"title":"Tips 19","slug":"tips-19","link":"#tips-19","children":[]},{"level":3,"title":"相关说明","slug":"相关说明","link":"#相关说明","children":[]}]},{"level":2,"title":"GEO","slug":"geo","link":"#geo","children":[{"level":3,"title":"GEO 类型的基本操作","slug":"geo-类型的基本操作","link":"#geo-类型的基本操作","children":[]},{"level":3,"title":"Tips 20","slug":"tips-20","link":"#tips-20","children":[]}]}],"git":{"createdTime":1695524884000,"updatedTime":1695524884000,"contributors":[{"name":"1coins","email":"lau5464@126.com","commits":1}]},"readingTime":{"minutes":36.2,"words":10860},"filePathRelative":"article/redis/redis-data-type.md","localizedDate":"2023年9月15日","excerpt":"<h1> Redis 数据类型的形成</h1>\\n<h2> 作为缓存使用</h2>\\n<ol>\\n<li>\\n<p>原始业务功能设计</p>\\n<ul>\\n<li>秒杀</li>\\n<li>618 活动</li>\\n<li>双十一活动</li>\\n<li>排队购票</li>\\n</ul>\\n</li>\\n<li>\\n<p>运营平台监控到的突发高频访问数据</p>\\n<ul>\\n<li>突发市政要闻，被强势关注围观</li>\\n</ul>\\n</li>\\n<li>\\n<p>高频、复杂的统计数据</p>\\n<ul>\\n<li>在线人数</li>\\n<li>投票排行榜</li>\\n</ul>\\n</li>\\n</ol>\\n<h2> 附加功能</h2>","autoDesc":true}');export{l as data};