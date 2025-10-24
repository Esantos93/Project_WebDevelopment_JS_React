# npm-tutorial
tutorial version 6

1. Install Node.js version 22 or 23 using nvm (Node Version Manager)

If you don't have nvm installed, install it first by following the instructions at: https://www.nvmnode.com/guide/download.html

Then restart your terminal or run:
```
source ~/.zshrc
```

Install and use Node.js 22 (Node.js 23 works as well):
```
nvm install 22
nvm use 22
```

2. After checkout execute
```
npm install
```


3. Test the project using the command line below:
```
npm run test
```

You can also run tests for a specific tutorial week. For example, to run the tests for tutorial week 1, use the following command:
```
npm run test tw1
```

This command runs only the tests associated with tw1, allowing you to focus on that week's content.

/!\ All unit tests must be ran after every change, because changing code may break earlier test


4. To start your development server
```
npm run dev
```

In case of problems with npm, see (5) Docker below



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

6. To update to the most recent tests:
```
npm update @iprog/test
```



