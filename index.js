const k8s = require('@kubernetes/client-node');

const run = async () => {
    const kc = new k8s.KubeConfig();
    kc.loadFromDefault();

    const k8sApi = kc.makeApiClient(k8s.CoreV1Api);


    const namespaces = await k8sApi.listNamespace();
    for (let ns of namespaces.body.items) {
        console.log(ns.metadata.name);
    }
}

run();