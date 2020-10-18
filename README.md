### google-cloud-build-postman

Cloud Functions is an event-driven serverless compute platform. Cloud Functions allows you to write your code without worrying about provisioning resources or scaling to handle changing requirements. This repository provide you a glimpse of

-   How to deploy your backend as [Cloud Functions in GCP](https://cloud.google.com/functions/)
-   Testing the cloud functions with [Postman](https://www.postman.com/) and [Newman](https://github.com/postmanlabs/newman)
-   Automate the deploying process with [Cloud Build](https://cloud.google.com/cloud-build)
-   Slack integration to get notification after each build

#### Steps to Deploy and Test

-   Signup to GCP, Its nearly free for a year!
-   Install the `gcloud` command line tool as per your operating system
-   Clone this repository
-   Install the dependencies

```bash
npm i
```

-   Run the backend locally to check everything works fine

```bash
npm start
```

-   if all runs well, navigate to the browser and open `http://localhost:8081/api/portfolio`. It should show the json response.

-   Stop the local service and deploy it to the GCP

```
gcloud beta functions deploy myWebsiteBackend --trigger-http --runtime nodejs10
```

-   Once the function got deployed you will receive the `endpoint` printed in the `console. Grab the endpoint

-   import the postman collection and environment [stored in the postman folder] into postman. Go to the environment and update the `url` you just received after deploying your function. Re-export the environment and update the file in the repo. This step sucks, I know. It should be automated.

-   Push this as a new repository in your own Github/any-other source code management space.

-   Create a trigger with installing [github Could Build App](https://github.com/marketplace/google-cloud-build) for your repository.

-   Now go to the [Cloud Build]() console and trigger the run or push a commit to your repo. You can see the magic happening.

#### More

Find more in this [ Medium Article](*)

#### Suggestions/PR

Any suggestions/PR top rectify flows is welcome!
