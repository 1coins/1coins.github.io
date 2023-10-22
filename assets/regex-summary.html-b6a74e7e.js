const e=JSON.parse('{"key":"v-3ca8b6c7","path":"/article/text-process/regex-summary.html","title":"正则表达式总结","lang":"zh-CN","frontmatter":{"date":"2023-08-01T00:00:00.000Z","article":true,"timeline":true,"index":true,"title":"正则表达式总结","category":"工具","tag":["文本处理","正则"],"description":"什么是正则表达式？ 正则表达式是一组由字母和符号组成的特殊文本, 它可以用来从文本中找出满足你想要的格式的句子。 一个正则表达式是在一个主体字符串中从左到右匹配字符串时的一种样式。例如Regular expression​是一个完整的句子，但我们常使用缩写的术语regex​或regexp​。 正则表达式可以用来替换文本中的字符串、验证形式、提取字符串等等。 想象你正在写一个应用，然后你想设定一个用户命名的规则，让用户名包含字符、数字、下划线和连字符以及限制字符的个数，好让名字看起来没那么丑。","head":[["meta",{"property":"og:url","content":"https://1coins.github.io/article/text-process/regex-summary.html"}],["meta",{"property":"og:site_name","content":"乾元"}],["meta",{"property":"og:title","content":"正则表达式总结"}],["meta",{"property":"og:description","content":"什么是正则表达式？ 正则表达式是一组由字母和符号组成的特殊文本, 它可以用来从文本中找出满足你想要的格式的句子。 一个正则表达式是在一个主体字符串中从左到右匹配字符串时的一种样式。例如Regular expression​是一个完整的句子，但我们常使用缩写的术语regex​或regexp​。 正则表达式可以用来替换文本中的字符串、验证形式、提取字符串等等。 想象你正在写一个应用，然后你想设定一个用户命名的规则，让用户名包含字符、数字、下划线和连字符以及限制字符的个数，好让名字看起来没那么丑。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-21T16:04:04.000Z"}],["meta",{"property":"article:author","content":"乾元"}],["meta",{"property":"article:tag","content":"文本处理"}],["meta",{"property":"article:tag","content":"正则"}],["meta",{"property":"article:published_time","content":"2023-08-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-21T16:04:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"正则表达式总结\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-21T16:04:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"乾元\\",\\"url\\":\\"https://github.com/1coins\\",\\"email\\":\\"lau5464@126.com\\"}]}"]]},"headers":[{"level":2,"title":"点运算符 .​","slug":"点运算符-​","link":"#点运算符-​","children":[]},{"level":2,"title":"字符集","slug":"字符集","link":"#字符集","children":[{"level":3,"title":"否定字符集","slug":"否定字符集","link":"#否定字符集","children":[]}]},{"level":2,"title":"重复次数","slug":"重复次数","link":"#重复次数","children":[{"level":3,"title":"*​ 号","slug":"​-号","link":"#​-号","children":[]},{"level":3,"title":"+` 号","slug":"号","link":"#号","children":[]},{"level":3,"title":"?​ 号","slug":"​-号-1","link":"#​-号-1","children":[]}]},{"level":2,"title":"{}​ 号","slug":"​-号-2","link":"#​-号-2","children":[]},{"level":2,"title":"(...)​ 特征标群","slug":"​-特征标群","link":"#​-特征标群","children":[]},{"level":2,"title":"|​ 或运算符","slug":"​-或运算符","link":"#​-或运算符","children":[]},{"level":2,"title":"转码特殊字符","slug":"转码特殊字符","link":"#转码特殊字符","children":[]},{"level":2,"title":"锚点","slug":"锚点","link":"#锚点","children":[{"level":3,"title":"^​ 号","slug":"​-号-3","link":"#​-号-3","children":[]},{"level":3,"title":"$​ 号","slug":"​-号-4","link":"#​-号-4","children":[]}]},{"level":2,"title":"​?=...​​ 前置约束（存在）","slug":"​-​​-前置约束-存在","link":"#​-​​-前置约束-存在","children":[]},{"level":2,"title":"​?!...​​ 前置约束-排除","slug":"​-​​-前置约束-排除","link":"#​-​​-前置约束-排除","children":[]},{"level":2,"title":"​?<=...​​ 后置约束-存在","slug":"​-​​-后置约束-存在","link":"#​-​​-后置约束-存在","children":[]},{"level":2,"title":"​?<!...​​ 后置约束-排除","slug":"​-​​-后置约束-排除","link":"#​-​​-后置约束-排除","children":[]},{"level":2,"title":"忽略大小写（Case Insensitive）","slug":"忽略大小写-case-insensitive","link":"#忽略大小写-case-insensitive","children":[]},{"level":2,"title":"全局搜索（Global search）","slug":"全局搜索-global-search","link":"#全局搜索-global-search","children":[]},{"level":2,"title":"多行修饰符（Multiline）","slug":"多行修饰符-multiline","link":"#多行修饰符-multiline","children":[]}],"git":{"createdTime":1692633844000,"updatedTime":1692633844000,"contributors":[{"name":"1coins","email":"lau5464@126.com","commits":1}]},"readingTime":{"minutes":10.77,"words":3232},"filePathRelative":"article/text-process/regex-summary.md","localizedDate":"2023年8月1日","excerpt":"<h1> 什么是正则表达式？</h1>\\n<blockquote>\\n<p>正则表达式是一组由字母和符号组成的特殊文本, 它可以用来从文本中找出满足你想要的格式的句子。</p>\\n</blockquote>\\n<p>一个正则表达式是在一个主体字符串中从左到右匹配字符串时的一种样式。例如<code>Regular expression</code>​是一个完整的句子，但我们常使用缩写的术语<code>regex</code>​或<code>regexp</code>​。</p>\\n<p>正则表达式可以用来替换文本中的字符串、验证形式、提取字符串等等。</p>\\n<p>想象你正在写一个应用，然后你想设定一个用户命名的规则，让用户名包含字符、数字、下划线和连字符以及限制字符的个数，好让名字看起来没那么丑。</p>","autoDesc":true}');export{e as data};
