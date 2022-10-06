-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` bigint(20) NOT NULL COMMENT '文章id',
  `title` text NOT NULL,
  `introduce` text NOT NULL,
  `category` text NOT NULL,
  `tag` text NOT NULL,
  `content` text NOT NULL,
  `createTime` bigint(20) NOT NULL COMMENT '文章发布时间',
  `pv` int(11) NOT NULL DEFAULT 0 COMMENT '文章浏览量',
  `status` int(11) NOT NULL DEFAULT 0 COMMENT '文章状态：1-公开；0-审核中；-1-审核失败不可见；-2-草稿；-3-删除',
  `updateTime` bigint(20) NOT NULL COMMENT '文章修改时间',
  `sort` bigint(20) NOT NULL DEFAULT 0 COMMENT '文章排序',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoryName` text NOT NULL,
  `categoryDesc` text NOT NULL,
  `createTime` bigint(20) NOT NULL DEFAULT '1597618819111' COMMENT '创建时间',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '分类状态, 1-可用，0-不可用',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `articleID` bigint(20) NOT NULL COMMENT '文章id',
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `from_uname` text CHARACTER SET utf8 NOT NULL,
  `from_uid` text CHARACTER SET utf8 NOT NULL,
  `from_uavatar` text CHARACTER SET utf8 NOT NULL,
  `to_uname` text CHARACTER SET utf8,
  `to_uavatar` text CHARACTER SET utf8,
  `to_uid` text CHARACTER SET utf8,
  `createTime` bigint(20) NOT NULL COMMENT '评论回复时间',
  `oldContent` text COLLATE utf8mb4_unicode_ci COMMENT '被回复内容的内容',
  `oldID` bigint(20) DEFAULT NULL COMMENT '被回复内容的id',
  `articleURL` text COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '评论的文章链接',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '2-精选；1-通过；0-审核中；-1-删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=203 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `code_shared`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `nickName` VARCHAR(45) NOT NULL,
  `avatar` TEXT NULL,
  `introduce` TEXT NULL,
  `createTime` BIGINT(20) NULL DEFAULT 1597618819100,
  `updateTime` BIGINT(20) NULL DEFAULT 1597618819100,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE);

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES (1, 'admin', 'root', '源心锁', 'https://s.gravatar.com/avatar/d8065bea49aa2877ce13686772727711?s=80', 'Hello World', 1582595976253, 1582595976253);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
