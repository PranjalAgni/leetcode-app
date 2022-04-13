const ProblemsSolvedService = require('../services/ProblemsSolvedService');
const TagsService = require('../services/TagsService');

const problemRouter = (fastify, _opts, done) => {
  fastify.get('/', async (_request, reply) => {
    try {
      const problemsSolvedList =
        await ProblemsSolvedService.getAllProblemsSolved();

      const problemsSolvedListWithLimtedProps = problemsSolvedList.map(
        (problem) => ({
          name: problem.problem_name,
          url: problem.problem_url,
          solvedAt: problem.solution_created_at,
        })
      );
      reply.code(200).send(problemsSolvedListWithLimtedProps);
    } catch (error) {
      console.error('Error occured while fetching problems: ', error);
      reply.code(500).send({ message: error.message });
    }
  });

  fastify.get('/:tagName', async (request, reply) => {
    const { tagName } = request.params;
    const tag = await TagsService.getTagByName(tagName);
    if (!tag)
      return reply.code(200).send({ message: 'No tag exist with this name' });
    const problemsSolved =
      (await ProblemsSolvedService.getProblemsSolvedByTagId(tag.pk_tag_id)) ??
      [];

    reply.code(200).send({
      count: problemsSolved.length,
      problemsSolved,
    });
  });

  done();
};

module.exports = problemRouter;
