// You can switch wsEngine to 'sc-uws' for improved performance.
// If using nodemon, set killMasterOnSignal to true, and make sure that environment is 'dev'.
module.exports = {
  appName: 'Kairos',
  bootCheckInterval: Number(process.env.KAIROS_BOOT_CHECK_INTERVAL) || 200,
  brokerController: process.env.KAIROS_BROKER_CONTROLLER || './broker.js',
  brokers: Number(process.env.KAIROS_BROKERS) || 1,
  controllerBootTimeout: Number(process.env.KAIROS_BOOT_TIMEOUT) || 10000,
  authKey: process.env.KAIROS_AUTH_KEY || null,
  authEnable: Number(process.env.KAIROS_AUTH_ENABLE) || 0,
  authDefaultExpiry: Number(process.env.KAIROS_AUTH_DEFAULT_EXPIRY) || 86400,
  clusterAuthKey: process.env.KAIROS_AUTH_KEY || null,
  clusterClientPoolSize: process.env.KAIROS_CLIENT_POOL_SIZE || null,
  clusterInstanceIp: process.env.KAIROS_INSTANCE_IP || null,
  clusterInstanceIpFamily: process.env.KAIROS_INSTANCE_IP_FAMILY || null,
  clusterMappingEngine: process.env.KAIROS_MAPPING_ENGINE || null,
  clusterStateServerAckTimeout: Number(process.env.KAIROS_ACK_TIMEOUT) || null,
  clusterStateServerConnectTimeout: Number(process.env.KAIROS_CONNECT_TIMEOUT) || null,
  clusterStateServerHost: process.env.KAIROS_STATE_SERVER_HOST || null,
  clusterStateServerPort: process.env.KAIROS_STATE_SERVER_PORT || null,
  clusterStateServerReconnectRandomness: Number(process.env.KAIROS_RECONNECT_RANDOMNESS) || null,
  crashWorkerOnError: process.env.KAIROS_CRASH_ON_ERROR || false,
  environment: process.env.KAIROS_ENVIRONMENT || 'dev',
  killMasterOnSignal: process.env.KAIROS_KILL_MASTER_ON_SIGNAL || false,
  logLevel: process.env.KAIROS_LOG_LEVEL || 0,
  port: Number(process.env.KAIROS_PORT) || 8000,
  socketChannelLimit: Number(process.env.KAIROS_CHANNEL_LIMIT) || 1000,
  workerClusterController: process.env.KAIROS_WORKERCLUSTER_CONTROLLER || null,
  workerController: process.env.KAIROS_WORKER_CONTROLLER || './worker.js',
  workers: Number(process.env.KAIROS_WORKERS) || 1,
  wsEngine: process.env.KAIROS_WS_ENGINE || 'ws',
};
