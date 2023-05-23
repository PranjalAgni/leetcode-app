const { Knex } = require('knex');
const { tableNames } = require('../../src/constants');
const { addTimestampColumns } = require('../helpers/timestamp');

/**
 *
 * @param {Knex} knex
 */
exports.up = async function (knex) {
  await knex.raw(
    `ALTER TABLE ${tableNames.problemsSolvedTimeline} ALTER COLUMN solution_created_at TYPE varchar(11)`
  );
};

/**
 *
 * @param {Knex} knex
 */
exports.down = async function (knex) {
  await knex.raw(
    `ALTER TABLE ${tableNames.problemsSolvedTimeline} ALTER COLUMN solution_created_at TYPE timestamp`
  );
};
