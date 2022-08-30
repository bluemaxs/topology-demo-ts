// * mysql 一主一从
export const mysqlData = {
    "code": 0,
    "errorMsg": null,
    "errorDetail": null,
    "success": true,
    "data": {
      "clusterId": "default--dev-140",
      "namespace": "zeus-dev",
      "name": "mysqltest",
      "type": "mysql",
      "aliasName": "mysqltest",
      "status": "Running",
      "monitorResourceQuota": {
        "cpu": {
          "total": 2.8,
          "used": 0.07,
          "usable": null,
          "usage": 2.51,
          "request": null
        },
        "memory": {
          "total": 2.8,
          "used": 0.5,
          "usable": null,
          "usage": 17.86,
          "request": null
        },
        "storage": {
          "total": 10,
          "used": 6.22,
          "usable": null,
          "usage": 62.2,
          "request": null
        }
      },
      "storageClassName": "middleware-lvm-aa",
      "pods": [
        {
          "podName": "mysqltest-0",
          "nodeName": "10.10.101.143-share",
          "podIp": "10.244.37.160",
          "status": "Running",
          "role": "master",
          "createTime": "2022-08-01T02:10:46Z",
          "restartCount": 0,
          "lastRestartTime": null,
          "resources": {
            "cpu": "1.4",
            "memory": "1.4",
            "limitCpu": "1.4",
            "limitMemory": "1.4",
            "storageClassName": "middleware-lvm",
            "storageClassAliasName": null,
            "storageClassQuota": "5Gi",
            "num": null,
            "isLvmStorage": true
          },
          "containers": [
            {
              "name": "mysql",
              "restartCount": null,
              "state": null,
              "startedAt": null,
              "exitCode": null,
              "signal": null,
              "reason": null,
              "message": null,
              "finishedAt": null,
              "images": null,
              "ready": false
            },
            {
              "name": "exporter",
              "restartCount": null,
              "state": null,
              "startedAt": null,
              "exitCode": null,
              "signal": null,
              "reason": null,
              "message": null,
              "finishedAt": null,
              "images": null,
              "ready": false
            },
            {
              "name": "logrotate",
              "restartCount": null,
              "state": null,
              "startedAt": null,
              "exitCode": null,
              "signal": null,
              "reason": null,
              "message": null,
              "finishedAt": null,
              "images": null,
              "ready": false
            }
          ],
          "initContainers": [
            {
              "name": "init",
              "restartCount": null,
              "state": null,
              "startedAt": null,
              "exitCode": null,
              "signal": null,
              "reason": null,
              "message": null,
              "finishedAt": null,
              "images": null,
              "ready": false
            }
          ],
          "hasConfigBackup": false,
          "pvcs": [
            "mysql-data-mysqltest-0"
          ],
          "monitorResourceQuota": {
            "cpu": {
              "total": 1.4,
              "used": 0.05,
              "usable": null,
              "usage": 3.58,
              "request": null
            },
            "memory": {
              "total": 1.4,
              "used": 0.25,
              "usable": null,
              "usage": 17.86,
              "request": null
            },
            "storage": {
              "total": 5,
              "used": 3.11,
              "usable": null,
              "usage": 62.2,
              "request": null
            }
          },
          "hostIp": "10.10.101.143"
        },
        {
          "podName": "mysqltest-1",
          "nodeName": "10.10.101.141-share",
          "podIp": "10.244.229.206",
          "status": "Running",
          "role": "slave",
          "createTime": "2022-08-01T02:19:40Z",
          "restartCount": 0,
          "lastRestartTime": null,
          "resources": {
            "cpu": "1.4",
            "memory": "1.4",
            "limitCpu": "1.4",
            "limitMemory": "1.4",
            "storageClassName": "middleware-lvm",
            "storageClassAliasName": null,
            "storageClassQuota": "5Gi",
            "num": null,
            "isLvmStorage": true
          },
          "containers": [
            {
              "name": "mysql",
              "restartCount": null,
              "state": null,
              "startedAt": null,
              "exitCode": null,
              "signal": null,
              "reason": null,
              "message": null,
              "finishedAt": null,
              "images": null,
              "ready": false
            },
            {
              "name": "exporter",
              "restartCount": null,
              "state": null,
              "startedAt": null,
              "exitCode": null,
              "signal": null,
              "reason": null,
              "message": null,
              "finishedAt": null,
              "images": null,
              "ready": false
            },
            {
              "name": "logrotate",
              "restartCount": null,
              "state": null,
              "startedAt": null,
              "exitCode": null,
              "signal": null,
              "reason": null,
              "message": null,
              "finishedAt": null,
              "images": null,
              "ready": false
            }
          ],
          "initContainers": [
            {
              "name": "init",
              "restartCount": null,
              "state": null,
              "startedAt": null,
              "exitCode": null,
              "signal": null,
              "reason": null,
              "message": null,
              "finishedAt": null,
              "images": null,
              "ready": false
            }
          ],
          "hasConfigBackup": false,
          "pvcs": [
            "mysql-data-mysqltest-1"
          ],
          "monitorResourceQuota": {
            "cpu": {
              "total": 1.4,
              "used": 0.02,
              "usable": null,
              "usage": 1.43,
              "request": null
            },
            "memory": {
              "total": 1.4,
              "used": 0.25,
              "usable": null,
              "usage": 17.86,
              "request": null
            },
            "storage": {
              "total": 5,
              "used": 3.11,
              "usable": null,
              "usage": 62.2,
              "request": null
            }
          },
          "hostIp": "10.10.101.141"
        }
      ],
      "podInfoGroup": {
        "role": null,
        "hasChildGroup": true,
        "listChildGroup": [
          {
            "role": "slave",
            "hasChildGroup": false,
            "listChildGroup": null,
            "pods": [
              {
                "podName": "mysqltest-1",
                "nodeName": "10.10.101.141-share",
                "podIp": "10.244.229.206",
                "status": "Running",
                "role": "slave",
                "createTime": "2022-08-01T02:19:40Z",
                "restartCount": 0,
                "lastRestartTime": null,
                "resources": {
                  "cpu": "1.4",
                  "memory": "1.4",
                  "limitCpu": "1.4",
                  "limitMemory": "1.4",
                  "storageClassName": "middleware-lvm",
                  "storageClassAliasName": null,
                  "storageClassQuota": "5Gi",
                  "num": null,
                  "isLvmStorage": true
                },
                "containers": [
                  {
                    "name": "mysql",
                    "restartCount": null,
                    "state": null,
                    "startedAt": null,
                    "exitCode": null,
                    "signal": null,
                    "reason": null,
                    "message": null,
                    "finishedAt": null,
                    "images": null,
                    "ready": false
                  },
                  {
                    "name": "exporter",
                    "restartCount": null,
                    "state": null,
                    "startedAt": null,
                    "exitCode": null,
                    "signal": null,
                    "reason": null,
                    "message": null,
                    "finishedAt": null,
                    "images": null,
                    "ready": false
                  },
                  {
                    "name": "logrotate",
                    "restartCount": null,
                    "state": null,
                    "startedAt": null,
                    "exitCode": null,
                    "signal": null,
                    "reason": null,
                    "message": null,
                    "finishedAt": null,
                    "images": null,
                    "ready": false
                  }
                ],
                "initContainers": [
                  {
                    "name": "init",
                    "restartCount": null,
                    "state": null,
                    "startedAt": null,
                    "exitCode": null,
                    "signal": null,
                    "reason": null,
                    "message": null,
                    "finishedAt": null,
                    "images": null,
                    "ready": false
                  }
                ],
                "hasConfigBackup": false,
                "pvcs": [
                  "mysql-data-mysqltest-1"
                ],
                "monitorResourceQuota": {
                  "cpu": {
                    "total": 1.4,
                    "used": 0.02,
                    "usable": null,
                    "usage": 1.43,
                    "request": null
                  },
                  "memory": {
                    "total": 1.4,
                    "used": 0.25,
                    "usable": null,
                    "usage": 17.86,
                    "request": null
                  },
                  "storage": {
                    "total": 5,
                    "used": 3.11,
                    "usable": null,
                    "usage": 62.2,
                    "request": null
                  }
                },
                "hostIp": "10.10.101.141"
              }
            ]
          },
          {
            "role": "master",
            "hasChildGroup": false,
            "listChildGroup": null,
            "pods": [
              {
                "podName": "mysqltest-0",
                "nodeName": "10.10.101.143-share",
                "podIp": "10.244.37.160",
                "status": "Running",
                "role": "master",
                "createTime": "2022-08-01T02:10:46Z",
                "restartCount": 0,
                "lastRestartTime": null,
                "resources": {
                  "cpu": "1.4",
                  "memory": "1.4",
                  "limitCpu": "1.4",
                  "limitMemory": "1.4",
                  "storageClassName": "middleware-lvm",
                  "storageClassAliasName": null,
                  "storageClassQuota": "5Gi",
                  "num": null,
                  "isLvmStorage": true
                },
                "containers": [
                  {
                    "name": "mysql",
                    "restartCount": null,
                    "state": null,
                    "startedAt": null,
                    "exitCode": null,
                    "signal": null,
                    "reason": null,
                    "message": null,
                    "finishedAt": null,
                    "images": null,
                    "ready": false
                  },
                  {
                    "name": "exporter",
                    "restartCount": null,
                    "state": null,
                    "startedAt": null,
                    "exitCode": null,
                    "signal": null,
                    "reason": null,
                    "message": null,
                    "finishedAt": null,
                    "images": null,
                    "ready": false
                  },
                  {
                    "name": "logrotate",
                    "restartCount": null,
                    "state": null,
                    "startedAt": null,
                    "exitCode": null,
                    "signal": null,
                    "reason": null,
                    "message": null,
                    "finishedAt": null,
                    "images": null,
                    "ready": false
                  }
                ],
                "initContainers": [
                  {
                    "name": "init",
                    "restartCount": null,
                    "state": null,
                    "startedAt": null,
                    "exitCode": null,
                    "signal": null,
                    "reason": null,
                    "message": null,
                    "finishedAt": null,
                    "images": null,
                    "ready": false
                  }
                ],
                "hasConfigBackup": false,
                "pvcs": [
                  "mysql-data-mysqltest-0"
                ],
                "monitorResourceQuota": {
                  "cpu": {
                    "total": 1.4,
                    "used": 0.05,
                    "usable": null,
                    "usage": 3.58,
                    "request": null
                  },
                  "memory": {
                    "total": 1.4,
                    "used": 0.25,
                    "usable": null,
                    "usage": 17.86,
                    "request": null
                  },
                  "storage": {
                    "total": 5,
                    "used": 3.11,
                    "usable": null,
                    "usage": 62.2,
                    "request": null
                  }
                },
                "hostIp": "10.10.101.143"
              }
            ]
          }
        ],
        "pods": null
      }
    },
    "count": null,
    "errorStack": null
}

