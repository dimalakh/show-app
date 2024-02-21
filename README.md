# shows-app
to run the app
```
npm run dev
```

## project description
1. For styling I decided to use tailwind css because it's easy to use and to set up, also because it allows to style fast.
2. Data fetching - I introduced ```Api``` class where I handle communication with TvmazeApi, with that solution I will be able to extend api functionality fast and without duplicating code.
Also I intoduced ```createApiHook``` function, that creates hooks out of Api methods, so in components I am able to use hooks witout calling methods form the class directly, because of that I also was alble to handle refetch logic inside of the hook.
In this part of app there is a lot of room for improvement as I haven't cleaed up my code there.
3. I also added unit tests for the components, I would like to add more, and especially for the ```createApiHook``` function.
4


## Screenshots
![Home page](images/img-1.png?raw=true "Home page desktop")

![Show page](images/img-2.png?raw=true "Show page desktop")

![Home page mobile](images/img-3.png?raw=true "Home page mobile")

![Show page mobile](images/img-4.png?raw=true "Show page mobile")