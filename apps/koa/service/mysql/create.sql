-- ----------------------------
-- Table structure for article
-- ----------------------------
-- 我认为我们不可以叫这玩意儿文章
CREATE TABLE `article` (
  `id` bigint(20) NOT NULL COMMENT '文章id' AUTO_INCREMENT,
  `userId` INT NOT NULL,
  `title` text NOT NULL,
  `introduce` text NOT NULL,
  `category` text NOT NULL COMMENT '文章分类',
  `tag` text NOT NULL COMMENT '文章标签。多个标签用逗号隔开',
  `content` text NOT NULL,
  `pv` int(11) NOT NULL DEFAULT 0 COMMENT '文章浏览量',
  `status` int(11) NOT NULL DEFAULT 0 COMMENT '文章状态：1-公开；0-审核中；-1-审核失败不可见；-2-草稿；-3-删除',
  `sort` bigint(20) NOT NULL DEFAULT 0 COMMENT '文章排序',
  `fromID` bigint(20) COMMENT 'fork的文章ID' AUTO_INCREMENT
  `createTime` bigint(20) NOT NULL COMMENT '文章发布时间',
  `updateTime` bigint(20) NOT NULL COMMENT '文章修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- ----------------------------
-- Table structure for category
-- ----------------------------
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoryName` text NOT NULL COMMENT '分类名称，比如TypeScript',
  `categoryDesc` text NOT NULL,
  `createTime` bigint(20) NOT NULL DEFAULT '1597618819111' COMMENT '创建时间',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '分类状态, 1-可用，0-不可用',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for comment
-- ----------------------------
CREATE TABLE `comment` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `articleID` bigint(20) NOT NULL COMMENT '文章id',
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `from_uname` text CHARACTER SET utf8mb4 NOT NULL,
  `from_uid` int,
  `from_uavatar` text CHARACTER SET utf8mb4 NOT NULL,
  `to_uname` text CHARACTER SET utf8mb4,
  `to_uavatar` text CHARACTER SET utf8mb4,
  `to_uid` int,
  `oldContent` text COLLATE utf8mb4_unicode_ci COMMENT '被回复内容的内容',
  `oldID` bigint(20) DEFAULT NULL COMMENT '被回复内容的id',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '2-精选；1-通过；0-审核中；-1-删除',
  `createTime` bigint(20) NOT NULL COMMENT '评论回复时间',
  `updateTime` bigint(20) NOT NULL COMMENT '评论更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Table structure for user
-- ----------------------------
CREATE TABLE `code_shared`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `nickName` VARCHAR(45) NOT NULL,
  `avatar` TEXT NULL,
  `introduce` TEXT NULL,
  `myTag` TEXT COMMENT '使用过的用户标签，多个标签用逗号隔开',
  `createTime` BIGINT(20) NULL DEFAULT 1597618819100,
  `updateTime` BIGINT(20) NULL DEFAULT 1597618819100,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  INDEX `login` (`username` ASC, `password` ASC) VISIBLE
);


-- ----------------------------
-- Table structure for like
-- ----------------------------
CREATE TABLE `code_shared`.`like` (
  `id` BIGINT(30) NOT NULL AUTO_INCREMENT,
  `toID` BIGINT(20) NOT NULL COMMENT '被点赞对象，举例：【文章id】【用户id】【评论id】',
  `userID` INT NOT NULL,
  `status` INT NOT NULL,
  `createTime` BIGINT(20) NOT NULL DEFAULT 1597618819100,
  `updateTime` BIGINT(20) NOT NULL DEFAULT 1597618819100,
  PRIMARY KEY (`id`),
  INDEX `personal` (`toID` ASC, `userID` ASC) VISIBLE,
  CONSTRAINT `userID`
  FOREIGN KEY (`userID`)
  REFERENCES `code_shared`.`user` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION);



-- ----------------------------
-- Records of base
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES (1, 'admin', 'root', '源心锁', 'https://s.gravatar.com/avatar/d8065bea49aa2877ce13686772727711?s=80', 'Hello World','TypeScript', 1582595976253, 1582595976253);
INSERT INTO `article` VALUES (1, 1, 'React通明', '通明：React架构', 'React', 'React,Ts','const a=1;',100,1,10,null,1582595976253, 1582595976253);
INSERT INTO `comment` VALUES (null, 1, 'good', '源心锁',1,'https://s.gravatar.com/avatar/d8065bea49aa2877ce13686772727711?s=80',null,null,null,null,null,1,1582595976253, 1582595976253);
INSERT INTO `comment` VALUES (null ,1, 'bad', '源心锁',1,'https://s.gravatar.com/avatar/d8065bea49aa2877ce13686772727711?s=80',null,null,null,null,null,1,1582595976253, 1582595976253);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
