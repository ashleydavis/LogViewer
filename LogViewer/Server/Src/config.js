﻿//Configuration settings for connecting to the database that the log viewer will monitor.

exports.config = {
    host: "dbtest-PC",
    port: 3412,
    database: "logs",
    errorsCollectionName: "unity.build.errors",
    logCollectionName: "unity.build.logs",
};