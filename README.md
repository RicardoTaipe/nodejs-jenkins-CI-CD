# Jenkins Pipeline
This Jenkins pipeline has three steps to test CI-CD on a nodejs application: 
- `Build` allows to clone repository and build application
- `Test` allows to test the application through `Mocka`.
- `Deploy` allows execute a script in order to deploy the application via `SSH` on a remote server.
Finally, you receive a notification from `Slack` if the pipeline's result was succesful.
![pipeline](https://user-images.githubusercontent.com/29106855/64560625-75bf8780-d30e-11e9-9bd8-b12b928bb104.PNG)

## Slack Notification
![slack jenkins](https://user-images.githubusercontent.com/29106855/64560727-a99aad00-d30e-11e9-8eb2-57452ba69f8b.PNG)