// * redis 哨兵模式 单分片
export const redisData = {
  "code": 0,
  "errorMsg": null,
  "errorDetail": null,
  "success": true,
  "data": {
    "clusterId": "default--dev-140",
    "namespace": "zeus-dev",
    "name": "cc",
    "type": "redis",
    "aliasName": "cc",
    "status": "Running",
    "monitorResourceQuota": {
      "cpu": {
        "total": 5.15,
        "used": 0.12000000000000001,
        "usable": null,
        "usage": 2.34,
        "request": null
      },
      "memory": {
        "total": 5.25,
        "used": 0.05,
        "usable": null,
        "usage": 0.96,
        "request": null
      },
      "storage": {
        "total": 2,
        "used": 0.02,
        "usable": null,
        "usage": 1,
        "request": null
      }
    },
    "storageClassName": "middleware-lvm",
    "pods": [
      {
        "podName": "cc-1",
        "nodeName": "10.10.101.143-share",
        "podIp": "10.244.37.165",
        "status": "Running",
        "role": "slave",
        "createTime": "2022-08-03T07:41:42Z",
        "restartCount": 0,
        "lastRestartTime": null,
        "resources": {
          "cpu": "1.1",
          "memory": "1.1",
          "limitCpu": "1.1",
          "limitMemory": "1.1",
          "storageClassName": "middleware-lvm",
          "storageClassAliasName": null,
          "storageClassQuota": "1Gi",
          "num": null,
          "isLvmStorage": true
        },
        "containers": [
          {
            "name": "redis-cluster",
            "restartCount": null,
            "state": null,
            "startedAt": null,
            "exitCode": null,
            "signal": null,
            "reason": null,
            "message": null,
            "finishedAt": null,
            "images": null,
            "ready": false
          },
          {
            "name": "redis-exporter",
            "restartCount": null,
            "state": null,
            "startedAt": null,
            "exitCode": null,
            "signal": null,
            "reason": null,
            "message": null,
            "finishedAt": null,
            "images": null,
            "ready": false
          }
        ],
        "initContainers": [
          {
            "name": "redis-init",
            "restartCount": null,
            "state": null,
            "startedAt": null,
            "exitCode": null,
            "signal": null,
            "reason": null,
            "message": null,
            "finishedAt": null,
            "images": null,
            "ready": false
          }
        ],
        "hasConfigBackup": false,
        "pvcs": [
          "redis-data-cc-1"
        ],
        "monitorResourceQuota": {
          "cpu": {
            "total": 1.03,
            "used": 0.03,
            "usable": null,
            "usage": 2.92,
            "request": null
          },
          "memory": {
            "total": 1.05,
            "used": 0.01,
            "usable": null,
            "usage": 0.96,
            "request": null
          },
          "storage": {
            "total": 1,
            "used": 0.01,
            "usable": null,
            "usage": 1,
            "request": null
          }
        },
        "hostIp": "10.10.101.143"
      },
      {
        "podName": "cc-0",
        "nodeName": "10.10.101.142-share",
        "podIp": "10.244.63.119",
        "status": "Running",
        "role": "master",
        "createTime": "2022-08-03T07:42:08Z",
        "restartCount": 0,
        "lastRestartTime": null,
        "resources": {
          "cpu": "1.1",
          "memory": "1.1",
          "limitCpu": "1.1",
          "limitMemory": "1.1",
          "storageClassName": "middleware-lvm",
          "storageClassAliasName": null,
          "storageClassQuota": "1Gi",
          "num": null,
          "isLvmStorage": true
        },
        "containers": [
          {
            "name": "redis-cluster",
            "restartCount": null,
            "state": null,
            "startedAt": null,
            "exitCode": null,
            "signal": null,
            "reason": null,
            "message": null,
            "finishedAt": null,
            "images": null,
            "ready": false
          },
          {
            "name": "redis-exporter",
            "restartCount": null,
            "state": null,
            "startedAt": null,
            "exitCode": null,
            "signal": null,
            "reason": null,
            "message": null,
            "finishedAt": null,
            "images": null,
            "ready": false
          }
        ],
        "initContainers": [
          {
            "name": "redis-init",
            "restartCount": null,
            "state": null,
            "startedAt": null,
            "exitCode": null,
            "signal": null,
            "reason": null,
            "message": null,
            "finishedAt": null,
            "images": null,
            "ready": false
          }
        ],
        "hasConfigBackup": false,
        "pvcs": [
          "redis-data-cc-0"
        ],
        "monitorResourceQuota": {
          "cpu": {
            "total": 1.03,
            "used": 0.02,
            "usable": null,
            "usage": 1.95,
            "request": null
          },
          "memory": {
            "total": 1.05,
            "used": 0.01,
            "usable": null,
            "usage": 0.96,
            "request": null
          },
          "storage": {
            "total": 1,
            "used": 0.01,
            "usable": null,
            "usage": 1,
            "request": null
          }
        },
        "hostIp": "10.10.101.142"
      },
      {
        "podName": "cc-sentinel-9b8985bbb-t8d8l",
        "nodeName": "10.10.101.142-share",
        "podIp": "10.244.63.105",
        "status": "Running",
        "role": null,
        "createTime": "2022-08-03T07:39:17Z",
        "restartCount": 0,
        "lastRestartTime": null,
        "resources": {
          "cpu": "1.1",
          "memory": "1.1",
          "limitCpu": "1.1",
          "limitMemory": "1.1",
          "storageClassName": null,
          "storageClassAliasName": null,
          "storageClassQuota": null,
          "num": null,
          "isLvmStorage": null
        },
        "containers": [
          {
            "name": "redis-exporter",
            "restartCount": null,
            "state": null,
            "startedAt": null,
            "exitCode": null,
            "signal": null,
            "reason": null,
            "message": null,
            "finishedAt": null,
            "images": null,
            "ready": false
          },
          {
            "name": "sentinel",
            "restartCount": null,
            "state": null,
            "startedAt": null,
            "exitCode": null,
            "signal": null,
            "reason": null,
            "message": null,
            "finishedAt": null,
            "images": null,
            "ready": false
          }
        ],
        "initContainers": [
          {
            "name": "sentinel-config-copy",
            "restartCount": null,
            "state": null,
            "startedAt": null,
            "exitCode": null,
            "signal": null,
            "reason": null,
            "message": null,
            "finishedAt": null,
            "images": null,
            "ready": false
          }
        ],
        "hasConfigBackup": false,
        "pvcs": null,
        "monitorResourceQuota": {
          "cpu": {
            "total": 1.03,
            "used": 0.02,
            "usable": null,
            "usage": 1.95,
            "request": null
          },
          "memory": {
            "total": 1.05,
            "used": 0.01,
            "usable": null,
            "usage": 0.96,
            "request": null
          },
          "storage": {
            "total": null,
            "used": null,
            "usable": null,
            "usage": null,
            "request": null
          }
        },
        "hostIp": "10.10.101.142"
      },
      {
        "podName": "cc-sentinel-9b8985bbb-qg8vq",
        "nodeName": "10.10.101.144-share",
        "podIp": "10.244.88.219",
        "status": "Running",
        "role": null,
        "createTime": "2022-08-03T07:39:17Z",
        "restartCount": 0,
        "lastRestartTime": null,
        "resources": {
          "cpu": "1.1",
          "memory": "1.1",
          "limitCpu": "1.1",
          "limitMemory": "1.1",
          "storageClassName": null,
          "storageClassAliasName": null,
          "storageClassQuota": null,
          "num": null,
          "isLvmStorage": null
        },
        "containers": [
          {
            "name": "redis-exporter",
            "restartCount": null,
            "state": null,
            "startedAt": null,
            "exitCode": null,
            "signal": null,
            "reason": null,
            "message": null,
            "finishedAt": null,
            "images": null,
            "ready": false
          },
          {
            "name": "sentinel",
            "restartCount": null,
            "state": null,
            "startedAt": null,
            "exitCode": null,
            "signal": null,
            "reason": null,
            "message": null,
            "finishedAt": null,
            "images": null,
            "ready": false
          }
        ],
        "initContainers": [
          {
            "name": "sentinel-config-copy",
            "restartCount": null,
            "state": null,
            "startedAt": null,
            "exitCode": null,
            "signal": null,
            "reason": null,
            "message": null,
            "finishedAt": null,
            "images": null,
            "ready": false
          }
        ],
        "hasConfigBackup": false,
        "pvcs": null,
        "monitorResourceQuota": {
          "cpu": {
            "total": 1.03,
            "used": 0.03,
            "usable": null,
            "usage": 2.92,
            "request": null
          },
          "memory": {
            "total": 1.05,
            "used": 0.01,
            "usable": null,
            "usage": 0.96,
            "request": null
          },
          "storage": {
            "total": null,
            "used": null,
            "usable": null,
            "usage": null,
            "request": null
          }
        },
        "hostIp": "10.10.101.144"
      },
      {
        "podName": "cc-sentinel-9b8985bbb-dvsrf",
        "nodeName": "10.10.101.141-share",
        "podIp": "10.244.229.231",
        "status": "Running",
        "role": null,
        "createTime": "2022-08-03T07:39:17Z",
        "restartCount": 0,
        "lastRestartTime": null,
        "resources": {
          "cpu": "1.1",
          "memory": "1.1",
          "limitCpu": "1.1",
          "limitMemory": "1.1",
          "storageClassName": null,
          "storageClassAliasName": null,
          "storageClassQuota": null,
          "num": null,
          "isLvmStorage": null
        },
        "containers": [
          {
            "name": "redis-exporter",
            "restartCount": null,
            "state": null,
            "startedAt": null,
            "exitCode": null,
            "signal": null,
            "reason": null,
            "message": null,
            "finishedAt": null,
            "images": null,
            "ready": false
          },
          {
            "name": "sentinel",
            "restartCount": null,
            "state": null,
            "startedAt": null,
            "exitCode": null,
            "signal": null,
            "reason": null,
            "message": null,
            "finishedAt": null,
            "images": null,
            "ready": false
          }
        ],
        "initContainers": [
          {
            "name": "sentinel-config-copy",
            "restartCount": null,
            "state": null,
            "startedAt": null,
            "exitCode": null,
            "signal": null,
            "reason": null,
            "message": null,
            "finishedAt": null,
            "images": null,
            "ready": false
          }
        ],
        "hasConfigBackup": false,
        "pvcs": null,
        "monitorResourceQuota": {
          "cpu": {
            "total": 1.03,
            "used": 0.02,
            "usable": null,
            "usage": 1.95,
            "request": null
          },
          "memory": {
            "total": 1.05,
            "used": 0.01,
            "usable": null,
            "usage": 0.96,
            "request": null
          },
          "storage": {
            "total": null,
            "used": null,
            "usable": null,
            "usage": null,
            "request": null
          }
        },
        "hostIp": "10.10.101.141"
      }
    ],
    "podInfoGroup": {
      "role": null,
      "hasChildGroup": true,
      "listChildGroup": [
        {
          "role": "slave",
          "hasChildGroup": false,
          "listChildGroup": null,
          "pods": [
            {
              "podName": "cc-1",
              "nodeName": "10.10.101.143-share",
              "podIp": "10.244.37.165",
              "status": "Running",
              "role": "slave",
              "createTime": "2022-08-03T07:41:42Z",
              "restartCount": 0,
              "lastRestartTime": null,
              "resources": {
                "cpu": "1.1",
                "memory": "1.1",
                "limitCpu": "1.1",
                "limitMemory": "1.1",
                "storageClassName": "middleware-lvm",
                "storageClassAliasName": null,
                "storageClassQuota": "1Gi",
                "num": null,
                "isLvmStorage": true
              },
              "containers": [
                {
                  "name": "redis-cluster",
                  "restartCount": null,
                  "state": null,
                  "startedAt": null,
                  "exitCode": null,
                  "signal": null,
                  "reason": null,
                  "message": null,
                  "finishedAt": null,
                  "images": null,
                  "ready": false
                },
                {
                  "name": "redis-exporter",
                  "restartCount": null,
                  "state": null,
                  "startedAt": null,
                  "exitCode": null,
                  "signal": null,
                  "reason": null,
                  "message": null,
                  "finishedAt": null,
                  "images": null,
                  "ready": false
                }
              ],
              "initContainers": [
                {
                  "name": "redis-init",
                  "restartCount": null,
                  "state": null,
                  "startedAt": null,
                  "exitCode": null,
                  "signal": null,
                  "reason": null,
                  "message": null,
                  "finishedAt": null,
                  "images": null,
                  "ready": false
                }
              ],
              "hasConfigBackup": false,
              "pvcs": [
                "redis-data-cc-1"
              ],
              "monitorResourceQuota": {
                "cpu": {
                  "total": 1.03,
                  "used": 0.03,
                  "usable": null,
                  "usage": 2.92,
                  "request": null
                },
                "memory": {
                  "total": 1.05,
                  "used": 0.01,
                  "usable": null,
                  "usage": 0.96,
                  "request": null
                },
                "storage": {
                  "total": 1,
                  "used": 0.01,
                  "usable": null,
                  "usage": 1,
                  "request": null
                }
              },
              "hostIp": "10.10.101.143"
            }
          ]
        },
        {
          "role": "default",
          "hasChildGroup": false,
          "listChildGroup": null,
          "pods": [
            {
              "podName": "cc-sentinel-9b8985bbb-t8d8l",
              "nodeName": "10.10.101.142-share",
              "podIp": "10.244.63.105",
              "status": "Running",
              "role": null,
              "createTime": "2022-08-03T07:39:17Z",
              "restartCount": 0,
              "lastRestartTime": null,
              "resources": {
                "cpu": "1.1",
                "memory": "1.1",
                "limitCpu": "1.1",
                "limitMemory": "1.1",
                "storageClassName": null,
                "storageClassAliasName": null,
                "storageClassQuota": null,
                "num": null,
                "isLvmStorage": null
              },
              "containers": [
                {
                  "name": "redis-exporter",
                  "restartCount": null,
                  "state": null,
                  "startedAt": null,
                  "exitCode": null,
                  "signal": null,
                  "reason": null,
                  "message": null,
                  "finishedAt": null,
                  "images": null,
                  "ready": false
                },
                {
                  "name": "sentinel",
                  "restartCount": null,
                  "state": null,
                  "startedAt": null,
                  "exitCode": null,
                  "signal": null,
                  "reason": null,
                  "message": null,
                  "finishedAt": null,
                  "images": null,
                  "ready": false
                }
              ],
              "initContainers": [
                {
                  "name": "sentinel-config-copy",
                  "restartCount": null,
                  "state": null,
                  "startedAt": null,
                  "exitCode": null,
                  "signal": null,
                  "reason": null,
                  "message": null,
                  "finishedAt": null,
                  "images": null,
                  "ready": false
                }
              ],
              "hasConfigBackup": false,
              "pvcs": null,
              "monitorResourceQuota": {
                "cpu": {
                  "total": 1.03,
                  "used": 0.02,
                  "usable": null,
                  "usage": 1.95,
                  "request": null
                },
                "memory": {
                  "total": 1.05,
                  "used": 0.01,
                  "usable": null,
                  "usage": 0.96,
                  "request": null
                },
                "storage": {
                  "total": null,
                  "used": null,
                  "usable": null,
                  "usage": null,
                  "request": null
                }
              },
              "hostIp": "10.10.101.142"
            },
            {
              "podName": "cc-sentinel-9b8985bbb-qg8vq",
              "nodeName": "10.10.101.144-share",
              "podIp": "10.244.88.219",
              "status": "Running",
              "role": null,
              "createTime": "2022-08-03T07:39:17Z",
              "restartCount": 0,
              "lastRestartTime": null,
              "resources": {
                "cpu": "1.1",
                "memory": "1.1",
                "limitCpu": "1.1",
                "limitMemory": "1.1",
                "storageClassName": null,
                "storageClassAliasName": null,
                "storageClassQuota": null,
                "num": null,
                "isLvmStorage": null
              },
              "containers": [
                {
                  "name": "redis-exporter",
                  "restartCount": null,
                  "state": null,
                  "startedAt": null,
                  "exitCode": null,
                  "signal": null,
                  "reason": null,
                  "message": null,
                  "finishedAt": null,
                  "images": null,
                  "ready": false
                },
                {
                  "name": "sentinel",
                  "restartCount": null,
                  "state": null,
                  "startedAt": null,
                  "exitCode": null,
                  "signal": null,
                  "reason": null,
                  "message": null,
                  "finishedAt": null,
                  "images": null,
                  "ready": false
                }
              ],
              "initContainers": [
                {
                  "name": "sentinel-config-copy",
                  "restartCount": null,
                  "state": null,
                  "startedAt": null,
                  "exitCode": null,
                  "signal": null,
                  "reason": null,
                  "message": null,
                  "finishedAt": null,
                  "images": null,
                  "ready": false
                }
              ],
              "hasConfigBackup": false,
              "pvcs": null,
              "monitorResourceQuota": {
                "cpu": {
                  "total": 1.03,
                  "used": 0.03,
                  "usable": null,
                  "usage": 2.92,
                  "request": null
                },
                "memory": {
                  "total": 1.05,
                  "used": 0.01,
                  "usable": null,
                  "usage": 0.96,
                  "request": null
                },
                "storage": {
                  "total": null,
                  "used": null,
                  "usable": null,
                  "usage": null,
                  "request": null
                }
              },
              "hostIp": "10.10.101.144"
            },
            {
              "podName": "cc-sentinel-9b8985bbb-dvsrf",
              "nodeName": "10.10.101.141-share",
              "podIp": "10.244.229.231",
              "status": "Running",
              "role": null,
              "createTime": "2022-08-03T07:39:17Z",
              "restartCount": 0,
              "lastRestartTime": null,
              "resources": {
                "cpu": "1.1",
                "memory": "1.1",
                "limitCpu": "1.1",
                "limitMemory": "1.1",
                "storageClassName": null,
                "storageClassAliasName": null,
                "storageClassQuota": null,
                "num": null,
                "isLvmStorage": null
              },
              "containers": [
                {
                  "name": "redis-exporter",
                  "restartCount": null,
                  "state": null,
                  "startedAt": null,
                  "exitCode": null,
                  "signal": null,
                  "reason": null,
                  "message": null,
                  "finishedAt": null,
                  "images": null,
                  "ready": false
                },
                {
                  "name": "sentinel",
                  "restartCount": null,
                  "state": null,
                  "startedAt": null,
                  "exitCode": null,
                  "signal": null,
                  "reason": null,
                  "message": null,
                  "finishedAt": null,
                  "images": null,
                  "ready": false
                }
              ],
              "initContainers": [
                {
                  "name": "sentinel-config-copy",
                  "restartCount": null,
                  "state": null,
                  "startedAt": null,
                  "exitCode": null,
                  "signal": null,
                  "reason": null,
                  "message": null,
                  "finishedAt": null,
                  "images": null,
                  "ready": false
                }
              ],
              "hasConfigBackup": false,
              "pvcs": null,
              "monitorResourceQuota": {
                "cpu": {
                  "total": 1.03,
                  "used": 0.02,
                  "usable": null,
                  "usage": 1.95,
                  "request": null
                },
                "memory": {
                  "total": 1.05,
                  "used": 0.01,
                  "usable": null,
                  "usage": 0.96,
                  "request": null
                },
                "storage": {
                  "total": null,
                  "used": null,
                  "usable": null,
                  "usage": null,
                  "request": null
                }
              },
              "hostIp": "10.10.101.141"
            }
          ]
        },
        {
          "role": "master",
          "hasChildGroup": false,
          "listChildGroup": null,
          "pods": [
            {
              "podName": "cc-0",
              "nodeName": "10.10.101.142-share",
              "podIp": "10.244.63.119",
              "status": "Running",
              "role": "master",
              "createTime": "2022-08-03T07:42:08Z",
              "restartCount": 0,
              "lastRestartTime": null,
              "resources": {
                "cpu": "1.1",
                "memory": "1.1",
                "limitCpu": "1.1",
                "limitMemory": "1.1",
                "storageClassName": "middleware-lvm",
                "storageClassAliasName": null,
                "storageClassQuota": "1Gi",
                "num": null,
                "isLvmStorage": true
              },
              "containers": [
                {
                  "name": "redis-cluster",
                  "restartCount": null,
                  "state": null,
                  "startedAt": null,
                  "exitCode": null,
                  "signal": null,
                  "reason": null,
                  "message": null,
                  "finishedAt": null,
                  "images": null,
                  "ready": false
                },
                {
                  "name": "redis-exporter",
                  "restartCount": null,
                  "state": null,
                  "startedAt": null,
                  "exitCode": null,
                  "signal": null,
                  "reason": null,
                  "message": null,
                  "finishedAt": null,
                  "images": null,
                  "ready": false
                }
              ],
              "initContainers": [
                {
                  "name": "redis-init",
                  "restartCount": null,
                  "state": null,
                  "startedAt": null,
                  "exitCode": null,
                  "signal": null,
                  "reason": null,
                  "message": null,
                  "finishedAt": null,
                  "images": null,
                  "ready": false
                }
              ],
              "hasConfigBackup": false,
              "pvcs": [
                "redis-data-cc-0"
              ],
              "monitorResourceQuota": {
                "cpu": {
                  "total": 1.03,
                  "used": 0.02,
                  "usable": null,
                  "usage": 1.95,
                  "request": null
                },
                "memory": {
                  "total": 1.05,
                  "used": 0.01,
                  "usable": null,
                  "usage": 0.96,
                  "request": null
                },
                "storage": {
                  "total": 1,
                  "used": 0.01,
                  "usable": null,
                  "usage": 1,
                  "request": null
                }
              },
              "hostIp": "10.10.101.142"
            }
          ]
        }
      ],
      "pods": null
    }
  },
  "count": null,
  "errorStack": null
}