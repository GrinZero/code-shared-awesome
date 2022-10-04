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
  `pv` int(11) NOT NULL DEFAULT '0' COMMENT '文章浏览量',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '文章状态：1-公开；0-审核中；-1-审核失败不可见；-2-草稿；-3-删除',
  `updateTime` bigint(20) NOT NULL COMMENT '文章修改时间',
  'sort' bigint(20) NOT NULL DEFAULT '0' COMMENT '文章排序',
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
-- Table structure for tag
-- ----------------------------
DROP TABLE IF EXISTS `tag`;
CREATE TABLE `tag` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tagname` text NOT NULL,
  `tagdesc` text NOT NULL,
  `cdate` bigint(20) NOT NULL DEFAULT '1597618819110' COMMENT '创建时间',
  `status` int(11) DEFAULT '0' COMMENT '标签状态, 1-可用，0-不可用',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户 id',
  `username` text NOT NULL,
  `password` text NOT NULL,
  `nickName` text,
  `avatar` text,
  `introduce` text,
  `createTime` bigint(20) NOT NULL DEFAULT '1597618819100' COMMENT '用户创建时间',
  `updateTime` bigint(20) NOT NULL DEFAULT '1597618819100' COMMENT '用户创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES (1, 'admin', 'd42ea2921cc0ec2d02ab6951ea1834ed', '重庆崽儿', 'https://s.gravatar.com/avatar/d8065bea49aa2877ce13686772727711?s=80', 'Hello World', 1582595976253);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
