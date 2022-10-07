import { command } from "../service/mysql";
// const createTableSQL = `CREATE TABLE
// IF NOT EXISTS article (
// 	id INT PRIMARY KEY AUTO_INCREMENT,
// 	type VARCHAR (2) NOT NULL,
// 	title VARCHAR (255) NOT NULL,
// 	time datetime DEFAULT NOW(),
// 	\`user\` VARCHAR (255),
// 	introduce VARCHAR (255) DEFAULT '',
// 	getLikes INT DEFAULT 0,
// 	\`comment\` VARCHAR (255) DEFAULT '',
// 	\`code\` VARCHAR (255) DEFAULT ''
// );`;
const findAllSQL = `SELECT * FROM article`;
const findOneSQL = `SELECT * FROM article WHERE id=?`;
const insertSQL = `INSERT INTO article (
	type,
	title,
	time,
	\`user\`,
	introduce,
	getLikes,
	\`comment\`,
	\`code\`
)
VALUES
	(
		?,
		?,
		NOW(),
    ?,
    ?,
    0,
    ?,
    ?
	)`;
const updateSQL = `UPDATE article SET
  title=?,
  introduce=?,
  getLikes=?,
  \`comment\`=?,
  \`code\`=?
  WHERE id=?
`;
const deleteSQL = `DELETE from article WHERE id=?`;

const Article = {
  async findAll({ pageIndex, pageSize, type }) {
    const { results = [] } = await command(findAllSQL);
    return results;
  },
  async findOne(id) {
    const { results } = await command(findOneSQL, id);
    const [res = {}] = results;
    return res;
  },
  async create(article) {
    const {
      type = 1,
      title = "",
      user = "",
      introduce = "",
      comment = "",
      code = "",
    } = article;
    const { msg, state, results } = await command(insertSQL, [
      type,
      title,
      user,
      introduce,
      comment,
      code,
    ]);
    return { msg, state, id: results.insertId };
  },
  async update(article) {
    const {
      id = "",
      title = "",
      introduce = "",
      getLikes = 0,
      comment = "",
      code = "",
    } = article;
    const { msg, state } = await command(updateSQL, [
      title,
      introduce,
      getLikes,
      comment,
      code,
      id,
    ]);
    return { msg, state };
  },
  async delete(id) {
    const { msg, state } = await command(deleteSQL, id);
    return { msg, state };
  },
};
export default Article;
