---
title: 示例表结构
hide: true
---
表结构
```sql
CREATE TABLE `search` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `enabled` tinyint(1) DEFAULT NULL,
  `classify` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `tag` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `logo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

实体

```java
package com.jansora.app.dto;

import java.io.Serializable;

/**
 * <Description> Description for SearchDo <br>
 *
 * @author jansora <br>
 * @version 1.0 <br>
 * @github https://github.com/Jansora
 * @CreateDate 2021/5/1 12:46:39 <br>
 * @see com.jansora.app.model <br>
 * @since 1.0 <br>
 */
public class SearchDto implements Serializable {
    /**
     * 主键 id
     */
    protected Long id;

    /**
     * 创建时间
     */
    @JsonFormat(timezone = "GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
    protected Date createdAt;

    /**
     * 更新时间
     */
    @JsonFormat(timezone = "GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
    protected Date updatedAt;

    /**
     * 名称
     */
    protected String name;

    /**
     * 简介
     */
    protected String description;

    /**
     * 是否启用
     */
    protected Boolean enabled;

    /**
     * 分类
     */
    protected String classify;

    /**
     * 标签
     */
    protected String tag;

    /**
     * logo
     */
    protected String logo;

    /**
     * 归属用户
     */
    protected Long userId;


    ... getter / setter...

}

```

