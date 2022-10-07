import { command } from "../service/mysql";
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
  async findAll({
    pageIndex,
    pageSize,
    type,
  }: {
    pageIndex: number;
    pageSize: number;
    type: string;
  }) {
    const { results = [] } = await command(findAllSQL);
    return results;
  },
  async findOne(id: any) {
    const { results } = await command(findOneSQL, id);
    const [res = {}] = results;
    return res;
  },
  async create(article: any) {
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
  async update(article: any) {
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
  async delete(id: any) {
    const { msg, state } = await command(deleteSQL, id);
    return { msg, state };
  },
};
export default Article;
