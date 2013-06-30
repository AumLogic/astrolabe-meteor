Package.describe({
  summary: "Tells you which queries and subscriptions are slow."
});

Npm.depends({
  "clouseau": "0.1.4",
  mongodb: '1.3.10',
  Faker: '0.5.11',
  connect: "2.8.1"
})

Package.on_use(function (api) {
  api.use('bootstrap', ['client']);
  api.use('d3', ['client']);
  api.add_files(['dashboard.js'], ['client']);
  api.add_files(['shared.js'], ['server', 'client']);
  api.add_files(['os.js'], ['server']);
  api.add_files(['profiler.js'], ['server']);
});

Package.on_test(function (api) {
  // api.use('tinytest');
  // api.use('profiler');
  // api.add_files('deps_tests.js', 'client');
});