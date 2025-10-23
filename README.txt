# npm-tutorial
tutorial version 6

1. install node, recent version (e.g. 17)

2. after checkout execute
```
npm install
```

To update to the most recent packages and tests:
```
npm update
```

3. to start your development server
```
npm run dev
```

In case of problems with npm, see (6) Docker below


4. Test the project using the command line below:
```
npm run test
```

You can also run tests for a specific tutorial week. For example, to run the tests for tutorial week 1, use the following command:
```
npm run test tw1
```

This command runs only the tests associated with tw1, allowing you to focus on that week's content.

/!\ All unit tests must be ran after every change, because changing code may break earlier test

5. Make sure that your function names and parameter names follow the **obligatory** [lab coding conventions](https://docs.google.com/presentation/d/1CtxiAG9mJ6kslSl6psBBlVDafFD4b2Rh2G7ft1GQ08o/edit#slide=id.g17644a78da5_0_174)

## Installation problems?
File [an issue](https://gits-15.sys.kth.se/iprog/issues).
In case you have problems with node, npm, webpack, you can use Docker to make a clean little "machine"

* Docker: https://docs.docker.com/get-docker/
* Docker-Compose: https://docs.docker.com/compose/install/

When you want to run the development server:
```
docker-compose up
```
(see the file `docker-compose.yml`) 

Note that running this command for the first time might take some time, since we have to download the image and install all the dependencies.

## Test result tracking 
Your test results are saved in a secured KTH database. We use this for three main purposes:

1) to identify students who struggle in the early stages of the course
2) to identify concepts that many students struggle with.
3) to conduct learning analytics research. For such purposes, all data is stored anonymoyusly.

To configure, locate the file "telemetry.config.json" in the root directory
- Track my test results: "full"  (default). In this case we will be albe to contact you if we notice that you get stuck.
- Track my test results without username: "anonymous". This still helps us see if many students get stuck at the same lab task.
- Don't track my test results: "none"

