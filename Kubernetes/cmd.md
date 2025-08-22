# To delete a context of a k8s cluster
## unset current context if it's pointing to GKE
kubectl config unset current-context

## delete the GKE context
kubectl config delete-context gke_useful-temple-468518-g0_us-central1_learning-k8s

## delete the GKE cluster
kubectl config delete-cluster gke_useful-temple-468518-g0_us-central1_learning-k8s

## delete the GKE user
kubectl config delete-user gke_useful-temple-468518-g0_us-central1_learning-k8s
