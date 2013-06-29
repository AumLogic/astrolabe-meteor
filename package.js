Package.describe({
  summary: "Tells you which queries and subscriptions are slow."
});

Package.on_use(function (api, where) {
  where = where || ['client', 'server'];

  api.use('d3', where);
  api.use('underscore', where);
  api.add_files(['profiler.js', 'dashboard.js'], where);
});

Package.on_test(function (api) {
  // api.use('tinytest');
  // api.use('profiler');
  // api.add_files('deps_tests.js', 'client');
});