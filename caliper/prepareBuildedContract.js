const fs = require("fs");

const file = JSON.parse(
  fs.readFileSync(
    `${__dirname}/../caliperWorkspace/src/Record_keeper.json`
  )
);
file.gas = 3000000;
fs.writeFileSync(
  `${__dirname}/../caliperWorkspace/src/Record_keeper.json`,
  JSON.stringify(file, null, 2)
);
