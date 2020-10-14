require('./setup');

const core = require('@actions/core');

const { getUserSats } = require('./client');
const { updateReadme } = require('./file');

(async () => {
  try {
    const stats = await getUserSats();
    updateReadme(stats);
  } catch (err) {
    core.setFailed(err.message);
  }
})();