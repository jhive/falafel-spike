remotelogProvider.remoteEnabled(REMOTE_LOG_CONFIG.enabled)
  .remoteUrl(REMOTE_LOGGING_URL)
  .appName('IHU Weather Channel');

$logProvider.debugEnabled(LOG_DEBUG_ENABLED);

$log.info("Cancel speech");