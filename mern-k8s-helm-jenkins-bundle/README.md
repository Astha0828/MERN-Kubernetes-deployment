# MERN Kubernetes + Helm + Jenkins bundle

This bundle includes:
- Dockerfile (backend & frontend)
- Raw Kubernetes manifests (k8s/)
- A templated Helm chart (helm-chart/mern-chart) with Ingress + optional TLS (cert-manager)
- Jenkinsfile for CI/CD that builds images, pushes to DockerHub and deploys the Helm chart

Steps
1. Configure cert-manager & ClusterIssuer
2. For Minikube:
   - minikube start
   - minikube addons enable ingress
   - helm upgrade --install mern-app helm-chart/mern-chart -n mern --create-namespace
3. For EKS/GKE: ensure kubeconfig is available to Jenkins and Helm can reach the cluster.
