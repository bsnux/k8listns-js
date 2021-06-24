const k8s = require('@kubernetes/client-node');

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

k8sApi.listNamespace()
  .then((res) => {
    for(let ns of res.body.items) {
      console.log(ns.metadata?.name);
    }
});