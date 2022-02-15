---
title: 查询
toc: 'menu'
---

## 查询单条数据
<Alert type="success"><kbd>Interface </kbd> 的返回值类型与 <kbd>XML</kbd> 文件的 resultType 标签保持一致 </Alert>
```xml
// java
SearchDto findOneById(Long id);

// xml
<select id="findOneById" resultType="com.jansora.app.dto.SearchDto">
SELECT * FROM search WHERE id = #{id};
</select>
```
## 查询多条数据(列表)
<Alert type="success"><kbd>Interface </kbd> 的返回值中 List 的泛型类型与 <kbd>XML</kbd> 文件的 resultType 标签保持一致 </Alert>
```xml
// java
import java.util.List;
List<SearchDto> findManyByName(String name);
  
// xml
<select id="findManyByName" resultType="com.jansora.app.dto.SearchDto">
    SELECT * FROM search WHERE 1 = 1
    <choose>
        <when test="name != null"> AND name = #{name}</when>
    </choose>
</select>
```
## 查询总条数
<Alert type="success">XML 文件的 resultType 标签值是 <kbd>java.lang.Long </kbd></Alert>

```xml
// java
Long count(Long id);

// xml
<select id="count" resultType="java.lang.Long">
SELECT count(*) FROM search;
</select>
```
## 模糊搜索
<Alert type="success"><kbd>Interface </kbd> 的返回值中 List 的泛型类型与 <kbd>XML</kbd> 文件的 resultType 标签保持一致 </Alert>
```xml
// java
import java.util.List;
List<SearchDto> findManyByName(String name);
// xml
<select id="findManyByName" resultType="com.jansora.app.dto.SearchDto">
    SELECT * FROM search WHERE 1 = 1
    <choose>
        <when test="name != null and name != ''"> AND name LIKE CONCAT('%',#{name},'%') </when>
    </choose>
</select>
```
# 2



---

## 示例数据
<Alert type="info" >
<embed src="./Struct.md" />
</Alert>
